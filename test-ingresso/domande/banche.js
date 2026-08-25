/* ============================================================================
   BANCHE DATI DELLE DOMANDE
   ----------------------------------------------------------------------------
   Ogni banca è un oggetto con questa forma (vedi domande/MODELLO.md):

   {
     id: "identificativo-univoco",
     titolo: "Nome mostrato nel menu",
     descrizione: "Riga di contesto",
     esame: {                       // regole della prova ufficiale
       durataMinuti: 60,
       numeroDomande: 30,
       puntiCorretta: 1,
       puntiErrata: 0,              // es. -0.25 se il bando prevede penalità
       puntiOmessa: 0,
       sogliaSufficienza: 18        // null se non prevista
     },
     domande: [
       {
         id: "L01",                 // univoco dentro la banca
         materia: "Logica",
         testo: "Testo della domanda",
         opzioni: ["A", "B", "C", "D"],
         corretta: 2,               // INDICE (0 = prima opzione)
         spiegazione: "Perché è quella giusta",
         fonte: "Manuale X, cap. 3" // facoltativo
       }
     ]
   }

   La banca qui sotto è un ESEMPIO DIMOSTRATIVO, da sostituire con le domande
   costruite sul programma e sui testi d'esame reali.
   ========================================================================== */

window.BANCHE = [
{
  id: "demo-generale",
  titolo: "Banca dimostrativa (logica, testo, matematica, inglese)",
  descrizione: "esempio da sostituire con le domande del test reale",
  esame: { durataMinuti: 45, numeroDomande: 30, puntiCorretta: 1, puntiErrata: 0, puntiOmessa: 0, sogliaSufficienza: 18 },
  domande: [

  /* ---------------- LOGICA ---------------- */
  { id:"LOG01", materia:"Logica", testo:"Completa la serie: 2, 6, 12, 20, 30, ?",
    opzioni:["36","40","42","44"], corretta:2,
    spiegazione:"Le differenze fra termini consecutivi sono 4, 6, 8, 10: la successiva è 12, quindi 30 + 12 = 42." },

  { id:"LOG02", materia:"Logica", testo:"Tutti i cigni del lago sono bianchi. Alcuni animali del lago non sono bianchi. Quale conclusione è necessariamente vera?",
    opzioni:["Alcuni animali del lago non sono cigni","Nessun animale del lago è un cigno","Tutti gli animali del lago sono cigni","Alcuni cigni del lago non sono bianchi"], corretta:0,
    spiegazione:"Se un animale non è bianco non può essere un cigno del lago (tutti i cigni lo sono): quindi almeno un animale del lago non è un cigno." },

  { id:"LOG03", materia:"Logica", testo:"Qual è la corretta negazione della frase «Tutti gli studenti hanno superato il test»?",
    opzioni:["Nessuno studente ha superato il test","Almeno uno studente non ha superato il test","Tutti gli studenti non hanno superato il test","Pochi studenti hanno superato il test"], corretta:1,
    spiegazione:"La negazione di un enunciato universale affermativo è un enunciato particolare negativo: basta un solo controesempio." },

  { id:"LOG04", materia:"Logica", testo:"«Se piove, Anna resta a casa». Sappiamo che Anna non è a casa. Che cosa se ne deduce?",
    opzioni:["Non piove","Piove","Anna resta a casa solo se piove","Non si può dedurre nulla"], corretta:0,
    spiegazione:"È il modus tollens: se l'antecedente implica il conseguente e il conseguente è falso, l'antecedente è falso." },

  { id:"LOG05", materia:"Logica", testo:"In una classe di 30 studenti, 18 studiano inglese, 15 studiano francese e 7 studiano entrambe le lingue. Quanti non studiano nessuna delle due?",
    opzioni:["2","4","5","7"], corretta:1,
    spiegazione:"Per il principio di inclusione-esclusione: 18 + 15 − 7 = 26 studiano almeno una lingua, quindi 30 − 26 = 4." },

  { id:"LOG06", materia:"Logica", testo:"Completa la serie di lettere, usando l'alfabeto inglese di 26 lettere: A, C, F, J, O, ?",
    opzioni:["S","T","U","V"], corretta:2,
    spiegazione:"I salti fra le lettere crescono: +2, +3, +4, +5; il successivo è +6. Da O (15ª lettera) si arriva alla 21ª, cioè U." },

  { id:"LOG07", materia:"Logica", testo:"Marco è più alto di Luca. Luca è più alto di Sara. Elena è più bassa di Sara. Chi è la persona più bassa?",
    opzioni:["Sara","Luca","Elena","Non è determinabile"], corretta:2,
    spiegazione:"L'ordine decrescente è Marco > Luca > Sara > Elena: Elena è l'ultima." },

  { id:"LOG08", materia:"Logica", testo:"Se nessun A è B e ogni C è B, allora:",
    opzioni:["Ogni C è A","Nessun C è A","Alcuni C sono A","Alcuni A sono C"], corretta:1,
    spiegazione:"Ogni C sta in B, e A e B non hanno elementi in comune: quindi nessun C può essere A." },

  { id:"LOG09", materia:"Logica", testo:"Completa la serie: 3, 5, 9, 17, 33, ?",
    opzioni:["49","65","64","66"], corretta:1,
    spiegazione:"Si somma ogni volta una potenza di 2 raddoppiata (+2, +4, +8, +16): il passo successivo è +32, quindi 33 + 32 = 65." },

  { id:"LOG10", materia:"Logica", testo:"Alcuni medici sono sportivi. Tutti gli sportivi sono puntuali. Quale conclusione è necessariamente vera?",
    opzioni:["Tutti i medici sono puntuali","Alcuni medici sono puntuali","Nessun medico è puntuale","Tutti i puntuali sono medici"], corretta:1,
    spiegazione:"I medici che sono sportivi sono anche puntuali: esiste quindi almeno un medico puntuale. Nulla si può dire sugli altri." },

  /* ---------------- COMPRENSIONE DEL TESTO ---------------- */
  { id:"COM01", materia:"Comprensione del testo",
    testo:"Leggi il brano e rispondi.\n\n«Negli ultimi vent'anni le città europee di medie dimensioni hanno registrato una crescita demografica modesta ma costante, mentre le grandi aree metropolitane hanno alternato fasi di espansione e di contrazione. Il fenomeno non dipende soltanto dai flussi migratori: incide anche il costo degli alloggi, che spinge le famiglie giovani verso i centri intermedi, dove i servizi restano accessibili.»\n\nQual è l'affermazione coerente con il brano?",
    opzioni:["Le grandi metropoli sono cresciute con continuità","Il costo degli alloggi è uno dei fattori che spingono le famiglie giovani verso i centri intermedi","I flussi migratori non hanno alcun ruolo nella crescita demografica","Le città medie hanno perso popolazione"], corretta:1,
    spiegazione:"Il brano indica esplicitamente il costo degli alloggi come fattore che spinge le famiglie giovani verso i centri intermedi; nega invece continuità di crescita alle metropoli." },

  { id:"COM02", materia:"Comprensione del testo",
    testo:"Leggi il brano e rispondi.\n\n«Negli ultimi vent'anni le città europee di medie dimensioni hanno registrato una crescita demografica modesta ma costante, mentre le grandi aree metropolitane hanno alternato fasi di espansione e di contrazione. Il fenomeno non dipende soltanto dai flussi migratori: incide anche il costo degli alloggi, che spinge le famiglie giovani verso i centri intermedi, dove i servizi restano accessibili.»\n\nL'espressione «non dipende soltanto» indica che l'autore:",
    opzioni:["Esclude il ruolo dei flussi migratori","Riconosce ai flussi migratori un ruolo, ma non esclusivo","Considera i flussi migratori la causa principale","Afferma che le cause sono ignote"], corretta:1,
    spiegazione:"«Non soltanto» ammette il fattore citato e ne aggiunge altri: i flussi migratori contano, ma non sono l'unica causa." },

  { id:"COM03", materia:"Comprensione del testo",
    testo:"Leggi il brano e rispondi.\n\n«La divulgazione scientifica non consiste nel semplificare i risultati fino a renderli innocui, ma nel restituire il percorso che ha portato a quei risultati. Un lettore che conosce solo la conclusione di uno studio non è in grado di valutarne i limiti; un lettore che ne conosce il metodo può farlo, anche senza essere uno specialista.»\n\nQual è la tesi centrale del brano?",
    opzioni:["La divulgazione va riservata agli specialisti","Semplificare è sempre sbagliato","Divulgare significa rendere comprensibile il metodo, non solo la conclusione","I lettori non specialisti non possono valutare uno studio"], corretta:2,
    spiegazione:"L'autore contrappone la semplificazione delle conclusioni alla restituzione del percorso metodologico, che è ciò che rende il lettore capace di valutare." },

  { id:"COM04", materia:"Comprensione del testo",
    testo:"Leggi il brano e rispondi.\n\n«La divulgazione scientifica non consiste nel semplificare i risultati fino a renderli innocui, ma nel restituire il percorso che ha portato a quei risultati. Un lettore che conosce solo la conclusione di uno studio non è in grado di valutarne i limiti; un lettore che ne conosce il metodo può farlo, anche senza essere uno specialista.»\n\nSecondo il brano, la competenza specialistica:",
    opzioni:["È indispensabile per valutare i limiti di uno studio","Non è indispensabile se si conosce il metodo dello studio","Coincide con la conoscenza delle conclusioni","È l'unico obiettivo della divulgazione"], corretta:1,
    spiegazione:"L'ultima frase dice che il lettore che conosce il metodo può valutare i limiti «anche senza essere uno specialista»." },

  { id:"COM05", materia:"Comprensione del testo",
    testo:"Leggi il brano e rispondi.\n\n«Il lavoro da remoto ha ridotto i tempi di spostamento, ma ha reso più difficile separare l'orario di lavoro da quello privato. Le aziende che hanno introdotto regole esplicite sulla reperibilità riportano livelli di soddisfazione più alti rispetto a quelle che hanno lasciato la questione alla libera interpretazione dei singoli.»\n\nChe cosa si può concludere dal brano?",
    opzioni:["Il lavoro da remoto è complessivamente dannoso","Regole esplicite sulla reperibilità si associano a maggiore soddisfazione","Le aziende senza regole hanno tempi di spostamento più lunghi","La separazione fra lavoro e vita privata non dipende dalle regole aziendali"], corretta:1,
    spiegazione:"Il brano riporta un'associazione fra regole esplicite sulla reperibilità e soddisfazione più alta; non giudica il lavoro da remoto in sé." },

  /* ---------------- MATEMATICA E STATISTICA ---------------- */
  { id:"MAT01", materia:"Matematica e statistica", testo:"Qual è la media aritmetica dei valori 4, 8, 10, 10, 13?",
    opzioni:["8","9","10","9,5"], corretta:1,
    spiegazione:"La somma è 45 e i valori sono 5: 45 / 5 = 9." },

  { id:"MAT02", materia:"Matematica e statistica", testo:"Qual è la mediana della serie ordinata 3, 7, 9, 15, 21, 25?",
    opzioni:["9","12","15","13,3"], corretta:1,
    spiegazione:"Con un numero pari di osservazioni la mediana è la media dei due valori centrali: (9 + 15) / 2 = 12." },

  { id:"MAT03", materia:"Matematica e statistica", testo:"Se a ogni valore di una distribuzione si somma la costante 5, la deviazione standard:",
    opzioni:["Aumenta di 5","Resta invariata","Si moltiplica per 5","Diventa nulla"], corretta:1,
    spiegazione:"La deviazione standard misura la dispersione attorno alla media: una traslazione sposta media e valori della stessa quantità, lasciando invariati gli scarti." },

  { id:"MAT04", materia:"Matematica e statistica", testo:"Lanciando due dadi a sei facce, qual è la probabilità che la somma sia 7?",
    opzioni:["1/12","1/6","1/9","7/36"], corretta:1,
    spiegazione:"I casi favorevoli sono 6 su 36 esiti possibili (1-6, 2-5, 3-4, 4-3, 5-2, 6-1): 6/36 = 1/6." },

  { id:"MAT05", materia:"Matematica e statistica", testo:"Un prezzo di 200 euro aumenta del 10% e successivamente diminuisce del 10%. Qual è la variazione complessiva rispetto al prezzo iniziale?",
    opzioni:["Nessuna variazione","−1%","−2%","+1%"], corretta:1,
    spiegazione:"200 → 220 → 198. La differenza è −2 euro su 200, cioè −1%: le variazioni percentuali non si compensano perché applicate a basi diverse." },

  { id:"MAT06", materia:"Matematica e statistica", testo:"Risolvi l'equazione 3x − 7 = 2x + 5.",
    opzioni:["x = 2","x = 12","x = −12","x = 6"], corretta:1,
    spiegazione:"Portando le incognite a sinistra e i numeri a destra: 3x − 2x = 5 + 7, quindi x = 12." },

  { id:"MAT07", materia:"Matematica e statistica", testo:"Se 4 operai completano un lavoro in 6 giorni, quanti giorni impiegano 3 operai con lo stesso ritmo di lavoro?",
    opzioni:["4,5 giorni","7 giorni","8 giorni","9 giorni"], corretta:2,
    spiegazione:"Il lavoro vale 4 × 6 = 24 giornate-uomo; con 3 operai servono 24 / 3 = 8 giorni (proporzionalità inversa)." },

  { id:"MAT08", materia:"Matematica e statistica", testo:"Qual è la moda della distribuzione 2, 3, 3, 5, 7, 7, 7, 9?",
    opzioni:["3","5","7","5,4"], corretta:2,
    spiegazione:"La moda è il valore con frequenza più alta: il 7 compare tre volte, più di ogni altro." },

  { id:"MAT09", materia:"Matematica e statistica", testo:"Fra due variabili il coefficiente di correlazione lineare vale −0,9. Che cosa indica?",
    opzioni:["Una relazione lineare inversa e forte","Una relazione lineare diretta e debole","L'assenza di qualsiasi relazione","Che una variabile causa l'altra"], corretta:0,
    spiegazione:"Il segno negativo indica relazione inversa, il valore vicino a −1 indica intensità elevata. La correlazione non implica un nesso causale." },

  { id:"MAT10", materia:"Matematica e statistica", testo:"Un'urna contiene 5 palline rosse e 3 nere. Estraendone due senza reimmissione, qual è la probabilità che siano entrambe rosse?",
    opzioni:["25/64","5/14","1/2","3/14"], corretta:1,
    spiegazione:"P = (5/8) × (4/7) = 20/56 = 5/14: dopo la prima estrazione restano 4 rosse su 7 palline." },

  /* ---------------- INGLESE ---------------- */
  { id:"ENG01", materia:"Inglese", testo:"If I ______ more time, I would travel more often.",
    opzioni:["have","had","will have","would have"], corretta:1,
    spiegazione:"Periodo ipotetico di secondo tipo: if + past simple nella subordinata, would + infinito nella principale." },

  { id:"ENG02", materia:"Inglese", testo:"She has worked in this department ______ 2015.",
    opzioni:["for","from","since","during"], corretta:2,
    spiegazione:"Con il present perfect si usa since davanti a un punto d'inizio preciso nel tempo; for indica invece una durata." },

  { id:"ENG03", materia:"Inglese", testo:"The report ______ by the committee last week.",
    opzioni:["was reviewed","has reviewed","is reviewing","reviewed"], corretta:0,
    spiegazione:"Forma passiva al past simple (was + participio passato), richiesta da «last week» e dal soggetto che subisce l'azione." },

  { id:"ENG04", materia:"Inglese", testo:"A source described as «reliable» is one that is:",
    opzioni:["outdated","trustworthy","expensive","confusing"], corretta:1,
    spiegazione:"«Reliable» significa affidabile, degno di fiducia: il sinonimo corretto è trustworthy." },

  { id:"ENG05", materia:"Inglese", testo:"I look forward to ______ from you soon.",
    opzioni:["hear","hearing","have heard","heard"], corretta:1,
    spiegazione:"In «look forward to» il to è una preposizione: va seguito dalla forma in -ing." },

  { id:"ENG06", materia:"Inglese", testo:"He is used to ______ up early.",
    opzioni:["get","getting","got","gets"], corretta:1,
    spiegazione:"«To be used to» (essere abituato a) regge il gerundio; «used to + infinito» esprime invece un'abitudine passata." },

  { id:"ENG07", materia:"Inglese", testo:"Neither of the two candidates ______ ready for the interview.",
    opzioni:["are","is","were","have"], corretta:1,
    spiegazione:"«Neither of» come soggetto è trattato come singolare nell'inglese formale: richiede il verbo alla terza persona singolare." },

  { id:"ENG08", materia:"Inglese", testo:"______ studying hard, she did not pass the exam.",
    opzioni:["Although","Despite","However","Because of"], corretta:1,
    spiegazione:"Despite è seguito da sostantivo o forma in -ing; although introdurrebbe una frase con soggetto e verbo coniugato." }

  ]
}
];
