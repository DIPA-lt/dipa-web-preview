# DIPA.LT — Informacinė architektūra (Sitemap)

**Versija:** 1.0 · 2026-08-19
**Struktūros etalonas:** `globalnodes.com` (produktizuota pasiūlymų kolekcija + sektorių kolekcija + atvejų kolekcija + įžvalgų kolekcija)

---

## 1. Navigacijos modelis

GlobalNodes naudoja plokščią viršutinę navigaciją su 5 elementais ir be didelių dropdown'ų. DIPA turi daugiau produktų, todėl naudojame **2 lygių navigaciją su mega-dropdown „Sprendimai" elementu**.

### 1.1. Utility juosta (viršuje, 36 px)

| Elementas | Nuoroda |
|---|---|
| `DI brandos vertinimas` | `/vertinimas` |
| `Client Zero` | `/client-zero` |
| `Akademija` | `/akademija` |
| `LT / EN` | kalbos perjungimas |

### 1.2. Pagrindinė navigacija (74 px, sticky)

```
[DIPA logo]   Filosofija   Sprendimai ▾   Sektoriai ▾   Atvejai   Įžvalgos   Apie ▾      [Pateikti užklausą]
```

**`Sprendimai ▾` mega-dropdown** — trys stulpeliai pagal etapą:

| ALIGN | TRANSFORM | SCALE |
|---|---|---|
| DI brandos diagnostika | **Transformation Sprint** ⭐ | AI Portfolio Partnership |
| Vadovų DI bazė | AI OS Build | Fractional CAIO |
| DI kryptis ir 90 dienų planas | | |
| | | *Įgalinantis modulis:* Darbuotojų DI bazė |

Apačioje dropdown'o: `Visas transformacijos kelias →` `/sprendimai`

**`Sektoriai ▾`** — 8 sektoriai + `Visi sektoriai →`

**`Apie ▾`** — `Apie DIPA ir komanda` · `Client Zero` · `Karjera` · `Kontaktai`

### 1.3. Mobilus (< 1024 px)

Hamburger → pilno ekrano overlay, akordeonas pagal tas pačias grupes. Sticky apatinis CTA baras: `Pateikti užklausą` + `Vertinimas`.

---

## 2. Pilnas svetainės medis

Legenda: `⭐` flagmaninis · `P1` 1 fazė (paleidimas) · `P2` 2 fazė (po paleidimo) · `EN` reikalauja EN versijos

```
/                                          Pradžia                                    P1
│
├── /filosofija                            Ko-intelekto era · trečioji vadybos epocha  P1
│   ├── /filosofija/10-20-70               10–20–70 transformacijos taisyklė           P1
│   └── /filosofija/atsakomybes            Žmogaus ir DI atsakomybių ribos             P2
│
├── /sprendimai                            Transformacijos kelias (hub)                P1
│   ├── /sprendimai/di-brandos-diagnostika DI brandos diagnostika        · ALIGN       P1
│   ├── /sprendimai/vadovu-di-baze         Vadovų DI bazė                · ALIGN I     P1
│   ├── /sprendimai/di-kryptis-90-dienu    DI kryptis ir 90 dienų planas · ALIGN II    P1
│   ├── /sprendimai/transformation-sprint  Transformation Sprint ⭐      · TRANSFORM   P1
│   ├── /sprendimai/ai-os-build            AI OS Build                   · TRANSFORM   P1
│   ├── /sprendimai/ai-portfolio-partnership  AI Portfolio Partnership   · SCALE       P1
│   ├── /sprendimai/fractional-caio        Fractional CAIO               · SCALE       P1
│   └── /sprendimai/darbuotoju-di-baze     Darbuotojų DI bazė            · modulis     P1
│
├── /sektoriai                             Sektoriai (hub)                             P1
│   ├── /sektoriai/gamyba                  Gamyba                                      P1
│   ├── /sektoriai/profesines-paslaugos    Profesinės paslaugos                        P1
│   ├── /sektoriai/logistika               Logistika ir tiekimo grandinė               P1
│   ├── /sektoriai/finansai-apskaita       Finansai ir apskaita                        P2
│   ├── /sektoriai/sveikatos-apsauga       Sveikatos apsauga                           P2
│   ├── /sektoriai/teise                   Teisė ir atitiktis                          P2
│   ├── /sektoriai/mazmena-ecom            Mažmena ir e-komercija                      P2
│   └── /sektoriai/statyba-nt              Statyba ir nekilnojamasis turtas            P2
│
├── /atvejai                               Atvejų analizės (hub)                       P1
│   ├── /atvejai/{slug}                    Inžinerinė ataskaita                        P1
│   └── ...                                                                             
│
├── /client-zero                           DIPA vidinė transformacija (hub)            P1
│   ├── /client-zero/revenue-ai-os         Revenue AI OS                               P1
│   ├── /client-zero/delivery-ai-os        Delivery AI OS                              P1
│   └── /client-zero/knowledge-ai-os       Knowledge AI OS                             P2
│
├── /akademija                             DI kompetencijos kryptis (hub)              P1
│   ├── /akademija/didziosios-di-dirbtuves Didžiosios DI Dirbtuvės                     P1
│   ├── /akademija/imonems                 DI mokymai įmonėms                          P1
│   └── /akademija/savarankiskai           Savarankiškas tobulėjimas                   P1
│
├── /izvalgos                              Įžvalgos (hub, filtrai pagal klasterį)      P1
│   └── /izvalgos/{slug}                   Straipsnis                                  P1
│
├── /vertinimas                            DI brandos vertinimo įrankis (interaktyvus) P1
│
├── /apie                                  Apie DIPA ir komanda                        P1
│   └── /apie/karjera                      Karjera                                     P2
│
├── /kontaktai                             Kvalifikacinė užklausa                      P1
│
├── /duk                                   Dažniausi klausimai                         P2
│
└── Teisiniai
    ├── /privatumo-politika                                                            P1
    ├── /slapukai                                                                       P1
    └── /naudojimo-taisykles                                                            P2
```

