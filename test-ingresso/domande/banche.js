/* ============================================================================
   BANCHE DATI — Prova di ammissione alla laurea magistrale
   Comunicazione pubblica e d'impresa (COM, LM-59 R), Università degli Studi di Milano
   Anno accademico 2026/2027 — bando Rep.Reg. 0011372/26 del 24/03/2026

   COME FUNZIONA LA PROVA (art. 5 del bando)
     - 2 settembre 2026, ore 9:30, da remoto; in italiano o in inglese, a scelta.
     - Questionario a risposta chiusa su: teoria della comunicazione, informatica,
       marketing, statistica, attualità.
     - Punteggio: +1 per ogni risposta esatta, 0 per ogni risposta errata o non data.
       Nessuna penalità: conviene rispondere sempre.
     - Pesi nella graduatoria: voto di laurea (o media esami) 40%, teoria della
       comunicazione 25%, informatica 10%, marketing 10%, statistica 10%, attualità 5%.
       Sul solo test i pesi valgono quindi 41,7% / 16,7% / 16,7% / 16,7% / 8,3%.
     - In caso di parità precede chi ha il punteggio più alto nel test, poi il più giovane.

   L'INGLESE NON FA PARTE DELLA PROVA: il livello B2 è requisito d'accesso, verificato
   con certificazione oppure con il test SLAM del 24 settembre 2026. Le domande di
   inglese restano nella banca dati come allenamento, ma sono escluse dalle simulazioni.

   Testi indicati dal bando (edizione italiana):
     - Kotler, Armstrong, Principi di marketing, Pearson (edizione recente)
     - Balbi, Magaudda, Storia dei media digitali, Laterza, 2014
     - Snyder, Henry, Amoroso, Fluency. Conoscere e usare l'informatica, Pearson, 7ª ed.
     - Agresti, Finlay, Metodi statistici di base e avanzati per le scienze sociali, Pearson, 2020
     - Attualità: lettura regolare dei quotidiani e dei media informativi

   Alcune domande derivano inoltre dagli appunti usati per le edizioni precedenti della
   prova, che indicavano altri testi: McQuail (Sociologia dei media), Console e altri
   (Introduzione all'informatica) e Natale (La ricerca sociale). Gli argomenti restano
   pertinenti alle stesse aree d'esame.

   Numero di domande e durata non sono indicati dal bando: la simulazione usa 30 domande
   in 30 minuti, e i due valori si possono cambiare liberamente.
   Formato delle domande: vedi domande/MODELLO.md
   ========================================================================== */

