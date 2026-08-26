/* Preparazione test d'ingresso — app statica, nessuna dipendenza.
   I dati delle domande arrivano da domande/banche.js (window.BANCHE). */
(() => {
"use strict";

// ---------- utilità ----------
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const LETTERE = ["A", "B", "C", "D", "E", "F"];
const CHIAVI = { sessione: "ti.sessione.v2", storico: "ti.storico.v2", errori: "ti.errori.v2", tema: "ti.tema" };

const leggi = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
const scrivi = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

function mescola(a) {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}
const mmss = ms => {
  const t = Math.max(0, Math.round(ms / 1000));
  const m = String(Math.floor(t / 60)).padStart(2, "0");
  return `${m}:${String(t % 60).padStart(2, "0")}`;
};
const dataIt = ts => new Date(ts).toLocaleString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
const arrotonda = n => Math.round(n * 100) / 100;
const segno = n => (n > 0 ? "+" : "") + n;
const plur = (n, s1, s2) => (Math.abs(n) === 1 ? s1 : s2);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ---------- dati ----------
const BANCHE = (window.BANCHE || []).filter(b => b && Array.isArray(b.domande) && b.domande.length);
const bancaDi = id => BANCHE.find(b => b.id === id) || BANCHE[0];
const CONF_DEF = { durataMinuti: 60, numeroDomande: 30, puntiCorretta: 1, puntiErrata: 0, puntiOmessa: 0,
                   sogliaSufficienza: null, pesi: null, pesoTitolo: null, data: null };
const confDi = b => Object.assign({}, CONF_DEF, (b && b.esame) || {});

// tutte le domande, con banca e chiave stabile
function domandeDi(banca) {
  return banca.domande.map((q, i) => Object.assign({}, q, {
    id: q.id || `${banca.id}-${i + 1}`,
    materia: q.materia || "Generale",
    _banca: banca.id
  }));
}
const chiave = q => `${q._banca}::${q.id}`;

// Ripartisce n domande fra le materie secondo i pesi del bando (metodo dei resti
// maggiori). Se una materia non ha abbastanza domande, le mancanti vanno alle altre.
function quotePesate(n, pesi, disponibiliPerMateria) {
  const materie = Object.keys(pesi).filter(m => (disponibiliPerMateria[m] || 0) > 0);
  const totPesi = materie.reduce((s, m) => s + pesi[m], 0);
  if (!materie.length || !totPesi) return {};
  const esatte = {}, quote = {};
  materie.forEach(m => { esatte[m] = n * pesi[m] / totPesi; quote[m] = Math.floor(esatte[m]); });
  let resto = n - materie.reduce((s, m) => s + quote[m], 0);
  materie.sort((a, b) => (esatte[b] - quote[b]) - (esatte[a] - quote[a]))
         .forEach(m => { if (resto > 0) { quote[m]++; resto--; } });
  // niente più domande di quante ne esistano: il surplus si redistribuisce
  let surplus = 0;
  materie.forEach(m => {
    const max = disponibiliPerMateria[m];
    if (quote[m] > max) { surplus += quote[m] - max; quote[m] = max; }
  });
  while (surplus > 0) {
    const spazio = materie.filter(m => quote[m] < disponibiliPerMateria[m])
                          .sort((a, b) => pesi[b] - pesi[a]);
    if (!spazio.length) break;
    spazio.forEach(m => { if (surplus > 0) { quote[m]++; surplus--; } });
  }
  return quote;
}

function estraiPesata(qs, n, pesi) {
  const perMateria = {};
  qs.forEach(q => (perMateria[q.materia] || (perMateria[q.materia] = [])).push(q));
  const conteggi = {};
  Object.keys(perMateria).forEach(m => conteggi[m] = perMateria[m].length);
  const quote = quotePesate(n, pesi, conteggi);
  let scelte = [];
  Object.entries(quote).forEach(([m, q]) => { scelte = scelte.concat(mescola(perMateria[m]).slice(0, q)); });
  return mescola(scelte);
}

// ---------- stato ----------
let sessione = null;      // prova in corso
let tick = null;          // timer
let ultimoEsito = null;   // per la schermata risultati
let vistaPrec = "v-home";

// ---------- tema ----------
const temaSalvato = leggi(CHIAVI.tema, null);
const temaOspite = document.documentElement.dataset.theme; // quando la pagina è ospitata altrove
const scuroDiSistema = temaOspite ? temaOspite === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
if (temaSalvato) document.documentElement.dataset.tema = temaSalvato;
else if (scuroDiSistema) document.documentElement.dataset.tema = "scuro";
$("#nav-tema").onclick = () => {
  const nuovo = document.documentElement.dataset.tema === "scuro" ? "chiaro" : "scuro";
  document.documentElement.dataset.tema = nuovo;
  scrivi(CHIAVI.tema, nuovo);
};

// ---------- navigazione ----------
function mostra(id) {
  $$(".view").forEach(v => { v.hidden = v.id !== id; });
  if (id !== "v-stat") vistaPrec = id;
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}
$("#btn-home").onclick = () => { if (confermaAbbandono()) { mostra("v-home"); disegnaHome(); } };
$("#r-home").onclick = () => { mostra("v-home"); disegnaHome(); };
$("#nav-stat").onclick = () => { disegnaStat(); mostra("v-stat"); };
$$("[data-back]").forEach(b => b.onclick = () => { mostra(vistaPrec === "v-stat" ? "v-home" : vistaPrec); disegnaHome(); });

function confermaAbbandono() {
  if (!sessione || $("#v-quiz").hidden) return true;
  if (confirm("Vuoi uscire dalla prova? Resta salvata e potrai riprenderla dalla home.")) { fermaTimer(); return true; }
  return false;
}

// ---------- HOME ----------
function disegnaProva() {
  const box = $("#home-esame");
  const banca = BANCHE.find(b => confDi(b).data);
  if (!banca) { box.hidden = true; return; }
  const conf = confDi(banca);
  const quando = new Date(conf.data);
  if (isNaN(quando)) { box.hidden = true; return; }
  const giorni = Math.ceil((quando - Date.now()) / 86400000);
  const data = quando.toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });
  const ora = quando.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });
  let stato;
  if (giorni > 1) stato = `<b>${giorni}</b> <span>giorni alla prova</span>`;
  else if (giorni === 1) stato = `<b>domani</b>`;
  else if (giorni === 0) stato = `<b>oggi</b>`;
  else stato = `<span>prova già svolta</span>`;
  box.innerHTML = `${stato} <span>${esc(banca.titolo.split("—")[0].trim())} · ${data}, ore ${ora}${
    conf.pesoTitolo ? " · il voto di laurea pesa il " + conf.pesoTitolo + "% della graduatoria" : ""}</span>`;
  box.hidden = false;
}

