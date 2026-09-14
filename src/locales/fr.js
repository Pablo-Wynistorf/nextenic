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
      "Nextenic GmbH — des logiciels pour vos courriels et vos colis",
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
    home: "Nextenic — accueil",
    language: "Langue",
    skipToContent: "Aller au contenu",
    themeToDark: "Passer au thème sombre",
    themeToLight: "Passer au thème clair",
  },

  hero: {
    eyebrow: "Nextenic GmbH · Berne, Suisse",
    headline: "Le courrier que vous envoyez. Les colis que vous expédiez.",
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
      "transporteur intégré — La Poste Suisse, via son interface officielle",
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
            "Alias plus illimités — vous+n’importequoi@votredomaine.ch fonctionne sans configuration",
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
        body: "Le forfait Starter est présenté comme une entrée de gamme pour un seul petit domaine. Les interfaces programmables — API REST, serveur MCP, SDK et webhooks — figurent dans les forfaits supérieurs, pour celles et ceux qui traitent le courriel comme de l’infrastructure.",
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
          caption: "Webmail — fils de discussion, dossiers, recherche",
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
    p2: "Techniquement, ils n’ont rien en commun : l’un est un hébergement de courriel, l’autre une application Shopify pour imprimer des étiquettes de La Poste Suisse. Ce qu’ils partagent, c’est le type de problème traité — le travail administratif qui se glisse entre une entreprise et ses clients, fait correctement et facturé sans mauvaise surprise.",
    p3: "MailRift tourne sur une infrastructure cloud en Allemagne et est conforme au RGPD. Swiss Shipping Labels dialogue avec l’interface officielle de La Poste Suisse et utilise la licence d’affranchissement propre à chaque marchand. Aucun des deux produits n’est une revente.",
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
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    rights: "© {year} Nextenic GmbH",
    trademark:
      "Swiss Shipping Labels est une offre indépendante, ni exploitée ni approuvée par La Poste Suisse (Schweizerische Post AG). Shopify est une marque de Shopify Inc.",
  },

  legal: {
    back: "Retour à nextenic",
    toFill: "encore à compléter",
    impressum: {
      title: "Impressum",
      subtitle: "Mentions légales",
      company: "Société",
      contact: "Contact",
      register: "Registre du commerce",
      registeredOffice: "Siège : Berne, Suisse",
      registerPending:
        "Numéro d’identification des entreprises (IDE) et numéro de TVA : pas encore disponibles. Ils seront publiés ici dès leur attribution.",
      management: "Direction",
      managingDirector: "Directeur : Pablo Wynistorf",
      responsible: "Responsable du contenu",
      responsibleBody: "Pablo Wynistorf, à l’adresse ci-dessus.",
      ourProducts: "Produits exploités par Nextenic GmbH",
      ourProductsBody:
        "Chaque produit publie ses propres mentions légales et sa propre politique de confidentialité, applicables à son utilisation.",
      disclaimer: "Clause de non-responsabilité",
      disclaimerNote:
        "TO FILL : clause de responsabilité et de liens, mention de droit d’auteur, droit applicable et for juridique.",
      swissPostNote:
        "Swiss Shipping Labels est une offre indépendante, ni exploitée ni approuvée par La Poste Suisse (Schweizerische Post AG).",
    },
    datenschutz: {
      title: "Datenschutz",
      subtitle: "Politique de confidentialité",
      controller: "Responsable du traitement",
      controllerBody: "Nextenic GmbH, Staufferstrasse 30, 3006 Berne, Suisse.",
      seeImpressum:
        "D’autres informations sur la société figurent sur la page Impressum.",
      representative:
        "TO FILL ou supprimer : représentant en matière de protection des données dans l’UE, si nécessaire.",
      thisSite: "Ce site web",
      thisSiteBody:
        "Ce site est statique. Il ne dépose aucun cookie, n’intègre ni analyse ni script de pistage, et n’a pas de formulaire de contact : l’adresse est un simple lien mailto. Vos préférences de langue et de thème sont stockées localement dans votre navigateur et ne sont jamais transmises.",
      fontsBody:
        "Les polices sont chargées depuis Google Fonts : votre navigateur contacte fonts.gstatic.com et cette requête transmet votre adresse IP.",
      fontsNote:
        "TO FILL : confirmer ce fonctionnement, ou héberger les polices soi-même pour supprimer entièrement la requête vers un tiers.",
      hostingNote:
        "TO FILL : GitHub Pages (GitHub, Inc.) diffuse ce site et traite des données de journal serveur, dont les adresses IP — décrire et indiquer la base légale.",
      email: "Correspondance par courriel",
      emailNote:
        "TO FILL : ce qu’il advient d’un message envoyé à notre adresse de contact — finalité, base légale, durée de conservation.",
      ourProducts: "Nos produits",
      ourProductsBody:
        "Cette politique ne couvre que ce site web. MailRift et Swiss Shipping Labels traitent des données personnelles dans le cadre de leur exploitation et publient leurs propres politiques :",
      mailriftPolicy: "Politique de confidentialité de MailRift",
      sslPolicy: "Politique de confidentialité de Swiss Shipping Labels",
      rights: "Vos droits",
      rightsNote:
        "TO FILL : droits d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité, modalités d’exercice et autorité de surveillance compétente.",
      changes: "Modifications",
      changesNote:
        "TO FILL : comment les modifications de cette politique sont publiées.",
    },
  },
};
