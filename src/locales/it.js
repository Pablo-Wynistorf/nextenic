/**
 * Italian (Swiss usage).
 *
 * Formal "Lei" throughout. Swiss Italian conventions: "La Posta Svizzera" for
 * the carrier, CHF before the amount.
 */
export default {
  meta: {
    title: "Nextenic GmbH, software per la posta che invia e i pacchi che spedisce",
    description:
      "Nextenic GmbH è un’azienda di software con sede a Berna, in Svizzera. Sviluppiamo e gestiamo due prodotti: MailRift, hosting e-mail sul suo dominio, e Swiss Shipping Labels, etichette della Posta Svizzera in Shopify.",
  },

  nav: {
    sections: "Sezioni",
    products: "Prodotti",
    about: "Chi siamo",
    contact: "Contatto",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    home: "Nextenic, pagina iniziale",
    language: "Lingua",
    skipToContent: "Vai al contenuto",
    themeToDark: "Passa al tema scuro",
    themeToLight: "Passa al tema chiaro",
  },

  hero: {
    eyebrow: "Nextenic GmbH · Berna, Svizzera",
    headline: "La posta che invia. I pacchi che spedisce.",
    lead: "Nextenic è un’azienda di software con sede a Berna. Sviluppiamo e gestiamo due prodotti: hosting e-mail sul suo dominio ed etichette di spedizione della Posta Svizzera direttamente in Shopify.",
    ctaPrimary: "Vedi entrambi i prodotti",
    ctaSecondary: "Contattaci",
    scrollHint: "Scorri",
  },

  stats: {
    heading: "In cifre",
    products: "prodotti, sviluppati e gestiti internamente",
    languages: "lingue nei nostri prodotti",
    fromPrice: "CHF al mese per dominio per MailRift",
    carriers:
      "operatore integrato: la Posta Svizzera, tramite la sua interfaccia ufficiale",
  },

  marquee: {
    line1: "Hosting e-mail · Etichette di spedizione · Berna, Svizzera",
    line2:
      "Prezzo per dominio · Installazione gratuita · Sviluppato e gestito internamente",
  },

  productsSection: {
    eyebrow: "Prodotti",
    lead: "Due prodotti, ciascuno con il proprio marchio, i propri prezzi e la propria assistenza. Condividono un team di sviluppo e nulla di più.",
    body: "Entrambi risolvono un problema concreto e poco spettacolare della vita aziendale: far funzionare la posta su un dominio che è suo, e far uscire un pacco con l’etichetta giusta.",
    ordinal: "Prodotto {n}",
    whoItIsFor: "Per chi",
    screenshotsLabel: "Schermate",
    alsoAt: "Anche su",
    linkLabels: {
      pricing: "Prezzi",
      features: "Funzioni",
      docs: "Documentazione",
      signIn: "Accedi",
      guide: "Guida",
      shopify: "Shopify App Store",
    },
  },

  products: {
    mailrift: {
      tagline: "Hosting e-mail sul suo dominio",
      summary:
        "Caselle di posta reali su un dominio che le appartiene già, con client webmail completo, calendario, contatti, inoltri e regole di smistamento in entrata. Un abbonamento copre il dominio e tutte le sue caselle.",
      angle: {
        label: "Prezzo per dominio, non per persona",
        body: "Aggiungere un collega non costa nulla fino al limite di caselle del piano. MailRift sostituisce la parte e-mail di Google Workspace o Microsoft 365, senza fattura per postazione.",
      },
      facts: [
        { key: "Tipo", value: "Hosting e-mail" },
        { key: "Prezzo", value: "Da CHF 4.90 / mese per dominio" },
        { key: "Hosting", value: "Germania, conforme al GDPR" },
        { key: "Client", value: "Webmail, iOS, Android" },
        { key: "Per sviluppatori", value: "API REST, server MCP, webhook" },
      ],
      featureGroups: [
        {
          title: "Posta che si comporta come posta",
          items: [
            "Client webmail completo con conversazioni, composizione formattata, cartelle e ricerca",
            "Calendario e contatti per ogni casella",
            "App per iOS e Android con notifiche push all’arrivo della posta",
            "Alias plus illimitati: lei+qualsiasi@suodominio.ch funziona senza configurazione",
          ],
        },
        {
          title: "Domini e recapito",
          items: [
            "Verifica guidata di MX, SPF, DKIM e DMARC quando aggiunge un dominio",
            "Domain Connect applica tutti i record con un clic presso i registrar supportati",
            "Regole in entrata che ordinano, archiviano, etichettano e inoltrano all’arrivo",
            "Quote di invio su quattro finestre mobili: minuto, ora, giorno e mese",
          ],
        },
        {
          title: "Programmabile",
          items: [
            "Server MCP, così agenti come Claude, Cursor e Windsurf possono leggere e inviare posta",
            "API REST con credenziali bearer a portata limitata e l’SDK tipizzato @mailrift/sdk su npm",
            "Webhook in entrata firmati con HMAC",
            "Chiavi API a livello di account per creare domini e caselle",
          ],
        },
      ],
      audience: {
        lead: "Team e aziende con la posta su un dominio proprio",
        body: "Il piano Starter è descritto come livello di ingresso per un singolo piccolo dominio. Le interfacce programmabili (API REST, server MCP, SDK e webhook) si trovano nei piani superiori, per chi tratta la posta come infrastruttura.",
      },
      trial:
        "Una prova gratuita per account su un sottodominio di test: una casella, 1 MB di spazio, tre e-mail in uscita, senza carta di credito.",
      mobile: {
        title: "iOS e Android, con push",
        body: "App native per entrambe le piattaforme, con notifica push all’arrivo della posta.",
        alt: "Posta in arrivo di MailRift su uno smartphone",
      },
      logoAlt: "Logo MailRift",
      screenshots: {
        inbox: {
          caption: "Webmail: conversazioni, cartelle, ricerca",
          alt: "Posta in arrivo webmail di MailRift con una conversazione, l’albero delle cartelle e l’elenco dei messaggi",
        },
        compose: {
          caption: "Composizione con allegati",
          alt: "Finestra di composizione di MailRift con formattazione del testo e allegati",
        },
        dns: {
          caption: "Verifica DNS guidata",
          alt: "Schermata di configurazione del dominio in MailRift con i record MX, SPF, DKIM e DMARC da aggiungere",
        },
        calendar: {
          caption: "Un calendario per casella",
          alt: "Vista calendario di MailRift con gli appuntamenti di una settimana",
        },
        api: {
          caption: "Credenziali API a portata limitata",
          alt: "Schermata delle credenziali API di MailRift con i token a portata limitata",
        },
      },
    },

    "swiss-shipping-labels": {
      tagline: "Etichette della Posta Svizzera, in Shopify",
      summary:
        "Un’app Shopify che collega il suo negozio all’API Barcode and Label della Posta Svizzera. Crei e stampi etichette e francobolli digitali direttamente dagli ordini, singolarmente o in blocco, con verifica dell’indirizzo, documenti doganali e tracciamento.",
      angle: {
        label: "La sua licenza di affrancatura",
        body: "Le etichette sono generate con la sua licenza di affrancatura e le sue credenziali API della Posta Svizzera: contratto e tariffe restano suoi.",
      },
      facts: [
        { key: "Tipo", value: "App Shopify" },
        { key: "Prezzo", value: "Installazione gratuita" },
        { key: "Operatore", value: "Posta Svizzera (API Barcode and Label)" },
        { key: "Funziona con", value: "Shopify Admin" },
        { key: "Lingue", value: "Inglese, tedesco, francese, italiano" },
      ],
      featureGroups: [
        {
          title: "Etichette e francobolli",
          items: [
            "Crei etichette della Posta Svizzera direttamente dall’amministrazione degli ordini",
            "PostPac Economy, PostPac Priority, Swiss-Express, VinoLog e altri",
            "Affranchi lettere e piccoli pacchi in digitale, senza passare allo sportello",
            "Stampi le etichette o le scarichi in PDF",
          ],
        },
        {
          title: "Volumi e burocrazia",
          items: [
            "Elaborazione in blocco per molti ordini in una volta",
            "Documenti doganali CN22 e CN23 generati automaticamente per le spedizioni internazionali",
            "Etichette di ritorno per i clienti con un clic",
            "Lingua dell’etichetta, formato di stampa e servizi di notifica configurabili",
          ],
        },
        {
          title: "Dopo la spedizione",
          items: [
            "Indirizzi verificati e corretti in tempo reale presso la Posta Svizzera",
            "Codici di tracciamento salvati automaticamente e trasmessi al cliente",
            "Tracciamento in tempo reale con pagina di tracciamento personalizzata",
            "Notifiche e-mail e aggiornamenti degli ordini",
          ],
        },
      ],
      audience: {
        lead: "Commercianti Shopify che spediscono con la Posta Svizzera",
        body: "Presente nella categoria Spedizione, l’app funziona in Shopify Admin, in inglese, tedesco, francese e italiano. L’elaborazione in blocco è pensata per i negozi con volumi elevati di ordini.",
      },
      disclaimer:
        "Questo prodotto è un’offerta indipendente e non è gestito né approvato dalla Posta Svizzera (Schweizerische Post AG).",
      logoAlt: "Icona dell’app Swiss Shipping Labels",
      screenshots: {
        labels: {
          caption: "Tutte le etichette, ricercabili e filtrabili",
          alt: "Panoramica delle etichette di Swiss Shipping Labels con filtri per stato, servizio, data e paese e una tabella delle etichette generate con i numeri di tracciamento",
        },
        dashboard: {
          caption: "Direttamente in Shopify Admin",
          alt: "Pannello di Swiss Shipping Labels in Shopify Admin",
        },
        create: {
          caption: "Un’etichetta per ordine",
          alt: "Creazione di un’etichetta di spedizione della Posta Svizzera per un ordine, con scelta del servizio",
        },
        stamps: {
          caption: "Francobolli digitali",
          alt: "Schermata di acquisto di francobolli digitali per lettere e piccoli pacchi",
        },
        settings: {
          caption: "Impostazioni di etichette e notifiche",
          alt: "Impostazioni di Swiss Shipping Labels per lingua dell’etichetta, formato di stampa e servizi di notifica",
        },
      },
    },
  },

  about: {
    eyebrow: "Chi siamo",
    heading: "Una piccola azienda di software svizzera",
    p1: "Nextenic GmbH è un’azienda di software con sede a Berna, in Svizzera. Possediamo e gestiamo due prodotti, venduti direttamente alle aziende che li usano.",
    p2: "Tecnicamente non hanno nulla in comune: uno è hosting e-mail, l’altro un’app Shopify per stampare etichette della Posta Svizzera. Ciò che condividono è il tipo di problema: il lavoro amministrativo che sta tra un’azienda e i suoi clienti, fatto bene e con un prezzo che non riserva sorprese.",
    p3: "MailRift funziona su AWS a Francoforte, in Germania, ed è conforme al GDPR. Swiss Shipping Labels dialoga con l’interfaccia ufficiale della Posta Svizzera e usa la licenza di affrancatura di ciascun commerciante. Nessuno dei due prodotti è una rivendita.",
    positions: [
      {
        title: "Gestiamo ciò che costruiamo",
        body: "Entrambi i prodotti sono gestiti dallo stesso team che li scrive. L’assistenza di Swiss Shipping Labels passa da Appengine, lo sviluppatore indicato nella scheda Shopify; quella di MailRift da support@mailrift.io. In mezzo non c’è nessuno.",
      },
      {
        title: "I prodotti mantengono il proprio marchio",
        body: "MailRift e Swiss Shipping Labels hanno nomi, siti, prezzi e documentazione propri. Questa pagina li collega invece di assorbirli: chi cerca etichette della Posta Svizzera non deve prima imparare il nome della nostra azienda.",
      },
      {
        title: "Prezzi che stanno in una riga",
        body: "MailRift costa da CHF 4.90 al mese per dominio e un abbonamento copre tutte le caselle di quel dominio. Swiss Shipping Labels si installa gratuitamente e funziona con la sua licenza di affrancatura. Entrambi sono disdicibili ogni mese.",
      },
    ],
  },

  contact: {
    eyebrow: "Contatto",
    heading: "Ci scriva",
    lead: "Per collaborazioni, stampa, fatturazione o qualsiasi cosa riguardi l’azienda, ci scriva un’e-mail. Leggiamo tutto ciò che arriva qui.",
    copyAddress: "Copia indirizzo",
    copied: "Copiato",
    copiedAnnouncement: "{email} copiato negli appunti",
    supportHeading: "Assistenza prodotto",
    supportViaShopify: "Assistenza tramite la scheda Shopify",
    note: "Nextenic GmbH è registrata in Svizzera, in Staufferstrasse 30, 3006 Berna. Tutti i dettagli si trovano nella pagina Impressum.",
  },

  footer: {
    tagline:
      "Nextenic GmbH sviluppa e gestisce prodotti software da Berna, in Svizzera.",
    products: "Prodotti",
    legal: "Note legali",
    contact: "Contatto",
    impressum: "Note legali",
    datenschutz: "Privacy",
    rights: "© {year} Nextenic GmbH",
    trademark:
      "Swiss Shipping Labels è un’offerta indipendente e non è gestita né approvata dalla Posta Svizzera (Schweizerische Post AG). Shopify è un marchio di Shopify Inc.",
  },

  /**
   * The applicable-law clause and the Swiss Post disclaimer follow the Italian
   * version Swiss Shipping Labels already publishes.
   */
  legal: {
    back: "Torna a nextenic",
    impressum: {
      title: "Note legali",
      subtitle: "Impressum",
      uwgNote: "Note legali ai sensi dell’art. 3 cpv. 1 lett. s LCSl.",
      operator: "Gestore",
      operatorIntro:
        "Questo sito web e i prodotti Nextenic sono gestiti dalla Svizzera da:",
      legalForm: "Forma giuridica e registrazione",
      legalFormItems: [
        "Forma giuridica: ditta individuale (Einzelunternehmen), esercitata sotto il nome proprio del titolare",
        "Non iscritta nel registro di commercio svizzero",
        "Attualmente senza numero d’identificazione delle imprese (IDI) e senza registrazione IVA",
      ],
      contact: "Contatto",
      responsible: "Responsabile dei contenuti",
      responsibleBody: "Pablo Wynistorf, all’indirizzo indicato sopra.",
      dataProtection: "Contatto per la protezione dei dati",
      dataProtectionBody:
        "Per qualsiasi questione relativa alla protezione dei dati e per esercitare i suoi diritti ai sensi della legge federale svizzera sulla protezione dei dati (LPD) e, ove applicabile, del regolamento generale europeo sulla protezione dei dati (GDPR), utilizzi l’indirizzo di contatto indicato sopra.",
      euRep: "Rappresentante nell’Unione europea (art. 27 GDPR)",
      euRepBody:
        "Il gestore ha sede in Svizzera, fuori dall’UE/SEE. Nella misura in cui i nostri prodotti sono offerti a consumatori nell’UE/SEE, è previsto un rappresentante nell’Unione ai sensi dell’art. 27 GDPR.",
      euRepPending:
        "Non ancora nominato. Fino alla nomina, gli interessati e le autorità dell’UE possono rivolgersi direttamente al gestore ai contatti indicati sopra.",
      law: "Diritto applicabile",
      lawText:
        "Si applica il diritto svizzero. Il foro competente è Berna, Svizzera.",
      liabilityContent: "Responsabilità per i contenuti",
      liabilityContentBody:
        "I contenuti di questo sito sono redatti con cura. Non ci assumiamo tuttavia alcuna responsabilità per la correttezza, la completezza o l’attualità dei contenuti forniti. In qualità di gestore siamo responsabili dei contenuti propri secondo il diritto comune. Non siamo obbligati a monitorare le informazioni di terzi trasmesse o memorizzate tramite i nostri servizi, né a indagare su circostanze che indichino un’attività illecita, fermo restando l’obbligo di rimuovere o bloccare l’accesso a un’informazione dal momento in cui veniamo a conoscenza di una violazione concreta.",
      liabilityLinks: "Responsabilità per i link",
      liabilityLinksBody:
        "Questo sito contiene link a siti esterni di terzi sui cui contenuti non abbiamo alcuna influenza. Non ci assumiamo pertanto alcuna responsabilità per tali contenuti esterni. Della responsabilità dei contenuti delle pagine collegate risponde sempre il rispettivo fornitore o gestore.",
      copyright: "Diritto d’autore",
      copyrightBody:
        "I contenuti e le opere presenti su queste pagine sono protetti dal diritto d’autore. Ogni riproduzione, elaborazione, diffusione o utilizzazione al di fuori dei limiti del diritto d’autore richiede il consenso scritto preventivo del rispettivo titolare dei diritti.",
      ourProducts: "Prodotti da noi gestiti",
      ourProductsBody:
        "Ogni prodotto pubblica proprie note legali e una propria informativa sulla privacy, valide per l’uso di quel prodotto.",
      hosting: "Sviluppo e gestione",
      hostingBody:
        "I nostri prodotti sono sviluppati e gestiti dalla Svizzera. I dati dei clienti di MailRift sono ospitati presso Amazon Web Services nell’Unione europea (Francoforte, Germania; regione eu-central-1). Swiss Shipping Labels funziona come app Shopify e si collega all’interfaccia ufficiale della Posta Svizzera utilizzando la licenza di affrancatura di ciascun commerciante.",
      swissPostNote:
        "Swiss Shipping Labels è un servizio indipendente di terze parti e non è in alcun modo collegata, approvata o associata alla Posta Svizzera (Die Schweizerische Post AG). Tutti i marchi e i loghi della Posta Svizzera sono di proprietà del rispettivo titolare.",
    },
    datenschutz: {
      title: "Informativa sulla privacy",
      subtitle: "Datenschutz",
      scopeNote:
        "Questa informativa riguarda questo sito web, nextenic.ch e nextenic.com. I nostri due prodotti trattano dati personali nell’ambito della propria attività e pubblicano informative proprie. Si veda la sezione finale.",
      controller: "Titolare del trattamento",
      controllerBody:
        "Pablo Wynistorf, Staufferstrasse 30, 3006 Berna, Svizzera, gestore dei prodotti Nextenic.",
      seeImpressum: "Ulteriori dati si trovano nella pagina Impressum.",
      representative: "Rappresentante nell’UE (art. 27 GDPR)",
      representativeBody:
        "Il gestore ha sede in Svizzera. Un rappresentante nell’Unione ai sensi dell’art. 27 GDPR non è ancora stato nominato. Fino ad allora gli interessati e le autorità dell’UE possono rivolgersi direttamente al gestore.",
      thisSite: "Questo sito web",
      thisSiteBody:
        "Questo sito è statico, senza accesso e senza account utente. Le sue preferenze di lingua e tema sono salvate localmente nel browser, nel localStorage, e non ci vengono mai trasmesse.",
      analytics: "Analisi statistica",
      analyticsBody:
        "Utilizziamo Google Analytics 4, fornito da Google Ireland Limited, per capire quali pagine vengono lette e come i visitatori ci trovano. Vengono impostati cookie nel suo browser e viene trattato il suo indirizzo IP, insieme a dati tecnici quali tipo di dispositivo, browser, posizione approssimativa ricavata dall’indirizzo IP e pagine aperte. Gli indirizzi IP vengono abbreviati da Google prima della memorizzazione. Gestiamo un flusso di dati separato per ciascun dominio: nextenic.ch e nextenic.com sono quindi misurati distintamente.",
      analyticsTransfer:
        "I dati possono essere trasferiti a Google LLC negli Stati Uniti. Google si basa sulle clausole contrattuali tipo dell’UE insieme all’addendum svizzero riconosciuto dall’IFPDT e sulle decisioni di adeguatezza dell’UE e della Svizzera per i destinatari certificati. L’analisi non è attiva negli ambienti di sviluppo locale né nelle versioni di anteprima.",
      analyticsConsentNote:
        "TO FILL: definire l’approccio al consenso. Google Analytics imposta cookie e per i visitatori dell’UE/SEE è generalmente considerato soggetto a consenso preventivo, il che comporta un banner e la sospensione del tag fino al consenso. Da confermare con la revisione legale e indicare qui la base giuridica scelta.",
      contactForm: "Modulo di contatto",
      contactFormNote:
        "TO FILL: è previsto un modulo di contatto, non ancora attivo. Al momento del rilascio documentare i campi raccolti, la finalità, la base giuridica, il destinatario dei messaggi e il periodo di conservazione.",
      hosting: "Hosting",
      hostingBody:
        "Questo sito è distribuito tramite GitHub Pages (GitHub, Inc.). Come ogni server web, esso tratta dati tecnici di connessione, tra cui il suo indirizzo IP, il file richiesto, l’ora della richiesta e l’identificativo del browser, per consegnare la pagina e garantirne sicurezza e stabilità. La base giuridica è il nostro interesse legittimo a gestire un sito sicuro (art. 6 par. 1 lett. f GDPR; art. 31 LPD).",
      fonts: "Caratteri tipografici",
      fontsBody:
        "I caratteri sono caricati da Google Fonts: il browser contatta fonts.gstatic.com e la richiesta trasmette il suo indirizzo IP. La base giuridica è il nostro interesse legittimo a una presentazione uniforme.",
      fontsNote:
        "TO FILL: decidere se mantenere Google Fonts oppure ospitare i caratteri in proprio. L’hosting proprio elimina del tutto la richiesta a terzi e questa informazione.",
      email: "Corrispondenza e-mail",
      emailBody:
        "Se ci scrive, trattiamo il suo indirizzo e-mail, il suo nome se lo indica e il contenuto del messaggio al fine di risponderle. La base giuridica è il nostro interesse legittimo a rispondere alle richieste, oppure l’esecuzione di un contratto se il messaggio lo riguarda.",
      emailNote:
        "TO FILL: indicare per quanto tempo la corrispondenza viene conservata prima della cancellazione.",
      rights: "I suoi diritti",
      rightsBody:
        "A seconda del diritto applicabile, le spettano i seguenti diritti, che riconosciamo a tutti i visitatori indipendentemente dal luogo di residenza:",
      rightsItems: [
        "Accesso ai suoi dati personali (art. 15 GDPR / art. 25 LPD)",
        "Rettifica dei dati inesatti (art. 16 GDPR / art. 32 LPD)",
        "Cancellazione dei suoi dati (art. 17 GDPR / art. 32 LPD)",
        "Limitazione del trattamento (art. 18 GDPR)",
        "Portabilità dei dati (art. 20 GDPR / art. 28 LPD)",
        "Opposizione a un trattamento fondato su interessi legittimi (art. 21 GDPR)",
      ],
      rightsContact:
        "Per esercitarli, scriva all’indirizzo di contatto indicato nell’Impressum.",
      complaint: "Diritto di reclamo",
      complaintBody:
        "In Svizzera può rivolgersi all’Incaricato federale della protezione dei dati e della trasparenza (IFPDT). Nell’UE/SEE può rivolgersi all’autorità di controllo del suo paese di residenza.",
      ourProducts: "I nostri prodotti",
      ourProductsBody:
        "MailRift e Swiss Shipping Labels trattano dati personali nell’ambito della propria attività e pubblicano informative proprie:",
      mailriftPolicy: "Informativa sulla privacy di MailRift",
      sslPolicy: "Informativa sulla privacy di Swiss Shipping Labels",
      changes: "Modifiche a questa informativa",
      changesBody:
        "Possiamo adeguare questa informativa al variare del sito. Vale sempre la versione qui pubblicata.",
    },
  },
};
