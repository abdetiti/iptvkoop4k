import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { PaymentLogos } from './PaymentLogos';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-28 md:pb-16 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-200">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <Logo size="md" />
            <p className="text-xs text-slate-500 leading-relaxed mt-2">
              IPTV kopen voor live tv, sport, films en series. Bestellen en hulp in het Nederlands, via WhatsApp.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-400 block">
                Domein: www.iptvkoop4k.nl
              </span>
            </div>
            <div className="pt-2">
              <a
                href="https://wa.me/447577339206?text=Hoi%20IPTV%20Koop%204K%2C%20ik%20heb%20een%20vraag%20over%20een%20abonnement.%20(ref%3A%20FOOTER)"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#25D366] hover:underline"
              >
                Chat direct met onze klantenservice &rarr;
              </a>
            </div>
          </div>

          {/* Column 2: Pagina's */}
          <div>
            <h4 className="font-bold text-[#0E1526] text-[15px] mb-3 font-display">Navigatie</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-[#FF5A1F]">Home</Link></li>
              <li><Link to="/iptv-abonnement/" className="hover:text-[#FF5A1F]">IPTV Abonnementen</Link></li>
              <li><Link to="/zenderlijst/" className="hover:text-[#FF5A1F]">Zenderoverzicht</Link></li>
              <li><Link to="/hoe-bestellen/" className="hover:text-[#FF5A1F]">Hoe bestellen</Link></li>
              <li><Link to="/iptv-vs-kabel/" className="hover:text-[#FF5A1F]">IPTV vs Kabel</Link></li>
              <li><Link to="/veelgestelde-vragen/" className="hover:text-[#FF5A1F]">Veelgestelde vragen</Link></li>
              <li><Link to="/over-ons/" className="hover:text-[#FF5A1F]">Over ons</Link></li>
              <li><Link to="/contact/" className="hover:text-[#FF5A1F]">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: 6 Apparaten Gidsen */}
          <div>
            <h4 className="font-bold text-[#0E1526] text-[15px] mb-3 font-display">Handleidingen</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/apparaten/smart-tv/" className="hover:text-[#FF5A1F]">Samsung &amp; LG Smart TV</Link></li>
              <li><Link to="/apparaten/android-tv/" className="hover:text-[#FF5A1F]">Android TV &amp; Google TV</Link></li>
              <li><Link to="/apparaten/firestick/" className="hover:text-[#FF5A1F]">Amazon Fire TV Stick</Link></li>
              <li><Link to="/apparaten/mag-box/" className="hover:text-[#FF5A1F]">MAG Box (Stalker Portal)</Link></li>
              <li><Link to="/apparaten/iphone-ipad/" className="hover:text-[#FF5A1F]">Apple iPhone &amp; iPad</Link></li>
              <li><Link to="/apparaten/windows-pc/" className="hover:text-[#FF5A1F]">Windows PC &amp; macOS</Link></li>
            </ul>
          </div>

          {/* Column 4: Juridisch & Betaalmethoden */}
          <div>
            <h4 className="font-bold text-[#0E1526] text-[15px] mb-3 font-display">Juridisch</h4>
            <ul className="space-y-2 text-xs mb-4">
              <li><Link to="/algemene-voorwaarden/" className="hover:text-[#FF5A1F]">Algemene Voorwaarden</Link></li>
              <li><Link to="/privacybeleid/" className="hover:text-[#FF5A1F]">Privacybeleid</Link></li>
              <li><Link to="/cookiebeleid/" className="hover:text-[#FF5A1F]">Cookiebeleid</Link></li>
              <li><Link to="/retourbeleid/" className="hover:text-[#FF5A1F]">Retour- en Restitutiebeleid</Link></li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-500 block mb-1">Veilige betaalmethoden:</span>
              <PaymentLogos className="justify-start pt-0" size="sm" />
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>&copy; {new Date().getFullYear()} IPTV Koop 4K (www.iptvkoop4k.nl). Alle rechten voorbehouden.</p>
          <p>Bestellen en betalen via WhatsApp en een veilige betaallink.</p>
        </div>
      </div>
    </footer>
  );
};
