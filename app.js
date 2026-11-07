/* Modelo 3 · Vidro: cartões de vidro com tilt 3D e brilho, parallax por profundidade, botões magnéticos. */
SECTIONS.render({
  before: `<div class="depth" aria-hidden="true"><i class="o1"></i><i class="o2"></i><i class="o3"></i><i class="o4"></i></div>`,
  heroArt: SECTIONS.baseArt,
});
FX.init();
FX.pointer(".proj-card, .work-card, .stat, .core-card");

if (!FX.reduce) {
  /* parallax: a posição do ponteiro (-0.5..0.5) alimenta camadas em profundidades diferentes */
  const root = document.documentElement;
  addEventListener("pointermove", (ev) => {
    root.style.setProperty("--px", (ev.clientX / innerWidth - 0.5).toFixed(3));
    root.style.setProperty("--py", (ev.clientY / innerHeight - 0.5).toFixed(3));
  }, { passive: true });

  /* botões magnéticos: puxam levemente em direção ao cursor quando ele chega perto */
  document.querySelectorAll("[data-magnet], .nav-cta, .filters button").forEach((el) => {
    addEventListener("pointermove", (ev) => {
      const r = el.getBoundingClientRect();
      const dx = ev.clientX - (r.left + r.width / 2), dy = ev.clientY - (r.top + r.height / 2);
      const near = Math.hypot(dx, dy) < Math.max(r.width, 70);
      el.style.translate = near ? `${(dx * 0.22).toFixed(1)}px ${(dy * 0.3).toFixed(1)}px` : "0 0";
    }, { passive: true });
  });

  /* cabeçalho ganha vidro mais denso depois de rolar */
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
}