**P1 apimtis paleidimui:** 1 pradinis + 2 filosofija + 1 sprendimų hub + 8 produktai + 1 sektorių hub + 3 sektoriai + 1 atvejų hub + N atvejų + 1 Client Zero hub + 2 CZ atvejai + 1 akademijos hub + 3 akademijos + 1 įžvalgų hub + 6 įžvalgos + vertinimas + apie + kontaktai + 2 teisiniai = **~35 puslapiai**.

---

## 3. Puslapių šablonai

Šeši šablonai aptarnauja visus puslapius (GlobalNodes taip pat naudoja ~6):

| Šablonas | Puslapiai | Sekcijų skaičius |
|---|---|---|
| `T1 Home` | `/` | 12 |
| `T2 Pillar` | `/filosofija`, `/sprendimai`, `/sektoriai`, `/client-zero`, `/akademija` | 6–8 |
| `T3 Offering` | 8 produktų puslapiai | 9 |
| `T4 Case` | atvejai, Client Zero atvejai | 7 |
| `T5 Article` | įžvalgos | 5 |
| `T6 Utility` | kontaktai, vertinimas, apie, teisiniai | 3–5 |

### 3.1. `T1 Home` — sekcijų seka

| # | Sekcija | Darbas |
|---|---|---|
| 1 | Hero stack | Autoritetas + pirkėjo atsijojimas |
| 2 | Trys kryptys (Transformacija / Akademija / Client Zero) | Mastas |
| 3 | Mūsų tezė — 4 principai | Filosofinis filtras |
| 4 | Skaičiai | Socialinis įrodymas |
| 5 | Problema (67 %, keturi skausmo taškai) | Agitacija |
| 6 | Keturi ramsčiai 01–04 | Metodologija |
| 7 | Transformacijos kelias ALIGN → TRANSFORM → SCALE | Pirkimo takas |
| 8 | Sektoriai | Domeno gilumas |
| 9 | Valdysena ir atitiktis (statusiniai čipai) | Rizikos neutralizavimas |
| 10 | ROI formulė + BASELINE/CHANGE/MEASURE/GATE | Matavimo standartas |
| 11 | Atvejai / Client Zero + atsiliepimai | Įrodymas |
| 12 | Finalinis CTA + Įžvalgos + prenumerata | Konversija |

### 3.2. `T3 Offering` — sekcijų seka (visiems 8 produktams identiška)

| # | Sekcija |
|---|---|
| 1 | Hero: etapo žymė · pavadinimas · vieno sakinio pažadas · trukmė / kaina / rezultatas |
| 2 | „Kam tai skirta" vs. „Kam netinkame" (dvi kolonos) |
| 3 | Ką gaunate (3–5 konkretūs rezultatai / deliverables) |
| 4 | Kaip vyksta (fazės su savaičių žymėmis) |
| 5 | „Tai NĖRA / Tai YRA" kontrastas |
| 6 | Metrikos ir GATE — kaip matuosime |
| 7 | Susijęs atvejis |
| 8 | DUK (4–6 klausimai, su `FAQPage` schema) |
| 9 | CTA + kitas / ankstesnis etapas |

