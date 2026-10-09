// Handleidingen per apparaat — overgenomen van de installatiepagina van de huidige site.

export type Guide = { title: string; steps: string[]; note?: string; link?: { label: string; url: string } };
export type Device = {
  slug: string;
  name: string; // nom court (cartes, menu)
  short: string; // sous-titre de carte
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  apps: string;
  guides: Guide[];
  tips: string[];
  icon: 'tv' | 'android' | 'fire' | 'box' | 'phone' | 'laptop';
};

export const DEVICES: Device[] = [
  {
    slug: 'smart-tv',
    name: 'Smart TV',
    short: 'Samsung & LG',
    h1: 'IPTV op je Samsung of LG Smart TV',
    metaTitle: 'IPTV op Samsung & LG Smart TV installeren | Stap voor stap',
    metaDescription:
      'Zo installeer je IPTV op je Samsung of LG Smart TV: kies een IPTV-app uit de appwinkel van je tv, log in met Xtream Codes en begin met kijken.',
    intro: 'Op een Samsung of LG Smart TV installeer je een geschikte IPTV-app uit de appwinkel van je televisie. Daarna vul je je gegevens in en kun je kijken.',
    apps: 'Een Smarters-app of een andere IPTV-speler met Xtream Codes, als die in de appwinkel van je tv staat.',
    guides: [
      {
        title: 'Een speler met Xtream Codes instellen',
        steps: [
          'Open de appwinkel van je televisie en zoek een compatibele IPTV-speler, bijvoorbeeld een beschikbare Smarters-app.',
          'Controleer of de app Xtream Codes ondersteunt en installeer deze.',
          'Open de speler, voeg een gebruiker toe en kies de inlogmethode Xtream Codes API, indien beschikbaar.',
          'Vul je ontvangen server-URL, gebruikersnaam en wachtwoord in. Geef je profiel bijvoorbeeld de naam IPTV Koop 4K.',
          'Sla het profiel op en laat de zenderlijst laden. Open vervolgens een zender.',
        ],
        note: 'Appnamen en beschikbaarheid verschillen per tv-model en regio. Vraagt je speler om een apparaat-ID in plaats van inloggegevens? Laat ons weten welke app je gebruikt.',
      },
    ],
    tips: ['Gebruik bij voorkeur een netwerkkabel in plaats van wifi.', 'Werk de software van je tv bij als de app niet in de winkel staat.'],
    icon: 'tv',
  },
  {
    slug: 'android-tv',
    name: 'Android TV',
    short: 'Google TV & tv-box',
    h1: 'IPTV op Android TV en Google TV',
    metaTitle: 'IPTV op Android TV, Google TV & tv-box | Smarters of TiviMate',
    metaDescription:
      'IPTV installeren op Android TV, Google TV, een tv-box of Nvidia Shield met een Smarters-speler of TiviMate. Stap voor stap uitgelegd.',
    intro: 'Voor geschikte tv-boxen, Nvidia Shield en tv’s met Android TV of Google TV. Je kiest tussen een Smarters-speler en TiviMate.',
    apps: 'Een Smarters-speler of TiviMate.',
    guides: [
      {
        title: 'Optie 1: een Smarters-speler',
        steps: [
          'Zoek in de appwinkel naar een geschikte Smarters-speler. Controleer de uitgever en de beschikbaarheid voor jouw apparaat.',
          'Installeer de app en open de optie om een nieuwe gebruiker toe te voegen.',
          'Kies Xtream Codes als je speler en account deze methode ondersteunen.',
          'Vul je IPTV Koop 4K-inloggegevens in, sla het profiel op en wacht tot het aanbod is geladen.',
        ],
      },
      {
        title: 'Optie 2: TiviMate',
        steps: [
          'Installeer TiviMate op je Android TV-apparaat.',
          'Open de app en kies Add playlist en daarna de inlogmethode, zoals Xtream Codes.',
          'Voer de ontvangen server-URL, gebruikersnaam en het wachtwoord in.',
          'Laat de afspeellijst verwerken, geef deze een naam en rond het instellen af.',
        ],
        note: 'TiviMate is bedoeld voor Android TV. Eventuele app-abonnementen staan los van je IPTV Koop 4K-pakket.',
        link: { label: 'Officiële TiviMate-website', url: 'https://tivimate.com/' },
      },
    ],
    tips: ['Een tv-box met een netwerkkabel geeft het stabielste beeld.', 'Zet de EPG (programmagids) aan in de instellingen van je speler.'],
    icon: 'android',
  },
  {
    slug: 'firestick',
    name: 'Fire TV Stick',
    short: 'Amazon Fire TV',
    h1: 'IPTV op de Amazon Fire TV Stick',
    metaTitle: 'IPTV op Firestick installeren | Fire TV Stick handleiding',
    metaDescription:
      'IPTV op je Amazon Fire TV Stick: installeer een speler via de Appstore of Downloader, voeg je Xtream Codes-gegevens toe en kijk. Stap voor stap.',
    intro: 'Op een Fire TV Stick installeer je een speler via de Amazon Appstore of, als dat nodig is, via Downloader. Daarna voeg je je account toe.',
    apps: 'Een IPTV-speler uit de Amazon Appstore, of via Downloader de officiële downloadlink van de ontwikkelaar.',
    guides: [
      {
        title: 'De speler installeren',
        steps: [
          'Controleer eerst of jouw gekozen speler in de Amazon Appstore beschikbaar is.',
          'Is installatie via Downloader nodig en ondersteunt je apparaat dat? Installeer Downloader via de Appstore.',
          'Gebruik in Downloader uitsluitend de downloadlink van de officiële ontwikkelaar van je speler.',
          'Vraagt Fire TV om toestemming? Geef alleen Downloader de installatietoestemming. De instellingen verschillen per model.',
          'Installeer de speler. Schakel de extra installatietoestemming daarna weer uit als je die niet meer nodig hebt.',
        ],
      },
      {
        title: 'Je IPTV Koop 4K-account toevoegen',
        steps: [
          'Open de speler en kies de ondersteunde inlogmethode, bijvoorbeeld Xtream Codes API.',
          'Voer je ontvangen server-URL, gebruikersnaam en wachtwoord in.',
          'Sla de gegevens op en laat de afspeellijst laden.',
        ],
        note: 'Niet elk Fire TV-model ondersteunt dezelfde apps of installatiemethoden. Geef bij twijfel je model door, dan leggen we je de juiste route uit.',
      },
    ],
    tips: ['Gebruik de 5 GHz-wifi of een ethernetadapter voor minder haperingen.', 'Herstart de Firestick als de zenderlijst niet laadt.'],
    icon: 'fire',
  },
  {
    slug: 'mag-box',
    name: 'MAG Box',
    short: 'Portal instellen',
    h1: 'IPTV op een MAG Box',
    metaTitle: 'IPTV op MAG Box instellen | Portal-URL koppelen',
    metaDescription:
      'Zo koppel je IPTV aan je MAG Box: open de portalinstellingen, voer je portaladres in en herstart. Inclusief uitleg over het MAC-adres.',
    intro: 'Voor compatibele MAG-modellen met een externe portal. Je voert het portaladres in dat je van ons ontvangt.',
    apps: 'Geen app nodig: de MAG Box gebruikt een portaladres.',
    guides: [
      {
        title: 'Je portal koppelen',
        steps: [
          'Sluit de MAG Box aan op je televisie en verbind deze met internet.',
          'Open vanuit de ingebouwde portal Settings → System settings → Servers → Portals.',
          'Vul bij de portalnaam bijvoorbeeld IPTV Koop 4K in.',
          'Voer bij Portal 1 URL het ontvangen portaladres in.',
          'Sla de instellingen op en herstart de portal om de verbinding te laden.',
        ],
        note: 'Voor deze methode moet je account geschikt zijn voor portalgebruik. Geef het MAC-adres van je box aan ons door als dat voor de activatie wordt gevraagd.',
        link: { label: 'Portalhandleiding van Infomir', url: 'https://wiki.infomir.eu/eng/set-top-box/stb-linux-webkit/embedded-portal/external-portal-loading' },
      },
    ],
    tips: ['Het MAC-adres staat op een sticker onder de box en in de instellingen.'],
    icon: 'box',
  },
  {
    slug: 'iphone-ipad',
    name: 'iPhone & iPad',
    short: 'Mobiel & tablet',
    h1: 'IPTV op je iPhone en iPad',
    metaTitle: 'IPTV op iPhone & iPad | Installeren met een IPTV-app',
    metaDescription:
      'IPTV kijken op je iPhone of iPad: installeer een IPTV-speler uit de App Store, voeg je gegevens toe met Xtream Codes en kijk onderweg.',
    intro: 'Op een iPhone of iPad installeer je een IPTV-speler uit de App Store die jouw accounttype ondersteunt.',
    apps: 'Bijvoorbeeld Smarters Player Lite, als die beschikbaar is, of een andere speler met Xtream Codes.',
    guides: [
      {
        title: 'Een compatibele speler instellen',
        steps: [
          'Open de App Store en zoek een IPTV-speler die jouw accounttype ondersteunt, bijvoorbeeld Smarters Player Lite.',
          'Controleer de uitgever, installeer de app en open deze.',
          'Tik op de optie om een gebruiker of afspeellijst toe te voegen.',
          'Kies Xtream Codes wanneer beschikbaar en voer je ontvangen inloggegevens in.',
          'Sla het profiel op, wacht tot het aanbod geladen is en kies wat je wilt kijken.',
        ],
        note: 'De namen van knoppen verschillen per appversie. Een eventuele aankoop van de speler is geen IPTV Koop 4K-abonnement.',
      },
    ],
    tips: ['Kijk je via mobiele data? Let op je databundel.'],
    icon: 'phone',
  },
  {
    slug: 'windows-pc',
    name: 'Windows PC & laptop',
    short: 'Desktop, Kodi & VLC',
    h1: 'IPTV op je Windows PC of laptop',
    metaTitle: 'IPTV op Windows PC & laptop | Desktopspeler, Kodi of VLC',
    metaDescription:
      'IPTV kijken op je computer: met een desktopspeler, Kodi met PVR IPTV Simple Client of VLC met je M3U-link. Drie methodes uitgelegd.',
    intro: 'Op een computer kun je kiezen uit een desktopspeler, Kodi of VLC Media Player.',
    apps: 'Een desktop IPTV-speler, Kodi of VLC Media Player.',
    guides: [
      {
        title: 'Optie 1: een compatibele desktopspeler',
        steps: [
          'Download de Windows-versie van je gekozen IPTV-speler via de officiële ontwikkelaar.',
          'Installeer en open de speler. Kies de optie om een account toe te voegen.',
          'Selecteer Xtream Codes als de speler deze methode ondersteunt.',
          'Vul je IPTV Koop 4K-gegevens in en laad de zenderlijst.',
        ],
      },
      {
        title: 'Optie 2: Kodi met IPTV Simple Client',
        steps: [
          'Installeer Kodi via de officiële Kodi-website.',
          'Open Settings → Add-ons → Install from repository → PVR clients.',
          'Installeer PVR IPTV Simple Client en open de configuratie.',
          'Voeg je ontvangen M3U-URL toe aan de afspeellijstconfiguratie en sla deze op.',
          'Activeer de client en laat Kodi de zenderlijst laden.',
        ],
        link: { label: 'Officiële Kodi-handleiding', url: 'https://kodi.wiki/view/Add-on:PVR_IPTV_Simple_Client' },
      },
      {
        title: 'Optie 3: VLC Media Player',
        steps: [
          'Installeer VLC Media Player via de officiële VideoLAN-website.',
          'Open Media → Open Network Stream, of gebruik Ctrl + N.',
          'Plak je volledige ontvangen M3U-URL in het adresveld.',
          'Klik op Play / Afspelen en wacht tot de afspeellijst is geladen.',
          'Open View → Playlist om beschikbare items te selecteren.',
        ],
        note: 'Voor VLC heb je een M3U-link nodig. Een losse portal-URL is geen M3U-afspeellijst. Menunamen kunnen verschillen per taal.',
        link: { label: 'VLC downloaden bij VideoLAN', url: 'https://www.videolan.org/vlc/' },
      },
    ],
    tips: ['Op een Mac werken dezelfde stappen met de Mac-versie van je speler, Kodi of VLC.'],
    icon: 'laptop',
  },
];