function disegnaHome() {
  disegnaProva();
  const box = $("#home-riepilogo");
  const storico = leggi(CHIAVI.storico, []);
  const errori = leggi(CHIAVI.errori, {});
  const daRipassare = Object.values(errori).filter(e => e.ok2 < 2).length;
  let html = "";

  const inCorso = leggi(CHIAVI.sessione, null);
  if (inCorso && inCorso.risposte.some(r => r !== null) && !inCorso.finita) {
    html += `<div class="avviso"><b>Hai una prova lasciata a metà</b><br>
      ${esc(inCorso.titolo)} — ${inCorso.risposte.filter(r => r !== null).length}/${inCorso.domande.length} risposte
      <br><button class="ghost" id="riprendi">Riprendi</button>
      <button class="ghost" id="scarta">Scarta</button></div>`;
  }

  const ultime = storico.slice(-5).reverse();
  html += `<div class="box"><h2>A che punto sei</h2><div class="mini">
      <div><b>${storico.length}</b><span>prove svolte</span></div>
      <div><b>${storico.length ? Math.round(storico.reduce((s, p) => s + p.percentuale, 0) / storico.length) : 0}%</b><span>media di risposte esatte</span></div>
      <div><b>${daRipassare}</b><span>domande da ripassare</span></div>
    </div>`;
  if (ultime.length) {
    html += `<table class="tabella" style="margin-top:16px"><thead><tr><th>Quando</th><th>Prova</th><th>Esatte</th><th>Punti</th></tr></thead><tbody>` +
      ultime.map(p => `<tr><td>${dataIt(p.quando)}</td><td>${esc(p.titolo)}</td><td>${p.corrette}/${p.totale} (${p.percentuale}%)</td><td>${p.punti}</td></tr>`).join("") +
      `</tbody></table>`;
  }
  html += `</div>`;
  box.innerHTML = html;

  const r = $("#riprendi"), s = $("#scarta");
  if (r) r.onclick = () => riprendi(inCorso);
  if (s) s.onclick = () => { localStorage.removeItem(CHIAVI.sessione); disegnaHome(); };
}

