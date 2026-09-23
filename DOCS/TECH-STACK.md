# Tech stack & backend plan — MatMar & Wamet

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Laravel 11, PHP 8.3 | requested |
| Views | Blade + Vite (Laravel default) | 4 pages, no interactivity heavy enough to justify a JS framework or separate API |
| CSS | Plain CSS (or Tailwind if you want utility classes) | no design system to port from sliwa — building matmar's own from scratch either way |
| DB | MySQL | Laravel default, matches Hostinger's setup (127.0.0.1:3306 from the app) |
| Mail | Laravel `Mail` via SMTP | contact form delivery |
| Hosting | Hostinger (PHP hosting) | already have MCP tooling for it in this environment |

No SPA, no separate frontend build, no auth, no admin panel — nothing here needs a login, and there's one editor (the client, via you), not a CMS user base.

## Admin panel

**Filament** — Laravel's standard admin package. Reach for it instead of hand-building CRUD + auth screens; it's the "already-solved" option for exactly this need. One admin user (the client, via you), no role/permission tiers.

Resources:
- `CategoryResource` — add/edit/remove categories
- `ProductResource` — add/edit/remove products, belongs-to category
- `QuoteRequestResource` — **read-only** list of incoming quote-cart submissions, so the client sees them in one place instead of only email

## Cart: request-a-quote, not payment

No payment gateway, no PCI scope, no product pricing requirement — confirmed. Flow: browse → add to cart → review cart → submit contact details → creates a quote request the client prices/replies to manually. This matches the business (B2B fittings supplier, no public price list found in research).

- Cart is **session-based**, guest-only (no customer accounts/login — nothing here needs persistence across devices, and adding accounts would be new scope). Stored as `product_id => qty` in the Laravel session — no cart package needed, it's a few lines against `session()`.
- Submitting the quote form clears the cart and writes one `QuoteRequest` + its `QuoteRequestItem` rows, then emails the client.

## Routes

```
GET   /                        HomeController@index
GET   /kategorie                CategoryController@index
GET   /kategorie/{category}     CategoryController@show      (products in category)
GET   /produkty/{product}       ProductController@show
GET   /o-nas                    PageController@about
GET   /kontakt                  ContactController@show
POST  /kontakt                  ContactController@store

GET   /koszyk                   CartController@index
POST  /koszyk/dodaj             CartController@add
PATCH /koszyk/{product}         CartController@update
DELETE /koszyk/{product}        CartController@remove

GET   /zapytanie                QuoteController@show          (review cart + contact form)
POST  /zapytanie                QuoteController@store         (creates QuoteRequest, clears cart)
```

Admin panel lives at `/admin` (Filament default), separate from the above.

## Data

**Category** (DB table now, not config — client edits these via admin)
```
categories
  id, name, slug, description, icon, sort_order, timestamps
```

**Product**
```
products
  id, category_id (fk), name, slug, description, sku,
  image, price (nullable — indicative only, no checkout math depends on it),
  active (bool), timestamps
```

**QuoteRequest / QuoteRequestItem** — the "order", minus payment
```
quote_requests
  id, name, email, phone, company (nullable), message (nullable), created_at

quote_request_items
  id, quote_request_id (fk), product_id (fk), quantity
```

**Contact submissions** (separate from quote requests — the plain `/kontakt` form, not cart-driven)
```
contact_messages
  id, name, email, phone (nullable), message, created_at
```

`ContactController@store` and `QuoteController@store` both validate via a FormRequest (name + email required; honeypot field for spam filtering), save, and email the client. Both routes get Laravel's built-in throttle middleware (5/min per IP) — cheap spam guard, no extra package.

**Business info (NAP, hours, NIP/REGON)** — one `config/business.php` file, single source of truth used in Blade views and the `LocalBusiness` schema JSON-LD. Fixes the address/phone discrepancy in one place once the client confirms it.

## What's deliberately not here

- No payment gateway (Przelewy24/PayU/Stripe) — confirmed request-a-quote, not checkout.
- No customer accounts/login — cart is guest/session-only.
- No role/permission system in Filament — one admin user.
- Telegram notification on contact/quote submit — sliwa had this wired up via a paired bot. Straightforward to add the same way here (reuse the notification call in the two `store` methods) if you want it; skipping by default since no bot is paired for this project yet.

## Test coverage

Feature test per public route (200 + expected view), one for `ContactController@store` and one for the full cart→`QuoteController@store` flow (add item, submit, assert `QuoteRequest` + items created, cart session cleared, mail queued). No admin-panel tests — Filament's CRUD is framework-tested; only test custom logic on top of it if you add any.

## Setup steps

1. `laravel new matmar` (or `composer create-project laravel/laravel matmar`)
2. `composer require filament/filament` + `php artisan filament:install --panels`
3. `php artisan make:model Category -mf`, `Product -mf`, `QuoteRequest -m`, `QuoteRequestItem -m`, `ContactMessage -m`
4. `php artisan make:filament-resource Category`, `Product`, `--generate` for `QuoteRequest` (view-only: disable create/edit)
5. `php artisan make:mail ContactFormMail QuoteRequestMail`
6. `config/business.php`
7. Controllers + routes above, Blade views for the public pages
8. `php artisan make:filament-user` for the client's admin login
9. Wire Hostinger DB and SMTP credentials via Hostinger's PHP config (outside the repo, per Hostinger's credential-handling notes)
