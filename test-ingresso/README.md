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

| Sezione | Che cosa fa |
| --- | --- |
| **Simulazione d'esame** | 30 domande in 30 minuti, estratte con i pesi del bando. Nessun aiuto durante la prova: la correzione arriva alla consegna, con punteggio ponderato e percentuali per materia. |
| **Allenamento libero** | Tutte le 293 domande in ordine casuale, filtrabili per materia, senza limite di tempo. Dopo ogni risposta compaiono soluzione e spiegazione. |
| **I miei errori** | L'elenco completo delle domande sbagliate, con la risposta giusta, la tua risposta, la spiegazione e la fonte. Si filtra per materia, si rimuove ciò che è acquisito e si può riallenarsi solo su quelle domande. |

## Come si usa

1. Scarica la cartella `test-ingresso/` e apri `index.html` nel browser (Chrome, Safari, Firefox).
2. Scegli una delle tre sezioni. La simulazione parte già impostata a 30 domande in 30 minuti; numero, tempo e materie restano modificabili.
3. Durante la prova: `1`–`4` (o `A`–`D`) per rispondere, `←` e `→` per spostarsi, `⚑ Segna`
   per marcare una domanda da rivedere, la *Mappa delle domande* per saltare dove serve.
   Le domande sbagliate finiscono automaticamente nella sezione **I miei errori**.
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