$$(".card").forEach(c => c.onclick = () => apriSetup(c.dataset.modalita));

// ---------- SETUP ----------
let modalitaSetup = "esame";

function apriSetup(modalita) {
  modalitaSetup = modalita;
  if (!BANCHE.length) { alert("Nessuna banca dati caricata: controlla il file domande/banche.js"); return; }
  $("#setup-titolo").textContent =
    modalita === "esame" ? "Simulazione d'esame" : modalita === "allenamento" ? "Allenamento per materia" : "Ripasso degli errori";
  $("#c-tempo").hidden = modalita !== "esame";
  $("#f-banca").innerHTML = BANCHE.map(b => `<option value="${esc(b.id)}">${esc(b.titolo)}</option>`).join("");
  $("#f-banca").onchange = aggiornaSetup;
  $("#f-pesi").onchange = aggiornaSetup;
  aggiornaSetup();
  $("#f-errore").hidden = true;
  mostra("v-setup");
}

function pesiAttivi(conf) {
  return modalitaSetup === "esame" && !!conf.pesi && $("#f-pesi").checked;
}

function materieSelezionate() {
  return $$("#f-materie .chip[aria-pressed=true]").map(c => c.dataset.materia);
}

function aggiornaSetup() {
  const banca = bancaDi($("#f-banca").value);
  const conf = confDi(banca);
  $("#f-banca-hint").textContent = `${banca.domande.length} domande disponibili${banca.descrizione ? " — " + banca.descrizione : ""}`;

  const conPesi = pesiAttivi(conf);
  $("#c-pesi").hidden = !(modalitaSetup === "esame" && conf.pesi);
  $("#f-pesi-nota").hidden = !conPesi;
  if (conPesi) {
    const tot = Object.values(conf.pesi).reduce((a, b) => a + b, 0);
    $("#f-pesi-nota").textContent = "Sul totale del test: " + Object.entries(conf.pesi)
      .sort((a, b) => b[1] - a[1])
      .map(([m, p]) => `${m} ${Math.round(p / tot * 100)}%`).join(" · ") +
      ". L'inglese non fa parte della prova.";
  }

  const materie = [...new Set(domandeDi(banca).map(q => q.materia))];
  $("#c-materie").hidden = materie.length < 2 || conPesi;
  $("#f-materie").innerHTML = materie.map(m =>
    `<button type="button" class="chip" aria-pressed="true" data-materia="${esc(m)}">${esc(m)}</button>`).join("");
  $$("#f-materie .chip").forEach(ch => ch.onclick = () => {
    const attivo = ch.getAttribute("aria-pressed") === "true";
    if (attivo && materieSelezionate().length === 1) return; // almeno una
    ch.setAttribute("aria-pressed", String(!attivo));
    aggiornaMax();
  });

  $("#f-tempo").value = conf.durataMinuti;
  $("#f-numero").value = modalitaSetup === "esame" ? conf.numeroDomande : Math.min(15, banca.domande.length);
  $("#f-punteggio").textContent = modalitaSetup === "esame"
    ? `Punteggio: risposta esatta ${segno(conf.puntiCorretta)}, errata ${segno(conf.puntiErrata)}, non data ${segno(conf.puntiOmessa)}` +
      (conf.sogliaSufficienza != null
        ? ` · soglia di superamento: ${conf.sogliaSufficienza} punti su ${conf.numeroDomande} domande`
        : "")
    : "In allenamento vedi subito la risposta corretta e la spiegazione.";
  aggiornaMax();
}

