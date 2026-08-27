#!/usr/bin/env python3
"""Crea una versione del sito in un unico file HTML, comoda da inviare o pubblicare.

    python3 tools/costruisci-file-unico.py            # -> dist/test-ingresso.html
    python3 tools/costruisci-file-unico.py --corpo    # solo il contenuto, senza <html>/<head>

Va eseguito dalla cartella test-ingresso/.
"""
import argparse
import pathlib
import re
import sys

BASE = pathlib.Path(__file__).resolve().parent.parent


def leggi(rel):
    f = BASE / rel
    if not f.exists():
        sys.exit(f"File mancante: {f}")
    return f.read_text(encoding="utf-8")


def costruisci(solo_corpo=False):
    html = leggi("index.html")
    corpo = re.search(r"<body>(.*)</body>", html, re.S)
    if not corpo:
        sys.exit("index.html: <body> non trovato")
    corpo = corpo.group(1)
    # gli <script src> diventano codice inline, nello stesso ordine
    corpo = corpo.replace('<script src="domande/banche.js"></script>',
                          "<script>\n" + leggi("domande/banche.js") + "\n</script>")
    corpo = corpo.replace('<script src="app.js"></script>',
                          "<script>\n" + leggi("app.js") + "\n</script>")
    stile = "<style>\n" + leggi("style.css") + "\n</style>"
    testa = "<title>" + re.search(r"<title>(.*?)</title>", html, re.S).group(1) + "</title>\n" + stile
    if solo_corpo:
        return testa + corpo
    return ('<!DOCTYPE html>\n<html lang="it">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
            + testa + "\n</head>\n<body>" + corpo + "</body>\n</html>\n")


if __name__ == "__main__":
    a = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    a.add_argument("--corpo", action="store_true", help="genera solo titolo, stile e contenuto")
    a.add_argument("-o", "--output", default=None, help="file di destinazione")
    args = a.parse_args()
    out = pathlib.Path(args.output) if args.output else BASE / "dist" / ("corpo.html" if args.corpo else "test-ingresso.html")
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(costruisci(args.corpo), encoding="utf-8")
    print(f"Scritto {out} ({out.stat().st_size // 1024} KB)")
