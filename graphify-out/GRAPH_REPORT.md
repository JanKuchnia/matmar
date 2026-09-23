# Graph Report - .  (2026-09-23)

## Corpus Check
- Corpus is ~28,376 words - fits in a single context window. You may not need a graph.

## Summary
- 117 nodes · 229 edges · 14 communities (11 shown, 3 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 15 edges (avg confidence: 0.9)
- Token cost: 61,082 input · 29,868 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Frontend Pages & External Assets|Frontend Pages & External Assets]]
- [[_COMMUNITY_Site Architecture & Navigation Routes|Site Architecture & Navigation Routes]]
- [[_COMMUNITY_Business Domain & Competitor Benchmarks|Business Domain & Competitor Benchmarks]]
- [[_COMMUNITY_Backend Tech Stack & Data Models|Backend Tech Stack & Data Models]]
- [[_COMMUNITY_Cart & RFQ Quote Handler|Cart & RFQ Quote Handler]]
- [[_COMMUNITY_Local Runtime State|Local Runtime State]]
- [[_COMMUNITY_Claude & Environment Config|Claude & Environment Config]]
- [[_COMMUNITY_Homepage Filtering & Showcase|Homepage Filtering & Showcase]]
- [[_COMMUNITY_Product Page & Inquiry Actions|Product Page & Inquiry Actions]]
- [[_COMMUNITY_Catalog Search & Facet Filters|Catalog Search & Facet Filters]]
- [[_COMMUNITY_Cart State Management|Cart State Management]]

## God Nodes (most connected - your core abstractions)
1. `Strona Koszyk / Wycena B2B` - 21 edges
2. `Strona Katalog Okuć` - 19 edges
3. `Strona Główna MAT-MAR & Wamet` - 18 edges
4. `Strona Kontakt MAT-MAR & Wamet` - 18 edges
5. `Strona O Fabryce MAT-MAR & Wamet` - 17 edges
6. `Research Document` - 17 edges
7. `Strona Park Maszynowy & OEM` - 16 edges
8. `Strona Produkt: Zawias Hydrauliczny Clip-On 110°` - 15 edges
9. `Tech Stack & Backend Plan Document` - 15 edges
10. `Kategoria Zawiasy Meblowe` - 14 edges

## Surprising Connections (you probably didn't know these)
- `Strona Główna MAT-MAR & Wamet` --references--> `Tailwind Config JS`  [EXTRACTED]
  /home/jankuchnia/Desktop/matmar/index.html → js/tailwind-config.js
- `Kategoria Zawiasy Meblowe` --references--> `Tailwind Config JS`  [EXTRACTED]
  /home/jankuchnia/Desktop/matmar/kategoria-zawiasy.html → js/tailwind-config.js
- `Strona Kontakt MAT-MAR & Wamet` --references--> `Tailwind Config JS`  [EXTRACTED]
  /home/jankuchnia/Desktop/matmar/kontakt.html → js/tailwind-config.js
- `Strona O Fabryce MAT-MAR & Wamet` --references--> `Tailwind Config JS`  [EXTRACTED]
  /home/jankuchnia/Desktop/matmar/o-nas.html → js/tailwind-config.js
- `Strona Park Maszynowy & OEM` --references--> `Tailwind Config JS`  [EXTRACTED]
  /home/jankuchnia/Desktop/matmar/park-maszynowy.html → js/tailwind-config.js

## Communities (14 total, 3 thin omitted)

### Community 0 - "Frontend Pages & External Assets"
Cohesion: 0.35
Nodes (23): CAD/DXF/STEP Files, Google Fonts, Google Maps Polanka Myślenice, Strona Główna MAT-MAR & Wamet, Kategoria Zawiasy Meblowe, Strona Katalog Okuć, Strona Kontakt MAT-MAR & Wamet, Lucide Icons (+15 more)

### Community 1 - "Site Architecture & Navigation Routes"
Cohesion: 0.16
Nodes (21): About Page, B2B Quote Request Flow, Cart Page, Categories Page, Category Products Page, Contact Page, Filament Admin Panel, Google Fonts CDN (+13 more)

### Community 2 - "Business Domain & Competitor Benchmarks"
Cohesion: 0.19
Nodes (16): Amix.pl, Belmeb, Bimeb.pl, Client Brief Document, Email wamet@op.pl, Fabryka Frontów Meblowych "Wiech", Furniture Fittings & Accessories, MAT-MAR & Wamet Polska (+8 more)

### Community 3 - "Backend Tech Stack & Data Models"
Cohesion: 0.15
Nodes (13): Blade + Vite, Category Model, ContactMessage Model, Hostinger PHP Hosting, Laravel 11, Laravel Mail (SMTP), MySQL, PHP 8.3 (+5 more)

### Community 4 - "Cart & RFQ Quote Handler"
Cohesion: 0.43
Nodes (6): clearCart(), loadCart(), removeItem(), renderCart(), setCustomQty(), updateQty()

### Community 5 - "Local Runtime State"
Cohesion: 0.29
Nodes (6): key, pid, port, previous, start_src, start_time

### Community 6 - "Claude & Environment Config"
Cohesion: 0.33
Nodes (5): env, ANTHROPIC_BASE_URL, ENABLE_TOOL_SEARCH, hooks, SessionStart

### Community 7 - "Homepage Filtering & Showcase"
Cohesion: 0.33
Nodes (4): cardCat, filter, filterBtns, productCards

## Knowledge Gaps
- **14 isolated node(s):** `pid`, `start_src`, `start_time`, `port`, `key` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Tech Stack & Backend Plan Document` connect `Backend Tech Stack & Data Models` to `Site Architecture & Navigation Routes`, `Business Domain & Competitor Benchmarks`?**
  _High betweenness centrality (0.122) - this node is a cross-community bridge._
- **Why does `Strona Koszyk / Wycena B2B` connect `Site Architecture & Navigation Routes` to `Frontend Pages & External Assets`, `Business Domain & Competitor Benchmarks`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Why does `Research Document` connect `Business Domain & Competitor Benchmarks` to `Frontend Pages & External Assets`, `Site Architecture & Navigation Routes`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Are the 12 inferred relationships involving `MAT-MAR & Wamet Polska` (e.g. with `Polanka k. Myślenic` and `Zawiasy Hydrauliczne Clip-On`) actually correct?**
  _`MAT-MAR & Wamet Polska` has 12 INFERRED edges - model-reasoned connections that need verification._
- **What connects `pid`, `start_src`, `start_time` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._