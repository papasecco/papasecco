# Email AMZ – presentazione azienda

Email HTML pronta all'invio, in italiano, per la presentazione di AMZ a circoli, maestri, tecnici, negozi e appassionati.

## File

| File | A cosa serve |
|---|---|
| `amz-email.html` | **Versione da usare.** Le immagini sono richiamate da `assets/` (percorsi relativi da sostituire con URL pubblici o allegati CID prima dell'invio). |
| `amz-email-anteprima.html` | Copia autonoma con le immagini incorporate in base64: si apre nel browser con doppio clic per vedere subito il risultato. Non usarla per l'invio (Gmail e Outlook bloccano le immagini base64). |
| `assets/amz-court-surface.png` | Logo AMZ Court Surface, estratto dal PDF fornito, sfondo trasparente, 700 px (visualizzato a 260 px). |
| `assets/loghi-partner.png` | **Segnaposto da sostituire** con la striscia loghi (AMZ GreenSet · Nitto ATP Finals · Next Gen ATP Finals · Davis Cup Madrid Finals 2019 · Tennis Australia). |

## Cosa completare prima dell'invio

1. **Striscia loghi** – salvare l'immagine dei loghi come `assets/loghi-partner.png`, mantenendo un formato orizzontale (circa 7:1, larghezza consigliata 1040 px). Il layout si adatta da solo.
2. **Recapiti nel footer** – nel blocco footer di `amz-email.html` sostituire indirizzo, telefono, `info@amz.it` e `www.amz.it` con i dati reali.
3. **Nome destinatario** – il testo contiene il segnaposto `{{nome}}`. Adeguarlo alla sintassi della piattaforma usata (Mailchimp `*|FNAME|*`, Brevo `{{ contact.NOME }}`, ecc.).
4. **Disiscrizione** – `{{unsubscribe_url}}` va sostituito con il link generato dalla piattaforma (obbligatorio per invii commerciali).
5. **Immagini** – caricare i due PNG su un server o CDN e sostituire `src="assets/..."` con gli URL completi `https://...`. In alternativa allegarli come CID (`src="cid:amz-logo"`).

## Oggetto suggerito

> AMZ – Il meglio per il tennis e gli sport di racchetta

Alternative: *Da oltre 40 anni al fianco di chi vive il tennis* · *AMZ: Greenset, Solinco, Easygrip*

## Note tecniche

- Struttura a tabelle, larghezza fissa 600 px, CSS inline: compatibile con Outlook (incluso il commento condizionale MSO), Gmail, Apple Mail e client mobili.
- Media query a 620 px per la resa su smartphone (padding ridotto, logo rimpicciolito).
- Preheader nascosto per il testo di anteprima nella inbox.
- Palette: verde scuro `#1F5C34`, verde AMZ `#5CBD75` (campionato dal logo originale), fondo `#F2F4F2`.
- Testo alternativo (`alt`) su tutte le immagini: l'email resta leggibile anche con le immagini bloccate.