function disponibili() {
  const banca = bancaDi($("#f-banca").value);
  const conf = confDi(banca);
  let qs = domandeDi(banca);
  if (pesiAttivi(conf)) {
    // la simulazione ufficiale usa solo le aree previste dal bando
    return qs.filter(q => conf.pesi[q.materia] > 0);
  }
  const mat = materieSelezionate();
  if (mat.length) qs = qs.filter(q => mat.includes(q.materia));
  if (modalitaSetup === "errori") {
    const errori = leggi(CHIAVI.errori, {});
    qs = qs.filter(q => { const e = errori[chiave(q)]; return e && e.ko > 0 && e.ok2 < 2; });
  }
  return qs;
}

function aggiornaMax() {
  const n = disponibili().length;
  const campo = $("#f-numero");
  campo.max = Math.max(1, n);
  if (+campo.value > n) campo.value = Math.max(1, n);
  const err = $("#f-errore");
  if (n === 0) {
    err.hidden = false;
    err.textContent = modalitaSetup === "errori"
      ? "Nessuna domanda da ripassare: svolgi prima qualche prova (o hai già recuperato tutti gli errori)."
      : "Nessuna domanda per la selezione scelta.";
    $("#f-avvia").disabled = true;
  } else { err.hidden = true; $("#f-avvia").disabled = false; }
}

$("#f-avvia").onclick = () => {
  const banca = bancaDi($("#f-banca").value);
  const conf = confDi(banca);
  let qs = disponibili();
  if (!qs.length) return;
  const n = Math.min(Math.max(1, parseInt($("#f-numero").value, 10) || qs.length), qs.length);
  const conPesi = pesiAttivi(conf);
  if (conPesi) {
    qs = estraiPesata(qs, n, conf.pesi);
  } else {
    if ($("#f-mesc-dom").checked) qs = mescola(qs);
    qs = qs.slice(0, n);
  }

  const mescolaOpz = $("#f-mesc-opz").checked;
  sessione = {
    modalita: modalitaSetup,
    pesata: conPesi,
    banca: banca.id,
    titolo: `${banca.titolo} — ${modalitaSetup === "esame" ? "simulazione" : modalitaSetup === "allenamento" ? "allenamento" : "ripasso errori"}`,
    conf,
    durataMs: modalitaSetup === "esame" ? Math.max(1, parseInt($("#f-tempo").value, 10) || conf.durataMinuti) * 60000 : null,
    inizio: Date.now(),
    indice: 0,
    finita: false,
    segnate: [],
    risposte: new Array(qs.length).fill(null),
    domande: qs.map(q => {
      const ordine = mescolaOpz ? mescola(q.opzioni.map((_, i) => i)) : q.opzioni.map((_, i) => i);
      return { id: q.id, banca: q._banca, materia: q.materia, testo: q.testo, spiegazione: q.spiegazione || "", fonte: q.fonte || "",
               opzioni: ordine.map(i => q.opzioni[i]), corretta: ordine.indexOf(q.corretta) };
    })
  };
  avvia();
};

function avvia() {
  salvaSessione();
  mostra("v-quiz");
  disegnaDomanda();
  if (sessione.durataMs) avviaTimer();
}
function riprendi(s) {
  sessione = s;
  mostra("v-quiz");
  disegnaDomanda();
  if (sessione.durataMs) avviaTimer();
}
const salvaSessione = () => scrivi(CHIAVI.sessione, sessione);

