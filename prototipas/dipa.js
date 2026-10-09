/* ============================================================
   DIPA prototipas · chrome, i18n, mobilus meniu, formos
   ============================================================ */

(function () {
  "use strict";

  /* Production API: DIPA OS website-form ingestion on Google Cloud Run.
     No secret is embedded here — the endpoint accepts allow-listed browser
     origins (CORS) and is protected server-side (honeypot, rate limit). */
  var DIPA_API = {
    base: "https://dipa-os-1067251466562.us-central1.run.app",
    path: "/api/leads/website",
    consentVersion: "2026-10",
    leadSchema: "lead-v1",
    assessmentSchema: "ai-readiness-v1"
  };

  /* Preview/staging hosts stay non-indexable; production (dipa.lt) is indexable. */
  var PREVIEW_HOSTS = /(^localhost$|^127\.0\.0\.1$|^0\.0\.0\.0$|^staging\.dipa\.lt$|\.github\.io$|\.pages\.dev$)/i;
  function isPreview() {
    return PREVIEW_HOSTS.test(location.hostname);
  }

  var SLUGS = {
    "kaip-dirbame": 1,
    "sprendimai": 1,
    "ai-produktyvumo-programa": 1,
    "transformation-sprint": 1,
    "rezultatai": 1,
    "apie-mus": 1,
    "diagnostika": 1,
    "kontaktai": 1,
    "privatumo-politika": 1,
    "slapuku-politika": 1
  };

  function pathParts() {
    var p = location.pathname.split("/").filter(Boolean);
    if (p.length && p[p.length - 1] === "index.html") p.pop();
    return p;
  }

  function pageSlug() {
    var p = pathParts();
    if (!p.length) return "";
    var last = p[p.length - 1];
    if (last === "en") return "";
    return SLUGS[last] ? last : "";
  }

  function root() {
    var p = pathParts();
    if (p.length && SLUGS[p[p.length - 1]]) p.pop();
    if (p.length && p[p.length - 1] === "en") p.pop();
    return p.length ? "/" + p.join("/") + "/" : "/";
  }

  var IS_EN = /\/en(?:\/|$)/.test(location.pathname);

  function href(slug) {
    return root() + (IS_EN ? "en/" : "") + (slug ? slug + "/" : "");
  }

  function otherLangHref() {
    var slug = pageSlug();
    var base = root();
    if (IS_EN) return base + (slug ? slug + "/" : "");
    return base + "en/" + (slug ? slug + "/" : "");
  }

  var LOGO =
    '<svg viewBox="0 0 492 160" fill="none" aria-hidden="true">' +
    '<g stroke="currentColor" stroke-width="22" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M30 39h63a47 47 0 0 1 0 94H30"/>' +
    '<path d="M185.5 39v94"/>' +
    '<path d="M236 133V89h81a18 18 0 0 0 18-18V57a18 18 0 0 0-18-18H236"/>' +
    '<path d="M348.5 133 386 56A17 17 0 0 1 420 56L456.5 133"/>' +
    "</g>" +
    '<path fill="currentColor" d="M19 86 89 75v22Z"/>' +
    "</svg>";

  var COPY = IS_EN
    ? {
        proto: "Prototype v7 · measurable Human + AI work change",
        assess: "AI value diagnostic",
        client0: "Results",
        path: "How we work",
        cta: "Find the biggest AI value opportunity",
        cookiesSettings: "Cookie settings",
        menu: "Menu",
        close: "Close",
        write: "Write to us",
        biz: "Business enquiries →",
        jobs: "Careers →",
        city: "Vilnius, Lithuania",
        company: "Company",
        catalog: "Solutions",
        legalName: "UAB \u201CImpact Solutions Partners\u201D",
        legalCode: "Company code 305878229",
        legalAddr: "P. Vileišio g. 24-16, Vilnius, Lithuania",
        privacy: "Privacy policy",
        cookies: "Cookie policy"
      }
    : {
        proto: "Prototipas v7 · Pamatuojamas žmogaus ir DI darbo pokytis",
        assess: "DI vertės diagnostika",
        client0: "Rezultatai",
        path: "Kaip dirbame",
        cta: "Rasti didžiausią DI vertės galimybę",
        cookiesSettings: "Slapukų nustatymai",
        menu: "Meniu",
        close: "Uždaryti",
        write: "Rašykite mums",
        biz: "Verslo klausimais →",
        jobs: "Karjera →",
        city: "Vilnius, Lietuva",
        company: "Organizacija",
        catalog: "Sprendimai",
        legalName: "UAB „Impact Solutions Partners\u201C",
        legalCode: "Įmonės kodas 305878229",
        legalAddr: "P. Vileišio g. 24-16, Vilnius, Lietuva",
        privacy: "Privatumo politika",
        cookies: "Slapukų politika"
      };

  var NAV = IS_EN
    ? [
        { label: "How we work", href: href("kaip-dirbame"), slug: "kaip-dirbame" },
        {
          label: "Solutions",
          href: href("sprendimai"),
          slug: "sprendimai",
          cols: [
            {
              title: "By problem",
              items: [
                { label: "AI productivity programme", href: href("ai-produktyvumo-programa"), strong: true },
                { label: "Team AI working standard", href: href("sprendimai") + "#team" }
              ]
            },
            {
              title: "Process and business",
              items: [
                { label: "Human + AI processes", href: href("sprendimai") + "#process", strong: true },
                { label: "AI business opportunities", href: href("sprendimai") + "#business" }
              ],
              more: { label: "All solutions →", href: href("sprendimai") }
            }
          ]
        },
        { label: "Transformation Sprint", href: href("transformation-sprint"), slug: "transformation-sprint" },
        { label: "Results", href: href("rezultatai"), slug: "rezultatai" },
        { label: "About DIPA", href: href("apie-mus"), slug: "apie-mus" }
      ]
    : [
        { label: "Kaip dirbame", href: href("kaip-dirbame"), slug: "kaip-dirbame" },
        {
          label: "Sprendimai",
          href: href("sprendimai"),
          slug: "sprendimai",
          cols: [
            {
              title: "Pagal problemą",
              items: [
                { label: "DI produktyvumo programa", href: href("ai-produktyvumo-programa"), strong: true },
                { label: "Komandos DI darbo standartas", href: href("sprendimai") + "#komanda" }
              ]
            },
            {
              title: "Procesas ir verslas",
              items: [
                { label: "Žmogaus ir DI procesai", href: href("sprendimai") + "#procesas", strong: true },
                { label: "DI verslo galimybės", href: href("sprendimai") + "#verslas" }
              ],
              more: { label: "Visi sprendimai →", href: href("sprendimai") }
            }
          ]
        },
        { label: "Transformation Sprint", href: href("transformation-sprint"), slug: "transformation-sprint" },
        { label: "Rezultatai", href: href("rezultatai"), slug: "rezultatai" },
        { label: "Apie DIPA", href: href("apie-mus"), slug: "apie-mus" }
      ];

  var FOOT_PATH = IS_EN
    ? [
        ["How we work", href("kaip-dirbame")],
        ["AI productivity programme", href("ai-produktyvumo-programa")],
        ["Team AI standard", href("sprendimai") + "#team"],
        ["Transformation Sprint", href("transformation-sprint")],
        ["AI business opportunities", href("sprendimai") + "#business"],
        ["All solutions →", href("sprendimai")]
      ]
    : [
        ["Kaip dirbame", href("kaip-dirbame")],
        ["DI produktyvumo programa", href("ai-produktyvumo-programa")],
        ["Komandos DI standartas", href("sprendimai") + "#komanda"],
        ["Transformation Sprint", href("transformation-sprint")],
        ["DI verslo galimybės", href("sprendimai") + "#verslas"],
        ["Visi sprendimai →", href("sprendimai")]
      ];

  var FOOT_CATALOG = IS_EN
    ? [
        ["AI productivity programme", href("ai-produktyvumo-programa")],
        ["Transformation Sprint", href("transformation-sprint")],
        ["AI value diagnostic", href("diagnostika")],
        ["Results", href("rezultatai")],
        ["Contact", href("kontaktai")]
      ]
    : [
        ["DI produktyvumo programa", href("ai-produktyvumo-programa")],
        ["Transformation Sprint", href("transformation-sprint")],
        ["DI vertės diagnostika", href("diagnostika")],
        ["Rezultatai", href("rezultatai")],
        ["Kontaktai", href("kontaktai")]
      ];

  var FOOT_CO = IS_EN
    ? [
        ["About DIPA", href("apie-mus")],
        ["How we work", href("kaip-dirbame")],
        ["Results", href("rezultatai")],
        ["AI value diagnostic", href("diagnostika")],
        ["Contact", href("kontaktai")]
      ]
    : [
        ["Apie DIPA", href("apie-mus")],
        ["Kaip dirbame", href("kaip-dirbame")],
        ["Rezultatai", href("rezultatai")],
        ["DI vertės diagnostika", href("diagnostika")],
        ["Kontaktai", href("kontaktai")]
      ];

  /* ============================================================
     DI brandos vertinimas · deterministinis (be LLM)
     12 klausimų · 4 dimensijos (Žmogus / Komanda / Procesas / Verslas)
     Atsakymai: 0–3 + „nežinau". Versija: ai-readiness-v1
     ============================================================ */
  var ASSESS = IS_EN
    ? {
        unknown: "Don’t know / not sure",
        dims: [
          { id: "human", label: "People" },
          { id: "team", label: "Team" },
          { id: "process", label: "Process" },
          { id: "business", label: "Business" }
        ],
        questions: [
          { id: "h1", dim: "human", q: "How do your people use AI at work today?", opts: ["Barely, or only a few enthusiasts", "Some use it for personal tasks, without any agreement", "Most use it regularly for specific tasks", "Use is tied to defined results for a role"] },
          { id: "h2", dim: "human", q: "Do you know what result you can require from a role when the work is done with AI?", opts: ["No, the expectation is undefined", "There is a general sense, but nothing written down", "It is defined for a few roles", "It is clear and measurable for most roles"] },
          { id: "h3", dim: "human", q: "Do you measure how AI changed the time, quality or volume of specific work?", opts: ["We do not measure it", "We judge it subjectively", "We measure a few tasks", "We regularly measure before/after"] },
          { id: "t1", dim: "team", q: "If your best AI user left tomorrow, would their way of working stay with the team?", opts: ["No, it would leave with them", "Some of it would remain informally", "The key steps are documented", "Yes — it is a team standard with an owner"] },
          { id: "t2", dim: "team", q: "Does the team share a single, written way to do core tasks with AI?", opts: ["Everyone works their own way", "We share tips informally", "There are a few shared templates", "There is a maintained standard and training"] },
          { id: "t3", dim: "team", q: "Is someone accountable for the quality and upkeep of your AI working practice?", opts: ["No one", "Someone looks after it informally", "Assigned, but without a clear mandate", "A clear owner with responsibility and a KPI"] },
          { id: "p1", dim: "process", q: "Do you have a process where it is clear what the human does, what AI does, and who approves the result?", opts: ["No", "Only partly, for one case", "One process has been redesigned", "Several processes with clear human sign-off"] },
          { id: "p2", dim: "process", q: "Has AI changed the process itself, or only sped up the old work?", opts: ["Only sped up the old work", "We adjusted a few steps", "We fully redesigned one process", "We redesign processes routinely"] },
          { id: "p3", dim: "process", q: "After a change, do you measure the result and decide to scale, stop or adjust?", opts: ["We do not measure the result", "We estimate it roughly", "We measure one pilot", "We have baseline → result → decision"] },
          { id: "b1", dim: "business", q: "Can you show which AI initiatives create business value?", opts: ["No, the value is unclear", "We sense it but cannot prove it", "Value is clear for a few initiatives", "Value is linked to P&L or a KPI"] },
          { id: "b2", dim: "business", q: "Does AI let you create new value for the client or a new offer — not only save time?", opts: ["Only internal time savings", "We are exploring options", "We are testing one new offer", "We have a working new source of value"] },
          { id: "b3", dim: "business", q: "Is your AI direction tied to strategy and leadership accountability?", opts: ["No, these are isolated initiatives", "There is interest from leadership", "There is a plan, but no clear metrics", "There is a strategy, an owner and metrics"] }
        ],
        bands: [
          { max: 30, key: "individual", title: "Isolated experiments", desc: "AI is used irregularly and depends on individuals. The biggest value now is turning that use into measurable work for a role." },
          { max: 55, key: "team", title: "Team practice forming", desc: "You have strong users, but the practice is not yet a shared standard. The most valuable step is capturing the best way of working as a team standard." },
          { max: 78, key: "process", title: "Processes changing", desc: "The team has a practice, but processes are not redesigned everywhere. The most valuable step is redesigning one process to a measured result." },
          { max: 100, key: "business", title: "Business-model level", desc: "AI already changes your processes; the next step is turning the new way of working into new business value and scale." }
        ],
        routes: {
          human: { label: "AI productivity programme", href: href("ai-produktyvumo-programa"), kpi: "Time / quality / volume for one core role", action: "Pick one role and, for a week, measure the same work done with and without AI." },
          team: { label: "Team AI working standard", href: href("sprendimai") + "#team", kpi: "Share of tasks done to a shared standard", action: "Write down the method of your single best user and trial it across the whole team." },
          process: { label: "Transformation Sprint", href: href("transformation-sprint"), kpi: "Cycle time or error rate of the redesigned process", action: "Pick one expensive process and define what the human should do and what AI should do." },
          business: { label: "Transformation Sprint", href: href("transformation-sprint"), kpi: "Contribution of AI initiatives to margin or revenue", action: "Pick one initiative and tie it to a specific business metric." }
        },
        ui: {
          progress: function (n, t) { return "Question " + n + " of " + t; },
          start: "Start the assessment",
          resultTitle: "Your directional snapshot",
          overall: "Overall direction",
          byDim: "By dimension",
          gapTitle: "Biggest value gap now",
          kpi: "Suggested KPI",
          action: "A 30-day first step",
          route: "Rational next step",
          unknownWarn: "You answered “don’t know” several times. That lack of visibility is itself a finding — the first win is often simply making the current situation measurable.",
          disclaimer: "This is a directional snapshot, not a scientific benchmark or certification. It reflects your own answers.",
          leadIntro: "Want this snapshot and a short, specific interpretation by email? Leave your details — the result above is already yours.",
          retake: "Retake"
        }
      }
    : {
        unknown: "Nežinau / nesu tikras",
        dims: [
          { id: "human", label: "Žmogus" },
          { id: "team", label: "Komanda" },
          { id: "process", label: "Procesas" },
          { id: "business", label: "Verslas" }
        ],
        questions: [
          { id: "h1", dim: "human", q: "Kaip jūsų žmonės šiandien naudoja DI darbe?", opts: ["Beveik nenaudoja arba tik pavieniai entuziastai", "Dalis naudoja asmeninėms užduotims, be susitarimo", "Dauguma naudoja reguliariai konkrečiose užduotyse", "Naudojimas susietas su konkrečiais rolės rezultatais"] },
          { id: "h2", dim: "human", q: "Ar žinote, kokio rezultato galite reikalauti iš rolės, kai darbas atliekamas su DI?", opts: ["Ne, lūkestis neapibrėžtas", "Yra bendras jausmas, bet neužrašyta", "Kelioms rolėms lūkestis apibrėžtas", "Daugumai rolių aiškus ir pamatuojamas lūkestis"] },
          { id: "h3", dim: "human", q: "Ar matuojate, kaip DI pakeitė konkretaus darbo laiką, kokybę ar apimtį?", opts: ["Nematuojame", "Vertiname subjektyviai", "Matuojame kelias užduotis", "Reguliariai matuojame prieš ir po"] },
          { id: "t1", dim: "team", q: "Jei geriausias DI naudotojas rytoj išeitų, ar jo darbo būdas liktų komandai?", opts: ["Ne, išeitų kartu su juo", "Dalis žinių liktų neformaliai", "Pagrindiniai žingsniai aprašyti", "Taip — tai komandos standartas su savininku"] },
          { id: "t2", dim: "team", q: "Ar komanda turi bendrą, užrašytą būdą atlikti pagrindines užduotis su DI?", opts: ["Kiekvienas dirba savaip", "Dalijamės patarimais neformaliai", "Yra keli bendri šablonai", "Yra palaikomas standartas ir mokymas"] },
          { id: "t3", dim: "team", q: "Ar yra žmogus, atsakingas už DI darbo praktikos kokybę ir atnaujinimą?", opts: ["Nėra", "Neformaliai kažkas rūpinasi", "Paskirta, bet be aiškaus mandato", "Aiškus savininkas su atsakomybe ir KPI"] },
          { id: "p1", dim: "process", q: "Ar turite procesą, kuriame aišku, ką daro žmogus, ką — DI ir kas tvirtina rezultatą?", opts: ["Ne", "Tik iš dalies, vienam atvejui", "Vienas procesas perprojektuotas", "Keli procesai su aiškiu žmogaus patvirtinimu"] },
          { id: "p2", dim: "process", q: "Ar DI pakeitė patį procesą, ar tik pagreitino seną darbą?", opts: ["Tik pagreitino seną darbą", "Vietomis pakoregavome žingsnius", "Vieną procesą perprojektavome iš esmės", "Procesus perprojektuojame reguliariai"] },
          { id: "p3", dim: "process", q: "Ar po pakeitimo matuojate rezultatą ir sprendžiate, ar plėsti, stabdyti ar keisti?", opts: ["Nematuojame rezultato", "Vertiname apytiksliai", "Matuojame vieną pilotą", "Turime pradinę būklę → rezultatą → sprendimą"] },
          { id: "b1", dim: "business", q: "Ar galite parodyti, kurios DI iniciatyvos kuria verslo vertę?", opts: ["Ne, vertė neaiški", "Jaučiame, bet neįrodome", "Kelioms iniciatyvoms vertė aiški", "Vertė susieta su P&L ar KPI"] },
          { id: "b2", dim: "business", q: "Ar DI leidžia kurti naują vertę klientui ar naują pasiūlymą, ne tik taupyti laiką?", opts: ["Tik vidinis laiko taupymas", "Svarstome galimybes", "Bandome vieną naują pasiūlymą", "Turime veikiantį naują vertės šaltinį"] },
          { id: "b3", dim: "business", q: "Ar DI kryptis susieta su strategija ir vadovybės atsakomybe?", opts: ["Ne, tai pavienės iniciatyvos", "Yra interesas iš vadovybės", "Yra planas, bet be aiškių rodiklių", "Yra strategija, savininkas ir rodikliai"] }
        ],
        bands: [
          { max: 30, key: "individual", title: "Pavieniai bandymai", desc: "DI naudojamas nereguliariai ir priklauso nuo pavienių žmonių. Didžiausia vertė dabar — paversti tą naudojimą pamatuojamu rolės darbu." },
          { max: 55, key: "team", title: "Komandos praktika formuojasi", desc: "Yra stiprių naudotojų, bet praktika dar nėra bendras standartas. Vertingiausias žingsnis — užfiksuoti geriausią būdą kaip komandos standartą." },
          { max: 78, key: "process", title: "Procesai keičiami", desc: "Komanda turi praktiką, bet procesai perprojektuoti ne visur. Vertingiausias žingsnis — perprojektuoti vieną procesą iki pamatuoto rezultato." },
          { max: 100, key: "business", title: "Verslo modelio lygis", desc: "DI jau keičia jūsų procesus; kitas žingsnis — naują darbo modelį paversti nauja verslo verte ir mastu." }
        ],
        routes: {
          human: { label: "DI produktyvumo programa", href: href("ai-produktyvumo-programa"), kpi: "Vienos pagrindinės rolės laikas / kokybė / apimtis", action: "Pasirinkite vieną rolę ir savaitę matuokite tą patį darbą su DI ir be jo." },
          team: { label: "Komandos DI darbo standartas", href: href("sprendimai") + "#komanda", kpi: "Užduočių, atliekamų pagal bendrą standartą, dalis", action: "Užrašykite vieno geriausio naudotojo būdą ir išbandykite jį su visa komanda." },
          process: { label: "Transformation Sprint", href: href("transformation-sprint"), kpi: "Perprojektuoto proceso ciklo laikas arba klaidų dažnis", action: "Pasirinkite vieną brangų procesą ir aprašykite, ką turi daryti žmogus, ką — DI." },
          business: { label: "Transformation Sprint", href: href("transformation-sprint"), kpi: "DI iniciatyvų indėlis į maržą arba pajamas", action: "Pasirinkite vieną iniciatyvą ir susiekite ją su konkrečiu verslo rodikliu." }
        },
        ui: {
          progress: function (n, t) { return "Klausimas " + n + " iš " + t; },
          start: "Pradėti vertinimą",
          resultTitle: "Jūsų orientacinis vaizdas",
          overall: "Bendra kryptis",
          byDim: "Pagal dimensijas",
          gapTitle: "Didžiausia vertės spraga dabar",
          kpi: "Siūlomas KPI",
          action: "Pirmas žingsnis per 30 dienų",
          route: "Racionalus kitas žingsnis",
          unknownWarn: "Kelis kartus atsakėte \u201Enežinau\u201C. Pats šio matomumo trūkumas jau yra išvada — dažnai pirmas laimėjimas tiesiog yra padaryti dabartinę situaciją pamatuojamą.",
          disclaimer: "Tai orientacinis momentinis vaizdas, o ne mokslinis palyginimas ar sertifikatas. Jis atspindi jūsų pačių atsakymus.",
          leadIntro: "Norite šio vaizdo ir trumpo, konkretaus paaiškinimo el. paštu? Palikite kontaktus — rezultatas viršuje jau jūsų.",
          retake: "Vertinti iš naujo"
        }
      };

  /* Compute deterministic scores from an answers map {questionId: 0..3 | "u"}. */
  function scoreAssessment(answers) {
    var sums = {}, counts = {}, unknown = 0, answered = 0;
    ASSESS.dims.forEach(function (d) { sums[d.id] = 0; counts[d.id] = 0; });
    ASSESS.questions.forEach(function (q) {
      var a = answers[q.id];
      if (a === "u" || a === undefined || a === null) {
        if (a === "u") unknown++;
        return;
      }
      sums[q.dim] += a;
      counts[q.dim] += 1;
      answered++;
    });
    var dimScores = {};
    ASSESS.dims.forEach(function (d) {
      dimScores[d.id] = counts[d.id] ? Math.round((sums[d.id] / (counts[d.id] * 3)) * 100) : null;
    });
    var present = ASSESS.dims.map(function (d) { return dimScores[d.id]; }).filter(function (v) { return v !== null; });
    var overall = present.length ? Math.round(present.reduce(function (a, b) { return a + b; }, 0) / present.length) : 0;
    var band = ASSESS.bands[0];
    for (var i = 0; i < ASSESS.bands.length; i++) { if (overall <= ASSESS.bands[i].max) { band = ASSESS.bands[i]; break; } }
    // Biggest gap = lowest scored dimension (ties resolved by foundational order).
    var gap = ASSESS.dims[0].id, low = Infinity;
    ASSESS.dims.forEach(function (d) {
      var v = dimScores[d.id];
      if (v === null) return;
      if (v < low) { low = v; gap = d.id; }
    });
    return {
      overall: overall,
      band: band,
      dimScores: dimScores,
      gap: gap,
      unknown: unknown,
      answered: answered,
      route: ASSESS.routes[gap]
    };
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function linkList(items) {
    return items
      .map(function (i) {
        var t = i.strong ? "<b>" + esc(i.label) + "</b>" : esc(i.label);
        return '<a href="' + i.href + '">' + t + "</a>";
      })
      .join("");
  }

  function buildNav() {
    var current = pageSlug();
    var links = NAV.map(function (n) {
      if (!n.cols) {
        var cur = n.slug === current ? ' aria-current="page"' : "";
        return '<a href="' + n.href + '"' + cur + ">" + esc(n.label) + "</a>";
      }
      var cols = n.cols
        .map(function (c) {
          var h = '<div class="dcol"><h5>' + esc(c.title) + "</h5>" + linkList(c.items);
          if (c.title2) h += '<h5 class="mt">' + esc(c.title2) + "</h5>" + linkList(c.items2);
          if (c.more) {
            h +=
              '<h5 class="mt">&nbsp;</h5><a class="more" href="' +
              c.more.href +
              '">' +
              esc(c.more.label) +
              "</a>";
          }
          return h + "</div>";
        })
        .join("");
      var curDrop = n.slug === current ? ' aria-current="page"' : "";
      return (
        '<div class="navitem"><button aria-expanded="false"' +
        curDrop +
        ">" +
        esc(n.label) +
        ' <span aria-hidden="true">\u25be</span></button><div class="drop">' +
        cols +
        "</div></div>"
      );
    }).join("");

    var ltCur = IS_EN ? "" : ' aria-current="true"';
    var enCur = IS_EN ? ' aria-current="true"' : "";
    var here = href(pageSlug());
    var lang =
      '<span class="lang"><a href="' +
      (IS_EN ? otherLangHref() : here) +
      '"' +
      ltCur +
      ">LT</a><span>/</span><a href=\"" +
      (IS_EN ? here : otherLangHref()) +
      '"' +
      enCur +
      ">EN</a></span>";

    var assessHref = href("diagnostika");
    var c0Href = href("rezultatai");
    var pathHref = href("kaip-dirbame");
    var contactHref = href("diagnostika");
    var homeHref = href("");

    var drawerLinks = NAV.map(function (n) {
      var h = '<a href="' + n.href + '">' + esc(n.label) + "</a>";
      if (!n.cols) return h;
      return (
        h +
        n.cols
          .map(function (c) {
            var items = c.items.concat(c.items2 || []);
            return linkList(items).replace(/<a /g, '<a class="sub" ');
          })
          .join("")
      );
    }).join("");

    return (
      '<div class="util"><div class="wrap">' +
      '<a href="' +
      assessHref +
      '">' +
      esc(COPY.assess) +
      "</a>" +
      '<a href="' +
      c0Href +
      '">' +
      esc(COPY.client0) +
      "</a>" +
      '<a href="' +
      pathHref +
      '">' +
      esc(COPY.path) +
      "</a>" +
      lang +
      "</div></div>" +
      '<nav class="main"><div class="wrap">' +
      '<a class="logo" href="' +
      homeHref +
      '" aria-label="DIPA">' +
      LOGO +
      "</a>" +
      '<div class="navlinks">' +
      links +
      "</div>" +
      '<button class="burger" id="burger" aria-label="' +
      esc(COPY.menu) +
      '"><i></i><i></i><i></i></button>' +
      '<a class="btn btn-p navcta" href="' +
      contactHref +
      '">' +
      esc(COPY.cta) +
      "</a>" +
      "</div></nav>" +
      '<div class="drawer" id="drawer">' +
      '<button class="drawer-close" id="drawer-close">' +
      esc(COPY.close) +
      "</button>" +
      drawerLinks +
      '<a href="' +
      contactHref +
      '">' +
      esc(COPY.cta) +
      "</a>" +
      '<a href="' +
      otherLangHref() +
      '">' +
      (IS_EN ? "Lietuviškai" : "English") +
      "</a>" +
      "</div>"
    );
  }

  function buildFooter() {
    function col(title, items) {
      return (
        "<div><h5>" +
        esc(title) +
        "</h5>" +
        items
          .map(function (it, i) {
            var style = i === items.length - 1 ? ' style="color:#B8B4FF"' : "";
            return '<a href="' + it[1] + '"' + style + ">" + esc(it[0]) + "</a>";
          })
          .join("") +
        "</div>"
      );
    }
    var contact = href("kontaktai");
    var privacy = href("privatumo-politika");
    var cookies = href("slapuku-politika");
    return (
      '<footer><div class="wrap"><div class="fgrid">' +
      "<div><h5>" +
      esc(COPY.write) +
      "</h5>" +
      '<a href="' +
      contact +
      '">' +
      esc(COPY.biz) +
      "</a>" +
      '<a href="' +
      contact +
      '">' +
      esc(COPY.jobs) +
      "</a>" +
      '<p style="padding-top:14px;color:rgba(255,255,255,.42)">' +
      esc(COPY.city) +
      "</p>" +
      '<a href="https://www.linkedin.com/company/dipa-lt" target="_blank" rel="noopener">LinkedIn</a></div>' +
      col(COPY.path, FOOT_PATH) +
      col(COPY.catalog, FOOT_CATALOG) +
      col(COPY.company, FOOT_CO) +
      "</div>" +
      '<div class="fbot"><a class="logo logo-foot" href="' +
      href("") +
      '" aria-label="DIPA">' +
      LOGO +
      "</a>" +
      "<span>" +
      esc(COPY.legalName) +
      "</span><span>" +
      esc(COPY.legalCode) +
      "</span><span>" +
      esc(COPY.legalAddr) +
      "</span><span>© 2026</span>" +
      '<a href="' +
      privacy +
      '">' +
      esc(COPY.privacy) +
      "</a>" +
      '<a href="' +
      cookies +
      '">' +
      esc(COPY.cookies) +
      "</a>" +
      '<button type="button" id="consent-reopen">' +
      esc(COPY.cookiesSettings) +
      "</button></div></div></footer>"
    );
  }

  /* ---------- Shared submission plumbing ---------- */

  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return "sub-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
  }

  function utmParams() {
    var out = {};
    try {
      var p = new URLSearchParams(location.search);
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"].forEach(function (k) {
        var v = p.get(k);
        if (v) out[k] = v.slice(0, 180);
      });
    } catch (e) {}
    return out;
  }

  /* One shared envelope for contact, diagnostic and popup continuation. */
  function buildPayload(kind, fields, extra) {
    return Object.assign(
      {
        schema: kind === "assessment" ? DIPA_API.assessmentSchema : DIPA_API.leadSchema,
        kind: kind,
        submissionId: fields._submissionId || uuid(),
        locale: IS_EN ? "en" : "lt",
        sourcePage: pageSlug() || "home",
        sourceUrl: location.origin + location.pathname,
        consentVersion: DIPA_API.consentVersion,
        utm: utmParams(),
        ts: new Date().toISOString()
      },
      fields,
      extra || {}
    );
  }

  function postSubmission(payload) {
    return fetch(DIPA_API.base + DIPA_API.path, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json", "Idempotency-Key": payload.submissionId },
      body: JSON.stringify(payload)
    }).then(function (res) {
      return res
        .json()
        .catch(function () { return {}; })
        .then(function (data) {
          if (!res.ok) {
            var err = new Error(data && data.error ? data.error : "HTTP " + res.status);
            err.status = res.status;
            throw err;
          }
          return data;
        });
    });
  }

  /* Wire a <form> element to the production API. The DOM provides field names. */
  function wireForm(form) {
    var kind = form.getAttribute("data-form"); // "lead" | "assessment"
    var okBox = form.querySelector(".form-ok");
    var errBox = form.querySelector(".form-err");
    var submitBtn = form.querySelector('[type="submit"]');
    var btnLabel = submitBtn ? submitBtn.textContent : "";
    var startedAt = Date.now();
    var submissionId = uuid();
    var sending = false;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (sending) return;
      if (typeof form.reportValidity === "function" && !form.reportValidity()) return;

      // Honeypot: bots fill hidden fields; humans never do.
      var hp = form.querySelector('[name="company_url"]');
      if (hp && hp.value) { form.classList.add("is-sent"); return; }
      // Minimum completion time guards against instant bot posts.
      if (Date.now() - startedAt < 1200) { return; }

      var fd = new FormData(form);
      var fields = {
        _submissionId: submissionId,
        firstName: (fd.get("firstName") || "").toString().trim(),
        lastName: (fd.get("lastName") || "").toString().trim(),
        company: (fd.get("company") || "").toString().trim(),
        email: (fd.get("email") || "").toString().trim(),
        phone: (fd.get("phone") || "").toString().trim(),
        role: (fd.get("role") || "").toString().trim(),
        orgSize: (fd.get("orgSize") || "").toString().trim(),
        contactPref: (fd.get("contactPref") || "").toString().trim(),
        message: (fd.get("message") || "").toString().trim(),
        marketingConsent: !!fd.get("marketingConsent")
      };
      fields.name = (fields.firstName + " " + fields.lastName).trim() || fields.firstName;

      var extra = {};
      if (kind === "assessment" && form._assessmentResult) {
        var r = form._assessmentResult;
        extra.assessment = {
          version: DIPA_API.assessmentSchema,
          answers: r.answers,
          scores: r.dimScores,
          overall: r.overall,
          band: r.band.key,
          gap: r.gap,
          unknown: r.unknown,
          route: r.route.label
        };
      }

      var payload = buildPayload(kind, fields, extra);

      sending = true;
      form.classList.add("is-sending");
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = IS_EN ? "Sending…" : "Siunčiama…"; }
      if (errBox) errBox.hidden = true;

      postSubmission(payload)
        .then(function () {
          form.classList.remove("is-sending");
          form.classList.add("is-sent");
          if (okBox) { okBox.hidden = false; okBox.focus(); }
          // Analytics: event only, never PII or free text.
          window.dispatchEvent(new CustomEvent("dipa:analytics", {
            detail: { event: kind === "assessment" ? "assessment_submit" : "lead_submit", language: IS_EN ? "en" : "lt", page_path: location.pathname }
          }));
        })
        .catch(function (err) {
          sending = false;
          form.classList.remove("is-sending");
          if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = btnLabel; }
          if (errBox) {
            errBox.hidden = false;
            errBox.textContent = IS_EN
              ? "We could not send your message just now. Please try again, or email hello@dipa.lt."
              : "Nepavyko išsiųsti. Bandykite dar kartą arba parašykite hello@dipa.lt.";
            if (typeof errBox.focus === "function") errBox.focus();
          }
        });
    });
  }

  function initForms() {
    Array.prototype.forEach.call(document.querySelectorAll("form[data-form]"), wireForm);
  }

  /* ---------- Full diagnostic (12 questions) ---------- */

  var ASSESS_STORE = "dipaAssessAnswers";

  function savedAnswers() {
    try { return JSON.parse(sessionStorage.getItem(ASSESS_STORE) || "{}"); } catch (e) { return {}; }
  }
  function persistAnswers(a) {
    try { sessionStorage.setItem(ASSESS_STORE, JSON.stringify(a)); } catch (e) {}
  }

  function renderDimScores(scores) {
    return ASSESS.dims.map(function (d) {
      var v = scores[d.id];
      var pct = v === null ? 0 : v;
      var val = v === null ? (IS_EN ? "n/a" : "n/d") : v;
      return (
        '<div class="dim-score"><div class="dim-row"><span>' + esc(d.label) + "</span><em>" + val + "</em></div>" +
        '<div class="dim-track"><i style="width:' + pct + '%"></i></div></div>'
      );
    }).join("");
  }

  function initAssessment() {
    var root = document.getElementById("assessment");
    if (!root) return;
    var answers = savedAnswers();
    var leadForm = document.getElementById("assessment-lead");

    function render() {
      var qHtml = ASSESS.questions.map(function (q, i) {
        var opts = q.opts.map(function (label, v) {
          var pressed = answers[q.id] === v ? ' aria-pressed="true"' : ' aria-pressed="false"';
          return '<button type="button" class="asq-btn" data-q="' + q.id + '" data-v="' + v + '"' + pressed + ">" + esc(label) + "</button>";
        }).join("");
        var unk = answers[q.id] === "u" ? ' aria-pressed="true"' : ' aria-pressed="false"';
        opts += '<button type="button" class="asq-btn asq-unknown" data-q="' + q.id + '" data-v="u"' + unk + ">" + esc(ASSESS.unknown) + "</button>";
        return (
          '<div class="asq-q" data-qwrap="' + q.id + '"><div class="q"><span class="n">' + (i + 1) + "</span><span>" + esc(q.q) + "</span></div>" +
          '<div class="asq-opts">' + opts + "</div></div>"
        );
      }).join("");

      root.innerHTML =
        '<div class="asq-progress" aria-live="polite"></div>' +
        '<div class="asq">' + qHtml + "</div>" +
        '<div class="asq-foot"><button type="button" class="btn btn-p" id="asq-see" disabled>' +
        (IS_EN ? "See my result" : "Matyti rezultatą") + "</button>" +
        '<button type="button" class="btn btn-s" id="asq-reset">' + esc(ASSESS.ui.retake) + "</button></div>" +
        '<div class="verdict" id="assessment-result" hidden tabindex="-1"></div>';

      updateProgress();
    }

    function updateProgress() {
      var done = ASSESS.questions.filter(function (q) { return answers[q.id] !== undefined; }).length;
      var el = root.querySelector(".asq-progress");
      if (el) el.textContent = ASSESS.ui.progress(done, ASSESS.questions.length);
      var see = document.getElementById("asq-see");
      if (see) see.disabled = done < ASSESS.questions.length;
    }

    function showResult() {
      var res = scoreAssessment(answers);
      res.answers = answers;
      var box = document.getElementById("assessment-result");
      var warn = res.unknown >= 4 ? '<p class="asq-warn">' + esc(ASSESS.ui.unknownWarn) + "</p>" : "";
      box.innerHTML =
        '<div class="lvl">' + esc(ASSESS.ui.overall) + " · " + res.overall + "/100</div>" +
        "<h3>" + esc(res.band.title) + "</h3>" +
        "<p class=\"t-muted\" style=\"margin-top:10px\">" + esc(res.band.desc) + "</p>" +
        '<div class="dim-scores"><p class="asq-sub">' + esc(ASSESS.ui.byDim) + "</p>" + renderDimScores(res.dimScores) + "</div>" +
        warn +
        '<div class="rec"><p class="asq-sub">' + esc(ASSESS.ui.gapTitle) + "</p>" +
        "<p><b>" + esc(ASSESS.dims.filter(function (d) { return d.id === res.gap; })[0].label) + "</b></p>" +
        '<div class="rec-grid">' +
        "<div><span class=\"k\">" + esc(ASSESS.ui.kpi) + "</span><p>" + esc(res.route.kpi) + "</p></div>" +
        "<div><span class=\"k\">" + esc(ASSESS.ui.action) + "</span><p>" + esc(res.route.action) + "</p></div>" +
        "</div>" +
        '<p class="rec-route"><span class="k">' + esc(ASSESS.ui.route) + '</span> <a class="btn-g" href="' + res.route.href + '">' + esc(res.route.label) + ' <span class="ar">→</span></a></p>' +
        "</div>" +
        '<p class="asq-disclaimer">' + esc(ASSESS.ui.disclaimer) + "</p>";
      box.hidden = false;
      box.focus();
      if (leadForm) {
        leadForm.hidden = false;
        leadForm._assessmentResult = res;
      }
      window.dispatchEvent(new CustomEvent("dipa:analytics", {
        detail: { event: "assessment_result", band: res.band.key, overall: res.overall, language: IS_EN ? "en" : "lt" }
      }));
    }

    root.addEventListener("click", function (e) {
      var btn = e.target.closest(".asq-btn");
      if (btn) {
        var q = btn.getAttribute("data-q");
        var raw = btn.getAttribute("data-v");
        answers[q] = raw === "u" ? "u" : +raw;
        persistAnswers(answers);
        Array.prototype.forEach.call(btn.parentNode.querySelectorAll(".asq-btn"), function (b) {
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        updateProgress();
        return;
      }
      if (e.target.closest("#asq-see")) { showResult(); return; }
      if (e.target.closest("#asq-reset")) {
        answers = {};
        persistAnswers(answers);
        render();
        return;
      }
    });

    render();
    // If the visitor arrives from the homepage popup, surface the result at once.
    if (Object.keys(answers).length >= ASSESS.questions.length) showResult();
  }

  /* ---------- Homepage maturity popup (4 questions) ---------- */

  var POPUP_SEEN = "dipaPopupSeen";
  var POPUP_QS = ["h1", "t1", "p1", "b1"]; // one per dimension

  function popupAllowed() {
    if (!document.body.hasAttribute("data-maturity-popup")) return false;
    if (window.matchMedia && window.matchMedia("(max-width: 560px)").matches) {
      // Still allow, but only after deeper engagement (handled by trigger).
    }
    try {
      var last = +(localStorage.getItem(POPUP_SEEN) || 0);
      if (last && Date.now() - last < 30 * 24 * 3600 * 1000) return false;
    } catch (e) {}
    return true;
  }

  function markPopupSeen() {
    try { localStorage.setItem(POPUP_SEEN, String(Date.now())); } catch (e) {}
  }

  function buildPopup() {
    var qs = POPUP_QS.map(function (id) {
      return ASSESS.questions.filter(function (q) { return q.id === id; })[0];
    });
    var answers = {};
    var idx = 0;

    var overlay = document.createElement("div");
    overlay.className = "mpop";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-labelledby", "mpop-title");
    overlay.hidden = true;

    function stepHtml() {
      var q = qs[idx];
      var opts = q.opts.map(function (label, v) {
        return '<button type="button" class="mpop-opt" data-v="' + v + '">' + esc(label) + "</button>";
      }).join("");
      opts += '<button type="button" class="mpop-opt mpop-unknown" data-v="u">' + esc(ASSESS.unknown) + "</button>";
      return (
        '<p class="mpop-progress">' + ASSESS.ui.progress(idx + 1, qs.length) + "</p>" +
        '<p class="mpop-q">' + esc(q.q) + "</p>" +
        '<div class="mpop-opts">' + opts + "</div>"
      );
    }

    function resultHtml() {
      var res = scoreAssessment(answers);
      var cont = href("diagnostika");
      return (
        '<p class="mpop-eyebrow">' + esc(ASSESS.ui.overall) + " · " + res.overall + "/100</p>" +
        '<h3 id="mpop-title-r">' + esc(res.band.title) + "</h3>" +
        '<p class="mpop-desc">' + esc(res.band.desc) + "</p>" +
        '<div class="mpop-actions"><a class="btn btn-p" href="' + cont + '" data-mpop-continue>' +
        (IS_EN ? "Get the full 12-question result" : "Gauti pilną 12 klausimų rezultatą") + "</a>" +
        '<button type="button" class="btn btn-s" data-mpop-close>' + (IS_EN ? "Close" : "Uždaryti") + "</button></div>" +
        '<p class="mpop-note">' + esc(ASSESS.ui.disclaimer) + "</p>"
      );
    }

    function render() {
      overlay.innerHTML =
        '<div class="mpop-card">' +
        '<button type="button" class="mpop-x" data-mpop-close aria-label="' + esc(COPY.close) + '">×</button>' +
        '<p class="mpop-eyebrow" id="mpop-title">' + esc(COPY.assess) + "</p>" +
        '<div class="mpop-body" aria-live="polite">' + (idx < qs.length ? stepHtml() : resultHtml()) + "</div>" +
        "</div>";
    }

    function open() {
      render();
      overlay.hidden = false;
      document.body.classList.add("nav-open");
      markPopupSeen();
      lastFocus = document.activeElement;
      var first = overlay.querySelector(".mpop-opt, [data-mpop-close]");
      if (first) first.focus();
      window.dispatchEvent(new CustomEvent("dipa:analytics", { detail: { event: "maturity_popup_open", language: IS_EN ? "en" : "lt" } }));
    }

    function close() {
      overlay.hidden = true;
      document.body.classList.remove("nav-open");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    var lastFocus = null;

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) { close(); return; }
      if (e.target.closest("[data-mpop-close]")) { close(); return; }
      if (e.target.closest("[data-mpop-continue]")) {
        // Preserve answers so the full assessment continues seamlessly.
        persistAnswers(answers);
        return; // allow default navigation
      }
      var opt = e.target.closest(".mpop-opt");
      if (opt) {
        var raw = opt.getAttribute("data-v");
        answers[qs[idx].id] = raw === "u" ? "u" : +raw;
        idx++;
        render();
        var body = overlay.querySelector(".mpop-body");
        var focusEl = overlay.querySelector(".mpop-opt, .mpop-actions .btn");
        if (focusEl) focusEl.focus();
      }
    });

    overlay.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { close(); return; }
      if (e.key !== "Tab") return;
      var f = overlay.querySelectorAll("button, a[href], [tabindex]:not([tabindex='-1'])");
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });

    document.body.appendChild(overlay);
    return { open: open };
  }

  function initMaturityPopup() {
    if (!popupAllowed()) return;
    var pop = buildPopup();
    var fired = false;
    function trigger() {
      if (fired) return;
      fired = true;
      pop.open();
      cleanup();
    }
    function onScroll() {
      var h = document.documentElement;
      var depth = (window.scrollY + window.innerHeight) / (h.scrollHeight || 1);
      if (depth > 0.4) trigger();
    }
    function cleanup() {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    var timer = setTimeout(trigger, 35000);
  }

  function readConsent() {
    try {
      var raw = localStorage.getItem("cookieSettings");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function applyConsent(settings) {
    var stored = {
      necessary: true,
      preferences: !!settings.preferences,
      analytics: !!settings.analytics,
      marketing: !!settings.marketing
    };
    localStorage.setItem("cookieSettings", JSON.stringify(stored));
    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        security_storage: "granted",
        functionality_storage: stored.preferences ? "granted" : "denied",
        personalization_storage: stored.preferences ? "granted" : "denied",
        analytics_storage: stored.analytics ? "granted" : "denied",
        ad_storage: stored.marketing ? "granted" : "denied",
        ad_user_data: stored.marketing ? "granted" : "denied",
        ad_personalization: stored.marketing ? "granted" : "denied"
      });
    }
    window.dispatchEvent(new CustomEvent("consentUpdate"));
    return stored;
  }

  function initConsent() {
    var policy = href("slapuku-politika");
    var copy = IS_EN
      ? {
          title: "Cookies on this site",
          lead: "Necessary cookies keep the site working. Analytics, preferences and marketing cookies stay off until you allow them.",
          accept: "Accept all",
          necessary: "Necessary only",
          settings: "Settings",
          save: "Save selection",
          policy: "Cookie policy",
          necTitle: "Necessary",
          necBody: "Required for security, consent storage and basic navigation. Always on.",
          prefTitle: "Preferences",
          prefBody: "Remember choices such as language or region.",
          anaTitle: "Analytics",
          anaBody: "Anonymous measurement of how the site is used, including Google Analytics.",
          marTitle: "Marketing",
          marBody: "Facebook and LinkedIn measurement of campaigns and content."
        }
      : {
          title: "Slapukai šioje svetainėje",
          lead: "Būtinieji slapukai reikalingi svetainei veikti. Analitiniai, nuostatiniai ir rinkodaros slapukai įjungiami tik jums sutikus.",
          accept: "Sutinku su visais",
          necessary: "Tik būtinuosius",
          settings: "Nustatymai",
          save: "Išsaugoti pasirinkimą",
          policy: "Slapukų politika",
          necTitle: "Būtinieji",
          necBody: "Reikalingi saugumui, sutikimo išsaugojimui ir pagrindinei navigacijai. Jų išjungti negalima.",
          prefTitle: "Nuostatiniai",
          prefBody: "Įsimena pasirinkimus, pavyzdžiui kalbą ar regioną.",
          anaTitle: "Analitiniai",
          anaBody: "Anoniminė statistika, kaip naudojatės svetaine, įskaitant Google Analytics.",
          marTitle: "Rinkodaros",
          marBody: "Facebook ir LinkedIn kampanijų bei turinio matavimas."
        };

    var rootEl = document.createElement("div");
    rootEl.className = "consent";
    rootEl.id = "consent";
    rootEl.hidden = true;
    rootEl.innerHTML =
      '<div class="consent-card" role="dialog" aria-modal="false" aria-labelledby="consent-title">' +
      "<div><p class=\"consent-k\" id=\"consent-title\">" +
      esc(copy.title) +
      "</p><p>" +
      esc(copy.lead) +
      ' <a href="' +
      policy +
      '">' +
      esc(copy.policy) +
      "</a></p></div>" +
      '<div class="consent-actions">' +
      '<button type="button" class="btn btn-s" data-consent="necessary">' +
      esc(copy.necessary) +
      "</button>" +
      '<button type="button" class="btn btn-s" data-consent="settings">' +
      esc(copy.settings) +
      "</button>" +
      '<button type="button" class="btn btn-p" data-consent="all">' +
      esc(copy.accept) +
      "</button></div>" +
      '<div class="consent-panel" hidden>' +
      consentRow("necessary", copy.necTitle, copy.necBody, true) +
      consentRow("preferences", copy.prefTitle, copy.prefBody, false) +
      consentRow("analytics", copy.anaTitle, copy.anaBody, false) +
      consentRow("marketing", copy.marTitle, copy.marBody, false) +
      '<button type="button" class="btn btn-p" data-consent="save">' +
      esc(copy.save) +
      "</button></div></div>";
    document.body.appendChild(rootEl);

    function consentRow(key, title, body, locked) {
      return (
        '<label class="consent-row"><span><b>' +
        esc(title) +
        "</b><small>" +
        esc(body) +
        "</small></span><input type=\"checkbox\" data-key=\"" +
        key +
        "\"" +
        (locked ? " checked disabled" : "") +
        "></label>"
      );
    }

    function selected() {
      var out = { necessary: true, preferences: false, analytics: false, marketing: false };
      Array.prototype.forEach.call(rootEl.querySelectorAll("[data-key]"), function (input) {
        out[input.getAttribute("data-key")] = input.checked;
      });
      out.necessary = true;
      return out;
    }

    function fill(settings) {
      Array.prototype.forEach.call(rootEl.querySelectorAll("[data-key]"), function (input) {
        var key = input.getAttribute("data-key");
        if (key === "necessary") return;
        input.checked = !!(settings && settings[key]);
      });
    }

    function open(showPanel) {
      var current = readConsent();
      fill(current);
      rootEl.hidden = false;
      rootEl.querySelector(".consent-panel").hidden = !showPanel;
    }

    function close() {
      rootEl.hidden = true;
    }

    rootEl.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-consent]");
      if (!btn) return;
      var mode = btn.getAttribute("data-consent");
      if (mode === "settings") {
        rootEl.querySelector(".consent-panel").hidden = false;
        return;
      }
      if (mode === "all") {
        applyConsent({ preferences: true, analytics: true, marketing: true });
        close();
        return;
      }
      if (mode === "necessary") {
        applyConsent({ preferences: false, analytics: false, marketing: false });
        close();
        return;
      }
      if (mode === "save") {
        applyConsent(selected());
        close();
      }
    });

    var reopen = document.getElementById("consent-reopen");
    if (reopen) {
      reopen.addEventListener("click", function () {
        open(true);
      });
    }

    if (!readConsent()) open(false);
    else applyConsent(readConsent());
  }

  function initAnalytics() {
    function track(name, properties) {
      var consent = readConsent();
      if (!consent || !consent.analytics) return;
      var detail = Object.assign(
        {
          event: name,
          page_path: location.pathname,
          device: matchMedia("(max-width: 700px)").matches ? "mobile" : "desktop",
          language: IS_EN ? "en" : "lt"
        },
        properties || {}
      );
      window.dispatchEvent(new CustomEvent("dipa:analytics", { detail: detail }));
      if (Array.isArray(window.dataLayer)) window.dataLayer.push(detail);
    }

    document.addEventListener("click", function (event) {
      var target = event.target.closest("[data-event]");
      if (!target) return;
      track(target.getAttribute("data-event"), {
        cta_location: target.closest("section") ? target.closest("section").id || "section" : "navigation",
        selected_path: target.getAttribute("data-path") || undefined
      });
    });

    Array.prototype.forEach.call(document.querySelectorAll(".faq details"), function (details) {
      details.addEventListener("toggle", function () {
        if (details.open) track("faq_open", { selected_path: details.querySelector("summary").textContent.trim() });
      });
    });
  }

  function initDrawer() {
    var burger = document.getElementById("burger");
    var drawer = document.getElementById("drawer");
    var close = document.getElementById("drawer-close");
    if (!burger || !drawer) return;
    function open() {
      drawer.classList.add("on");
      document.body.classList.add("nav-open");
    }
    function shut() {
      drawer.classList.remove("on");
      document.body.classList.remove("nav-open");
    }
    burger.addEventListener("click", open);
    if (close) close.addEventListener("click", shut);
  }

  var PROD_ORIGIN = "https://dipa.lt";

  function slugPath(en, slug) {
    return (en ? "/en/" : "/") + (slug ? slug + "/" : "");
  }

  function setMeta(selector, attr, key, value) {
    var el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", value);
  }

  function setLink(rel, href, hreflang) {
    var sel = 'link[rel="' + rel + '"]' + (hreflang ? '[hreflang="' + hreflang + '"]' : "");
    var el = document.head.querySelector(sel);
    if (!el) {
      el = document.createElement("link");
      el.setAttribute("rel", rel);
      if (hreflang) el.setAttribute("hreflang", hreflang);
      document.head.appendChild(el);
    }
    el.setAttribute("href", href);
  }

  function initSeo() {
    var slug = pageSlug();
    var canonical = PROD_ORIGIN + slugPath(IS_EN, slug);
    var ltUrl = PROD_ORIGIN + slugPath(false, slug);
    var enUrl = PROD_ORIGIN + slugPath(true, slug);
    var title = document.title;
    var descEl = document.head.querySelector('meta[name="description"]');
    var desc = descEl ? descEl.getAttribute("content") || "" : "";

    setLink("canonical", canonical);
    setLink("alternate", ltUrl, "lt");
    setLink("alternate", enUrl, "en");
    setLink("alternate", ltUrl, "x-default");

    setMeta('meta[property="og:type"]', "property", "og:type", "website");
    setMeta('meta[property="og:site_name"]', "property", "og:site_name", "DIPA");
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", desc);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:locale"]', "property", "og:locale", IS_EN ? "en_US" : "lt_LT");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", desc);

    // Organization structured data.
    if (!document.getElementById("ld-org")) {
      var org = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "DIPA",
        legalName: "UAB \u201CImpact Solutions Partners\u201D",
        url: PROD_ORIGIN,
        email: "info@dipa.lt",
        sameAs: ["https://www.linkedin.com/company/dipa-lt"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "P. Vileišio g. 24-16",
          addressLocality: "Vilnius",
          addressCountry: "LT"
        }
      };
      var s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = "ld-org";
      s.textContent = JSON.stringify(org);
      document.head.appendChild(s);
    }

    // Breadcrumb structured data from the on-page crumbs, if present.
    var crumbs = document.querySelector(".crumbs");
    if (crumbs && !document.getElementById("ld-crumbs")) {
      var items = [];
      var pos = 1;
      Array.prototype.forEach.call(crumbs.querySelectorAll("a"), function (a) {
        items.push({ "@type": "ListItem", position: pos++, name: a.textContent.trim(), item: PROD_ORIGIN + slugPath(IS_EN, "") });
      });
      items.push({ "@type": "ListItem", position: pos, name: (crumbs.textContent.split("/").pop() || "").trim(), item: canonical });
      var bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
      var sc = document.createElement("script");
      sc.type = "application/ld+json";
      sc.id = "ld-crumbs";
      sc.textContent = JSON.stringify(bc);
      document.head.appendChild(sc);
    }
  }

  function enforceNoIndex() {
    if (!isPreview()) return;
    if (!document.querySelector('meta[name="robots"]')) {
      var m = document.createElement("meta");
      m.name = "robots";
      m.content = "noindex, nofollow, noarchive, nosnippet";
      document.head.appendChild(m);
    }
  }

  function osxSide(active) {
    function item(id, label) {
      return '<span class="' + (id === active ? "on" : "") + '">' + label + "</span>";
    }
    return (
      '<aside class="osx-side" aria-hidden="true">' +
      '<div class="osx-logo"><i></i>DIPA OS</div>' +
      '<div class="osx-g">Overview</div>' +
      item("cockpit", "Cockpit") +
      item("analytics", "Analytics") +
      '<div class="osx-g">Workspace</div>' +
      item("leads", "Leads") +
      item("qa", "Call QA") +
      item("team", "Team") +
      item("auto", "Automations") +
      item("runs", "Run history") +
      '<div class="osx-g">Asaichi</div>' +
      item("asaichi", "KPI board") +
      item("forecast", "Forecast") +
      item("rev", "Revenue &amp; P&amp;L") +
      item("problems", "Problems (PDCA)") +
      '<div class="osx-g">System</div>' +
      item("agents", "Agents") +
      item("reviews", "Agent reviews") +
      '<div class="osx-foot"><b>A. Vale</b><span>Core Sales</span></div>' +
      "</aside>"
    );
  }

  function osxChrome() {
    return '<i class="osx-phone" aria-hidden="true">☎</i><i class="osx-fab" aria-hidden="true">✦ DIPA Copilot</i>';
  }

  function osxApp(active, compact, main) {
    return (
      '<div class="osx' + (compact ? " compact" : "") + '" aria-hidden="true">' +
      osxSide(active) +
      '<div class="osx-main">' + main + "</div>" +
      osxChrome() +
      "</div>"
    );
  }

  function osxPanel(inner) {
    return '<div class="osx panel" aria-hidden="true">' + inner + osxChrome() + "</div>";
  }

  function osxLead(name, mail, company, owner, tier, score, cls) {
    return (
      '<div class="osx-row">' +
      '<div class="osx-lead"><b>' + name + "</b><i>" + mail + "</i></div>" +
      "<div>" + company + "</div>" +
      "<div>" + owner + "</div>" +
      '<span class="osx-tier ' + cls + '">' + tier + "</span>" +
      '<div class="osx-bar ' + cls + '" style="--w:' + score + '%"><i></i></div>' +
      '<span class="osx-pill ok">Ready</span>' +
      "</div>"
    );
  }

  function buildOsx(kind) {
    var frames = {
      cockpit: osxApp(
        "cockpit",
        kind === "cockpit-compact",
        '<div class="osx-crumb">DIPA OS / Overview</div>' +
        '<div class="osx-head"><div><h4>Sales Cockpit</h4><p>A/B queue · ICP funnel · next actions</p></div><span class="osx-btn">▶ Run qualification</span></div>' +
        '<div class="osx-kpis">' +
        '<div class="osx-kpi"><span class="l">Total leads</span><span class="n">48</span><span class="s">All sources</span></div>' +
        '<div class="osx-kpi amber"><span class="l">In research</span><span class="n">6</span><span class="s">Scoring now</span></div>' +
        '<div class="osx-kpi ok"><span class="l">A-tier</span><span class="n">14</span><span class="s">Ready for ROI</span></div>' +
        '<div class="osx-kpi"><span class="l">Avg maturity</span><span class="n">71</span><span class="s">Qualified set</span></div>' +
        "</div>" +
        '<div class="osx-grid2">' +
        '<div class="osx-card"><h5>Today’s priority queue</h5><p class="sub">A/B leads ready for outreach</p>' +
        '<div class="osx-row" style="grid-template-columns:18px 1fr 40px"><span class="osx-tier a">A</span><div class="osx-lead"><b>Northline Logistics</b><i>Ops director · score 84</i></div><span>Call</span></div>' +
        '<div class="osx-row" style="grid-template-columns:18px 1fr 40px"><span class="osx-tier a">A</span><div class="osx-lead"><b>Helix Materials</b><i>Plant lead · score 79</i></div><span>Call</span></div>' +
        '<div class="osx-row" style="grid-template-columns:18px 1fr 40px"><span class="osx-tier b">B</span><div class="osx-lead"><b>Cedar Clinic</b><i>Gate opener · reach EB</i></div><span>Prep</span></div>' +
        "</div>" +
        '<div class="osx-card"><h5>ICP tier funnel</h5><p class="sub">After research</p><div class="osx-funnel">' +
        '<div><span class="osx-tier a">A</span><div class="osx-bar a" style="--w:78%"><i></i></div><b>14</b></div>' +
        '<div><span class="osx-tier b">B</span><div class="osx-bar b" style="--w:62%"><i></i></div><b>16</b></div>' +
        '<div><span class="osx-tier c">C</span><div class="osx-bar c" style="--w:28%"><i></i></div><b>11</b></div>' +
        '<div><span class="osx-tier d">D</span><div class="osx-bar d" style="--w:18%"><i></i></div><b>7</b></div>' +
        "</div>" +
        '<div class="osx-live"><i class="osx-dot"></i><span>Playbook ready · Northline</span></div>' +
        '<div class="osx-live"><i class="osx-dot warn"></i><span>Red KPI on A-tier velocity</span></div>' +
        "</div></div>"
      ),
      leads: osxApp(
        "leads",
        false,
        '<div class="osx-crumb">DIPA OS / Workspace / Leads</div>' +
        '<div class="osx-head"><div><h4>Leads</h4><p>Intake → Deep Research → A/B/C/D routing</p></div><span class="osx-btn">+ New lead</span></div>' +
        '<div class="osx-kpis">' +
        '<div class="osx-kpi"><span class="l">Total</span><span class="n">48</span><span class="s">In the board</span></div>' +
        '<div class="osx-kpi ok"><span class="l">Tier A</span><span class="n">14</span><span class="s">ROI session</span></div>' +
        '<div class="osx-kpi amber"><span class="l">In progress</span><span class="n">6</span><span class="s">Research</span></div>' +
        '<div class="osx-kpi"><span class="l">Needs check</span><span class="n">2</span><span class="s">Human review</span></div>' +
        "</div>" +
        '<div class="osx-filters"><i class="on">All 48</i><i>A 14</i><i>B 16</i><i>C 11</i><i>D 7</i></div>' +
        '<div class="osx-tbl">' +
        '<div class="osx-row hd"><span>Lead</span><span>Company</span><span>Owner</span><span>Tier</span><span>Score</span><span>Status</span></div>' +
        osxLead("Elena Park", "e.park@northline.example", "Northline Logistics", "A. Vale", "A", 84, "a") +
        osxLead("Jonas Reed", "j.reed@helix.example", "Helix Materials", "A. Vale", "A", 79, "a") +
        osxLead("Mira Solis", "m.solis@cedar.example", "Cedar Clinic", "L. Holm", "B", 66, "b") +
        osxLead("Owen Drake", "o.drake@atlas.example", "Atlas Freight", "N. Kade", "C", 44, "c") +
        osxLead("Rita Chen", "r.chen@harbor.example", "Harbor Labs", "L. Holm", "D", 22, "d") +
        "</div>"
      ),
      playbook: osxPanel(
        '<div class="osx-head"><div><h4>Sales playbook · call prep</h4><p>Built from research — method, pain, reframe, ROI</p></div></div>' +
        '<div class="osx-book">' +
        '<article><div class="k">Recommended method</div><p>Challenger. Leadership sees the waste, but treats the fix as a two-year programme. Show a 90-day cut, not a platform tour.</p></article>' +
        '<article><div class="k">#1 Pain hypothesis</div><p>Supervisors lose 10–12 hours a week re-keying field notes into the system of record. Margin leaks before anyone opens a dashboard.</p></article>' +
        '<article><div class="k">Reframe</div><p>The gap is not skill. The current stack forces people to serve the tool. The next system should serve the person on the floor.</p></article>' +
        '<article><div class="k">Value / ROI hypothesis</div><p>Cut documentation time 40%. One point of margin on this book is ~€180k / year. Cost of inaction: ~€40k each idle month.</p></article>' +
        "</div>"
      ),
      qa: osxApp(
        "qa",
        false,
        '<div class="osx-crumb">DIPA OS / Workspace / Call QA</div>' +
        '<div class="osx-head"><div><h4>QA &amp; Performance</h4><p>Score by meeting type — Discovery, ROI, Custom, Upsell</p></div><span class="osx-btn">+ New evaluation</span></div>' +
        '<div class="osx-kpis">' +
        '<div class="osx-kpi"><span class="l">Sessions</span><span class="n">29</span><span class="s">This cycle</span></div>' +
        '<div class="osx-kpi ok"><span class="l">Go</span><span class="n">4</span><span class="s">Pass the bar</span></div>' +
        '<div class="osx-kpi amber"><span class="l">Needs work</span><span class="n">18</span><span class="s">Coach tomorrow</span></div>' +
        '<div class="osx-kpi"><span class="l">Avg score</span><span class="n">62</span><span class="s">Out of 100</span></div>' +
        "</div>" +
        '<div class="osx-tbl qa">' +
        '<div class="osx-row hd"><span>Session</span><span>Rep</span><span>Type</span><span>Verdict</span><span>Score</span></div>' +
        '<div class="osx-row"><div class="osx-lead"><b>Discovery</b><i>Northline Logistics</i></div><span>A. Vale</span><span>Discovery</span><span class="osx-pill ok">Pass</span><div class="osx-bar a" style="--w:78%"><i></i></div></div>' +
        '<div class="osx-row"><div class="osx-lead"><b>ROI session</b><i>Helix Materials</i></div><span>A. Vale</span><span>ROI</span><span class="osx-pill amber">Review</span><div class="osx-bar c" style="--w:58%"><i></i></div></div>' +
        '<div class="osx-row"><div class="osx-lead"><b>Discovery</b><i>Cedar Clinic</i></div><span>L. Holm</span><span>Discovery</span><span class="osx-pill warn">Improve</span><div class="osx-bar bad" style="--w:41%"><i></i></div></div>' +
        '<div class="osx-row"><div class="osx-lead"><b>Upsell</b><i>Atlas Freight</i></div><span>N. Kade</span><span>Upsell</span><span class="osx-pill ok">Pass</span><div class="osx-bar a" style="--w:81%"><i></i></div></div>' +
        "</div>"
      ),
      asaichi: osxApp(
        "asaichi",
        false,
        '<div class="osx-crumb">ASAICHI / KPI board / Focus</div>' +
        '<div class="osx-head"><div><h4>ASAICHI — KPI board</h4><p>Morning review · anomalies first · Toyota PDCA</p></div><span class="osx-btn">Week</span></div>' +
        '<div class="osx-kpis">' +
        '<div class="osx-kpi warn"><span class="l">Anomalies</span><span class="n">2</span><span class="s">Red KPIs</span></div>' +
        '<div class="osx-kpi amber"><span class="l">At risk</span><span class="n">3</span><span class="s">Amber</span></div>' +
        '<div class="osx-kpi ok"><span class="l">On target</span><span class="n">9</span><span class="s">Green</span></div>' +
        '<div class="osx-kpi"><span class="l">Not entered</span><span class="n">4</span><span class="s">Need a number</span></div>' +
        "</div>" +
        '<div class="osx-tbl kpi">' +
        '<div class="osx-row hd"><span></span><span>KPI</span><span>Owner</span><span>Target</span><span>Actual</span></div>' +
        '<div class="osx-row"><i class="osx-st red"></i><div class="osx-lead"><b>A-tier velocity</b><i>Sales</i></div><span>A. Vale</span><span>8</span><span>4</span></div>' +
        '<div class="osx-row"><i class="osx-st red"></i><div class="osx-lead"><b>Discovery → ROI</b><i>Sales</i></div><span>L. Holm</span><span>35%</span><span>22%</span></div>' +
        '<div class="osx-row"><i class="osx-st amber"></i><div class="osx-lead"><b>Avg call score</b><i>Quality</i></div><span>N. Kade</span><span>70</span><span>62</span></div>' +
        '<div class="osx-row"><i class="osx-st ok"></i><div class="osx-lead"><b>Time to next step</b><i>Flow</i></div><span>A. Vale</span><span>1.0 d</span><span>0.9 d</span></div>' +
        "</div>"
      ),
      problems: osxPanel(
        '<div class="osx-head"><div><h4>Problems · PDCA</h4><p>Cause → countermeasure → check. Effect on the KPI.</p></div></div>' +
        '<div class="osx-kanban">' +
        '<div class="osx-col"><h5>Cause</h5><div class="osx-ticket"><b>A-tier stall &gt; 5 days</b><span>6 cards sitting after research</span></div><div class="osx-ticket"><b>Discovery without EB</b><span>Gate opener treated as buyer</span></div></div>' +
        '<div class="osx-col"><h5>Countermeasure</h5><div class="osx-ticket"><b>Book 3 EB meetings</b><span>B-tier this week only</span></div></div>' +
        '<div class="osx-col"><h5>Check</h5><div class="osx-ticket"><b>A-tier velocity 4 → 8</b><span>Review Friday morning</span></div></div>' +
        "</div>"
      ),
      advisor: osxPanel(
        '<div class="osx-head"><div><h4>ASAICHI advisor</h4><p>Advise-only · a person confirms · always a number</p></div><span class="osx-pill">This week</span></div>' +
        '<div class="osx-adv">' +
        '<p class="q">We took in €48k. Why. What we change next week.</p>' +
        "<ol>" +
        "<li>Close the 6 A-tier cards older than 5 days — they are the stall, not new intake.</li>" +
        "<li>Book 3 Executive Buyer meetings on B-tier. Last week: 1 of 6.</li>" +
        "<li>Discovery misses pain lock — 4 of 7 calls. One coaching block, not a new script.</li>" +
        "<li>Do not add pipeline. Finish the A queue before the next campaign.</li>" +
        "</ol>" +
        '<p class="note">Weakest point: conversion after qualification. The system proposes. The team decides.</p>' +
        "</div>"
      ),
      reviews: osxApp(
        "reviews",
        false,
        '<div class="osx-crumb">DIPA OS / System / Agent reviews</div>' +
        '<div class="osx-head"><div><h4>Agent reviews</h4><p>Correct / partial / wrong becomes the next rule</p></div></div>' +
        '<div class="osx-card">' +
        "<h5>Summary · 12 reviews</h5>" +
        '<div class="osx-sum"><div><b>78%</b><span>Accuracy</span></div><div><b>4.1/5</b><span>Rating</span></div><div><b style="color:#1A7A4C">8</b><span>Correct</span></div><div><b style="color:#C43B16">1</b><span>Wrong</span></div></div>' +
        '<div class="osx-seg"><i style="width:68%;background:#1A7A4C"></i><i style="width:24%;background:#C9A227"></i><i style="width:8%;background:#C43B16"></i></div>' +
        '<div class="osx-tags"><span class="osx-pill">Interpretation · 3</span><span class="osx-pill">Missing data · 2</span><span class="osx-pill">Routing · 1</span></div>' +
        "</div>" +
        '<div class="osx-card" style="margin-top:8px"><h5>Improvement guidelines</h5><p class="sub">Reviews on this cycle → rules for the next lead and the next call.</p><span class="osx-btn">✦ Generate guidelines</span></div>'
      )
    };

    if (kind === "cockpit-compact") return frames.cockpit;
    return frames[kind] || "";
  }

  function initOsx() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-osx]"), function (el) {
      var html = buildOsx(el.getAttribute("data-osx"));
      if (!html) return;
      el.outerHTML = html;
    });
  }

  function initAtmosphere() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var hero = document.querySelector(".hero");
    if (hero && !hero.querySelector(".fx")) {
      hero.insertAdjacentHTML(
        "afterbegin",
        '<div class="fx" aria-hidden="true"><i class="fx-orb a"><b></b></i><i class="fx-orb b"><b></b></i><i class="fx-spot"></i></div>'
      );
    }

    Array.prototype.forEach.call(document.querySelectorAll("section.final"), function (sec) {
      if (!sec.querySelector(".fx")) {
        sec.insertAdjacentHTML(
          "afterbegin",
          '<div class="fx" aria-hidden="true"><i class="fx-orb c"><b></b></i></div>'
        );
      }
    });

    if (!document.querySelector(".page-progress")) {
      var bar = document.createElement("div");
      bar.className = "page-progress";
      bar.setAttribute("aria-hidden", "true");
      document.body.appendChild(bar);
    }

    var fine = window.matchMedia("(pointer: fine)").matches;
    var mx = 0;
    var my = 0;
    var cx = 0;
    var cy = 0;
    var ticking = false;
    var layers = document.querySelectorAll("section.rv, section.shade, section.final");

    function paint() {
      ticking = false;
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;

      var vh = window.innerHeight || 1;
      var max = document.documentElement.scrollHeight - vh;
      var page = max > 0 ? (window.scrollY || 0) / max : 0;
      document.documentElement.style.setProperty("--page", page.toFixed(4));

      if (hero) {
        var hr = hero.getBoundingClientRect();
        var p = hr.top / vh;
        hero.style.setProperty("--grid-x", (cx * -22).toFixed(1) + "px");
        hero.style.setProperty("--grid-y", (p * 56 + cy * -16).toFixed(1) + "px");
        hero.style.setProperty("--orb-ax", (cx * 28 + p * -18).toFixed(1) + "px");
        hero.style.setProperty("--orb-ay", (cy * 20 + p * 64).toFixed(1) + "px");
        hero.style.setProperty("--orb-bx", (cx * -20).toFixed(1) + "px");
        hero.style.setProperty("--orb-by", (cy * -14 + p * 36).toFixed(1) + "px");
        hero.style.setProperty("--spot-x", (50 + cx * 28).toFixed(1) + "%");
        hero.style.setProperty("--spot-y", (32 + cy * 18).toFixed(1) + "%");
      }

      Array.prototype.forEach.call(layers, function (sec) {
        var r = sec.getBoundingClientRect();
        if (r.bottom < -120 || r.top > vh + 120) return;
        var rel = (r.top - vh * 0.45) / vh;
        sec.style.setProperty("--par-y", (rel * 42).toFixed(1) + "px");
        if (sec.classList.contains("final")) {
          sec.style.setProperty("--orb-cx", (cx * 16).toFixed(1) + "px");
          sec.style.setProperty("--orb-cy", (rel * 48 + cy * 12).toFixed(1) + "px");
        }
      });

      if (fine && (Math.abs(mx - cx) > 0.001 || Math.abs(my - cy) > 0.001)) {
        ticking = true;
        requestAnimationFrame(paint);
      }
    }

    function requestPaint() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(paint);
      }
    }

    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", requestPaint, { passive: true });
    if (fine) {
      window.addEventListener(
        "pointermove",
        function (e) {
          mx = e.clientX / (window.innerWidth || 1) - 0.5;
          my = e.clientY / (window.innerHeight || 1) - 0.5;
          requestPaint();
        },
        { passive: true }
      );
    }
    requestPaint();
  }

  function mount() {
    enforceNoIndex();
    initSeo();
    var head = document.getElementById("chrome-top");
    if (head) head.outerHTML = buildNav();
    var foot = document.getElementById("chrome-bottom");
    if (foot) foot.outerHTML = buildFooter();

    initAssessment();
    initForms();
    initConsent();
    initAnalytics();
    initDrawer();
    initOsx();
    initMaturityPopup();

    Array.prototype.forEach.call(document.querySelectorAll(".phases"), function (el) {
      if (el.querySelector(":scope > article")) el.classList.add("flow");
    });

    function countMetrics(root) {
      var nodes = (root || document).querySelectorAll(".metric");
      Array.prototype.forEach.call(nodes, function (el) {
        if (el.getAttribute("data-counted") === "1") return;
        var raw = (el.textContent || "").trim();
        var m = raw.match(/^(\d[\d\s]*)(%?)$/);
        if (!m) return;
        el.setAttribute("data-counted", "1");
        var end = parseInt(m[1].replace(/\s/g, ""), 10);
        var suffix = m[2] || "";
        var start = performance.now();
        var dur = 980;
        function tick(now) {
          var t = Math.min(1, (now - start) / dur);
          var eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(end * eased) + suffix;
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }

    countMetrics(document.querySelector(".hero"));
    initAtmosphere();

    var els = document.querySelectorAll(".rv");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(els, function (e) {
        e.classList.add("in");
        countMetrics(e);
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            countMetrics(en.target);
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    Array.prototype.forEach.call(els, function (e) {
      io.observe(e);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