window.BANCHE = [
{
  id: "com-unimi",
  titolo: "COM Unimi 2026/27 — banca d'esame",
  descrizione: "teoria della comunicazione, informatica, marketing, statistica, attualità (più inglese per il test SLAM)",
  esame: {
    data: "2026-09-02T09:30",
    durataMinuti: 30, numeroDomande: 30,
    puntiCorretta: 1, puntiErrata: 0, puntiOmessa: 0, sogliaSufficienza: null,
    // pesi ufficiali delle aree del test (art. 5 del bando)
    pesi: {
      "Teorie della comunicazione": 25,
      "Informatica": 10,
      "Marketing": 10,
      "Statistica": 10,
      "Attualità e istituzioni": 5
    },
    pesoTitolo: 40   // voto di laurea o media esami, fuori dal test
  },
  domande: [

  /* ================= MARKETING (Kotler, Armstrong) ================= */
  { id:"MKT01", materia:"Marketing", testo:"Quale elemento NON fa parte del marketing mix tradizionale (le «quattro P»)?",
    opzioni:["Personale","Promozione","Prodotto","Prezzo"], corretta:0,
    spiegazione:"Le quattro P sono product, price, place e promotion. Personale (people), processi e physical evidence appartengono al mix esteso a sette P, usato per i servizi.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT02", materia:"Marketing", testo:"Nel modello STP, che cosa indica la fase di «positioning»?",
    opzioni:["Scegliere i segmenti su cui l'impresa vuole competere","Collocare l'offerta nella mente del consumatore rispetto ai concorrenti","Stabilire il prezzo di vendita rispetto ai costi","Dividere il mercato in gruppi omogenei di consumatori"], corretta:1,
    spiegazione:"Segmentation divide il mercato, targeting sceglie i segmenti, positioning definisce la posizione distintiva che il prodotto deve occupare nella percezione del consumatore rispetto alla concorrenza.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT03", materia:"Marketing", testo:"Nell'analisi SWOT, «opportunità» e «minacce» riguardano:",
    opzioni:["Esclusivamente i concorrenti diretti","Il solo andamento delle vendite","L'ambiente esterno all'impresa","Le risorse interne dell'impresa"], corretta:2,
    spiegazione:"Punti di forza e di debolezza descrivono fattori interni; opportunità e minacce descrivono fattori esterni (mercato, tecnologia, normativa, concorrenza).",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT04", materia:"Marketing", testo:"Che cosa distingue il «marketing concept» dal «selling concept»?",
    opzioni:["Il marketing concept riguarda solo i beni di lusso","Il selling concept si applica ai soli mercati esteri","Non c'è differenza sostanziale fra i due","Il marketing concept parte dai bisogni del cliente, il selling concept dai prodotti già realizzati"], corretta:3,
    spiegazione:"Il selling concept parte dal prodotto esistente e punta a venderlo con azioni di vendita e promozione; il marketing concept parte dai bisogni del mercato obiettivo per costruire l'offerta.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT05", materia:"Marketing", testo:"Nella fase di maturità del ciclo di vita del prodotto ci si aspetta tipicamente:",
    opzioni:["Rallentamento della crescita delle vendite e forte pressione competitiva","Vendite nulle e costi di sviluppo elevati","Un aumento costante dei margini unitari","Vendite in forte accelerazione e concorrenza assente"], corretta:0,
    spiegazione:"Nella maturità il tasso di crescita delle vendite rallenta, il mercato è affollato e i margini tendono a comprimersi: l'impresa difende la quota con differenziazione, promozioni o modifiche del prodotto.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT06", materia:"Marketing", testo:"Il customer lifetime value (CLV) misura:",
    opzioni:["Il numero di clienti persi in un anno","Il valore dell'intero flusso di acquisti che un cliente genera nel corso della relazione","Il costo medio per acquisire un nuovo cliente","La quota di mercato dell'impresa"], corretta:1,
    spiegazione:"Il CLV è il valore attuale dei margini generati da un cliente lungo tutta la durata della relazione: giustifica investimenti in fidelizzazione superiori al margine del singolo acquisto.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT07", materia:"Marketing", testo:"Che cos'è la brand equity?",
    opzioni:["Il fatturato annuo generato dal marchio","Il costo sostenuto per registrare il marchio","Il valore differenziale che la conoscenza della marca aggiunge al prodotto e alle risposte del consumatore","Il numero di punti vendita in cui la marca è distribuita"], corretta:2,
    spiegazione:"La brand equity è l'effetto differenziale della conoscenza della marca sulle reazioni del consumatore: a parità di prodotto, una marca forte ottiene preferenza, disponibilità a pagare e fedeltà maggiori.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT08", materia:"Marketing", testo:"Una strategia di «market penetration pricing» consiste nel:",
    opzioni:["Fissare il prezzo uguale a quello del leader di mercato","Differenziare il prezzo per area geografica","Lanciare il prodotto a prezzo alto per massimizzare i margini sui primi acquirenti","Lanciare il prodotto a prezzo basso per conquistare rapidamente quote di mercato"], corretta:3,
    spiegazione:"Il penetration pricing punta su un prezzo iniziale basso per attrarre volumi e quote; la strategia opposta è il market skimming, che parte da un prezzo alto per i segmenti meno sensibili al prezzo.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT09", materia:"Marketing", testo:"Nella ricerca di mercato, i dati secondari sono:",
    opzioni:["Dati già esistenti, raccolti in precedenza per altri scopi","Dati di natura esclusivamente qualitativa","Dati raccolti solo tramite interviste in profondità","Dati raccolti appositamente per il problema di ricerca in esame"], corretta:0,
    spiegazione:"I dati secondari (statistiche pubbliche, ricerche già svolte, archivi aziendali) esistono già e costano meno; i dati primari sono raccolti ex novo per lo specifico obiettivo di ricerca.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT10", materia:"Marketing", testo:"Fornitori, intermediari commerciali e clienti fanno parte:",
    opzioni:["Del solo ambiente tecnologico","Del microambiente dell'impresa","Del macroambiente dell'impresa","Dell'ambiente demografico"], corretta:1,
    spiegazione:"Il microambiente comprende gli attori vicini all'impresa che ne influenzano la capacità di servire i clienti; il macroambiente comprende le forze più ampie: demografiche, economiche, naturali, tecnologiche, politiche e culturali.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT11", materia:"Marketing", testo:"Nel modello delle cinque forze competitive di Porter NON rientra:",
    opzioni:["La minaccia di prodotti sostitutivi","La minaccia di nuovi entranti","La struttura organizzativa interna dell'impresa","Il potere contrattuale dei fornitori"], corretta:2,
    spiegazione:"Le cinque forze sono: concorrenti diretti, nuovi entranti, prodotti sostitutivi, potere dei fornitori e potere dei clienti. L'organizzazione interna riguarda l'analisi delle risorse, non la struttura del settore." },

  { id:"MKT12", materia:"Marketing", testo:"La value proposition di una marca è:",
    opzioni:["Il prezzo minimo praticabile senza perdite","La somma degli investimenti pubblicitari annui","La descrizione tecnica del processo produttivo","L'insieme dei benefici promessi al cliente, che motivano la scelta di quella marca"], corretta:3,
    spiegazione:"La value proposition risponde alla domanda «perché comprare da noi e non dai concorrenti»: è l'insieme dei benefici e dei valori promessi al segmento obiettivo.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT13", materia:"Marketing", testo:"La dissonanza cognitiva post-acquisto si manifesta:",
    opzioni:["Dopo l'acquisto, come disagio legato ai vantaggi delle alternative scartate","Solo negli acquisti di prodotti a basso coinvolgimento","Esclusivamente nei mercati business to business","Prima della decisione, nella fase di ricerca di informazioni"], corretta:0,
    spiegazione:"Dopo un acquisto impegnativo il consumatore può percepire disagio pensando ai benefici delle alternative non scelte: le imprese lo riducono con comunicazione post-vendita, garanzie e assistenza.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT14", materia:"Marketing", testo:"Nel marketing dei servizi, le tre P aggiuntive rispetto al mix tradizionale sono:",
    opzioni:["Performance, planning, profit","People, process, physical evidence","Price, place, promotion","Positioning, packaging, publicity"], corretta:1,
    spiegazione:"Poiché i servizi sono intangibili e prodotti in presenza del cliente, il mix si estende a persone, processi di erogazione ed elementi tangibili che rendono percepibile la qualità.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT15", materia:"Marketing", testo:"Un'impresa che sceglie una strategia di marketing indifferenziato (di massa):",
    opzioni:["Si concentra su un solo segmento di nicchia","Personalizza il prodotto per il singolo cliente","Propone un'offerta unica all'intero mercato, ignorando le differenze fra segmenti","Sviluppa un'offerta specifica per ciascun segmento identificato"], corretta:2,
    spiegazione:"Il marketing indifferenziato punta su ciò che i consumatori hanno in comune con un'unica offerta; differenziato, concentrato e micromarketing rappresentano livelli crescenti di adattamento ai segmenti.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  /* ================= STATISTICA (Agresti, Finlay) ================= */
  { id:"STA01", materia:"Statistica", testo:"Il titolo di studio, rilevato come «licenza media, diploma, laurea», è una variabile misurata su scala:",
    opzioni:["A intervalli","Di rapporti","Nominale","Ordinale"], corretta:3,
    spiegazione:"Le modalità hanno un ordine naturale ma le distanze fra loro non sono quantificabili: è una scala ordinale.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA02", materia:"Statistica", testo:"In una distribuzione con asimmetria positiva (coda a destra), di norma:",
    opzioni:["La media è maggiore della mediana","La media è minore della mediana","Media e mediana coincidono sempre","La mediana è maggiore del valore massimo"], corretta:0,
    spiegazione:"I valori estremi della coda destra spostano la media verso l'alto, mentre la mediana resta ancorata al centro dell'ordinamento: per questo la mediana descrive meglio i redditi.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA03", materia:"Statistica", testo:"L'errore standard della media, all'aumentare della numerosità campionaria:",
    opzioni:["Aumenta proporzionalmente a n","Diminuisce, perché è pari a s diviso la radice di n","Resta costante","Diventa uguale alla varianza"], corretta:1,
    spiegazione:"L'errore standard vale s/√n: campioni più grandi producono stime più precise, ma con rendimenti decrescenti (per dimezzarlo occorre quadruplicare n).",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA04", materia:"Statistica", testo:"Qual è l'interpretazione corretta di un intervallo di confidenza al 95%?",
    opzioni:["Il 95% delle osservazioni cade dentro l'intervallo","Il parametro ha probabilità 95% di essere il valore centrale","Se ripetessimo il campionamento molte volte, il 95% degli intervalli così costruiti conterrebbe il parametro","Il campione è rappresentativo nel 95% dei casi"], corretta:2,
    spiegazione:"La confidenza riguarda la procedura, non il singolo intervallo: nel 95% dei campioni ripetuti l'intervallo costruito con quel metodo contiene il vero valore del parametro.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA05", materia:"Statistica", testo:"Il p-value di un test statistico indica:",
    opzioni:["La dimensione dell'effetto osservato","La probabilità di commettere un errore di secondo tipo","La probabilità che l'ipotesi nulla sia vera","La probabilità di osservare un risultato estremo almeno quanto quello ottenuto, supponendo vera l'ipotesi nulla"], corretta:3,
    spiegazione:"Il p-value è calcolato assumendo vera H0 e misura quanto i dati osservati sarebbero improbabili sotto quell'ipotesi; non è la probabilità che H0 sia vera né una misura dell'ampiezza dell'effetto.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA06", materia:"Statistica", testo:"Si commette un errore di primo tipo quando:",
    opzioni:["Si rifiuta l'ipotesi nulla mentre è vera","Non si rifiuta l'ipotesi nulla mentre è falsa","Si sceglie un campione troppo piccolo","Si usa un test a due code invece che a una coda"], corretta:0,
    spiegazione:"L'errore di primo tipo è il «falso positivo» e la sua probabilità è il livello di significatività α; l'errore di secondo tipo è non rifiutare un'ipotesi nulla falsa.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA07", materia:"Statistica", testo:"Con un livello di significatività fissato a 0,05 e un p-value osservato pari a 0,03, la decisione corretta è:",
    opzioni:["Non rifiutare l'ipotesi nulla","Rifiutare l'ipotesi nulla","Accettare l'ipotesi nulla come dimostrata","Ripetere il test finché il p-value supera 0,05"], corretta:1,
    spiegazione:"Poiché 0,03 è inferiore ad α = 0,05, il risultato è statisticamente significativo e si rifiuta H0. Va detto «rifiutare», non «accettare»: un test non dimostra mai l'ipotesi nulla.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA08", materia:"Statistica", testo:"Il coefficiente di correlazione di Pearson può assumere valori:",
    opzioni:["Qualsiasi valore reale","Da 0 a 1","Da −1 a +1","Da −100 a +100"], corretta:2,
    spiegazione:"r varia fra −1 e +1: il segno indica la direzione della relazione lineare, il valore assoluto la sua intensità. Vale 0 in assenza di relazione lineare.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA09", materia:"Statistica", testo:"In un campionamento casuale stratificato:",
    opzioni:["Si intervistano le persone più facilmente raggiungibili","Si sceglie un solo gruppo e lo si osserva integralmente","Si estraggono unità a caso dall'intera popolazione senza distinzioni","Si divide la popolazione in gruppi omogenei e si estrae un campione casuale da ciascuno"], corretta:3,
    spiegazione:"La stratificazione divide la popolazione in strati omogenei rispetto a una caratteristica rilevante ed estrae da ognuno: garantisce la rappresentanza di tutti i sottogruppi e riduce l'errore di stima.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA10", materia:"Statistica", testo:"In una distribuzione normale, quale percentuale approssimativa dei casi cade entro due deviazioni standard dalla media?",
    opzioni:["Circa il 95%","Circa il 99,9%","Circa il 50%","Circa il 68%"], corretta:0,
    spiegazione:"Per la regola empirica: circa il 68% entro una deviazione standard, circa il 95% entro due, circa il 99,7% entro tre.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA11", materia:"Statistica", testo:"In una regressione lineare semplice Y = a + bX, il coefficiente b indica:",
    opzioni:["Il valore atteso di Y quando X è pari a zero","La variazione attesa di Y per un aumento unitario di X","La quota di varianza spiegata dal modello","La correlazione fra X e Y espressa in percentuale"], corretta:1,
    spiegazione:"b è la pendenza della retta: quantifica di quanto varia in media Y all'aumentare di X di un'unità. L'intercetta a è il valore atteso di Y quando X vale zero.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA12", materia:"Statistica", testo:"Si osserva una forte associazione fra vendite di gelati e numero di annegamenti. L'interpretazione statisticamente corretta è:",
    opzioni:["La correlazione osservata dimostra un nesso causale inverso","I gelati causano gli annegamenti","Esiste una variabile di confondimento, la temperatura, associata a entrambi","L'associazione è certamente dovuta al caso"], corretta:2,
    spiegazione:"È il caso classico di associazione spuria: una terza variabile (il caldo) influenza entrambi i fenomeni. La correlazione non implica causalità.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA13", materia:"Statistica", testo:"Per verificare l'associazione fra due variabili categoriali si usa in genere:",
    opzioni:["Il test t per campioni appaiati","L'analisi della varianza a una via","La regressione lineare semplice","Il test chi quadrato"], corretta:3,
    spiegazione:"Il chi quadrato confronta le frequenze osservate nella tabella di contingenza con quelle attese in caso di indipendenza fra le due variabili categoriali.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA14", materia:"Statistica", testo:"Rispetto alla media, la mediana è:",
    opzioni:["Meno sensibile ai valori anomali","Calcolabile solo su variabili nominali","Sempre uguale alla moda","Più sensibile ai valori anomali"], corretta:0,
    spiegazione:"La mediana dipende dalla posizione dei valori nell'ordinamento e non dalla loro grandezza: un singolo valore estremo la sposta poco, mentre trascina la media.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA15", materia:"Statistica", testo:"In un sondaggio, l'errore di copertura si verifica quando:",
    opzioni:["Si utilizza un campione probabilistico","La lista da cui si estrae il campione non rappresenta l'intera popolazione obiettivo","Alcuni intervistati rispondono in modo non sincero","Il questionario contiene troppe domande aperte"], corretta:1,
    spiegazione:"L'errore di copertura nasce dalla lista di campionamento (per esempio un elenco telefonico che esclude chi non ha telefono fisso); è distinto dall'errore campionario, dalla mancata risposta e dall'errore di misurazione.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  /* ================= INFORMATICA (Snyder, Henry) ================= */
  { id:"INF01", materia:"Informatica", testo:"Quanti bit compongono un byte?",
    opzioni:["1024","4","8","16"], corretta:2,
    spiegazione:"Un byte è formato da 8 bit e può rappresentare 2⁸ = 256 valori distinti.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF02", materia:"Informatica", testo:"Il numero binario 1010 corrisponde, in base dieci, a:",
    opzioni:["12","20","8","10"], corretta:3,
    spiegazione:"Da sinistra: 1×8 + 0×4 + 1×2 + 0×1 = 10.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF03", materia:"Informatica", testo:"Qual è la differenza fondamentale fra memoria RAM e disco fisso?",
    opzioni:["La RAM è volatile e perde i dati allo spegnimento, il disco li conserva","La RAM conserva i dati in modo permanente, il disco no","La RAM è sempre più capiente del disco","Non c'è differenza: sono due nomi per la stessa memoria"], corretta:0,
    spiegazione:"La RAM è memoria di lavoro volatile e molto veloce; il disco (o SSD) è memoria di massa persistente, più lenta e più capiente.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF04", materia:"Informatica", testo:"Nella costruzione di una pagina web, qual è il ruolo del CSS?",
    opzioni:["Definire la struttura e il contenuto della pagina","Definire la presentazione: colori, caratteri, disposizione degli elementi","Gestire il database del sito","Cifrare i dati trasmessi al server"], corretta:1,
    spiegazione:"HTML descrive struttura e contenuto, CSS la presentazione, JavaScript il comportamento interattivo: è la separazione fra contenuto, forma e logica.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF05", materia:"Informatica", testo:"Che cosa fa il sistema DNS?",
    opzioni:["Assegna la banda disponibile agli utenti","Memorizza le password degli utenti","Traduce i nomi di dominio negli indirizzi IP corrispondenti","Cifra il traffico fra browser e server"], corretta:2,
    spiegazione:"Il Domain Name System funziona come un elenco telefonico della rete: converte nomi leggibili come unimi.it nell'indirizzo IP numerico del server.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF06", materia:"Informatica", testo:"Rispetto a HTTP, il protocollo HTTPS:",
    opzioni:["Funziona soltanto sulle reti aziendali","Elimina la necessità di autenticarsi","Trasferisce i dati più velocemente","Cifra la comunicazione fra browser e server tramite TLS"], corretta:3,
    spiegazione:"La «S» sta per secure: HTTPS incapsula HTTP in una connessione cifrata TLS, che protegge riservatezza e integrità dei dati e autentica il server tramite certificato.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF07", materia:"Informatica", testo:"Quale delle seguenti è una compressione con perdita di informazione (lossy)?",
    opzioni:["JPEG","FLAC","ZIP","PNG"], corretta:0,
    spiegazione:"JPEG scarta informazione visiva poco percepibile e non è reversibile; ZIP, PNG e FLAC sono formati di compressione senza perdita.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF08", materia:"Informatica", testo:"In un database relazionale, la chiave primaria di una tabella:",
    opzioni:["Può assumere lo stesso valore in più record","Identifica in modo univoco ciascun record","Contiene la password di accesso alla tabella","Indica l'ordine di visualizzazione dei dati"], corretta:1,
    spiegazione:"La chiave primaria identifica univocamente ogni riga: non ammette duplicati né valori nulli, ed è ciò a cui si collegano le chiavi esterne delle altre tabelle.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF09", materia:"Informatica", testo:"Che cos'è un algoritmo?",
    opzioni:["Un tipo di file compresso","Un linguaggio di programmazione","Una sequenza finita e non ambigua di istruzioni che porta alla soluzione di un problema","Un componente fisico del calcolatore"], corretta:2,
    spiegazione:"Un algoritmo è la procedura, indipendente dal linguaggio con cui viene poi scritta, che a partire dagli input produce l'output in un numero finito di passi definiti in modo non ambiguo.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF10", materia:"Informatica", testo:"Nel modello «software as a service» (SaaS) del cloud computing, l'utente:",
    opzioni:["Deve programmare l'applicazione da zero","Riceve solo spazio di archiviazione, senza applicazioni","Acquista il software su licenza e lo installa sui propri server","Usa via internet un'applicazione ospitata e gestita dal fornitore"], corretta:3,
    spiegazione:"Nel SaaS l'applicazione gira sull'infrastruttura del fornitore e si usa dal browser, con manutenzione e aggiornamenti a suo carico; IaaS fornisce infrastruttura, PaaS piattaforme di sviluppo.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  /* ============ TEORIE DELLA COMUNICAZIONE E STORIA DEI MEDIA ============ */
  { id:"COM01", materia:"Teorie della comunicazione", testo:"Nel modello matematico della comunicazione di Shannon e Weaver, il «rumore» è:",
    opzioni:["Qualunque disturbo che interferisce con la trasmissione del segnale","La risposta del destinatario alla fonte","Il canale scelto per la trasmissione","Il messaggio inviato dalla fonte"], corretta:0,
    spiegazione:"Il rumore è ogni elemento che degrada il segnale fra trasmittente e ricevente; il modello è lineare e tecnico, ed è stato criticato proprio per l'assenza di contesto e di feedback.",
    fonte:"Teorie della comunicazione" },

  { id:"COM02", materia:"Teorie della comunicazione", testo:"La formula «Chi dice che cosa, attraverso quale canale, a chi, con quale effetto» si deve a:",
    opzioni:["Elisabeth Noelle-Neumann","Harold Lasswell","Marshall McLuhan","Paul Lazarsfeld"], corretta:1,
    spiegazione:"È la formula di Lasswell (1948), che scompone il processo comunicativo in cinque elementi e altrettanti ambiti di ricerca: emittente, contenuto, mezzo, pubblico ed effetti.",
    fonte:"Teorie della comunicazione" },

  { id:"COM03", materia:"Teorie della comunicazione", testo:"Secondo la teoria dell'agenda setting di McCombs e Shaw, i media:",
    opzioni:["Agiscono solo sulle minoranze politicamente attive","Determinano direttamente le opinioni del pubblico","Influenzano l'importanza attribuita ai temi, cioè su che cosa il pubblico pensa","Non hanno alcun effetto sul pubblico"], corretta:2,
    spiegazione:"L'agenda setting sostiene che i media non dicono al pubblico che cosa pensare, ma su che cosa pensare: la rilevanza data a un tema nella copertura si trasferisce alla percezione della sua importanza.",
    fonte:"Teorie della comunicazione" },

  { id:"COM04", materia:"Teorie della comunicazione", testo:"La teoria del «flusso di comunicazione a due fasi» (two-step flow) sostiene che:",
    opzioni:["Gli effetti dei media si manifestano solo nel lungo periodo","La comunicazione interpersonale non ha alcun ruolo","I messaggi dei media raggiungono tutti gli individui allo stesso modo e con lo stesso effetto","I messaggi passano dai media agli opinion leader e da questi al resto del pubblico"], corretta:3,
    spiegazione:"Lazarsfeld, Berelson e Gaudet, studiando le campagne elettorali, individuano il ruolo di mediazione degli opinion leader: la relazione interpersonale filtra e rielabora il messaggio mediale.",
    fonte:"Teorie della comunicazione" },

  { id:"COM05", materia:"Teorie della comunicazione", testo:"La «spirale del silenzio» di Elisabeth Noelle-Neumann descrive:",
    opzioni:["La tendenza a tacere la propria opinione quando la si percepisce minoritaria","L'aumento del rumore informativo nei media digitali","La perdita di memoria collettiva degli eventi","La riduzione progressiva dei tempi di attenzione"], corretta:0,
    spiegazione:"Per timore dell'isolamento sociale chi si percepisce in minoranza tende a non esprimersi: il silenzio rafforza la percezione della maggioranza, innescando una spirale cumulativa.",
    fonte:"Teorie della comunicazione" },

  { id:"COM06", materia:"Teorie della comunicazione", testo:"L'approccio «usi e gratificazioni» (uses and gratifications) sposta l'attenzione:",
    opzioni:["Dal pubblico agli assetti proprietari delle imprese mediali","Da ciò che i media fanno alle persone a ciò che le persone fanno con i media","Dagli effetti a lungo termine a quelli immediati","Dalla ricerca empirica alla speculazione filosofica"], corretta:1,
    spiegazione:"Il pubblico è considerato attivo: seleziona i media per soddisfare bisogni di informazione, identità personale, relazione e intrattenimento.",
    fonte:"Teorie della comunicazione" },

  { id:"COM07", materia:"Teorie della comunicazione", testo:"La cosiddetta «teoria ipodermica» (bullet theory) presuppone:",
    opzioni:["Effetti mediali limitati e mediati dai gruppi sociali","L'assenza di qualunque effetto misurabile","Un pubblico passivo su cui il messaggio agisce in modo diretto e uniforme","Un pubblico che negozia attivamente i significati"], corretta:2,
    spiegazione:"Formulata nel periodo fra le due guerre e legata alla società di massa, immagina il messaggio come un'iniezione che produce lo stesso effetto su tutti; le ricerche successive la ridimensionano.",
    fonte:"Teorie della comunicazione" },

  { id:"COM08", materia:"Teorie della comunicazione", testo:"Secondo la teoria della coltivazione di George Gerbner, l'esposizione prolungata alla televisione:",
    opzioni:["Produce effetti solo su chi guarda notiziari","Riduce il consenso verso le istituzioni","Non modifica la percezione della realtà","Costruisce nel tempo una visione del mondo coerente con quella rappresentata dai programmi"], corretta:3,
    spiegazione:"La coltivazione riguarda effetti cumulativi e di lungo periodo: i forti consumatori tendono ad esempio a sovrastimare i rischi di criminalità, secondo la «sindrome del mondo cattivo».",
    fonte:"Teorie della comunicazione" },

  { id:"COM09", materia:"Teorie della comunicazione", testo:"L'affermazione «il medium è il messaggio» significa che:",
    opzioni:["La forma del mezzo modifica di per sé percezione ed esperienza sociale, al di là dei contenuti","Ogni mezzo trasmette necessariamente messaggi pubblicitari","I mezzi di comunicazione sono neutrali rispetto ai contenuti","Il contenuto trasmesso è l'unico elemento rilevante"], corretta:0,
    spiegazione:"Per Marshall McLuhan il cambiamento sociale prodotto da un mezzo dipende dalla sua forma e dalla scala che introduce nelle relazioni umane, non dal contenuto veicolato.",
    fonte:"Teorie della comunicazione" },

  { id:"COM10", materia:"Teorie della comunicazione", testo:"Il World Wide Web fu ideato alla fine degli anni Ottanta al CERN di Ginevra da:",
    opzioni:["Bill Gates","Tim Berners-Lee","Steve Jobs","Vinton Cerf"], corretta:1,
    spiegazione:"Tim Berners-Lee formulò la proposta nel 1989 e sviluppò HTTP, HTML e il primo browser: il Web è un servizio che gira su internet, non coincide con internet stessa.",
    fonte:"Balbi, Magaudda, A History of Digital Media" },

  { id:"COM11", materia:"Teorie della comunicazione", testo:"ARPANET, rete antenata di internet, entrò in funzione:",
    opzioni:["Nel 1995, con la nascita dei primi motori di ricerca","Nel 1948, negli studi dei Bell Labs","Nel 1969, in un progetto finanziato dal Dipartimento della Difesa statunitense","Nel 1989, al CERN"], corretta:2,
    spiegazione:"I primi collegamenti fra i nodi universitari di ARPANET risalgono al 1969; la commutazione di pacchetto e i protocolli TCP/IP sono le innovazioni che portano poi a internet.",
    fonte:"Balbi, Magaudda, A History of Digital Media" },

  { id:"COM12", materia:"Teorie della comunicazione", testo:"Nella prospettiva della «rimediazione» di Bolter e Grusin, i nuovi media:",
    opzioni:["Nascono senza alcun rapporto con la tradizione mediale","Riguardano solo l'ambito artistico","Cancellano completamente i media precedenti","Rappresentano e rielaborano al proprio interno le forme dei media che li hanno preceduti"], corretta:3,
    spiegazione:"La rimediazione descrive il doppio movimento di immediatezza e ipermediazione con cui ogni nuovo medium incorpora e ridefinisce i linguaggi dei precedenti, invece di sostituirli in blocco.",
    fonte:"Balbi, Magaudda, A History of Digital Media" },

  /* ================= INGLESE ================= */
  { id:"ENG01", materia:"Inglese", testo:"The new campaign ______ next month.",
    opzioni:["will be launched","will launch by us","is launching by the agency","has been launch"], corretta:0,
    spiegazione:"Passivo al futuro: will be + participio passato, perché il soggetto subisce l'azione." },

  { id:"ENG02", materia:"Inglese", testo:"If we had a bigger budget, we ______ an external agency.",
    opzioni:["will hire","would hire","would have hired","hire"], corretta:1,
    spiegazione:"Periodo ipotetico di secondo tipo (situazione irreale al presente): if + past simple nella subordinata, would + infinito senza to nella principale." },

  { id:"ENG03", materia:"Inglese", testo:"The department is responsible ______ internal communication.",
    opzioni:["about","of","for","to"], corretta:2,
    spiegazione:"«To be responsible for something» è la reggenza corretta; «responsible to» si usa invece per la persona a cui si risponde gerarchicamente." },

  { id:"ENG04", materia:"Inglese", testo:"A survey was ______ among 1,200 respondents.",
    opzioni:["taken off","brought up","made out","carried out"], corretta:3,
    spiegazione:"«To carry out a survey» significa condurre una ricerca; gli altri phrasal verb hanno significati diversi e non si usano in questo contesto." },

  { id:"ENG05", materia:"Inglese", testo:"Please make sure the figures ______ before the meeting.",
    opzioni:["are checked","check","are checking","will check"], corretta:0,
    spiegazione:"I dati subiscono l'azione: serve il passivo al presente (are + participio passato)." },

  { id:"ENG06", materia:"Inglese", testo:"In spite of ______ several reminders, the client did not reply.",
    opzioni:["to send","sending","sent","send"], corretta:1,
    spiegazione:"«In spite of» e «despite» sono seguiti da sostantivo o forma in -ing; con soggetto e verbo coniugato si userebbe «although»." },

  { id:"ENG07", materia:"Inglese", testo:"She said she ______ the presentation the day before.",
    opzioni:["finished","has finished","had finished","would finish"], corretta:2,
    spiegazione:"Nel discorso indiretto il past simple retrocede al past perfect, coerentemente con «the day before»." },

  { id:"ENG08", materia:"Inglese", testo:"In a business context, «stakeholders» are:",
    opzioni:["The company's competitors","The members of the board of directors","Only the shareholders of the company","All the groups that have an interest in the organisation's activities"], corretta:3,
    spiegazione:"Gli stakeholder comprendono dipendenti, clienti, fornitori, comunità locali e istituzioni, oltre agli azionisti (shareholder), che ne sono solo una categoria." },

  /* ================= ATTUALITÀ E ISTITUZIONI ================= */
  { id:"ATT01", materia:"Attualità e istituzioni", testo:"Quale istituzione dell'Unione europea detiene il potere di proposta legislativa?",
    opzioni:["La Commissione europea","Il Consiglio d'Europa","La Corte di giustizia dell'Unione europea","Il Parlamento europeo"], corretta:0,
    spiegazione:"La Commissione europea propone gli atti legislativi, che vengono poi approvati da Parlamento europeo e Consiglio dell'Unione. Il Consiglio d'Europa è un'organizzazione distinta, non un'istituzione dell'UE." },

  { id:"ATT02", materia:"Attualità e istituzioni", testo:"Quanto dura il mandato del Presidente della Repubblica italiana?",
    opzioni:["Sei anni","Sette anni","Quattro anni","Cinque anni"], corretta:1,
    spiegazione:"L'articolo 85 della Costituzione fissa in sette anni la durata del mandato; il Presidente è eletto dal Parlamento in seduta comune con i delegati regionali." },

  { id:"ATT03", materia:"Attualità e istituzioni", testo:"Che cosa misura il prodotto interno lordo (PIL) di un Paese?",
    opzioni:["Il livello medio dei prezzi al consumo","Il debito pubblico rapportato alle esportazioni","Il valore dei beni e servizi finali prodotti nel territorio in un dato periodo","La ricchezza complessiva accumulata dalle famiglie"], corretta:2,
    spiegazione:"Il PIL è un flusso: misura il valore della produzione finale realizzata in un anno entro i confini nazionali. Non misura lo stock di ricchezza né la distribuzione del reddito." },

  { id:"ATT04", materia:"Attualità e istituzioni", testo:"L'Organizzazione mondiale della sanità (OMS) è:",
    opzioni:["Un organo dell'Unione europea con sede a Bruxelles","Un'organizzazione non governativa privata","Un'agenzia della NATO","Un'agenzia specializzata delle Nazioni Unite con sede a Ginevra"], corretta:3,
    spiegazione:"L'OMS è l'agenzia ONU per la salute pubblica, fondata nel 1948 e con sede a Ginevra." },

  { id:"ATT05", materia:"Attualità e istituzioni", testo:"In Italia, il cosiddetto «GDPR» disciplina:",
    opzioni:["La protezione dei dati personali nell'Unione europea","La tassazione delle imprese digitali","I diritti d'autore sulle opere musicali","La pubblicità comparativa"], corretta:0,
    spiegazione:"Il regolamento generale sulla protezione dei dati (UE 2016/679), applicabile dal 2018, disciplina il trattamento dei dati personali e i diritti degli interessati." },
/* ---- Storia dei media digitali (Balbi, Magaudda) — dagli appunti ---- */
  { id:"MED01", materia:"Teorie della comunicazione", testo:"Secondo Balbi e Magaudda, i tre media digitali centrali attorno a cui si costruisce la storia del digitale sono:",
    opzioni:["Televisione, radio e stampa","Computer, internet e telefono mobile","Cinema, fotografia e musica","Telegrafo, telefono e satellite"], corretta:1,
    spiegazione:"L'introduzione del volume individua computer, internet e telefono mobile come i tre dispositivi attorno ai quali ricostruire una storia globale dei media digitali.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — Introduzione" },

  { id:"MED02", materia:"Teorie della comunicazione", testo:"I due elementi fondamentali con cui gli autori definiscono il digitale sono:",
    opzioni:["Analogico e discontinuo","Hardware e software","Numerizzazione e binarizzazione","Convergenza e globalizzazione"], corretta:2,
    spiegazione:"La numerizzazione converte in cifre contenuti prima espressi in linguaggi diversi; la binarizzazione li codifica in un unico linguaggio, rendendo la trasmissione indipendente dal tipo di contenuto.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 1" },

  { id:"MED03", materia:"Teorie della comunicazione", testo:"Le tre matrici teoriche con cui il volume legge lo sviluppo dei media digitali sono:",
    opzioni:["Psicologia, pedagogia e sociologia","Storia dell'arte, estetica e filosofia","Semiotica, retorica e linguistica","Political economy of communication, cultural studies e science and technology studies"], corretta:3,
    spiegazione:"Politica ed economia, cultura e scienza e tecnologia sono i tre sguardi disciplinari con cui gli autori spiegano la costruzione sociale dei media digitali.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — Introduzione" },

  { id:"MED04", materia:"Teorie della comunicazione", testo:"Quale delle seguenti NON è una delle idee di società che hanno anticipato la società digitale secondo il volume?",
    opzioni:["Società disciplinare","Società delle reti (network society)","Società dell'informazione","Società post-industriale"], corretta:0,
    spiegazione:"Le cinque idee elencate sono: società dell'informazione, post-industriale, convergente, post-moderna e società delle reti. La «società disciplinare» appartiene ad altro filone teorico.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 1" },

  { id:"MED05", materia:"Teorie della comunicazione", testo:"Il passaggio da un'economia fondata sulla produzione di beni a una fondata sui servizi, con al centro lavoratori cognitivi e conoscenza teorica, definisce l'idea di:",
    opzioni:["Società dell'informazione","Società post-industriale","Società convergente","Società post-moderna"], corretta:1,
    spiegazione:"La società post-industriale condivide con quella digitale la dimensione immateriale dei servizi e la centralità del computer come strumento di lavoro.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 1" },

  { id:"MED06", materia:"Teorie della comunicazione", testo:"Le due teorie post-belliche che hanno fatto da innesco all'evoluzione della comunicazione digitale sono:",
    opzioni:["La semiotica di Eco e lo strutturalismo di Lévi-Strauss","La teoria ipodermica e l'agenda setting","La cibernetica di Wiener e la teoria dell'informazione di Shannon","Il funzionalismo di Parsons e la teoria critica di Adorno"], corretta:2,
    spiegazione:"Entrambe elaborate a partire dalle comunicazioni telefoniche, cibernetica e teoria dell'informazione diventano il riferimento dei media studies e fanno della comunicazione una dimensione cruciale del dopoguerra.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 1" },

  { id:"MED07", materia:"Teorie della comunicazione", testo:"Nel 1936 Alan Turing dà un contributo decisivo alla nascita del computer perché:",
    opzioni:["Inventa il microprocessore","Fonda la prima azienda di software","Costruisce il primo personal computer","Adatta i principi della logica matematica a una macchina automatica governata da un linguaggio binario"], corretta:3,
    spiegazione:"La macchina di Turing è il fondamento logico di tutti i successivi calcolatori digitali: una macchina programmabile capace di operazioni complesse a partire da un linguaggio adattabile.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 2" },

  { id:"MED08", materia:"Teorie della comunicazione", testo:"L'ENIAC, completato nel 1945, era:",
    opzioni:["Il primo mainframe, sviluppato per scopi militari","Il primo computer dotato di interfaccia grafica","Il primo calcolatore commercializzato in Europa","Il primo personal computer domestico"], corretta:0,
    spiegazione:"Pesava circa tremila chili e fu impiegato per calcoli militari, fra cui quelli per la bomba all'idrogeno: riflette un'informatica maschile e militare, in cui il contributo delle donne non fu riconosciuto.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 2" },

  { id:"MED09", materia:"Teorie della comunicazione", testo:"Che cosa rese celebre l'UNIVAC nel 1952?",
    opzioni:["Fu il primo a collegarsi ad ARPANET","Fu usato per calcolare le previsioni delle elezioni presidenziali vinte da Eisenhower","Fu il primo computer con mouse","Fu il primo computer venduto in kit di montaggio"], corretta:1,
    spiegazione:"Primo mainframe uscito dagli ambienti militari, l'UNIVAC fu usato dall'ufficio del censimento americano e poi per le previsioni elettorali: fu quest'ultimo impiego a renderlo popolare.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 2" },

  { id:"MED10", materia:"Teorie della comunicazione", testo:"Il time-sharing viene descritto dagli autori come una «innovazione conservativa» perché:",
    opzioni:["Fu adottato soltanto da amministrazioni pubbliche conservatrici","Riproduceva il funzionamento del telegrafo","Fu concepito per sfruttare meglio i mainframe esistenti, e solo involontariamente aprì la strada all'idea di computer individuale","Impedì per anni lo sviluppo di nuovi calcolatori"], corretta:2,
    spiegazione:"Frazionando la capacità di calcolo fra più terminali, il time-sharing nacque per supportare il mainframe; di fatto rese però pensabile il computer come strumento personale e di comunicazione.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 2" },

  { id:"MED11", materia:"Teorie della comunicazione", testo:"La legge di Moore, formulata nel 1965, prevede che:",
    opzioni:["Il costo dei computer resti stabile per decenni","Ogni medium ne rimedi un altro","Il numero di utenti di una rete cresca con il quadrato dei nodi","La potenza dei microprocessori cresca costantemente nel tempo"], corretta:3,
    spiegazione:"L'enunciato di Gordon Moore sulla crescita continua della potenza dei microprocessori è diventato il riferimento simbolico dell'accelerazione tecnologica del digitale.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 2" },

  { id:"MED12", materia:"Teorie della comunicazione", testo:"Lo Xerox Alto (1973) è ricordato per aver introdotto:",
    opzioni:["Il mouse e l'interfaccia grafica basata su scrivania e cartelle","Il primo microprocessore","Il primo modem domestico","Il sistema operativo MS-DOS"], corretta:0,
    spiegazione:"Le due innovazioni dell'Alto — mouse e interfaccia grafica GUI — sono alla base del successivo successo di Apple e Microsoft: il Macintosh del 1984 vi si ispira apertamente.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 2" },

  { id:"MED13", materia:"Teorie della comunicazione", testo:"Il «dilemma dell'innovatore», richiamato a proposito del rifiuto opposto da Hewlett-Packard al prototipo di Wozniak, indica:",
    opzioni:["La difficoltà tecnica di miniaturizzare i circuiti","La reticenza delle imprese affermate a sostenere tecnologie che rivoluzionerebbero il loro stesso mercato","L'incapacità degli hacker di fare impresa","Il conflitto fra software libero e proprietario"], corretta:1,
    spiegazione:"Le grandi aziende informatiche non colsero il potenziale del computer individuale proprio perché avrebbe eroso il loro mercato: lo spazio fu occupato da nuove imprese come Apple e Commodore.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 2" },

  { id:"MED14", materia:"Teorie della comunicazione", testo:"Che ruolo ebbero l'Homebrew Computer Club e le controculture californiane nella storia del personal computer?",
    opzioni:["Finanziarono la ricerca militare su ARPANET","Nessuno: il pc nacque solo dentro i laboratori aziendali","Diedero al computer un significato sociale e politico, legandolo a condivisione e diritti civili","Si opposero alla diffusione dei computer individuali"], corretta:2,
    spiegazione:"Gli autori sottolineano che le tecnologie senza un ruolo sociale falliscono: furono hobbisti, hacker e attivisti a rendere il pc uno strumento personale di emancipazione.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 2" },

  { id:"MED15", materia:"Teorie della comunicazione", testo:"La celebre pubblicità del Macintosh trasmessa durante il Super Bowl del 1984:",
    opzioni:["Mostrava il primo collegamento a internet","Era rivolta esclusivamente alle imprese","Fu ritirata prima della messa in onda","Si ispirava al romanzo 1984 di Orwell e identificava IBM con il Grande Fratello"], corretta:3,
    spiegazione:"Lo spot segna una svolta culturale prima ancora che tecnica: Apple si presenta come sfidante della posizione dominante di IBM e il pc entra nell'immaginario di massa.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 2" },

  { id:"MED16", materia:"Teorie della comunicazione", testo:"Che cos'è la commutazione di pacchetto (packet switching) alla base di ARPANET?",
    opzioni:["Una tecnica che spezza il messaggio in pacchetti instradati per vie diverse e ricomposti a destinazione","Un protocollo di cifratura dei dati militari","Un metodo per assegnare i nomi di dominio","Un sistema che invia il messaggio come unità unica lungo un percorso fisso"], corretta:0,
    spiegazione:"Insieme all'assenza di un centro di comando, la commutazione di pacchetto garantisce che la rete resti funzionante anche se un nodo viene danneggiato: è tuttora la principale modalità di trasferimento dei dati.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 3" },

  { id:"MED17", materia:"Teorie della comunicazione", testo:"L'ARPA fu fondata nel 1958 dall'amministrazione Eisenhower come reazione a:",
    opzioni:["La caduta del muro di Berlino","Il lancio sovietico dello Sputnik 1","La crisi di Cuba","La guerra del Vietnam"], corretta:1,
    spiegazione:"Il satellite sovietico del 1957 fece percepire agli Stati Uniti un ritardo tecnologico: l'ARPA nacque per finanziare ricerca scientifica e tecnologica, e da lì passò alla comunicazione fra calcolatori.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 3" },

  { id:"MED18", materia:"Teorie della comunicazione", testo:"Nella periodizzazione proposta dagli autori, le sei ere di internet sono, nell'ordine:",
    opzioni:["Accademica, militare, industriale, commerciale, sociale, mobile","Militare, industriale, commerciale, pubblica, sociale, mobile","Militare, accademico-scientifica, controculturale, servizio pubblico, commerciale, sociale","Commerciale, militare, sociale, accademica, pubblica, globale"], corretta:2,
    spiegazione:"Ogni era corrisponde a un gruppo sociale che ha dato forma alla rete: militari, accademici, controculture, servizio pubblico europeo, imprese e infine gli utenti del web 2.0.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 3" },

  { id:"MED19", materia:"Teorie della comunicazione", testo:"Nel protocollo TCP/IP, adottato dalla comunità scientifica alla fine degli anni Settanta:",
    opzioni:["TCP cifra i dati e IP li comprime","TCP serve alle reti telefoniche e IP a quelle satellitari","TCP e IP sono due nomi dello stesso protocollo","TCP gestisce il flusso di informazioni fra i nodi e IP assegna a ciascun terminale un indirizzo univoco"], corretta:3,
    spiegazione:"È l'innovazione che rende internet una «rete di reti»: consente di integrare macchine e network eterogenei in un'architettura centrifuga, senza nodi gerarchicamente superiori.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 3" },

  { id:"MED20", materia:"Teorie della comunicazione", testo:"La «guerra degli standard» degli anni Settanta e Ottanta contrappose:",
    opzioni:["Il modello centrifugo telematico TCP/IP al modello centripeto telefonico X.25","Windows e Macintosh","VHS e Betamax","GSM e CDMA"], corretta:0,
    spiegazione:"Le compagnie telefoniche difendevano un'architettura centripeta, ritenuta più affidabile; la comunità accademica sosteneva una rete distribuita, con l'intelligenza ai margini (principio end-to-end).",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 3" },

  { id:"MED21", materia:"Teorie della comunicazione", testo:"Nel 1993 il CERN prese una decisione determinante per la diffusione del World Wide Web:",
    opzioni:["Lo brevettò a livello internazionale","Lo cedette gratuitamente alla comunità mondiale","Ne vendette i diritti a Netscape","Ne limitò l'uso agli istituti di ricerca"], corretta:1,
    spiegazione:"La cessione gratuita permise a chiunque di usarlo e migliorarlo, e fondò l'idea del web come accesso libero all'informazione e servizio pubblico.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 3" },

  { id:"MED22", materia:"Teorie della comunicazione", testo:"Perché il 1995 è considerato un anno spartiacque per internet?",
    opzioni:["Perché viene introdotto il protocollo TCP/IP","Perché nasce il primo social network","Perché la National Science Foundation cede la dorsale accademica ai privati e Netscape si quota in borsa","Perché viene chiusa definitivamente ARPANET"], corretta:2,
    spiegazione:"I due eventi segnano la fine del controllo diretto del governo americano sulla rete e l'inizio della corsa delle società dot-com, che porterà alla bolla speculativa esplosa nel 2001.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 3" },

  { id:"MED23", materia:"Teorie della comunicazione", testo:"Il fenomeno della «participation inequality» nel web 2.0 indica che:",
    opzioni:["Tutti gli utenti producono la stessa quantità di contenuti","Solo i giornalisti professionisti possono pubblicare","La partecipazione è distribuita equamente fra i paesi","Circa il 90% degli utenti fruisce passivamente, il 9% partecipa moderatamente e solo l'1% intensivamente"], corretta:3,
    spiegazione:"La figura del prosumer, che produce e consuma insieme, resta dunque una nicchia; al fenomeno si affianca lo slacktivism, la partecipazione pigra e superficiale.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 3" },

  { id:"MED24", materia:"Teorie della comunicazione", testo:"Il caso francese del Minitel dimostra soprattutto che:",
    opzioni:["Soluzioni tecnologiche semplici e conservative possono avere grande successo se sostenute dalla political economy nazionale","Le reti pubbliche falliscono sempre","Gli utenti non modificano mai l'uso previsto di un medium","Solo le tecnologie più avanzate hanno successo"], corretta:0,
    spiegazione:"Distribuito gratuitamente da France Télécom dal 1982 e chiuso solo nel 2012, il Minitel era progettato per una comunicazione verticale, ma furono gli utenti a privilegiarne l'uso orizzontale, lo scambio di messaggi.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 3" },

  { id:"MED25", materia:"Teorie della comunicazione", testo:"Il concetto di «doppia nascita» (double birth) applicato al telefono mobile significa che:",
    opzioni:["La rete mobile si sviluppa in due paesi alla volta","Una tecnologia può nascere più di una volta, con usi e valenze sociali molto diversi","Il telefono fu brevettato contemporaneamente da due inventori","Ogni telefono ha una versione analogica e una digitale"], corretta:1,
    spiegazione:"Il radiotelefono militare e da taxi e il telefono cellulare degli anni Settanta e Ottanta sono due nascite distinte dello stesso mezzo, con pubblici, reti e significati sociali differenti.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 4" },

  { id:"MED26", materia:"Teorie della comunicazione", testo:"Perché lo standard GSM viene introdotto in Europa nel 1992?",
    opzioni:["Per imitare lo standard statunitense","Per iniziativa di una singola azienda italiana","Per ragioni politiche, economiche e tecno-sociali convergenti, fra cui l'idea di un'Europa unita delle comunicazioni e la spinta dei produttori a uno standard unico","Solo per ragioni militari"], corretta:2,
    spiegazione:"Prima del GSM le reti europee erano incompatibili fra loro (tranne quelle scandinave, con lo standard NMT). Lo standard unico portò roaming, SIM card e la leadership di aziende come Nokia ed Ericsson.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 4" },

  { id:"MED27", materia:"Teorie della comunicazione", testo:"Gli SMS sono definiti la «killer application» del telefono mobile perché:",
    opzioni:["Sostituirono completamente le chiamate vocali","Furono imposti per legge in Europa","Furono progettati fin dall'inizio come servizio di massa fra abbonati","Nati come canale di servizio fra compagnia e utenti, furono gli utenti a trasformarli in comunicazione orizzontale fra abbonati"], corretta:3,
    spiegazione:"Gli SMS sfruttavano un canale di banda inutilizzato durante le chiamate ed erano pensati per comunicazioni di servizio: l'uso sociale li ha reinventati, come mostra il caso filippino delle proteste del 2001.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 4" },

  { id:"MED28", materia:"Teorie della comunicazione", testo:"Napster, lanciato nel 1999, ebbe un impatto storico perché:",
    opzioni:["Introdusse il modello peer-to-peer di condivisione dei file fra utenti","Inventò il formato mp3","Fu la prima piattaforma di streaming in abbonamento","Fu il primo negozio legale di musica online"], corretta:0,
    spiegazione:"Il file sharing peer-to-peer scardinò la distribuzione tradizionale fondata su negozi e supporti fisici; la chiusura per violazione del copyright rese l'mp3 un fenomeno socio-culturale.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 5" },

  { id:"MED29", materia:"Teorie della comunicazione", testo:"Il formato mp3, il cui standard è rilasciato nel 1995, nacque:",
    opzioni:["Su iniziativa delle major discografiche per contrastare la pirateria","In ambiti estranei all'industria musicale, per le esigenze del broadcasting e dell'informatica","Come formato interno di Apple per iTunes","Come evoluzione tecnica del compact disc"], corretta:1,
    spiegazione:"Le major all'inizio rifiutarono l'mp3 temendo la pirateria: il formato si diffuse grazie a progetti amatoriali e servizi online indipendenti.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 5" },

  { id:"MED30", materia:"Teorie della comunicazione", testo:"Nella storia della digitalizzazione della fotografia, il caso Kodak è esemplare perché:",
    opzioni:["Rifiutò di produrre pellicole a colori","Acquistò Instagram nel 2012","Pur avendo realizzato nel 1975 un primo prototipo digitale, l'azienda restò legata alla stampa fotografica e finì per fallire","Fu la prima a produrre reflex digitali di successo"], corretta:2,
    spiegazione:"È un caso classico di impresa dominante che non compie la transizione tecnologica: il mercato digitale fu conquistato da Canon e Nikon.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 5" },

  { id:"MED31", materia:"Teorie della comunicazione", testo:"Il podcasting viene descritto come innovazione rilevante per la radio perché:",
    opzioni:["Ha sostituito la radio analogica in tutta Europa","Ha reso obbligatorio lo standard DAB","Ha aumentato la potenza dei trasmettitori","Ha introdotto una fruizione asincrona che rompe la logica del palinsesto"], corretta:3,
    spiegazione:"Nato dall'intreccio fra radio e rete, il podcast svincola l'ascolto dal flusso e dall'orario di trasmissione, cioè dal palinsesto che definiva il medium radiofonico.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 5" },

  { id:"MED32", materia:"Teorie della comunicazione", testo:"La tesi di fondo del volume sul rapporto fra digitale e passato è che:",
    opzioni:["Rivoluzione e continuità si alternano e si ridefiniscono reciprocamente nel tempo","Il digitale è un fenomeno lineare e uniforme in tutto il mondo","I media analogici sono destinati a scomparire rapidamente","Il digitale ha azzerato ogni continuità con i media precedenti"], corretta:0,
    spiegazione:"Il sottotitolo stesso — «rivoluzioni e continuità» — indica che la digitalizzazione non è né lineare né coerente: è ambivalente, con ritmi diversi nel tempo e nello spazio.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — Conclusione" },
/* ---- Informatica (Snyder, Henry — Fluency) — dagli appunti ---- */
  { id:"INF11", materia:"Informatica", testo:"Herman Hollerith è considerato il pioniere del trattamento «produttivo» dell'informazione digitale perché:",
    opzioni:["Progettò il primo microprocessore","Inventò e brevettò la tabulatrice, che codificava i dati come fori su schede perforate","Costruì il primo computer elettronico","Inventò il transistor"], corretta:1,
    spiegazione:"Le schede perforate restarono la principale tecnologia digitale per circa settantacinque anni; erano però macchine solo hardware, da ricablare fisicamente per cambiarne il funzionamento.",
    fonte:"Snyder, Henry, Fluency — cap. 1" },

  { id:"INF12", materia:"Informatica", testo:"Il passaggio ai computer «a programma memorizzato» consiste nel fatto che:",
    opzioni:["I programmi vengono scritti direttamente in binario dagli utenti","Ogni macchina esegue una sola operazione","Le istruzioni smettono di essere cablate fisicamente e diventano bit conservati in memoria ed eseguiti dalla CPU","I dati vengono salvati su schede perforate"], corretta:2,
    spiegazione:"Da qui viene il termine software: le istruzioni passano dall'impianto elettrico «hard» della macchina ai bit «soft» della memoria, eliminando la necessità di ricablare.",
    fonte:"Snyder, Henry, Fluency — cap. 1" },

  { id:"INF13", materia:"Informatica", testo:"Quali caratteristiche del transistor a semiconduttore rivoluzionarono l'elettronica?",
    opzioni:["Costo elevato ma altissima potenza","Grandi dimensioni e lunga durata","Assenza di componenti elettrici","Basso consumo, grande affidabilità, compattezza e leggerezza"], corretta:3,
    spiegazione:"Queste proprietà resero i computer economici, compatti e affidabili e permisero di realizzare CPU molto più complesse.",
    fonte:"Snyder, Henry, Fluency — cap. 1" },

  { id:"INF14", materia:"Informatica", testo:"Nella tecnologia dei circuiti integrati, la fotolitografia serve a:",
    opzioni:["Stampare i componenti del circuito in strati sovrapposti su una base di silicio","Fotografare i circuiti per documentarli","Raffreddare il processore","Collegare a mano transistor e resistenze"], corretta:0,
    spiegazione:"Nei circuiti integrati transistor e collegamenti sono fabbricati insieme in un unico blocco monolitico: il vantaggio della stampa è ciò che rende possibile la miniaturizzazione.",
    fonte:"Snyder, Henry, Fluency — cap. 1" },

  { id:"INF15", materia:"Informatica", testo:"Un processore, in senso tecnico, comprende:",
    opzioni:["Il sistema operativo e i programmi applicativi","La CPU e una piccola area di memoria detta cache, collegate a dispositivi di input e output","Solo lo schermo e la tastiera","Il disco fisso e la memoria di massa"], corretta:1,
    spiegazione:"In termini tecnici processore è sinonimo di computer: la differenza fra una console, un lettore musicale e un pc sta nei dispositivi collegati e nel software.",
    fonte:"Snyder, Henry, Fluency — cap. 1" },

  { id:"INF16", materia:"Informatica", testo:"Perché un processo possa dirsi algoritmo deve avere cinque proprietà. Quale delle seguenti NON è fra queste?",
    opzioni:["Determinatezza","Efficacia","Casualità","Input specificato"], corretta:2,
    spiegazione:"Le cinque proprietà sono: input specificato, output specificato, determinatezza, efficacia e terminazione. Un algoritmo deve essere non ambiguo, eseguibile dall'agente e concludersi.",
    fonte:"Snyder, Henry, Fluency — cap. 1" },

  { id:"INF17", materia:"Informatica", testo:"La proprietà di «terminazione» di un algoritmo significa che:",
    opzioni:["Il processo può proseguire indefinitamente","L'algoritmo va scritto in un linguaggio di programmazione","Ogni passo deve essere svolto da una persona","L'agente prima o poi conclude il calcolo, fornendo la risposta o segnalando che non è possibile"], corretta:3,
    spiegazione:"Senza terminazione il processo non è un algoritmo: deve chiudersi con un risultato oppure con la comunicazione che la risposta non esiste.",
    fonte:"Snyder, Henry, Fluency — cap. 1" },

  { id:"INF18", materia:"Informatica", testo:"In informatica, «astrarre» significa:",
    opzioni:["Estrarre da una situazione il concetto o il processo di base, distinguendo i dettagli rilevanti da quelli irrilevanti","Rendere un programma più veloce","Nascondere il codice sorgente agli utenti","Tradurre un testo in linguaggio binario"], corretta:0,
    spiegazione:"L'astrazione produce una rappresentazione essenziale del problema; la generalizzazione, invece, esprime un'idea che si applica a più situazioni.",
    fonte:"Snyder, Henry, Fluency — cap. 1" },

  { id:"INF19", materia:"Informatica", testo:"La «riproducibilità perfetta» è la caratteristica fondamentale dell'informazione digitale perché:",
    opzioni:["Il digitale elimina la necessità di backup","La codifica in 0 e 1 consente di copiare e verificare i dati senza introdurre errori","Le copie digitali sono sempre più leggere degli originali","I supporti digitali durano per sempre"], corretta:1,
    spiegazione:"L'informazione analogica è fruita su un supporto che varia con continuità e degrada nella copia; quella digitale, essendo una sequenza finita di simboli, può essere replicata identica e controllata.",
    fonte:"Snyder, Henry, Fluency — cap. 1" },

  { id:"INF20", materia:"Informatica", testo:"La metafora del desktop, adottata dai progettisti del PARC, consiste nel:",
    opzioni:["Usare solo comandi testuali","Riprodurre il funzionamento del telefono","Rappresentare lo schermo come una scrivania virtuale con documenti in finestre sovrapposte","Nascondere ogni riferimento al mondo fisico"], corretta:2,
    spiegazione:"Le metafore aiutano a usare la tecnologia senza leggere il manuale; con i dispositivi mobili, venuto meno il mouse, si è affermata una nuova metafora, quella tattile.",
    fonte:"Snyder, Henry, Fluency — cap. 1" },

  { id:"INF21", materia:"Informatica", testo:"Una comunicazione è asincrona quando:",
    opzioni:["Mittente e destinatario devono essere attivi contemporaneamente","Ci sono molti destinatari","Il messaggio è cifrato","L'invio e la ricezione avvengono in due momenti diversi"], corretta:3,
    spiegazione:"La posta elettronica è asincrona, una telefonata è sincrona. La distinzione è indipendente da quella fra broadcast, multicast e point-to-point.",
    fonte:"Snyder, Henry, Fluency — cap. 2" },

  { id:"INF22", materia:"Informatica", testo:"Fondamentalmente, internet supporta una comunicazione:",
    opzioni:["Asincrona e point-to-point, pur essendo abbastanza veloce da sostenere anche comunicazioni sincrone, multicast e broadcast","Solo sincrona e broadcast","Solo multicast","Esclusivamente uno-a-molti"], corretta:0,
    spiegazione:"È questa versatilità a farne un mezzo di comunicazione universale: la rete diventa inoltre più potente ogni volta che un nuovo computer vi si collega.",
    fonte:"Snyder, Henry, Fluency — cap. 2" },

  { id:"INF23", materia:"Informatica", testo:"Nell'architettura client/server del web:",
    opzioni:["Il client conserva tutte le pagine del web","Il browser è il client che richiede un file, il computer che lo ospita è il server che lo invia","Il server richiede i file al browser","Client e server sono due programmi sullo stesso computer"], corretta:1,
    spiegazione:"Ogni interazione è un «incontro fugace»: si conclude con l'invio del file. Cookie e parametri URL servono proprio a dare l'illusione di una connessione continua.",
    fonte:"Snyder, Henry, Fluency — cap. 2" },

  { id:"INF24", materia:"Informatica", testo:"Un indirizzo IP nella forma classica è composto da:",
    opzioni:["Un nome di dominio e un'estensione","Due numeri separati da due punti","Quattro numeri separati da punti, ciascuno con valori da 0 a 255","Otto lettere dell'alfabeto latino"], corretta:2,
    spiegazione:"L'ampiezza dell'intervallo consente miliardi di indirizzi distinti; il pacchetto IP contiene l'indirizzo del mittente, quello del destinatario, un numero progressivo e il carico (payload).",
    fonte:"Snyder, Henry, Fluency — cap. 2" },

  { id:"INF25", materia:"Informatica", testo:"Nel trasferimento di dati su internet, il passaggio di un pacchetto da un router al successivo è detto:",
    opzioni:["Ciclo","Ping","Boot","Salto (hop)"], corretta:3,
    spiegazione:"Ogni switch legge l'indirizzo di destinazione e inoltra il pacchetto al router che lo avvicina di più; pacchetti diretti allo stesso indirizzo possono seguire percorsi differenti, tracciabili con Trace Route.",
    fonte:"Snyder, Henry, Fluency — cap. 2" },

  { id:"INF26", materia:"Informatica", testo:"Perché i pacchetti IP contengono un numero progressivo?",
    opzioni:["Per poter essere riordinati a destinazione e ricomporre l'informazione originale","Per calcolare il costo della trasmissione","Per identificare il proprietario del computer","Per cifrare il contenuto"], corretta:0,
    spiegazione:"L'informazione viene spezzata in unità di dimensione prefissata, inviate una alla volta lungo itinerari diversi: la numerazione consente di rimetterle in sequenza all'arrivo.",
    fonte:"Snyder, Henry, Fluency — cap. 2" },

  { id:"INF27", materia:"Informatica", testo:"Nel protocollo Ethernet, che cosa succede quando due computer trasmettono nello stesso istante?",
    opzioni:["La rete si blocca fino al riavvio","Rilevano la collisione, interrompono la trasmissione e riprovano dopo un tempo di attesa casuale","Un computer centrale stabilisce chi ha la precedenza","I due messaggi vengono uniti automaticamente"], corretta:1,
    spiegazione:"Ethernet non richiede alcuna pianificazione o sistema di controllo: ogni computer ascolta il canale e trasmette se è silente, gestendo le collisioni con attese casuali.",
    fonte:"Snyder, Henry, Fluency — cap. 2" },

  { id:"INF28", materia:"Informatica", testo:"Le reti locali senza fili domestiche e d'ufficio usano il protocollo:",
    opzioni:["Bluetooth","Ethernet su cavo coassiale","802.11, comunemente detto Wi-Fi","UMTS"], corretta:2,
    spiegazione:"I telefoni cellulari usano invece protocolli di rete mobile come UMTS, mentre il Bluetooth serve normalmente a collegare periferiche, non a fornire l'accesso a internet.",
    fonte:"Snyder, Henry, Fluency — cap. 2" },

  { id:"INF29", materia:"Informatica", testo:"Nella struttura del Domain Name System, i tredici root name server:",
    opzioni:["Ospitano tutte le pagine web del mondo","Assegnano gli indirizzi IP ai singoli utenti","Sono i tredici principali provider mondiali","Sono i name server autorevoli di tutti i domini di primo livello"], corretta:3,
    spiegazione:"Il loro numero e la loro distribuzione geografica servono a condividere il carico: è un esempio di ridondanza, mentre il salvataggio locale delle risposte per riutilizzarle è il caching.",
    fonte:"Snyder, Henry, Fluency — cap. 2" },

  { id:"INF30", materia:"Informatica", testo:"Qual è la differenza fra internet e il World Wide Web?",
    opzioni:["Internet è l'infrastruttura di cavi, router e computer indirizzati; il web è un servizio fornito da un sottoinsieme di quei computer, i server web","Sono sinonimi","Il web comprende internet","Internet riguarda solo la posta elettronica"], corretta:0,
    spiegazione:"I server web, con i file che inviano ai browser, costituiscono insieme il World Wide Web: un servizio che viaggia sull'infrastruttura di internet.",
    fonte:"Snyder, Henry, Fluency — cap. 2" },

  { id:"INF31", materia:"Informatica", testo:"Le tre parti principali di un URL sono:",
    opzioni:["Client, server e browser","Protocollo, nome del server e path della pagina","Titolo, snippet e link","Dominio, cookie e sessione"], corretta:1,
    spiegazione:"Digitando un URL il client specifica quale protocollo usare (http), dove reperire l'informazione (il server) e quale file richiedere (il percorso sul disco del server).",
    fonte:"Snyder, Henry, Fluency — cap. 2" },

  { id:"INF32", materia:"Informatica", testo:"In HTML5, i tag:",
    opzioni:["Non possono mai comparire da soli","Descrivono solo il colore del testo","Sono racchiusi fra parentesi angolari, vanno scritti in minuscolo e di norma si usano a coppie, con lo slash in quello di chiusura","Devono essere scritti in maiuscolo"], corretta:2,
    spiegazione:"Esistono anche tag singoli, chiusi da uno slash prima della parentesi. Il contenuto fra i tag <html> si divide in intestazione (head) e corpo (body).",
    fonte:"Snyder, Henry, Fluency — cap. 3" },

  { id:"INF33", materia:"Informatica", testo:"Che cosa fa il browser con lo «spazio bianco» (white space) presente nel codice HTML?",
    opzioni:["Lo riproduce esattamente com'è scritto","Segnala un errore","Lo converte in un ritorno a capo","Lo ignora, trasformando ogni sequenza in un singolo spazio"], corretta:3,
    spiegazione:"Spazi, tabulazioni e ritorni a capo servono solo a organizzare il codice: l'ampiezza delle righe è determinata dalla dimensione della finestra del browser.",
    fonte:"Snyder, Henry, Fluency — cap. 3" },

  { id:"INF34", materia:"Informatica", testo:"Nel funzionamento di un motore di ricerca, il crawling consiste nel:",
    opzioni:["Visitare le pagine web analizzandone il codice per costruire un indice di token","Rispondere alle interrogazioni degli utenti","Ordinare i risultati per rilevanza","Eliminare i risultati duplicati"], corretta:0,
    spiegazione:"Il crawler prende gli indirizzi da una lista di cose da fare e vi aggiunge i nuovi URL che incontra; l'indice, costruito in anticipo, è ciò che rende immediate le risposte alle query.",
    fonte:"Snyder, Henry, Fluency — cap. 4" },

  { id:"INF35", materia:"Informatica", testo:"Una AND-query, cioè una ricerca con più parole, viene risolta dall'elaboratore delle query:",
    opzioni:["Ordinando alfabeticamente le pagine","Intersecando le liste di URL associate a ciascun token","Sommando le liste di tutti i token","Cercando la frase esatta"], corretta:1,
    spiegazione:"Nell'indice esistono solo le liste dei singoli token: l'intersezione individua gli URL presenti in tutte. Una OR-query, invece, richiede di unire le liste eliminando i duplicati.",
    fonte:"Snyder, Henry, Fluency — cap. 4" },

  { id:"INF36", materia:"Informatica", testo:"Il PageRank di Google è:",
    opzioni:["Il tempo impiegato dal crawler per visitare una pagina","Il costo di un annuncio pubblicitario","Il numero che determina l'ordine in cui vengono restituiti i risultati di una query","Il numero di pagine indicizzate da un sito"], corretta:2,
    spiegazione:"Google fu il primo a usare un ranking per stimare quali pagine interessino maggiormente all'utente, e non solo quali contengano i termini cercati.",
    fonte:"Snyder, Henry, Fluency — cap. 4" },

  { id:"INF37", materia:"Informatica", testo:"Nella valutazione dell'attendibilità delle informazioni, una fonte primaria è:",
    opzioni:["Il giornalista che intervista un testimone","Chi legge la notizia sul giornale","Il motore di ricerca che restituisce il risultato","Una persona che ha conoscenza diretta dell'informazione"], corretta:3,
    spiegazione:"Chi intervista la fonte primaria è fonte secondaria, chi ne fruisce attraverso i media è fonte terziaria: a ogni passaggio aumenta il rischio di distorsioni, perciò conviene verificare più fonti.",
    fonte:"Snyder, Henry, Fluency — cap. 4" },

  { id:"INF38", materia:"Informatica", testo:"Con una sequenza di n bit quanti simboli diversi si possono rappresentare?",
    opzioni:["2 elevato alla n","n elevato alla seconda","2 per n","n più 2"], corretta:0,
    spiegazione:"Per rappresentare i 95 caratteri di una tastiera latina non bastano 6 bit (64 combinazioni): ne servono 7, che ne forniscono 128.",
    fonte:"Snyder, Henry, Fluency — cap. 5" },

  { id:"INF39", materia:"Informatica", testo:"Il codice ASCII originale è una codifica a:",
    opzioni:["4 bit","7 bit, estesa poi a 8 bit (Extended ASCII, ISO-8859-1) per rappresentare le lingue occidentali","8 bit fin dall'origine","16 bit"], corretta:1,
    spiegazione:"L'ASCII nacque negli Stati Uniti e non copriva le lingue diverse dall'inglese; la sequenza a 8 bit dell'estensione fu battezzata byte, oggi unità standard di misura della memoria.",
    fonte:"Snyder, Henry, Fluency — cap. 5" },

  { id:"INF40", materia:"Informatica", testo:"La codifica UTF-8 è a lunghezza variabile: che cosa significa?",
    opzioni:["Comprime il testo eliminando caratteri","Può codificare solo l'alfabeto latino","A seconda dei caratteri usa un numero diverso di byte, restando compatibile con l'ASCII a un byte","Cambia lunghezza a seconda della connessione"], corretta:2,
    spiegazione:"I caratteri ASCII occupano un byte e iniziano con il bit 0; gli altri insiemi usano due, tre o quattro byte, ciascuno con primo bit 1. Per questo tutte le lingue possono convivere in una pagina web.",
    fonte:"Snyder, Henry, Fluency — cap. 5" },

  { id:"INF41", materia:"Informatica", testo:"Nel sistema esadecimale, a quanti bit corrisponde ogni singola cifra?",
    opzioni:["8","2","16","4"], corretta:3,
    spiegazione:"L'esadecimale usa sedici simboli (0-9 e A-F) e ogni cifra corrisponde esattamente a un gruppo di 4 bit: per questo è comodo per gli esseri umani nel leggere lunghe sequenze binarie.",
    fonte:"Snyder, Henry, Fluency — cap. 5" },

  { id:"INF42", materia:"Informatica", testo:"Il controllo di parità serve a:",
    opzioni:["Rilevare errori nella memoria o nella trasmissione, aggiungendo un bit che rende pari il numero di 1","Comprimere i dati","Cifrare i dati","Aumentare la velocità di trasmissione"], corretta:0,
    spiegazione:"Aggiungendo un nono bit a ogni byte, il numero complessivo di 1 resta pari: un errore lo rende dispari e viene automaticamente rilevato.",
    fonte:"Snyder, Henry, Fluency — cap. 5" },

  { id:"INF43", materia:"Informatica", testo:"Nella codifica RGB usata dai computer, un singolo pixel occupa normalmente:",
    opzioni:["3 bit","3 byte, cioè 24 bit, uno per ciascuna intensità di rosso, verde e blu","1 byte in totale","4 bit"], corretta:1,
    spiegazione:"Ogni subpixel ha un'intensità da 0 a 255: il nero corrisponde a tutte le luci spente, il bianco a tutte accese al massimo. Colori con le tre intensità uguali sono tonalità di grigio.",
    fonte:"Snyder, Henry, Fluency — cap. 6" },

  { id:"INF44", materia:"Informatica", testo:"Secondo la regola di Nyquist, per digitalizzare correttamente un suono la frequenza di campionamento deve essere:",
    opzioni:["La metà della frequenza massima","Indipendente dalla frequenza del suono","Almeno il doppio della frequenza massima da registrare","Uguale alla frequenza massima"], corretta:2,
    spiegazione:"Poiché l'orecchio umano arriva a circa 20.000 Hz, servono almeno 40.000 campioni al secondo: nei CD si è scelta la frequenza di 44.100 Hz.",
    fonte:"Snyder, Henry, Fluency — cap. 6" },

  { id:"INF45", materia:"Informatica", testo:"Nel processo di digitalizzazione del suono, il convertitore analogico-digitale (ADC):",
    opzioni:["Trasforma i numeri binari in onda elettrica","Comprime i file audio","Amplifica il segnale dell'altoparlante","Campiona l'onda continua a intervalli regolari producendo numeri binari"], corretta:3,
    spiegazione:"Il percorso inverso, dalla memoria all'altoparlante, è affidato al convertitore digitale-analogico (DAC), che ricostruisce l'onda elettrica a partire dai valori digitali.",
    fonte:"Snyder, Henry, Fluency — cap. 6" },

  { id:"INF46", materia:"Informatica", testo:"La compressione JPEG sfrutta il fatto che l'occhio umano:",
    opzioni:["È sensibile alle piccole variazioni di luminosità (luminanza) ma poco a quelle di colore (crominanza)","Percepisce solo il bianco e nero","Non distingue i contorni","È più sensibile al colore che alla luce"], corretta:0,
    spiegazione:"Per questo JPEG conserva la luminanza e semplifica la crominanza, arrivando a comprimere 10:1 senza perdita apparente di qualità finché l'immagine non inizia a squadrettarsi.",
    fonte:"Snyder, Henry, Fluency — cap. 6" },

  { id:"INF47", materia:"Informatica", testo:"Nella compressione MPEG dei filmati, oltre alla compressione dei singoli fotogrammi si sfrutta:",
    opzioni:["L'aumento della frequenza dei fotogrammi","La coerenza fra fotogrammi consecutivi, registrando solo le differenze","La riduzione del numero di colori a due","L'eliminazione dell'audio"], corretta:1,
    spiegazione:"Poiché due immagini successive sono di norma molto simili, trasmettere solo le differenze consente rapporti di compressione molto elevati.",
    fonte:"Snyder, Henry, Fluency — cap. 6" },

  { id:"INF48", materia:"Informatica", testo:"La codifica run-length è un esempio di compressione:",
    opzioni:["Applicabile solo all'audio","Che richiede sempre una chiave di cifratura","Senza perdita (lossless): la rappresentazione originale può essere ricostruita perfettamente","Con perdita, come JPEG"], corretta:2,
    spiegazione:"Nelle compressioni lossy, come MP3 e JPEG, la rappresentazione di partenza non è più ricostruibile: si scarta ciò che i sensi umani non percepiscono.",
    fonte:"Snyder, Henry, Fluency — cap. 6" },

  { id:"INF49", materia:"Informatica", testo:"Che cos'è la latenza?",
    opzioni:["La quantità di informazione trasmessa per unità di tempo","Il numero di pacchetti persi","La capacità di memoria del server","Il tempo impiegato per creare o trasmettere l'informazione"], corretta:3,
    spiegazione:"L'ampiezza di banda misura invece la quantità di informazione per unità di tempo: dividendo la quantità da trasmettere per la banda si ottiene la latenza minima.",
    fonte:"Snyder, Henry, Fluency — cap. 6" },

  { id:"INF50", materia:"Informatica", testo:"Il «principio del mezzo universale indifferente» afferma che:",
    opzioni:["I bit possono rappresentare qualsiasi informazione discreta e non hanno alcun significato intrinseco","Ogni sequenza di bit ha un unico significato possibile","I bit rappresentano sempre numeri binari","Solo i numeri possono essere digitalizzati"], corretta:0,
    spiegazione:"Il significato dei bit dipende interamente dall'interpretazione che vi associano i programmi: la stessa sequenza può essere un numero, un carattere ASCII o un colore RGB.",
    fonte:"Snyder, Henry, Fluency — cap. 6" },

  { id:"INF51", materia:"Informatica", testo:"Il riconoscimento ottico dei caratteri (OCR) serve a:",
    opzioni:["Migliorare la risoluzione di una fotografia","Convertire in testo i pixel di un'immagine, rendendo possibile la ricerca di parole","Comprimere le immagini","Cifrare i documenti"], corretta:1,
    spiegazione:"Una pagina acquisita come immagine descrive soltanto la colorazione dei pixel: l'OCR individua i bordi, li categorizza in caratteristiche distintive e ricostruisce i caratteri.",
    fonte:"Snyder, Henry, Fluency — cap. 6" },

  { id:"INF52", materia:"Informatica", testo:"Nella gestione dei dati personali, il regime di «opt-in» prevede che:",
    opzioni:["I dati possano essere usati liberamente","I dati siano cancellati subito dopo la transazione","L'uso dei dati per scopi ulteriori richieda un'autorizzazione esplicita dell'interessato","L'interessato debba vietare esplicitamente l'uso ulteriore"], corretta:2,
    spiegazione:"Nell'opt-out il consenso è presunto e l'interessato deve negarlo espressamente; le altre possibilità elencate vanno dal nessun uso al nessun limite.",
    fonte:"Snyder, Henry, Fluency — cap. 10" },

  { id:"INF53", materia:"Informatica", testo:"I principi di Fair Information Practice, riferimento internazionale sulla privacy, furono elaborati nel 1980:",
    opzioni:["Dall'ONU","Dalla Commissione europea","Dal governo degli Stati Uniti","Dall'OCSE (OECD)"], corretta:3,
    spiegazione:"Gli otto punti riguardano raccolta limitata, scopo, qualità, limitazioni d'uso, sicurezza, apertura, partecipazione e responsabilità. Gli Stati Uniti non hanno una legge generale ispirata a questi principi, ma un approccio settoriale.",
    fonte:"Snyder, Henry, Fluency — cap. 10" },

  { id:"INF54", materia:"Informatica", testo:"La navigazione «in incognito» o InPrivate:",
    opzioni:["Agisce solo lato client, cioè sulle informazioni memorizzate nel nostro computer, e non su ciò che fanno i server","Impedisce ai siti di raccogliere dati su di noi","Cifra tutto il traffico di rete","Elimina i cookie di terze parti da internet"], corretta:0,
    spiegazione:"Tracciamento e navigazione privata sono cose diverse: il tracciamento avviene sui server e presso i fornitori di contenuti, che continuano a registrare la visita.",
    fonte:"Snyder, Henry, Fluency — cap. 10" },

  { id:"INF55", materia:"Informatica", testo:"Perché è consigliabile bloccare i cookie di terze parti?",
    opzioni:["Perché impediscono l'autenticazione ai siti","Perché sono uno dei metodi più usati per tracciare i comportamenti di navigazione a fini pubblicitari","Perché rallentano la connessione","Perché contengono sempre virus"], corretta:1,
    spiegazione:"Le prime due parti sono l'utente e il server visitato; la terza è tipicamente una società di inserzioni pubblicitarie. I cookie di prima parte, nati in Netscape, servono invece a mantenere la sessione.",
    fonte:"Snyder, Henry, Fluency — cap. 10" },

  { id:"INF56", materia:"Informatica", testo:"Qual è la differenza fra un virus e un worm?",
    opzioni:["Il virus riguarda solo le reti aziendali","Non c'è differenza tecnica","Il virus viaggia nascosto dentro un altro programma, il worm si riproduce da sé e si invia ai contatti dell'utente","Il worm danneggia l'hardware, il virus no"], corretta:2,
    spiegazione:"Fra le altre forme di malware: l'exploit sfrutta i bug del software, il cavallo di Troia si maschera da programma innocuo, la backdoor apre un accesso e il rootkit combatte le difese del sistema.",
    fonte:"Snyder, Henry, Fluency — cap. 10" },

  { id:"INF57", materia:"Informatica", testo:"Nella crittografia a chiave pubblica:",
    opzioni:["Mittente e destinatario usano la stessa chiave segreta","La chiave viene inviata insieme al messaggio","Non è necessaria alcuna chiave","Il destinatario pubblica una chiave che serve solo a cifrare, mentre la decifratura richiede un'informazione nota solo a lui"], corretta:3,
    spiegazione:"La chiave pubblica nasce dal prodotto di grandi numeri primi: la sicurezza si fonda sulla difficoltà di fattorizzarli. Risolve così il problema dello scambio della chiave su un canale non protetto.",
    fonte:"Snyder, Henry, Fluency — cap. 10" },

  { id:"INF58", materia:"Informatica", testo:"In un foglio elettronico, la notazione A1:B10 indica:",
    opzioni:["Un intervallo di celle contigue, dalla prima all'ultima indicata","La divisione fra due celle","Un collegamento a un altro foglio","Una formula condizionale"], corretta:0,
    spiegazione:"Il foglio elettronico organizza l'informazione in una matrice di celle; i due punti individuano il gruppo di celle contigue compreso fra i due estremi.",
    fonte:"Snyder, Henry, Fluency — cap. 12" },
/* ---- Marketing (Kotler, Armstrong) — dagli appunti ---- */
  { id:"MKT16", materia:"Marketing", testo:"Nel processo di marketing in cinque fasi, l'ultima consiste nel:",
    opzioni:["Comprendere il mercato e i bisogni del consumatore","Ottenere valore dai clienti sotto forma di vendite, quota di mercato e profitti","Progettare il marketing mix","Segmentare il mercato"], corretta:1,
    spiegazione:"Nelle prime quattro fasi l'impresa crea valore per il cliente e costruisce la relazione; nella quinta ne raccoglie i frutti, ottenendo in cambio valore dal consumatore.",
    fonte:"Kotler, Armstrong — cap. 1" },

  { id:"MKT17", materia:"Marketing", testo:"Qual è la differenza fra bisogno, desiderio e domanda?",
    opzioni:["Il desiderio precede sempre il bisogno","La domanda riguarda solo i beni di lusso","Il bisogno è uno stato di privazione, il desiderio è la forma che esso assume nella cultura di appartenenza, la domanda è il desiderio sostenuto dal potere d'acquisto","Sono tre sinonimi"], corretta:2,
    spiegazione:"I bisogni sono condizioni di privazione (fisici, sociali, individuali); plasmati da cultura e personalità diventano desideri; sostenuti dal potere d'acquisto generano domanda di mercato.",
    fonte:"Kotler, Armstrong — cap. 1" },

  { id:"MKT18", materia:"Marketing", testo:"La «miopia di marketing» consiste nel:",
    opzioni:["Rivolgersi a segmenti troppo ampi","Investire poco in pubblicità","Fissare prezzi troppo bassi","Concentrarsi sui prodotti esistenti e sui loro attributi, perdendo di vista i bisogni che li generano"], corretta:3,
    spiegazione:"Chi vende trapani rischia di dimenticare che il cliente vuole fori: l'attenzione va ai benefici e ai bisogni, non agli attributi del prodotto.",
    fonte:"Kotler, Armstrong — cap. 1" },

  { id:"MKT19", materia:"Marketing", testo:"Il concetto di marketing adotta una prospettiva «outside-in», mentre il concetto di vendita ne adotta una opposta. Che cosa significa?",
    opzioni:["Il concetto di marketing parte da un mercato ben definito e dai bisogni del cliente; il concetto di vendita parte dai prodotti esistenti dell'impresa","Il concetto di marketing riguarda solo i mercati esteri","Il concetto di vendita parte dai bisogni del cliente","Le due prospettive coincidono nel lungo periodo"], corretta:0,
    spiegazione:"Partendo dall'interno, il concetto di vendita punta a transazioni di breve periodo con promozione aggressiva; il concetto di marketing genera profitti costruendo relazioni durature.",
    fonte:"Kotler, Armstrong — cap. 1" },

  { id:"MKT20", materia:"Marketing", testo:"Il concetto di marketing sociale richiede all'impresa di conciliare:",
    opzioni:["Le esigenze dei fornitori e quelle dei distributori","I profitti dell'impresa, i desideri del consumatore e gli interessi di lungo periodo della collettività","Solo profitti e quota di mercato","Solo i desideri immediati del consumatore"], corretta:1,
    spiegazione:"Il concetto di marketing sociale mette in discussione i possibili conflitti fra i desideri a breve termine del consumatore e il suo benessere, e quello collettivo, a lungo termine.",
    fonte:"Kotler, Armstrong — cap. 1" },

  { id:"MKT21", materia:"Marketing", testo:"La soddisfazione del cliente (customer satisfaction) dipende:",
    opzioni:["Dalla quota di mercato dell'impresa","Dalla quantità di pubblicità ricevuta","Dal rapporto fra le prestazioni percepite del prodotto e le aspettative dell'acquirente","Solo dal prezzo pagato"], corretta:2,
    spiegazione:"Se le prestazioni sono sotto le aspettative il cliente è insoddisfatto, se le eguagliano è soddisfatto, se le superano è entusiasta: per questo conviene promettere meno di quanto si può mantenere.",
    fonte:"Kotler, Armstrong — cap. 1" },

  { id:"MKT22", materia:"Marketing", testo:"Il valore percepito dal cliente è:",
    opzioni:["Il prezzo di listino del prodotto","Il costo di produzione più il margine","Il valore contabile della marca","La sua percezione del rapporto fra tutti i benefici e tutti i costi di un'offerta, confrontata con quelle della concorrenza"], corretta:3,
    spiegazione:"I clienti non compiono valutazioni obiettive: agiscono in base al valore percepito, che non sempre coincide con il valore reale dell'offerta.",
    fonte:"Kotler, Armstrong — cap. 1" },

  { id:"MKT23", materia:"Marketing", testo:"Nella classificazione della clientela per profittabilità e fedeltà, le «butterflies» sono clienti:",
    opzioni:["Molto profittevoli ma fedeli solo per brevi periodi","Poco profittevoli e poco fedeli","Molto profittevoli e molto fedeli","Fedeli ma poco profittevoli"], corretta:0,
    spiegazione:"Con le farfalle conviene sfruttare il periodo di attività con campagne promozionali mirate; con gli «strangers», poco fedeli e poco redditizi, la scelta migliore è non investire.",
    fonte:"Kotler, Armstrong — cap. 1" },

  { id:"MKT24", materia:"Marketing", testo:"La customer equity (valore della clientela) è:",
    opzioni:["Il fatturato annuo generato dai nuovi clienti","Il valore complessivo di tutti i clienti attuali e potenziali dell'impresa per l'intero ciclo di vita, al netto dei costi di acquisizione","Il capitale sociale dell'impresa","Il valore di mercato del marchio"], corretta:1,
    spiegazione:"È l'obiettivo finale del customer relationship management: maggiore è la fedeltà della clientela, maggiore è il valore complessivo che essa genera nel tempo.",
    fonte:"Kotler, Armstrong — cap. 1" },

  { id:"MKT25", materia:"Marketing", testo:"La «quota di clientela» (customer share) indica:",
    opzioni:["La quota di mercato dell'impresa","Il numero di clienti persi ogni anno","La percentuale degli acquisti di un cliente nella sua categoria di prodotto che l'impresa riesce a intercettare","La percentuale di clienti soddisfatti"], corretta:2,
    spiegazione:"Si accresce ampliando la gamma offerta ai clienti attuali e con tecniche di cross-selling e up-selling, cioè proponendo prodotti complementari o di fascia superiore.",
    fonte:"Kotler, Armstrong — cap. 1" },

  { id:"MKT26", materia:"Marketing", testo:"Nella matrice del Boston Consulting Group, una SBU con quota di mercato elevata in un mercato a bassa crescita è:",
    opzioni:["Una star","Un question mark","Un dog","Una cash cow"], corretta:3,
    spiegazione:"Le cash cow sono attività affermate che richiedono investimenti limitati: generano la liquidità con cui sostenere star e question mark.",
    fonte:"Kotler, Armstrong — cap. 2" },

  { id:"MKT27", materia:"Marketing", testo:"Nella matrice BCG, un «question mark» (dilemma) è un'attività:",
    opzioni:["Con bassa quota di mercato in un mercato in forte crescita, che richiede ingenti investimenti","Con alta quota in un mercato stagnante","Con alta quota in un mercato in crescita","Con bassa quota in un mercato stagnante"], corretta:0,
    spiegazione:"Il percorso tipico di una SBU parte dal question mark, passa per star e cash cow e finisce come dog; la matrice, però, fotografa il presente e non pianifica il futuro.",
    fonte:"Kotler, Armstrong — cap. 2" },

  { id:"MKT28", materia:"Marketing", testo:"Nella matrice prodotto/mercato di Ansoff, vendere prodotti esistenti in nuovi mercati geografici o demografici corrisponde a una strategia di:",
    opzioni:["Diversificazione","Sviluppo del mercato","Penetrazione del mercato","Sviluppo del prodotto"], corretta:1,
    spiegazione:"La penetrazione aumenta le vendite dei prodotti attuali nei mercati attuali; lo sviluppo del prodotto immette nuovi prodotti nei mercati attuali; la diversificazione riguarda prodotti e mercati entrambi nuovi.",
    fonte:"Kotler, Armstrong — cap. 2" },

  { id:"MKT29", materia:"Marketing", testo:"La catena del valore dell'impresa indica:",
    opzioni:["La successione dei prezzi di vendita nel tempo","La struttura gerarchica dell'organizzazione","L'insieme delle funzioni aziendali che, progettando, producendo, distribuendo e sostenendo i prodotti, generano valore per il cliente","La sequenza dei ricarichi applicati lungo il canale distributivo"], corretta:2,
    spiegazione:"Il successo dipende dal coordinamento fra le funzioni; guardando oltre i confini aziendali si arriva alla rete valore-servizio, che comprende fornitori, distributori e clienti.",
    fonte:"Kotler, Armstrong — cap. 2" },

  { id:"MKT30", materia:"Marketing", testo:"Secondo il testo, la missione aziendale dovrebbe essere definita:",
    opzioni:["In base ai volumi di produzione","In base ai concorrenti da superare","In base al rendimento atteso per gli azionisti","In base al modo in cui l'impresa crea valore per i clienti, non in base a ciò che produce"], corretta:3,
    spiegazione:"Una missione formulata in termini di prodotto invecchia con il prodotto; una missione centrata sul valore per il cliente guida l'impresa anche quando cambiano tecnologie e mercati.",
    fonte:"Kotler, Armstrong — cap. 2" },

  { id:"MKT31", materia:"Marketing", testo:"Le principali variabili con cui si segmenta un mercato di consumo sono:",
    opzioni:["Geografiche, demografiche, psicografiche e comportamentali","Solo demografiche e geografiche","Solo relative al prezzo","Produttive e distributive"], corretta:0,
    spiegazione:"Un segmento di mercato è un gruppo di consumatori che risponde in modo analogo agli stimoli di marketing dell'impresa.",
    fonte:"Kotler, Armstrong — cap. 7" },

  { id:"MKT32", materia:"Marketing", testo:"Nel modello stimolo-risposta del comportamento d'acquisto, la «scatola nera» del consumatore indica:",
    opzioni:["Il budget destinato alla pubblicità","I processi mentali con cui gli stimoli si trasformano in reazioni, non direttamente osservabili","L'insieme dei dati raccolti dalle ricerche di mercato","Il punto vendita in cui avviene l'acquisto"], corretta:1,
    spiegazione:"Gli stimoli di marketing (le quattro P) e quelli ambientali entrano nella scatola nera; il compito dell'operatore di marketing è capire che cosa vi accade, perché la mente non funziona in modo lineare.",
    fonte:"Kotler, Armstrong — cap. 5" },

  { id:"MKT33", materia:"Marketing", testo:"Quali sono le quattro grandi categorie di fattori che influenzano il comportamento d'acquisto del consumatore?",
    opzioni:["Interni, esterni, diretti e indiretti","Razionali, emotivi, individuali e collettivi","Culturali, sociali, personali e psicologici","Economici, politici, giuridici e tecnologici"], corretta:2,
    spiegazione:"Fra i culturali rientrano cultura, subcultura e classe sociale; fra i sociali i gruppi, la famiglia, ruoli e status; fra i personali età, occupazione, stile di vita; fra gli psicologici motivazione, percezione, apprendimento e convinzioni.",
    fonte:"Kotler, Armstrong — cap. 5" },

  { id:"MKT34", materia:"Marketing", testo:"Un «gruppo di aspirazione» è:",
    opzioni:["Il gruppo familiare di origine","Qualsiasi gruppo di cui si è membri","Un gruppo creato dall'impresa per il lancio di un prodotto","Un gruppo a cui l'individuo non appartiene ma a cui vorrebbe appartenere"], corretta:3,
    spiegazione:"I gruppi di appartenenza esercitano un'influenza diretta sui membri; i gruppi di riferimento fungono da termine di confronto; quelli di aspirazione sono l'ambiente a cui si spera di accedere.",
    fonte:"Kotler, Armstrong — cap. 5" },

  { id:"MKT35", materia:"Marketing", testo:"Il buzz marketing consiste nel:",
    opzioni:["Coinvolgere leader d'opinione perché diventino ambasciatori della marca e ne parlino nella loro rete di relazioni","Acquistare spazi pubblicitari in televisione","Abbassare temporaneamente i prezzi","Inviare cataloghi per posta"], corretta:0,
    spiegazione:"I leader d'opinione influenzano gli altri grazie a competenze, personalità o rete di relazioni: il passaparola così attivato risulta più credibile della pubblicità.",
    fonte:"Kotler, Armstrong — cap. 5" },

  { id:"MKT36", materia:"Marketing", testo:"Lo stile di vita di un consumatore viene misurato lungo le dimensioni AIO, cioè:",
    opzioni:["Attenzione, informazione e ordine","Attività, interessi e opinioni","Acquisti, investimenti e obiettivi","Aspettative, immagine e occupazione"], corretta:1,
    spiegazione:"Lo stile di vita è il modello di vita in termini psicografici: va oltre la classe sociale e la personalità, e descrive lo schema di azioni e interazioni con il mondo esterno.",
    fonte:"Kotler, Armstrong — cap. 5" },

  { id:"MKT37", materia:"Marketing", testo:"La «personalità di marca» è:",
    opzioni:["Il tono di voce usato dai venditori","La reputazione finanziaria dell'azienda","La combinazione di caratteristiche umane attribuibili a una marca, come sincerità, competenza o raffinatezza","Il carattere del fondatore dell'impresa"], corretta:2,
    spiegazione:"I consumatori tendono a scegliere marche con una personalità affine alla propria o al proprio concetto di sé: la comunicazione lavora spesso su questa corrispondenza.",
    fonte:"Kotler, Armstrong — cap. 5" },

  { id:"MKT38", materia:"Marketing", testo:"La ricerca motivazionale è:",
    opzioni:["Un'indagine statistica sui volumi di vendita","Il calcolo del ritorno sugli investimenti pubblicitari","Un test di gradimento del prezzo","Una ricerca qualitativa volta a indagare le motivazioni inconsce e nascoste del consumatore"], corretta:3,
    spiegazione:"Nasce dall'idea, di matrice freudiana, che l'acquirente sia in larga parte inconsapevole delle forze che guidano il suo comportamento; vi lavorano psicologi, antropologi e altri esperti di scienze sociali.",
    fonte:"Kotler, Armstrong — cap. 5" },

  { id:"MKT39", materia:"Marketing", testo:"Quali sono i cinque strumenti del mix promozionale?",
    opzioni:["Pubblicità, promozione delle vendite, vendita personale, pubbliche relazioni e marketing diretto","Prodotto, prezzo, punto vendita, promozione e persone","Televisione, radio, stampa, affissioni e internet","Segmentazione, targeting, posizionamento, prezzo e distribuzione"], corretta:0,
    spiegazione:"Il mix della comunicazione di marketing combina questi cinque strumenti per trasmettere valore al cliente e costruire relazioni.",
    fonte:"Kotler, Armstrong — cap. 14" },

  { id:"MKT40", materia:"Marketing", testo:"La pubblicità è definita come:",
    opzioni:["Un contatto diretto con singoli clienti","Promozione non personale di idee, beni o servizi svolta dietro compenso da un promotore identificato","Presentazione personale svolta dalla forza vendita","Un incentivo di breve periodo all'acquisto"], corretta:1,
    spiegazione:"La promozione delle vendite è invece un incentivo di breve periodo, la vendita personale una presentazione diretta, le pubbliche relazioni mirano a un'immagine favorevole, il marketing diretto contatta singoli clienti.",
    fonte:"Kotler, Armstrong — cap. 14" },

  { id:"MKT41", materia:"Marketing", testo:"La comunicazione integrata di marketing (CIM) consiste nel:",
    opzioni:["Affidare la comunicazione a più agenzie indipendenti","Comunicare solo attraverso i canali digitali","Coordinare tutti i canali di comunicazione dell'impresa per trasmettere un messaggio chiaro e coerente","Concentrare tutto il budget sulla televisione"], corretta:2,
    spiegazione:"Senza integrazione, pubblicità, campagne prezzi ed etichette possono trasmettere messaggi diversi, generando una percezione confusa della marca.",
    fonte:"Kotler, Armstrong — cap. 14" },

  { id:"MKT42", materia:"Marketing", testo:"Nel processo di comunicazione a nove elementi, il «rumore» è:",
    opzioni:["Il volume della pubblicità televisiva","La quantità di messaggi concorrenti sul mercato","La reazione negativa del pubblico","La distorsione o l'interferenza non prevista per cui il destinatario percepisce un messaggio diverso da quello inviato"], corretta:3,
    spiegazione:"Gli altri elementi sono emittente, codifica, messaggio, mezzo, decodifica, destinatario, risposta e feedback: il consumatore distratto durante lo spot è un caso tipico di rumore.",
    fonte:"Kotler, Armstrong — cap. 14" },

  { id:"MKT43", materia:"Marketing", testo:"Gli stadi di disponibilità all'acquisto del pubblico obiettivo sono, nell'ordine:",
    opzioni:["Consapevolezza, conoscenza, gradimento, preferenza, convinzione, acquisto","Attenzione, interesse, desiderio, azione, fedeltà, riacquisto","Bisogno, desiderio, domanda, scelta, acquisto, uso","Contatto, prova, adozione, fedeltà, passaparola, abbandono"], corretta:0,
    spiegazione:"Il responsabile della comunicazione deve sapere a quale stadio si trova il pubblico e verso quale stadio va condotto: da questo dipendono contenuto e forma del messaggio.",
    fonte:"Kotler, Armstrong — cap. 14" },

  { id:"MKT44", materia:"Marketing", testo:"Il passaggio dal broadcasting al «narrowcasting» nella comunicazione di marketing indica:",
    opzioni:["Il ritorno ai grandi mezzi di massa","Lo spostamento verso media più specializzati e mirati, rivolti a segmenti di pubblico ristretti","La riduzione dei budget pubblicitari","L'abbandono di ogni forma di pubblicità"], corretta:1,
    spiegazione:"Costi crescenti dei mass media, pubblici più frammentati e nuove tecnologie spingono verso riviste specializzate, canali tematici, e-mail, podcast, telefoni e social network.",
    fonte:"Kotler, Armstrong — cap. 14" },

  { id:"MKT45", materia:"Marketing", testo:"Il customer relationship management (CRM) indica:",
    opzioni:["La gestione dei rapporti con i fornitori","Il controllo dei costi di distribuzione","L'intero processo di creazione e mantenimento di relazioni profittevoli con i clienti mediante valore e soddisfazione superiori","Esclusivamente il software di gestione dei contatti"], corretta:2,
    spiegazione:"Include la gestione dei dati di clientela e delle occasioni di contatto, ma il suo senso è più ampio: massimizzare fedeltà, valore del ciclo di vita del cliente e customer equity.",
    fonte:"Kotler, Armstrong — cap. 1" },

  { id:"MKT46", materia:"Marketing", testo:"Il partner relationship management riguarda:",
    opzioni:["La gestione degli azionisti di minoranza","L'accordo fra imprese concorrenti sui prezzi","La selezione del personale di vendita","La collaborazione con partner interni all'impresa ed esterni, lungo tutta la catena di fornitura, per creare valore per il cliente"], corretta:3,
    spiegazione:"Fornitori e distributori non sono soltanto venditori e clienti: sono partner che concorrono all'offerta di valore, e vanno gestiti con la stessa cura riservata ai clienti.",
    fonte:"Kotler, Armstrong — cap. 1" },
/* ---- Statistica (Agresti, Finlay) — integrazione ---- */
  { id:"STA16", materia:"Statistica", testo:"Il numero di figli per famiglia è una variabile:",
    opzioni:["Quantitativa discreta","Quantitativa continua","Qualitativa nominale","Qualitativa ordinale"], corretta:0,
    spiegazione:"Assume valori numerici isolati e conteggiabili; una variabile continua, come l'altezza, può assumere qualunque valore in un intervallo.",
    fonte:"Agresti, Finlay — cap. 2" },

  { id:"STA17", materia:"Statistica", testo:"Una scala Likert con modalità «per niente d'accordo, poco, abbastanza, molto d'accordo» produce una variabile:",
    opzioni:["Di rapporti","Ordinale","Nominale","A intervalli"], corretta:1,
    spiegazione:"Le modalità sono ordinate ma le distanze fra loro non sono quantificabili: tecnicamente non si dovrebbe calcolarne la media, mentre la mediana è appropriata.",
    fonte:"Agresti, Finlay — cap. 2" },

  { id:"STA18", materia:"Statistica", testo:"Lo scarto interquartile (IQR) è:",
    opzioni:["La media degli scarti dalla media","La radice quadrata della varianza","La differenza fra il terzo e il primo quartile, cioè l'ampiezza dell'intervallo che contiene il 50% centrale dei dati","La differenza fra valore massimo e minimo"], corretta:2,
    spiegazione:"È una misura di dispersione robusta rispetto ai valori anomali, coerente con la mediana; il campo di variazione (range) è invece massimo meno minimo.",
    fonte:"Agresti, Finlay — cap. 3" },

  { id:"STA19", materia:"Statistica", testo:"Che rapporto c'è fra varianza e deviazione standard?",
    opzioni:["Sono la stessa cosa","La varianza è la radice quadrata della deviazione standard","La deviazione standard è la varianza divisa per n","La deviazione standard è la radice quadrata della varianza ed è espressa nella stessa unità di misura dei dati"], corretta:3,
    spiegazione:"Poiché la varianza è una media di scarti al quadrato, la sua unità di misura è al quadrato: la radice riporta l'indice alla scala originale, rendendolo interpretabile.",
    fonte:"Agresti, Finlay — cap. 3" },

  { id:"STA20", materia:"Statistica", testo:"Un punteggio z pari a −2 indica che l'osservazione:",
    opzioni:["Si colloca due deviazioni standard sotto la media","Vale due unità in meno della media","Ha probabilità del 2% di verificarsi","È il secondo valore più basso della distribuzione"], corretta:0,
    spiegazione:"La standardizzazione esprime ogni valore come numero di deviazioni standard di distanza dalla media, rendendo confrontabili variabili misurate su scale diverse.",
    fonte:"Agresti, Finlay — cap. 4" },

  { id:"STA21", materia:"Statistica", testo:"Il teorema del limite centrale afferma che, per campioni sufficientemente numerosi:",
    opzioni:["La varianza campionaria tende a zero","La distribuzione campionaria della media è approssimativamente normale, qualunque sia la forma della distribuzione della popolazione","La popolazione tende a distribuirsi normalmente","La media campionaria coincide con quella della popolazione"], corretta:1,
    spiegazione:"È il risultato che giustifica l'uso della distribuzione normale nell'inferenza anche quando i dati di partenza non sono normali.",
    fonte:"Agresti, Finlay — cap. 4" },

  { id:"STA22", materia:"Statistica", testo:"A parità di altre condizioni, un intervallo di confidenza al 99% rispetto a uno al 95% è:",
    opzioni:["Della stessa ampiezza","Calcolabile solo su campioni piccoli","Più ampio, perché una maggiore confidenza richiede un margine d'errore più grande","Più stretto"], corretta:2,
    spiegazione:"Aumentare la confidenza significa accettare meno rischio di sbagliare, e quindi coprire un intervallo di valori più ampio; per stringerlo occorre aumentare la numerosità campionaria.",
    fonte:"Agresti, Finlay — cap. 5" },

  { id:"STA23", materia:"Statistica", testo:"Un sondaggio riporta il 52% di consensi con un margine d'errore di ±3 punti. L'interpretazione corretta è:",
    opzioni:["Il 3% degli intervistati ha risposto in modo errato","Il risultato è sbagliato del 3%","Il 52% è certamente il valore vero","La stima nella popolazione è plausibilmente compresa fra il 49% e il 55%"], corretta:3,
    spiegazione:"Il margine d'errore definisce l'intervallo di confidenza attorno alla stima puntuale: con quel margine, la differenza fra 52% e 48% non è statisticamente conclusiva.",
    fonte:"Agresti, Finlay — cap. 5" },

  { id:"STA24", materia:"Statistica", testo:"Nella verifica di ipotesi, l'ipotesi nulla:",
    opzioni:["Esprime tipicamente l'assenza di effetto o di differenza ed è quella sottoposta a verifica","Afferma sempre l'esistenza di un effetto","È l'ipotesi che il ricercatore vuole dimostrare","Coincide con l'ipotesi alternativa"], corretta:0,
    spiegazione:"L'ipotesi alternativa esprime invece l'effetto atteso dal ricercatore; il test può portare a rifiutare H0, mai a dimostrarla.",
    fonte:"Agresti, Finlay — cap. 6" },

  { id:"STA25", materia:"Statistica", testo:"Un risultato statisticamente significativo:",
    opzioni:["Implica che l'effetto sia di grande entità","Non è necessariamente rilevante sul piano pratico, soprattutto con campioni molto grandi","È sempre importante nella sostanza","Dimostra un rapporto di causa-effetto"], corretta:1,
    spiegazione:"Con campioni molto numerosi anche differenze minime risultano significative: accanto al p-value occorre valutare la dimensione dell'effetto e il suo significato sostantivo.",
    fonte:"Agresti, Finlay — cap. 6" },

  { id:"STA26", materia:"Statistica", testo:"La differenza fondamentale fra uno studio osservazionale e un esperimento è che nell'esperimento:",
    opzioni:["Il campione è più numeroso","Non si usano gruppi di confronto","Il ricercatore assegna i soggetti ai trattamenti, di norma in modo casuale","I dati sono raccolti con un questionario"], corretta:2,
    spiegazione:"L'assegnazione casuale rende i gruppi mediamente equivalenti rispetto alle altre variabili: per questo l'esperimento consente conclusioni causali che lo studio osservazionale non permette.",
    fonte:"Agresti, Finlay — cap. 2" },

  { id:"STA27", materia:"Statistica", testo:"Un campione raccolto intervistando i passanti in una piazza è un esempio di:",
    opzioni:["Campione casuale semplice","Campione stratificato","Campione a grappoli","Campione di convenienza, soggetto a distorsione di selezione"], corretta:3,
    spiegazione:"Nei campioni non probabilistici non tutti hanno la stessa possibilità di essere scelti: le stime che ne derivano non sono generalizzabili alla popolazione.",
    fonte:"Agresti, Finlay — cap. 2" },

  { id:"STA28", materia:"Statistica", testo:"In una regressione lineare, il coefficiente di determinazione R² indica:",
    opzioni:["La quota di variabilità della variabile dipendente spiegata dal modello","La pendenza della retta di regressione","La probabilità che il modello sia corretto","Il numero di variabili indipendenti"], corretta:0,
    spiegazione:"Varia fra 0 e 1: più è vicino a 1, maggiore è la parte di variazione della Y che il modello riesce a rendere conto. Non dice però nulla sulla correttezza causale del modello.",
    fonte:"Agresti, Finlay — cap. 9" },

  { id:"STA29", materia:"Statistica", testo:"In una tabella di contingenza che incrocia titolo di studio e voto, per confrontare correttamente i gruppi conviene calcolare:",
    opzioni:["La deviazione standard delle frequenze","Le percentuali di riga o di colonna, non le sole frequenze assolute","Solo il totale generale","La media dei valori della tabella"], corretta:1,
    spiegazione:"Le frequenze assolute dipendono dalla numerosità dei gruppi: solo le percentuali calcolate all'interno di ciascun gruppo rendono confrontabili distribuzioni di ampiezza diversa.",
    fonte:"Agresti, Finlay — cap. 8" },

  { id:"STA30", materia:"Statistica", testo:"Nella regressione multipla si introducono più variabili indipendenti soprattutto per:",
    opzioni:["Ridurre la numerosità campionaria necessaria","Trasformare variabili qualitative in quantitative","Stimare l'effetto di ciascuna variabile tenendo sotto controllo le altre","Aumentare automaticamente la significatività"], corretta:2,
    spiegazione:"È il modo statistico di «controllare» le variabili di confondimento: il coefficiente esprime l'effetto di una variabile a parità delle altre incluse nel modello.",
    fonte:"Agresti, Finlay — cap. 11" },

  /* ---- Inglese — integrazione (livello B2, lessico di comunicazione e impresa) ---- */
  { id:"ENG09", materia:"Inglese", testo:"By the time the meeting started, the team ______ the presentation.",
    opzioni:["was finishing","finishes","has finished","had finished"], corretta:3,
    spiegazione:"Il past perfect indica l'azione anteriore a un altro momento del passato, qui segnalato da «by the time»." },

  { id:"ENG10", materia:"Inglese", testo:"The agency, ______ won the award last year, has opened a new office in Milan.",
    opzioni:["which","who","whose","what"], corretta:0,
    spiegazione:"Il pronome relativo si riferisce a una cosa (l'agenzia come entità): «who» si usa per le persone, «whose» esprime possesso." },

  { id:"ENG11", materia:"Inglese", testo:"We need to ______ a decision before the end of the month.",
    opzioni:["do","make","take up","bring"], corretta:1,
    spiegazione:"In inglese si dice «make a decision»; «do» si usa con business, research, homework." },

  { id:"ENG12", materia:"Inglese", testo:"There isn't ______ evidence to support that claim.",
    opzioni:["many","a few","much","several"], corretta:2,
    spiegazione:"«Evidence» è un sostantivo non numerabile: richiede much, little, a great deal of." },

  { id:"ENG13", materia:"Inglese", testo:"The survey results are ______ than we expected.",
    opzioni:["most encouraging","encouraginger","the more encouraging","more encouraging"], corretta:3,
    spiegazione:"Comparativo di maggioranza di un aggettivo lungo: more + aggettivo + than." },

  { id:"ENG14", materia:"Inglese", testo:"In marketing, «target audience» means:",
    opzioni:["The specific group of people a message is intended to reach","The total population of a country","The people who produce the advertisement","The budget allocated to a campaign"], corretta:0,
    spiegazione:"Il pubblico obiettivo è il gruppo definito a cui si rivolgono messaggio e mezzi scelti." },

  { id:"ENG15", materia:"Inglese", testo:"«To raise awareness» of a brand means:",
    opzioni:["To change its logo","To increase how well people know it","To increase its price","To reduce its advertising costs"], corretta:1,
    spiegazione:"Brand awareness indica la notorietà della marca, cioè quanto il pubblico la conosce e la riconosce." },

  { id:"ENG16", materia:"Inglese", testo:"The campaign was so successful ______ the company doubled its budget.",
    opzioni:["as","for","that","than"], corretta:2,
    spiegazione:"Costruzione «so + aggettivo + that» per esprimere la conseguenza." },

  { id:"ENG17", materia:"Inglese", testo:"If the client ______ earlier, we would have changed the schedule.",
    opzioni:["would call","has called","called","had called"], corretta:3,
    spiegazione:"Periodo ipotetico di terzo tipo, riferito a un passato non modificabile: if + past perfect, would have + participio passato." },

  { id:"ENG18", materia:"Inglese", testo:"A «deadline» is:",
    opzioni:["The time by which something must be completed","A line of text in a headline","A cancelled project","A type of contract"], corretta:0,
    spiegazione:"È il termine ultimo per la consegna; «to meet a deadline» significa rispettarlo, «to miss a deadline» non rispettarlo." },

  { id:"ENG19", materia:"Inglese", testo:"The data ______ collected over three years.",
    opzioni:["has","were","was being","is"], corretta:1,
    spiegazione:"Nell'uso scientifico e formale «data» è plurale (singolare: datum), e regge il passivo «were collected»." },

  { id:"ENG20", materia:"Inglese", testo:"Which sentence is correct?",
    opzioni:["He suggested postpone the launch","He suggested to postpone the launch","He suggested postponing the launch","He suggested us to postpone the launch"], corretta:2,
    spiegazione:"Il verbo «suggest» è seguito dalla forma in -ing oppure da una subordinata con that: «he suggested that we postpone the launch»." },
/* ---- Teorie della comunicazione — integrazione (area al 25% del bando) ---- */
  { id:"COM13", materia:"Teorie della comunicazione", testo:"Il concetto di «digital divide» indica:",
    opzioni:["La distinzione fra hardware e software","Il passaggio dall'analogico al digitale","La separazione fra reti pubbliche e private","La disparità nell'accesso e nell'uso delle tecnologie digitali fra aree geografiche e gruppi sociali"], corretta:3,
    spiegazione:"Balbi e Magaudda osservano che la diffusione del digitale è stata globale ma ha amplificato disuguaglianze preesistenti, invece di annullarle.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 1" },

  { id:"COM14", materia:"Teorie della comunicazione", testo:"Con l'espressione «ontofania digitale», ripresa da Stéphane Vial, si indica:",
    opzioni:["Il modo in cui l'universo digitale si manifesta e condiziona l'esperienza e la percezione del mondo contemporaneo","La nascita del primo computer","La teoria matematica dell'informazione","Il processo di conversione dei contenuti in cifre"], corretta:0,
    spiegazione:"Il digitale non è solo un insieme di strumenti: struttura il modo in cui percepiamo la realtà, ed è per questo un centro di interessi culturali, politici ed economici.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 1" },

  { id:"COM15", materia:"Teorie della comunicazione", testo:"Il concetto di «autostrade dell'informazione», al centro dei programmi politici dei primi anni Novanta:",
    opzioni:["Nacque in Giappone negli anni Settanta","Indicava la rete delle reti come infrastruttura strategica per sviluppo economico e accesso universale ai servizi","Riguardava esclusivamente il trasporto merci","Fu proposto dalle sole aziende private"], corretta:1,
    spiegazione:"Nel 1993 gli Stati Uniti lanciano la National Information Infrastructure e l'Unione europea il libro bianco «Crescita, competitività, occupazione», seguito dal rapporto Bangemann.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 1" },

  { id:"COM16", materia:"Teorie della comunicazione", testo:"Secondo l'approccio della costruzione sociale della tecnologia, sostenuto dagli autori:",
    opzioni:["La società non ha alcuna influenza sullo sviluppo tecnico","Le tecnologie evolvono in modo lineare e prevedibile","Tecnologie e società si modellano a vicenda, in un processo di co-costruzione","La tecnologia determina in modo unilaterale i cambiamenti sociali"], corretta:2,
    spiegazione:"È la posizione opposta al determinismo tecnologico: nel processo intervengono elementi politici, economici, culturali e scientifici, e il ruolo degli utilizzatori è decisivo.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — Introduzione" },

  { id:"COM17", materia:"Teorie della comunicazione", testo:"La «convergenza» dei media indica:",
    opzioni:["La fusione fra due emittenti televisive","L'uniformarsi dei gusti del pubblico","La riduzione del numero di quotidiani","L'unificazione, resa possibile dalla digitalizzazione, fra contenuti editoriali, telecomunicazioni e informatica"], corretta:3,
    spiegazione:"La digitalizzazione di contenuti, dispositivi e reti fa cadere i confini fra settori un tempo separati: è una delle cinque idee di società che hanno anticipato quella digitale.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 1" },

  { id:"COM18", materia:"Teorie della comunicazione", testo:"Il termine «prosumer», centrale nel web 2.0, indica:",
    opzioni:["L'utente che è insieme produttore e consumatore di contenuti","Il consumatore professionale di tecnologia","Chi acquista solo prodotti digitali","Il produttore di software proprietario"], corretta:0,
    spiegazione:"I contenuti generati dagli utenti diventano il cuore del web sociale; la participation inequality mostra però che i prosumer attivi restano una nicchia.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 3" },

  { id:"COM19", materia:"Teorie della comunicazione", testo:"Che cosa distingue Wikipedia dal precedente progetto Encarta di Microsoft?",
    opzioni:["Non c'è differenza nel modello editoriale","Wikipedia è orizzontale e aperta alle modifiche degli utenti, Encarta seguiva il modello dell'enciclopedia tradizionale con contenuti di esperti","Wikipedia è a pagamento, Encarta era gratuita","Encarta era scritta dagli utenti"], corretta:1,
    spiegazione:"È l'esempio più citato di intelligenza collettiva: contenuti flessibili, modificabili in tempo reale e senza un meccanismo centrale di produzione.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 3" },

  { id:"COM20", materia:"Teorie della comunicazione", testo:"Nel movimento del software libero e open source, il principio fondamentale è:",
    opzioni:["La vendita del software a prezzo calmierato","L'uso del software solo in ambito accademico","Il lavoro collettivo di programmatori e attivisti per rendere l'informatica libera e condivisa","La protezione brevettuale del codice"], corretta:2,
    spiegazione:"Linux non ha conquistato il desktop, ma è alla base di supercomputer, dispositivi portatili e di Android: la cultura hacker della condivisione ha attraversato tutta la storia del digitale.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 2" },

  { id:"COM21", materia:"Teorie della comunicazione", testo:"Il fallimento del WAP in Occidente alla fine degli anni Novanta si spiega soprattutto con:",
    opzioni:["L'assenza di telefoni cellulari sul mercato","Il divieto imposto dai governi europei","La mancanza di operatori interessati","Scarsa usabilità, lentezza, costi elevati e servizi limitati, mentre il pc si affermava come standard per la navigazione"], corretta:3,
    spiegazione:"In Giappone lo stesso tipo di servizio ebbe grande successo grazie a uno standard più adatto alla rete: la stessa tecnologia produce esiti diversi in contesti socio-culturali diversi.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 4" },

  { id:"COM22", materia:"Teorie della comunicazione", testo:"L'iPhone (2007) segna una svolta soprattutto perché:",
    opzioni:["Introduce lo schermo multi-touch, rendendo il tatto centrale nell'interazione, e avvicina il telefono alla logica del computer","È il primo telefono cellulare al mondo","È il primo telefono con fotocamera","Introduce lo standard GSM"], corretta:0,
    spiegazione:"Insieme a iOS e ad Android, nato in casa Google su base Linux, trasforma il telefono in una piattaforma di applicazioni e nel principale accesso alla rete per le generazioni più giovani.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 4" },

  { id:"COM23", materia:"Teorie della comunicazione", testo:"Nella storia della digitalizzazione della musica, il compact disc:",
    opzioni:["Non ebbe alcun impatto sul mercato","Nasce alla fine degli anni Settanta su impulso di Sony e Philips e porta il digitale nel consumo musicale prima di mp3 e streaming","È successivo alla diffusione dell'mp3","Fu introdotto da Apple"], corretta:1,
    spiegazione:"Il CD digitalizza il supporto ma non la distribuzione: sono mp3, iPod e file sharing, nei primi anni Duemila, a riconfigurare l'intero settore.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 5" },

  { id:"COM24", materia:"Teorie della comunicazione", testo:"L'ipertesto, reso possibile dal linguaggio HTML, si caratterizza per:",
    opzioni:["L'assenza di testo scritto","La sola presenza di immagini","Una lettura non lineare, costruita dal fruitore attraverso i collegamenti, senza inizio e fine prestabiliti","Una struttura rigidamente sequenziale"], corretta:2,
    spiegazione:"Con la pubblicazione gratuita e immediata, è una delle due grandi trasformazioni della scrittura negli anni Novanta: l'utente comune diventa potenziale produttore di testi.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 5" },

  { id:"COM25", materia:"Teorie della comunicazione", testo:"Il «citizen journalism» indica:",
    opzioni:["Il giornalismo praticato solo da professionisti iscritti all'albo","La cronaca locale dei quotidiani","Il servizio pubblico radiotelevisivo","Il coinvolgimento dei cittadini nella produzione e diffusione delle notizie"], corretta:3,
    spiegazione:"La circolazione in rete moltiplica canali e fonti e mette in discussione le gerarchie della stampa tradizionale, contribuendo alla crisi economica della stampa periodica occidentale.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 5" },

  { id:"COM26", materia:"Teorie della comunicazione", testo:"Il confronto fra Netflix e Blockbuster è citato come esempio di:",
    opzioni:["Impresa che adatta il proprio modello alla distribuzione digitale contro impresa che non compie la transizione e fallisce","Fusione fra due grandi gruppi mediali","Fallimento della distribuzione digitale","Intervento pubblico nel settore audiovisivo"], corretta:0,
    spiegazione:"Netflix nasce nel 1999 come noleggio di dvd per posta e diventa piattaforma di streaming; Blockbuster, legato ai punti vendita fisici, fallisce nel 2010.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 5" },

  { id:"COM27", materia:"Teorie della comunicazione", testo:"Perché la digitalizzazione della radio (DAB) ha avuto meno successo di quella televisiva?",
    opzioni:["Perché l'Unione europea non l'ha mai finanziata","Per ragioni politico-economiche, tecniche e culturali: la radio ha un ruolo più periferico e offre meno vantaggi percepiti rispetto alla tv digitale","Perché la radio analogica era già digitale","Perché mancavano le frequenze"], corretta:1,
    spiegazione:"Il progetto europeo Eureka-147 nasce già negli anni Ottanta, ma la transizione resta frammentaria; è invece la rete a rilanciare l'ascolto, con web radio e podcast.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 5" },

  { id:"COM28", materia:"Teorie della comunicazione", testo:"Il controllo cinese della rete, con il Golden Shield e il «partito dei 50 centesimi», dimostra che:",
    opzioni:["Il filtraggio dei contenuti è tecnicamente impossibile","Le piattaforme private sono immuni dalle pressioni statali","La rete non è per natura libera o democratica: le sue caratteristiche dipendono da usi politici, interessi economici e vincoli tecnici","Internet non può essere controllata dai governi"], corretta:2,
    spiegazione:"Il controllo passa soprattutto dagli intermediari — provider, motori di ricerca, moderatori — e smentisce l'idea di un'internet uniforme e globale.",
    fonte:"Balbi, Magaudda, Storia dei media digitali — cap. 3" },

  { id:"COM29", materia:"Teorie della comunicazione", testo:"Il gatekeeping, nella sociologia della comunicazione, indica:",
    opzioni:["La censura esercitata dai governi","La difesa tecnica dell'accesso a una rete","La fidelizzazione del pubblico televisivo","Il processo di selezione con cui redazioni e professionisti decidono quali notizie passano e quali no"], corretta:3,
    spiegazione:"Studiato da Kurt Lewin e applicato al giornalismo da David Manning White, descrive i «cancelli» lungo il flusso dell'informazione; nel web sociale il ruolo si sposta anche su piattaforme e algoritmi." },

  { id:"COM30", materia:"Teorie della comunicazione", testo:"Il concetto di «framing» applicato all'informazione indica:",
    opzioni:["La selezione di alcuni aspetti della realtà e la loro messa in rilievo, che orienta l'interpretazione di un fatto","La quantità di spazio dedicato a una notizia","Il formato tecnico di un'immagine","La successione delle notizie in un telegiornale"], corretta:0,
    spiegazione:"Mentre l'agenda setting riguarda quali temi diventano rilevanti, il framing riguarda il modo in cui vengono inquadrati: stessa notizia, cornici interpretative diverse." },

  /* ---- Attualità e istituzioni — integrazione ---- */
  { id:"ATT06", materia:"Attualità e istituzioni", testo:"L'AGCOM è:",
    opzioni:["Un organo del Ministero dell'Interno","L'Autorità per le garanzie nelle comunicazioni, che vigila su telecomunicazioni, media e servizi digitali","Un'agenzia europea con sede a Bruxelles","L'associazione delle imprese di comunicazione"], corretta:1,
    spiegazione:"È un'autorità amministrativa indipendente: garantisce pluralismo, concorrenza e tutela degli utenti nel sistema delle comunicazioni." },

  { id:"ATT07", materia:"Attualità e istituzioni", testo:"Il Parlamento europeo:",
    opzioni:["È nominato dalla Commissione europea","Si rinnova ogni anno","È eletto a suffragio universale diretto dai cittadini dell'Unione ogni cinque anni","È composto dai capi di Stato e di governo"], corretta:2,
    spiegazione:"Insieme al Consiglio dell'Unione esercita la funzione legislativa e approva il bilancio; è l'unica istituzione dell'UE eletta direttamente dai cittadini." },

  { id:"ATT08", materia:"Attualità e istituzioni", testo:"L'obiettivo principale della Banca centrale europea è:",
    opzioni:["Finanziare direttamente i bilanci degli Stati","Fissare il livello dei salari","Gestire il debito pubblico dei paesi membri","Mantenere la stabilità dei prezzi nell'area euro"], corretta:3,
    spiegazione:"La BCE persegue un tasso d'inflazione del 2% nel medio periodo, agendo soprattutto sui tassi d'interesse di riferimento." },

  { id:"ATT09", materia:"Attualità e istituzioni", testo:"Nel Consiglio di sicurezza delle Nazioni Unite hanno diritto di veto:",
    opzioni:["I cinque membri permanenti: Stati Uniti, Russia, Cina, Francia e Regno Unito","Tutti i quindici membri","I soli paesi fondatori europei","I paesi che contribuiscono di più al bilancio ONU"], corretta:0,
    spiegazione:"Il Consiglio di sicurezza è composto da quindici membri, cinque permanenti con diritto di veto e dieci eletti a rotazione per due anni." },

  { id:"ATT10", materia:"Attualità e istituzioni", testo:"La Costituzione della Repubblica italiana è entrata in vigore:",
    opzioni:["Il 1° gennaio 1970","Il 1° gennaio 1948","Il 2 giugno 1946","Il 25 aprile 1945"], corretta:1,
    spiegazione:"Il 2 giugno 1946 si tennero il referendum istituzionale e l'elezione dell'Assemblea costituente; la Costituzione entrò in vigore il 1° gennaio 1948." },

  { id:"ATT11", materia:"Attualità e istituzioni", testo:"In seguito alla riforma costituzionale entrata in applicazione con la legislatura iniziata nel 2022, il Parlamento italiano è composto da:",
    opzioni:["500 deputati e 250 senatori","300 deputati e 150 senatori","400 deputati e 200 senatori elettivi","630 deputati e 315 senatori elettivi"], corretta:2,
    spiegazione:"La riduzione del numero dei parlamentari, approvata con referendum confermativo nel 2020, ha avuto effetto dalle elezioni politiche del 2022." },

  { id:"ATT12", materia:"Attualità e istituzioni", testo:"Che cosa misura il tasso d'inflazione?",
    opzioni:["La quantità di moneta in circolazione","Il rapporto fra debito pubblico e PIL","La differenza fra importazioni ed esportazioni","La variazione percentuale del livello generale dei prezzi al consumo in un dato periodo"], corretta:3,
    spiegazione:"Un'inflazione elevata riduce il potere d'acquisto dei redditi; la deflazione è la variazione negativa dello stesso indice." },
/* ---- Metodologia della ricerca sociale (Natale) — dagli appunti del test 2023 ---- */
  { id:"RIC01", materia:"Statistica", testo:"Nel paradigma positivista della ricerca sociale, che ha in Durkheim il riferimento classico:",
    opzioni:["La società esiste a prescindere dagli individui, i fatti sociali si studiano come fatti naturali e il metodo è quantitativo","La società è il prodotto delle relazioni fra individui attivi","Il ricercatore deve empatizzare con il soggetto studiato","Non esistono regole generali, solo interpretazioni soggettive"], corretta:0,
    spiegazione:"È la teoria dell'integrazione: individuo passivo, coscienza collettiva, ricercatore distaccato, linguaggio delle variabili, analisi per variabili e logica del controllo (ricerca confermativa).",
    fonte:"Natale, La ricerca sociale — cap. 1" },

  { id:"RIC02", materia:"Statistica", testo:"Il paradigma interpretativista, che si richiama a Max Weber, si caratterizza per:",
    opzioni:["La rinuncia a qualsiasi generalizzazione concettuale","Metodo qualitativo, analisi per soggetti e obiettivo di comprendere anziché spiegare","Metodo quantitativo e ricerca di leggi generali","L'uso esclusivo di questionari standardizzati"], corretta:1,
    spiegazione:"È la teoria dell'azione: la società è prodotta dalle relazioni fra individui attivi, e il ricercatore cerca «enunciati di possibilità» e tipi ideali, non leggi.",
    fonte:"Natale, La ricerca sociale — cap. 1" },

  { id:"RIC03", materia:"Statistica", testo:"Il «linguaggio delle variabili» introdotto da Lazarsfeld consiste nel:",
    opzioni:["Tradurre i questionari in più lingue","Sostituire i numeri con etichette verbali","Trasformare un concetto in una variabile empiricamente misurabile secondo regole comuni, così da rendere il risultato verificabile e replicabile","Usare un lessico tecnico nella stesura del rapporto di ricerca"], corretta:2,
    spiegazione:"È il cuore del neopositivismo: la replicabilità garantisce che chiunque ripeta la stessa analisi con le stesse modalità arrivi alla stessa conclusione.",
    fonte:"Natale, La ricerca sociale — cap. 1" },

  { id:"RIC04", materia:"Statistica", testo:"Il «paradosso dell'osservatore», che segna il passaggio dal realismo ingenuo al realismo critico, afferma che:",
    opzioni:["L'osservatore non può mai essere presente sul campo","Ogni osservazione va ripetuta almeno due volte","I dati quantitativi sono sempre falsi","L'atto stesso di osservare produce una distorsione sull'oggetto osservato, per cui il risultato è verosimile e non vero"], corretta:3,
    spiegazione:"È la presa di coscienza che porta il neopositivismo a rinunciare alla pretesa di oggettività assoluta delle prime formulazioni positiviste.",
    fonte:"Natale, La ricerca sociale — cap. 1" },

  { id:"RIC05", materia:"Statistica", testo:"Il criterio di falsificabilità introdotto da Karl Popper stabilisce che:",
    opzioni:["Una teoria è scientifica se è esposta alla possibilità di essere smentita dai dati","Una teoria è scientifica se è stata confermata molte volte","Le ipotesi vanno verificate solo con metodi qualitativi","Ogni teoria smentita va comunque mantenuta"], corretta:0,
    spiegazione:"Kuhn introduce poi il concetto di paradigma: se un dato falsifica un'ipotesi non cade l'intera visione del mondo entro cui gli scienziati operano, ma quella singola ipotesi.",
    fonte:"Natale, La ricerca sociale — cap. 1" },

  { id:"RIC06", materia:"Statistica", testo:"La distinzione fra fenomeni «nomotetici» e «idiografici», elaborata da Windelband e Rickert, contrappone:",
    opzioni:["Le variabili dipendenti a quelle indipendenti","I fenomeni ripetibili del mondo naturale a quelli irripetibili del mondo storico-sociale","I fenomeni economici a quelli politici","I dati primari ai dati secondari"], corretta:1,
    spiegazione:"Ai primi corrisponde l'approccio quantitativo con pretesa generalizzante, ai secondi l'approccio qualitativo; la distinzione anticipa la posizione di Weber ed era già in Dilthey.",
    fonte:"Natale, La ricerca sociale — cap. 1" },

  { id:"RIC07", materia:"Statistica", testo:"Nel metodo weberiano, il principio di «avalutatività» impone al ricercatore di:",
    opzioni:["Usare solo dati numerici","Dichiarare in anticipo le proprie conclusioni","Sospendere i propri giudizi di valore, credenze e preconcetti sul fenomeno studiato","Evitare qualsiasi contatto con i soggetti studiati"], corretta:2,
    spiegazione:"Gli altri due concetti chiave sono l'unilateralità, cioè la soggettività inevitabile delle scelte di ricerca, e il tipo ideale, astrazione generalizzante che consente il confronto fra casi.",
    fonte:"Natale, La ricerca sociale — cap. 1" },

  { id:"RIC08", materia:"Statistica", testo:"L'interazionismo simbolico, sviluppato da Mead e Blumer nella Scuola di Chicago, studia:",
    opzioni:["Le grandi strutture economiche della società","Il comportamento dei media di massa","La distribuzione statistica dei redditi","Le interazioni micro fra individui e il modo in cui ciascuno interpreta la realtà"], corretta:3,
    spiegazione:"È microsociologia: la somma dei piccoli gesti individuali aiuta a comprendere la cultura di base su cui si fonda la società.",
    fonte:"Natale, La ricerca sociale — cap. 1" },

  { id:"RIC09", materia:"Statistica", testo:"Il concetto di «frame» elaborato da Erving Goffman indica che:",
    opzioni:["Il comportamento dipende dal quadro situazionale in cui l'individuo si trova e dal ruolo che vi interpreta","Le notizie vengono selezionate dai giornalisti","Ogni intervista va inquadrata in un questionario","La realtà sociale è immutabile"], corretta:0,
    spiegazione:"Nella sociologia fenomenologica l'agire quotidiano è letto come teatro: ciascuno interpreta una parte in funzione della cornice, con uno «sdoppiamento» dei ruoli (pedone o automobilista).",
    fonte:"Natale, La ricerca sociale — cap. 1" },

  { id:"RIC10", materia:"Statistica", testo:"L'etnometodologia di Harold Garfinkel studia:",
    opzioni:["Le teorie degli effetti dei media","I metodi ordinari con cui le persone comuni compiono le azioni quotidiane, spesso violandone le regole implicite per farle emergere","Le popolazioni extraeuropee","Le tecniche di campionamento probabilistico"], corretta:1,
    spiegazione:"Le azioni quotidiane hanno una regolamentazione implicita: per renderla visibile il ricercatore assume comportamenti deliberatamente devianti e osserva le reazioni.",
    fonte:"Natale, La ricerca sociale — cap. 1" },

  { id:"RIC11", materia:"Statistica", testo:"Le cinque fasi della ricerca empirica sono, nell'ordine:",
    opzioni:["Campionamento, intervista, codifica, stampa, archiviazione","Osservazione, deduzione, induzione, sintesi, revisione","Disegno della ricerca, costruzione della base empirica, organizzazione dei dati, analisi dei dati, esposizione dei risultati","Ipotesi, esperimento, verifica, pubblicazione, brevetto"], corretta:2,
    spiegazione:"L'esposizione dei risultati non chiude il ciclo: il confronto con le conoscenze precedenti diventa il punto di partenza di nuove ricerche.",
    fonte:"Natale, La ricerca sociale — cap. 1" },

  { id:"RIC12", materia:"Statistica", testo:"Nell'osservazione partecipante, il «gatekeeper» è:",
    opzioni:["Il ricercatore che conduce l'indagine","L'individuo che fornisce informazioni dall'interno","Il luogo in cui si svolge la ricerca","Chi controlla l'accesso al gruppo studiato, in forma riconosciuta o informale"], corretta:3,
    spiegazione:"Le altre figure della ricerca etnografica sono i mediatori culturali, gli informatori (testimoni privilegiati), i nativi, il setting e il backtalk, cioè il giudizio dei nativi sul lavoro dello studioso.",
    fonte:"Natale, La ricerca sociale — cap. 2" },

  { id:"RIC13", materia:"Statistica", testo:"L'«effetto Hawthorne» consiste:",
    opzioni:["Nella tendenza degli individui a modificare il proprio comportamento quando si sanno osservati","Nella perdita di dati durante la codifica","Nel rifiuto sistematico di rispondere alle interviste","Nella distorsione dovuta a un campione troppo piccolo"], corretta:0,
    spiegazione:"È legato all'intrusività dell'osservazione: più il ricercatore è presente e visibile, più il comportamento osservato rischia di non essere quello spontaneo.",
    fonte:"Natale, La ricerca sociale — cap. 2" },

  { id:"RIC14", materia:"Statistica", testo:"La «serendipity», nel senso indicato da Merton, indica:",
    opzioni:["La saturazione teorica del campione","Le scoperte fatte incidentalmente, senza che fossero cercate","La capacità di prevedere i risultati di una ricerca","Un errore sistematico di rilevazione"], corretta:1,
    spiegazione:"È una delle risorse tipiche della ricerca sul campo, dove l'osservazione prolungata fa emergere elementi non previsti dal disegno iniziale.",
    fonte:"Natale, La ricerca sociale — cap. 2" },

  { id:"RIC15", materia:"Statistica", testo:"In quale ordine crescente di strutturazione si dispongono i tipi di intervista?",
    opzioni:["Semistrutturata, strutturata, non direttiva, non strutturata","Non strutturata, non direttiva, strutturata, semistrutturata","Non direttiva, non strutturata, semistrutturata, strutturata","Strutturata, semistrutturata, non strutturata, non direttiva"], corretta:2,
    spiegazione:"Nella semistrutturata l'intervistatore ha una traccia di domande senza ordine prestabilito; nella strutturata formulazione, sequenza e comportamento sono fissati in anticipo.",
    fonte:"Natale, La ricerca sociale — cap. 2" },

  { id:"RIC16", materia:"Statistica", testo:"Il focus group è:",
    opzioni:["Un campione probabilistico stratificato","Un questionario autosomministrato","Una tecnica di analisi statistica multivariata","Una tecnica qualitativa di discussione di gruppo guidata da uno o più moderatori"], corretta:3,
    spiegazione:"Nato nelle scienze sociali con Merton e Lazarsfeld negli anni Quaranta, è oggi diffusissimo nelle ricerche di mercato; sfrutta l'effetto a valanga nella generazione delle idee.",
    fonte:"Natale, La ricerca sociale — cap. 2" },

  { id:"RIC17", materia:"Statistica", testo:"Quale dei seguenti è il limite principale del focus group?",
    opzioni:["Il controllo ridotto del ricercatore, con il rischio di risposte socialmente accettabili e di influenza dei partecipanti più forti","La lentezza e i costi elevati","L'impossibilità di raccogliere molte informazioni","L'eccessiva standardizzazione delle risposte"], corretta:0,
    spiegazione:"Per lo stesso motivo non è adatto ai temi delicati: lì è preferibile l'intervista individuale, più profonda e priva del condizionamento del gruppo.",
    fonte:"Natale, La ricerca sociale — cap. 2" },

  { id:"RIC18", materia:"Statistica", testo:"In un questionario, le domande-filtro servono a:",
    opzioni:["Rilevare le caratteristiche sociodemografiche","Evitare che alcuni intervistati rispondano a domande o sezioni che non li riguardano","Verificare all'inizio se il soggetto può entrare nel campione","Misurare l'intensità di un atteggiamento"], corretta:1,
    spiegazione:"Le domande di eleggibilità o screening, poste all'inizio, verificano invece i requisiti per l'inclusione nel campione: entrambe sono «domande di servizio».",
    fonte:"Natale, La ricerca sociale — cap. 3" },

  { id:"RIC19", materia:"Statistica", testo:"Nelle domande di comportamento, il «ricordo acquiescente» è la distorsione dovuta:",
    opzioni:["Alla ricerca di coerenza interna nel racconto","All'ordine in cui sono poste le domande","Alla desiderabilità sociale, cioè alla tendenza a dichiarare ciò che appare socialmente accettabile","Alla diversa capacità di memorizzare gli eventi"], corretta:2,
    spiegazione:"Le altre due distorsioni tipiche sono il ricordo selettivo, legato alla memoria, e la ristrutturazione del ricordo, dovuta alla propensione alla coerenza.",
    fonte:"Natale, La ricerca sociale — cap. 3" },

  { id:"RIC20", materia:"Statistica", testo:"Nelle domande a risposta chiusa, il rischio principale è:",
    opzioni:["La scarsa confrontabilità delle risposte","L'impossibilità di codificare i dati","L'assenza di standardizzazione","Il bias del ricercatore, che predefinisce le alternative disponibili"], corretta:3,
    spiegazione:"Le domande aperte riducono la distorsione del ricercatore ma aumentano quella dell'intervistato, rendono meno confrontabili le risposte e richiedono un lavoro di ricodifica.",
    fonte:"Natale, La ricerca sociale — cap. 3" },

  { id:"RIC21", materia:"Statistica", testo:"Il campione «a valanga» (snow-ball) è utile soprattutto quando:",
    opzioni:["Si studia un fenomeno poco diffuso o difficilmente confessabile e gli intervistati segnalano altri soggetti","Si dispone dell'elenco completo della popolazione","Occorre garantire la piena rappresentatività statistica","Si vuole intervistare un campione per quote"], corretta:0,
    spiegazione:"È una tecnica non probabilistica: i risultati sono indicativi e non generalizzabili all'universo di riferimento.",
    fonte:"Natale, La ricerca sociale — cap. 3" },

  { id:"RIC22", materia:"Statistica", testo:"Il campione per quote si distingue da quello stratificato perché:",
    opzioni:["Produce stime più precise","La suddivisione della popolazione è simile, ma la scelta di chi intervistare è arbitraria e non probabilistica","Non prevede alcuna suddivisione della popolazione","Richiede l'elenco completo dell'universo"], corretta:1,
    spiegazione:"Abbatte costi e tempi ed è molto usato nelle ricerche di mercato, ma non consente stime generalizzabili proprio perché la selezione finale non segue un piano probabilistico.",
    fonte:"Natale, La ricerca sociale — cap. 3" },

  { id:"RIC23", materia:"Statistica", testo:"Nel campionamento sistematico, il passo di campionamento k si calcola come:",
    opzioni:["Differenza fra N e n","Radice quadrata di N","Rapporto fra l'ampiezza N della popolazione e l'ampiezza n desiderata del campione","Prodotto fra N e n"], corretta:2,
    spiegazione:"Con k = N/n si estrae un individuo ogni k: la lista va però ordinata secondo criteri indipendenti dal fenomeno studiato, per evitare distorsioni.",
    fonte:"Natale, La ricerca sociale — cap. 3" },

  { id:"RIC24", materia:"Statistica", testo:"Perché il campione stratificato è considerato più efficiente di quello casuale semplice?",
    opzioni:["Perché richiede meno interviste in assoluto","Perché non richiede procedure probabilistiche","Perché elimina l'errore di rilevazione","Perché riduce la varianza interna e quindi, a parità di ampiezza, l'errore di campionamento"], corretta:3,
    spiegazione:"Può essere proporzionale, non proporzionale (con strati sovra o sotto rappresentati) oppure ottimale, quando la numerosità degli strati segue la varianza interna a ciascuno.",
    fonte:"Natale, La ricerca sociale — cap. 3" },

  { id:"RIC25", materia:"Statistica", testo:"Nel campione a grappolo (cluster), a differenza del multistadio:",
    opzioni:["Nelle ultime unità estratte vengono intervistati tutti gli individui che vi appartengono","Si estrae un solo individuo per ogni livello","Non si usa alcuna suddivisione della popolazione","Il campione è necessariamente telefonico"], corretta:0,
    spiegazione:"Il grappolo estratto all'ultimo stadio coincide con l'universo degli individui che ne fanno parte; si usa spesso in combinazione con il multistadio quando esistono unità di formazione naturale.",
    fonte:"Natale, La ricerca sociale — cap. 3" },

  { id:"RIC26", materia:"Statistica", testo:"L'ampiezza dell'errore di campionamento dipende da:",
    opzioni:["Dalla durata della rilevazione","Numerosità del campione e omogeneità dei risultati, misurata dalla varianza","Solo dalla dimensione della popolazione","Dal numero di domande del questionario"], corretta:1,
    spiegazione:"L'errore si riduce se i casi aumentano e se sono più simili fra loro: per abbassare artificialmente la varianza si ricorre alla stratificazione.",
    fonte:"Natale, La ricerca sociale — cap. 3" },

  { id:"RIC27", materia:"Statistica", testo:"L'errore globale di un'indagine campionaria è dato da:",
    opzioni:["Solo dagli errori di codifica","Dalla somma delle mancate risposte","Errore di campionamento più errore di rilevazione","Solo dall'errore di campionamento"], corretta:2,
    spiegazione:"L'errore di campionamento è quantificabile ma inevitabile; quello di rilevazione — copertura e mancata risposta — è teoricamente eliminabile ma di fatto non del tutto controllabile.",
    fonte:"Natale, La ricerca sociale — cap. 3" },

  { id:"RIC28", materia:"Statistica", testo:"Qual è la differenza fra statistiche descrittive e statistiche inferenziali?",
    opzioni:["Le descrittive si usano solo sui campioni, le inferenziali solo sulle popolazioni","Le inferenziali non richiedono campioni probabilistici","Non c'è differenza operativa","Le descrittive riassumono i dati osservati, le inferenziali valutano quanto i risultati siano generalizzabili all'universo"], corretta:3,
    spiegazione:"L'inferenza è possibile solo con campioni probabilistici; il livello di significatività (indice p o sig) esprime la probabilità di sbagliare nel generalizzare: 0,05 equivale al 5%.",
    fonte:"Natale, La ricerca sociale — cap. 4" },

  { id:"RIC29", materia:"Statistica", testo:"La matrice «casi per variabili», input delle analisi statistiche, ha:",
    opzioni:["I casi sulle righe e le variabili sulle colonne, con le stesse informazioni rilevate per tutti i casi","Le variabili sulle righe e i casi sulle colonne","Una struttura diversa per ogni intervistato","Solo variabili di tipo cardinale"], corretta:0,
    spiegazione:"L'unità di analisi deve essere omogenea per tutti i casi; le variabili categoriali vanno codificate, quelle cardinali sono immediatamente utilizzabili.",
    fonte:"Natale, La ricerca sociale — cap. 4" },

  { id:"RIC30", materia:"Statistica", testo:"Un campione «panel» si distingue da un campione «cross section» perché:",
    opzioni:["Non prevede un questionario","Gli stessi individui vengono intervistati più volte nel tempo, utile per monitorare mutamenti e stabilità","È sempre più numeroso","Riguarda una sola area geografica"], corretta:1,
    spiegazione:"Solo i campioni cross section, in cui ciascun individuo è intervistato una volta sola, rispettano pienamente le condizioni probabilistiche.",
    fonte:"Natale, La ricerca sociale — cap. 3" },
/* ---- Informatica (Console e altri, Introduzione all'informatica) — appunti test 2023 ---- */
  { id:"INF59", materia:"Informatica", testo:"Le due componenti che formano l'unità centrale di un elaboratore sono:",
    opzioni:["Disco fisso e scheda video","Sistema operativo e applicazioni","Processore e memoria principale","Monitor e tastiera"], corretta:2,
    spiegazione:"La memoria principale conserva programmi e dati in celle indirizzate; il processore esegue le istruzioni in linguaggio macchina che vi sono contenute.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF60", materia:"Informatica", testo:"Nella memoria principale, una cella corrisponde a:",
    opzioni:["Un solo bit","Un intero programma","Un settore del disco","8 bit, cioè un byte, ed è individuata da un indirizzo"], corretta:3,
    spiegazione:"La memoria è una sequenza di celle, ciascuna con un indirizzo espresso come numero intero: il numero di bit usati per gli indirizzi definisce lo spazio di indirizzamento.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF61", materia:"Informatica", testo:"La RAM è detta a «accesso casuale» perché:",
    opzioni:["Il tempo di accesso a una cella è lo stesso qualunque sia la sua posizione","I dati vengono scritti in posizioni scelte a caso","Perde i dati in modo imprevedibile","Può essere letta solo in sequenza"], corretta:0,
    spiegazione:"È inoltre volatile: senza alimentazione elettrica perde il contenuto, e per questo servono le memorie secondarie o di massa.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF62", materia:"Informatica", testo:"Nel ciclo fetch-execute, il Program Counter (PC):",
    opzioni:["Conta i cicli di clock trascorsi","Contiene l'indirizzo della prossima istruzione da eseguire","Contiene il risultato dell'ultima operazione aritmetica","Indica lo stato di errore del processore"], corretta:1,
    spiegazione:"Gli altri registri speciali sono il registro istruzioni (RI), che contiene l'istruzione in esecuzione, e il registro di stato (PS), che segnala le condizioni e gli errori.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF63", materia:"Informatica", testo:"Che cosa determina il clock di un processore?",
    opzioni:["Il numero di programmi installabili","La risoluzione dello schermo","La frequenza dei cicli, e quindi la velocità di elaborazione","La quantità di memoria indirizzabile"], corretta:2,
    spiegazione:"Il clock genera impulsi a intervalli costanti: a ogni impulso l'unità di controllo esegue un ciclo, cioè legge ed esegue un'istruzione.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF64", materia:"Informatica", testo:"L'unità aritmetico-logica (ALU) di un processore:",
    opzioni:["Coordina le attività delle altre componenti","Conserva i programmi in modo permanente","Gestisce i dispositivi di input e output","Esegue le operazioni aritmetiche e logiche sui dati contenuti nei registri"], corretta:3,
    spiegazione:"Il coordinamento spetta all'unità di controllo; i registri generali servono a conservare i risultati parziali dell'elaborazione.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF65", materia:"Informatica", testo:"I tre tipi di bus che collegano le componenti di un elaboratore sono:",
    opzioni:["Bus dati, bus indirizzi e bus di controllo","Bus interno, bus esterno e bus di rete","Bus seriale, parallelo e ottico","Bus primario, secondario e terziario"], corretta:0,
    spiegazione:"L'ampiezza del bus determina quanta informazione può essere trasferita contemporaneamente.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF66", materia:"Informatica", testo:"La memoria cache serve a:",
    opzioni:["Aumentare lo spazio di indirizzamento","Conservare i dati usati più di frequente in un livello intermedio, più veloce della memoria principale","Archiviare i file in modo permanente","Gestire le immagini sullo schermo"], corretta:1,
    spiegazione:"Sfrutta il principio di località: L1 è interna alla CPU, L2 sulla scheda madre o nel processore, L3 tipica dei processori multicore.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF67", materia:"Informatica", testo:"La differenza fra architettura CISC e RISC sta nel fatto che:",
    opzioni:["CISC si usa solo nei telefoni","RISC non prevede istruzioni aritmetiche","CISC ha molte istruzioni anche complesse che richiedono più cicli di clock, RISC poche istruzioni semplici eseguibili in un solo ciclo","RISC è più lenta di CISC"], corretta:2,
    spiegazione:"L'architettura RISC favorisce pipeline e parallelismo, alla base dei processori dual e quad core.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF68", materia:"Informatica", testo:"Un «processo», nel linguaggio dei sistemi operativi, è:",
    opzioni:["Un file salvato su disco","Un dispositivo collegato al computer","Una porzione di memoria cache","Un programma in esecuzione"], corretta:3,
    spiegazione:"Un processo alterna fasi di esecuzione e di attesa e può trovarsi in tre stati: in esecuzione, in attesa (bloccato) o pronto.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF69", materia:"Informatica", testo:"In un sistema multi-programmato (multi-tasking) con un solo processore:",
    opzioni:["I processi non sono realmente paralleli: il processore viene alternato fra loro quando uno si blocca o si interrompe","Tutti i processi vengono eseguiti simultaneamente","Si può eseguire un solo programma alla volta","Ogni processo ha un processore dedicato"], corretta:0,
    spiegazione:"Il numero di processi attivi è il grado di multiprogrammazione; i modelli di esecuzione sono batch, time sharing e real time.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF70", materia:"Informatica", testo:"Il modello di esecuzione «time sharing» è pensato per:",
    opzioni:["Sistemi mono-programmati","Programmi interattivi, con frequenti operazioni di input e output, e più utenti contemporanei","Programmi che calcolano a lungo senza interazione","Sistemi in cui il tempo di reazione è critico"], corretta:1,
    spiegazione:"Il modello batch serve ai programmi compute bound, quello real time agli ambiti in cui la reazione deve avvenire entro tempi garantiti.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF71", materia:"Informatica", testo:"Una politica di scheduling è detta «preemptive» quando:",
    opzioni:["I processi vengono eseguiti in ordine alfabetico","Non esiste una coda dei processi pronti","Il sistema operativo può interrompere un processo in esecuzione per mandarne in esecuzione un altro","Il processo lascia la CPU solo volontariamente"], corretta:2,
    spiegazione:"Shortest Job First è non preemptive, Shortest Remaining Time First è la sua variante preemptive; la selezione con priorità esiste in entrambe le forme.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF72", materia:"Informatica", testo:"Il «tempo di turnaround» di un processo è:",
    opzioni:["Il tempo di accesso alla memoria cache","La durata di un ciclo di clock","Il tempo di risposta della rete","Il tempo che intercorre fra la creazione del processo e la sua terminazione"], corretta:3,
    spiegazione:"Gli obiettivi dello scheduling sono massimizzare l'uso del processore e il throughput, e minimizzare turnaround e tempi di attesa.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF73", materia:"Informatica", testo:"La «modalità kernel» di esecuzione si distingue dalla modalità utente perché:",
    opzioni:["Consente di eseguire le istruzioni delicate riservate al sistema operativo","È più veloce nell'esecuzione dei calcoli","Non richiede memoria principale","Riguarda solo i programmi grafici"], corretta:0,
    spiegazione:"Il bit di modalità indica per conto di chi è in esecuzione l'istruzione; un timer hardware impedisce inoltre a un processo di monopolizzare la CPU.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF74", materia:"Informatica", testo:"Il sistema operativo è detto «event-driven» perché:",
    opzioni:["Funziona solo all'avvio della macchina","Interviene quando si verificano eventi: interrupt hardware, trap ed errori, oppure system call dei processi utente","Esegue i programmi in ordine cronologico","Controlla continuamente ogni istruzione eseguita"], corretta:1,
    spiegazione:"Per la maggior parte del tempo le risorse sono usate dai programmi utente: il sistema si «sveglia» solo in corrispondenza degli eventi.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF75", materia:"Informatica", testo:"Che cos'è lo swapping nella gestione della memoria?",
    opzioni:["Lo scambio di dati fra due computer in rete","La sostituzione di un processore con un altro","Lo scambio delle immagini dei processi fra memoria principale e memoria secondaria","La conversione fra sistemi di numerazione"], corretta:2,
    spiegazione:"Serve a far convivere più processi in una memoria principale limitata; le partizioni fisse generano invece frammentazione interna ed esterna.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF76", materia:"Informatica", testo:"Qual è la differenza fra compilazione e interpretazione di un programma?",
    opzioni:["La compilazione è sempre più lenta","L'interpretazione produce un file eseguibile","Sono due nomi della stessa operazione","La compilazione traduce l'intero programma una volta sola, l'interpretazione traduce ed esegue le istruzioni una per una"], corretta:3,
    spiegazione:"La compilazione è più efficiente ma richiede di ritradurre tutto a ogni modifica; l'interpretazione allunga i tempi di esecuzione ma è più flessibile.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF77", materia:"Informatica", testo:"Nei diagrammi di flusso, i blocchi di forma ellissoidale rappresentano:",
    opzioni:["L'inizio e la fine dell'algoritmo","Le azioni elementari","Le condizioni da valutare","I dati di input"], corretta:0,
    spiegazione:"I rettangoli indicano le azioni, i rombi le condizioni: il blocco iniziale ha solo un arco in uscita, quello finale solo un arco in entrata.",
    fonte:"Console et al., Introduzione all'informatica" },

  { id:"INF78", materia:"Informatica", testo:"Le azioni che compongono un algoritmo si distinguono in:",
    opzioni:["Logiche e illogiche","Elementari, condizionali e ripetitive","Rapide, lente e istantanee","Interne ed esterne"], corretta:1,
    spiegazione:"Le azioni composte possono annidarsi l'una nell'altra, per esempio un'azione ripetitiva dentro un ramo di un'azione condizionale.",
    fonte:"Console et al., Introduzione all'informatica" },
/* ---- Statistica (Agresti, Finlay — edizione italiana) — dagli appunti ---- */
  { id:"STA31", materia:"Statistica", testo:"In un campione casuale semplice:",
    opzioni:["Si intervistano solo i soggetti più rappresentativi","La probabilità di estrazione è ignota","Ogni soggetto della popolazione ha la stessa probabilità nota di essere estratto","Si sceglie il primo soggetto disponibile della lista"], corretta:2,
    spiegazione:"In pratica si assegna un numero a ciascun soggetto della lista di campionamento, si estraggono numeri casuali e si includono i soggetti corrispondenti.",
    fonte:"Agresti, Finlay — cap. 1" },

  { id:"STA32", materia:"Statistica", testo:"Le tre principali fonti di distorsione in un'indagine campionaria sono:",
    opzioni:["Errore di calcolo, di stampa e di archiviazione","Distorsione della media, della moda e della mediana","Errore di misura, di scala e di codifica","Distorsione campionaria, distorsione dovuta alle risposte e distorsione dovuta alle mancate risposte"], corretta:3,
    spiegazione:"La prima nasce da un campionamento non probabilistico, la seconda da risposte non veritiere o da domande mal formulate, la terza dai dati mancanti.",
    fonte:"Agresti, Finlay — cap. 1" },

  { id:"STA33", materia:"Statistica", testo:"Nel campionamento sistematico si seleziona:",
    opzioni:["Un soggetto fra i primi k della lista e poi ogni k-esimo soggetto successivo","Un soggetto ogni giorno della settimana","Solo i soggetti in cima alla lista","Un numero casuale di soggetti per ciascuno strato"], corretta:0,
    spiegazione:"Il passo k dipende dal rapporto fra ampiezza della popolazione e ampiezza desiderata del campione; la lista non deve avere un ordinamento correlato al fenomeno studiato.",
    fonte:"Agresti, Finlay — cap. 1" },

  { id:"STA34", materia:"Statistica", testo:"La media risente dei valori anomali più della mediana perché:",
    opzioni:["Si applica solo a variabili categoriali","Nel calcolo entrano i valori numerici di tutte le osservazioni","Viene calcolata solo sui valori estremi","Dipende dall'ordinamento dei dati"], corretta:1,
    spiegazione:"La mediana dipende dalla posizione delle osservazioni nell'ordinamento: per distribuzioni asimmetriche, come i redditi, è la sintesi più rappresentativa del centro.",
    fonte:"Agresti, Finlay — cap. 3" },

  { id:"STA35", materia:"Statistica", testo:"Secondo la regola empirica valida per distribuzioni approssimativamente normali:",
    opzioni:["Il 95% dei casi cade entro una deviazione standard","Tutti i casi cadono entro due deviazioni standard","Circa il 68% dei casi cade entro una deviazione standard dalla media, il 95% entro due, la quasi totalità entro tre","Il 50% dei casi cade entro una deviazione standard"], corretta:2,
    spiegazione:"È la regola che rende immediatamente interpretabile la deviazione standard come unità di distanza dalla media.",
    fonte:"Agresti, Finlay — cap. 3" },

  { id:"STA36", materia:"Statistica", testo:"Nel box plot, la «scatola» è delimitata da:",
    opzioni:["Valore minimo e massimo","Media più e meno una deviazione standard","I due valori più frequenti","Primo e terzo quartile, con la mediana all'interno"], corretta:3,
    spiegazione:"La lunghezza della scatola è lo scarto interquartile Q3 − Q1, che contiene il 50% centrale delle osservazioni; il campo di variazione è invece massimo meno minimo.",
    fonte:"Agresti, Finlay — cap. 3" },

  { id:"STA37", materia:"Statistica", testo:"In una distribuzione normale con media 500 e deviazione standard 100, un punteggio di 650 corrisponde a uno z-score di:",
    opzioni:["1,5","0,65","6,5","15"], corretta:0,
    spiegazione:"z = (650 − 500) / 100 = 1,5: il valore dista una volta e mezza la deviazione standard sopra la media.",
    fonte:"Agresti, Finlay — cap. 4" },

  { id:"STA38", materia:"Statistica", testo:"Che cos'è la distribuzione campionaria di una statistica?",
    opzioni:["La distribuzione degli errori di misura","La distribuzione dei valori che la statistica assumerebbe ripetendo il campionamento molte volte","La distribuzione dei dati osservati nel campione","La distribuzione della popolazione"], corretta:1,
    spiegazione:"È il concetto che rende possibile l'inferenza: da essa derivano errore standard, intervalli di confidenza e test di significatività.",
    fonte:"Agresti, Finlay — cap. 4" },

  { id:"STA39", materia:"Statistica", testo:"L'ampiezza di un intervallo di confidenza:",
    opzioni:["Non dipende dal livello di fiducia","Dipende solo dalla media campionaria","Cresce al crescere del livello di fiducia e decresce al crescere della dimensione campionaria","Cresce con la dimensione campionaria"], corretta:2,
    spiegazione:"Sono proprietà generali di tutti gli intervalli di confidenza, non solo di quelli per una proporzione.",
    fonte:"Agresti, Finlay — cap. 5" },

  { id:"STA40", materia:"Statistica", testo:"Quando si costruisce un intervallo di confidenza per una media usando l'errore standard stimato, la distribuzione di riferimento è:",
    opzioni:["La distribuzione normale standardizzata","La distribuzione chi quadrato","La distribuzione uniforme","La distribuzione t di Student"], corretta:3,
    spiegazione:"La t ha code più pesanti della normale e dipende dai gradi di libertà; all'aumentare della dimensione campionaria tende alla normale standardizzata.",
    fonte:"Agresti, Finlay — cap. 5" },

  { id:"STA41", materia:"Statistica", testo:"Un metodo statistico è detto «robusto» quando:",
    opzioni:["Fornisce risultati validi anche se una delle sue assunzioni non è pienamente rispettata","Richiede campioni molto grandi","Non richiede alcuna assunzione","Produce sempre risultati significativi"], corretta:0,
    spiegazione:"L'intervallo di confidenza basato sulla t è robusto rispetto alla non normalità della popolazione, ma non lo è rispetto alla violazione della casualità del campione.",
    fonte:"Agresti, Finlay — cap. 5" },

  { id:"STA42", materia:"Statistica", testo:"Nel test di significatività su una media, l'ipotesi alternativa Ha: μ ≠ μ0 è detta:",
    opzioni:["Non parametrica","Bidirezionale, perché comprende valori sia inferiori sia superiori a quello ipotizzato","Unidirezionale","Nulla"], corretta:1,
    spiegazione:"Le alternative unidirezionali (μ > μ0 oppure μ < μ0) si usano quando il ricercatore prevede uno scostamento in una direzione precisa.",
    fonte:"Agresti, Finlay — cap. 6" },

  { id:"STA43", materia:"Statistica", testo:"Le cinque parti in cui si articola un test di significatività sono:",
    opzioni:["Domanda, dati, grafico, tabella, commento","Popolazione, campione, stima, errore, intervallo","Assunzioni, ipotesi, statistica test, P-valore, conclusioni","Campione, media, varianza, errore, risultato"], corretta:2,
    spiegazione:"Le assunzioni riguardano soprattutto la casualità della selezione; le conclusioni vanno sempre interpretate nel contesto empirico dell'analisi.",
    fonte:"Agresti, Finlay — cap. 6" },

  { id:"STA44", materia:"Statistica", testo:"Quanto più piccolo è il P-valore:",
    opzioni:["Tanto più grande è l'effetto osservato","Tanto più il campione è rappresentativo","Tanto più l'ipotesi nulla è certamente falsa","Tanto più forte è l'evidenza contro l'ipotesi nulla"], corretta:3,
    spiegazione:"Il P-valore fornisce evidenze, non certezze: si rifiuta H0 quando P è minore o uguale al livello di significatività α prefissato.",
    fonte:"Agresti, Finlay — cap. 6" },

  { id:"STA45", materia:"Statistica", testo:"In un sondaggio su 1200 persone, il 52% risponde «aumentare le tasse». Per stabilire se nella popolazione questa sia una maggioranza si verifica:",
    opzioni:["H0: π = 0,50 contro Ha: π ≠ 0,50","H0: π = 0,52 contro Ha: π ≠ 0,52","La sola media campionaria","La varianza della popolazione"], corretta:0,
    spiegazione:"Il valore 0,50 separa minoranza e maggioranza: il test valuta se lo scarto osservato dal 50% sia compatibile con il caso, dato l'errore standard della proporzione.",
    fonte:"Agresti, Finlay — cap. 6" }

  ]
}
];
