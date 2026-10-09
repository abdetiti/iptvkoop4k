/**
 * Legal documents data for IPTV Koop 4K
 * Strictly based on iptv8knederland.com legal texts, adapted for brand IPTV Koop 4K
 */

export interface LegalDoc {
  slug: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: { title: string; content: string[] }[];
}

export const LEGAL_DOCS: Record<string, LegalDoc> = {
  'privacybeleid': {
    slug: 'privacybeleid',
    title: 'Privacybeleid',
    lastUpdated: '8 oktober 2026',
    intro: 'IPTV Koop 4K hecht veel waarde aan de bescherming van jouw persoonsgegevens. In dit privacybeleid lees je welke gegevens wij verwerken, waarom, met wie wij ze delen en welke rechten je hebt. Wij verwerken persoonsgegevens volgens de Algemene verordening gegevensbescherming (AVG). Wij verkopen of verhuren jouw persoonsgegevens niet aan derden.',
    sections: [
      {
        title: '1. Welke gegevens wij verwerken',
        content: [
          'Wanneer je contact met ons opneemt of een bestelling plaatst via WhatsApp, verwerken wij je telefoonnummer, je opgegeven naam of schermnaam, en de inhoud van de communicatie die nodig is om je bestelling af te ronden.',
          'Voor de levering van de dienst verwerken wij technische gegevens zoals jouw gekozen apparaattype, mediaspeler en bij MAG-apparaten het MAC-adres.',
        ],
      },
      {
        title: '2. Waarom wij deze gegevens verwerken',
        content: [
          'Wij verwerken persoonsgegevens voor het tot stand brengen en uitvoeren van de overeenkomst, het leveren van inloggegevens, het verlenen van technische ondersteuning en het afhandelen van betalingen.',
          'Daarnaast verwerken wij geanonimiseerde gegevens om de kwaliteit en stabiliteit van onze website en dienstverlening te bewaken.',
        ],
      },
      {
        title: '3. Cookies en tracking',
        content: [
          'Wij gebruiken uitsluitend noodzakelijke en functionele cookies voor de werking van de website en om instellingen te onthouden. Voor analytische doeleinden hanteren wij privacyvriendelijke instellingen via Google Consent Mode.',
          'Meer informatie over ons cookiegebruik vind je in ons aparte cookiebeleid.',
        ],
      },
      {
        title: '4. Delen met derden',
        content: [
          'Wij delen jouw gegevens uitsluitend met betrouwbare derden die noodzakelijk zijn voor de uitvoering van de overeenkomst, zoals betalingsproviders voor de verwerking van beveiligde betaallinks.',
          'Wij verkopen, verhuren of verhandelen persoonsgegevens onder geen beding aan externe partijen.',
        ],
      },
      {
        title: '5. Jouw rechten',
        content: [
          'Onder de AVG heb je het recht op inzage, correctie of verwijdering van jouw persoonsgegevens. Ook kun je bezwaar maken tegen de verwerking of verzoeken om beperking van de verwerking. Neem hiervoor contact met ons op via WhatsApp.',
        ],
      },
    ],
  },

  'cookiebeleid': {
    slug: 'cookiebeleid',
    title: 'Cookiebeleid',
    lastUpdated: '8 oktober 2026',
    intro: 'In dit cookiebeleid lees je welke cookies IPTV Koop 4K gebruikt, waarom, en hoe je jouw voorkeuren beheert.',
    sections: [
      {
        title: '1. Wat zijn cookies?',
        content: [
          'Cookies zijn kleine tekstbestanden die bij het bezoeken van een website op je computer, tablet of telefoon worden opgeslagen.',
        ],
      },
      {
        title: '2. Soorten cookies die wij gebruiken',
        content: [
          'Noodzakelijke en functionele cookies: deze cookies zijn vereist om de website naar behoren te laten functioneren, zoals het onthouden van je cookievoorkeur en de navigatie.',
          'Analytische cookies: wij gebruiken Google Analytics met Google Consent Mode. Zolang je geen toestemming geeft, worden er geen analytische of advertentiecookies geplaatst.',
        ],
      },
      {
        title: '3. Jouw keuze en beheer',
        content: [
          'Via onze cookiebanner kun je aangeven of je akkoord gaat. Daarnaast kun je cookies op elk moment verwijderen of blokkeren via de instellingen van je internetbrowser.',
        ],
      },
    ],
  },

  'algemene-voorwaarden': {
    slug: 'algemene-voorwaarden',
    title: 'Algemene Voorwaarden',
    lastUpdated: '8 oktober 2026',
    intro: 'Deze algemene voorwaarden gelden voor het gebruik van de website van IPTV Koop 4K en voor alle digitale diensten, bestellingen, betalingen en ondersteuning die via deze website of via WhatsApp worden aangeboden. Met "wij" bedoelen wij IPTV Koop 4K; met "jij" of "klant" iedere bezoeker of gebruiker van onze diensten. Door de website te gebruiken of een bestelling te plaatsen, ga je akkoord met deze voorwaarden.',
    sections: [
      {
        title: '1. Gebruik en beschikbaarheid',
        content: [
          'IPTV Koop 4K spant zich in om de streams en klantenservice zo stabiel en kwalitatief mogelijk aan te bieden. De daadwerkelijke beeldkwaliteit en stabiliteit zijn mede afhankelijk van de internetverbinding, apparatuur en speler van de gebruiker.',
          'Bij misbruik of ongeoorloofd delen van accounts behouden wij ons het recht voor om de toegang te beperken of te beëindigen.',
        ],
      },
      {
        title: '2. Bestellen en betalen',
        content: [
          'Bestellingen worden geplaatst via WhatsApp. Betaling geschiedt vooraf via een beveiligde betaallink met de aangeboden betaalmethoden (iDEAL, PayPal, creditcard, Apple Pay).',
          'Tarieven zijn vast voor de gekozen periode (3, 6 of 12 maanden) en worden nooit stilzwijgend verlengd.',
        ],
      },
      {
        title: '3. Dienst en support',
        content: [
          'Ondersteuning en activatie-instructies worden in het Nederlands verleend via WhatsApp. Wij helpen klanten met de basisinstellingen van gangbare mediaspelers.',
        ],
      },
      {
        title: '4. Rechten en privacy',
        content: [
          'Op alle overeenkomsten is het Nederlands recht van toepassing. Persoonsgegevens worden vertrouwelijk behandeld conform ons privacybeleid.',
        ],
      },
    ],
  },

  'retourbeleid': {
    slug: 'retourbeleid',
    title: 'Retour- en Restitutiebeleid',
    lastUpdated: '8 oktober 2026',
    intro: 'IPTV Koop 4K levert digitale diensten. Hier lees je wanneer annuleren mogelijk is, wanneer een terugbetaling kan worden beoordeeld en welke informatie wij daarvoor nodig hebben. Dwingende consumentenrechten worden door dit beleid niet beperkt.',
    sections: [
      {
        title: '1. Annuleren vóór activatie',
        content: [
          'Een bestelling kan worden geannuleerd zolang de digitale dienst nog niet is geleverd of geactiveerd. Neem zo snel mogelijk contact met ons op via WhatsApp.',
        ],
      },
      {
        title: '2. Wanneer kan een terugbetaling worden beoordeeld?',
        content: [
          'Elke aanvraag wordt individueel beoordeeld, bijvoorbeeld wanneer door een aantoonbare technische storing aan onze zijde geen levering mogelijk is gebleken en onze helpdesk het probleem niet heeft kunnen oplossen.',
        ],
      },
      {
        title: '3. Wanneer niet automatisch?',
        content: [
          'Een aanvraag kan worden afgewezen wanneer de inloggegevens reeds zijn verstrekt en geactiveerd, of wanneer problemen worden veroorzaakt door ondeugdelijke apparatuur of een ontoereikende internetverbinding aan de zijde van de klant.',
        ],
      },
      {
        title: '4. Contact opnemen',
        content: [
          'Heb je een vraag over een bestelling of annulering? Neem direct contact op met onze helpdesk via WhatsApp onder vermelding van je bestelgegevens.',
        ],
      },
    ],
  },
};
