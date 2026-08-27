# Preparazione al test d'ingresso

Sito per esercitarsi sul test di ammissione alla laurea magistrale in **Comunicazione
pubblica e d'impresa (COM, LM-59)** dell'Università degli Studi di Milano: domande a
risposta multipla con quattro opzioni, una sola corretta. Funziona offline, senza
installare nulla e senza account: basta aprire `index.html` con un doppio clic.

La prova si tiene **il 2 settembre 2026 alle 9.30, da remoto**, e verte su **teoria della
comunicazione, informatica, marketing, statistica e attualità**. Ogni risposta esatta vale
1 punto, quelle errate e quelle non date valgono 0: conviene rispondere sempre. Regole,
scadenze e pesi delle aree sono riassunti in [`BANDO.md`](BANDO.md).
La banca dati contiene **293 domande** su queste aree, ognuna con spiegazione e
riferimento al testo o al capitolo da cui deriva:

| Materia | Domande |
| --- | --- |
| Informatica (Snyder-Henry *Fluency*, Console et al.) | 78 |
| Statistica (Agresti-Finlay, Natale *La ricerca sociale*) | 75 |
| Teorie della comunicazione (Balbi, Magaudda) | 62 |
| Marketing (Kotler, Armstrong) | 46 |
| Inglese (per il test SLAM, fuori dalla prova) | 20 |
| Attualità e istituzioni | 12 |

**La simulazione d'esame rispetta i pesi del bando**: estrae le domande in proporzione
41,7% comunicazione, 16,7% informatica, 16,7% marketing, 16,7% statistica, 8,3% attualità,
ed esclude l'inglese. Il risultato mostra anche il punteggio ponderato con quei pesi.

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

## Materiale d'esame e cosa manca ancora

Bibliografia ufficiale, materie della prova e materiale ancora da recuperare sono in
[`COSA-SERVE.md`](COSA-SERVE.md).

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