export const FIELDS = [
  ['Profielnaam', 'Een eigen naam, bijvoorbeeld IPTV Koop 4K.'],
  ['Gebruikersnaam', 'De gebruikersnaam die je hebt ontvangen.'],
  ['Wachtwoord', 'Het wachtwoord van je IPTV-account.'],
  ['Server-URL', 'Het volledige ontvangen serveradres.'],
];

export const PROBLEMS = [
  { title: 'Beeld hapert of blijft laden', text: 'Controleer of het bij één zender of bij meerdere gebeurt. Test je internet, gebruik bij voorkeur een kabel, kies een lagere streamkwaliteit en herstart de speler.', msg: 'Hoi IPTV Koop 4K, mijn beeld hapert of blijft laden.', ref: 'HULP-buffering' },
  { title: 'De app wil niet installeren', text: 'Controleer of de app geschikt is voor je apparaat, of er genoeg opslagruimte is en of je de officiële installatiebron gebruikt.', msg: 'Hoi IPTV Koop 4K, de app wil niet installeren.', ref: 'HULP-installatie' },
  { title: 'Inloggen lukt niet', text: 'Controleer het serveradres, je gebruikersnaam en wachtwoord (let op hoofdletters) en of je account al actief is.', msg: 'Hoi IPTV Koop 4K, inloggen lukt niet.', ref: 'HULP-login' },
  { title: 'De programmagids (EPG) laadt niet', text: 'Vernieuw de EPG in je speler en controleer of de juiste bron is ingesteld.', msg: 'Hoi IPTV Koop 4K, de programmagids (EPG) laadt niet.', ref: 'HULP-epg' },
];
