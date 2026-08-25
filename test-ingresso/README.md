# Preparazione al test d'ingresso

Sito per esercitarsi su un test di ammissione a risposta multipla (quattro opzioni,
una sola corretta). Funziona offline, senza installare nulla e senza account: basta
aprire `index.html` con un doppio clic.

## Le tre modalità

| Modalità | A cosa serve |
| --- | --- |
| **Simulazione d'esame** | Prova cronometrata con il punteggio e la soglia del bando reale. Nessun aiuto durante la prova: la correzione arriva alla consegna. |
| **Allenamento per materia** | Risposta esatta e spiegazione subito dopo ogni domanda, senza limite di tempo. Si sceglie su quali materie lavorare. |
| **Ripasso degli errori** | Ripropone solo le domande sbagliate in passato; una domanda esce dall'elenco dopo due risposte esatte consecutive. |

## Come si usa

1. Scarica la cartella `test-ingresso/` e apri `index.html` nel browser (Chrome, Safari, Firefox).
2. Scegli la modalità, la banca dati, le materie, quante domande e quanto tempo.
3. Durante la prova: `1`–`4` (o `A`–`D`) per rispondere, `←` e `→` per spostarsi, `⚑ Segna`
   per marcare una domanda da rivedere, la *Mappa delle domande* per saltare dove serve.
4. Alla consegna: punteggio, esito rispetto alla soglia, percentuale per materia e
   revisione di tutte le domande con le spiegazioni.

Storico, punti deboli ed errori da recuperare restano salvati nel browser (`Statistiche`).
Se una prova viene interrotta, la home propone di riprenderla dal punto in cui era rimasta.

## Come si aggiungono le domande

Tutto il contenuto sta in `domande/banche.js`, un file di testo modificabile a mano:
formato e regole in [`domande/MODELLO.md`](domande/MODELLO.md). Se le domande sono già in
un foglio di calcolo, `tools/converti.py` le trasforma nel formato giusto partendo da un CSV.

Le regole della prova (durata, punti per risposta esatta ed errata, soglia di superamento)
si impostano nel blocco `esame` di ogni banca dati, così la simulazione rispecchia il bando.

## Che materiale serve per test realistici

L'elenco è in [`COSA-SERVE.md`](COSA-SERVE.md): bando, programma, testi in programma ed
eventuali prove degli anni precedenti.

## Pubblicare il sito online (facoltativo)

Sono file statici: si possono caricare su GitHub Pages, Netlify o qualunque hosting.
Con GitHub Pages, impostando la pubblicazione dalla cartella del repository, il sito
risponde all'indirizzo `.../test-ingresso/`.

## Struttura

```
test-ingresso/
├── index.html          interfaccia
├── style.css           stile (tema chiaro e scuro)
├── app.js              logica di prova, punteggio, statistiche
├── domande/
│   ├── banche.js       LE DOMANDE — è qui che si lavora
│   └── MODELLO.md      formato e istruzioni
├── tools/converti.py   conversione da CSV
└── COSA-SERVE.md       materiale da raccogliere
```
