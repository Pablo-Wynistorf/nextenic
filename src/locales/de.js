/**
 * German (Swiss usage).
 *
 * Swiss German orthography: "ss" throughout, never "ß" — Strasse, dass, Grösse.
 * Addressed formally with "Sie", which is what a Swiss company writes to
 * business customers.
 *
 * Some Swiss Shipping Labels wording is taken from that product's own German
 * site, which is the authentic source for its terminology (Versandetiketten,
 * Massenverarbeitung, Adressprüfung).
 */
export default {
  meta: {
    title:
      "Nextenic GmbH — Software für Ihre E-Mails und Ihre Pakete",
    description:
      "Die Nextenic GmbH ist ein Softwareunternehmen in Bern. Wir entwickeln und betreiben zwei Produkte: MailRift, E-Mail-Hosting auf Ihrer eigenen Domain, und Swiss Shipping Labels, Versandetiketten der Schweizerischen Post in Shopify.",
  },

  nav: {
    sections: "Abschnitte",
    products: "Produkte",
    about: "Über uns",
    contact: "Kontakt",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schliessen",
    home: "Nextenic — Startseite",
    language: "Sprache",
    skipToContent: "Zum Inhalt springen",
    themeToDark: "Zum dunklen Design wechseln",
    themeToLight: "Zum hellen Design wechseln",
  },

  hero: {
    eyebrow: "Nextenic GmbH · Bern, Schweiz",
    headline: "Die Post, die Sie senden. Die Pakete, die Sie versenden.",
    lead: "Nextenic ist ein Softwareunternehmen in Bern. Wir entwickeln und betreiben zwei Produkte: E-Mail-Hosting auf Ihrer eigenen Domain und Versandetiketten der Schweizerischen Post direkt in Shopify.",
    ctaPrimary: "Beide Produkte ansehen",
    ctaSecondary: "Kontakt aufnehmen",
    scrollHint: "Scrollen",
  },

  stats: {
    heading: "In Zahlen",
    products: "Produkte, selbst entwickelt und betrieben",
    languages: "Sprachen in unseren Produkten",
    fromPrice: "CHF pro Monat und Domain für MailRift",
    carriers:
      "Logistikpartner angebunden — die Schweizerische Post über ihre offizielle Schnittstelle",
  },

  marquee: {
    line1: "E-Mail-Hosting · Versandetiketten · Bern, Schweiz",
    line2:
      "Preis pro Domain · Kostenlos installierbar · Selbst entwickelt und betrieben",
  },

  productsSection: {
    eyebrow: "Produkte",
    lead: "Zwei Produkte, jedes mit eigener Marke, eigenen Preisen und eigenem Support. Gemeinsam haben sie ein Entwicklungsteam und sonst nichts.",
    body: "Beide lösen ein unspektakuläres, konkretes Problem im Geschäftsalltag: E-Mails auf einer Domain zu betreiben, die Ihnen gehört, und ein Paket mit dem richtigen Etikett aus dem Haus zu bringen.",
    ordinal: "Produkt {n}",
    whoItIsFor: "Für wen",
    screenshotsLabel: "Screenshots",
    alsoAt: "Auch unter",
    linkLabels: {
      pricing: "Preise",
      features: "Funktionen",
      docs: "Dokumentation",
      signIn: "Anmelden",
      guide: "Anleitung",
      shopify: "Shopify App Store",
    },
  },

  products: {
    mailrift: {
      tagline: "E-Mail-Hosting auf Ihrer eigenen Domain",
      summary:
        "Echte Postfächer auf einer Domain, die Ihnen bereits gehört — mit vollem Webmail-Client, Kalender, Kontakten, Weiterleitungen und Eingangsregeln. Ein Abonnement deckt die Domain und alle Postfächer darauf ab.",
      angle: {
        label: "Preis pro Domain, nicht pro Person",
        body: "Eine weitere Kollegin kostet nichts extra, bis die Postfach-Grenze des Tarifs erreicht ist. MailRift ersetzt den E-Mail-Teil von Google Workspace oder Microsoft 365 — ohne Rechnung pro Arbeitsplatz.",
      },
      facts: [
        { key: "Art", value: "E-Mail-Hosting" },
        { key: "Preis", value: "Ab CHF 4.90 / Monat pro Domain" },
        { key: "Hosting", value: "Deutschland, DSGVO-konform" },
        { key: "Clients", value: "Webmail, iOS, Android" },
        { key: "Für Entwickler", value: "REST-API, MCP-Server, Webhooks" },
      ],
      featureGroups: [
        {
          title: "E-Mail, die sich wie E-Mail verhält",
          items: [
            "Vollständiger Webmail-Client mit Konversationsansicht, formatiertem Verfassen, Ordnern und Suche",
            "Kalender und Kontakte für jedes Postfach",
            "Apps für iOS und Android mit Push-Benachrichtigung bei neuer Post",
            "Unbegrenzte Plus-Aliasse — sie+beliebig@ihredomain.ch funktioniert ohne Einrichtung",
          ],
        },
        {
          title: "Domains und Zustellung",
          items: [
            "Geführte Prüfung von MX, SPF, DKIM und DMARC beim Hinzufügen einer Domain",
            "Domain Connect setzt bei unterstützten Registraren alle Einträge mit einem Klick",
            "Eingangsregeln, die Post beim Eintreffen sortieren, ablegen, kennzeichnen und weiterleiten",
            "Sendekontingente über vier gleitende Zeitfenster — Minute, Stunde, Tag und Monat",
          ],
        },
        {
          title: "Programmierbar",
          items: [
            "MCP-Server, damit Agenten wie Claude, Cursor und Windsurf E-Mails lesen und senden können",
            "REST-API mit rechtebeschränkten Bearer-Zugangsdaten, dazu das typisierte @mailrift/sdk auf npm",
            "Eingehende Webhooks mit HMAC-Signatur",
            "Kontoweite API-Schlüssel zum Anlegen von Domains und Postfächern",
          ],
        },
      ],
      audience: {
        lead: "Teams und Unternehmen, die E-Mails auf einer eigenen Domain betreiben",
        body: "Der Starter-Tarif ist als Einstieg für eine einzelne kleine Domain beschrieben. Die programmierbaren Schnittstellen — REST-API, MCP-Server, SDK und Webhooks — liegen in den höheren Tarifen, für Entwicklerinnen und Entwickler, die E-Mail als Infrastruktur nutzen.",
      },
      trial:
        "Eine kostenlose Testphase pro Konto auf einer Test-Subdomain: ein Postfach, 1 MB Speicher, drei ausgehende E-Mails, keine Kreditkarte.",
      mobile: {
        title: "iOS und Android, mit Push",
        body: "Native Apps für beide Plattformen, mit Push-Benachrichtigung bei neuer Post.",
        alt: "MailRift-Posteingang auf einem Smartphone",
      },
      logoAlt: "MailRift-Logo",
      screenshots: {
        inbox: {
          caption: "Webmail — Konversationen, Ordner, Suche",
          alt: "MailRift-Webmail-Posteingang mit Konversationsansicht, Ordnerbaum und Nachrichtenliste",
        },
        compose: {
          caption: "Verfassen mit Anhängen",
          alt: "MailRift-Fenster zum Verfassen mit Textformatierung und Anhängen",
        },
        dns: {
          caption: "Geführte DNS-Prüfung",
          alt: "MailRift-Einrichtungsseite mit den einzutragenden MX-, SPF-, DKIM- und DMARC-Einträgen",
        },
        calendar: {
          caption: "Kalender pro Postfach",
          alt: "MailRift-Kalenderansicht mit Terminen über eine Woche",
        },
        api: {
          caption: "Rechtebeschränkte API-Zugangsdaten",
          alt: "MailRift-Seite mit API-Zugangsdaten und rechtebeschränkten Tokens",
        },
      },
    },

    "swiss-shipping-labels": {
      tagline: "Versandetiketten der Schweizerischen Post in Shopify",
      summary:
        "Eine Shopify-App, die Ihren Shop mit der Barcode- und Label-API der Schweizerischen Post verbindet. Erstellen und drucken Sie Etiketten und digitale Briefmarken direkt aus Ihren Bestellungen — einzeln oder gebündelt, mit Adressprüfung, Zolldokumenten und Sendungsverfolgung.",
      angle: {
        label: "Ihre eigene Frankierlizenz der Post",
        body: "Die Etiketten werden mit Ihrer eigenen Frankierlizenz und Ihren eigenen API-Zugangsdaten der Schweizerischen Post erzeugt. Vertrag und Tarife bleiben damit bei Ihnen.",
      },
      facts: [
        { key: "Art", value: "Shopify-App" },
        { key: "Preis", value: "Kostenlos installierbar" },
        { key: "Logistik", value: "Schweizerische Post (Barcode- und Label-API)" },
        { key: "Läuft mit", value: "Shopify Admin" },
        { key: "Sprachen", value: "Englisch, Deutsch, Französisch, Italienisch" },
      ],
      featureGroups: [
        {
          title: "Etiketten und Briefmarken",
          items: [
            "Versandetiketten der Post direkt aus der Bestellübersicht erstellen",
            "PostPac Economy, PostPac Priority, Swiss-Express, VinoLog und weitere",
            "Briefe und Kleinpakete digital frankieren, ohne Gang zum Schalter",
            "Etiketten drucken oder als PDF herunterladen",
          ],
        },
        {
          title: "Menge und Papierkram",
          items: [
            "Massenverarbeitung für viele Bestellungen auf einmal",
            "CN22- und CN23-Zolldokumente werden für internationale Sendungen automatisch erzeugt",
            "Rücksendeetiketten für Kundinnen und Kunden mit einem Klick",
            "Etikettensprache, Druckgrösse und Benachrichtigungsdienste konfigurierbar",
          ],
        },
        {
          title: "Nach dem Versand",
          items: [
            "Adressen werden in Echtzeit bei der Schweizerischen Post geprüft und korrigiert",
            "Tracking-Codes werden automatisch gespeichert und an die Kundschaft übermittelt",
            "Sendungsverfolgung in Echtzeit mit eigener Tracking-Seite",
            "E-Mail-Benachrichtigungen und Bestellaktualisierungen",
          ],
        },
      ],
      audience: {
        lead: "Shopify-Händler, die mit der Schweizerischen Post versenden",
        body: "Gelistet in der Kategorie Versand, läuft im Shopify Admin, auf Englisch, Deutsch, Französisch und Italienisch. Die Massenverarbeitung richtet sich an Shops mit hohem Bestellvolumen.",
      },
      disclaimer:
        "Dieses Produkt ist ein unabhängiges Angebot und wird nicht von der Schweizerischen Post AG betrieben oder unterstützt.",
      logoAlt: "App-Symbol von Swiss Shipping Labels",
      screenshots: {
        labels: {
          caption: "Alle Etiketten, durchsuchbar und filterbar",
          alt: "Etikettenübersicht von Swiss Shipping Labels mit Filtern für Status, Service, Datum und Land sowie einer Tabelle erzeugter Etiketten mit Tracking-Nummern",
        },
        dashboard: {
          caption: "Direkt im Shopify Admin",
          alt: "Übersicht von Swiss Shipping Labels im Shopify Admin",
        },
        create: {
          caption: "Etikett pro Bestellung",
          alt: "Erstellen eines Versandetiketts der Post für eine Bestellung mit Auswahl des Service",
        },
        stamps: {
          caption: "Digitale Briefmarken",
          alt: "Seite zum Kauf digitaler Briefmarken für Briefe und Kleinpakete",
        },
        settings: {
          caption: "Etiketten- und Benachrichtigungseinstellungen",
          alt: "Einstellungen von Swiss Shipping Labels für Etikettensprache, Druckgrösse und Benachrichtigungsdienste",
        },
      },
    },
  },

  about: {
    eyebrow: "Über uns",
    heading: "Ein kleines Schweizer Softwareunternehmen",
    p1: "Die Nextenic GmbH ist ein Softwareunternehmen mit Sitz in Bern. Wir besitzen und betreiben zwei Produkte, die wir direkt an die Unternehmen verkaufen, die sie einsetzen.",
    p2: "Technisch haben die beiden nichts miteinander zu tun: das eine ist E-Mail-Hosting, das andere eine Shopify-App für Versandetiketten der Post. Gemeinsam ist ihnen die Art des Problems — die Administration zwischen einem Unternehmen und seiner Kundschaft, sauber gelöst und so bepreist, dass die Rechnung niemanden überrascht.",
    p3: "MailRift läuft auf Cloud-Infrastruktur in Deutschland und ist DSGVO-konform. Swiss Shipping Labels arbeitet mit der offiziellen Schnittstelle der Schweizerischen Post und nutzt die eigene Frankierlizenz jedes Händlers. Keines der beiden Produkte ist ein Wiederverkauf.",
    positions: [
      {
        title: "Wir betreiben, was wir bauen",
        body: "Beide Produkte werden von demselben Team betrieben, das sie schreibt. Der Support für Swiss Shipping Labels läuft über Appengine, den auf dem Shopify-Eintrag genannten Entwickler; MailRift-Support über support@mailrift.io. Dazwischen liegt niemand.",
      },
      {
        title: "Die Produkte behalten ihre eigene Marke",
        body: "MailRift und Swiss Shipping Labels haben eigene Namen, eigene Websites, eigene Preise und eigene Dokumentation. Diese Seite verlinkt sie, statt sie zu vereinnahmen — wer Versandetiketten der Post sucht, soll nicht zuerst unseren Firmennamen lernen müssen.",
      },
      {
        title: "Preise, die in eine Zeile passen",
        body: "MailRift kostet ab CHF 4.90 pro Monat und Domain, ein Abonnement deckt alle Postfächer dieser Domain ab. Swiss Shipping Labels ist kostenlos installierbar und arbeitet mit Ihrer eigenen Frankierlizenz der Post. Beide sind monatlich kündbar.",
      },
    ],
  },

  contact: {
    eyebrow: "Kontakt",
    heading: "Schreiben Sie uns",
    lead: "Für Partnerschaften, Medienanfragen, Rechnungen oder alles, was das Unternehmen selbst betrifft: schreiben Sie uns eine E-Mail. Wir lesen alles, was hier eintrifft.",
    copyAddress: "Adresse kopieren",
    copied: "Kopiert",
    copiedAnnouncement: "{email} in die Zwischenablage kopiert",
    supportHeading: "Produkt-Support",
    supportViaShopify: "Support über den Shopify-Eintrag",
    note: "Die Nextenic GmbH ist in der Schweiz eingetragen, an der Staufferstrasse 30, 3006 Bern. Alle Angaben finden Sie im Impressum.",
  },

  footer: {
    tagline:
      "Die Nextenic GmbH entwickelt und betreibt Softwareprodukte aus Bern.",
    products: "Produkte",
    legal: "Rechtliches",
    contact: "Kontakt",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    rights: "© {year} Nextenic GmbH",
    trademark:
      "Swiss Shipping Labels ist ein unabhängiges Angebot und wird nicht von der Schweizerischen Post AG betrieben oder unterstützt. Shopify ist eine Marke von Shopify Inc.",
  },

  legal: {
    back: "Zurück zu nextenic",
    toFill: "noch zu ergänzen",
    impressum: {
      title: "Impressum",
      subtitle: "Rechtliche Angaben",
      company: "Unternehmen",
      contact: "Kontakt",
      register: "Handelsregister",
      registeredOffice: "Sitz: Bern, Schweiz",
      registerPending:
        "Handelsregisternummer (UID) und Mehrwertsteuernummer: noch nicht verfügbar. Sie werden hier veröffentlicht, sobald sie vergeben sind.",
      management: "Geschäftsführung",
      managingDirector: "Geschäftsführer: Pablo Wynistorf",
      responsible: "Verantwortlich für den Inhalt",
      responsibleBody: "Pablo Wynistorf, unter der oben genannten Adresse.",
      ourProducts: "Von der Nextenic GmbH betriebene Produkte",
      ourProductsBody:
        "Jedes Produkt veröffentlicht ein eigenes Impressum und eine eigene Datenschutzerklärung, die für die Nutzung des jeweiligen Produkts gelten.",
      disclaimer: "Haftungsausschluss",
      disclaimerNote:
        "TO FILL: Haftungs- und Linkhaftungsausschluss, Urheberrechtshinweis, anwendbares Recht und Gerichtsstand.",
      swissPostNote:
        "Swiss Shipping Labels ist ein unabhängiges Angebot und wird nicht von der Schweizerischen Post AG betrieben oder unterstützt.",
    },
    datenschutz: {
      title: "Datenschutz",
      subtitle: "Datenschutzerklärung",
      controller: "Verantwortliche Stelle",
      controllerBody: "Nextenic GmbH, Staufferstrasse 30, 3006 Bern, Schweiz.",
      seeImpressum: "Weitere Angaben zum Unternehmen finden Sie im Impressum.",
      representative:
        "TO FILL oder entfernen: Datenschutzvertretung in der EU, sofern erforderlich.",
      thisSite: "Diese Website",
      thisSiteBody:
        "Diese Website ist statisch. Sie setzt keine Cookies, bindet keine Analyse- oder Tracking-Skripte ein und hat kein Kontaktformular — die Kontaktadresse ist ein einfacher mailto-Link. Ihre Sprach- und Designeinstellung wird lokal in Ihrem Browser gespeichert und nie übermittelt.",
      fontsBody:
        "Die Schriften werden von Google Fonts geladen. Dabei kontaktiert Ihr Browser fonts.gstatic.com, und diese Anfrage übermittelt Ihre IP-Adresse.",
      fontsNote:
        "TO FILL: dieses Vorgehen bestätigen oder die Schriften selbst hosten, um die Anfrage an Dritte ganz zu vermeiden.",
      hostingNote:
        "TO FILL: GitHub Pages (GitHub, Inc.) liefert diese Website aus und verarbeitet Server-Logdaten einschliesslich IP-Adressen — beschreiben und Rechtsgrundlage angeben.",
      email: "E-Mail-Korrespondenz",
      emailNote:
        "TO FILL: was mit einer Nachricht an unsere Kontaktadresse geschieht — Zweck, Rechtsgrundlage, Aufbewahrungsdauer.",
      ourProducts: "Unsere Produkte",
      ourProductsBody:
        "Diese Erklärung betrifft ausschliesslich diese Website. MailRift und Swiss Shipping Labels verarbeiten im Rahmen ihres Betriebs eigene Personendaten und veröffentlichen eigene Datenschutzerklärungen:",
      mailriftPolicy: "Datenschutzerklärung von MailRift",
      sslPolicy: "Datenschutzerklärung von Swiss Shipping Labels",
      rights: "Ihre Rechte",
      rightsNote:
        "TO FILL: Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit, deren Ausübung sowie die zuständige Aufsichtsbehörde.",
      changes: "Änderungen",
      changesNote:
        "TO FILL: wie Änderungen dieser Erklärung veröffentlicht werden.",
    },
  },
};
