/* Utilidades compartilhadas: reveal ao rolar, contadores, escape de HTML. Sem dependências. */
(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function onVisible(els, fn, opts) {
    if (reduce || !("IntersectionObserver" in window)) { els.forEach((el) => fn(el, true)); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { fn(en.target, false); io.unobserve(en.target); } });
    }, Object.assign({ threshold: 0.15, rootMargin: "0px 0px -6% 0px" }, opts));
    els.forEach((el) => io.observe(el));
  }

  function reveal(root) {
    const els = [...(root || document).querySelectorAll("[data-reveal]")];
    els.forEach((el, i) => {
      if (!el.style.getPropertyValue("--d")) {
        const sib = [...el.parentElement.children].filter((c) => c.hasAttribute("data-reveal")).indexOf(el);
        el.style.setProperty("--d", Math.min(sib, 8) * 70 + "ms");
      }
    });
    onVisible(els, (el) => el.classList.add("in"));
  }

  function counters(root) {
    const els = [...(root || document).querySelectorAll("[data-count]")];
    onVisible(els, (el, instant) => {
      const to = +el.dataset.count, suf = el.dataset.suffix || "";
      if (instant) { el.textContent = to + suf; return; }
      const t0 = performance.now(), dur = 1500;
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / dur), v = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(to * v) + suf;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
  }

  function progress(bar) {
    if (!bar) return;
    const set = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      bar.style.setProperty("--p", p.toFixed(4));
    };
    addEventListener("scroll", set, { passive: true }); set();
  }

  /* posição do ponteiro em --x/--y dentro do elemento (spotlight, brilho, tilt) */
  function pointer(sel, cb) {
    if (reduce) return;
    document.querySelectorAll(sel).forEach((el) => {
      el.addEventListener("pointermove", (ev) => {
        const r = el.getBoundingClientRect();
        const x = ev.clientX - r.left, y = ev.clientY - r.top;
        el.style.setProperty("--x", x + "px");
        el.style.setProperty("--y", y + "px");
        el.style.setProperty("--rx", (x / r.width - 0.5).toFixed(3));
        el.style.setProperty("--ry", (y / r.height - 0.5).toFixed(3));
        if (cb) cb(el, x, y, r);
      });
      el.addEventListener("pointerleave", () => {
        el.style.setProperty("--rx", 0); el.style.setProperty("--ry", 0);
      });
    });
  }

  const tipoRotulo = { autoral: "Produto próprio", publico: "Código aberto" };

  window.FX = { reduce, esc, reveal, counters, progress, pointer, onVisible, tipoRotulo,
    init(root) { reveal(root); counters(root); const y = document.getElementById("ano"); if (y) y.textContent = new Date().getFullYear(); } };
})();
