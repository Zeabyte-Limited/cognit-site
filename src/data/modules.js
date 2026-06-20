// The real Cognit module catalogue — every module is something the platform
// actually does. Used by the homepage, platform page and feature pages.
export const modules = [
  {
    slug: "ecommerce",
    icon: "🛒",
    name: "Built-in Online Store",
    short: "A full B2B e-commerce website, built in.",
    blurb:
      "Your customers order online 24/7 from their own branded storefront — live catalogue, search, saved pantries for one-click reordering, customer-specific pricing and full order history. No bolt-on plugin: the store is part of the ERP, so stock and pricing are always right.",
    points: ["Branded B2B storefront", "Saved pantries & quick reorder", "Customer-specific pricing", "Live stock & order history"],
  },
  {
    slug: "sales",
    icon: "💲",
    name: "Sales & Pricing",
    short: "Orders, quotes and smart pricing rules.",
    blurb:
      "Take orders online or enter them for customers in seconds. Set special pricing per customer or customer group, run price lists and keep margins protected — every order flows straight through to invoicing and the ledger.",
    points: ["Fast staff order entry", "Customer & group pricing", "Price lists", "Straight-through to invoicing"],
  },
  {
    slug: "inventory",
    icon: "📦",
    name: "Inventory & Warehouse",
    short: "Always-accurate stock, end to end.",
    blurb:
      "Real-time stock on hand, movements and full audit trail. Reorder levels with smart suggestions, bin/shelf locations, stock adjustments and write-offs — plus tablet stocktakes your warehouse team can run from the floor.",
    points: ["Live stock on hand", "Reorder levels & suggestions", "Bins & locations", "Tablet stocktakes"],
  },
  {
    slug: "purchasing",
    icon: "🧾",
    name: "Purchasing",
    short: "Buy smart, receipt fast.",
    blurb:
      "Create and send purchase orders, work from reusable templates, and receipt goods against POs with a couple of taps. A live purchasing dashboard shows what's on order, what's landed and what you're spending.",
    points: ["Purchase orders & templates", "Goods receipting", "Purchasing dashboard", "Spend by supplier"],
  },
  {
    slug: "accounting",
    icon: "📊",
    name: "Accounting & General Ledger",
    short: "Your books, posted automatically.",
    blurb:
      "A real general ledger sits under everything. Chart of accounts, journals, trial balance and balance sheet — with sales, purchasing and stock movements posting to the GL automatically. Keep it all in Cognit, or sync to Xero.",
    points: ["Chart of accounts & journals", "Automatic GL posting", "Trial balance & balance sheet", "Xero sync"],
  },
  {
    slug: "invoicing",
    icon: "💰",
    name: "Invoicing & Receivables",
    short: "Invoice, email and get paid.",
    blurb:
      "Turn orders into invoices in one click — single or in bulk. Branded PDF invoices and credit notes, emailed straight to customers, with accounts-receivable tracking so you always know who owes what.",
    points: ["One-click invoicing", "Branded PDF invoices", "Credit notes", "AR tracking"],
  },
  {
    slug: "rebates",
    icon: "⭐",
    name: "Rebates & Claim-Backs",
    short: "Stop leaving rebate money on the table.",
    blurb:
      "Define supplier rebate agreements once, and Cognit calculates what you've earned from your purchases automatically — then batches and tracks the claims. The spreadsheet work that quietly loses thousands a month, done for you.",
    points: ["Rebate agreements", "Automatic claim calculation", "Monthly claim batches", "Claim-back reporting"],
  },
  {
    slug: "reporting",
    icon: "📈",
    name: "Reporting & Insights",
    short: "Know your numbers, instantly.",
    blurb:
      "Sales by customer, best-selling products, stock valuation, spend by supplier, P&L summary and P&L by month — every report previews on screen and exports to Excel or PDF. Your whole business, measured in real time.",
    points: ["Sales & product reports", "P&L summary & by month", "Stock valuation", "Excel & PDF export"],
  },
  {
    slug: "customers",
    icon: "👥",
    name: "Customers & CRM",
    short: "Every customer, organised.",
    blurb:
      "Customer records, groups, web-portal users and delivery routes in one place. Drivers get their own view with assigned routes and orders, so deliveries run as smoothly as the office.",
    points: ["Customer records & groups", "Web-portal users", "Delivery routes", "Driver app view"],
  },
];

// Headline modules for compact grids (homepage trust).
export const moduleHighlights = modules.slice(0, 8);
