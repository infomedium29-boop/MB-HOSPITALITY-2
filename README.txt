MB HOSPITALITY & MANAGEMENT — WEB SITE
=======================================

SPREMNO ZA GITHUB + CLOUDFLARE PAGES
- Upload cijelog sadržaja ovog foldera u GitHub repozitorij.
- Cloudflare Pages: Framework preset = None, Build command = prazno, Output directory = / ili prazno (ovisno o načinu povezivanja repozitorija).

JEZICI
- HR / DE / EN rade preko jezičnog switchera.
- Odabrani jezik pamti se lokalno u pregledniku.

KONTAKT FORMA
- Datoteka: assets/js/config.js
- U web3formsKey upišite Web3Forms access key.
- Bez ključa forma namjerno ne šalje poruke i prikazuje tehničku napomenu.

INSTAGRAM
- Datoteka: assets/js/config.js
- U instagramUrl upišite puni URL Instagram profila kada bude otvoren.

DOMENA / SEO
- U robots.txt i sitemap.xml zamijeniti https://YOUR-DOMAIN.example stvarnom domenom prije indeksiranja.

INTRO
- Početna ima cca 10 s filmsku uvodnu sekvencu i Skip gumb.
- Intro se prikazuje jednom po browser sesiji kako ne bi smetao pri navigaciji.

FOTOGRAFIJE
- Trenutna demo verzija koristi optimizirane Unsplash image URL-ove i jedinstven dark/gold color grading kroz CSS.
- Prije finalne predaje mogu se zamijeniti originalnim fotografijama klijenta bez promjene layouta.

NAPOMENA
- Logo je izvučen iz screenshota koji je dostavljen u razgovoru i koristi se bez redizajna.


PODSTRANICE
- Usluge u navigaciji imaju premium dropdown: Hoteli / Restorani / Barovi.
- Sve tri podstranice su potpuno prevedene na HR / DE / EN i dodane u sitemap.xml.


PERFORMANCE FINAL (18.08.2026)
- Blokirajući 10 s intro overlay uklonjen je radi Core Web Vitals/LCP rezultata.
- Cinematic dojam ostaje kroz hero fotografiju; dodatni slideshow se učitava tek nakon critical load-a i samo na širim ekranima.
- Mobile učitava samo jednu optimiziranu hero fotografiju.
- Hero slike koriste responsive srcset + fetchpriority=high.
- Dekorativne background fotografije učitavaju se tek blizu viewporta.
- Google font CSS više ne blokira prvi render.
- Logo je prebačen na optimizirani WebP radi manjeg transfera.
- Dodan je Cloudflare _headers cache policy za lokalne assete.


PERFORMANCE INTRO FINAL (18.08.2026)
- Klijentski zahtjev: 10 s cinematic intro ostaje prvi pri prvom ulasku na početnu stranicu u sesiji.
- Intro je optimiziran kao dio hero sekcije: koristi jedan responsive image element i sekvencijalno prefetchanje kadrova.
- Ne učitava više više 2200–2400 px pozadina paralelno.
- Nakon 8 s prikazuje crni kadar sa zlatnim logotipom; nakon 10 s otkriva hero sadržaj.
- Preskoči ostaje dostupan; prefers-reduced-motion preskače intro.
