/* ============================================================
   DIPA prototipas · chrome, i18n, mobilus meniu, formos
   ============================================================ */

(function () {
  "use strict";

  var IS_EN = /\/en(?:\/|$)/.test(location.pathname);
  var ROOT = IS_EN ? "../" : "";
  var EN = IS_EN ? "" : "en/";

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

  var PAIR = {
    "index.html": "index.html",
    "filosofija.html": "philosophy.html",
    "sprendimai.html": "path.html",
    "transformation-sprint.html": "transformation-sprint.html",
    "vadovu-ai-produktyvumas.html": "executive-ai.html",
    "komandos-ai-standartas.html": "team-standard.html",
    "atvejis.html": "case.html",
    "kontaktai.html": "contact.html",
    "apie.html": "about.html",
    "izvalgos.html": "insights.html",
    "izvalga-roi.html": "insight-roi.html",
    "izvalga-veliavnesys.html": "insight-champion.html",
    "privatumas.html": "privacy.html",
    "produktai.html": "products.html",
    "akademija.html": "academy.html",
    "irankiai.html": "tools.html",
    "oppm.html": "oppm.html"
  };
  var PAIR_REV = {};
  Object.keys(PAIR).forEach(function (lt) { PAIR_REV[PAIR[lt]] = lt; });

  /* Detaliniai puslapiai kol kas be EN atitikmens — vedame į to paties skyriaus EN hub'ą. */
  var PAIR_HUB = {
    "produktas-asistentai.html": "products.html",
    "produktas-duomenys.html": "products.html",
    "produktas-chatbot.html": "products.html",
    "produktas-linkedin.html": "products.html",
    "produktas-skambuciai.html": "products.html",
    "produktas-diktofonas.html": "products.html",
    "akademija-dirbtuves.html": "academy.html",
    "akademija-savarankiskai.html": "academy.html",
    "akademija-imonems.html": "academy.html"
  };

  function file() {
    var p = location.pathname.split("/").pop();
    return p && p.indexOf(".html") !== -1 ? p : "index.html";
  }

  function otherLangHref() {
    var f = file();
    if (IS_EN) return ROOT + (PAIR_REV[f] || "index.html");
    return EN + (PAIR[f] || PAIR_HUB[f] || "index.html");
  }

  var COPY = IS_EN
    ? {
        proto: "Prototype v6 · light enterprise · path: Person → Team → Process → Business",
        assess: "AI maturity check",
        client0: "Client Zero",
        path: "Path",
        cta: "Submit an enquiry",
        menu: "Menu",
        close: "Close",
        write: "Write to us",
        biz: "Business enquiries →",
        jobs: "Careers →",
        city: "Vilnius, Lithuania",
        company: "Company",
        catalog: "Products",
        sub: "Subscribe",
        subLead: "One insight a month on AI economics and governance.",
        email: "Email",
        subscribe: "Subscribe",
        code: "Company code · to be filled",
        vat: "VAT · to be filled",
        privacy: "Privacy policy",
        cookies: "Cookies",
        warn: "Prototype: no figure here is a validated client result."
      }
    : {
        proto: "Prototipas v6 · šviesus enterprise · kelias: Žmogus → Komanda → Procesas → Verslas",
        assess: "DI brandos vertinimas",
        client0: "Client Zero",
        path: "Kelias",
        cta: "Pateikti užklausą",
        menu: "Meniu",
        close: "Uždaryti",
        write: "Rašykite mums",
        biz: "Verslo klausimais →",
        jobs: "Karjera →",
        city: "Vilnius, Lietuva",
        company: "Įmonė",
        catalog: "Produktai",
        sub: "Prenumerata",
        subLead: "Viena įžvalga per mėnesį apie DI ekonomiką ir valdyseną.",
        email: "El. paštas",
        subscribe: "Prenumeruoti",
        code: "Įmonės kodas · užpildyti",
        vat: "PVM kodas · užpildyti",
        privacy: "Privatumo politika",
        cookies: "Slapukai",
        warn: "Prototipas: nė vienas skaičius nėra patvirtintas kliento rezultatas."
      };

  var NAV = IS_EN
    ? [
        {
          label: "Path",
          href: "path.html",
          cols: [
            {
              title: "1 · Person",
              items: [
                { label: "Executive AI productivity", href: "executive-ai.html", strong: true },
                { label: "A stronger person", href: "path.html#person" }
              ]
            },
            {
              title: "2 · Team",
              items: [
                { label: "Team AI working standard", href: "team-standard.html", strong: true },
                { label: "A stronger team", href: "path.html#team" }
              ]
            },
            {
              title: "3 · Process",
              items: [
                { label: "Transformation Sprint", href: "transformation-sprint.html", strong: true },
                { label: "OPPM — how we run the sprint", href: "oppm.html" },
                { label: "Process redesign and pilot", href: "path.html#process" }
              ],
              title2: "4 · Business",
              items2: [{ label: "When the process pays back", href: "path.html#business" }],
              more: { label: "Full path →", href: "path.html" }
            }
          ]
        },
        {
          label: "Products",
          href: "products.html",
          cols: [
            {
              title: "Smart work partners",
              items: [
                { label: "Virtual assistants", href: "products.html#partners" },
                { label: "Data-driven AI solutions", href: "products.html#partners" },
                { label: "Chatbot solutions", href: "products.html#partners" }
              ]
            },
            {
              title: "Automated tools",
              items: [
                { label: "LinkedIn outreach", href: "products.html#tools" },
                { label: "Cold-call workflow", href: "products.html#tools" },
                { label: "Smart AI dictaphone", href: "products.html#tools" }
              ],
              more: { label: "All products →", href: "products.html" }
            }
          ]
        },
        {
          label: "Academy",
          href: "academy.html",
          cols: [
            {
              title: "Programmes",
              items: [
                { label: "The Great AI Workshops", href: "academy.html#programmes" },
                { label: "Self-paced learning", href: "academy.html#programmes" },
                { label: "AI training for companies", href: "academy.html#programmes" }
              ],
              more: { label: "All programmes →", href: "academy.html" }
            }
          ]
        },
        {
          label: "Insights",
          href: "insights.html",
          cols: [
            {
              title: "Thinking",
              items: [
                { label: "Insights", href: "insights.html", strong: true },
                { label: "Philosophy", href: "philosophy.html" }
              ]
            },
            {
              title: "Evidence",
              items: [
                { label: "Client Zero", href: "case.html", strong: true },
                { label: "Cases", href: "case.html" }
              ],
              title2: "Free tools",
              items2: [{ label: "Diagnostics and AI IQ", href: "tools.html" }]
            }
          ]
        },
        { label: "About", href: "about.html" }
      ]
    : [
        {
          label: "Kelias",
          href: "sprendimai.html",
          cols: [
            {
              title: "1 · Žmogus",
              items: [
                { label: "Vadovų AI produktyvumas", href: "vadovu-ai-produktyvumas.html", strong: true },
                { label: "Stipresnis žmogus", href: "sprendimai.html#zmogus" }
              ]
            },
            {
              title: "2 · Komanda",
              items: [
                { label: "Komandos AI darbo standartas", href: "komandos-ai-standartas.html", strong: true },
                { label: "Stipresnė komanda", href: "sprendimai.html#komanda" }
              ]
            },
            {
              title: "3 · Procesas",
              items: [
                { label: "Transformation Sprint", href: "transformation-sprint.html", strong: true },
                { label: "OPPM — kaip vedame sprintą", href: "oppm.html" },
                { label: "Proceso redesign ir pilotas", href: "sprendimai.html#procesas" }
              ],
              title2: "4 · Verslas",
              items2: [{ label: "Kai procesas jau atsiperka", href: "sprendimai.html#verslas" }],
              more: { label: "Visas kelias →", href: "sprendimai.html" }
            }
          ]
        },
        {
          label: "Produktai",
          href: "produktai.html",
          cols: [
            {
              title: "Išmanūs darbo partneriai",
              items: [
                { label: "Universalūs virtualūs asistentai", href: "produktas-asistentai.html" },
                { label: "Duomenimis grįsti DI sprendimai", href: "produktas-duomenys.html" },
                { label: "Chatbot sprendimai", href: "produktas-chatbot.html" }
              ]
            },
            {
              title: "Automatizuoti įrankiai",
              items: [
                { label: "LinkedIn robotas", href: "produktas-linkedin.html" },
                { label: "Šaltų skambučių robotas", href: "produktas-skambuciai.html" },
                { label: "Išmanus DI diktofonas", href: "produktas-diktofonas.html" }
              ],
              more: { label: "Visi produktai →", href: "produktai.html" }
            }
          ]
        },
        {
          label: "Akademija",
          href: "akademija.html",
          cols: [
            {
              title: "Programos",
              items: [
                { label: "Didžiosios DI Dirbtuvės", href: "akademija-dirbtuves.html" },
                { label: "Savarankiškas tobulėjimas", href: "akademija-savarankiskai.html" },
                { label: "DI mokymai įmonėms", href: "akademija-imonems.html" }
              ],
              more: { label: "Visos programos →", href: "akademija.html" }
            }
          ]
        },
        {
          label: "Įžvalgos",
          href: "izvalgos.html",
          cols: [
            {
              title: "Mąstymas",
              items: [
                { label: "Įžvalgos", href: "izvalgos.html", strong: true },
                { label: "Filosofija", href: "filosofija.html" }
              ]
            },
            {
              title: "Įrodymai",
              items: [
                { label: "Client Zero", href: "atvejis.html", strong: true },
                { label: "Atvejai", href: "atvejis.html" }
              ],
              title2: "Nemokami įrankiai",
              items2: [{ label: "Diagnostika ir DI IQ", href: "irankiai.html" }]
            }
          ]
        },
        { label: "Apie", href: "apie.html" }
      ];

  var FOOT_PATH = IS_EN
    ? [
        ["Executive AI productivity", "executive-ai.html"],
        ["Team AI standard", "team-standard.html"],
        ["Transformation Sprint", "transformation-sprint.html"],
        ["OPPM method", "oppm.html"],
        ["Business model", "path.html#business"],
        ["Full path →", "path.html"]
      ]
    : [
        ["Vadovų AI produktyvumas", "vadovu-ai-produktyvumas.html"],
        ["Komandos AI standartas", "komandos-ai-standartas.html"],
        ["Transformation Sprint", "transformation-sprint.html"],
        ["OPPM metodas", "oppm.html"],
        ["Verslo modelis", "sprendimai.html#verslas"],
        ["Visas kelias →", "sprendimai.html"]
      ];

  var FOOT_CATALOG = IS_EN
    ? [
        ["Virtual assistants", "products.html#partners"],
        ["Chatbot solutions", "products.html#partners"],
        ["Automated tools", "products.html#tools"],
        ["Academy", "academy.html"],
        ["All products →", "products.html"]
      ]
    : [
        ["Virtualūs asistentai", "produktas-asistentai.html"],
        ["Chatbot sprendimai", "produktas-chatbot.html"],
        ["Automatizuoti įrankiai", "produktai.html#irankiai"],
        ["Akademija", "akademija.html"],
        ["Visi produktai →", "produktai.html"]
      ];

  var FOOT_CO = IS_EN
    ? [
        ["Philosophy", "philosophy.html"],
        ["Client Zero", "case.html"],
        ["Insights", "insights.html"],
        ["Free tools", "tools.html"],
        ["Contact", "contact.html"]
      ]
    : [
        ["Filosofija", "filosofija.html"],
        ["Client Zero", "atvejis.html"],
        ["Įžvalgos", "izvalgos.html"],
        ["Nemokami įrankiai", "irankiai.html"],
        ["Kontaktai", "kontaktai.html"]
      ];

  var VERDICTS = IS_EN
    ? {
        1: {
          lvl: "Stage 1 · Person",
          title: "AI is still an individual skill",
          body: "People already use AI at work, but their method is not captured or transferred. You have AI users, not capability. The rational next step is a stronger person — and a method for leaders to judge AI competence.",
          cta: { label: "Executive AI productivity · Stage 1", href: "executive-ai.html" },
          check: "Do you know which AI competences each role needs — and what you can require of the team?"
        },
        2: {
          lvl: "Stage 2 · Team",
          title: "Strong users, practice still in heads",
          body: "The team uses AI, but everyone works their own way. If the best user left tomorrow, the method would leave with them. The rational next step is to turn one person's best way of working into a team standard.",
          cta: { label: "Team AI working standard · Stage 2", href: "team-standard.html" },
          check: "If your best AI user left tomorrow, would their method remain as a skill, playbook or workflow?"
        },
        3: {
          lvl: "Stage 3 · Process",
          title: "The team can use AI, the work itself has not changed",
          body: "You have team practice, but the process is still the pre-AI process. This is where AI usually speeds up work that may not need to exist. The rational next step is redesigning one process until the number is proven.",
          cta: { label: "Transformation Sprint · Stage 3", href: "transformation-sprint.html" },
          check: "Name a process where AI does a defined part of the work and the human role has been redesigned."
        }
      }
    : {
        1: {
          lvl: "1 etapas · Žmogus",
          title: "AI yra pavienių žmonių gebėjimas",
          body: "Organizacijoje jau yra žmonių, kurie naudoja AI savo darbe, bet jų metodika neužfiksuota ir neperduodama. Turite AI naudotojų, bet ne kompetenciją. Racionalus kitas žingsnis — stipresnis žmogus ir vadovo metodas vertinti AI kompetenciją.",
          cta: { label: "Vadovų AI produktyvumas · 1 etapas", href: "vadovu-ai-produktyvumas.html" },
          check: "Ar žinote, kokių AI kompetencijų reikia skirtingoms rolėms — ir ko galite reikalauti iš komandos?"
        },
        2: {
          lvl: "2 etapas · Komanda",
          title: "Yra stiprių naudotojų, bet praktika lieka galvose",
          body: "Komanda jau naudoja AI, bet kiekvienas dirba savaip. Jei geriausias naudotojas išeitų, metodika išeitų su juo. Racionalus kitas žingsnis — vieno žmogaus geriausią darbo būdą paversti komandos standartu.",
          cta: { label: "Komandos AI darbo standartas · 2 etapas", href: "komandos-ai-standartas.html" },
          check: "Jei geriausias AI naudotojas rytoj išeitų — ar jo metodika liktų organizacijoje kaip Skill, playbook ar workflow?"
        },
        3: {
          lvl: "3 etapas · Procesas",
          title: "Komanda moka, bet pats darbas nepakeistas",
          body: "Turite komandos praktiką, bet procesas vis dar toks, koks buvo iki AI. Čia AI dažniausiai pagreitina tai, ko galbūt apskritai nereikėjo daryti. Racionalus kitas žingsnis — vieno proceso perprojektavimas iki įrodyto skaičiaus.",
          cta: { label: "Transformation Sprint · 3 etapas", href: "transformation-sprint.html" },
          check: "Įvardykite procesą, kuriame AI atlieka apibrėžtą darbo dalį, o žmogaus rolė perprojektuota."
        }
      };

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

  function buildNav(current) {
    var links = NAV.map(function (n) {
      if (!n.cols) {
        var cur = n.href.split("#")[0] === current ? ' aria-current="page"' : "";
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
      return (
        '<div class="navitem"><button aria-expanded="false">' +
        esc(n.label) +
        ' <span aria-hidden="true">\u25be</span></button><div class="drop">' +
        cols +
        "</div></div>"
      );
    }).join("");

    var ltCur = IS_EN ? "" : ' aria-current="true"';
    var enCur = IS_EN ? ' aria-current="true"' : "";
    var lang =
      '<span class="lang"><a href="' +
      (IS_EN ? otherLangHref() : file()) +
      '"' +
      ltCur +
      ">LT</a><span>/</span><a href=\"" +
      (IS_EN ? file() : otherLangHref()) +
      '"' +
      enCur +
      ">EN</a></span>";

    var assessHref = IS_EN ? "index.html#assess" : "index.html#vertinimas";
    var c0Href = IS_EN ? "case.html" : "atvejis.html";
    var pathHref = IS_EN ? "path.html" : "sprendimai.html";
    var contactHref = IS_EN ? "contact.html" : "kontaktai.html";
    var homeHref = "index.html";

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
      '<div class="proto">' +
      esc(COPY.proto) +
      "</div>" +
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
    var contact = IS_EN ? "contact.html" : "kontaktai.html";
    var privacy = IS_EN ? "privacy.html" : "privatumas.html";
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
      "<div><h5>" +
      esc(COPY.sub) +
      "</h5><p>" +
      esc(COPY.subLead) +
      '</p><form class="sub-form" data-demo-form>' +
      '<input type="email" placeholder="' +
      esc(COPY.email) +
      '" aria-label="' +
      esc(COPY.email) +
      '" required>' +
      '<button class="btn btn-s" type="submit">' +
      esc(COPY.subscribe) +
      "</button></form></div>" +
      "</div>" +
      '<div class="fbot"><a class="logo logo-foot" href="index.html" aria-label="DIPA">' +
      LOGO +
      "</a>" +
      "<span>" +
      esc(COPY.code) +
      "</span><span>" +
      esc(COPY.vat) +
      "</span><span>© 2026</span>" +
      '<a href="' +
      privacy +
      '">' +
      esc(COPY.privacy) +
      "</a>" +
      '<a href="' +
      privacy +
      '">' +
      esc(COPY.cookies) +
      "</a>" +
      '<span class="t-warn">' +
      esc(COPY.warn) +
      "</span></div></div></footer>"
    );
  }

  function initAssessment() {
    var root = document.getElementById("asq");
    var box = document.getElementById("verdict");
    if (!root || !box) return;
    var answers = [null, null, null];
    root.addEventListener("click", function (e) {
      var btn = e.target.closest(".asq-btn");
      if (!btn) return;
      var q = +btn.getAttribute("data-q");
      var v = +btn.getAttribute("data-v");
      answers[q] = v;
      Array.prototype.forEach.call(btn.parentNode.querySelectorAll(".asq-btn"), function (b) {
        b.setAttribute("aria-pressed", b === btn ? "true" : "false");
      });
      if (answers.indexOf(null) !== -1) return;
      var total = answers[0] + answers[1] + answers[2];
      var level = total <= 1 ? 1 : total <= 4 ? 2 : 3;
      var d = VERDICTS[level];
      document.getElementById("v-lvl").textContent = d.lvl;
      document.getElementById("v-title").textContent = d.title;
      document.getElementById("v-body").textContent = d.body;
      document.getElementById("v-check").textContent = d.check;
      document.getElementById("v-cta").href = d.cta.href;
      document.getElementById("v-cta-l").textContent = d.cta.label;
      box.hidden = false;
    });
  }

  function initForms() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-demo-form]"), function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        form.classList.add("is-sent");
        var ok = form.querySelector(".form-ok");
        if (ok) ok.focus();
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

  function enforceNoIndex() {
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
    var current = file();
    var head = document.getElementById("chrome-top");
    if (head) head.outerHTML = buildNav(current);
    var foot = document.getElementById("chrome-bottom");
    if (foot) foot.outerHTML = buildFooter();

    initAssessment();
    initForms();
    initDrawer();
    initOsx();

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
