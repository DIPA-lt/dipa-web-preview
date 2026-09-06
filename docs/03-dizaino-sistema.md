# DIPA.LT — Dizaino sistema

**Versija:** 1.0 · 2026-08-19
**Pagrindas:** `globalnodes.com` Webflow dizaino sistema (išgauta iš `globalnodesweb.webflow.shared.css`) + DIPA brando spalvos

---

## 1. Ką tiksliai naudoja GlobalNodes

Išgauta iš gyvos jų CSS (`:root`):

```css
:root {
  --_globalnodes-brand---color-white:      #fff;
  --_globalnodes-brand---color-bg-dark:    #0a0a0f;
  --_globalnodes-brand---color-card-bg:    #13131c;
  --_globalnodes-brand---color-border:     #2a2a3a;
  --_globalnodes-brand---color-text-muted: #8b8b9a;
  --_globalnodes-brand---color-accent:     #7b5cfa;
}
```

**Šriftai:** `Inter, sans-serif` (314 deklaracijos) + `Instrument Serif, sans-serif` (58 deklaracijos, beveik visos su `font-style: italic`).

**Kritinė įžvalga:** visos 58 `Instrument Serif` deklaracijos yra `*-accent`, `*-italic`, `*-em` klasėse — `hero_h1-accent`, `pillars_heading-accent`, `thesis_heading-text`, `industries_heading-accent`, `contact_heading-accent`, `casestudy_accent`. Tai reiškia, kad **serifas niekada nenaudojamas visai antraštei** — tik vienam frazės fragmentui joje. Tai visos svetainės tipografinis parašas.

Pavyzdys iš jų herojaus:
> Reliable, **_Integrated AI_** In Production

Visa paletė yra **6 spalvos**. Nulis gradientų. Vienas akcentas.

---

## 2. DIPA adaptacija

DIPA brandas turi `#1C0BFF` (elektrinė mėlyna) ir `#EDE939` (geltona) iš v4 prototipo. `#1C0BFF` funkciškai atitinka GlobalNodes `#7b5cfa` — abu yra vienas sodrus akcentas ant beveik juodo fono. Todėl perimame architektūrą, o spalvą keičiame į DIPA.

**Problema:** `#1C0BFF` ant `#08080C` turi kontrastą ~2.4:1 — nepakankamą tekstui. Todėl akcentas turi du variantus: **grynas** (užpildymams, mygtukams, kur tekstas baltas ant jo) ir **pašviesintas** (tekstui, nuorodoms, kraštinėms ant tamsos).

### 2.1. Spalvų žetonai

```css
:root {
  /* Pagrindas */
  --bg:            #08080C;   /* puslapio fonas */
  --surface:       #101017;   /* kortelės, panelės */
  --surface-2:     #16161F;   /* pakelta kortelė, hover */
  --line:          #22222D;   /* hairline kraštinės — pagrindinis struktūros įrankis */
  --line-strong:   #34344A;   /* aktyvi / akcentuota kraštinė */

  /* Tekstas */
  --ink:           #FFFFFF;   /* antraštės */
  --ink-2:         #E4E4EC;   /* pagrindinis tekstas */
  --muted:         #8B8B9A;   /* palaikomasis tekstas (GlobalNodes reikšmė) */
  --muted-2:       #5E5E70;   /* metaduomenys, eyebrow */

  /* Akcentas — DIPA elektrinė mėlyna */
  --brand:         #1C0BFF;   /* užpildymai, mygtukai */
  --brand-lift:    #6E5CFF;   /* tekstas, nuorodos, kraštinės ant tamsos */
  --brand-dim:     rgba(28, 11, 255, 0.14);  /* subtilūs fonai, žymės */

  /* Signalinis akcentas — DIPA geltona. Tik metrikoms ir GATE. */
  --signal:        #EDE939;
  --signal-dim:    rgba(237, 233, 57, 0.12);

  /* Statusai (atitikties čipams) */
  --status-live:   #3ECF8E;   /* VEIKIA GAMYBOJE */
  --status-audit:  #EDE939;   /* AUDITUOJAMA */
  --status-plan:   #8B8B9A;   /* PLANE */
  --warn:          #E4572E;   /* STOP, rizika */
}
```

