#!/usr/bin/env python3
"""Converte un CSV di domande a risposta multipla nel formato di domande/banche.js.

Colonne attese (intestazione obbligatoria, ordine libero):
    materia, testo, a, b, c, d, corretta, spiegazione, fonte
dove `corretta` è la lettera dell'opzione giusta (A/B/C/D).
Le colonne `spiegazione` e `fonte` sono facoltative.

Esempio:
    python3 tools/converti.py domande.csv --id logica-2026 \
        --titolo "Logica — simulazione 1" --durata 60 --domande 30 \
        --punti-errata -0.25 --soglia 18 > domande/banche.js
"""
import argparse
import csv
import json
import sys

LETTERE = ["a", "b", "c", "d"]


def errore(msg):
    print(f"Errore: {msg}", file=sys.stderr)
    sys.exit(1)


def leggi(percorso):
    with open(percorso, newline="", encoding="utf-8-sig") as f:
        campione = f.read(4096)
        f.seek(0)
        try:
            dialetto = csv.Sniffer().sniff(campione, delimiters=",;\t")
        except csv.Error:
            dialetto = csv.excel
        righe = list(csv.DictReader(f, dialect=dialetto))
    if not righe:
        errore("il file CSV non contiene righe")
    intestazioni = {(h or "").strip().lower() for h in righe[0].keys()}
    mancanti = {"materia", "testo", *LETTERE, "corretta"} - intestazioni
    if mancanti:
        errore("colonne mancanti nel CSV: " + ", ".join(sorted(mancanti)))
    return righe


def converti(righe, prefisso):
    domande, visti, problemi = [], set(), []
    for n, riga in enumerate(righe, start=2):  # riga 1 = intestazione
        r = {(k or "").strip().lower(): (v or "").strip() for k, v in riga.items()}
        testo = r.get("testo", "")
        if not testo:
            problemi.append(f"riga {n}: testo della domanda vuoto")
            continue
        opzioni = [r.get(l, "") for l in LETTERE]
        if not all(opzioni):
            problemi.append(f"riga {n}: una o più opzioni sono vuote")
            continue
        lettera = r.get("corretta", "").lower()[:1]
        if lettera not in LETTERE:
            problemi.append(f"riga {n}: 'corretta' deve essere A, B, C o D (trovato: {r.get('corretta','')!r})")
            continue
        impronta = testo.lower()
        if impronta in visti:
            problemi.append(f"riga {n}: domanda duplicata, ignorata")
            continue
        visti.add(impronta)
        d = {
            "id": f"{prefisso}{len(domande) + 1:03d}",
            "materia": r.get("materia") or "Generale",
            "testo": testo.replace("\\n", "\n"),
            "opzioni": opzioni,
            "corretta": LETTERE.index(lettera),
        }
        if r.get("spiegazione"):
            d["spiegazione"] = r["spiegazione"]
        if r.get("fonte"):
            d["fonte"] = r["fonte"]
        domande.append(d)
    return domande, problemi


def main():
    p = argparse.ArgumentParser(description="Converte un CSV di domande in domande/banche.js")
    p.add_argument("csv", help="file CSV di partenza")
    p.add_argument("--id", default="banca", help="identificativo della banca (senza spazi)")
    p.add_argument("--titolo", default="Banca dati", help="titolo mostrato nel menu")
    p.add_argument("--descrizione", default="", help="riga di contesto")
    p.add_argument("--prefisso", default="Q", help="prefisso degli id delle domande")
    p.add_argument("--durata", type=int, default=60, help="durata della prova in minuti")
    p.add_argument("--domande", type=int, default=30, help="numero di domande della prova")
    p.add_argument("--punti-corretta", type=float, default=1.0)
    p.add_argument("--punti-errata", type=float, default=0.0)
    p.add_argument("--punti-omessa", type=float, default=0.0)
    p.add_argument("--soglia", type=float, default=None, help="punteggio minimo di superamento")
    a = p.parse_args()

    domande, problemi = converti(leggi(a.csv), a.prefisso)
    for msg in problemi:
        print("Attenzione: " + msg, file=sys.stderr)
    if not domande:
        errore("nessuna domanda valida trovata")

    banca = {
        "id": a.id,
        "titolo": a.titolo,
        "descrizione": a.descrizione,
        "esame": {
            "durataMinuti": a.durata,
            "numeroDomande": min(a.domande, len(domande)),
            "puntiCorretta": a.punti_corretta,
            "puntiErrata": a.punti_errata,
            "puntiOmessa": a.punti_omessa,
            "sogliaSufficienza": a.soglia,
        },
        "domande": domande,
    }
    print("/* Generato da tools/converti.py — non modificare a mano se rigeneri il file. */")
    print("window.BANCHE = " + json.dumps([banca], ensure_ascii=False, indent=2) + ";")
    print(f"{len(domande)} domande convertite.", file=sys.stderr)


if __name__ == "__main__":
    main()
