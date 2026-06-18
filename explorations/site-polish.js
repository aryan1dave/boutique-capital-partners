/* BCP site polish — shared elevation layer across all pages.
   Plain JS (NOT babel). Include once per page, just before </body>:
     <script src="site-polish.js"></script>
   Everything here is non-destructive and fails safe: if anything errors or
   IntersectionObserver is missing, content stays fully visible. Respects
   prefers-reduced-motion. Re-runs as the React app mounts/streams. */
(function () {
  "use strict";

  var REDUCED = false;
  try { REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  /* ---- inject shared CSS ---- */
  var EASE = "cubic-bezier(.22,1,.36,1)";
  var css = [
    "#sp-progress{position:fixed;top:0;left:0;height:3px;width:0;z-index:9999;",
    "background:linear-gradient(90deg,#DE5D5D,#E88A8A);transition:width .12s linear;pointer-events:none}",
    "header{transition:box-shadow .3s ease,padding .3s ease}",
    "header.sp-scrolled{box-shadow:0 6px 24px rgba(0,0,92,.10)!important}",
    ".sp-reveal{opacity:0;transform:translateY(18px);filter:blur(3px);",
    "transition:opacity .8s " + EASE + ",transform .8s " + EASE + ",filter .8s " + EASE + ";will-change:opacity,transform,filter}",
    ".sp-reveal.sp-in{opacity:1;transform:none;filter:none}",
    ".sp-c{opacity:0;transform:translateY(16px);",
    "transition:opacity .66s " + EASE + ",transform .66s " + EASE + ";will-change:opacity,transform}",
    ".sp-c.sp-c-in{opacity:1;transform:none}",
    "#sp-fade{position:fixed;inset:0;background:var(--bcp-cream,#F7EFD9);opacity:0;pointer-events:none;z-index:99999;transition:opacity .3s ease}",
    "#sp-fade.sp-show{opacity:1}",
    "@keyframes bcpDropIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}",
  ].join("");
  var style = document.createElement("style");
  style.id = "sp-style";
  style.textContent = css;
  document.head.appendChild(style);

  /* ---- scroll progress bar + sticky-header shadow ---- */
  var bar = document.createElement("div");
  bar.id = "sp-progress";
  document.body.appendChild(bar);

  /* ---- page-transition overlay (fade out on internal navigation) ---- */
  var fade = document.createElement("div");
  fade.id = "sp-fade";
  document.body.appendChild(fade);
  function isInternal(href, a) {
    if (!href) return false;
    if (a.getAttribute("target") === "_blank") return false;
    if (href[0] === "#") return false;
    if (/^(mailto:|tel:|https?:\/\/|\/\/)/i.test(href)) return false;
    return /\.html(\?|#|$)/i.test(href);
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a") : null;
    if (!a) return;
    var href = a.getAttribute("href");
    if (!isInternal(href, a)) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    if (REDUCED) { window.location.href = href; return; }
    fade.classList.add("sp-show");
    setTimeout(function () { window.location.href = href; }, 260);
  });
  window.addEventListener("pageshow", function () { fade.classList.remove("sp-show"); });

  /* ---- parallax (fail-open; JS owns the overscan so it can never gap) ---- */
  var plxImgs = [];
  var plxBgs = [];
  function setupParallax() {
    if (REDUCED) return;
    var imgs = document.querySelectorAll("img[data-parallax]:not([data-plx])");
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      img.setAttribute("data-plx", "1");
      var p = img.parentElement;
      if (p) {
        if (getComputedStyle(p).position === "static") p.style.position = "relative";
        p.style.overflow = "hidden";
      }
      img.style.position = "absolute";
      img.style.left = "0";
      img.style.width = "100%";
      img.style.height = "118%";
      img.style.top = "-9%";
      img.style.objectFit = "cover";
      img.style.willChange = "transform";
      plxImgs.push(img);
    }
    var bgs = document.querySelectorAll("[data-parallax-bg]:not([data-plx])");
    for (var j = 0; j < bgs.length; j++) {
      bgs[j].setAttribute("data-plx", "1");
      plxBgs.push(bgs[j]);
    }
  }
  function onParallax() {
    if (REDUCED) return;
    var vh = window.innerHeight;
    for (var i = 0; i < plxImgs.length; i++) {
      var img = plxImgs[i], p = img.parentElement;
      if (!p) continue;
      var r = p.getBoundingClientRect();
      if (r.bottom < -40 || r.top > vh + 40) continue;
      var prog = (r.top + r.height / 2 - vh / 2) / vh;
      img.style.transform = "translateY(" + (-prog * 38).toFixed(1) + "px)";
    }
    for (var k = 0; k < plxBgs.length; k++) {
      var el = plxBgs[k];
      var rr = el.getBoundingClientRect();
      if (rr.bottom < -40 || rr.top > vh + 40) continue;
      var pg = (rr.top + rr.height / 2 - vh / 2) / vh;
      el.style.backgroundPosition = "center calc(50% + " + (-pg * 22).toFixed(1) + "px)";
    }
  }

  function onScroll() {
    var st = window.pageYOffset || document.documentElement.scrollTop || 0;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (st / h) * 100 : 0) + "%";
    var header = document.querySelector("header");
    if (header) {
      if (st > 24) header.classList.add("sp-scrolled");
      else header.classList.remove("sp-scrolled");
    }
    onParallax();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  /* ---- count-up for [data-countup] elements ---- */
  function countUp(el) {
    if (el.__spCounted) return;
    el.__spCounted = true;
    var raw = (el.getAttribute("data-countup") || el.textContent || "").trim();
    var m = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!m) return;
    var prefix = m[1], numStr = m[2].replace(/,/g, ""), suffix = m[3];
    var target = parseFloat(numStr);
    if (isNaN(target)) return;
    var decimals = (numStr.split(".")[1] || "").length;
    // Don't animate bare 4-digit years (e.g. "2005") — counting up reads oddly.
    if (!prefix && !suffix && decimals === 0 && /^(19|20)\d{2}$/.test(numStr)) return;
    if (REDUCED) { el.textContent = prefix + target.toFixed(decimals) + suffix; return; }
    var dur = 1100, t0 = null;
    var ease = function (p) { return 1 - Math.pow(1 - p, 3); };
    function fmt(v) {
      var s = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-GB");
      return prefix + s + suffix;
    }
    function step(now) {
      if (!t0) t0 = now;
      var p = Math.min(1, (now - t0) / dur);
      el.textContent = fmt(target * ease(p));
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + (decimals ? target.toFixed(decimals) : target.toLocaleString("en-GB")) + suffix;
    }
    requestAnimationFrame(step);
  }

  /* ---- reveal-on-scroll w/ child stagger (safe: only below-fold elements hidden) ---- */
  // Find a set of children within a section to cascade in. Prefers an explicit
  // [data-sp-stagger] container, else the densest grid/flex row (cards, list).
  function findStagger(section) {
    var ex = section.querySelector("[data-sp-stagger]");
    if (ex) {
      var k0 = []; for (var a = 0; a < ex.children.length; a++) if (ex.children[a].nodeType === 1) k0.push(ex.children[a]);
      if (k0.length >= 2) return k0;
    }
    var all = section.querySelectorAll("div,ul");
    var best = null, bestN = 0;
    for (var i = 0; i < all.length; i++) {
      var c = all[i], disp;
      try { disp = getComputedStyle(c).display; } catch (e) { continue; }
      if (disp === "grid" || disp === "flex") {
        var kids = []; for (var k = 0; k < c.children.length; k++) if (c.children[k].nodeType === 1) kids.push(c.children[k]);
        if (kids.length >= 2 && kids.length <= 10 && kids.length > bestN) { best = kids; bestN = kids.length; }
      }
    }
    return best;
  }

  function fireCountups(el) {
    var c = el.querySelectorAll ? el.querySelectorAll("[data-countup]") : [];
    for (var i = 0; i < c.length; i++) countUp(c[i]);
  }

  var io = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var s = e.target;
        s.classList.add("sp-in");
        var kids = s.__spKids;
        if (kids) for (var i = 0; i < kids.length; i++) kids[i].classList.add("sp-c-in");
        fireCountups(s);
        io.unobserve(s);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
  }

  function processReveals() {
    if (REDUCED) {
      var cs = document.querySelectorAll("[data-countup]");
      for (var k = 0; k < cs.length; k++) countUp(cs[k]);
      return;
    }
    var secs = document.querySelectorAll("section:not([data-sp]), footer:not([data-sp])");
    for (var i = 0; i < secs.length; i++) {
      var s = secs[i];
      s.setAttribute("data-sp", "1");
      if (s.hasAttribute("data-sp-skip")) continue; // self-choreographed sections opt out
      var rect = s.getBoundingClientRect();
      var inView = rect.top < window.innerHeight * 0.88;
      if (inView) { fireCountups(s); continue; } // never hide first-screen content

      var kids = findStagger(s);
      if (kids && kids.length) {
        // Cascade the children; leave the section itself static (no double motion).
        for (var j = 0; j < kids.length; j++) {
          kids[j].classList.add("sp-c");
          kids[j].style.transitionDelay = Math.min(j * 0.06, 0.42) + "s";
        }
        s.__spKids = kids;
      } else {
        s.classList.add("sp-reveal");
      }
      if (io) io.observe(s);
      else { s.classList.add("sp-in"); if (s.__spKids) for (var m = 0; m < s.__spKids.length; m++) s.__spKids[m].classList.add("sp-c-in"); }
    }
  }

  /* ---- run now + as the React app mounts/streams ---- */
  var tries = 0;
  function tick() {
    processReveals();
    setupParallax();
    onScroll();
    if (++tries < 24) setTimeout(tick, 280);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", tick);
  } else {
    tick();
  }

  /* ---- global failsafe: nothing stays hidden ---- */
  setTimeout(function () {
    var hidden = document.querySelectorAll(".sp-reveal:not(.sp-in)");
    for (var i = 0; i < hidden.length; i++) hidden[i].classList.add("sp-in");
    var kids = document.querySelectorAll(".sp-c:not(.sp-c-in)");
    for (var j = 0; j < kids.length; j++) kids[j].classList.add("sp-c-in");
    var cs = document.querySelectorAll("[data-countup]");
    for (var k = 0; k < cs.length; k++) countUp(cs[k]);
  }, 4000);
})();