// ---------- TIMER ----------
function scadenza() { return sessione.inizio + sessione.durataMs; }
function avviaTimer() {
  fermaTimer();
  const agg = () => {
    const restante = scadenza() - Date.now();
    const el = $("#q-timer");
    el.textContent = "⏱ " + mmss(restante);
    el.classList.toggle("rosso", restante < 60000);
    if (restante <= 0) { fermaTimer(); alert("Tempo scaduto: la prova viene corretta."); consegna(); }
  };
  agg();
  tick = setInterval(agg, 250);
}
function fermaTimer() { if (tick) { clearInterval(tick); tick = null; } }

// ---------- QUIZ ----------
function domandaCorrente() { return sessione.domande[sessione.indice]; }
const inAllenamento = () => sessione.modalita !== "esame";

function disegnaDomanda() {
  const q = domandaCorrente(), i = sessione.indice, tot = sessione.domande.length;
  const data = sessione.risposte[i];
  const rivelata = inAllenamento() && data !== null;

  $("#q-contatore").textContent = `Domanda ${i + 1} di ${tot}`;
  $("#q-materia").textContent = q.materia;
  $("#q-timer").style.display = sessione.durataMs ? "" : "none";
  $("#q-progress-fill").style.width = ((i + 1) / tot * 100) + "%";
  $("#q-testo").textContent = q.testo;
  $("#q-segna").classList.toggle("attivo", sessione.segnate.includes(i));

  $("#q-opzioni").innerHTML = q.opzioni.map((t, k) => {
    let cls = "opz";
    if (data === k) cls += rivelata ? (k === q.corretta ? " giusta" : " sbagliata") : " scelta";
    if (rivelata && k === q.corretta) cls += " giusta";
    return `<button class="${cls}" data-k="${k}" ${rivelata ? "disabled" : ""}>
        <span class="lettera">${LETTERE[k]}</span><span>${esc(t)}</span></button>`;
  }).join("");
  $$("#q-opzioni .opz").forEach(b => b.onclick = () => rispondi(+b.dataset.k));

  const fb = $("#q-feedback");
  if (rivelata) {
    const giusto = data === q.corretta;
    fb.hidden = false;
    fb.className = "feedback " + (giusto ? "ok" : "ko");
    fb.innerHTML = `<b>${giusto ? "✅ Risposta esatta" : "❌ Risposta errata — corretta: " + LETTERE[q.corretta]}</b>` +
      (q.spiegazione ? esc(q.spiegazione) : "") +
      (q.fonte ? `<span class="fonte">Fonte: ${esc(q.fonte)}</span>` : "");
  } else { fb.hidden = true; }

  $("#q-prec").disabled = i === 0;
  $("#q-succ").textContent = i === tot - 1 ? "Consegna e correggi" : "Successiva →";
  $("#q-pulisci").hidden = rivelata || data === null;
  disegnaMappa();
}

function rispondi(k) {
  const i = sessione.indice;
  if (inAllenamento() && sessione.risposte[i] !== null) return; // già rivelata
  sessione.risposte[i] = k;
  salvaSessione();
  if (inAllenamento()) registraEsito(sessione.domande[i], k === sessione.domande[i].corretta);
  disegnaDomanda();
}

$("#q-pulisci").onclick = () => { sessione.risposte[sessione.indice] = null; salvaSessione(); disegnaDomanda(); };
$("#q-prec").onclick = () => vaiA(sessione.indice - 1);
$("#q-succ").onclick = () => {
  if (sessione.indice === sessione.domande.length - 1) chiediConsegna();
  else vaiA(sessione.indice + 1);
};
$("#q-segna").onclick = () => {
  const i = sessione.indice, p = sessione.segnate.indexOf(i);
  if (p >= 0) sessione.segnate.splice(p, 1); else sessione.segnate.push(i);
  salvaSessione(); disegnaDomanda();
};
$("#q-consegna").onclick = chiediConsegna;