**Naudojimo taisyklės:**
- `--signal` (geltona) atsiranda **ne daugiau nei 3 kartus viename puslapyje**. Ji priklauso skaičiams ir GATE žymėms. Jei geltona yra visur, ji nieko nesignalizuoja.
- `--brand` niekada nenaudojamas dideliems plotams. Tik mygtukams, aktyvioms žymėms, 1 px akcentinėms linijoms.
- Struktūrą kuria `--line`, ne šešėliai. Šešėlis leidžiamas tik dropdown'ui.
- **Nulis gradientų.** Vienintelė leistina išimtis — `radial-gradient` herojaus fone iki 6 % opacity.

### 2.2. Šviesi tema

**Rekomendacija: nedaryti.** GlobalNodes neturi šviesios temos, ir tai yra dalis autoriteto. Tamsi paletė + hairline gridas + serifiniai akcentai yra vientisas signalas. Šviesi tema šį signalą suskaldytų ir padvigubintų QA apimtį.

Jei šviesios temos vis tiek reikia (pvz., PDF eksportui ar pasiūlymams), ji laikoma **atskiru dokumentų stiliumi**, ne svetainės tema.

---

## 3. Tipografija

### 3.1. Šriftai

| Vaidmuo | Šriftas | Svoriai | Pastaba |
|---|---|---|---|
| Viskas | **Inter** | 400, 500, 600 | `latin`, `latin-ext` — LT diakritika ✅ |
| Antraščių akcentai | **Instrument Serif** *italic* | 400 italic | `latin`, `latin-ext` — LT diakritika ✅ (patikrinta) |
| Formulės, kodas, baseline reikšmės | `ui-monospace, "SF Mono", Menlo, monospace` | — | sisteminis |

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@1&display=swap" rel="stylesheet">
```

### 3.2. Skalė

| Žetonas | Dydis | Line-height | Letter-spacing | Svoris | Naudojimas |
|---|---|---|---|---|---|
| `display` | `clamp(2.75rem, 6vw, 5rem)` | 1.04 | −0.035em | 500 | Herojaus H1 |
| `h1` | `clamp(2.25rem, 4vw, 3.5rem)` | 1.08 | −0.03em | 500 | Vidinių puslapių H1 |
| `h2` | `clamp(1.75rem, 3vw, 2.75rem)` | 1.14 | −0.025em | 500 | Sekcijų antraštės |
| `h3` | `1.25rem` | 1.3 | −0.015em | 600 | Kortelių antraštės |
| `lead` | `1.125rem` | 1.6 | 0 | 400 | Paantraštės, max 62ch |
| `body` | `1rem` | 1.65 | 0 | 400 | Tekstas, max 68ch |
| `small` | `0.875rem` | 1.55 | 0 | 400 | Metaduomenys |
| `eyebrow` | `0.6875rem` | 1.2 | **0.18em** | 600 | UPPERCASE sekcijų žymės |
| `metric` | `clamp(2.5rem, 5vw, 4rem)` | 1 | −0.04em | 500 | Skaičiai (tabular-nums) |
| `mono` | `0.8125rem` | 1.5 | 0 | 400 | Formulės, baseline |

### 3.3. Serifinio akcento taisyklė (svarbiausia)

Kiekviena `display`, `h1` ir `h2` antraštė turi **lygiai vieną** `Instrument Serif italic` fragmentą.

```html
<h1 class="display">
  Išmatuojamas DI <em class="accent">veikiančiuose procesuose</em>.
