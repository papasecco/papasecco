# Come si aggiungono le domande

Tutte le domande stanno in `domande/banche.js`. È un file di testo: si apre con qualsiasi
editor, si modifica e si salva. Nessuna installazione, nessun passaggio di compilazione.

## Struttura di una banca dati

```js
window.BANCHE = [
{
  id: "logica-2026",                 // identificativo univoco, senza spazi
  titolo: "Logica — prova ufficiale 2026",
  descrizione: "riga di contesto mostrata nel menu",
  esame: {
    durataMinuti: 60,
    numeroDomande: 30,
    puntiCorretta: 1,
    puntiErrata: -0.25,              // 0 se il bando non prevede penalità
    puntiOmessa: 0,
    sogliaSufficienza: 18            // null se non prevista
  },
  domande: [ /* … */ ]
}
];
```

Le banche sono un elenco: se ne possono mettere più di una (una per materia, una per
anno di simulazione) e si scelgono dal menu a tendina prima di iniziare la prova.

## Struttura di una domanda

```js
{
  id: "LOG01",                       // univoco dentro la banca
  materia: "Logica",                 // raggruppa le domande e le statistiche
  testo: "Completa la serie: 2, 6, 12, 20, 30, ?",
  opzioni: ["36", "40", "42", "44"],
  corretta: 2,                       // INDICE, non lettera: 0=A, 1=B, 2=C, 3=D
  spiegazione: "Le differenze sono 4, 6, 8, 10: la successiva è 12.",
  fonte: "Manuale X, cap. 3"         // facoltativo
}
```

Attenzione a tre cose soltanto:
1. `corretta` è l'**indice** dell'opzione giusta, e si conta da 0.
2. Ogni domanda va chiusa con una virgola, tranne l'ultima dell'elenco.
3. Per andare a capo dentro `testo` si scrive `\n` (utile per i brani di comprensione).

## Conversione automatica da CSV

Se le domande sono già in un foglio di calcolo, si esporta in CSV con queste colonne:

```
materia,testo,a,b,c,d,corretta,spiegazione,fonte
```

dove `corretta` è la lettera (A, B, C o D). Poi:

```bash
python3 tools/converti.py domande.csv --id mia-banca --titolo "Simulazione 1" > domande/banche.js
```

Lo script controlla anche gli errori più comuni (opzioni mancanti, lettera corretta non valida,
domande duplicate) e li segnala prima di scrivere il file.