function vaiA(i) {
  if (i < 0 || i >= sessione.domande.length) return;
  sessione.indice = i; salvaSessione(); disegnaDomanda();
}

function disegnaMappa() {
  $("#q-mappa").innerHTML = sessione.domande.map((_, i) => {
    let c = "cella";
    if (sessione.risposte[i] !== null) c += " risposta";
    if (sessione.segnate.includes(i)) c += " segnata";
    if (i === sessione.indice) c += " corrente";
    return `<button class="${c}" data-i="${i}">${i + 1}</button>`;
  }).join("");
  $$("#q-mappa .cella").forEach(b => b.onclick = () => vaiA(+b.dataset.i));
}

function chiediConsegna() {
  const senza = sessione.risposte.filter(r => r === null).length;
  const msg = senza ? `Ci sono ancora ${senza} domande senza risposta. Consegnare comunque?` : "Consegnare la prova?";
  if (confirm(msg)) consegna();
}

// ---------- CORREZIONE ----------
function registraEsito(q, giusto) {
  const errori = leggi(CHIAVI.errori, {});
  const k = `${q.banca}::${q.id}`;
  const e = errori[k] || { ko: 0, ok2: 0, materia: q.materia, testo: q.testo };
  if (giusto) e.ok2 = (e.ok2 || 0) + 1;
  else { e.ko = (e.ko || 0) + 1; e.ok2 = 0; }
  e.ultima = Date.now(); e.materia = q.materia; e.testo = q.testo;
  errori[k] = e;
  scrivi(CHIAVI.errori, errori);
}

function consegna() {
  fermaTimer();
  const conf = sessione.conf;
  let corrette = 0, errate = 0, omesse = 0, punti = 0;
  const perMateria = {};

  sessione.domande.forEach((q, i) => {
    const data = sessione.risposte[i];
    const m = perMateria[q.materia] || (perMateria[q.materia] = { tot: 0, ok: 0 });
    m.tot++;
    if (data === null) { omesse++; punti += conf.puntiOmessa; }
    else if (data === q.corretta) { corrette++; m.ok++; punti += conf.puntiCorretta; }
    else { errate++; punti += conf.puntiErrata; }
    if (!inAllenamento()) registraEsito(q, data === q.corretta);
  });

  punti = arrotonda(punti);
  const totale = sessione.domande.length;
  const percentuale = Math.round(corrette / totale * 100);
  let ponderato = null;
  if (sessione.pesata && conf.pesi) {
    const presenti = Object.keys(perMateria).filter(m => conf.pesi[m] > 0);
    const totPesi = presenti.reduce((s, m) => s + conf.pesi[m], 0);
    if (totPesi) ponderato = Math.round(presenti.reduce(
      (s, m) => s + conf.pesi[m] / totPesi * (perMateria[m].ok / perMateria[m].tot), 0) * 100);
  }

  let soglia = null, proporzionata = false;
  if (sessione.modalita === "esame" && conf.sogliaSufficienza != null) {
    soglia = conf.sogliaSufficienza;
    if (conf.numeroDomande && totale !== conf.numeroDomande) {
      soglia = Math.round(soglia * totale / conf.numeroDomande * 10) / 10;
      proporzionata = true;
    }
  }
  ultimoEsito = { corrette, errate, omesse, punti, totale, percentuale, perMateria, soglia, proporzionata, ponderato,
                  durata: Date.now() - sessione.inizio, sessione: sessione, conf };

  const storico = leggi(CHIAVI.storico, []);
  storico.push({ quando: Date.now(), titolo: sessione.titolo, banca: sessione.banca, modalita: sessione.modalita,
                 corrette, errate, omesse, punti, totale, percentuale, durata: ultimoEsito.durata });
  scrivi(CHIAVI.storico, storico.slice(-100));

  sessione.finita = true;
  localStorage.removeItem(CHIAVI.sessione);
  disegnaRisultati();
  mostra("v-risultati");
}

