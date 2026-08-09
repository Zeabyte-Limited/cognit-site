# Cognit website — rules for any Claude session (incl. the daily SEO blog agent)

## 🔴 RULE ZERO — read `../cognit/docs/WHAT-COGNIT-ACTUALLY-HAS.md` BEFORE writing anything

That file is the truth list of what Cognit does today. **If a capability is not on its ✅ list,
you may not write that Cognit does it** — not on a page, not in a blog post, not in FAQ schema,
not in a meta description. Frame it as roadmap ("we're building this") or custom work
("we'll build it into your system"). Claims are checked against the code, not against
what an older page on this site says — earlier pages have been wrong.

**Currently FALSE — never write these (2026-08-09):**
- ❌ "two-way Xero sync" — Xero is **push only**. Cognit sends invoices, credit notes,
  customers and products *to* Xero. Nothing comes back. Say "sends your invoices to Xero".
- ❌ "integrates with MYOB / QuickBooks / Reckon / Sage" — **only Xero ships**. Others are
  roadmap or a custom build.
- ❌ "landed cost", "multi-currency", "catch weight", "lot & expiry tracking", "consignment",
  "EDI" — **not built**.
- ❌ "AI invoice processing", "AI reorder suggestions", any AI capability — the AI agent has
  **never been switched on**. Roadmap only.
- ❌ mobile apps as a shipped feature — **not shipped**.
- ❌ "proven across New Zealand and Australia" / "already running businesses" (plural) —
  there is **one** client, NZ only, not publicly trading yet.
- ❌ any free plan or free trial — **we do not run one**. See the pricing rule below.

**🔴 NO PRICING. NO PLANS. NO FREE TRIAL. Owner decision, 2026-08-09.**
Never publish a price, a plan tier (Standard/Premium/Enterprise) or a free trial —
not on a page, in a blog post, in FAQ schema, in a meta description or in `llms.txt`.
Say: *"what you pay depends on what you actually need running — tell us how you
operate and we’ll give you a real figure."* CTAs are **book a demo** / **talk to us**.
`/pricing` is now a "what’s included / what we’re building" page — keep it that way,
and keep the "what it does NOT do" section: being straight about the gaps is the point.

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
