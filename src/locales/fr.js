/**
 * French (Swiss usage).
 *
 * Formal "vous" throughout. Swiss French conventions: "La Poste Suisse" for the
 * carrier, CHF before the amount, and no narrow spaces before punctuation that
 * would break in a monospace label.
 */
export default {
  meta: {
    title:
      "Nextenic GmbH, des logiciels pour vos courriels et vos colis",
    description:
      "Nextenic GmbH est une société de logiciels établie à Berne, en Suisse. Nous développons et exploitons deux produits : MailRift, hébergement de courriel sur votre propre domaine, et Swiss Shipping Labels, étiquettes de La Poste Suisse dans Shopify.",
  },

  nav: {
    sections: "Sections",
    products: "Produits",
    about: "À propos",
    contact: "Contact",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    home: "Nextenic, accueil",
    language: "Langue",
    skipToContent: "Aller au contenu",
    themeToDark: "Passer au thème sombre",
    themeToLight: "Passer au thème clair",
  },

  hero: {
    eyebrow: "Nextenic GmbH · Berne, Suisse",
    /* "Le courrier que vous envoyez" is correct French but wordy, and it wrapped
       to four lines. Shortened to match the German and Italian pattern. */
    headline: "Vos courriels. Vos colis.",
    lead: "Nextenic est une société de logiciels établie à Berne. Nous développons et exploitons deux produits : l’hébergement de courriel sur votre propre domaine, et les étiquettes d’expédition de La Poste Suisse directement dans Shopify.",
    ctaPrimary: "Voir les deux produits",
    ctaSecondary: "Nous contacter",
    scrollHint: "Défiler",
  },

  stats: {
    heading: "En chiffres",
    products: "produits, développés et exploités en interne",
    languages: "langues dans nos produits",
    fromPrice: "CHF par mois et par domaine pour MailRift",
    carriers:
      "transporteur intégré : La Poste Suisse, via son interface officielle",
  },

  marquee: {
    line1: "Hébergement de courriel · Étiquettes d’expédition · Berne, Suisse",
    line2:
      "Tarif par domaine · Installation gratuite · Développé et exploité en interne",
  },

  productsSection: {
    eyebrow: "Produits",
    lead: "Deux produits, chacun avec sa marque, ses tarifs et son assistance. Ils partagent une équipe de développement, et rien d’autre.",
    body: "Tous deux résolvent un problème concret et peu spectaculaire de la vie d’une entreprise : faire fonctionner le courriel sur un domaine qui vous appartient, et sortir un colis avec la bonne étiquette dessus.",
    ordinal: "Produit {n}",
    whoItIsFor: "Pour qui",
    screenshotsLabel: "Captures d’écran",
    alsoAt: "Également sur",
    linkLabels: {
      pricing: "Tarifs",
      features: "Fonctions",
      docs: "Documentation",
      signIn: "Se connecter",
      guide: "Guide",
      shopify: "Shopify App Store",
    },
  },

  products: {
    mailrift: {
      tagline: "Hébergement de courriel sur votre propre domaine",
      summary:
        "De véritables boîtes aux lettres sur un domaine qui vous appartient déjà, avec un client webmail complet, agenda, contacts, redirections et règles de tri à l’arrivée. Un abonnement couvre le domaine et toutes ses boîtes.",
      angle: {
        label: "Tarif par domaine, pas par personne",
        body: "Ajouter un collègue ne coûte rien jusqu’à la limite de boîtes du forfait. MailRift remplace la partie courriel de Google Workspace ou Microsoft 365, sans facture par utilisateur.",
      },
      facts: [
        { key: "Type", value: "Hébergement de courriel" },
        { key: "Tarif", value: "Dès CHF 4.90 / mois par domaine" },
        { key: "Hébergement", value: "Allemagne, conforme au RGPD" },
        { key: "Clients", value: "Webmail, iOS, Android" },
        { key: "Pour développeurs", value: "API REST, serveur MCP, webhooks" },
      ],
      featureGroups: [
        {
          title: "Un courriel qui se comporte comme du courriel",
          items: [
            "Client webmail complet : fils de discussion, rédaction enrichie, dossiers et recherche",
            "Agenda et contacts pour chaque boîte aux lettres",
            "Applications iOS et Android avec notifications push à l’arrivée du courrier",
            "Alias plus illimités : vous+n’importequoi@votredomaine.ch fonctionne sans configuration",
          ],
        },
        {
          title: "Domaines et acheminement",
          items: [
            "Vérification guidée des enregistrements MX, SPF, DKIM et DMARC à l’ajout d’un domaine",
            "Domain Connect applique l’ensemble des enregistrements en un clic chez les registraires compatibles",
            "Règles d’acheminement qui trient, classent, étiquettent et redirigent à l’arrivée",
            "Quotas d’envoi sur quatre fenêtres glissantes : minute, heure, jour et mois",
          ],
        },
        {
          title: "Programmable",
          items: [
            "Serveur MCP permettant à des agents comme Claude, Cursor et Windsurf de lire et d’envoyer du courrier",
            "API REST avec jetons à portée limitée, et le SDK typé @mailrift/sdk sur npm",
            "Webhooks entrants signés en HMAC",
            "Clés d’API au niveau du compte pour créer domaines et boîtes aux lettres",
          ],
        },
      ],
      audience: {
        lead: "Équipes et entreprises dont le courriel tourne sur leur propre domaine",
        body: "Le forfait Starter est présenté comme une entrée de gamme pour un seul petit domaine. Les interfaces programmables (API REST, serveur MCP, SDK et webhooks) figurent dans les forfaits supérieurs, pour celles et ceux qui traitent le courriel comme de l’infrastructure.",
      },
      trial:
        "Un essai gratuit par compte sur un sous-domaine de test : une boîte aux lettres, 1 Mo de stockage, trois courriels sortants, sans carte de crédit.",
      mobile: {
        title: "iOS et Android, avec push",
        body: "Des applications natives pour les deux plateformes, avec notification push à l’arrivée du courrier.",
        alt: "Boîte de réception MailRift sur un téléphone",
      },
      logoAlt: "Logo MailRift",
      screenshots: {
        inbox: {
          caption: "Webmail : fils de discussion, dossiers, recherche",
          alt: "Boîte de réception webmail MailRift avec un fil de discussion, l’arborescence des dossiers et la liste des messages",
        },
        compose: {
          caption: "Rédaction avec pièces jointes",
          alt: "Fenêtre de rédaction MailRift avec mise en forme du texte et pièces jointes",
        },
        dns: {
          caption: "Vérification DNS guidée",
          alt: "Écran de configuration de domaine MailRift listant les enregistrements MX, SPF, DKIM et DMARC à ajouter",
        },
        calendar: {
          caption: "Un agenda par boîte aux lettres",
          alt: "Vue agenda de MailRift avec les rendez-vous d’une semaine",
        },
        api: {
          caption: "Identifiants d’API à portée limitée",
          alt: "Écran des identifiants d’API MailRift listant les jetons à portée limitée",
        },
      },
    },

    "swiss-shipping-labels": {
      tagline: "Étiquettes de La Poste Suisse, dans Shopify",
      summary:
        "Une application Shopify qui relie votre boutique à l’API Barcode and Label de La Poste Suisse. Créez et imprimez étiquettes et timbres numériques directement depuis vos commandes, à l’unité ou en lot, avec contrôle d’adresse, documents douaniers et suivi.",
      angle: {
        label: "Votre propre licence d’affranchissement",
        body: "Les étiquettes sont générées avec votre propre licence d’affranchissement et vos identifiants d’API La Poste Suisse : le contrat et les tarifs restent les vôtres.",
      },
      facts: [
        { key: "Type", value: "Application Shopify" },
        { key: "Tarif", value: "Installation gratuite" },
        { key: "Transporteur", value: "La Poste Suisse (API Barcode and Label)" },
        { key: "Fonctionne avec", value: "Shopify Admin" },
        { key: "Langues", value: "Anglais, allemand, français, italien" },
      ],
      featureGroups: [
        {
          title: "Étiquettes et timbres",
          items: [
            "Créez des étiquettes de La Poste Suisse directement depuis l’administration des commandes",
            "PostPac Economy, PostPac Priority, Swiss-Express, VinoLog et d’autres",
            "Affranchissez lettres et petits colis en ligne, sans passer au guichet",
            "Imprimez les étiquettes ou téléchargez-les en PDF",
          ],
        },
        {
          title: "Volume et paperasse",
          items: [
            "Traitement en lot pour de nombreuses commandes à la fois",
            "Documents douaniers CN22 et CN23 générés automatiquement pour l’international",
            "Étiquettes de retour pour vos clients en un clic",
            "Langue de l’étiquette, format d’impression et services de notification configurables",
          ],
        },
        {
          title: "Après l’expédition",
          items: [
            "Adresses vérifiées et corrigées en temps réel auprès de La Poste Suisse",
            "Codes de suivi enregistrés automatiquement et transmis à votre client",
            "Suivi en temps réel avec page de suivi personnalisée",
            "Notifications par courriel et mises à jour de commande",
          ],
        },
      ],
      audience: {
        lead: "Marchands Shopify qui expédient avec La Poste Suisse",
        body: "Référencée dans la catégorie Expédition, l’application fonctionne dans Shopify Admin, en anglais, allemand, français et italien. Le traitement en lot vise les boutiques à fort volume de commandes.",
      },
      disclaimer:
        "Ce produit est une offre indépendante ; il n’est ni exploité ni approuvé par La Poste Suisse (Schweizerische Post AG).",
      logoAlt: "Icône de l’application Swiss Shipping Labels",
      screenshots: {
        labels: {
          caption: "Toutes les étiquettes, cherchables et filtrables",
          alt: "Vue d’ensemble des étiquettes de Swiss Shipping Labels avec filtres par statut, service, date et pays, et un tableau des étiquettes générées avec leurs numéros de suivi",
        },
        dashboard: {
          caption: "Directement dans Shopify Admin",
          alt: "Tableau de bord de Swiss Shipping Labels dans Shopify Admin",
        },
        create: {
          caption: "Une étiquette par commande",
          alt: "Création d’une étiquette d’expédition de La Poste Suisse pour une commande, avec choix du service",
        },
        stamps: {
          caption: "Timbres numériques",
          alt: "Écran d’achat de timbres numériques pour lettres et petits colis",
        },
        settings: {
          caption: "Réglages des étiquettes et des notifications",
          alt: "Réglages de Swiss Shipping Labels pour la langue de l’étiquette, le format d’impression et les services de notification",
        },
      },
    },
  },

  about: {
    eyebrow: "À propos",
    heading: "Une petite société de logiciels suisse",
    p1: "Nextenic GmbH est une société de logiciels établie à Berne, en Suisse. Nous possédons et exploitons deux produits, vendus directement aux entreprises qui les utilisent.",
    p2: "Techniquement, ils n’ont rien en commun : l’un est un hébergement de courriel, l’autre une application Shopify pour imprimer des étiquettes de La Poste Suisse. Ce qu’ils partagent, c’est le type de problème traité : le travail administratif qui se glisse entre une entreprise et ses clients, fait correctement et facturé sans mauvaise surprise.",
    p3: "MailRift tourne sur AWS à Francfort, en Allemagne, et est conforme au RGPD. Swiss Shipping Labels dialogue avec l’interface officielle de La Poste Suisse et utilise la licence d’affranchissement propre à chaque marchand. Aucun des deux produits n’est une revente.",
    positions: [
      {
        title: "Nous exploitons ce que nous construisons",
        body: "Les deux produits sont exploités par l’équipe qui les écrit. L’assistance de Swiss Shipping Labels passe par Appengine, le développeur indiqué sur sa fiche Shopify ; celle de MailRift par support@mailrift.io. Il n’y a personne entre les deux.",
      },
      {
        title: "Les produits gardent leur marque",
        body: "MailRift et Swiss Shipping Labels ont leurs propres noms, sites, tarifs et documentation. Cette page y renvoie plutôt que de les absorber : un marchand qui cherche des étiquettes de La Poste Suisse n’a pas à apprendre d’abord le nom de notre société.",
      },
      {
        title: "Des tarifs qui tiennent en une ligne",
        body: "MailRift coûte dès CHF 4.90 par mois et par domaine, et un abonnement couvre toutes les boîtes de ce domaine. Swiss Shipping Labels s’installe gratuitement et fonctionne avec votre propre licence d’affranchissement. Les deux sont résiliables mensuellement.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Écrivez-nous",
    lead: "Pour les partenariats, la presse, la facturation ou tout ce qui concerne la société elle-même, écrivez-nous. Nous lisons tout ce qui arrive ici.",
    copyAddress: "Copier l’adresse",
    copied: "Copié",
    copiedAnnouncement: "{email} copié dans le presse-papiers",
    supportHeading: "Assistance produit",
    supportViaShopify: "Assistance via la fiche Shopify",
    note: "Nextenic GmbH est enregistrée en Suisse, à la Staufferstrasse 30, 3006 Berne. Tous les détails figurent sur la page Impressum.",
  },

  footer: {
    tagline:
      "Nextenic GmbH développe et exploite des produits logiciels depuis Berne, en Suisse.",
    products: "Produits",
    legal: "Mentions légales",
    contact: "Contact",
    impressum: "Mentions légales",
    datenschutz: "Confidentialité",
    rights: "© {year} Nextenic GmbH",
    trademark:
      "Swiss Shipping Labels est une offre indépendante, ni exploitée ni approuvée par La Poste Suisse (Schweizerische Post AG). Shopify est une marque de Shopify Inc.",
  },

  /**
   * The applicable-law clause and the Swiss Post disclaimer follow the French
   * version Swiss Shipping Labels already publishes.
   */
  legal: {
    back: "Retour à nextenic",
    impressum: {
      title: "Mentions légales",
      subtitle: "Impressum",
      uwgNote: "Mentions légales selon l’art. 3 al. 1 let. s LCD.",
      operator: "Exploitant",
      operatorIntro:
        "Ce site web et les produits Nextenic sont exploités depuis la Suisse par :",
      legalForm: "Forme juridique et enregistrement",
      legalFormItems: [
        "Forme juridique : raison individuelle (Einzelunternehmen), exploitée sous le nom propre du titulaire",
        "Non inscrite au registre du commerce suisse",
        "Actuellement sans numéro d’identification des entreprises (IDE) ni assujettissement à la TVA",
      ],
      contact: "Contact",
      responsible: "Responsable du contenu",
      responsibleBody: "Pablo Wynistorf, à l’adresse ci-dessus.",
      dataProtection: "Contact pour la protection des données",
      dataProtectionBody:
        "Pour toute question de protection des données et pour exercer vos droits au titre de la loi fédérale suisse sur la protection des données (LPD) et, le cas échéant, du règlement général européen sur la protection des données (RGPD), utilisez l’adresse de contact ci-dessus.",
      euRep: "Représentant dans l’Union européenne (art. 27 RGPD)",
      euRepBody:
        "L’exploitant est établi en Suisse, hors de l’UE/EEE. Dans la mesure où nos produits sont proposés à des consommateurs de l’UE/EEE, un représentant dans l’Union au sens de l’art. 27 RGPD est prévu.",
      euRepPending:
        "Pas encore désigné. Jusqu’à sa désignation, les personnes concernées et les autorités de l’UE peuvent s’adresser directement à l’exploitant aux coordonnées ci-dessus.",
      law: "Droit applicable",
      lawText:
        "Le droit suisse est applicable. Le for juridique est Berne, Suisse.",
      liabilityContent: "Responsabilité du contenu",
      liabilityContentBody:
        "Les contenus de ce site sont établis avec soin. Nous n’assumons toutefois aucune responsabilité quant à leur exactitude, leur exhaustivité ou leur actualité. En tant qu’exploitant, nous sommes responsables de nos propres contenus conformément au droit commun. Nous ne sommes pas tenus de surveiller les informations de tiers transmises ou stockées via nos services, ni de rechercher des circonstances révélant une activité illicite, sans préjudice de notre obligation de retirer ou de bloquer l’accès à une information dès que nous avons connaissance d’une violation concrète.",
      liabilityLinks: "Responsabilité des liens",
      liabilityLinksBody:
        "Ce site contient des liens vers des sites externes de tiers, sur le contenu desquels nous n’avons aucune influence. Nous n’assumons donc aucune responsabilité pour ces contenus externes. La responsabilité du contenu des pages liées incombe toujours à leur fournisseur ou exploitant respectif.",
      copyright: "Droit d’auteur",
      copyrightBody:
        "Les contenus et œuvres présents sur ces pages sont protégés par le droit d’auteur. Toute reproduction, modification, diffusion ou exploitation en dehors des limites du droit d’auteur requiert l’accord écrit préalable du titulaire des droits concerné.",
      ourProducts: "Produits que nous exploitons",
      ourProductsBody:
        "Chaque produit publie ses propres mentions légales et sa propre politique de confidentialité, applicables à son utilisation.",
      hosting: "Développement et exploitation",
      hostingBody:
        "Nos produits sont développés et exploités depuis la Suisse. Les données clients de MailRift sont hébergées chez Amazon Web Services dans l’Union européenne (Francfort, Allemagne ; région eu-central-1). Swiss Shipping Labels fonctionne comme application Shopify et se connecte à l’interface officielle de La Poste Suisse au moyen de la licence d’affranchissement propre à chaque marchand.",
      swissPostNote:
        "Swiss Shipping Labels est un service tiers indépendant, sans aucun lien avec La Poste Suisse (Die Schweizerische Post AG), ni approuvé ni associé à elle. Toutes les marques et logos de La Poste Suisse sont la propriété de leur titulaire respectif.",
    },
    datenschutz: {
      title: "Politique de confidentialité",
      subtitle: "Datenschutz",
      scopeNote:
        "Cette politique couvre ce site web, nextenic.ch et nextenic.com. Nos deux produits traitent des données personnelles dans le cadre de leur exploitation et publient leurs propres politiques. Voir la section finale.",
      controller: "Responsable du traitement",
      controllerBody:
        "Pablo Wynistorf, Staufferstrasse 30, 3006 Berne, Suisse, exploitant des produits Nextenic.",
      seeImpressum: "D’autres informations figurent sur la page Impressum.",
      representative: "Représentant dans l’UE (art. 27 RGPD)",
      representativeBody:
        "L’exploitant est établi en Suisse. Aucun représentant dans l’Union au sens de l’art. 27 RGPD n’est encore désigné. Jusque-là, les personnes concernées et les autorités de l’UE peuvent s’adresser directement à l’exploitant.",
      thisSite: "Ce site web",
      thisSiteBody:
        "Ce site est statique, sans connexion ni compte utilisateur. Vos préférences de langue et de thème sont stockées localement dans votre navigateur, dans le localStorage, et ne nous sont jamais transmises.",
      analytics: "Mesure d’audience",
      analyticsBody:
        "Nous utilisons Google Analytics 4, fourni par Google Ireland Limited, pour savoir quelles pages sont lues et comment les visiteurs nous trouvent. Des cookies sont déposés dans votre navigateur et votre adresse IP est traitée, avec des données techniques telles que le type d’appareil, le navigateur, une localisation approximative déduite de l’adresse IP et les pages consultées. Les adresses IP sont raccourcies par Google avant leur enregistrement. Nous exploitons un flux de données distinct par domaine : nextenic.ch et nextenic.com sont donc mesurés séparément.",
      analyticsTransfer:
        "Des données peuvent être transférées à Google LLC aux États-Unis. Google s’appuie sur les clauses contractuelles types de l’UE ainsi que sur l’addendum suisse reconnu par le PFPDT, et sur les décisions d’adéquation de l’UE et de la Suisse pour les destinataires certifiés. La mesure d’audience ne fonctionne pas en développement local ni sur les versions de prévisualisation.",
      analyticsConsentNote:
        "TO FILL : définir l’approche du consentement. Google Analytics dépose des cookies et est généralement considéré comme soumis à un consentement préalable pour les visiteurs de l’UE/EEE, ce qui implique une bannière de consentement et la suspension du tag jusqu’à son obtention. À confirmer avec la relecture juridique, puis indiquer ici la base légale retenue.",
      contactForm: "Formulaire de contact",
      contactFormNote:
        "TO FILL : un formulaire de contact est prévu mais pas encore en ligne. À sa mise en service, documenter les champs collectés, la finalité, la base légale, le destinataire des messages et leur durée de conservation.",
      hosting: "Hébergement",
      hostingBody:
        "Ce site est diffusé par GitHub Pages (GitHub, Inc.). Comme tout serveur web, celui-ci traite des données techniques de connexion, dont votre adresse IP, le fichier demandé, l’heure de la requête et l’identifiant de votre navigateur, afin de livrer la page et d’assurer sa sécurité et sa stabilité. La base légale est notre intérêt légitime à exploiter un site sécurisé (art. 6 al. 1 let. f RGPD ; art. 31 LPD).",
      fonts: "Polices de caractères",
      fontsBody:
        "Les polices sont chargées depuis Google Fonts : votre navigateur contacte fonts.gstatic.com et cette requête transmet votre adresse IP. La base légale est notre intérêt légitime à une présentation homogène.",
      fontsNote:
        "TO FILL : décider de conserver Google Fonts ou d’héberger les polices soi-même. L’auto-hébergement supprime entièrement cette requête vers un tiers et cette mention.",
      email: "Correspondance par courriel",
      emailBody:
        "Si vous nous écrivez, nous traitons votre adresse de courriel, votre nom si vous l’indiquez et le contenu de votre message afin de vous répondre. La base légale est notre intérêt légitime à répondre aux demandes, ou l’exécution d’un contrat si votre message en concerne un.",
      emailNote:
        "TO FILL : indiquer la durée de conservation de la correspondance avant suppression.",
      rights: "Vos droits",
      rightsBody:
        "Selon le droit qui vous est applicable, vous disposez des droits suivants, que nous accordons à tous les visiteurs quel que soit leur lieu de résidence :",
      rightsItems: [
        "Accès à vos données personnelles (art. 15 RGPD / art. 25 LPD)",
        "Rectification des données inexactes (art. 16 RGPD / art. 32 LPD)",
        "Effacement de vos données (art. 17 RGPD / art. 32 LPD)",
        "Limitation du traitement (art. 18 RGPD)",
        "Portabilité des données (art. 20 RGPD / art. 28 LPD)",
        "Opposition à un traitement fondé sur des intérêts légitimes (art. 21 RGPD)",
      ],
      rightsContact:
        "Pour exercer ces droits, écrivez à l’adresse de contact indiquée dans l’Impressum.",
      complaint: "Droit de déposer une réclamation",
      complaintBody:
        "En Suisse, vous pouvez saisir le Préposé fédéral à la protection des données et à la transparence (PFPDT). Dans l’UE/EEE, vous pouvez saisir l’autorité de contrôle de votre pays de résidence.",
      ourProducts: "Nos produits",
      ourProductsBody:
        "MailRift et Swiss Shipping Labels traitent des données personnelles dans le cadre de leur exploitation et publient leurs propres politiques de confidentialité :",
      mailriftPolicy: "Politique de confidentialité de MailRift",
      sslPolicy: "Politique de confidentialité de Swiss Shipping Labels",
      changes: "Modifications de cette politique",
      changesBody:
        "Nous pouvons adapter cette politique à mesure que le site évolue. La version applicable est toujours celle publiée ici.",
    },
  },
};