function disegnaRisultati() {
  const e = ultimoEsito;
  const soglia = e.soglia;
  const passato = soglia != null ? e.punti >= soglia : null;
  const nota = e.proporzionata ? ` — soglia riproporzionata a ${e.totale} domande` : "";

  $("#r-sintesi").innerHTML = `
    <div class="voto">${e.punti} <span style="font-size:1.1rem;color:var(--testo-tenue)">${plur(e.punti, "punto", "punti")}</span></div>
    ${passato === null ? "" : `<div class="esito ${passato ? "ok" : "ko"}">${passato
        ? `Prova superata: ${e.punti} punti su una soglia di ${soglia}${nota}`
        : `Sotto la soglia di ${soglia} punti${nota}`}</div>`}
    ${e.ponderato === null || e.ponderato === undefined ? "" :
      `<div class="ponderato">Punteggio del test pesato come da bando: <b>${e.ponderato}%</b>` +
      (e.conf.pesoTitolo ? ` <span>— nella graduatoria vale il ${100 - e.conf.pesoTitolo}%, il resto è il voto di laurea</span>` : "") + `</div>`}
    <div class="dati">
      <div><b>${e.corrette}</b>esatte</div>
      <div><b>${e.errate}</b>errate</div>
      <div><b>${e.omesse}</b>non date</div>
      <div><b>${e.percentuale}%</b>di esattezza</div>
      <div><b>${mmss(e.durata)}</b>tempo impiegato</div>
    </div>`;

  $("#r-materie").innerHTML = Object.entries(e.perMateria).sort((a, b) => a[1].ok / a[1].tot - b[1].ok / b[1].tot)
    .map(([m, d]) => {
      const p = Math.round(d.ok / d.tot * 100);
      const cls = p < 50 ? "basso" : p < 75 ? "medio" : "";
      return `<div class="barra"><div class="testa"><b>${esc(m)}</b><span>${d.ok}/${d.tot} · ${p}%</span></div>
        <div class="traccia"><div class="riemp ${cls}" style="width:${p}%"></div></div></div>`;
    }).join("");

  $("#r-dettaglio").hidden = true;
  $("#r-rivedi").textContent = "Rivedi le domande";
}

$("#r-rivedi").onclick = () => {
  const box = $("#r-dettaglio");
  if (!box.hidden) { box.hidden = true; $("#r-rivedi").textContent = "Rivedi le domande"; return; }
  const s = ultimoEsito.sessione;
  box.innerHTML = s.domande.map((q, i) => {
    const data = s.risposte[i];
    const stato = data === null ? "vuota" : data === q.corretta ? "" : "ko";
    return `<div class="rev ${stato}">
      <div class="num">Domanda ${i + 1} · ${esc(q.materia)} · ${data === null ? "non data" : data === q.corretta ? "esatta" : "errata"}</div>
      <p class="t">${esc(q.testo)}</p>
      <ul>${q.opzioni.map((t, k) => {
        const c = k === q.corretta ? "g" : (k === data ? "s" : "");
        return `<li class="${c}">${LETTERE[k]}. ${esc(t)}${k === data ? " ← la tua risposta" : ""}</li>`;
      }).join("")}</ul>
      ${q.spiegazione ? `<p class="sp">${esc(q.spiegazione)}</p>` : ""}
      ${q.fonte ? `<p class="sp">Fonte: ${esc(q.fonte)}</p>` : ""}
    </div>`;
  }).join("");
  box.hidden = false;
  $("#r-rivedi").textContent = "Nascondi le domande";
  box.scrollIntoView({ behavior: "smooth", block: "start" });
};

$("#r-ripeti").onclick = () => apriSetup(ultimoEsito.sessione.modalita);

