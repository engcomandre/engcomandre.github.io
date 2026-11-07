/* Gera a página inteira com a mesma estrutura/classes do site base (andre-vieira-site).
   Cada modelo chama SECTIONS.render({...}) e depois aplica seus próprios efeitos. */
(function () {
  const S = SITE, e = FX.esc;
  const chip = (t) => `<span>${e(t)}</span>`;
  const pad = (n) => String(n).padStart(2, "0");

  const atuacao = [
    ["⌘", "Engenharia de software", "APIs, serviços e integrações de alta disponibilidade, com testes, legibilidade e manutenção como requisito.", "BACKEND · FULL STACK"],
    ["◇", "Arquitetura & sistemas", "Modelagem de domínio, arquitetura hexagonal, microsserviços e desenho orientado a eventos com Kafka.", "DDD · EVENT-DRIVEN · HEXAGONAL"],
    ["⌁", "Plataforma & observabilidade", "Migração para Kubernetes, CI/CD e observabilidade com OpenTelemetry, Grafana, Prometheus e Loki.", "KUBERNETES · AWS · OTEL"],
  ];

  const parts = {
    stats: () => S.stats.map((s) => `<div class="stat" data-reveal><b data-count="${s.valor}" data-suffix="${e(s.sufixo)}">0</b><span>${e(s.rotulo)}</span></div>`).join(""),
    atuacao: () => atuacao.map((a, i) => `<article class="work-card" data-reveal><div class="card-index">${pad(i + 1)}</div><div class="card-icon">${a[0]}</div><h3>${e(a[1])}</h3><p>${e(a[2])}</p><span class="card-foot">${e(a[3])}</span></article>`).join(""),
    xp: () => S.experiencia.map((x) => `<article class="xp-item${x.atual ? " now" : ""}" data-reveal><div class="xp-when"><span class="xp-dot"></span><small>${e(x.periodo)}</small>${x.atual ? "<em>atual</em>" : ""}</div><div class="xp-body"><h3>${e(x.cargo)}</h3><p class="xp-co">${e(x.empresa)}</p><ul>${x.destaques.map((d) => `<li>${e(d)}</li>`).join("")}</ul></div></article>`).join(""),
    proj: () => S.projetos.map((p, i) => {
      const inner = `<div class="proj-top"><span class="badge ${p.tipo}">${e(FX.tipoRotulo[p.tipo])}</span><span class="proj-id">${pad(i + 1)}</span></div><h3>${e(p.nome)}</h3><p>${e(p.descricao)}</p><div class="chips">${p.stack.map(chip).join("")}</div><div class="proj-foot"><span>${e(p.estado)}</span>${p.link ? "<b>↗</b>" : ""}</div>`;
      return p.link
        ? `<a class="proj-card" data-tipo="${p.tipo}" href="${e(p.link)}" target="_blank" rel="noopener noreferrer" data-reveal>${inner}</a>`
        : `<article class="proj-card" data-tipo="${p.tipo}" data-reveal>${inner}</article>`;
    }).join(""),
    skills: () => S.competencias.map((c) => `<div class="stack-row" data-reveal><span class="stack-label">${e(c.grupo.toUpperCase())}</span><div class="chips">${c.itens.map(chip).join("")}</div></div>`).join(""),
  };

  function render(o = {}) {
    const title = o.title || `Ideias bem pensadas.<br><span class="gradient-text">Software bem construído.</span>`;
    document.body.innerHTML = `
    ${o.before || ""}
    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="${e(S.curto)}, início"><span class="brand-mark">AV<span>.</span></span><span class="brand-name">ANDRÉ VIEIRA</span></a>
      <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span></button>
      <nav class="nav"><a href="#sobre">Sobre</a><a href="#experiencia">Experiência</a><a href="#projetos">Projetos</a><a href="#tecnologias">Tecnologias</a><a href="#contato" class="nav-cta">Contato <span>↗</span></a></nav>
    </header>
    <main>
      <section class="hero section-wrap" id="inicio">
        <div class="hero-copy">
          <div class="eyebrow"><span class="status-dot"></span> ${e(S.titulo.toUpperCase())} <span class="eyebrow-line"></span> ${e(S.local.toUpperCase())}</div>
          <h1>${title}</h1>
          <p class="hero-lead">${e(S.resumo)}</p>
          <div class="hero-actions">
            <a class="button button-primary" data-magnet href="#projetos">Ver projetos <span>↘</span></a>
            <a class="text-link" href="${e(S.links.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn <span>↗</span></a>
            <a class="text-link" href="${e(S.links.github)}" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a>
          </div>
          <div class="hero-meta"><span>JAVA · KOTLIN</span><i></i><span>SPRING BOOT</span><i></i><span>KAFKA</span><i></i><span>KUBERNETES</span></div>
        </div>
        <div class="hero-art" role="img" aria-label="Ilustração abstrata de arquitetura de software">${o.heroArt || ""}</div>
        <div class="scroll-note"><span></span> ROLE PARA EXPLORAR</div>
      </section>

      <section class="intro section-wrap" id="sobre">
        <div class="section-kicker">01 / SOBRE</div>
        <div class="intro-content">
          <h2 data-split>Tecnologia com <span class="gradient-text">intenção.</span></h2>
          <div class="intro-columns">
            <p class="large-copy" data-reveal>${e(S.sobre[0])}</p>
            <div class="body-copy" data-reveal><p>${e(S.sobre[1])}</p></div>
          </div>
          <div class="stats">${parts.stats()}</div>
        </div>
      </section>

      <section class="work section-wrap" id="atuacao">
        <div class="section-heading"><div><div class="section-kicker">02 / ATUAÇÃO</div><h2 data-split>Do conceito à <span class="gradient-text">entrega.</span></h2></div><p>Onde concentro minha experiência.</p></div>
        <div class="work-grid">${parts.atuacao()}</div>
      </section>

      <section class="xp-sec section-wrap" id="experiencia">
        <div class="section-kicker">03 / EXPERIÊNCIA</div>
        <h2 data-split>Trajetória em <span class="gradient-text">sistemas críticos.</span></h2>
        <div class="xp">${parts.xp()}</div>
      </section>

      <section class="proj-sec section-wrap" id="projetos">
        <div class="section-heading"><div><div class="section-kicker">04 / PROJETOS</div><h2 data-split>O que estou <span class="gradient-text">construindo.</span></h2></div>
          <div class="filters" role="group" aria-label="Filtrar projetos"><button class="on" data-f="todos">Todos</button><button data-f="autoral">Produtos próprios</button><button data-f="publico">Código aberto</button></div></div>
        <div class="proj-grid">${parts.proj()}</div>
      </section>

      <section class="stack section-wrap" id="tecnologias">
        <div class="section-kicker">05 / TECNOLOGIAS</div>
        <div class="stack-layout"><h2 data-split>Ferramentas para<br><span class="gradient-text">resolver problemas.</span></h2><div class="stack-groups">${parts.skills()}</div></div>
      </section>

      <section class="contact section-wrap" id="contato">
        <div class="contact-panel"><div class="section-kicker">06 / CONTATO</div><div class="contact-content">
          <div><h2>Vamos construir<br><span class="gradient-text">algo consistente?</span></h2><p>Arquitetura, backend e liderança técnica: a conversa é bem-vinda.</p></div>
          <div class="contact-links">
            <a href="mailto:${e(S.links.email)}"><span>E-mail</span><b>↗</b></a>
            <a href="${e(S.links.linkedin)}" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><b>↗</b></a>
            <a href="${e(S.links.github)}" target="_blank" rel="noopener noreferrer"><span>GitHub</span><b>↗</b></a>
          </div></div></div>
      </section>
    </main>
    <footer class="footer section-wrap"><a class="brand" href="#inicio"><span class="brand-mark">AV<span>.</span></span><span class="brand-name">ANDRÉ VIEIRA</span></a><span>© <span id="ano"></span> ${e(S.nome)}</span><a href="privacidade.html">Privacidade</a><span class="footer-note">FORTALEZA · BRASIL</span></footer>
    ${o.after || ""}`;

    wire();
  }

  function wire() {
    const btn = document.querySelector(".menu-toggle"), nav = document.querySelector(".nav");
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { nav.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); }));

    const buttons = [...document.querySelectorAll(".filters button")];
    buttons.forEach((b) => b.addEventListener("click", () => {
      buttons.forEach((x) => x.classList.toggle("on", x === b));
      document.querySelectorAll(".proj-card").forEach((c) => {
        const show = b.dataset.f === "todos" || c.dataset.tipo === b.dataset.f;
        c.hidden = !show;
        if (show) { c.classList.remove("pop"); void c.offsetWidth; c.classList.add("pop"); }
      });
    }));

    /* títulos [data-split]: palavra por palavra, preservando o span do gradiente */
    document.querySelectorAll("[data-split]").forEach((h) => {
      let i = 0;
      const wrap = (node) => {
        [...node.childNodes].forEach((n) => {
          if (n.nodeType === 3) {
            const frag = document.createDocumentFragment();
            n.textContent.split(/(\s+)/).forEach((w) => {
              if (!w.trim()) { frag.append(w); return; }
              const s = document.createElement("span");
              s.className = "w"; s.style.setProperty("--i", i++); s.textContent = w;
              frag.append(s);
            });
            n.replaceWith(frag);
          } else if (n.nodeType === 1 && n.tagName !== "BR") wrap(n);
        });
      };
      wrap(h);
      h.setAttribute("data-reveal-split", "");
    });
    FX.onVisible([...document.querySelectorAll("[data-reveal-split]")], (el) => el.classList.add("in"), { threshold: 0.3 });

    /* linha da timeline de experiência acompanha a rolagem */
    const xp = document.querySelector(".xp");
    const line = () => {
      const r = xp.getBoundingClientRect(), vh = innerHeight;
      xp.style.setProperty("--p", Math.max(0, Math.min(1, (vh * 0.65 - r.top) / r.height)).toFixed(3));
    };
    addEventListener("scroll", line, { passive: true }); line();
  }

  const baseArt = `<div class="art-grid"></div><div class="orbit orbit-a"></div><div class="orbit orbit-b"></div><div class="orbit orbit-c"></div>
    <div class="core-card"><div class="core-top"><span class="core-dot"></span><span class="core-dot"></span><span class="core-dot"></span><span class="core-label">SYSTEMS / 001</span></div><div class="core-symbol">{ }</div><div class="core-caption">CONSTRUINDO<br><b>O QUE VEM</b></div></div>
    <span class="float-tag tag-a">JAVA&nbsp; / &nbsp;KOTLIN</span><span class="float-tag tag-b">EVENT-DRIVEN</span><span class="float-tag tag-c">HEXAGONAL</span>
    <div class="art-cross cross-a">+</div><div class="art-cross cross-b">+</div>`;

  window.SECTIONS = { render, baseArt };
})();
