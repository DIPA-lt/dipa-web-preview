# DIPA.LT — Restruktūrizacija v6

**Data:** 2026-08-20
**Pagrindas:** `AI_diagnostika_v3_QA.pptx` (klientinė diagnostikos seka) + MTD v0.2 + OI white paper v0.1 (tik kaip vidinis filosofinis sluoksnis)

---

## 1. Kas pasikeitė ir kodėl

Ankstesnė svetainės ašis buvo **ALIGN → TRANSFORM → SCALE**. Tai delivery metodikos kalba. Klientinė diagnostikos seka (CORE 01–08) kalba kitaip:

> **Žmogus → Komanda → Procesas → Verslas**

Tai yra kelias, kuriuo DIPA jau dvejus metus eina pati, ir kuriuo kvalifikuojamas kiekvienas pokalbis. Svetainė dabar atitinka pardavimo naratyvą, o ne atvirkščiai.

ALIGN / TRANSFORM / SCALE neištrinami — jie lieka **vidiniu delivery sluoksniu** (I–VI etapai, Sprinto 8 fazės). Viešoje navigacijoje jie nebėra pirminė architektūra. Taip uždaroma spraga, kurią patys dokumentai vadina P1-2: *du skirtingi modeliai vienu pavadinimu*.

---

## 2. Ko sąmoningai NEperkėlėme į svetainę

Abu Word dokumentai yra **juodraščiai**, pažymėti „nenaudojama svetainei / klientinei medžiagai“. Todėl:

| Terminas / idėja | Statusas dokumentuose | Svetainėje |
|---|---|---|
| Organizational Intelligence Model™ | Nepatvirtinta kategorija | **Nenaudojama** |
| Learning Velocity kaip North Star | Prieštarauja Core Strategy §27 | **Nenaudojama** |
| AI autonomijos lygiai A1–A5 | Iliustracija, nėra teisinės patikros | **Nenaudojama** |
| LEVEL 1–4 angliški produktų vardai | Nėra susiejimo su I–VI | Viešai — tik **Žmogus / Komanda / Procesas / Verslas** |
| „Padidinsime organizacijos intelektą“ | Pažadas be matavimo (P1-3) | **Nenaudojama** |

Filosofiją naudojame kaip **mąstymo skirtumą**, ne kaip kategoriją:

> Rinka: AI → automatizuoja užduotį → greičiau → produktyvumas
> DIPA: signalai → įžvalgos → geresni sprendimai → geresni procesai → verslo vertė

---

## 3. Nauja vieša architektūra

```
ŽMOGUS          KOMANDA              PROCESAS                 VERSLAS
1 etapas        2 etapas             3 etapas                 4 etapas
Vadovų AI       Komandos AI          Redesign + Sprint        Kryptis,
produktyvumas   darbo standartas     (flagmanas, 90 d.)       ne pažadas
999 € / vieta   pagal apimtį
```

**Pasiūlymai paimti iš diagnostikos deck'o** (skaidrės 20–22), ne iš v5 aštuonių produktų kolekcijos. Aštuoni GlobalNodes stiliaus SKU buvo perteklius tam, kaip DIPA iš tikrųjų parduoda.

**4 etapas viešai vadinamas kryptimi**, ne produktu. Deck'as tai sako tiesiai: „kryptis, ne šiandienos pažadas“.

---

## 4. Client Zero — pirmieji tikri skaičiai

Iš diagnostikos deck'o (skaidrės 15–16), DIPA Revenue AI OS:

| Rodiklis | Buvo | Yra |
|---|---|---|
| Kvalifikavimo skambutis | 20 min | 5 min |
| Susitikimo trukmė | 1–1,5 val. | 30–40 min |
| Laimėtų sandorių su decision maker | — | 91 % (įžvalga pakeitė kriterijus) |

DIPA pačios kelias: 1–2 etapai **praėti**, 3 **vykdomas**, 4 — **kryptis**. Tai dabar vieša Client Zero būsena.

---

## 5. Dizainas

Šviesus enterprise paviršius (Bain / McKinsey), ne tamsus GlobalNodes klonas.

| Žetonas | v5 tamsus | v6 šviesus |
|---|---|---|
| Foną | `#08080C` | `#FFFFFF` |
| Tekstas | baltas | `#0A1140` |
| Akcentas | `#6E5CFF` ant tamsos | `#1C0BFF` ant balto |
| Metrikos | geltona | brand mėlyna (geltona ant balto neskaitoma) |
| Footer | tamsus kaip puslapis | tamsus navy `#0A1140` — vienintelis tamsus blokas |

Struktūrinė gramatika (hairline, vienas serifinis akcentas, nulis gradientų) išlieka.

---

## 6. Kas vis dar atidaryta

- Kainos: 999 € vadovams — iš deck'o, laikoma klientine. Sprinto 7–15 k € vis dar nepatvirtinta.
- 4 etapo komercinis produktas — nekuriamas, kol nėra 3 etapo kliento įrodymo.
- Organizational Intelligence kaip kategorija — sprendžia Igoris ir Mantas, gruodžio Go/No-Go. Svetainė šio sprendimo nelaukia ir jo neaplenkia.
