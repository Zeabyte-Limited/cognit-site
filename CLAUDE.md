# Cognit website — rules for any Claude session (incl. the daily SEO blog agent)

This is the marketing site for **Cognit** — Zeabyte's real, ready-made ERP + built-in B2B online-store product, aimed at **trading, wholesale and distribution businesses** (NZ/AU).

## 🔴 Accuracy rules for blog posts (non-negotiable)
- ✅ You MAY describe Cognit as a real product — but **only its genuine, shipped capabilities.** When unsure whether Cognit does something specific, write generally about what an all-in-one ERP / B2B ordering platform does, rather than claiming *Cognit* specifically does it.
- ❌ **NEVER invent product names or features.** Do not fabricate capabilities, integrations, numbers, or client names. (A sister site once hallucinated a fake product called "Provender" and misled a real lead — never do this.)
- ✅ Audience = trading / wholesale / distribution businesses. Lean into: wholesale & B2B ordering, ecommerce, inventory, replacing multiple systems with one ERP, integrating/keeping Xero/MYOB, distribution operations.
- ✅ Every post must `npm run build` cleanly; preserve `.astro` structure, imports, JSON-LD schema, and front-matter — change only human-readable wording.
- Guardrails: no pricing changes; do not touch `worker.js`, `wrangler` config, DNS, or the lead/trial forms.
