/**
 * Device installation data for IPTV Koop 4K
 * Strictly based on iptv8knederland.com specifications
 */

export interface DeviceGuide {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDesc: string;
  badge: string;
  intro: string;
  apps: string[];
  loginMethod: 'Xtream Codes API' | 'M3U' | 'MAC Stalker Portal';
  steps: { title: string; instruction: string }[];
  troubleshooting: { q: string; a: string }[];
}

export const DEVICE_GUIDES: Record<string, DeviceGuide> = {
  'smart-tv': {
    slug: 'smart-tv',
    title: 'IPTV op je Samsung of LG Smart TV',
    shortTitle: 'Samsung & LG Smart TV',
    metaTitle: 'IPTV op Smart TV (Samsung & LG) Installatie | IPTV Koop 4K',
    metaDesc: 'Handleiding voor IPTV op je Samsung of LG Smart TV. Stel een speler in met Xtream Codes en kijk 32.000+ zenders.',
    badge: 'Smart TV Specialist',
    intro: 'Op een Samsung of LG Smart TV kijk je via een mediaspeler uit de officiële app store van jouw televisie, zoals IBO Player of IPTV Smarters.',
    apps: ['IBO Player', 'IPTV Smarters', 'Bob Player'],
    loginMethod: 'Xtream Codes API',
    steps: [
      {
        title: 'Stap 1: Speler installeren',
        instruction: 'Open de Samsung Smart Hub of LG Content Store op je televisie, zoek naar IBO Player of IPTV Smarters en installeer de applicatie.',
      },
      {
        title: 'Stap 2: Kies inlogmethode Xtream Codes',
        instruction: 'Start de app en selecteer de inlogoptie "Xtream Codes API" (of Login with Xtream Codes).',
      },
      {
        title: 'Stap 3: Vul je ontvangen gegevens in',
        instruction: 'Vul de server-URL, gebruikersnaam en het wachtwoord in die je via WhatsApp van ons hebt ontvangen. Let goed op hoofdletters en kleine letters.',
      },
      {
        title: 'Stap 4: Laden en zenders bekijken',
        instruction: 'Klik op inloggen. De app laadt automatisch de live zenderlijst, de EPG-gids en de video-on-demand sectie in.',
      },
    ],
    troubleshooting: [
      {
        q: 'Het beeld hapert of blijft laden',
        a: 'Controleer je internetverbinding en sluit je televisie bij voorkeur aan met een internetkabel in plaats van wifi. Herstart daarna je modem en tv.',
      },
      {
        q: 'Inloggen mislukt',
        a: 'Controleer of de server-URL exact klopt (inclusief http:// en poortnummer) en vraag via WhatsApp of je account al geactiveerd is.',
      },
    ],
  },

  'android-tv': {
    slug: 'android-tv',
    title: 'IPTV op Android TV en Google TV',
    shortTitle: 'Android TV & Google TV',
    metaTitle: 'IPTV op Android TV & Google TV Installatie | IPTV Koop 4K',
    metaDesc: 'Installatiehandleiding voor IPTV op Android TV en Google TV met TiviMate of IPTV Smarters.',
    badge: 'Android & Google TV',
    intro: 'Android TV en Google TV bieden ondersteuning voor populaire IPTV-spelers zoals TiviMate en IPTV Smarters Pro via de Google Play Store.',
    apps: ['TiviMate IPTV Player', 'IPTV Smarters Pro'],
    loginMethod: 'Xtream Codes API',
    steps: [
      {
        title: 'Stap 1: Open Google Play Store',
        instruction: 'Zoek in de Play Store op je Android TV naar "TiviMate" of "IPTV Smarters Pro" en installeer de app.',
      },
      {
        title: 'Stap 2: Afspeellijst toevoegen',
        instruction: 'Kies "Add Playlist" en selecteer "Xtream Codes login".',
      },
      {
        title: 'Stap 3: Inloggegevens invoeren',
        instruction: 'Voer de server-URL, gebruikersnaam en het wachtwoord in die je via WhatsApp hebt ontvangen.',
      },
      {
        title: 'Stap 4: EPG synchroniseren',
        instruction: 'Laat de applicatie de programmagids inlezen. Je kunt nu direct schakelen tussen live zenders en categorieën.',
      },
    ],
    troubleshooting: [
      {
        q: 'De programmagids laadt niet',
        a: 'Ga in de instellingen van je speler naar EPG en kies handmatig voor "Update EPG".',
      },
      {
        q: 'Speler crasht',
        a: 'Wis het cachegeheugen van de app via de Android instellingen en start je apparaat opnieuw op.',
      },
    ],
  },

  'firestick': {
    slug: 'firestick',
    title: 'IPTV op de Amazon Fire TV Stick',
    shortTitle: 'Amazon Fire TV Stick',
    metaTitle: 'IPTV op Fire TV Stick Installatie | IPTV Koop 4K',
    metaDesc: 'Stap-voor-stap handleiding voor IPTV op de Amazon Fire TV Stick met TiviMate of Downloader.',
    badge: 'Firestick Gids',
    intro: 'De Amazon Fire TV Stick is een compacte streamingstick die vloeiend 4K-streams afspeelt via apps zoals TiviMate of IPTV Smarters.',
    apps: ['TiviMate', 'IPTV Smarters Pro', 'Downloader'],
    loginMethod: 'Xtream Codes API',
    steps: [
      {
        title: 'Stap 1: Downloader installeren',
        instruction: 'Zoek in de Amazon Appstore naar "Downloader" en installeer de app op je Firestick.',
      },
      {
        title: 'Stap 2: Onbekende apps toestaan',
        instruction: 'Ga naar Instellingen > Mijn Fire TV > Ontwikkelaarsopties en schakel "Apps van onbekende bronnen" in voor Downloader.',
      },
      {
        title: 'Stap 3: Speler downloaden',
        instruction: 'Open Downloader, voer de downloadcode van je favoriete speler in (bijv. TiviMate of IPTV Smarters) en installeer het bestand.',
      },
      {
        title: 'Stap 4: Inloggen met Xtream Codes',
        instruction: 'Open de app, kies Xtream Codes en voer de server-URL, gebruikersnaam en wachtwoord in die je via WhatsApp ontving.',
      },
    ],
    troubleshooting: [
      {
        q: 'Downloader geeft een foutmelding',
        a: 'Zorg dat Ontwikkelaarsopties correct geactiveerd zijn en controleer of je Firestick verbonden is met internet.',
      },
      {
        q: 'Buffering op de Firestick',
        a: 'Sluit de Firestick aan op een voedingsadapter in het stopcontact (niet de USB van de tv) en herstart het apparaat.',
      },
    ],
  },

  'mag-box': {
    slug: 'mag-box',
    title: 'IPTV op een MAG Box',
    shortTitle: 'MAG Box (Stalker Portal)',
    metaTitle: 'IPTV op MAG Box Portal Koppelen | IPTV Koop 4K',
    metaDesc: 'Handleiding voor MAG Box Stalker Portal configuratie. Koppel je MAC-adres voor IPTV.',
    badge: 'Stalker Portal',
    intro: 'MAG-apparaten maken gebruik van de ingebouwde Stalker Portal functionaliteit. Je account wordt direct gekoppeld aan het fysieke MAC-adres van jouw apparaat.',
    apps: ['Ingebouwde Stalker Portal'],
    loginMethod: 'MAC Stalker Portal',
    steps: [
      {
        title: 'Stap 1: Zoek je MAC-adres op',
        instruction: 'Het MAC-adres staat op de sticker aan de onderkant van je MAG Box (formaat 00:1A:79:XX:XX:XX).',
      },
      {
        title: 'Stap 2: Geef je MAC-adres door',
        instruction: 'Stuur je MAC-adres via WhatsApp naar ons door bij jouw bestelling, zodat wij het account kunnen autoriseren.',
      },
      {
        title: 'Stap 3: Portal URL invoeren',
        instruction: 'Ga in het MAG instellingenmenu naar Servers > Portals. Vul bij Portal 1 URL de link in die je van ons via WhatsApp ontvangt.',
      },
      {
        title: 'Stap 4: Herstarten',
        instruction: 'Sla de instellingen op en kies "Reboot device". De portal laadt automatisch.',
      },
    ],
    troubleshooting: [
      {
        q: 'Melding: Your STB is not supported',
        a: 'Controleer of het MAC-adres exact overeenkomt met het adres dat je via WhatsApp hebt doorgegeven.',
      },
      {
        q: 'Portal blijft hangen op het laadscherm',
        a: 'Controleer de kabelverbinding tussen je modem en de MAG Box.',
      },
    ],
  },

  'iphone-ipad': {
    slug: 'iphone-ipad',
    title: 'IPTV op je Apple iPhone en iPad',
    shortTitle: 'Apple iPhone & iPad',
    metaTitle: 'IPTV op iPhone & iPad Installatie | IPTV Koop 4K',
    metaDesc: 'Handleiding voor IPTV kijken op iOS apparaten zoals Apple iPhone en iPad via de App Store.',
    badge: 'Apple iOS Gids',
    intro: 'Op Apple iPhone en iPad kun je zenders en video on demand bekijken via ondersteunde iOS mediaspelers uit de Apple App Store.',
    apps: ['IPTV Smarters', 'GSE Smart IPTV', 'Snappier IPTV'],
    loginMethod: 'Xtream Codes API',
    steps: [
      {
        title: 'Stap 1: Installeer een speler via de App Store',
        instruction: 'Open de App Store op je iPhone of iPad en installeer een app met Xtream Codes ondersteuning, zoals IPTV Smarters.',
      },
      {
        title: 'Stap 2: Open de app en kies Xtream Codes',
        instruction: 'Selecteer "Add User" en kies voor inloggen met de Xtream Codes API.',
      },
      {
        title: 'Stap 3: Inloggegevens invullen',
        instruction: 'Vul jouw persoonlijke server-URL, gebruikersnaam en wachtwoord in die je via WhatsApp hebt gekregen.',
      },
      {
        title: 'Stap 4: Kijken onderweg',
        instruction: 'Je kan nu via wifi of 4G/5G kijken. Schakel tussen zenders en pas ondertiteling en audiosporen aan.',
      },
    ],
    troubleshooting: [
      {
        q: 'Geen geluid bij bepaalde zenders',
        a: 'Pas in de instellingen van je speler de audio-codec aan naar softwaredecodering of VLC-engine.',
      },
      {
        q: 'Laden via 4G/5G hapert',
        a: 'Controleer of databesparing is uitgeschakeld voor de streaming-app in de iOS instellingen.',
      },
    ],
  },

  'windows-pc': {
    slug: 'windows-pc',
    title: 'IPTV op Windows PC en macOS',
    shortTitle: 'Windows PC & macOS',
    metaTitle: 'IPTV op Windows PC & macOS Installatie | IPTV Koop 4K',
    metaDesc: 'Kijk IPTV op je Windows PC, laptop of Apple Mac. Handleiding voor mediaspelers en VLC.',
    badge: 'Desktop & Laptop',
    intro: 'Op een computer kun je IPTV bekijken via speciale desktopapplicaties zoals IPTV Smarters Pro voor Windows/Mac of via VLC Media Player.',
    apps: ['IPTV Smarters Pro (Desktop)', 'VLC Media Player', 'Kodi'],
    loginMethod: 'Xtream Codes API',
    steps: [
      {
        title: 'Stap 1: Download de software',
        instruction: 'Download IPTV Smarters Pro voor Windows of Mac via de officiële website, of installeer VLC Media Player.',
      },
      {
        title: 'Stap 2: Inloggen met Xtream Codes',
        instruction: 'Open het programma en voer de server-URL, je gebruikersnaam en wachtwoord in.',
      },
      {
        title: 'Stap 3: Zenders en EPG laden',
        instruction: 'Klik op inloggen. Het programma downloadt de categorieën en bouwt het zenderoverzicht op.',
      },
      {
        title: 'Stap 4: Kijken op je computerscherm',
        instruction: 'Gebruik het toetsenbord of de muis om eenvoudig door kanalen, audio en ondertitels te navigeren.',
      },
    ],
    troubleshooting: [
      {
        q: 'Het beeld loopt niet synchroon met het geluid',
        a: 'Schakel in de instellingen over tussen hardware-versnelling en software-rendering.',
      },
      {
        q: 'Firewall blokkeert de verbinding',
        a: 'Geef de speler toestemming in Windows Defender Firewall of macOS beveiligingsinstellingen.',
      },
    ],
  },
};