</h1>
```

```css
.accent {
  font-family: "Instrument Serif", Georgia, serif;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -0.01em;   /* serifas siauresnis — kompensuojame */
  color: var(--brand-lift);  /* arba var(--ink), jei mėlyna per stipru */
}
```

**Kurį fragmentą akcentuoti:** tą, kuris nešą diferenciaciją, ne tą, kuris nešą temą.
- ✅ „Išmatuojamas DI *veikiančiuose procesuose*." — akcentas ant „kur"
- ❌ „*Išmatuojamas DI* veikiančiuose procesuose." — akcentas ant to, ką sako visi

**Lietuvių kalbos rizika:** ilgi lietuviški žodžiai su diakritika italic serifu gali atrodyti tankiau. Akcentui rinktis 2–4 žodžių frazes, ne pavienius ilgus žodžius („perprojektuojame" italic — sunku skaityti; „*kas iš tikrųjų veikia*" — gerai).

---

## 4. Erdvė ir gridas

```css
--container:  1240px;
--gutter:     clamp(20px, 4vw, 40px);
--section:    clamp(72px, 9vw, 128px);   /* vertikalus sekcijos padding */
--section-sm: clamp(48px, 6vw, 80px);
--radius:     4px;    /* kortelės, mygtukai — beveik kvadratu, ne apvalu */
--radius-pill: 999px; /* tik čipams ir žymėms */
--nav-h:      74px;
--util-h:     36px;
```

**12 stulpelių gridas.** Tipiniai išdėstymai:
- Sekcijos antraštė: 5 stulpeliai antraštė / 1 tarpas / 6 stulpeliai lead
- Kortelių tinklelis: 4 / 4 / 4 (3 kortelės), 3×4 (4 kortelės), 6 / 6 (2 kortelės)
- Turinio tekstas: 8 stulpeliai su 4 stulpelių šoniniu rail'u

**Hairline gridas — pagrindinis struktūros įrankis.** Kortelės neturi šešėlių ir tarpų — jos yra viena grid'o ląstelė su `1px solid var(--line)` kraštine, dalinama su gretima ląstele (`margin: -1px`). Tai duoda GlobalNodes „inžinerinės lentelės" įspūdį.

```css
.hairline-grid {
  display: grid;
  gap: 0;
  border: 1px solid var(--line);
}
.hairline-grid > * {
  padding: 32px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
```

---

## 5. Komponentų biblioteka

### 5.1. Mygtukai

| Variantas | Stilius | Naudojimas |
|---|---|---|
| `primary` | `bg: var(--brand)`, baltas tekstas, `radius: 4px`, `padding: 14px 24px`, `font-weight: 500` | Vienas per sekciją. „Pateikti užklausą" |
| `secondary` | permatomas, `1px solid var(--line-strong)`, `--ink` tekstas; hover → `border: var(--brand-lift)` | „DI brandos vertinimas" |
| `ghost` | tik tekstas + `→` strėlė, `--brand-lift`; hover → strėlė pasislenka 4px | Inline nuorodos „Skaityti atvejį →" |

**Jokių `border-radius: 999px` mygtukų.** Apvalūs mygtukai skaito kaip startuolis; 4 px skaito kaip inžinerija.

### 5.2. Eyebrow (sekcijos žymė)

```html
<div class="eyebrow"><span class="eyebrow-num">03</span> Metodologija</div>
```
`0.6875rem`, UPPERCASE, `0.18em` tracking, `--muted-2`. Numeris — `--brand-lift`.

### 5.3. Metrikos kortelė

```
┌────────────────────────────
│ 30–50 %                     ← metric, --signal, tabular-nums
│ sutrumpintas ciklo laikas   ← small, --muted
│ sudėtinguose procesuose     ← small, --muted-2
└────────────────────────────
```
Hairline grid ląstelė. Skaičius yra vienintelis geltonas elementas.

### 5.4. Numeruota principo/ramsčio panelė (GlobalNodes „Four pillars" modelis)

Kairėje sticky numeris `01`–`04` didelis, `--muted-2`, `opacity 0.35`. Dešinėje antraštė + aprašas + 2–3 subkompetencijos su hairline separatoriais. Desktop'e — sticky scroll, kur numeris keičiasi slenkant. Mobile'e — akordeonas.

### 5.5. Statuso čipas (atitikties juostai)

```html
<span class="chip chip--live">VEIKIA GAMYBOJE</span>
<span class="chip chip--audit">AUDITUOJAMA · 2026</span>
<span class="chip chip--plan">PLANE · 2027</span>
```
`radius: 999px`, `0.625rem`, UPPERCASE, `0.12em` tracking, `1px` kraštinė statuso spalva, fonas `statuso spalva @ 10 %`.

### 5.6. Etapo žymė

```html
<span class="stage stage--align">ALIGN · I–II ETAPAI</span>
```
Kvadratinė (`radius: 2px`), `--brand-dim` fonas, `--brand-lift` tekstas, `1px solid rgba(110,92,255,.28)`.

### 5.7. „NĖRA / YRA" kontrasto blokas

Dvi kolonos, hairline separatorius viduryje. Kairė: `--muted-2` tekstas, `✕` prefiksas, `--warn` ikonos spalva. Dešinė: `--ink` tekstas, `→` prefiksas, `--brand-lift`. Šis blokas yra DIPA pozicionavimo darbinis arklys — naudojamas 8 vietose.

### 5.8. ROI formulės blokas

Monospace, `--surface` fonas, `1px solid var(--line)`, `--brand-lift` kairinė 2 px kraštinė. Pliusai `--status-live`, minusai `--warn`. Wrap'inasi mobile'e.

### 5.9. Fazių laiko juosta (Sprint 8 etapų)

Horizontali desktop'e (8 hairline ląstelės su savaičių žymėmis viršuje), vertikali mobile'e. Paskutinė ląstelė (`GATE`) turi `--signal` kraštinę — tai vizualiai signalizuoja sprendimo tašką.

---

## 6. Judesys

GlobalNodes judesys yra minimalus ir tai tikslinga.

| Elementas | Animacija |
|---|---|
| Sekcijos įėjimas | `opacity 0→1`, `translateY 16px→0`, `600ms cubic-bezier(.16,1,.3,1)`, stagger 60ms |
| Skaičių skaitikliai | **Ne.** Animuoti skaitikliai yra dabartinės `dipa.lt` problema (`0 metų`, `0 %`) — jie skaito kaip rinkodara, ne kaip faktas. Skaičius rodomas iš karto. |
| Mygtuko hover | `background` / `border-color` 160ms |
| Ghost nuorodos strėlė | `translateX(4px)` 160ms |
| Kortelės hover | `border-color: var(--line)` → `var(--line-strong)`, be `transform`, be `scale` |
| Ramsčių sticky scroll | `position: sticky` + `IntersectionObserver` numerio keitimui |
| Sektorių karuselė | `scroll-snap-type: x mandatory`, be autoplay |

`@media (prefers-reduced-motion: reduce)` — visos animacijos į `0ms`.

---

## 7. Vaizdinė medžiaga

**Jokių stock fotografijų. Jokių 3D robotų. Jokių neuroninių tinklų iliustracijų.**

| Tipas | Naudojimas |
|---|---|
| **Inline SVG diagramos** | Transformacijos kelias, proceso žemėlapiai, Human–AI atsakomybių matrica. Naudoja `currentColor` ir dizaino žetonus. Tai pagrindinė vizualinė medžiaga. |
| **Hairline gridų tekstūra** | Herojaus fonas: `1px` SVG pattern, `--line` spalva, 6 % opacity |
| **Komandos portretai** | Vienodas apdorojimas: nespalvotas arba vienspalvis su `--brand` atspalviu, vienodas kadravimas, tamsus fonas |
| **Klientų logotipai** | Vienspalviai `--muted` SVG, vienodas optinis dydis, hover → `--ink` |
| **Duomenų vizualizacijos** | Baseline vs. rezultatas stulpelinės diagramos atvejuose. Inline SVG, be bibliotekų. |

---

## 8. Prieinamumas ir našumas

**Prieinamumas (WCAG 2.2 AA):**
- `--muted` (`#8B8B9A`) ant `--bg` (`#08080C`) = 6.4:1 ✅
- `--muted-2` (`#5E5E70`) ant `--bg` = 3.3:1 — **tik ≥ 18px arba ne-tekstui**
- `--brand` (`#1C0BFF`) ant `--bg` = 2.4:1 — **niekada tekstui**; tekstui `--brand-lift` (`#6E5CFF`) = 4.6:1 ✅
- `--signal` (`#EDE939`) ant `--bg` = 14.9:1 ✅
- Fokuso žiedas: `2px solid var(--brand-lift)`, `outline-offset: 2px` — matomas visur
- Klaviatūros navigacija per mega-dropdown; `aria-expanded`, `aria-current="page"`
- Serifiniai italic akcentai — `<em>`, ne `<i>` (semantinis akcentas)
- Lietuvių kalba: `<html lang="lt">`, EN versija `lang="en"`, `hreflang` alternatyvos

**Našumas (biudžetai):**
- LCP < 1.8 s (4G), CLS < 0.05, INP < 150 ms
- Šriftai: `display=swap` + `preconnect`; tik 4 failai (Inter 400/500/600 + Instrument Serif italic 400)
- Nulis JS bibliotekų animacijai — `IntersectionObserver` + CSS
- Nuotraukos: `next/image`, AVIF/WebP, `sizes` visur
- JS biudžetas: < 120 KB gzip pirmam maršrutui

---

## 9. Tailwind konfigūracija

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx}", "./content/**/*.mdx"],
  theme: {
    extend: {
      colors: {
        bg: "#08080C",
        surface: { DEFAULT: "#101017", 2: "#16161F" },
        line: { DEFAULT: "#22222D", strong: "#34344A" },
        ink: { DEFAULT: "#FFFFFF", 2: "#E4E4EC" },
        muted: { DEFAULT: "#8B8B9A", 2: "#5E5E70" },
        brand: { DEFAULT: "#1C0BFF", lift: "#6E5CFF" },
        signal: "#EDE939",
        status: { live: "#3ECF8E", audit: "#EDE939", plan: "#8B8B9A" },
        warn: "#E4572E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        mono: ["ui-monospace", "SF Mono", "Menlo", "monospace"],
      },
      fontSize: {
        eyebrow: ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.18em", fontWeight: "600" }],
        display: ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.04", letterSpacing: "-0.035em" }],
        metric:  ["clamp(2.5rem, 5vw, 4rem)",  { lineHeight: "1",    letterSpacing: "-0.04em" }],
      },
      maxWidth: { container: "1240px", prose: "68ch", lead: "62ch" },
      borderRadius: { DEFAULT: "4px" },
      spacing: { section: "clamp(72px, 9vw, 128px)", "section-sm": "clamp(48px, 6vw, 80px)" },
      transitionTimingFunction: { out: "cubic-bezier(.16,1,.3,1)" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
```

---

## 10. Ko nedaryti (santrauka)

| ❌ | Kodėl |
|---|---|
| Gradientai | GlobalNodes autoritetas kyla iš plokščių paviršių ir linijų |
| Animuoti skaičių skaitikliai | Dabartinės `dipa.lt` problema — skaito kaip rinkodara |
| Apvalūs (`pill`) mygtukai | Skaito kaip SaaS startuolis |
| Stock foto su žmonėmis prie kompiuterių | Nulinė informacinė vertė |
| Šviesi tema | Skaldo vientisą signalą, dvigubina QA |
| Daugiau nei vienas serifinis akcentas antraštėje | Sugriauna tipografinį parašą |
| Geltona daugiau nei 3× puslapyje | Nustoja signalizuoti |
| Kortelių šešėliai | Struktūrą kuria hairline linijos |
| „Susisiekite" / „Palikite užklausą" CTA | Kiekvienas CTA turi įvardinti rezultatą |
| Prekių ženklai herojuje („ChatGPT", „Claude") | Parduodame organizacinį gebėjimą, ne platformas |
