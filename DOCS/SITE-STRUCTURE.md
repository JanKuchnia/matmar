# Site structure — MatMar & Wamet

Before anything else: **the brief's address (Polanka 375) and phone (539 179 580) don't match any independent registry** (four sources say Polanka 130 and 696 085 379). Get the client to confirm both before this goes live — a wrong phone number on a B2B supplier's only web presence is a dead lead, not a typo.

## Reality check on scope

One-person shop, no reviews, no existing content, no marketing budget signal in the brief. Still doesn't need a blog, location pages, or a content calendar. Scope grew past a static brochure once the client asked for admin-managed categories/products and a cart — now it's a small catalog site with a request-a-quote flow (see `TECH-STACK.md`), not a payment checkout.

## Pages

```
/                       Home — what they make, where, how to contact, opening hours
/kategorie              Category grid — same system as sliwa-fh-sklep's
                        "Kategorie Produktów" (icon + name card, click into detail),
                        own visual design, categories managed via admin panel
/kategorie/{category}   Products within a category
/produkty/{product}     Product detail + "add to cart"
/koszyk                 Cart — review items, adjust quantity, proceed to quote request
/zapytanie              Quote request form (contact details), submits cart as a QuoteRequest
/o-nas                  About — Władysław Marzec, since 2004, one-person operation
/kontakt                Address, phone, map, hours, plain contact form (separate from the quote flow)
/admin                  Filament admin panel — categories, products, incoming quote requests (client-only, not indexed)
```

8 public pages + the admin panel. `/kategorie` replaces the flat `/oferta` sections page from the earlier draft.

### /kategorie — category list (draft, needs client confirmation)

Categories now live in the DB and are editable by the client via `/admin`, so this list is a starting seed, not a fixed set:

- Zawiasy (hinges)
- Prowadnice szufladowe (drawer slides)
- Okucia i akcesoria meblowe (fittings & accessory components)

### Products

No SKU-level catalog exists yet (confirmed in research.md) — the client adds real products via the admin panel post-launch. Ship with categories live and an empty/placeholder product set rather than blocking launch on catalog data that doesn't exist.

## Why not more

- **No `/blog`** — no one to write it, no evidence customers search for content vs. picking up the phone. Add later if the client actually wants to invest in content.
- **No `/lokalizacje` (locations)** — single site, single service area (Myślenice + surrounding), not a multi-branch business.
- **No `/opinie` (reviews)** — zero reviews exist anywhere. Don't build a page for content that doesn't exist yet; add it once reviews come in (start asking customers post-launch).
- **No payment/checkout** — confirmed request-a-quote instead; see `TECH-STACK.md`.
- **No customer login/accounts** — cart is guest/session-based, nothing to persist across devices.

## Schema

- Homepage: `LocalBusiness` + `Organization` (NIP, REGON, founding date 2004)
- Contact: `LocalBusiness` with `geo`, `openingHours`, `areaServed`
- Product pages: `Product` schema (name, description, category) — no `offers`/price required since there's no public pricing

## Next steps

1. Confirm address/phone with client (blocking).
2. Confirm the 3 draft categories.
3. Build the pages/admin panel per `TECH-STACK.md`.
4. Client adds real product data via `/admin` once live.
5. Set up Google Business Profile — currently doesn't exist; bigger win than any content strategy for a local B2B supplier with zero online footprint.

Skipped: competitor-analysis doc, content calendar, phased 12-month roadmap — none of that fits this site's size. Revisit if the client wants to grow past a catalog + quote-request flow.
