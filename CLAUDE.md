# Cognit website — rules for any Claude session (incl. the daily SEO blog agent)

Cognit is Zeabyte's **customisable ERP + B2B online-store platform** for **trading (buying & selling), wholesale distribution, and food distribution** businesses in NZ/AU. It is a real, proven foundation that we **tailor and build bespoke to each client's needs** — not a rigid off-the-shelf box.

## Positioning (non-negotiable)
- ✅ **Cognit = a customisable base** for trading / wholesale / food-distribution businesses. We **customise the whole system to the client's needs** — effectively bespoke software built on a proven distribution foundation. Core message: **"tell us your problem — we build it into your system."**
- ✅ **Target BIG B2B / distribution projects** — serious wholesale, food and trading businesses with real, expensive problems and decision-makers. Not tiny/cheap buyers.
- ✅ Write about **real New Zealand (and AU) B2B / wholesale / distribution problems** and the **functionality we build** (roadmap). Lean into: wholesale & B2B ordering portals, ecommerce, inventory & stock control, customer-specific pricing, catch-weight, credit control, delivery/routing, integrating or keeping Xero/MYOB, replacing multiple disconnected systems, centralised ordering.
- ❌ **NEVER invent product names or fabricate specific features, numbers or client names.** When unsure whether Cognit already does something, frame it as **"we can build/customise this for you"** rather than "Cognit does X". (A sister site once hallucinated a fake product, "Provender", and misled a real lead — never do this.)

## SEO — be aggressive
- One genuinely useful, **specific long-tail** post per run (e.g. "landed cost software for NZ importers", not "what is ERP"). Specific NZ B2B problems rank faster and pull qualified leads.
- **Internal-link** each new post to 2–4 related posts and to relevant pages (home, pricing, contact). Add the post to the blog index/listing.
- Include **FAQPage JSON-LD schema**, a strong `<title>` and meta description.
- After publishing, **ping IndexNow** for the new URL if a key file exists in `public/` (instant Bing/Yandex discovery); Astro's sitemap handles Google.
- Every post `npm run build`s cleanly; preserve `.astro` structure, imports, schema, front-matter.
- Guardrails: no pricing changes; don't touch worker.js, wrangler, DNS, or the lead/trial forms.