### 3.3. `T4 Case` — inžinerinė ataskaita

| # | Sekcija |
|---|---|
| 1 | Hero: sektorius · organizacijos dydis · procesas · pagrindinė metrika |
| 2 | Verslo kliūtis — baseline ir nuostoliai skaičiais |
| 3 | Proceso perprojektavimas — kaip pasikeitė sprendimų taškai |
| 4 | DI integracija — kas techniškai pastatyta |
| 5 | Human–AI sinergija — atsakomybių matrica |
| 6 | Rezultatas — baseline vs. po, ROI formulės pritaikymas |
| 7 | Valdysena ir kas toliau (GATE sprendimas) |

---

## 4. Semantiniai klasteriai (SEO / LLMO)

Kiekvienas produkto puslapis yra pilonas; įžvalgos yra palaikantis turinys, kuris rodo į pilonus.

| Klasteris | Pilonas | Palaikančios įžvalgos |
|---|---|---|
| **DI ROI ir vertės matavimas** | `/sprendimai/transformation-sprint` | „Kaip vertinti tikrą DI ROI" · „Sutaupytos valandos nėra ROI" · „Kaip užfiksuoti baseline prieš DI projektą" |
| **DI valdysena** | `/filosofija/atsakomybes` | „NIST AI RMF vidutiniam verslui" · „ES DI aktas: ką reiškia LT verslui" · „Human-in-the-loop praktikoje" |
| **Procesų perprojektavimas** | `/sprendimai/ai-os-build` | „Kodėl DI ant chaoso duoda greitesnį chaosą" · „5 filtrai: ELIMINATE → HUMAN" |
| **Portfelio valdymas ir plėtra** | `/sprendimai/ai-portfolio-partnership` | „Kodėl 67 % DI pilotų nepasiekia plėtros" · „Vėliavnešio įgalinimas" |
| **Fractional CAIO** | `/sprendimai/fractional-caio` | „Fractional CAIO vidutinio dydžio organizacijoje" · „Kada reikia DI vadovo, o kada ne" |
| **Sektoriniai naudojimo atvejai** | `/sektoriai/{x}` | „DI gamybos planavime" · „DI profesinių paslaugų maržoje" |

**Schema.org žymėjimas:**
- `/` → `Organization` + `WebSite` + `SearchAction`
- `/sprendimai/*` → `Service` + `Offer` + `FAQPage`
- `/atvejai/*` → `Article` + `CreativeWork`
- `/izvalgos/*` → `Article` + `Person` (autorius)
- visi vidiniai → `BreadcrumbList`

---

## 5. Nukreipimai iš senos svetainės (301)

| Senas URL | Naujas URL |
|---|---|
| `/produktai` ir panašūs | `/sprendimai` |
| `/didziosios-di-dirbtuves` | `/akademija/didziosios-di-dirbtuves` |
| `/mokymai-imonems` | `/akademija/imonems` |
| `/savarankiskas-tobulejimas` | `/akademija/savarankiskai` |
| `/di-iq-testas` | `/vertinimas` |
| diagnostikos įrankiai (svetainių / delegavimo / pelningumo) | `/vertinimas` arba išlaikyti kaip lead magnetus po `/irankiai/*` |
| `/kontaktai` | `/kontaktai` |
| blogo įrašai | `/izvalgos/{slug}` arba `/izvalgos` |

> **Veiksmas prieš paleidimą:** eksportuoti visą esamą `dipa.lt` URL sąrašą (Search Console + sitemap) ir sudaryti 1:1 nukreipimų lentelę. Nemokami diagnostikos įrankiai turi organinį srautą — jų neprarasti.

---

## 6. Footer struktūra (GlobalNodes modelis)

Keturios kolonos + apatinė juosta:

| Rašykite mums | Sprendimai | Įmonė | Prenumerata |
|---|---|---|---|
| Verslo klausimais → el. paštas | Transformation Sprint | Apie DIPA | Įžvalgos į el. paštą |
| Karjera → el. paštas | AI Portfolio Partnership | Client Zero | [laukas] [Prenumeruoti] |
| Vilnius, Lietuva | Fractional CAIO | Įžvalgos | |
| LinkedIn | Akademija | Kontaktai | |
| | Visi sprendimai → | Karjera | |

**Apatinė juosta:** `DIPA` · įmonės kodas · PVM kodas · `© 2026` · Privatumo politika · Slapukai · Valdysenos pareiškimas (BDAR / ES DI aktas)
