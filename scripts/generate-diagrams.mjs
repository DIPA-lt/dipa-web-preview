/**
 * Generate DIPA website diagrams with Nano Banana Pro
 * (same Google Gemini image stack as eimanto_transformacija).
 *
 * Usage:
 *   GEMINI_API_KEY=... node scripts/generate-diagrams.mjs
 *   node scripts/generate-diagrams.mjs path-four-stages.png
 *   FORCE=1 node scripts/generate-diagrams.mjs
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "prototipas", "img");
mkdirSync(OUT, { recursive: true });

function loadKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
  for (const p of [
    join(ROOT, ".env"),
    "/Users/mac/Documents/eimanto_transformacija/.env",
  ]) {
    if (!existsSync(p)) continue;
    const m = readFileSync(p, "utf8").match(/^GEMINI_API_KEY=(.+)$/m);
    if (m) return m[1].trim();
  }
  return "";
}

const API_KEY = loadKey();
if (!API_KEY) {
  console.error("GEMINI_API_KEY not found. Set it or keep it in eimanto_transformacija/.env");
  process.exit(1);
}

const MODELS = [
  "gemini-3-pro-image-preview",
  "gemini-3-pro-image",
  "gemini-2.5-flash-image",
];

const STYLE = `Premium McKinsey / Bain editorial infographic for a light enterprise website.
Flat vector, hairline geometry, lots of white space. Background exactly #FFFFFF.
Palette only: ink navy #0A1140, electric blue #1C0BFF, light gray lines #E4E5EB, pale surface #F5F6F8, muted gray #8A8A96, rare rust #C43B16 for risk.
No gradients, no 3D, no drop shadows, no photoreal people, no stock-photo faces, no logos, no watermarks, no mock UI chrome.
Typography: clean grotesque sans-serif (Inter-like), short labels only. One italic serif word allowed as an accent, never a paragraph.
Composition must read at website width: large nodes, thick enough strokes, generous padding. Looks like GlobalNodes / DIPA: one idea, one page.`;

const DIAGRAMS = [
  {
    file: "path-four-stages.png",
    ratio: "16:9",
    alt: "Keturi etapai: Žmogus, Komanda, Procesas, Verslas",
    scene: `Horizontal four-stage transformation path diagram. Four equal rounded-rect cards in a row connected by thin arrows.
Card 01 PERSON — single geometric human silhouette, label "01 PERSON".
Card 02 TEAM — three silhouettes as one unit, label "02 TEAM".
Card 03 PROCESS — looping workflow nodes, label "03 PROCESS", electric-blue left border (this stage is active).
Card 04 BUSINESS — simple building / value diamond, label "04 BUSINESS", visually quieter.
Tiny caption under the row: "STOP is a valid GATE". No other sentences.`,
  },
  {
    file: "value-chain.png",
    ratio: "16:9",
    alt: "Signalai → įžvalgos → sprendimai → procesai → vertė",
    scene: `Left-to-right value chain of five nodes connected by thin arrows on white:
SIGNALS → INSIGHTS → DECISIONS → PROCESSES → VALUE.
Each node is a hairline box with a tiny geometric icon above the word.
The last node VALUE is filled electric blue with white type.
A crossed-out faded path below reads "TASK → SPEED → PRODUCTIVITY" to show the rejected market paradigm. Minimal, diagram not illustration.`,
  },
  {
    file: "three-tracks.png",
    ratio: "16:9",
    alt: "Trys kryptys: Transformacija, Produktai, Akademija",
    scene: `Three equal vertical columns like a website offerings row.
01 PATH — staircase of four steps, label "TRANSFORMATION".
02 TOOLS — six small tiles in two groups, label "PRODUCTS".
03 ACADEMY — open notebook / workshop table geometry, label "ACADEMY".
A thin horizontal line under all three labelled "ONE PATH". No people, no photos.`,
  },
  {
    file: "five-filters.png",
    ratio: "16:9",
    alt: "Penki filtrai: Eliminate, Simplify, AI, Human+AI, Human",
    scene: `Vertical funnel / cascade of five numbered filters, wide at top, narrow at bottom.
1 ELIMINATE — largest bar, most weight.
2 SIMPLIFY
3 AI
4 HUMAN + AI
5 HUMAN — smallest, reserved for irreversible decisions.
A side note arrow: "Automation is 3rd, not 1st". Clean editorial funnel, not a 3D cone.`,
  },
  {
    file: "sprint-phases.png",
    ratio: "16:9",
    alt: "Aštuonios sprinto fazės iki GATE",
    scene: `Ultra-wide eight-phase timeline as a single hairline strip.
Equal cells: FRAME, DIAGNOSE, REDESIGN, BUILD, ADOPT, VALIDATE, STANDARDIZE, GATE.
Each cell has a tiny week mark (1-2, 2-3, 4-6, 6-9, 9-11, 11-12, 12, DAY 90).
GATE cell is electric blue with white type and the words SCALE / CHANGE / STOP stacked.
A progress fill covers FRAME and DIAGNOSE only. No portraits.`,
  },
  {
    file: "gate-decision.png",
    ratio: "4:3",
    alt: "GATE sprendimas: SCALE, CHANGE, STOP",
    scene: `A decision triptych. Three vertical panels:
SCALE — upward step, electric blue.
CHANGE — sideways fork, navy outline.
STOP — a clean halt bar, rust #C43B16 used once.
Title at top: "GATE · DAY 90". Subtitle: "a number, not a slide".
Very sparse, poster-like, McKinsey decision page.`,
  },
  {
    file: "oppm-overlay.png",
    ratio: "16:9",
    alt: "OPPM kaip komunikacijos sluoksnis virš darbo sistemų",
    scene: `Two-layer architecture diagram.
Bottom layer: a muted gray cluster of boxes labelled Jira, CRM, Sheets — "WORK SYSTEMS".
Top layer: one crisp white page with a 12-cell matrix, labelled "OPPM · ONE PAGE".
A thin vertical arrow between layers labelled "OVERLAY, NOT REPLACEMENT".
Five chips along the page edge: TASKS, OBJECTIVES, TIME, COST, OWNERS.
No software logos, just word marks in sans type.`,
  },
  {
    file: "human-in-loop.png",
    ratio: "4:3",
    alt: "AI siūlo, žmogus sprendžia",
    scene: `Circular human-in-the-loop diagram.
Left node: geometric AI diamond labelled "AI PROPOSES".
Right node: human silhouette in a circle labelled "HUMAN DECIDES".
Bottom node: archive box labelled "LOGGED · REVERSIBLE".
Arrows form a loop. Center word: "ACCOUNTABILITY".
No faces, no robots with eyes, no sci-fi glow.`,
  },
  {
    file: "products-map.png",
    ratio: "16:9",
    alt: "Šeši produktai dviejose grupėse",
    scene: `Two-column product map.
Left column header "SMART PARTNERS": three stacked cards — Assistant, Data, Chatbot.
Right column header "AUTOMATED TOOLS": three stacked cards — LinkedIn, Calls, Dictaphone.
A small footer: "Integrate first · Measure second". Hairline cards, numbered 01-06. No screenshots.`,
  },
  {
    file: "academy-loop.png",
    ratio: "4:3",
    alt: "Akademijos metodas: užduotis, metodas, praktika, fiksavimas",
    scene: `Four-step cycle diagram: 1 TASK, 2 METHOD, 3 PRACTICE, 4 CAPTURE, then an arrow back to 1.
Each step is a square node on a circle. Center: "REAL WORK, NOT EXAMPLES".
Spare, instructional, no classroom photos, no laptops with readable UI.`,
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function generate(prompt, aspectRatio) {
  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseModalities: ["IMAGE"],
      imageConfig: { aspectRatio, imageSize: "2K" },
    },
  };

  let lastErr = "";
  for (const model of MODELS) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": API_KEY,
          },
          body: JSON.stringify(body),
        });
        if (!res.ok) {
          const txt = await res.text();
          lastErr = `${model} → HTTP ${res.status}: ${txt.slice(0, 280)}`;
          if (res.status === 404) break;
          if (res.status === 429 || res.status >= 500) {
            await sleep(attempt * 5000);
            continue;
          }
          break;
        }
        const json = await res.json();
        const parts = json?.candidates?.[0]?.content?.parts ?? [];
        for (const p of parts) {
          if (p?.inlineData?.data) return Buffer.from(p.inlineData.data, "base64");
        }
        lastErr = `${model} → no image in response`;
        await sleep(2000);
      } catch (e) {
        lastErr = `${model} → ${e.message}`;
        await sleep(attempt * 3000);
      }
    }
  }
  throw new Error(lastErr || "Unknown error");
}

const FORCE = process.env.FORCE === "1";
const only = process.argv.slice(2);

async function main() {
  console.log(`\nNano Banana — ${DIAGRAMS.length} DIPA diagrams\n`);
  let done = 0, skipped = 0, failed = 0;
  for (const d of DIAGRAMS) {
    if (only.length && !only.includes(d.file)) continue;
    const outPath = join(OUT, d.file);
    if (existsSync(outPath) && !FORCE && !only.length) {
      skipped++;
      console.log(`skip ${d.file}`);
      continue;
    }
    process.stdout.write(`${d.file} ... `);
    try {
      const buf = await generate(`${STYLE}\n\nDiagram:\n${d.scene}`, d.ratio);
      writeFileSync(outPath, buf);
      done++;
      console.log("ok");
      await sleep(1500);
    } catch (e) {
      failed++;
      console.log(`fail ${e.message}`);
    }
  }
  writeFileSync(
    join(OUT, "manifest.json"),
    JSON.stringify(
      DIAGRAMS.map((d) => ({ file: d.file, alt: d.alt, ratio: d.ratio })),
      null,
      2
    )
  );
  console.log(`\nDone. generated=${done} skipped=${skipped} failed=${failed}\n`);
  if (failed) process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
