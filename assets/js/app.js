(() => {
  const T = {
    hr: {
      'nav.home':'Početna','nav.services':'Usluge','nav.approach':'Naš pristup','nav.experience':'Iskustvo','nav.contact':'Kontakt','nav.cta':'Kontaktirajte nas',
      'common.learn':'Saznajte više','common.talk':'Razgovarajmo','common.skip':'Preskoči','common.location':'Vorarlberg · Austrija','common.alpine':'Alpine Hospitality',
      'footer.copy':'Operativni hospitality consulting, trening i business development izravno u vašem objektu.','footer.nav':'Navigacija','footer.focus':'Fokus','footer.location':'Lokacija','footer.rights':'Sva prava pridržana.','footer.privacy':'Privatnost','footer.instagram':'Instagram uskoro',
      'home.title':'MB Hospitality & Management | Vorarlberg','home.meta':'Premium on-site hospitality consulting, management, training i business development za hotele, restorane i barove u Vorarlbergu i alpskoj regiji.',
      'hero.eyebrow':'Vorarlberg · Alpine Hospitality','hero.line1':'Ne savjetujemo iz daljine.','hero.line2':'Ulazimo u vašu operaciju.','hero.sub':'On-site hospitality management, training & business development za hotele, restorane i barove koji žele standarde pretvoriti u stvarno iskustvo gosta.','hero.btn1':'Naš pristup','hero.btn2':'Razgovarajmo','hero.meta1':'15+ godina iskustva','hero.meta2':'Hoteli · Restorani · Barovi','hero.scroll':'Istražite',
      'statement.eyebrow':'Naša razlika','statement.side':'Hospitality se ne popravlja iz izvještaja. Poboljšava se tamo gdje se servis stvarno događa.','statement.quote':'Standards on paper are not enough. <em>Gledamo kako funkcioniraju u stvarnosti.</em>',
      'diff.eyebrow':'On-site pristup','diff.title':'Mi ne dolazimo samo analizirati. Dolazimo raditi s vašom operacijom.','diff.p1':'Ulazimo u svakodnevni ritam hotela, restorana ili bara. Promatramo tim, komunikaciju, servis, organizaciju, management i cijeli Guest Journey — baš u uvjetima u kojima gost doživljava vaš brand.','diff.p2':'Nakon toga dajemo konkretan feedback, zajedno uvodimo promjene i pratimo rade li u praksi. Cilj nije još jedan dokument. Cilj je bolji rad, bolji tim i bolje iskustvo gosta.','diff.li1':'Rad u stvarnom operativnom okruženju','diff.li2':'Feedback managementu i timu','diff.li3':'Implementacija, trening i follow-up','diff.tag':'U vašem objektu. S vašim timom.',
      'process.eyebrow':'Naš proces','process.title':'Observe. Understand. Improve.','process.lead':'Jednostavan proces koji ide od stvarnog stanja do promjene koja ostaje u svakodnevnom radu.','process.1t':'On-site analiza','process.1p':'Dolazimo u objekt i upoznajemo stvarno stanje, procese i prioritete.','process.2t':'Observation','process.2p':'Promatramo svakodnevni rad, tim, servis, management i Guest Journey.','process.3t':'Feedback','process.3p':'Dajemo konkretan, objektivan i upotrebljiv feedback managementu i zaposlenicima.','process.4t':'Implementation','process.4p':'Zajedno uvodimo potrebne promjene, standarde i trening u svakodnevni rad.','process.5t':'Follow-up','process.5p':'Vraćamo se rezultatu i pratimo kako promjene funkcioniraju kada operacija radi punim intenzitetom.',
      'journey.eyebrow':'Guest Journey','journey.title':'Cijelo iskustvo. Svaki trenutak.','journey.lead':'Ne gledamo izolirani trenutak servisa. Gledamo sustav i način na koji se gost osjeća od prvog do posljednjeg kontakta.','journey.1':'Dolazak','journey.2':'Dobrodošlica','journey.3':'Servis','journey.4':'Komunikacija','journey.5':'F&B','journey.6':'Rješavanje problema','journey.7':'Odlazak',
      'services.eyebrow':'Područja rada','services.title':'Operativna podrška tamo gdje hospitality postaje stvaran.','services.lead':'Fokus je na radu koji se vidi u svakodnevnoj operaciji, ne samo u prezentaciji.','service.1t':'F&B Management & Operations','service.1p':'Struktura, organizacija, workflow, kvaliteta servisa i operativna učinkovitost restorana i barova.','service.2t':'Pre-Opening & Opening','service.2p':'Priprema operacije, standarda, timova i procesa prije otvaranja te podrška u ključnim prvim fazama rada.','service.3t':'Service Standards','service.3p':'Standardi koji su jasni, izvedivi i provjerljivi u stvarnom radu — i kada je objekt pun.','service.4t':'Training & Team Development','service.4p':'Praktičan trening, feedback i razvoj zaposlenika koji svaki dan stvaraju iskustvo gosta.','service.5t':'Restaurant & Bar Development','service.5p':'Razvoj koncepta, ponude, workflowa, beverage programa i pozicioniranja F&B operacije.','service.6t':'Business Development','service.6p':'Operativni pogled na prilike za rast, kvalitetu, profitabilnost i dugoročnu vrijednost hospitality objekta.','services.more':'Pregled svih usluga',
      'exp.eyebrow':'Iskustvo iz prakse','exp.title':'Erfahrung, die aus der Praxis kommt.','exp.lead':'Više od 15 godina profesionalnog iskustva u hotelijerstvu i gastronomiji — od F&B operacija i otvaranja objekata do razvoja standarda, timova i novih hospitality koncepata.','exp.stat':'godina iskustva','exp.note':'Dosadašnje pozicije i projekti predstavljaju profesionalno iskustvo osnivača, a ne listu klijenata MB Hospitality & Management.','exp.f1':'F&B Management & Operations','exp.f2':'Pre-Opening & Opening','exp.f3':'Restaurant & Bar Development','exp.f4':'Service Standards','exp.f5':'Training & Team Development','exp.f6':'Beverage & Bar Concepts','exp.f7':'Business Development','exp.f8':'Guest Experience',
      'gallery.eyebrow':'Alpine Hospitality','gallery.title':'Premium iskustvo počinje u detalju.','gallery.lead':'Vizualni svijet MB Hospitality & Management povezuje elegantnu gastronomiju, stvarni rad ljudi i karakter alpskog hotelijerstva.',
      'ig.eyebrow':'Instagram','ig.title':'MB Hospitality & Management — uskoro i na Instagramu.','ig.text':'Mjesto za buduće projekte, hospitality insight, operativne detalje i priče iz Vorarlberga i alpske regije.','ig.placeholder':'Instagram feed','ig.soon':'povezivanje nakon otvaranja profila',
      'cta.eyebrow':'Sljedeći korak','cta.title':'Pogledajmo kako vaša operacija funkcionira u stvarnosti.','cta.text':'Ako želite konkretniji servis, jasnije standarde i tim koji ih stvarno živi — razgovarajmo o vašem objektu.','cta.button':'Pokrenimo razgovor',
      'servicesPage.title':'Usluge | MB Hospitality & Management','servicesPage.meta':'On-site hospitality usluge: F&B management, pre-opening, service standards, training, restaurant & bar development i business development.','servicesPage.eyebrow':'Usluge','servicesPage.hero':'Manje teorije. <span class="gold">Više operacije.</span>','servicesPage.lead':'Radimo tamo gdje se rezultat stvarno vidi: u procesu, na flooru, u timu i u iskustvu gosta.','servicesPage.secTitle':'Područja u kojima ulazimo dublje.','servicesPage.secLead':'Svaki angažman prilagođava se objektu, fazi poslovanja i stvarnom stanju na terenu.','servicesPage.r1':'Operativna analiza F&B-a, workflowa, organizacije smjene, odgovornosti, servisa i komunikacije. Fokus na izvedive promjene, kvalitetu i konzistentnost.','servicesPage.r2':'Planiranje i priprema ljudi, standarda, SOP logike, service flowa i F&B operacije prije otvaranja. Podrška i tijekom prvih operativnih dana.','servicesPage.r3':'Razvoj standarda koji zaposlenik može razumjeti, management pratiti, a gost osjetiti. Testiramo ih u stvarnim situacijama i pod pritiskom.','servicesPage.r4':'On-the-job trening, coaching i konkretan feedback. Ne samo prezentacije — radimo s timom u situacijama koje se događaju svaki dan.','servicesPage.r5':'Koncept, menu logic, beverage & bar program, servisni model, organizacija prostora i operativni detalji koji oblikuju F&B proizvod.','servicesPage.r6':'Identifikacija potencijala za poboljšanje prihoda, kvalitete, pozicioniranja, guest experiencea i učinkovitosti operacije.','servicesPage.outcome':'Što ostaje iza angažmana','servicesPage.o1':'Jasniji standardi','servicesPage.o2':'Snažniji tim','servicesPage.o3':'Bolji guest journey','servicesPage.o4':'Praktična implementacija','servicesPage.o5':'Mjerljiv follow-up','servicesPage.o6':'Operacija koja bolje funkcionira',
      'approachPage.title':'Naš pristup | MB Hospitality & Management','approachPage.meta':'Hands-on on-site hospitality consulting: observe, understand, feedback, implementation i follow-up.','approachPage.eyebrow':'Naš pristup','approachPage.hero':'Ne ostajemo samo na savjetovanju. <span class="gold">Ulazimo u vašu operaciju.</span>','approachPage.lead':'Najvažniji dio našeg rada počinje tek kada uđemo u stvarni ritam objekta.','approachPage.principle':'Naše načelo','approachPage.principleTitle':'Ono što piše u standardu i ono što gost doživi moraju biti ista stvar.','approachPage.principleText':'Zato promatramo što se događa u trenutku pritiska: kada je restoran pun, kada gost ima problem, kada komunikacija između odjela zapne ili kada standard ovisi o iskustvu pojedinca. Tu počinje stvarno poboljšanje.','approachPage.teamTitle':'Feedback nije kraj. To je početak razvoja.','approachPage.teamText':'Radimo s managementom i zaposlenicima. Feedback pretvaramo u trening, praksu i jasne navike koje se mogu ponoviti u svakoj smjeni.','approachPage.loop':'Promatraj → Feedback → Treniraj → Poboljšaj',
      'experiencePage.title':'Iskustvo | MB Hospitality & Management','experiencePage.meta':'15+ godina profesionalnog iskustva u hotelijerstvu i gastronomiji, F&B managementu, pre-openingu, treningu i razvoju hospitality operacija.','experiencePage.eyebrow':'Iskustvo','experiencePage.hero':'15+ godina između standarda, ljudi i <span class="gold">stvarne operacije.</span>','experiencePage.lead':'Znanje MB Hospitality & Management dolazi iz dugogodišnjeg rada unutar hotelijerstva i gastronomije — iz operativnih situacija, otvaranja, F&B-a, razvoja timova i service standarda.','experiencePage.context':'Profesionalni kontekst','experiencePage.contextTitle':'Iskustvo koje nije nastalo u teoriji.','experiencePage.contextText':'Fokus je izgrađen kroz godine neposrednog rada u hospitality okruženju: vođenje F&B operacija, razvoj restorana i barova, pre-opening i opening procese, trening ljudi, standardizaciju servisa i business development.','experiencePage.clarity':'Važna napomena','experiencePage.clarityText':'Bivši poslodavci, objekti i profesionalni projekti iz prethodnih uloga nisu predstavljeni kao klijenti MB Hospitality & Management. Oni pripadaju profesionalnom iskustvu na kojem je današnji pristup izgrađen.','experiencePage.values':'Praksa. Standard. Ljudi. Rezultat.',
      'contactPage.title':'Kontakt | MB Hospitality & Management','contactPage.meta':'Kontaktirajte MB Hospitality & Management za on-site hospitality consulting, training i operational development u Vorarlbergu i alpskoj regiji.','contactPage.eyebrow':'Kontakt','contactPage.hero':'Razgovarajmo o tome što se <span class="gold">stvarno događa u vašoj operaciji.</span>','contactPage.lead':'Hotel, restoran ili bar — krenimo od vašeg stvarnog stanja, ciljeva i prioriteta.','contactPage.side':'Prvi razgovor može biti jednostavan: gdje ste danas, što želite poboljšati i gdje operacija trenutno gubi kvalitetu ili energiju.','contactPage.region':'Područje rada','contactPage.regionText':'Vorarlberg · Austrija · alpska regija i projekti po dogovoru','form.name':'Ime i prezime','form.company':'Hotel / restoran / tvrtka','form.email':'E-mail','form.phone':'Telefon','form.type':'Vrsta objekta','form.typeOption':'Odaberite','form.hotel':'Hotel','form.restaurant':'Restoran','form.bar':'Bar','form.other':'Drugo','form.message':'Opišite ukratko što želite poboljšati','form.submit':'Pošaljite upit','form.note':'Kontakt forma je tehnički pripremljena za povezivanje sa servisom za slanje poruka.','form.demo':'Forma još nije povezana s e-mail servisom. U assets/js/config.js dodajte Web3Forms access key prije objave.',
      'privacy.title':'Privatnost | MB Hospitality & Management','privacy.eyebrow':'Pravne informacije','privacy.hero':'Politika privatnosti','privacy.updated':'Ažurirano: kolovoz 2026.','privacy.p1':'Ova stranica prikuplja samo podatke koje posjetitelj dobrovoljno unese u kontakt formu nakon što se forma poveže s odabranim servisom za slanje poruka.','privacy.h2':'Podaci kontakt forme','privacy.p2':'Podaci mogu uključivati ime, naziv objekta ili tvrtke, e-mail, telefon, vrstu objekta i sadržaj poruke. Koriste se isključivo radi odgovora na upit i poslovne komunikacije.','privacy.h3':'Lokalne postavke','privacy.p3':'Stranica može koristiti localStorage ili sessionStorage za spremanje odabranog jezika, statusa uvodne animacije i osnovnih preferencija prikaza. Ti podaci ne služe oglašavanju.','privacy.h4':'Vanjski sadržaj','privacy.p4':'Fotografije se mogu isporučivati putem vanjske image infrastrukture. Prije konačne objave preporučuje se provjeriti sve vanjske servise, analytics alate i obrasce prema stvarnoj konfiguraciji web stranice.','privacy.h5':'Kontakt','privacy.p5':'Podaci voditelja obrade i službena kontakt e-mail adresa trebaju se unijeti prije konačne objave web stranice.',
      'cookie.text':'Koristimo samo osnovne lokalne postavke potrebne za jezik i iskustvo stranice. Nema marketinških kolačića u ovoj verziji.','cookie.ok':'U redu','cookie.more':'Privatnost'
    },
    de: {
      'nav.home':'Start','nav.services':'Leistungen','nav.approach':'Unser Ansatz','nav.experience':'Erfahrung','nav.contact':'Kontakt','nav.cta':'Kontakt aufnehmen',
      'common.learn':'Mehr erfahren','common.talk':'Sprechen wir','common.skip':'Überspringen','common.location':'Vorarlberg · Österreich','common.alpine':'Alpine Hospitality',
      'footer.copy':'Operative Hospitality-Beratung, Training und Business Development direkt in Ihrem Betrieb.','footer.nav':'Navigation','footer.focus':'Fokus','footer.location':'Standort','footer.rights':'Alle Rechte vorbehalten.','footer.privacy':'Datenschutz','footer.instagram':'Instagram demnächst',
      'home.title':'MB Hospitality & Management | Vorarlberg','home.meta':'Premium On-site Hospitality Consulting, Management, Training und Business Development für Hotels, Restaurants und Bars in Vorarlberg und der Alpenregion.',
      'hero.eyebrow':'Vorarlberg · Alpine Hospitality','hero.line1':'Wir beraten nicht aus der Distanz.','hero.line2':'Wir gehen in Ihren Betrieb.','hero.sub':'On-site Hospitality Management, Training & Business Development für Hotels, Restaurants und Bars, die Standards in ein spürbares Gästeerlebnis verwandeln wollen.','hero.btn1':'Unser Ansatz','hero.btn2':'Sprechen wir','hero.meta1':'15+ Jahre Erfahrung','hero.meta2':'Hotels · Restaurants · Bars','hero.scroll':'Entdecken',
      'statement.eyebrow':'Unser Unterschied','statement.side':'Hospitality verbessert sich nicht im Bericht. Sie verbessert sich dort, wo Service tatsächlich stattfindet.','statement.quote':'Standards on paper are not enough. <em>Wir sehen uns an, wie sie in der Realität funktionieren.</em>',
      'diff.eyebrow':'On-site Ansatz','diff.title':'Wir kommen nicht nur zur Analyse. Wir arbeiten mit Ihrer Operation.','diff.p1':'Wir gehen direkt in den Alltag Ihres Hotels, Restaurants oder Ihrer Bar. Wir beobachten Team, Kommunikation, Service, Organisation, Management und die gesamte Guest Journey — unter genau den Bedingungen, in denen Ihr Gast Ihre Marke erlebt.','diff.p2':'Danach geben wir konkretes Feedback, setzen Veränderungen gemeinsam um und prüfen im Follow-up, ob sie im Alltag funktionieren. Das Ziel ist kein weiterer Bericht. Das Ziel ist eine bessere Operation, ein stärkeres Team und ein besseres Gästeerlebnis.','diff.li1':'Arbeit im realen operativen Umfeld','diff.li2':'Feedback für Management und Team','diff.li3':'Implementierung, Training und Follow-up','diff.tag':'In Ihrem Betrieb. Mit Ihrem Team.',
      'process.eyebrow':'Unser Prozess','process.title':'Observe. Understand. Improve.','process.lead':'Ein klarer Prozess vom tatsächlichen Zustand bis zu Verbesserungen, die im Alltag bestehen bleiben.','process.1t':'On-site Analyse','process.1p':'Wir kommen in den Betrieb und verstehen Ist-Zustand, Abläufe und Prioritäten.','process.2t':'Observation','process.2p':'Wir beobachten Alltag, Team, Service, Management und die gesamte Guest Journey.','process.3t':'Feedback','process.3p':'Wir geben konkretes, objektives und umsetzbares Feedback an Management und Mitarbeitende.','process.4t':'Implementation','process.4p':'Gemeinsam implementieren wir notwendige Veränderungen, Standards und Training im Arbeitsalltag.','process.5t':'Follow-up','process.5p':'Wir prüfen das Ergebnis und beobachten, wie die Veränderungen unter realer operativer Belastung funktionieren.',
      'journey.eyebrow':'Guest Journey','journey.title':'Das gesamte Erlebnis. Jeder Moment.','journey.lead':'Wir betrachten nicht nur einzelne Servicemomente. Wir betrachten das System und das Gefühl des Gastes vom ersten bis zum letzten Kontakt.','journey.1':'Ankunft','journey.2':'Begrüßung','journey.3':'Service','journey.4':'Kommunikation','journey.5':'F&B','journey.6':'Problemlösung','journey.7':'Verabschiedung',
      'services.eyebrow':'Arbeitsbereiche','services.title':'Operative Unterstützung dort, wo Hospitality real wird.','services.lead':'Unser Fokus liegt auf Arbeit, die im täglichen Betrieb sichtbar wird — nicht nur in Präsentationen.','service.1t':'F&B Management & Operations','service.1p':'Struktur, Organisation, Workflow, Servicequalität und operative Effizienz für Restaurants und Bars.','service.2t':'Pre-Opening & Opening','service.2p':'Vorbereitung von Operation, Standards, Teams und Prozessen vor der Eröffnung sowie Unterstützung in der entscheidenden Startphase.','service.3t':'Service Standards','service.3p':'Standards, die klar, umsetzbar und im echten Arbeitsalltag überprüfbar sind — auch bei voller Auslastung.','service.4t':'Training & Team Development','service.4p':'Praktisches Training, Feedback und Entwicklung der Mitarbeitenden, die täglich das Gästeerlebnis gestalten.','service.5t':'Restaurant & Bar Development','service.5p':'Entwicklung von Konzept, Angebot, Workflow, Beverage-Programm und Positionierung der F&B Operation.','service.6t':'Business Development','service.6p':'Operativer Blick auf Wachstum, Qualität, Profitabilität und langfristigen Wert eines Hospitality-Betriebs.','services.more':'Alle Leistungen ansehen',
      'exp.eyebrow':'Erfahrung aus der Praxis','exp.title':'Erfahrung, die aus der Praxis kommt.','exp.lead':'Mehr als 15 Jahre professionelle Erfahrung in Hotellerie und Gastronomie — von F&B Operations und Eröffnungen bis zu Standards, Team- und Konzeptentwicklung.','exp.stat':'Jahre Erfahrung','exp.note':'Frühere Positionen und Projekte stehen für die berufliche Erfahrung des Gründers und werden nicht als Kunden von MB Hospitality & Management dargestellt.','exp.f1':'F&B Management & Operations','exp.f2':'Pre-Opening & Opening','exp.f3':'Restaurant & Bar Development','exp.f4':'Service Standards','exp.f5':'Training & Team Development','exp.f6':'Beverage & Bar Concepts','exp.f7':'Business Development','exp.f8':'Guest Experience',
      'gallery.eyebrow':'Alpine Hospitality','gallery.title':'Premium-Erlebnis beginnt im Detail.','gallery.lead':'Die visuelle Welt von MB Hospitality & Management verbindet elegante Gastronomie, echte Arbeit mit Menschen und den Charakter alpiner Hotellerie.',
      'ig.eyebrow':'Instagram','ig.title':'MB Hospitality & Management — bald auch auf Instagram.','ig.text':'Ein Ort für zukünftige Projekte, Hospitality Insights, operative Details und Geschichten aus Vorarlberg und der Alpenregion.','ig.placeholder':'Instagram Feed','ig.soon':'Verknüpfung nach dem Start des Profils',
      'cta.eyebrow':'Nächster Schritt','cta.title':'Sehen wir uns an, wie Ihre Operation in der Realität funktioniert.','cta.text':'Wenn Sie besseren Service, klarere Standards und ein Team wollen, das diese wirklich lebt — sprechen wir über Ihren Betrieb.','cta.button':'Gespräch starten',
      'servicesPage.title':'Leistungen | MB Hospitality & Management','servicesPage.meta':'On-site Hospitality Services: F&B Management, Pre-Opening, Service Standards, Training, Restaurant & Bar Development und Business Development.','servicesPage.eyebrow':'Leistungen','servicesPage.hero':'Weniger Theorie. <span class="gold">Mehr Operation.</span>','servicesPage.lead':'Wir arbeiten dort, wo Ergebnisse sichtbar werden: im Prozess, auf dem Floor, im Team und im Gästeerlebnis.','servicesPage.secTitle':'Bereiche, in denen wir tiefer gehen.','servicesPage.secLead':'Jedes Mandat wird an Betrieb, Entwicklungsphase und die reale Situation vor Ort angepasst.','servicesPage.r1':'Operative Analyse von F&B, Workflow, Schichtorganisation, Verantwortlichkeiten, Service und Kommunikation. Fokus auf umsetzbare Veränderungen und Konsistenz.','servicesPage.r2':'Planung und Vorbereitung von Teams, Standards, SOP-Logik, Service Flow und F&B Operation vor der Eröffnung. Unterstützung auch in den ersten operativen Tagen.','servicesPage.r3':'Entwicklung von Standards, die Mitarbeitende verstehen, Management verfolgen und Gäste spüren können. Wir testen sie in realen Situationen und unter Druck.','servicesPage.r4':'On-the-job Training, Coaching und konkretes Feedback. Nicht nur Präsentationen — wir arbeiten mit dem Team in Situationen des täglichen Betriebs.','servicesPage.r5':'Konzept, Menu Logic, Beverage & Bar Programm, Servicemodell, Raumorganisation und operative Details, die das F&B Produkt prägen.','servicesPage.r6':'Potenziale für Umsatz, Qualität, Positionierung, Guest Experience und operative Effizienz identifizieren und in konkrete Maßnahmen übersetzen.','servicesPage.outcome':'Was nach dem Einsatz bleibt','servicesPage.o1':'Klarere Standards','servicesPage.o2':'Stärkeres Team','servicesPage.o3':'Bessere Guest Journey','servicesPage.o4':'Praktische Umsetzung','servicesPage.o5':'Messbares Follow-up','servicesPage.o6':'Eine Operation, die besser funktioniert',
      'approachPage.title':'Unser Ansatz | MB Hospitality & Management','approachPage.meta':'Hands-on On-site Hospitality Consulting: Observe, Understand, Feedback, Implementation und Follow-up.','approachPage.eyebrow':'Unser Ansatz','approachPage.hero':'Wir beraten nicht nur. <span class="gold">Wir arbeiten direkt in Ihrem Betrieb.</span>','approachPage.lead':'Der wichtigste Teil unserer Arbeit beginnt erst, wenn wir in den echten Rhythmus Ihres Betriebs eintreten.','approachPage.principle':'Unser Prinzip','approachPage.principleTitle':'Was im Standard steht und was der Gast erlebt, muss dieselbe Sache sein.','approachPage.principleText':'Deshalb beobachten wir, was unter Druck passiert: wenn das Restaurant voll ist, ein Gast ein Problem hat, die Kommunikation zwischen Abteilungen stockt oder Qualität von einzelnen Personen abhängt. Genau dort beginnt echte Verbesserung.','approachPage.teamTitle':'Feedback ist nicht das Ende. Es ist der Beginn der Entwicklung.','approachPage.teamText':'Wir arbeiten mit Management und Mitarbeitenden. Feedback wird zu Training, Praxis und klaren Gewohnheiten, die in jeder Schicht wiederholbar sind.','approachPage.loop':'Beobachten → Feedback → Trainieren → Verbessern',
      'experiencePage.title':'Erfahrung | MB Hospitality & Management','experiencePage.meta':'15+ Jahre professionelle Erfahrung in Hotellerie und Gastronomie, F&B Management, Pre-Opening, Training und Entwicklung von Hospitality Operations.','experiencePage.eyebrow':'Erfahrung','experiencePage.hero':'15+ Jahre zwischen Standards, Menschen und <span class="gold">echter Operation.</span>','experiencePage.lead':'Das Wissen von MB Hospitality & Management kommt aus langjähriger Arbeit in Hotellerie und Gastronomie — aus operativen Situationen, Eröffnungen, F&B, Teamentwicklung und Service Standards.','experiencePage.context':'Professioneller Kontext','experiencePage.contextTitle':'Erfahrung, die nicht in der Theorie entstanden ist.','experiencePage.contextText':'Der heutige Fokus wurde über Jahre direkter Hospitality-Arbeit aufgebaut: Führung von F&B Operations, Restaurant- und Barentwicklung, Pre-Opening und Opening, Teamtraining, Service-Standardisierung und Business Development.','experiencePage.clarity':'Wichtiger Hinweis','experiencePage.clarityText':'Frühere Arbeitgeber, Betriebe und Projekte aus früheren Positionen werden nicht als Kunden von MB Hospitality & Management dargestellt. Sie gehören zur professionellen Erfahrung, auf der der heutige Ansatz basiert.','experiencePage.values':'Praxis. Standard. Menschen. Ergebnis.',
      'contactPage.title':'Kontakt | MB Hospitality & Management','contactPage.meta':'Kontaktieren Sie MB Hospitality & Management für On-site Hospitality Consulting, Training und Operational Development in Vorarlberg und der Alpenregion.','contactPage.eyebrow':'Kontakt','contactPage.hero':'Sprechen wir darüber, was in Ihrer Operation <span class="gold">wirklich passiert.</span>','contactPage.lead':'Hotel, Restaurant oder Bar — beginnen wir mit Ihrem Ist-Zustand, Ihren Zielen und Prioritäten.','contactPage.side':'Das erste Gespräch kann einfach sein: Wo stehen Sie heute, was möchten Sie verbessern und wo verliert die Operation aktuell Qualität oder Energie?','contactPage.region':'Einsatzgebiet','contactPage.regionText':'Vorarlberg · Österreich · Alpenregion und Projekte nach Vereinbarung','form.name':'Vor- und Nachname','form.company':'Hotel / Restaurant / Unternehmen','form.email':'E-Mail','form.phone':'Telefon','form.type':'Art des Betriebs','form.typeOption':'Auswählen','form.hotel':'Hotel','form.restaurant':'Restaurant','form.bar':'Bar','form.other':'Andere','form.message':'Beschreiben Sie kurz, was Sie verbessern möchten','form.submit':'Anfrage senden','form.note':'Das Kontaktformular ist technisch für die Verbindung mit einem Versanddienst vorbereitet.','form.demo':'Das Formular ist noch nicht mit einem E-Mail-Dienst verbunden. Bitte vor Veröffentlichung den Web3Forms Access Key in assets/js/config.js eintragen.',
      'privacy.title':'Datenschutz | MB Hospitality & Management','privacy.eyebrow':'Rechtliche Informationen','privacy.hero':'Datenschutzerklärung','privacy.updated':'Aktualisiert: August 2026.','privacy.p1':'Diese Website verarbeitet nur Daten, die Besucher freiwillig über das Kontaktformular eingeben, sobald das Formular mit einem Versanddienst verbunden ist.','privacy.h2':'Daten des Kontaktformulars','privacy.p2':'Dazu können Name, Betrieb oder Unternehmen, E-Mail, Telefon, Betriebsart und Nachricht gehören. Sie werden ausschließlich zur Beantwortung der Anfrage und zur geschäftlichen Kommunikation verwendet.','privacy.h3':'Lokale Einstellungen','privacy.p3':'Die Website kann localStorage oder sessionStorage verwenden, um Sprache, Status der Intro-Animation und grundlegende Anzeigepräferenzen zu speichern. Diese Daten werden nicht für Werbung genutzt.','privacy.h4':'Externe Inhalte','privacy.p4':'Bilder können über eine externe Bildinfrastruktur ausgeliefert werden. Vor der finalen Veröffentlichung sollten alle externen Dienste, Analysewerkzeuge und Formulare entsprechend der tatsächlichen Website-Konfiguration geprüft werden.','privacy.h5':'Kontakt','privacy.p5':'Angaben zum Verantwortlichen und die offizielle Kontakt-E-Mail sind vor der finalen Veröffentlichung zu ergänzen.',
      'cookie.text':'Wir verwenden nur grundlegende lokale Einstellungen für Sprache und Seitenerlebnis. In dieser Version gibt es keine Marketing-Cookies.','cookie.ok':'OK','cookie.more':'Datenschutz'
    },
    en: {
      'nav.home':'Home','nav.services':'Services','nav.approach':'Our approach','nav.experience':'Experience','nav.contact':'Contact','nav.cta':'Contact us',
      'common.learn':'Learn more','common.talk':'Let’s talk','common.skip':'Skip','common.location':'Vorarlberg · Austria','common.alpine':'Alpine Hospitality',
      'footer.copy':'Operational hospitality consulting, training and business development directly inside your operation.','footer.nav':'Navigation','footer.focus':'Focus','footer.location':'Location','footer.rights':'All rights reserved.','footer.privacy':'Privacy','footer.instagram':'Instagram coming soon',
      'home.title':'MB Hospitality & Management | Vorarlberg','home.meta':'Premium on-site hospitality consulting, management, training and business development for hotels, restaurants and bars in Vorarlberg and the Alpine region.',
      'hero.eyebrow':'Vorarlberg · Alpine Hospitality','hero.line1':'We don’t consult from a distance.','hero.line2':'We step into your operation.','hero.sub':'On-site hospitality management, training & business development for hotels, restaurants and bars that want to turn standards into a guest experience people can actually feel.','hero.btn1':'Our approach','hero.btn2':'Let’s talk','hero.meta1':'15+ years of experience','hero.meta2':'Hotels · Restaurants · Bars','hero.scroll':'Explore',
      'statement.eyebrow':'What makes us different','statement.side':'Hospitality does not improve inside a report. It improves where service actually happens.','statement.quote':'Standards on paper are not enough. <em>We look at how they work in reality.</em>',
      'diff.eyebrow':'On-site approach','diff.title':'We don’t just come in to analyse. We come in to work with your operation.','diff.p1':'We step into the daily rhythm of your hotel, restaurant or bar. We observe the team, communication, service, organisation, management and the full Guest Journey — under the same conditions in which your guest experiences your brand.','diff.p2':'Then we give concrete feedback, implement change together and follow up on how it works in practice. The goal is not another document. The goal is a better operation, a stronger team and a better guest experience.','diff.li1':'Work inside the real operational environment','diff.li2':'Feedback for management and team','diff.li3':'Implementation, training and follow-up','diff.tag':'Inside your operation. With your team.',
      'process.eyebrow':'Our process','process.title':'Observe. Understand. Improve.','process.lead':'A clear process from the real situation to improvements that remain part of daily operations.','process.1t':'On-site analysis','process.1p':'We enter the property and understand the real situation, processes and priorities.','process.2t':'Observation','process.2p':'We observe daily work, the team, service, management and the full Guest Journey.','process.3t':'Feedback','process.3p':'We give concrete, objective and usable feedback to management and employees.','process.4t':'Implementation','process.4p':'Together we introduce the required changes, standards and training into everyday work.','process.5t':'Follow-up','process.5p':'We return to the result and see how the changes perform when the operation is running at full intensity.',
      'journey.eyebrow':'Guest Journey','journey.title':'The whole experience. Every moment.','journey.lead':'We do not look at an isolated service moment. We look at the system and how a guest feels from the first contact to the last.','journey.1':'Arrival','journey.2':'Welcome','journey.3':'Service','journey.4':'Communication','journey.5':'F&B','journey.6':'Problem solving','journey.7':'Farewell',
      'services.eyebrow':'What we work on','services.title':'Operational support where hospitality becomes real.','services.lead':'The focus is work that shows up in daily operations, not only in presentations.','service.1t':'F&B Management & Operations','service.1p':'Structure, organisation, workflow, service quality and operational efficiency across restaurants and bars.','service.2t':'Pre-Opening & Opening','service.2p':'Preparing operations, standards, teams and processes before opening, with support during the critical first phase.','service.3t':'Service Standards','service.3p':'Standards that are clear, executable and measurable in real work — including when the property is full.','service.4t':'Training & Team Development','service.4p':'Practical training, feedback and development for the people who create the guest experience every day.','service.5t':'Restaurant & Bar Development','service.5p':'Development of concept, offer, workflow, beverage programme and positioning of the F&B operation.','service.6t':'Business Development','service.6p':'An operational view of opportunities for growth, quality, profitability and long-term hospitality value.','services.more':'Explore all services',
      'exp.eyebrow':'Experience from practice','exp.title':'Experience built in the operation.','exp.lead':'More than 15 years of professional experience in hospitality and gastronomy — from F&B operations and openings to standards, team development and new hospitality concepts.','exp.stat':'years of experience','exp.note':'Previous positions and projects represent the founder’s professional background and are not presented as clients of MB Hospitality & Management.','exp.f1':'F&B Management & Operations','exp.f2':'Pre-Opening & Opening','exp.f3':'Restaurant & Bar Development','exp.f4':'Service Standards','exp.f5':'Training & Team Development','exp.f6':'Beverage & Bar Concepts','exp.f7':'Business Development','exp.f8':'Guest Experience',
      'gallery.eyebrow':'Alpine Hospitality','gallery.title':'Premium experience starts in the detail.','gallery.lead':'The visual world of MB Hospitality & Management connects elegant gastronomy, people at work and the character of Alpine hospitality.',
      'ig.eyebrow':'Instagram','ig.title':'MB Hospitality & Management — coming soon to Instagram.','ig.text':'A future home for projects, hospitality insights, operational details and stories from Vorarlberg and the Alpine region.','ig.placeholder':'Instagram feed','ig.soon':'to be connected once the profile launches',
      'cta.eyebrow':'Next step','cta.title':'Let’s look at how your operation works in reality.','cta.text':'If you want better service, clearer standards and a team that truly lives them — let’s talk about your operation.','cta.button':'Start a conversation',
      'servicesPage.title':'Services | MB Hospitality & Management','servicesPage.meta':'On-site hospitality services: F&B management, pre-opening, service standards, training, restaurant & bar development and business development.','servicesPage.eyebrow':'Services','servicesPage.hero':'Less theory. <span class="gold">More operation.</span>','servicesPage.lead':'We work where results become visible: in the process, on the floor, in the team and in the guest experience.','servicesPage.secTitle':'Areas where we go deeper.','servicesPage.secLead':'Every engagement is adapted to the property, its stage of development and the real situation on site.','servicesPage.r1':'Operational analysis of F&B, workflow, shift organisation, responsibilities, service and communication. Focused on practical change, quality and consistency.','servicesPage.r2':'Planning and preparing people, standards, SOP logic, service flow and F&B operations before opening. Support can continue through the first operational days.','servicesPage.r3':'Developing standards employees can understand, management can follow and guests can feel. We test them in real situations and under pressure.','servicesPage.r4':'On-the-job training, coaching and direct feedback. Not just presentations — we work with the team in situations that happen every day.','servicesPage.r5':'Concept, menu logic, beverage & bar programme, service model, space organisation and the operational details that shape the F&B product.','servicesPage.r6':'Identifying potential to improve revenue, quality, positioning, guest experience and operational efficiency, then turning it into practical action.','servicesPage.outcome':'What remains after the engagement','servicesPage.o1':'Clearer standards','servicesPage.o2':'A stronger team','servicesPage.o3':'A better guest journey','servicesPage.o4':'Practical implementation','servicesPage.o5':'Measurable follow-up','servicesPage.o6':'An operation that works better',
      'approachPage.title':'Our approach | MB Hospitality & Management','approachPage.meta':'Hands-on on-site hospitality consulting: observe, understand, feedback, implementation and follow-up.','approachPage.eyebrow':'Our approach','approachPage.hero':'We don’t just consult. <span class="gold">We step into your operation.</span>','approachPage.lead':'The most important part of our work begins only when we enter the real rhythm of your operation.','approachPage.principle':'Our principle','approachPage.principleTitle':'What is written in the standard and what the guest experiences must be the same thing.','approachPage.principleText':'That is why we observe what happens under pressure: when the restaurant is full, a guest has a problem, communication between departments breaks down or quality depends on one individual. That is where real improvement starts.','approachPage.teamTitle':'Feedback is not the end. It is the beginning of development.','approachPage.teamText':'We work with management and employees. Feedback becomes training, practice and clear habits that can be repeated in every shift.','approachPage.loop':'Observe → Feedback → Train → Improve',
      'experiencePage.title':'Experience | MB Hospitality & Management','experiencePage.meta':'15+ years of professional experience in hospitality and gastronomy, F&B management, pre-opening, training and hospitality operations development.','experiencePage.eyebrow':'Experience','experiencePage.hero':'15+ years between standards, people and <span class="gold">real operations.</span>','experiencePage.lead':'The knowledge behind MB Hospitality & Management comes from years inside hospitality and gastronomy — from operational situations, openings, F&B, team development and service standards.','experiencePage.context':'Professional context','experiencePage.contextTitle':'Experience that was not built in theory.','experiencePage.contextText':'The current focus was built through years of direct hospitality work: leading F&B operations, developing restaurants and bars, pre-opening and opening processes, team training, service standardisation and business development.','experiencePage.clarity':'Important distinction','experiencePage.clarityText':'Former employers, properties and projects from previous roles are not presented as clients of MB Hospitality & Management. They are part of the professional experience on which today’s approach is built.','experiencePage.values':'Practice. Standards. People. Results.',
      'contactPage.title':'Contact | MB Hospitality & Management','contactPage.meta':'Contact MB Hospitality & Management for on-site hospitality consulting, training and operational development in Vorarlberg and the Alpine region.','contactPage.eyebrow':'Contact','contactPage.hero':'Let’s talk about what is <span class="gold">really happening in your operation.</span>','contactPage.lead':'Hotel, restaurant or bar — let’s start with your current reality, goals and priorities.','contactPage.side':'The first conversation can be simple: where are you today, what do you want to improve, and where is the operation currently losing quality or energy?','contactPage.region':'Area of work','contactPage.regionText':'Vorarlberg · Austria · Alpine region and projects by arrangement','form.name':'Full name','form.company':'Hotel / restaurant / company','form.email':'Email','form.phone':'Phone','form.type':'Property type','form.typeOption':'Choose','form.hotel':'Hotel','form.restaurant':'Restaurant','form.bar':'Bar','form.other':'Other','form.message':'Briefly describe what you would like to improve','form.submit':'Send enquiry','form.note':'The contact form is technically ready to be connected to a message delivery service.','form.demo':'The form is not yet connected to an email service. Add the Web3Forms access key in assets/js/config.js before publishing.',
      'privacy.title':'Privacy | MB Hospitality & Management','privacy.eyebrow':'Legal information','privacy.hero':'Privacy policy','privacy.updated':'Updated: August 2026.','privacy.p1':'This website only processes information a visitor voluntarily submits through the contact form once the form is connected to a delivery service.','privacy.h2':'Contact form data','privacy.p2':'This may include name, property or company, email, phone, property type and message content. The data is used only to respond to the enquiry and for business communication.','privacy.h3':'Local preferences','privacy.p3':'The website may use localStorage or sessionStorage to remember language, intro animation status and basic display preferences. This data is not used for advertising.','privacy.h4':'External content','privacy.p4':'Images may be delivered through external image infrastructure. Before final publication, all external services, analytics and forms should be reviewed against the actual website configuration.','privacy.h5':'Contact','privacy.p5':'Controller details and the official contact email address should be added before final publication.','cookie.text':'We use only basic local preferences for language and site experience. There are no marketing cookies in this version.','cookie.ok':'OK','cookie.more':'Privacy'
    }
  };


  // Complete language overrides: every visible label follows the selected language.
  Object.assign(T.hr, {
    'common.alpine':'Alpsko hotelijerstvo',
    'footer.copy':'Operativno savjetovanje, trening i poslovni razvoj u hotelijerstvu i gastronomiji — izravno u vašem objektu.',
    'home.meta':'Premium savjetovanje na lokaciji, upravljanje, trening i poslovni razvoj za hotele, restorane i barove u Vorarlbergu i alpskoj regiji.',
    'hero.eyebrow':'Vorarlberg · Alpsko hotelijerstvo',
    'hero.sub':'Upravljanje, trening i poslovni razvoj na lokaciji za hotele, restorane i barove koji žele standarde pretvoriti u stvarno iskustvo gosta.',
    'statement.side':'Hotelijerstvo i gastronomija ne poboljšavaju se kroz izvještaje. Poboljšanje se događa tamo gdje se usluga stvarno pruža.',
    'statement.quote':'Standardi na papiru nisu dovoljni. <em>Gledamo kako funkcioniraju u stvarnosti.</em>',
    'diff.eyebrow':'Pristup na lokaciji',
    'diff.p1':'Ulazimo u svakodnevni ritam hotela, restorana ili bara. Promatramo tim, komunikaciju, uslugu, organizaciju, vodstvo i cijeli put gosta — upravo u uvjetima u kojima gost doživljava vaš brend.',
    'diff.p2':'Nakon toga dajemo konkretne povratne informacije, zajedno uvodimo promjene i pratimo rade li u praksi. Cilj nije još jedan dokument. Cilj je bolji rad, snažniji tim i bolje iskustvo gosta.',
    'diff.li2':'Povratne informacije vodstvu i timu',
    'diff.li3':'Provedba, trening i praćenje rezultata',
    'process.title':'Promatraj. Razumij. Poboljšaj.',
    'process.1t':'Analiza na lokaciji',
    'process.2t':'Promatranje',
    'process.2p':'Promatramo svakodnevni rad, tim, uslugu, vodstvo i cijeli put gosta.',
    'process.3t':'Povratne informacije',
    'process.3p':'Dajemo konkretne, objektivne i primjenjive povratne informacije vodstvu i zaposlenicima.',
    'process.4t':'Provedba',
    'process.5t':'Praćenje',
    'journey.eyebrow':'Put gosta',
    'services.title':'Operativna podrška tamo gdje gostoprimstvo postaje stvarno iskustvo.',
    'service.1t':'F&B upravljanje i operacije',
    'service.1p':'Struktura, organizacija, tijek rada, kvaliteta usluge i operativna učinkovitost restorana i barova.',
    'service.2t':'Priprema i otvaranje objekta',
    'service.3t':'Standardi usluge',
    'service.4t':'Trening i razvoj tima',
    'service.4p':'Praktičan trening, povratne informacije i razvoj zaposlenika koji svakodnevno stvaraju iskustvo gosta.',
    'service.5t':'Razvoj restorana i bara',
    'service.5p':'Razvoj koncepta, ponude, tijeka rada, programa pića i pozicioniranja F&B operacije.',
    'service.6t':'Poslovni razvoj',
    'service.6p':'Operativni pogled na prilike za rast, kvalitetu, profitabilnost i dugoročnu vrijednost ugostiteljskog objekta.',
    'exp.title':'Iskustvo koje dolazi iz prakse.',
    'exp.lead':'Više od 15 godina profesionalnog iskustva u hotelijerstvu i gastronomiji — od F&B operacija i otvaranja objekata do razvoja standarda, timova i novih ugostiteljskih koncepata.',
    'exp.f1':'F&B upravljanje i operacije','exp.f2':'Priprema i otvaranje objekta','exp.f3':'Razvoj restorana i bara','exp.f4':'Standardi usluge','exp.f5':'Trening i razvoj tima','exp.f6':'Koncepti pića i bara','exp.f7':'Poslovni razvoj','exp.f8':'Iskustvo gosta',
    'gallery.eyebrow':'Alpsko hotelijerstvo',
    'gallery.lead':'Vizualni svijet MB Hospitality & Management povezuje elegantnu gastronomiju, stvarni rad ljudi i karakter alpskog hotelijerstva.',
    'ig.text':'Mjesto za buduće projekte, stručne uvide, operativne detalje i priče iz Vorarlberga i alpske regije.',
    'servicesPage.meta':'Usluge na lokaciji: F&B upravljanje, priprema i otvaranje objekata, standardi usluge, trening, razvoj restorana i barova te poslovni razvoj.',
    'servicesPage.lead':'Radimo tamo gdje se rezultat stvarno vidi: u procesu, u prostoru usluge, u timu i u iskustvu gosta.',
    'servicesPage.r1':'Operativna analiza F&B-a, tijeka rada, organizacije smjene, odgovornosti, usluge i komunikacije. Fokus je na izvedivim promjenama, kvaliteti i dosljednosti.',
    'servicesPage.r2':'Planiranje i priprema ljudi, standarda, operativnih procedura, tijeka usluge i F&B operacije prije otvaranja. Podrška i tijekom prvih operativnih dana.',
    'servicesPage.r3':'Razvoj standarda koje zaposlenik može razumjeti, vodstvo pratiti, a gost osjetiti. Testiramo ih u stvarnim situacijama i pod pritiskom.',
    'servicesPage.r4':'Trening na radnom mjestu, mentoriranje i konkretne povratne informacije. Ne samo prezentacije — radimo s timom u situacijama koje se događaju svaki dan.',
    'servicesPage.r5':'Koncept, logika jelovnika, program pića i bara, model usluge, organizacija prostora i operativni detalji koji oblikuju F&B proizvod.',
    'servicesPage.r6':'Prepoznavanje potencijala za poboljšanje prihoda, kvalitete, pozicioniranja, iskustva gosta i učinkovitosti operacije.',
    'servicesPage.o3':'Bolji put gosta','servicesPage.o5':'Mjerljivo praćenje rezultata',
    'approachPage.meta':'Praktičan rad na lokaciji: promatranje, razumijevanje, povratne informacije, provedba i praćenje.',
    'approachPage.teamTitle':'Povratna informacija nije kraj. To je početak razvoja.',
    'approachPage.teamText':'Radimo s vodstvom i zaposlenicima. Povratne informacije pretvaramo u trening, praksu i jasne navike koje se mogu ponoviti u svakoj smjeni.',
    'approachPage.loop':'Promatraj → Povratne informacije → Treniraj → Poboljšaj',
    'experiencePage.meta':'15+ godina profesionalnog iskustva u hotelijerstvu i gastronomiji, F&B upravljanju, otvaranju objekata, treningu i razvoju operacija.',
    'experiencePage.hero':'15+ godina između standarda, ljudi i <span class="gold">stvarnog operativnog rada.</span>',
    'experiencePage.lead':'Znanje MB Hospitality & Management dolazi iz dugogodišnjeg rada u hotelijerstvu i gastronomiji — iz operativnih situacija, otvaranja, F&B-a, razvoja timova i standarda usluge.',
    'experiencePage.contextText':'Fokus je izgrađen kroz godine neposrednog rada u hotelijerstvu i gastronomiji: vođenje F&B operacija, razvoj restorana i barova, pripremu i otvaranje objekata, trening ljudi, standardizaciju usluge i poslovni razvoj.',
    'contactPage.meta':'Kontaktirajte MB Hospitality & Management za savjetovanje na lokaciji, trening i operativni razvoj u Vorarlbergu i alpskoj regiji.',
    'contactPage.hero':'Razgovarajmo o tome što se <span class="gold">stvarno događa u vašem poslovanju.</span>',
    'contactPage.side':'Prvi razgovor može biti jednostavan: gdje ste danas, što želite poboljšati i gdje poslovanje trenutačno gubi kvalitetu ili energiju.',
    'privacy.p4':'Fotografije se mogu isporučivati putem vanjske infrastrukture za slike. Prije konačne objave preporučuje se provjeriti sve vanjske servise, analitičke alate i obrasce prema stvarnoj konfiguraciji web stranice.',
    'footer.f1':'F&B operacije','footer.f2':'Trening','footer.f3':'Standardi usluge','footer.f4':'Priprema otvaranja',
    'serviceCat.1':'01 / Operacije','serviceCat.2':'02 / Otvaranje','serviceCat.3':'03 / Standardi','serviceCat.4':'04 / Ljudi','serviceCat.5':'05 / F&B','serviceCat.6':'06 / Razvoj',
    'loop.observe':'Promatraj','loop.feedback':'Povratne informacije','loop.train':'Treniraj','loop.improve':'Poboljšaj',
    'aria.nav':'Glavna navigacija','aria.language':'Odabir jezika','aria.menu':'Izbornik',
    'alt.team':'Ugostiteljski tim u radu','alt.alpineHotel':'Luksuzni alpski hotel','alt.premiumBar':'Premium bar','alt.fineDining':'Vrhunska gastronomija','alt.restaurant':'Elegantni restoran','alt.operations':'Operativni rad u ugostiteljstvu','alt.hotelLobby':'Hotelski predvorje','alt.barOperations':'Rad premium bara','alt.diningDetail':'Detalj vrhunske gastronomije','alt.teamService':'Tim i usluga','alt.serviceStandards':'Standardi usluge',
    'form.success':'Hvala. Vaš upit je poslan.','form.error':'Poruka se nije mogla poslati. Pokušajte ponovno kasnije.','form.subject':'MB Hospitality & Management — novi upit',
    'notfound.title':'404 | MB Hospitality & Management','notfound.message':'Stranica nije pronađena','notfound.back':'Povratak na početnu'
  });

  Object.assign(T.de, {
    'common.alpine':'Alpine Hotellerie',
    'footer.copy':'Operative Beratung, Training und Geschäftsentwicklung für Hotellerie und Gastronomie — direkt in Ihrem Betrieb.',
    'home.meta':'Premium Vor-Ort-Beratung, Management, Training und Geschäftsentwicklung für Hotels, Restaurants und Bars in Vorarlberg und der Alpenregion.',
    'hero.eyebrow':'Vorarlberg · Alpine Hotellerie',
    'hero.sub':'Vor-Ort-Management, Training und Geschäftsentwicklung für Hotels, Restaurants und Bars, die Standards in ein spürbares Gästeerlebnis verwandeln wollen.',
    'statement.side':'Hotellerie und Gastronomie verbessern sich nicht in einem Bericht. Verbesserung entsteht dort, wo Service tatsächlich stattfindet.',
    'statement.quote':'Standards auf dem Papier reichen nicht. <em>Wir sehen uns an, wie sie in der Realität funktionieren.</em>',
    'diff.eyebrow':'Vor-Ort-Ansatz',
    'diff.title':'Wir kommen nicht nur zur Analyse. Wir arbeiten direkt in Ihrem Betrieb.',
    'diff.p1':'Wir gehen direkt in den Alltag Ihres Hotels, Restaurants oder Ihrer Bar. Wir beobachten Team, Kommunikation, Service, Organisation, Führung und die gesamte Gästereise — genau unter den Bedingungen, in denen Ihr Gast Ihre Marke erlebt.',
    'diff.p2':'Danach geben wir konkrete Rückmeldungen, setzen Veränderungen gemeinsam um und prüfen, wie sie im Alltag funktionieren. Das Ziel ist kein weiterer Bericht. Das Ziel sind bessere Abläufe, ein stärkeres Team und ein besseres Gästeerlebnis.',
    'diff.li2':'Rückmeldung für Führung und Team','diff.li3':'Umsetzung, Training und Ergebniskontrolle',
    'process.title':'Beobachten. Verstehen. Verbessern.',
    'process.1t':'Analyse vor Ort','process.2t':'Beobachtung','process.2p':'Wir beobachten Arbeitsalltag, Team, Service, Führung und die gesamte Gästereise.','process.3t':'Rückmeldung','process.3p':'Wir geben konkrete, objektive und umsetzbare Rückmeldungen an Führung und Mitarbeitende.','process.4t':'Umsetzung','process.5t':'Nachverfolgung',
    'journey.eyebrow':'Gästereise',
    'services.title':'Operative Unterstützung dort, wo Gastlichkeit zum echten Erlebnis wird.',
    'service.1t':'F&B-Management und Betrieb','service.1p':'Struktur, Organisation, Arbeitsabläufe, Servicequalität und operative Effizienz in Restaurants und Bars.','service.2t':'Vorbereitung und Eröffnung','service.3t':'Servicestandards','service.4t':'Training und Teamentwicklung','service.4p':'Praxisnahes Training, Rückmeldung und Entwicklung der Mitarbeitenden, die täglich das Gästeerlebnis prägen.','service.5t':'Restaurant- und Barentwicklung','service.5p':'Entwicklung von Konzept, Angebot, Arbeitsabläufen, Getränkeprogramm und Positionierung des F&B-Betriebs.','service.6t':'Geschäftsentwicklung','service.6p':'Operativer Blick auf Chancen für Wachstum, Qualität, Profitabilität und langfristigen Wert des Betriebs.',
    'exp.title':'Erfahrung, die aus der Praxis kommt.','exp.lead':'Mehr als 15 Jahre Berufserfahrung in Hotellerie und Gastronomie — von F&B-Betrieb und Eröffnungen bis zur Entwicklung von Standards, Teams und neuen Gastgewerbekonzepten.','exp.f1':'F&B-Management und Betrieb','exp.f2':'Vorbereitung und Eröffnung','exp.f3':'Restaurant- und Barentwicklung','exp.f4':'Servicestandards','exp.f5':'Training und Teamentwicklung','exp.f6':'Getränke- und Barkonzepte','exp.f7':'Geschäftsentwicklung','exp.f8':'Gästeerlebnis',
    'gallery.eyebrow':'Alpine Hotellerie','gallery.lead':'Die Bildwelt von MB Hospitality & Management verbindet elegante Gastronomie, echte Arbeit mit Menschen und den Charakter alpiner Hotellerie.',
    'ig.text':'Raum für zukünftige Projekte, Fachimpulse, operative Details und Geschichten aus Vorarlberg und der Alpenregion.',
    'servicesPage.meta':'Vor-Ort-Leistungen: F&B-Management, Vorbereitung und Eröffnung, Servicestandards, Training, Restaurant- und Barentwicklung sowie Geschäftsentwicklung.','servicesPage.lead':'Wir arbeiten dort, wo Ergebnisse wirklich sichtbar werden: in Abläufen, im Servicebereich, im Team und im Gästeerlebnis.','servicesPage.r1':'Operative Analyse von F&B, Arbeitsabläufen, Schichtorganisation, Verantwortlichkeiten, Service und Kommunikation. Der Fokus liegt auf umsetzbaren Veränderungen, Qualität und Beständigkeit.','servicesPage.r2':'Planung und Vorbereitung von Mitarbeitenden, Standards, operativen Abläufen, Servicefluss und F&B-Betrieb vor der Eröffnung. Unterstützung auch während der ersten Betriebstage.','servicesPage.r3':'Entwicklung von Standards, die Mitarbeitende verstehen, Führungskräfte verfolgen und Gäste spüren können. Wir testen sie in realen Situationen und unter Druck.','servicesPage.r4':'Training am Arbeitsplatz, Coaching und konkrete Rückmeldung. Nicht nur Präsentationen — wir arbeiten mit dem Team in Situationen, die jeden Tag tatsächlich entstehen.','servicesPage.r5':'Konzept, Menülogik, Getränke- und Barprogramm, Servicemodell, Raumorganisation und operative Details, die das F&B-Angebot prägen.','servicesPage.r6':'Erkennen von Potenzialen zur Verbesserung von Umsatz, Qualität, Positionierung, Gästeerlebnis und operativer Effizienz.','servicesPage.o3':'Bessere Gästereise','servicesPage.o5':'Messbare Ergebniskontrolle',
    'approachPage.meta':'Praxisnahe Vor-Ort-Arbeit: beobachten, verstehen, rückmelden, umsetzen und nachverfolgen.','approachPage.hero':'Wir beraten nicht nur. <span class="gold">Wir arbeiten direkt in Ihrem Betrieb.</span>','approachPage.teamText':'Wir arbeiten mit Führungskräften und Mitarbeitenden. Rückmeldungen werden zu Training, Praxis und klaren Routinen, die sich in jeder Schicht wiederholen lassen.','approachPage.loop':'Beobachten → Rückmelden → Trainieren → Verbessern',
    'experiencePage.meta':'15+ Jahre Berufserfahrung in Hotellerie und Gastronomie, F&B-Management, Betriebseröffnungen, Training und operativer Entwicklung.','experiencePage.hero':'15+ Jahre zwischen Standards, Menschen und <span class="gold">echtem Betriebsalltag.</span>','experiencePage.lead':'Das Wissen von MB Hospitality & Management stammt aus langjähriger Arbeit in Hotellerie und Gastronomie — aus operativen Situationen, Eröffnungen, F&B, Teamentwicklung und Servicestandards.','experiencePage.contextText':'Der heutige Fokus entstand über Jahre direkter Arbeit in Hotellerie und Gastronomie: Führung von F&B-Betrieben, Restaurant- und Barentwicklung, Vorbereitung und Eröffnung, Mitarbeitertraining, Standardisierung des Service und Geschäftsentwicklung.',
    'contactPage.meta':'Kontaktieren Sie MB Hospitality & Management für Vor-Ort-Beratung, Training und operative Entwicklung in Vorarlberg und der Alpenregion.','contactPage.hero':'Sprechen wir darüber, was in Ihrem Betrieb <span class="gold">wirklich passiert.</span>','contactPage.side':'Das erste Gespräch kann ganz einfach sein: Wo stehen Sie heute, was möchten Sie verbessern und wo verliert Ihr Betrieb derzeit Qualität oder Energie?',
    'footer.f1':'F&B-Betrieb','footer.f2':'Training','footer.f3':'Servicestandards','footer.f4':'Eröffnungsvorbereitung',
    'serviceCat.1':'01 / Betrieb','serviceCat.2':'02 / Eröffnung','serviceCat.3':'03 / Standards','serviceCat.4':'04 / Menschen','serviceCat.5':'05 / F&B','serviceCat.6':'06 / Entwicklung',
    'loop.observe':'Beobachten','loop.feedback':'Rückmelden','loop.train':'Trainieren','loop.improve':'Verbessern',
    'aria.nav':'Hauptnavigation','aria.language':'Sprachauswahl','aria.menu':'Menü',
    'alt.team':'Team in der Hotellerie bei der Arbeit','alt.alpineHotel':'Luxuriöses Alpenhotel','alt.premiumBar':'Premium-Bar','alt.fineDining':'Gehobene Gastronomie','alt.restaurant':'Elegantes Restaurant','alt.operations':'Operativer Alltag in der Hotellerie','alt.hotelLobby':'Hotellobby','alt.barOperations':'Betrieb einer Premium-Bar','alt.diningDetail':'Detail gehobener Gastronomie','alt.teamService':'Team und Service','alt.serviceStandards':'Servicestandards',
    'form.success':'Vielen Dank. Ihre Anfrage wurde gesendet.','form.error':'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.','form.subject':'MB Hospitality & Management — neue Anfrage',
    'notfound.title':'404 | MB Hospitality & Management','notfound.message':'Seite nicht gefunden','notfound.back':'Zur Startseite'
  });

  Object.assign(T.en, {
    'common.alpine':'Alpine Hospitality',
    'footer.copy':'Operational hospitality consulting, training and business development — directly inside your operation.',
    'hero.eyebrow':'Vorarlberg · Alpine Hospitality',
    'statement.quote':'Standards on paper are not enough. <em>We look at how they work in reality.</em>',
    'diff.eyebrow':'On-site approach','diff.p1':'We step into the daily rhythm of your hotel, restaurant or bar. We observe the team, communication, service, organisation, leadership and the entire guest journey — under the same conditions in which your guest experiences your brand.','diff.p2':'Then we give concrete feedback, implement changes together and follow up on how they work in practice. The goal is not another document. The goal is better operations, a stronger team and a better guest experience.','diff.li2':'Feedback for leadership and team','diff.li3':'Implementation, training and follow-up',
    'process.title':'Observe. Understand. Improve.','process.1t':'On-site analysis','process.2t':'Observation','process.3t':'Feedback','process.4t':'Implementation','process.5t':'Follow-up','journey.eyebrow':'Guest journey',
    'service.1t':'F&B Management & Operations','service.2t':'Pre-Opening & Opening','service.3t':'Service Standards','service.4t':'Training & Team Development','service.5t':'Restaurant & Bar Development','service.6t':'Business Development',
    'exp.title':'Experience built in practice.','exp.f1':'F&B Management & Operations','exp.f2':'Pre-Opening & Opening','exp.f3':'Restaurant & Bar Development','exp.f4':'Service Standards','exp.f5':'Training & Team Development','exp.f6':'Beverage & Bar Concepts','exp.f7':'Business Development','exp.f8':'Guest Experience',
    'gallery.eyebrow':'Alpine Hospitality',
    'footer.f1':'F&B Operations','footer.f2':'Training','footer.f3':'Service Standards','footer.f4':'Pre-Opening',
    'serviceCat.1':'01 / Operations','serviceCat.2':'02 / Opening','serviceCat.3':'03 / Standards','serviceCat.4':'04 / People','serviceCat.5':'05 / F&B','serviceCat.6':'06 / Growth',
    'loop.observe':'Observe','loop.feedback':'Feedback','loop.train':'Train','loop.improve':'Improve',
    'aria.nav':'Main navigation','aria.language':'Language selection','aria.menu':'Menu',
    'alt.team':'Hospitality team at work','alt.alpineHotel':'Luxury Alpine hotel','alt.premiumBar':'Premium bar','alt.fineDining':'Fine dining','alt.restaurant':'Elegant restaurant','alt.operations':'Hospitality operation','alt.hotelLobby':'Hotel lobby','alt.barOperations':'Premium bar operation','alt.diningDetail':'Fine dining detail','alt.teamService':'Team and service','alt.serviceStandards':'Service standards',
    'form.success':'Thank you. Your enquiry has been sent.','form.error':'The message could not be sent. Please try again later.','form.subject':'MB Hospitality & Management — new enquiry',
    'notfound.title':'404 | MB Hospitality & Management','notfound.message':'Page not found','notfound.back':'Back to home'
  });


  // Sector pages translations
  Object.assign(T.hr, {
    'nav.hotels':'Hoteli',
    'nav.restaurants':'Restorani',
    'nav.bars':'Barovi',
    'aria.serviceSubnav':'Podstranice usluga',
    'sectors.eyebrow':'Za koga radimo',
    'sectors.title':'Tri okruženja. <span class="gold">Jedan operativni princip.</span>',
    'sectors.lead':'Hoteli, restorani i barovi imaju različit ritam, ali isti izazov: standard mora funkcionirati u stvarnom radu.',
    'sectors.hotels':'Guest Journey, F&B, standardi, timovi i operativna povezanost.',
    'sectors.restaurants':'Servis, workflow, tim, F&B operacije i iskustvo gosta pod pritiskom.',
    'sectors.bars':'Bar workflow, beverage koncept, standardi, brzina, kvaliteta i razvoj tima.',
    'sectors.open':'Istražite područje →',
    'sectors.other':'Ostala područja',
    'sectors.crossTitle':'Isti princip. Drugačije operativno okruženje.',
    'hotelsPage.title':'Hoteli | MB Hospitality & Management',
    'hotelsPage.meta':'On-site operativna podrška za hotele: Guest Journey, F&B operacije, standardi usluge, trening, pre-opening i follow-up.',
    'restaurantsPage.title':'Restorani | MB Hospitality & Management',
    'restaurantsPage.meta':'On-site operativna podrška za restorane: servis, workflow, F&B operacije, standardi, trening i razvoj restorana.',
    'barsPage.title':'Barovi | MB Hospitality & Management',
    'barsPage.meta':'On-site operativna podrška za barove: workflow, beverage koncepti, standardi usluge, trening i razvoj bar operacije.',
    'hotelsPage.eyebrow':'Hoteli',
    'hotelsPage.hero':'Hotel nije samo objekt. <span class="gold">To je povezano iskustvo gosta.</span>',
    'hotelsPage.lead':'Promatramo kako standardi, ljudi, F&B i komunikacija rade zajedno — od prvog kontakta do odlaska gosta.',
    'hotelsPage.introEyebrow':'Hotelska operacija',
    'hotelsPage.introTitle':'Gledamo hotel kao jedan sustav, ne kao niz odvojenih odjela.',
    'hotelsPage.introText':'U hotel dolazimo na lokaciju, pratimo stvarni ritam rada i promatramo dodirne točke koje stvaraju ili prekidaju iskustvo gosta. Poseban fokus stavljamo na F&B, standarde usluge, komunikaciju, vodstvo i način na koji tim reagira pod pritiskom.',
    'hotelsPage.tag':'Alpine Hospitality · On-site',
    'hotelsPage.focusEyebrow':'Što promatramo',
    'hotelsPage.focusTitle':'Od standarda do stvarnog hotelskog dana.',
    'hotelsPage.focusLead':'Fokus se prilagođava objektu, ali uvijek ostaje vezan uz ono što gost i tim doživljavaju u praksi.',
    'hotelsPage.r1t':'Guest Journey & Service Standards',
    'hotelsPage.r1p':'Dolazak, dobrodošlica, komunikacija, servis, rješavanje problema i odlazak — provjeravamo je li iskustvo konzistentno u svakom kontaktu.',
    'hotelsPage.r2t':'F&B Operations',
    'hotelsPage.r2p':'Promatramo restorane, barove, breakfast i druge F&B točke kroz workflow, kvalitetu, odgovornosti, standarde i iskustvo gosta.',
    'hotelsPage.r3t':'Team & Leadership',
    'hotelsPage.r3p':'Kako management vodi smjenu, kako odjeli komuniciraju i koliko zaposlenici razumiju standarde koje trebaju provoditi.',
    'hotelsPage.r4t':'Training & Feedback',
    'hotelsPage.r4p':'Konkretan feedback pretvaramo u trening i navike koje tim može primijeniti odmah u svakodnevnom radu.',
    'hotelsPage.r5t':'Pre-Opening & Opening',
    'hotelsPage.r5p':'Podrška pri pripremi ljudi, procesa, F&B operacije, standarda i service flowa prije i tijekom otvaranja.',
    'hotelsPage.r6t':'Implementation & Follow-Up',
    'hotelsPage.r6p':'Ne završavamo preporukom. Pratimo provedbu i provjeravamo funkcioniraju li dogovorene promjene kada hotel radi punim intenzitetom.',
    'hotelsPage.statement':'Standard koji radi samo kada je mirno nije standard.',
    'hotelsPage.statementText':'Najviše nas zanima što se događa u stvarnom hotelskom danu — kada je lobby pun, restoran pod pritiskom, a tim mora donositi odluke brzo i dosljedno.',
    'restaurantsPage.eyebrow':'Restorani',
    'restaurantsPage.hero':'Kad se restoran napuni, <span class="gold">standard postaje stvaran.</span>',
    'restaurantsPage.lead':'Promatramo servis, workflow, komunikaciju, tim i iskustvo gosta upravo u trenutku kada operacija mora funkcionirati bez improvizacije.',
    'restaurantsPage.introEyebrow':'Restaurant Operations',
    'restaurantsPage.introTitle':'Dobar restoran nije samo proizvod. To je precizno vođena operacija.',
    'restaurantsPage.introText':'Ulazimo u stvarnu smjenu, pratimo put gosta i rad tima te prepoznajemo gdje servis gubi ritam, kvaliteta postaje nekonzistentna ili se odgovornosti preklapaju. Zatim s managementom i timom uvodimo praktična poboljšanja.',
    'restaurantsPage.tag':'Service · Flow · Team',
    'restaurantsPage.focusEyebrow':'Što promatramo',
    'restaurantsPage.focusTitle':'Servis koji ostaje kvalitetan i pod pritiskom.',
    'restaurantsPage.focusLead':'Od prvog pozdrava do zadnjeg tanjura — gledamo svaki detalj koji utječe na ritam, kvalitetu i doživljaj gosta.',
    'restaurantsPage.r1t':'Service Flow',
    'restaurantsPage.r1p':'Redoslijed rada, tempo servisa, komunikacija s gostom i način na koji tim održava kontrolu kada se broj stolova i zahtjeva povećava.',
    'restaurantsPage.r2t':'Team Roles & Communication',
    'restaurantsPage.r2p':'Jasnoća odgovornosti između managementa, sale, bara i kuhinje te kvaliteta komunikacije tijekom smjene.',
    'restaurantsPage.r3t':'Guest Experience',
    'restaurantsPage.r3p':'Dobrodošlica, preporuke, pažnja prema detaljima, rješavanje problema i završni dojam koji gost odnosi sa sobom.',
    'restaurantsPage.r4t':'F&B Operations & Standards',
    'restaurantsPage.r4p':'Mise-en-place, operativna struktura, service standards i workflow koji moraju biti jednostavni, razumljivi i ponovljivi.',
    'restaurantsPage.r5t':'Training & Team Development',
    'restaurantsPage.r5p':'Praktičan trening u stvarnim situacijama, feedback nakon servisa i razvoj ponašanja koja podižu kvalitetu cijelog tima.',
    'restaurantsPage.r6t':'Restaurant Development',
    'restaurantsPage.r6p':'Razvoj koncepta, servisnog modela, ponude i operativnih detalja s fokusom na kvalitetu, pozicioniranje i dugoročnu učinkovitost.',
    'restaurantsPage.statement':'Najbolji standard je onaj koji tim može živjeti u punom servisu.',
    'restaurantsPage.statementText':'Ne ocjenjujemo restoran u idealnim uvjetima. Gledamo kako sustav radi kada je svaki stol važan, komunikacija mora biti brza, a gost očekuje jednaku razinu kvalitete.',
    'barsPage.eyebrow':'Barovi',
    'barsPage.hero':'Bar je iskustvo, sustav i posao. <span class="gold">Sve mora raditi zajedno.</span>',
    'barsPage.lead':'Od beverage koncepta i mise-en-placea do brzine, komunikacije i odnosa prema gostu — promatramo ono što se stvarno događa iza i ispred bara.',
    'barsPage.introEyebrow':'Bar Operations',
    'barsPage.introTitle':'Premium bar nije definiran samo koktelom, nego načinom na koji cijela operacija radi.',
    'barsPage.introText':'Pratimo workflow, pripremu, standarde, brzinu, konzistentnost i interakciju s gostom. Cilj je uskladiti kvalitetu proizvoda, servis i organizaciju tako da iskustvo ostane premium i kada je bar pod najvećim pritiskom.',
    'barsPage.tag':'Beverage · Service · Workflow',
    'barsPage.focusEyebrow':'Što promatramo',
    'barsPage.focusTitle':'Detalji iza bara koji gost osjeti ispred bara.',
    'barsPage.focusLead':'Beverage program i servis imaju vrijednost tek kada ih tim može provoditi dosljedno, brzo i s karakterom.',
    'barsPage.r1t':'Bar Workflow & Mise-en-Place',
    'barsPage.r1p':'Organizacija radne stanice, priprema, raspored alata i način rada koji utječu na brzinu, preciznost i mirnoću servisa.',
    'barsPage.r2t':'Beverage & Bar Concepts',
    'barsPage.r2p':'Razvoj i evaluacija beverage koncepta, strukture ponude, prezentacije i operativne izvedivosti bar programa.',
    'barsPage.r3t':'Service Standards',
    'barsPage.r3p':'Jasni standardi za pripremu, prezentaciju, komunikaciju i servis koji se mogu ponoviti bez gubitka osobnosti.',
    'barsPage.r4t':'Speed & Consistency',
    'barsPage.r4p':'Promatramo kako kvaliteta ostaje stabilna kada narudžbe rastu i gdje workflow stvara nepotrebno čekanje ili greške.',
    'barsPage.r5t':'Bartender & Team Development',
    'barsPage.r5p':'On-the-job feedback, praktičan trening, komunikacija unutar tima i razvoj sigurnosti u radu s gostom.',
    'barsPage.r6t':'Guest Experience & Business Development',
    'barsPage.r6p':'Povezujemo iskustvo gosta, pozicioniranje bara i operativne prilike koje mogu poboljšati kvalitetu, vrijednost ponude i dugoročnu učinkovitost.',
    'barsPage.statement':'Premium bar mora biti jednako dobar u prvoj i u najtežoj minuti večeri.',
    'barsPage.statementText':'Zato ne gledamo samo recepte. Gledamo sustav koji stoji iza njih — ljude, pripremu, komunikaciju, tempo i način na koji se gost osjeća dok se sve to događa.'
  });
  Object.assign(T.de, {
    'nav.hotels':'Hotels',
    'nav.restaurants':'Restaurants',
    'nav.bars':'Bars',
    'aria.serviceSubnav':'Unterseiten der Leistungen',
    'sectors.eyebrow':'Für wen wir arbeiten',
    'sectors.title':'Drei Umfelder. <span class="gold">Ein operatives Prinzip.</span>',
    'sectors.lead':'Hotels, Restaurants und Bars haben unterschiedliche Rhythmen, aber dieselbe Herausforderung: Ein Standard muss im echten Betriebsalltag funktionieren.',
    'sectors.hotels':'Gästereise, F&B, Standards, Teams und das Zusammenspiel der Abläufe.',
    'sectors.restaurants':'Service, Arbeitsabläufe, Team, F&B-Betrieb und Gästeerlebnis unter Druck.',
    'sectors.bars':'Barabläufe, Getränkekonzept, Standards, Geschwindigkeit, Qualität und Teamentwicklung.',
    'sectors.open':'Bereich entdecken →',
    'sectors.other':'Weitere Bereiche',
    'sectors.crossTitle':'Dasselbe Prinzip. Ein anderes operatives Umfeld.',
    'hotelsPage.title':'Hotels | MB Hospitality & Management',
    'hotelsPage.meta':'Operative Vor-Ort-Unterstützung für Hotels: Gästereise, F&B-Betrieb, Servicestandards, Training, Pre-Opening und Follow-up.',
    'hotelsPage.eyebrow':'Hotels',
    'hotelsPage.hero':'Ein Hotel ist nicht nur ein Gebäude. <span class="gold">Es ist eine zusammenhängende Gästereise.</span>',
    'hotelsPage.lead':'Wir beobachten, wie Standards, Menschen, F&B und Kommunikation zusammenspielen — vom ersten Kontakt bis zur Abreise.',
    'hotelsPage.introEyebrow':'Hotelbetrieb',
    'hotelsPage.introTitle':'Wir betrachten das Hotel als ein System, nicht als eine Reihe getrennter Abteilungen.',
    'hotelsPage.introText':'Wir kommen direkt in den Betrieb, verfolgen den tatsächlichen Arbeitsrhythmus und beobachten die Berührungspunkte, die das Gästeerlebnis prägen oder unterbrechen. Ein besonderer Fokus liegt auf F&B, Servicestandards, Kommunikation, Führung und dem Verhalten des Teams unter Druck.',
    'hotelsPage.tag':'Alpine Hotellerie · Vor Ort',
    'hotelsPage.focusEyebrow':'Was wir beobachten',
    'hotelsPage.focusTitle':'Vom Standard zum echten Hotelalltag.',
    'hotelsPage.focusLead':'Der Fokus wird an den Betrieb angepasst, bleibt aber immer an das gebunden, was Gäste und Team im Alltag tatsächlich erleben.',
    'hotelsPage.r1t':'Gästereise & Servicestandards',
    'hotelsPage.r1p':'Anreise, Begrüßung, Kommunikation, Service, Problemlösung und Abreise — wir prüfen, ob das Erlebnis an jedem Kontaktpunkt konsistent ist.',
    'hotelsPage.r2t':'F&B-Betrieb',
    'hotelsPage.r2p':'Wir betrachten Restaurants, Bars, Frühstück und weitere F&B-Bereiche hinsichtlich Arbeitsablauf, Qualität, Verantwortlichkeiten, Standards und Gästeerlebnis.',
    'hotelsPage.r3t':'Team & Führung',
    'hotelsPage.r3p':'Wie das Management eine Schicht führt, wie Abteilungen kommunizieren und wie gut Mitarbeitende die Standards verstehen, die sie umsetzen sollen.',
    'hotelsPage.r4t':'Training & Rückmeldung',
    'hotelsPage.r4p':'Konkrete Rückmeldungen werden zu Training und Routinen, die das Team unmittelbar im täglichen Betrieb anwenden kann.',
    'hotelsPage.r5t':'Pre-Opening & Opening',
    'hotelsPage.r5p':'Unterstützung bei der Vorbereitung von Menschen, Prozessen, F&B-Betrieb, Standards und Serviceabläufen vor und während der Eröffnung.',
    'hotelsPage.r6t':'Umsetzung & Follow-up',
    'hotelsPage.r6p':'Wir enden nicht mit einer Empfehlung. Wir begleiten die Umsetzung und prüfen, ob die vereinbarten Veränderungen funktionieren, wenn das Hotel unter voller Auslastung arbeitet.',
    'hotelsPage.statement':'Ein Standard, der nur in ruhigen Momenten funktioniert, ist kein Standard.',
    'hotelsPage.statementText':'Uns interessiert vor allem, was im echten Hotelalltag passiert — wenn die Lobby voll ist, das Restaurant unter Druck steht und das Team schnell und konsequent entscheiden muss.',
    'restaurantsPage.title':'Restaurants | MB Hospitality & Management',
    'restaurantsPage.meta':'Operative Vor-Ort-Unterstützung für Restaurants: Service, Arbeitsabläufe, F&B-Betrieb, Standards, Training und Restaurantentwicklung.',
    'restaurantsPage.eyebrow':'Restaurants',
    'restaurantsPage.hero':'Wenn das Restaurant voll wird, <span class="gold">wird der Standard real.</span>',
    'restaurantsPage.lead':'Wir beobachten Service, Arbeitsabläufe, Kommunikation, Team und Gästeerlebnis genau dann, wenn der Betrieb ohne Improvisation funktionieren muss.',
    'restaurantsPage.introEyebrow':'Restaurantbetrieb',
    'restaurantsPage.introTitle':'Ein gutes Restaurant ist nicht nur ein Produkt. Es ist ein präzise geführter Betrieb.',
    'restaurantsPage.introText':'Wir gehen in die echte Schicht, verfolgen den Weg des Gastes und die Arbeit des Teams und erkennen, wo Service seinen Rhythmus verliert, Qualität inkonsistent wird oder Verantwortlichkeiten ineinandergreifen. Danach setzen wir gemeinsam mit Management und Team praktische Verbesserungen um.',
    'restaurantsPage.tag':'Service · Ablauf · Team',
    'restaurantsPage.focusEyebrow':'Was wir beobachten',
    'restaurantsPage.focusTitle':'Service, der auch unter Druck hochwertig bleibt.',
    'restaurantsPage.focusLead':'Vom ersten Gruß bis zum letzten Teller — wir betrachten jedes Detail, das Rhythmus, Qualität und Gästeerlebnis beeinflusst.',
    'restaurantsPage.r1t':'Serviceablauf',
    'restaurantsPage.r1p':'Arbeitsreihenfolge, Servicetempo, Gästekommunikation und die Fähigkeit des Teams, die Kontrolle zu behalten, wenn Tische und Anforderungen zunehmen.',
    'restaurantsPage.r2t':'Rollen & Kommunikation im Team',
    'restaurantsPage.r2p':'Klare Verantwortlichkeiten zwischen Management, Service, Bar und Küche sowie die Qualität der Kommunikation während der Schicht.',
    'restaurantsPage.r3t':'Gästeerlebnis',
    'restaurantsPage.r3p':'Begrüßung, Empfehlungen, Aufmerksamkeit für Details, Problemlösung und der letzte Eindruck, den der Gast mitnimmt.',
    'restaurantsPage.r4t':'F&B-Betrieb & Standards',
    'restaurantsPage.r4p':'Mise-en-place, operative Struktur, Servicestandards und Arbeitsabläufe, die einfach, verständlich und wiederholbar sein müssen.',
    'restaurantsPage.r5t':'Training & Teamentwicklung',
    'restaurantsPage.r5p':'Praxisnahes Training in realen Situationen, Rückmeldung nach dem Service und Entwicklung von Verhaltensweisen, die die Qualität des gesamten Teams steigern.',
    'restaurantsPage.r6t':'Restaurantentwicklung',
    'restaurantsPage.r6p':'Entwicklung von Konzept, Servicemodell, Angebot und operativen Details mit Fokus auf Qualität, Positionierung und langfristige Effizienz.',
    'restaurantsPage.statement':'Der beste Standard ist der, den ein Team im vollen Service leben kann.',
    'restaurantsPage.statementText':'Wir beurteilen ein Restaurant nicht unter Idealbedingungen. Wir sehen uns an, wie das System funktioniert, wenn jeder Tisch zählt, Kommunikation schnell sein muss und der Gast gleichbleibende Qualität erwartet.',
    'barsPage.title':'Bars | MB Hospitality & Management',
    'barsPage.meta':'Operative Vor-Ort-Unterstützung für Bars: Arbeitsabläufe, Getränkekonzepte, Servicestandards, Training und Entwicklung des Barbetriebs.',
    'barsPage.eyebrow':'Bars',
    'barsPage.hero':'Eine Bar ist Erlebnis, System und Geschäft. <span class="gold">Alles muss zusammenspielen.</span>',
    'barsPage.lead':'Vom Getränkekonzept und Mise-en-place bis zu Geschwindigkeit, Kommunikation und Gästekontakt — wir beobachten, was tatsächlich hinter und vor der Bar geschieht.',
    'barsPage.introEyebrow':'Barbetrieb',
    'barsPage.introTitle':'Eine Premium-Bar definiert sich nicht nur über den Cocktail, sondern darüber, wie der gesamte Betrieb funktioniert.',
    'barsPage.introText':'Wir verfolgen Arbeitsabläufe, Vorbereitung, Standards, Geschwindigkeit, Beständigkeit und Gästekontakt. Ziel ist es, Produktqualität, Service und Organisation so zu verbinden, dass das Erlebnis auch unter höchstem Druck premium bleibt.',
    'barsPage.tag':'Getränke · Service · Workflow',
    'barsPage.focusEyebrow':'Was wir beobachten',
    'barsPage.focusTitle':'Details hinter der Bar, die der Gast vor der Bar spürt.',
    'barsPage.focusLead':'Getränkeprogramm und Service haben erst dann Wert, wenn das Team sie konsequent, schnell und mit Charakter umsetzen kann.',
    'barsPage.r1t':'Barabläufe & Mise-en-place',
    'barsPage.r1p':'Organisation der Station, Vorbereitung, Anordnung der Werkzeuge und Arbeitsweise, die Geschwindigkeit, Präzision und Ruhe im Service beeinflussen.',
    'barsPage.r2t':'Getränke- & Barkonzepte',
    'barsPage.r2p':'Entwicklung und Bewertung des Getränkekonzepts, der Angebotsstruktur, Präsentation und operativen Umsetzbarkeit des Barprogramms.',
    'barsPage.r3t':'Servicestandards',
    'barsPage.r3p':'Klare Standards für Zubereitung, Präsentation, Kommunikation und Service, die sich wiederholen lassen, ohne Persönlichkeit zu verlieren.',
    'barsPage.r4t':'Geschwindigkeit & Beständigkeit',
    'barsPage.r4p':'Wir beobachten, wie die Qualität stabil bleibt, wenn Bestellungen zunehmen, und wo Arbeitsabläufe unnötige Wartezeiten oder Fehler erzeugen.',
    'barsPage.r5t':'Bartender- & Teamentwicklung',
    'barsPage.r5p':'Rückmeldung am Arbeitsplatz, praktisches Training, Kommunikation im Team und Entwicklung von Sicherheit im Umgang mit Gästen.',
    'barsPage.r6t':'Gästeerlebnis & Geschäftsentwicklung',
    'barsPage.r6p':'Wir verbinden Gästeerlebnis, Positionierung der Bar und operative Chancen, die Qualität, Angebotswert und langfristige Effizienz verbessern können.',
    'barsPage.statement':'Eine Premium-Bar muss in der ersten und in der schwierigsten Minute des Abends gleich gut sein.',
    'barsPage.statementText':'Deshalb betrachten wir nicht nur Rezepte. Wir betrachten das System dahinter — Menschen, Vorbereitung, Kommunikation, Tempo und die Art, wie sich der Gast fühlt, während all das passiert.'
  });
  Object.assign(T.en, {
    'nav.hotels':'Hotels',
    'nav.restaurants':'Restaurants',
    'nav.bars':'Bars',
    'aria.serviceSubnav':'Service subpages',
    'sectors.eyebrow':'Who we work with',
    'sectors.title':'Three environments. <span class="gold">One operational principle.</span>',
    'sectors.lead':'Hotels, restaurants and bars have different rhythms, but the same challenge: a standard has to work in real operations.',
    'sectors.hotels':'Guest journey, F&B, standards, teams and operational connection.',
    'sectors.restaurants':'Service, workflow, team, F&B operations and the guest experience under pressure.',
    'sectors.bars':'Bar workflow, beverage concept, standards, speed, quality and team development.',
    'sectors.open':'Explore the area →',
    'sectors.other':'Other areas',
    'sectors.crossTitle':'The same principle. A different operational environment.',
    'hotelsPage.title':'Hotels | MB Hospitality & Management',
    'hotelsPage.meta':'On-site operational support for hotels: guest journey, F&B operations, service standards, training, pre-opening and follow-up.',
    'hotelsPage.eyebrow':'Hotels',
    'hotelsPage.hero':'A hotel is not just a property. <span class="gold">It is one connected guest journey.</span>',
    'hotelsPage.lead':'We observe how standards, people, F&B and communication work together — from the first contact to the guest’s departure.',
    'hotelsPage.introEyebrow':'Hotel Operations',
    'hotelsPage.introTitle':'We look at the hotel as one system, not a collection of separate departments.',
    'hotelsPage.introText':'We come on site, follow the real rhythm of the operation and observe the touchpoints that create or interrupt the guest experience. Particular attention goes to F&B, service standards, communication, leadership and how the team performs under pressure.',
    'hotelsPage.tag':'Alpine Hospitality · On-site',
    'hotelsPage.focusEyebrow':'What we observe',
    'hotelsPage.focusTitle':'From written standards to a real hotel day.',
    'hotelsPage.focusLead':'The focus is adapted to the property, but always stays connected to what guests and the team actually experience in practice.',
    'hotelsPage.r1t':'Guest Journey & Service Standards',
    'hotelsPage.r1p':'Arrival, welcome, communication, service, problem solving and departure — we check whether the experience remains consistent at every touchpoint.',
    'hotelsPage.r2t':'F&B Operations',
    'hotelsPage.r2p':'We observe restaurants, bars, breakfast and other F&B touchpoints through workflow, quality, responsibilities, standards and guest experience.',
    'hotelsPage.r3t':'Team & Leadership',
    'hotelsPage.r3p':'How management leads a shift, how departments communicate and how clearly employees understand the standards they are expected to deliver.',
    'hotelsPage.r4t':'Training & Feedback',
    'hotelsPage.r4p':'Concrete feedback becomes training and habits the team can apply immediately in everyday operations.',
    'hotelsPage.r5t':'Pre-Opening & Opening',
    'hotelsPage.r5p':'Support in preparing people, processes, F&B operations, standards and service flow before and during opening.',
    'hotelsPage.r6t':'Implementation & Follow-Up',
    'hotelsPage.r6p':'We do not stop with a recommendation. We follow implementation and check whether agreed changes work when the hotel is operating at full intensity.',
    'hotelsPage.statement':'A standard that works only when things are quiet is not a standard.',
    'hotelsPage.statementText':'What matters most is what happens during a real hotel day — when the lobby is busy, the restaurant is under pressure and the team has to make fast, consistent decisions.',
    'restaurantsPage.title':'Restaurants | MB Hospitality & Management',
    'restaurantsPage.meta':'On-site operational support for restaurants: service, workflow, F&B operations, standards, training and restaurant development.',
    'restaurantsPage.eyebrow':'Restaurants',
    'restaurantsPage.hero':'When the restaurant fills up, <span class="gold">the standard becomes real.</span>',
    'restaurantsPage.lead':'We observe service, workflow, communication, the team and the guest experience exactly when the operation has to work without improvisation.',
    'restaurantsPage.introEyebrow':'Restaurant Operations',
    'restaurantsPage.introTitle':'A strong restaurant is not only a product. It is a precisely managed operation.',
    'restaurantsPage.introText':'We step into a real shift, follow the guest journey and the team’s work, and identify where service loses rhythm, quality becomes inconsistent or responsibilities overlap. Then we work with management and the team to implement practical improvements.',
    'restaurantsPage.tag':'Service · Flow · Team',
    'restaurantsPage.focusEyebrow':'What we observe',
    'restaurantsPage.focusTitle':'Service that stays strong under pressure.',
    'restaurantsPage.focusLead':'From the first welcome to the final plate — we look at every detail that influences rhythm, quality and the guest experience.',
    'restaurantsPage.r1t':'Service Flow',
    'restaurantsPage.r1p':'Sequence of work, pace of service, guest communication and how the team stays in control as the number of tables and requests increases.',
    'restaurantsPage.r2t':'Team Roles & Communication',
    'restaurantsPage.r2p':'Clear responsibilities between management, floor, bar and kitchen, and the quality of communication during the shift.',
    'restaurantsPage.r3t':'Guest Experience',
    'restaurantsPage.r3p':'Welcome, recommendations, attention to detail, problem solving and the final impression the guest takes away.',
    'restaurantsPage.r4t':'F&B Operations & Standards',
    'restaurantsPage.r4p':'Mise-en-place, operational structure, service standards and workflow that have to be simple, understandable and repeatable.',
    'restaurantsPage.r5t':'Training & Team Development',
    'restaurantsPage.r5p':'Practical training in real situations, feedback after service and development of behaviours that raise the quality of the whole team.',
    'restaurantsPage.r6t':'Restaurant Development',
    'restaurantsPage.r6p':'Development of concept, service model, offer and operational details with a focus on quality, positioning and long-term efficiency.',
    'restaurantsPage.statement':'The best standard is the one a team can live during a full service.',
    'restaurantsPage.statementText':'We do not assess a restaurant under ideal conditions. We look at how the system works when every table matters, communication has to be fast and the guest expects the same level of quality.',
    'barsPage.title':'Bars | MB Hospitality & Management',
    'barsPage.meta':'On-site operational support for bars: workflow, beverage concepts, service standards, training and bar operation development.',
    'barsPage.eyebrow':'Bars',
    'barsPage.hero':'A bar is experience, system and business. <span class="gold">Everything has to work together.</span>',
    'barsPage.lead':'From beverage concept and mise-en-place to speed, communication and guest interaction — we observe what really happens behind and in front of the bar.',
    'barsPage.introEyebrow':'Bar Operations',
    'barsPage.introTitle':'A premium bar is not defined by the cocktail alone, but by how the entire operation works.',
    'barsPage.introText':'We follow workflow, preparation, standards, speed, consistency and guest interaction. The goal is to align product quality, service and organisation so the experience remains premium even when the bar is under maximum pressure.',
    'barsPage.tag':'Beverage · Service · Workflow',
    'barsPage.focusEyebrow':'What we observe',
    'barsPage.focusTitle':'Details behind the bar that guests feel in front of it.',
    'barsPage.focusLead':'A beverage programme and service model only have value when the team can deliver them consistently, quickly and with character.',
    'barsPage.r1t':'Bar Workflow & Mise-en-Place',
    'barsPage.r1p':'Station organisation, preparation, tool placement and ways of working that influence speed, precision and calm during service.',
    'barsPage.r2t':'Beverage & Bar Concepts',
    'barsPage.r2p':'Development and evaluation of the beverage concept, offer structure, presentation and operational feasibility of the bar programme.',
    'barsPage.r3t':'Service Standards',
    'barsPage.r3p':'Clear standards for preparation, presentation, communication and service that can be repeated without losing personality.',
    'barsPage.r4t':'Speed & Consistency',
    'barsPage.r4p':'We observe how quality stays stable as orders increase and where workflow creates unnecessary waiting or errors.',
    'barsPage.r5t':'Bartender & Team Development',
    'barsPage.r5p':'On-the-job feedback, practical training, team communication and development of confidence in guest interaction.',
    'barsPage.r6t':'Guest Experience & Business Development',
    'barsPage.r6p':'We connect guest experience, bar positioning and operational opportunities that can improve quality, offer value and long-term efficiency.',
    'barsPage.statement':'A premium bar has to be equally strong in the first and the hardest minute of the evening.',
    'barsPage.statementText':'That is why we do not look at recipes alone. We look at the system behind them — people, preparation, communication, pace and how the guest feels while all of it is happening.'
  });

  const supported = ['hr','de','en'];
  const qsLang = new URLSearchParams(location.search).get('lang');
  let lang = supported.includes(qsLang) ? qsLang : (localStorage.getItem('mb_lang') || 'hr');
  if (!supported.includes(lang)) lang = 'hr';

  function tr(key){ return T[lang][key] ?? T.hr[key] ?? key; }
  function applyLanguage(next, updateUrl = false){
    lang = supported.includes(next) ? next : 'hr';
    localStorage.setItem('mb_lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.innerHTML = tr(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => el.setAttribute('placeholder', tr(el.dataset.i18nPlaceholder)));
    document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', tr(el.dataset.i18nAria)));
    document.querySelectorAll('[data-i18n-alt]').forEach(el => el.setAttribute('alt', tr(el.dataset.i18nAlt)));
    document.querySelectorAll('.lang-switch button').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    const titleKey = document.body.dataset.titleKey;
    const metaKey = document.body.dataset.metaKey;
    if (titleKey) document.title = tr(titleKey);
    if (metaKey) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', tr(metaKey));
    }
    const skip = document.querySelector('.intro-skip');
    if (skip) skip.textContent = tr('common.skip');
    if (updateUrl) {
      const u = new URL(location.href);
      u.searchParams.set('lang', lang);
      history.replaceState({}, '', u);
    }
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-lang]');
    if (btn) applyLanguage(btn.dataset.lang, true);
  });


  // active navigation including service subpages
  const currentPage = (location.pathname.split('/').pop() || 'index.html').replace('.html','');
  const sectorPages = ['hoteli','restorani','barovi'];
  document.querySelectorAll('[data-nav-page]').forEach(a => {
    const target = a.dataset.navPage;
    const isExact = target === currentPage;
    const isServiceParent = target === 'usluge' && (currentPage === 'usluge' || sectorPages.includes(currentPage));
    a.classList.toggle('active', isExact || isServiceParent);
    if (isExact) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
  });
  document.querySelectorAll('[data-sector-link]').forEach(a => {
    if (a.dataset.sectorLink === currentPage) a.setAttribute('aria-current','page');
  });

  // header
  const header = document.querySelector('.site-header');
  const onScroll = () => header?.classList.toggle('scrolled', scrollY > 28);
  onScroll(); addEventListener('scroll', onScroll, {passive:true});

  // mobile menu
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  function closeMenu(){ mobileMenu?.classList.remove('open'); document.body.classList.remove('menu-open'); menuBtn?.setAttribute('aria-expanded','false'); }
  menuBtn?.addEventListener('click', () => {
    const open = mobileMenu?.classList.toggle('open');
    document.body.classList.toggle('menu-open', !!open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mobileMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));

  // cinematic intro on first home visit per session
  const intro = document.querySelector('.cinematic-intro');
  if (intro) {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = sessionStorage.getItem('mb_intro_seen');
    const hideIntro = () => { intro.classList.add('hidden'); sessionStorage.setItem('mb_intro_seen','1'); setTimeout(()=>intro.remove(),800); };
    if (reduced || seen) { intro.remove(); }
    else {
      intro.querySelector('.intro-skip')?.addEventListener('click', hideIntro);
      setTimeout(hideIntro, 10000);
    }
  }

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
    }), {threshold:.13, rootMargin:'0px 0px -30px'});
    revealEls.forEach(el=>io.observe(el));
  } else revealEls.forEach(el=>el.classList.add('in'));

  // contact form
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const status = form.querySelector('.form-status');
      const key = window.MB_CONFIG?.web3formsKey?.trim();
      if (!key) { status.textContent = tr('form.demo'); status.classList.add('show'); return; }
      const fd = new FormData(form);
      fd.append('access_key', key);
      fd.append('subject', tr('form.subject'));
      try {
        const r = await fetch('https://api.web3forms.com/submit',{method:'POST',body:fd});
        const data = await r.json();
        if (!data.success) throw new Error('submit failed');
        form.reset();
        status.textContent = tr('form.success');
        status.classList.add('show');
      } catch(err) {
        status.textContent = tr('form.error');
        status.classList.add('show');
      }
    });
  }

  // Instagram link activation if configured
  const ig = window.MB_CONFIG?.instagramUrl?.trim();
  if (ig) document.querySelectorAll('[data-instagram-link]').forEach(a => { a.href = ig; a.target='_blank'; a.rel='noopener'; });

  // preferences notice
  const cookie = document.querySelector('.cookie-bar');
  if (cookie && !localStorage.getItem('mb_notice_ok')) cookie.classList.add('show');
  cookie?.querySelector('[data-cookie-ok]')?.addEventListener('click',()=>{localStorage.setItem('mb_notice_ok','1');cookie.classList.remove('show')});

  applyLanguage(lang, false);
})();