// ---------- STATISTICHE ----------
function disegnaStat() {
  const storico = leggi(CHIAVI.storico, []);
  const errori = leggi(CHIAVI.errori, {});
  const corpo = $("#s-corpo");
  if (!storico.length && !Object.keys(errori).length) {
    corpo.innerHTML = `<div class="vuoto">Ancora nessun dato: svolgi una prova e qui troverai andamento e punti deboli.</div>`;
    return;
  }
  let html = `<h2>Andamento delle prove</h2>`;
  html += storico.length
    ? `<table class="tabella"><thead><tr><th>Quando</th><th>Prova</th><th>Esatte</th><th>Punti</th><th>Tempo</th></tr></thead><tbody>` +
      storico.slice().reverse().slice(0, 30).map(p =>
        `<tr><td>${dataIt(p.quando)}</td><td>${esc(p.titolo)}</td><td>${p.corrette}/${p.totale} (${p.percentuale}%)</td><td>${p.punti}</td><td>${mmss(p.durata)}</td></tr>`
      ).join("") + `</tbody></table>`
    : `<div class="vuoto">Nessuna prova completata.</div>`;

  const perMateria = {};
  Object.values(errori).forEach(e => {
    const m = perMateria[e.materia] || (perMateria[e.materia] = { ko: 0, aperte: 0 });
    m.ko += e.ko; if (e.ok2 < 2 && e.ko > 0) m.aperte++;
  });
  html += `<h2>Punti deboli per materia</h2>`;
  const righe = Object.entries(perMateria).filter(([, d]) => d.ko > 0).sort((a, b) => b[1].ko - a[1].ko);
  html += righe.length
    ? `<table class="tabella"><thead><tr><th>Materia</th><th>Errori totali</th><th>Ancora da recuperare</th></tr></thead><tbody>` +
      righe.map(([m, d]) => `<tr><td>${esc(m)}</td><td>${d.ko}</td><td>${d.aperte}</td></tr>`).join("") + `</tbody></table>`
    : `<div class="vuoto">Nessun errore registrato. 👏</div>`;

  const aperte = Object.entries(errori).filter(([, e]) => e.ko > 0 && e.ok2 < 2);
  html += `<h2>Domande da ripassare (${aperte.length})</h2>`;
  html += aperte.length
    ? `<table class="tabella"><thead><tr><th>Materia</th><th>Domanda</th><th>Errori</th></tr></thead><tbody>` +
      aperte.sort((a, b) => b[1].ko - a[1].ko).slice(0, 40).map(([, e]) =>
        `<tr><td>${esc(e.materia || "-")}</td><td>${esc((e.testo || "").slice(0, 110))}${(e.testo || "").length > 110 ? "…" : ""}</td><td>${e.ko}</td></tr>`
      ).join("") + `</tbody></table>`
    : `<div class="vuoto">Niente in sospeso.</div>`;
  corpo.innerHTML = html;
}

$("#s-reset").onclick = () => {
  if (!confirm("Cancellare storico, errori e prova in corso? L'operazione non è reversibile.")) return;
  [CHIAVI.storico, CHIAVI.errori, CHIAVI.sessione].forEach(k => localStorage.removeItem(k));
  disegnaStat(); disegnaHome();
};

// ---------- tastiera ----------
document.addEventListener("keydown", ev => {
  if ($("#v-quiz").hidden || !sessione) return;
  const t = ev.target.tagName;
  if (t === "INPUT" || t === "SELECT" || t === "TEXTAREA") return;
  const k = ev.key.toLowerCase();
  const idx = "1234".indexOf(k) >= 0 ? "1234".indexOf(k) : "abcd".indexOf(k);
  if (idx >= 0 && idx < domandaCorrente().opzioni.length) { ev.preventDefault(); rispondi(idx); return; }
  if (ev.key === "ArrowRight" || ev.key === "Enter") { ev.preventDefault(); $("#q-succ").click(); }
  if (ev.key === "ArrowLeft") { ev.preventDefault(); if (sessione.indice > 0) vaiA(sessione.indice - 1); }
});

window.addEventListener("beforeunload", e => {
  if (sessione && !sessione.finita && !$("#v-quiz").hidden) { salvaSessione(); e.preventDefault(); e.returnValue = ""; }
});

// ---------- avvio ----------
disegnaHome();
mostra("v-home");
})();
