# Email AMZ – presentazione azienda

Email HTML pronta all'invio, in italiano, per la presentazione di AMZ a circoli, maestri, tecnici, negozi e appassionati.

## File

| File | A cosa serve |
|---|---|
| `amz-email.html` | **Versione da usare.** Le immagini sono richiamate da `assets/` (percorsi relativi da sostituire con URL pubblici o allegati CID prima dell'invio). |
| `amz-email-anteprima.html` | Copia autonoma con le immagini incorporate in base64: si apre nel browser con doppio clic per vedere subito il risultato. Non usarla per l'invio (Gmail e Outlook bloccano le immagini base64). |
| `assets/amz-court-surface.png` | Logo di testata **AMZ Court Surface**, estratto dal PDF originale, sfondo trasparente, 700×278 px (visualizzato a 260 px). |
| `assets/amz-sports.png` | Logo AMZ Sports dall'SVG originale. Non usato nel layout attuale: è la testata della variante antracite. |
| `varianti/amz-email-antracite.html` | Variante a cornice antracite con testata AMZ Sports rossa, e relativa anteprima. Conservata per confronto: non è la versione da inviare. |
| `assets/loghi-partner.png` | **Segnaposto da sostituire** con la striscia loghi (AMZ GreenSet · Nitto ATP Finals · Next Gen ATP Finals · Davis Cup Madrid Finals 2019 · Tennis Australia). |
| `assets/logo-greenset.png`<br>`assets/logo-solinco.png`<br>`assets/logo-easygrip.png` | Loghi ufficiali dei tre marchi, dai file originali (SVG e PDF), scontornati e normalizzati su canvas trasparente 440×130 px, visualizzati a 128 px. |

## Cosa completare prima dell'invio

1. **Striscia loghi** – salvare l'immagine dei loghi come `assets/loghi-partner.png`, mantenendo un formato orizzontale (circa 7:1, larghezza consigliata 1040 px). Il layout si adatta da solo.
2. **Recapiti nel footer** – nel blocco footer di `amz-email.html` sostituire indirizzo, telefono, `info@amz.it` e `www.amz.it` con i dati reali.
3. **Nome destinatario** – il testo usa il segnaposto `{{ contact.firstname }}`. Se la piattaforma di invio usa un'altra sintassi, adeguarlo (Mailchimp `*|FNAME|*`, Brevo `{{ contact.FIRSTNAME }}`).
4. **Disiscrizione** – `{{unsubscribe_url}}` va sostituito con il link generato dalla piattaforma (obbligatorio per invii commerciali).
5. **Immagini** – caricare i PNG su un server o CDN e sostituire `src="assets/..."` con gli URL completi `https://...`. In alternativa allegarli come CID (`src="cid:amz-logo"`).

## Oggetto suggerito

> AMZ – Il meglio per il tennis e gli sport di racchetta

Alternative: *Da oltre 40 anni al fianco di chi vive il tennis* · *AMZ: Greenset, Solinco, Easygrip*

## Note tecniche

- Struttura a tabelle, larghezza fissa 600 px, CSS inline: compatibile con Outlook (incluso il commento condizionale MSO), Gmail, Apple Mail e client mobili.
- Media query a 620 px per la resa su smartphone (padding ridotto, logo rimpicciolito).
- Preheader nascosto per il testo di anteprima nella inbox.
- Palette: verde scuro `#1F5C34` per barra titolo, striscia loghi e footer, verde AMZ `#5CBD75` (campionato dal logo Court Surface) come accento, fondo `#F2F4F2`. Ogni marchio porta i propri colori, campionati dai file originali: Greenset `#4CDE71`, Solinco `#EC1B21`, Easygrip `#0089CF` per la barretta della card; per l'occhiello si usano le varianti scurite (`#1E9E4A`, `#C8141A`, `#0072AE`) che restano leggibili su bianco.
- La variante antracite in `varianti/` usa la stessa struttura con cornice `#1A1A1A`, accento rosso `#D61920` e testata AMZ Sports.
- Le card dei marchi sono a due colonne (logo + testo) su desktop e si impilano sotto i 620 px, con logo e testo centrati.
- Testo alternativo (`alt`) su tutte le immagini: l'email resta leggibile anche con le immagini bloccate.
