/* ============================================================================
   BANCHE DATI — Test di ammissione alla laurea magistrale
   Comunicazione pubblica e d'impresa (COM, LM-59), Università degli Studi di Milano

   Materie della prova (fonte: presentazione ufficiale del corso, ver. 04/23):
     English language · Communication theory · Computer science ·
     Marketing · Statistics · Current news

   Bibliografia consigliata dall'ateneo:
     - Kotler, Armstrong, Principles of Marketing, Pearson (edizione recente)
     - Balbi, Magaudda, A History of Digital Media, Routledge, 2018
     - Snyder, Henry, Fluency with Information Technology, Pearson (7ª ed. o recente)
     - Agresti, Finlay, Statistical Methods for the Social Sciences, Pearson

   ATTENZIONE: durata, numero di domande, punteggio ed eventuale penalità qui sotto
   sono un'ipotesi di lavoro. Vanno allineati all'avviso di ammissione dell'anno in
   corso: si cambiano i numeri nel blocco `esame` e la simulazione si adegua.
   Formato e istruzioni: vedi domande/MODELLO.md
   ========================================================================== */

window.BANCHE = [
{
  id: "com-unimi",
  titolo: "COM Unimi — banca d'esame",
  descrizione: "marketing, statistica, informatica, teorie della comunicazione, inglese, attualità",
  esame: { durataMinuti: 45, numeroDomande: 40, puntiCorretta: 1, puntiErrata: 0, puntiOmessa: 0, sogliaSufficienza: null },
  domande: [

  /* ================= MARKETING (Kotler, Armstrong) ================= */
  { id:"MKT01", materia:"Marketing", testo:"Quale elemento NON fa parte del marketing mix tradizionale (le «quattro P»)?",
    opzioni:["Prodotto","Prezzo","Personale","Promozione"], corretta:2,
    spiegazione:"Le quattro P sono product, price, place e promotion. Personale (people), processi e physical evidence appartengono al mix esteso a sette P, usato per i servizi.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT02", materia:"Marketing", testo:"Nel modello STP, che cosa indica la fase di «positioning»?",
    opzioni:["Dividere il mercato in gruppi omogenei di consumatori","Scegliere i segmenti su cui l'impresa vuole competere","Collocare l'offerta nella mente del consumatore rispetto ai concorrenti","Stabilire il prezzo di vendita rispetto ai costi"], corretta:2,
    spiegazione:"Segmentation divide il mercato, targeting sceglie i segmenti, positioning definisce la posizione distintiva che il prodotto deve occupare nella percezione del consumatore rispetto alla concorrenza.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT03", materia:"Marketing", testo:"Nell'analisi SWOT, «opportunità» e «minacce» riguardano:",
    opzioni:["L'ambiente esterno all'impresa","Le risorse interne dell'impresa","Esclusivamente i concorrenti diretti","Il solo andamento delle vendite"], corretta:0,
    spiegazione:"Punti di forza e di debolezza descrivono fattori interni; opportunità e minacce descrivono fattori esterni (mercato, tecnologia, normativa, concorrenza).",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT04", materia:"Marketing", testo:"Che cosa distingue il «marketing concept» dal «selling concept»?",
    opzioni:["Il marketing concept parte dai bisogni del cliente, il selling concept dai prodotti già realizzati","Il marketing concept riguarda solo i beni di lusso","Il selling concept si applica ai soli mercati esteri","Non c'è differenza sostanziale fra i due"], corretta:0,
    spiegazione:"Il selling concept parte dal prodotto esistente e punta a venderlo con azioni di vendita e promozione; il marketing concept parte dai bisogni del mercato obiettivo per costruire l'offerta.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT05", materia:"Marketing", testo:"Nella fase di maturità del ciclo di vita del prodotto ci si aspetta tipicamente:",
    opzioni:["Vendite in forte accelerazione e concorrenza assente","Rallentamento della crescita delle vendite e forte pressione competitiva","Vendite nulle e costi di sviluppo elevati","Un aumento costante dei margini unitari"], corretta:1,
    spiegazione:"Nella maturità il tasso di crescita delle vendite rallenta, il mercato è affollato e i margini tendono a comprimersi: l'impresa difende la quota con differenziazione, promozioni o modifiche del prodotto.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT06", materia:"Marketing", testo:"Il customer lifetime value (CLV) misura:",
    opzioni:["Il valore dell'intero flusso di acquisti che un cliente genera nel corso della relazione","Il costo medio per acquisire un nuovo cliente","La quota di mercato dell'impresa","Il numero di clienti persi in un anno"], corretta:0,
    spiegazione:"Il CLV è il valore attuale dei margini generati da un cliente lungo tutta la durata della relazione: giustifica investimenti in fidelizzazione superiori al margine del singolo acquisto.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT07", materia:"Marketing", testo:"Che cos'è la brand equity?",
    opzioni:["Il costo sostenuto per registrare il marchio","Il valore differenziale che la conoscenza della marca aggiunge al prodotto e alle risposte del consumatore","Il numero di punti vendita in cui la marca è distribuita","Il fatturato annuo generato dal marchio"], corretta:1,
    spiegazione:"La brand equity è l'effetto differenziale della conoscenza della marca sulle reazioni del consumatore: a parità di prodotto, una marca forte ottiene preferenza, disponibilità a pagare e fedeltà maggiori.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT08", materia:"Marketing", testo:"Una strategia di «market penetration pricing» consiste nel:",
    opzioni:["Lanciare il prodotto a prezzo alto per massimizzare i margini sui primi acquirenti","Lanciare il prodotto a prezzo basso per conquistare rapidamente quote di mercato","Fissare il prezzo uguale a quello del leader di mercato","Differenziare il prezzo per area geografica"], corretta:1,
    spiegazione:"Il penetration pricing punta su un prezzo iniziale basso per attrarre volumi e quote; la strategia opposta è il market skimming, che parte da un prezzo alto per i segmenti meno sensibili al prezzo.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT09", materia:"Marketing", testo:"Nella ricerca di mercato, i dati secondari sono:",
    opzioni:["Dati raccolti appositamente per il problema di ricerca in esame","Dati già esistenti, raccolti in precedenza per altri scopi","Dati di natura esclusivamente qualitativa","Dati raccolti solo tramite interviste in profondità"], corretta:1,
    spiegazione:"I dati secondari (statistiche pubbliche, ricerche già svolte, archivi aziendali) esistono già e costano meno; i dati primari sono raccolti ex novo per lo specifico obiettivo di ricerca.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT10", materia:"Marketing", testo:"Fornitori, intermediari commerciali e clienti fanno parte:",
    opzioni:["Del microambiente dell'impresa","Del macroambiente dell'impresa","Dell'ambiente demografico","Del solo ambiente tecnologico"], corretta:0,
    spiegazione:"Il microambiente comprende gli attori vicini all'impresa che ne influenzano la capacità di servire i clienti; il macroambiente comprende le forze più ampie: demografiche, economiche, naturali, tecnologiche, politiche e culturali.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT11", materia:"Marketing", testo:"Nel modello delle cinque forze competitive di Porter NON rientra:",
    opzioni:["Il potere contrattuale dei fornitori","La minaccia di prodotti sostitutivi","La minaccia di nuovi entranti","La struttura organizzativa interna dell'impresa"], corretta:3,
    spiegazione:"Le cinque forze sono: concorrenti diretti, nuovi entranti, prodotti sostitutivi, potere dei fornitori e potere dei clienti. L'organizzazione interna riguarda l'analisi delle risorse, non la struttura del settore." },

  { id:"MKT12", materia:"Marketing", testo:"La value proposition di una marca è:",
    opzioni:["L'insieme dei benefici promessi al cliente, che motivano la scelta di quella marca","Il prezzo minimo praticabile senza perdite","La somma degli investimenti pubblicitari annui","La descrizione tecnica del processo produttivo"], corretta:0,
    spiegazione:"La value proposition risponde alla domanda «perché comprare da noi e non dai concorrenti»: è l'insieme dei benefici e dei valori promessi al segmento obiettivo.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT13", materia:"Marketing", testo:"La dissonanza cognitiva post-acquisto si manifesta:",
    opzioni:["Prima della decisione, nella fase di ricerca di informazioni","Dopo l'acquisto, come disagio legato ai vantaggi delle alternative scartate","Solo negli acquisti di prodotti a basso coinvolgimento","Esclusivamente nei mercati business to business"], corretta:1,
    spiegazione:"Dopo un acquisto impegnativo il consumatore può percepire disagio pensando ai benefici delle alternative non scelte: le imprese lo riducono con comunicazione post-vendita, garanzie e assistenza.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT14", materia:"Marketing", testo:"Nel marketing dei servizi, le tre P aggiuntive rispetto al mix tradizionale sono:",
    opzioni:["People, process, physical evidence","Price, place, promotion","Positioning, packaging, publicity","Performance, planning, profit"], corretta:0,
    spiegazione:"Poiché i servizi sono intangibili e prodotti in presenza del cliente, il mix si estende a persone, processi di erogazione ed elementi tangibili che rendono percepibile la qualità.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  { id:"MKT15", materia:"Marketing", testo:"Un'impresa che sceglie una strategia di marketing indifferenziato (di massa):",
    opzioni:["Propone un'offerta unica all'intero mercato, ignorando le differenze fra segmenti","Sviluppa un'offerta specifica per ciascun segmento identificato","Si concentra su un solo segmento di nicchia","Personalizza il prodotto per il singolo cliente"], corretta:0,
    spiegazione:"Il marketing indifferenziato punta su ciò che i consumatori hanno in comune con un'unica offerta; differenziato, concentrato e micromarketing rappresentano livelli crescenti di adattamento ai segmenti.",
    fonte:"Kotler, Armstrong, Principles of Marketing" },

  /* ================= STATISTICA (Agresti, Finlay) ================= */
  { id:"STA01", materia:"Statistica", testo:"Il titolo di studio, rilevato come «licenza media, diploma, laurea», è una variabile misurata su scala:",
    opzioni:["Nominale","Ordinale","A intervalli","Di rapporti"], corretta:1,
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
    opzioni:["La probabilità che l'ipotesi nulla sia vera","La probabilità di osservare un risultato estremo almeno quanto quello ottenuto, supponendo vera l'ipotesi nulla","La dimensione dell'effetto osservato","La probabilità di commettere un errore di secondo tipo"], corretta:1,
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
    opzioni:["Da 0 a 1","Da −1 a +1","Da −100 a +100","Qualsiasi valore reale"], corretta:1,
    spiegazione:"r varia fra −1 e +1: il segno indica la direzione della relazione lineare, il valore assoluto la sua intensità. Vale 0 in assenza di relazione lineare.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA09", materia:"Statistica", testo:"In un campionamento casuale stratificato:",
    opzioni:["Si estraggono unità a caso dall'intera popolazione senza distinzioni","Si divide la popolazione in gruppi omogenei e si estrae un campione casuale da ciascuno","Si intervistano le persone più facilmente raggiungibili","Si sceglie un solo gruppo e lo si osserva integralmente"], corretta:1,
    spiegazione:"La stratificazione divide la popolazione in strati omogenei rispetto a una caratteristica rilevante ed estrae da ognuno: garantisce la rappresentanza di tutti i sottogruppi e riduce l'errore di stima.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA10", materia:"Statistica", testo:"In una distribuzione normale, quale percentuale approssimativa dei casi cade entro due deviazioni standard dalla media?",
    opzioni:["Circa il 50%","Circa il 68%","Circa il 95%","Circa il 99,9%"], corretta:2,
    spiegazione:"Per la regola empirica: circa il 68% entro una deviazione standard, circa il 95% entro due, circa il 99,7% entro tre.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA11", materia:"Statistica", testo:"In una regressione lineare semplice Y = a + bX, il coefficiente b indica:",
    opzioni:["Il valore atteso di Y quando X è pari a zero","La variazione attesa di Y per un aumento unitario di X","La quota di varianza spiegata dal modello","La correlazione fra X e Y espressa in percentuale"], corretta:1,
    spiegazione:"b è la pendenza della retta: quantifica di quanto varia in media Y all'aumentare di X di un'unità. L'intercetta a è il valore atteso di Y quando X vale zero.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA12", materia:"Statistica", testo:"Si osserva una forte associazione fra vendite di gelati e numero di annegamenti. L'interpretazione statisticamente corretta è:",
    opzioni:["I gelati causano gli annegamenti","Esiste una variabile di confondimento, la temperatura, associata a entrambi","L'associazione è certamente dovuta al caso","La correlazione osservata dimostra un nesso causale inverso"], corretta:1,
    spiegazione:"È il caso classico di associazione spuria: una terza variabile (il caldo) influenza entrambi i fenomeni. La correlazione non implica causalità.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA13", materia:"Statistica", testo:"Per verificare l'associazione fra due variabili categoriali si usa in genere:",
    opzioni:["Il test chi quadrato","Il test t per campioni appaiati","L'analisi della varianza a una via","La regressione lineare semplice"], corretta:0,
    spiegazione:"Il chi quadrato confronta le frequenze osservate nella tabella di contingenza con quelle attese in caso di indipendenza fra le due variabili categoriali.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA14", materia:"Statistica", testo:"Rispetto alla media, la mediana è:",
    opzioni:["Più sensibile ai valori anomali","Meno sensibile ai valori anomali","Calcolabile solo su variabili nominali","Sempre uguale alla moda"], corretta:1,
    spiegazione:"La mediana dipende dalla posizione dei valori nell'ordinamento e non dalla loro grandezza: un singolo valore estremo la sposta poco, mentre trascina la media.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  { id:"STA15", materia:"Statistica", testo:"In un sondaggio, l'errore di copertura si verifica quando:",
    opzioni:["La lista da cui si estrae il campione non rappresenta l'intera popolazione obiettivo","Alcuni intervistati rispondono in modo non sincero","Il questionario contiene troppe domande aperte","Si utilizza un campione probabilistico"], corretta:0,
    spiegazione:"L'errore di copertura nasce dalla lista di campionamento (per esempio un elenco telefonico che esclude chi non ha telefono fisso); è distinto dall'errore campionario, dalla mancata risposta e dall'errore di misurazione.",
    fonte:"Agresti, Finlay, Statistical Methods for the Social Sciences" },

  /* ================= INFORMATICA (Snyder, Henry) ================= */
  { id:"INF01", materia:"Informatica", testo:"Quanti bit compongono un byte?",
    opzioni:["4","8","16","1024"], corretta:1,
    spiegazione:"Un byte è formato da 8 bit e può rappresentare 2⁸ = 256 valori distinti.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF02", materia:"Informatica", testo:"Il numero binario 1010 corrisponde, in base dieci, a:",
    opzioni:["8","10","12","20"], corretta:1,
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
    opzioni:["Traduce i nomi di dominio negli indirizzi IP corrispondenti","Cifra il traffico fra browser e server","Assegna la banda disponibile agli utenti","Memorizza le password degli utenti"], corretta:0,
    spiegazione:"Il Domain Name System funziona come un elenco telefonico della rete: converte nomi leggibili come unimi.it nell'indirizzo IP numerico del server.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF06", materia:"Informatica", testo:"Rispetto a HTTP, il protocollo HTTPS:",
    opzioni:["Trasferisce i dati più velocemente","Cifra la comunicazione fra browser e server tramite TLS","Funziona soltanto sulle reti aziendali","Elimina la necessità di autenticarsi"], corretta:1,
    spiegazione:"La «S» sta per secure: HTTPS incapsula HTTP in una connessione cifrata TLS, che protegge riservatezza e integrità dei dati e autentica il server tramite certificato.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF07", materia:"Informatica", testo:"Quale delle seguenti è una compressione con perdita di informazione (lossy)?",
    opzioni:["ZIP","PNG","JPEG","FLAC"], corretta:2,
    spiegazione:"JPEG scarta informazione visiva poco percepibile e non è reversibile; ZIP, PNG e FLAC sono formati di compressione senza perdita.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF08", materia:"Informatica", testo:"In un database relazionale, la chiave primaria di una tabella:",
    opzioni:["Identifica in modo univoco ciascun record","Contiene la password di accesso alla tabella","Indica l'ordine di visualizzazione dei dati","Può assumere lo stesso valore in più record"], corretta:0,
    spiegazione:"La chiave primaria identifica univocamente ogni riga: non ammette duplicati né valori nulli, ed è ciò a cui si collegano le chiavi esterne delle altre tabelle.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF09", materia:"Informatica", testo:"Che cos'è un algoritmo?",
    opzioni:["Un linguaggio di programmazione","Una sequenza finita e non ambigua di istruzioni che porta alla soluzione di un problema","Un componente fisico del calcolatore","Un tipo di file compresso"], corretta:1,
    spiegazione:"Un algoritmo è la procedura, indipendente dal linguaggio con cui viene poi scritta, che a partire dagli input produce l'output in un numero finito di passi definiti in modo non ambiguo.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  { id:"INF10", materia:"Informatica", testo:"Nel modello «software as a service» (SaaS) del cloud computing, l'utente:",
    opzioni:["Acquista il software su licenza e lo installa sui propri server","Usa via internet un'applicazione ospitata e gestita dal fornitore","Deve programmare l'applicazione da zero","Riceve solo spazio di archiviazione, senza applicazioni"], corretta:1,
    spiegazione:"Nel SaaS l'applicazione gira sull'infrastruttura del fornitore e si usa dal browser, con manutenzione e aggiornamenti a suo carico; IaaS fornisce infrastruttura, PaaS piattaforme di sviluppo.",
    fonte:"Snyder, Henry, Fluency with Information Technology" },

  /* ============ TEORIE DELLA COMUNICAZIONE E STORIA DEI MEDIA ============ */
  { id:"COM01", materia:"Teorie e storia della comunicazione", testo:"Nel modello matematico della comunicazione di Shannon e Weaver, il «rumore» è:",
    opzioni:["Il messaggio inviato dalla fonte","Qualunque disturbo che interferisce con la trasmissione del segnale","La risposta del destinatario alla fonte","Il canale scelto per la trasmissione"], corretta:1,
    spiegazione:"Il rumore è ogni elemento che degrada il segnale fra trasmittente e ricevente; il modello è lineare e tecnico, ed è stato criticato proprio per l'assenza di contesto e di feedback.",
    fonte:"Teorie della comunicazione" },

  { id:"COM02", materia:"Teorie e storia della comunicazione", testo:"La formula «Chi dice che cosa, attraverso quale canale, a chi, con quale effetto» si deve a:",
    opzioni:["Harold Lasswell","Marshall McLuhan","Paul Lazarsfeld","Elisabeth Noelle-Neumann"], corretta:0,
    spiegazione:"È la formula di Lasswell (1948), che scompone il processo comunicativo in cinque elementi e altrettanti ambiti di ricerca: emittente, contenuto, mezzo, pubblico ed effetti.",
    fonte:"Teorie della comunicazione" },

  { id:"COM03", materia:"Teorie e storia della comunicazione", testo:"Secondo la teoria dell'agenda setting di McCombs e Shaw, i media:",
    opzioni:["Determinano direttamente le opinioni del pubblico","Influenzano l'importanza attribuita ai temi, cioè su che cosa il pubblico pensa","Non hanno alcun effetto sul pubblico","Agiscono solo sulle minoranze politicamente attive"], corretta:1,
    spiegazione:"L'agenda setting sostiene che i media non dicono al pubblico che cosa pensare, ma su che cosa pensare: la rilevanza data a un tema nella copertura si trasferisce alla percezione della sua importanza.",
    fonte:"Teorie della comunicazione" },

  { id:"COM04", materia:"Teorie e storia della comunicazione", testo:"La teoria del «flusso di comunicazione a due fasi» (two-step flow) sostiene che:",
    opzioni:["I messaggi dei media raggiungono tutti gli individui allo stesso modo e con lo stesso effetto","I messaggi passano dai media agli opinion leader e da questi al resto del pubblico","Gli effetti dei media si manifestano solo nel lungo periodo","La comunicazione interpersonale non ha alcun ruolo"], corretta:1,
    spiegazione:"Lazarsfeld, Berelson e Gaudet, studiando le campagne elettorali, individuano il ruolo di mediazione degli opinion leader: la relazione interpersonale filtra e rielabora il messaggio mediale.",
    fonte:"Teorie della comunicazione" },

  { id:"COM05", materia:"Teorie e storia della comunicazione", testo:"La «spirale del silenzio» di Elisabeth Noelle-Neumann descrive:",
    opzioni:["La tendenza a tacere la propria opinione quando la si percepisce minoritaria","L'aumento del rumore informativo nei media digitali","La perdita di memoria collettiva degli eventi","La riduzione progressiva dei tempi di attenzione"], corretta:0,
    spiegazione:"Per timore dell'isolamento sociale chi si percepisce in minoranza tende a non esprimersi: il silenzio rafforza la percezione della maggioranza, innescando una spirale cumulativa.",
    fonte:"Teorie della comunicazione" },

  { id:"COM06", materia:"Teorie e storia della comunicazione", testo:"L'approccio «usi e gratificazioni» (uses and gratifications) sposta l'attenzione:",
    opzioni:["Da ciò che i media fanno alle persone a ciò che le persone fanno con i media","Dagli effetti a lungo termine a quelli immediati","Dalla ricerca empirica alla speculazione filosofica","Dal pubblico agli assetti proprietari delle imprese mediali"], corretta:0,
    spiegazione:"Il pubblico è considerato attivo: seleziona i media per soddisfare bisogni di informazione, identità personale, relazione e intrattenimento.",
    fonte:"Teorie della comunicazione" },

  { id:"COM07", materia:"Teorie e storia della comunicazione", testo:"La cosiddetta «teoria ipodermica» (bullet theory) presuppone:",
    opzioni:["Un pubblico passivo su cui il messaggio agisce in modo diretto e uniforme","Un pubblico che negozia attivamente i significati","Effetti mediali limitati e mediati dai gruppi sociali","L'assenza di qualunque effetto misurabile"], corretta:0,
    spiegazione:"Formulata nel periodo fra le due guerre e legata alla società di massa, immagina il messaggio come un'iniezione che produce lo stesso effetto su tutti; le ricerche successive la ridimensionano.",
    fonte:"Teorie della comunicazione" },

  { id:"COM08", materia:"Teorie e storia della comunicazione", testo:"Secondo la teoria della coltivazione di George Gerbner, l'esposizione prolungata alla televisione:",
    opzioni:["Non modifica la percezione della realtà","Costruisce nel tempo una visione del mondo coerente con quella rappresentata dai programmi","Produce effetti solo su chi guarda notiziari","Riduce il consenso verso le istituzioni"], corretta:1,
    spiegazione:"La coltivazione riguarda effetti cumulativi e di lungo periodo: i forti consumatori tendono ad esempio a sovrastimare i rischi di criminalità, secondo la «sindrome del mondo cattivo».",
    fonte:"Teorie della comunicazione" },

  { id:"COM09", materia:"Teorie e storia della comunicazione", testo:"L'affermazione «il medium è il messaggio» significa che:",
    opzioni:["Il contenuto trasmesso è l'unico elemento rilevante","La forma del mezzo modifica di per sé percezione ed esperienza sociale, al di là dei contenuti","Ogni mezzo trasmette necessariamente messaggi pubblicitari","I mezzi di comunicazione sono neutrali rispetto ai contenuti"], corretta:1,
    spiegazione:"Per Marshall McLuhan il cambiamento sociale prodotto da un mezzo dipende dalla sua forma e dalla scala che introduce nelle relazioni umane, non dal contenuto veicolato.",
    fonte:"Teorie della comunicazione" },

  { id:"COM10", materia:"Teorie e storia della comunicazione", testo:"Il World Wide Web fu ideato alla fine degli anni Ottanta al CERN di Ginevra da:",
    opzioni:["Tim Berners-Lee","Steve Jobs","Vinton Cerf","Bill Gates"], corretta:0,
    spiegazione:"Tim Berners-Lee formulò la proposta nel 1989 e sviluppò HTTP, HTML e il primo browser: il Web è un servizio che gira su internet, non coincide con internet stessa.",
    fonte:"Balbi, Magaudda, A History of Digital Media" },

  { id:"COM11", materia:"Teorie e storia della comunicazione", testo:"ARPANET, rete antenata di internet, entrò in funzione:",
    opzioni:["Nel 1948, negli studi dei Bell Labs","Nel 1969, in un progetto finanziato dal Dipartimento della Difesa statunitense","Nel 1989, al CERN","Nel 1995, con la nascita dei primi motori di ricerca"], corretta:1,
    spiegazione:"I primi collegamenti fra i nodi universitari di ARPANET risalgono al 1969; la commutazione di pacchetto e i protocolli TCP/IP sono le innovazioni che portano poi a internet.",
    fonte:"Balbi, Magaudda, A History of Digital Media" },

  { id:"COM12", materia:"Teorie e storia della comunicazione", testo:"Nella prospettiva della «rimediazione» di Bolter e Grusin, i nuovi media:",
    opzioni:["Cancellano completamente i media precedenti","Rappresentano e rielaborano al proprio interno le forme dei media che li hanno preceduti","Nascono senza alcun rapporto con la tradizione mediale","Riguardano solo l'ambito artistico"], corretta:1,
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
    opzioni:["of","for","to","about"], corretta:1,
    spiegazione:"«To be responsible for something» è la reggenza corretta; «responsible to» si usa invece per la persona a cui si risponde gerarchicamente." },

  { id:"ENG04", materia:"Inglese", testo:"A survey was ______ among 1,200 respondents.",
    opzioni:["made out","carried out","taken off","brought up"], corretta:1,
    spiegazione:"«To carry out a survey» significa condurre una ricerca; gli altri phrasal verb hanno significati diversi e non si usano in questo contesto." },

  { id:"ENG05", materia:"Inglese", testo:"Please make sure the figures ______ before the meeting.",
    opzioni:["are checked","check","are checking","will check"], corretta:0,
    spiegazione:"I dati subiscono l'azione: serve il passivo al presente (are + participio passato)." },

  { id:"ENG06", materia:"Inglese", testo:"In spite of ______ several reminders, the client did not reply.",
    opzioni:["send","to send","sending","sent"], corretta:2,
    spiegazione:"«In spite of» e «despite» sono seguiti da sostantivo o forma in -ing; con soggetto e verbo coniugato si userebbe «although»." },

  { id:"ENG07", materia:"Inglese", testo:"She said she ______ the presentation the day before.",
    opzioni:["finished","has finished","had finished","would finish"], corretta:2,
    spiegazione:"Nel discorso indiretto il past simple retrocede al past perfect, coerentemente con «the day before»." },

  { id:"ENG08", materia:"Inglese", testo:"In a business context, «stakeholders» are:",
    opzioni:["Only the shareholders of the company","All the groups that have an interest in the organisation's activities","The company's competitors","The members of the board of directors"], corretta:1,
    spiegazione:"Gli stakeholder comprendono dipendenti, clienti, fornitori, comunità locali e istituzioni, oltre agli azionisti (shareholder), che ne sono solo una categoria." },

  /* ================= ATTUALITÀ E ISTITUZIONI ================= */
  { id:"ATT01", materia:"Attualità e istituzioni", testo:"Quale istituzione dell'Unione europea detiene il potere di proposta legislativa?",
    opzioni:["Il Parlamento europeo","La Commissione europea","Il Consiglio d'Europa","La Corte di giustizia dell'Unione europea"], corretta:1,
    spiegazione:"La Commissione europea propone gli atti legislativi, che vengono poi approvati da Parlamento europeo e Consiglio dell'Unione. Il Consiglio d'Europa è un'organizzazione distinta, non un'istituzione dell'UE." },

  { id:"ATT02", materia:"Attualità e istituzioni", testo:"Quanto dura il mandato del Presidente della Repubblica italiana?",
    opzioni:["Cinque anni","Sei anni","Sette anni","Quattro anni"], corretta:2,
    spiegazione:"L'articolo 85 della Costituzione fissa in sette anni la durata del mandato; il Presidente è eletto dal Parlamento in seduta comune con i delegati regionali." },

  { id:"ATT03", materia:"Attualità e istituzioni", testo:"Che cosa misura il prodotto interno lordo (PIL) di un Paese?",
    opzioni:["Il valore dei beni e servizi finali prodotti nel territorio in un dato periodo","La ricchezza complessiva accumulata dalle famiglie","Il livello medio dei prezzi al consumo","Il debito pubblico rapportato alle esportazioni"], corretta:0,
    spiegazione:"Il PIL è un flusso: misura il valore della produzione finale realizzata in un anno entro i confini nazionali. Non misura lo stock di ricchezza né la distribuzione del reddito." },

  { id:"ATT04", materia:"Attualità e istituzioni", testo:"L'Organizzazione mondiale della sanità (OMS) è:",
    opzioni:["Un'agenzia specializzata delle Nazioni Unite con sede a Ginevra","Un organo dell'Unione europea con sede a Bruxelles","Un'organizzazione non governativa privata","Un'agenzia della NATO"], corretta:0,
    spiegazione:"L'OMS è l'agenzia ONU per la salute pubblica, fondata nel 1948 e con sede a Ginevra." },

  { id:"ATT05", materia:"Attualità e istituzioni", testo:"In Italia, il cosiddetto «GDPR» disciplina:",
    opzioni:["La protezione dei dati personali nell'Unione europea","La tassazione delle imprese digitali","I diritti d'autore sulle opere musicali","La pubblicità comparativa"], corretta:0,
    spiegazione:"Il regolamento generale sulla protezione dei dati (UE 2016/679), applicabile dal 2018, disciplina il trattamento dei dati personali e i diritti degli interessati." }

  ]
}
];
