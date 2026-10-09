# IPTV 8K Nederland — site Next.js

Site de iptv8knederland.com, prêt pour Vercel. Toutes les pages sont pré-rendues en HTML (bon pour le SEO).

## Où modifier quoi

| Quoi | Fichier |
|---|---|
| **Prix des abonnements** (Standard / Premium, 1 à 4 appareils) | `data/prices.ts` — mettre le prix total à la place de `null` |
| **Avantages Premium** | `data/prices.ts` → `PREMIUM_EXTRAS` |
| Questions / réponses de la FAQ | `data/faq.ts` |
| Pages légales | `data/legal.ts` |
| Numéro WhatsApp | `utils/whatsapp.ts` → `WHATSAPP_PHONE` |
| Images | `public/images/` + `images.ts` |
| Titre et description Google de l'accueil | `app/layout.tsx` |
| Anciennes adresses WordPress → nouvelles | `next.config.ts` |

## Mise en ligne sur Vercel

1. Créer un dépôt GitHub et y envoyer ce dossier.
2. Sur vercel.com : **Add New → Project**, importer le dépôt (Vercel détecte Next.js tout seul), **Deploy**.
3. **Settings → Environment Variables** : ajouter `NEXT_PUBLIC_GA_ID` = l'ID GA4 (G-…), puis redéployer.
4. **Settings → Domains** : ajouter `iptv8knederland.com` et `www.iptv8knederland.com`, puis créer chez Hostinger les enregistrements DNS que Vercel indique.
5. Search Console : renvoyer `sitemap.xml`.

## Développement local

```
npm install
npm run dev
```
