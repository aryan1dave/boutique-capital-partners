// BCP Homepage Redesign — section components (selectivity-led blueprint, option C)
// Loaded via Babel; exposes window.RedesignSections

const A = "../assets";
const DS = window.BoutiqueCapitalPartnersDesignSystem_7ef874;

/* ——— 1 · HERO — one door, quiet buyer path ——— */
function RHero() {
  const { Button } = DS;
  const [hov, setHov] = React.useState(false);
  return (
    <section data-screen-label="Hero" data-parallax-bg="1" style={{
      position: "relative", minHeight: "86vh", display: "flex", alignItems: "center",
      backgroundImage: `url('${A}/images/wave-banner.webp')`, backgroundSize: "cover",
      backgroundPosition: "center", padding: "0 5%", boxSizing: "border-box", overflow: "hidden",
    }}>
      {/* protection scrim — guarantees text legibility over the photo, warm cream from the left */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(247,239,217,0.92) 0%, rgba(247,239,217,0.72) 32%, rgba(247,239,217,0.30) 52%, rgba(247,239,217,0) 70%)", pointerEvents: "none" }}></div>
      <div style={{ position: "relative", width: "100%", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ maxWidth: "660px" }} className="hero-anim">
          <h1 style={{ fontSize: "clamp(40px, 5vw, 62px)", lineHeight: 1.12, letterSpacing: "-1px", color: "var(--bcp-navy)", margin: "0 0 28px 0", fontWeight: 400 }}>
            <em style={{ fontWeight: 400 }}>Outsourced</em> distribution for{" "}
            <strong style={{ fontWeight: 700, fontStyle: "normal" }}>outstanding</strong> investment strategies
          </h1>
          <p style={{ fontSize: "clamp(17px, 1.5vw, 20px)", lineHeight: 1.65, color: "var(--bcp-navy)", margin: "0 0 40px 0", maxWidth: "500px" }}>
            We provide distribution for high-quality, differentiated investment strategies seeking access to the UK,
            Irish and Swiss intermediary markets.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "26px", flexWrap: "wrap" }}>
            <Button size="lg" arrow href="#contact">Partner with us</Button>
            <a href="#fund" style={{
              fontSize: "15px", fontWeight: 600, color: "var(--bcp-navy)", textDecoration: "none",
              borderBottom: "2px solid var(--bcp-coral)", paddingBottom: "3px",
            }}>Access our fund partners →</a>
          </div>
        </div>
      </div>
      <div className="hero-anim hero-anim-2" style={{ position: "absolute", bottom: "48px", right: "5%" }}>
        <a href="Insights Hub.html" style={{ textDecoration: "none", display: "block" }}>
          <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
            background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
            borderRadius: "var(--radius-lg)", width: "330px", border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: hov ? "var(--shadow-float-hover)" : "var(--shadow-float)", overflow: "hidden",
            transform: hov ? "translateY(-4px)" : "none", transition: "transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease",
          }}>
            <div style={{ display: "flex", alignItems: "stretch" }}>
              <div style={{ width: "96px", flexShrink: 0, overflow: "hidden" }}>
                <img src={`${A}/images/puffin-shuffle.jpg`} alt="" style={{
                  width: "100%", height: "100%", objectFit: "cover", display: "block",
                  transform: hov ? "scale(1.08)" : "none", transition: "transform 0.6s cubic-bezier(.22,1,.36,1)",
                }} />
              </div>
              <div style={{ padding: "16px 20px", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "9px" }}>
                  <span style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "1.2px", color: "var(--bcp-coral)" }}>Viewpoint</span>
                  <span style={{ width: "1px", height: "11px", background: "var(--bcp-sand-300)" }}></span>
                  <span style={{ fontSize: "10.5px", fontWeight: 500, color: "var(--bcp-sand-400)", letterSpacing: "0.5px" }}>Q4 2025</span>
                </div>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "var(--bcp-navy)", lineHeight: 1.35, margin: "0 0 12px 0", letterSpacing: "-0.2px" }}>
                  The Russell Shuffle: When growth meets value
                </h3>
                <span style={{ display: "inline-flex", alignItems: "center", gap: hov ? "9px" : "6px", fontSize: "12.5px", fontWeight: 600, color: "var(--bcp-coral)", transition: "gap 0.3s ease" }}>
                  Read
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "13px", height: "13px" }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
      {/* scroll cue */}
      <div className="hero-anim hero-anim-3" style={{ position: "absolute", bottom: "30px", left: "5%", display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", color: "var(--bcp-navy)", opacity: 0.6 }}>Scroll</span>
        <span style={{ position: "relative", width: "1px", height: "40px", background: "rgba(0,0,92,0.2)", overflow: "hidden" }}>
          <span className="hero-scroll-dot" style={{ position: "absolute", left: 0, top: 0, width: "1px", height: "14px", background: "var(--bcp-coral)" }}></span>
        </span>
      </div>
    </section>
  );
}

/* ——— 2 · SELECTIVITY STRIP — floating panel with a choreographed sweep ——— */
function CountNum({ value, run, style }) {
  var initial = String(value);
  const [disp, setDisp] = React.useState(initial);
  React.useEffect(() => {
    if (!run) return;
    var reduce = false;
    try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
    var m = String(value).match(/^([^\d]*)([\d.,]+)(.*)$/);
    if (!m || reduce) { setDisp(value); return; }
    var prefix = m[1], numStr = m[2].replace(/,/g, ""), suffix = m[3];
    var tgt = parseFloat(numStr), dec = (numStr.split(".")[1] || "").length;
    var raf, t0 = null, dur = 1200;
    var ease = function (p) { return 1 - Math.pow(1 - p, 3); };
    var step = function (now) {
      if (!t0) t0 = now;
      var p = Math.min(1, (now - t0) / dur);
      var v = tgt * ease(p);
      setDisp(prefix + (dec ? v.toFixed(dec) : Math.round(v)) + suffix);
      if (p < 1) raf = requestAnimationFrame(step);
      else setDisp(value);
    };
    setDisp(prefix + "0" + suffix);
    raf = requestAnimationFrame(step);
    var failsafe = setTimeout(function () { setDisp(value); }, 1500);
    return function () { if (raf) cancelAnimationFrame(raf); clearTimeout(failsafe); };
  }, [run, value]);
  return <span style={style}>{disp}</span>;
}

function RSelectivity() {
  const stats = [
    { big: "100+", small: "strategies reviewed each year" },
    { big: "1", small: "partnership signed to date — by design", accent: true },
    { big: "4", small: "jurisdictions: UK, CI, Ireland, Switzerland" },
    { big: "23", small: "years building UK distribution" },
  ];
  var reduce = false;
  try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  const [lit, setLit] = React.useState(reduce);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (lit) return;
    var el = ref.current;
    var done = false;
    var light = function () { if (!done) { done = true; setLit(true); } };
    var io = null;
    if (el && "IntersectionObserver" in window) {
      io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { light(); io.disconnect(); } });
      }, { threshold: 0.35 });
      io.observe(el);
    } else { light(); }
    var t = setTimeout(light, 1600);
    return function () { clearTimeout(t); if (io) io.disconnect(); };
  }, [lit]);

  const EASE = "cubic-bezier(0.4,0,0.2,1)";
  const Corner = ({ pos }) => {
    const base = { position: "absolute", width: "40px", height: "40px", borderColor: "var(--bcp-coral)", transition: "opacity 0.7s " + EASE + ", transform 0.7s " + EASE, opacity: lit ? 1 : 0 };
    const map = {
      tl: { top: "-1px", left: "-1px", borderTop: "3px solid", borderLeft: "3px solid", transform: lit ? "none" : "translate(8px,8px)" },
      br: { bottom: "-1px", right: "-1px", borderBottom: "3px solid", borderRight: "3px solid", transform: lit ? "none" : "translate(-8px,-8px)" },
    };
    return <span style={{ ...base, ...map[pos] }}></span>;
  };
  return (
    <section data-screen-label="Selectivity strip" data-sp-skip="1" style={{ background: "var(--bcp-cream)", padding: "64px 5%" }}>
      <div ref={ref} style={{
        position: "relative", maxWidth: "1140px", margin: "0 auto", padding: "44px 40px 40px",
      }}>
        <Corner pos="tl" />
        <Corner pos="br" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {stats.map((s, i) => (
            <div key={s.small} style={{ position: "relative", padding: "4px 34px" }}>
              {i > 0 ? (
                <div style={{
                  position: "absolute", left: 0, top: "10%", height: "80%", width: "1px",
                  background: "var(--bcp-sand-300)", transformOrigin: "top",
                  transform: lit ? "scaleY(1)" : "scaleY(0)",
                  transition: "transform 0.5s " + EASE, transitionDelay: (0.2 + i * 0.14) + "s",
                }}></div>
              ) : null}
              <div style={{
                transform: lit ? "none" : "translateY(10px)", opacity: lit ? 1 : 0,
                transition: "opacity 0.6s " + EASE + ", transform 0.6s " + EASE, transitionDelay: (0.15 + i * 0.14) + "s",
              }}>
                <CountNum value={s.big} run={lit} style={{
                  display: "block", fontSize: "clamp(34px, 3vw, 42px)", fontWeight: 600,
                  lineHeight: 1, letterSpacing: "-1px", color: s.accent ? "var(--bcp-coral)" : "var(--bcp-navy)",
                }} />
                <div style={{
                  height: "2px", borderRadius: "2px", background: "var(--bcp-coral)",
                  width: lit ? "28px" : "0px", margin: "16px 0 13px",
                  transition: "width 0.6s " + EASE, transitionDelay: (0.3 + i * 0.14) + "s",
                }}></div>
                <div style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.55, color: "var(--bcp-gray-600)", maxWidth: "185px" }}>{s.small}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— 3 · FEATURE — proof of selectivity ——— */
function RFundFeature() {
  const { Button } = DS;
  var reduce = false;
  try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  const [lit, setLit] = React.useState(reduce);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (lit) return;
    var el = ref.current, done = false;
    var light = function () { if (!done) { done = true; setLit(true); } };
    var io = null;
    if (el && "IntersectionObserver" in window) {
      io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { light(); io.disconnect(); } });
      }, { threshold: 0.2 });
      io.observe(el);
    } else { light(); }
    var t = setTimeout(light, 1800);
    return function () { clearTimeout(t); if (io) io.disconnect(); };
  }, [lit]);

  const EASE = "cubic-bezier(0.4,0,0.2,1)";
  const rise = (d) => ({
    opacity: lit ? 1 : 0,
    transform: lit ? "none" : "translateY(24px)",
    transition: "opacity 0.7s " + EASE + ", transform 0.7s " + EASE,
    transitionDelay: d + "s",
  });
  const stats = [
    { k: "Founded", v: "2005" },
    { k: "Total assets", v: "$11.8bn" },
    { k: "Strategy launched", v: "2014" },
    { k: "Wrapper", v: "UK OEIC" },
  ];

  return (
    <section id="fund" data-screen-label="Fund feature" data-sp-skip="1" style={{ background: "var(--bcp-cream)", padding: "104px 5% 100px", overflow: "hidden", position: "relative" }}>
      <img src={`${A}/marks/swirl-teal.svg`} alt="" style={{ position: "absolute", right: "-140px", top: "-80px", width: "520px", opacity: 0.1, pointerEvents: "none" }} />
      <div ref={ref} style={{ maxWidth: "1240px", margin: "0 auto", position: "relative" }}>

        {/* Editorial intro — left heading / right body split */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "end", marginBottom: "26px" }}>
          <div style={rise(0)}>
            <div style={{ display: "flex", alignItems: "center", gap: "13px", marginBottom: "18px" }}>
              <span style={{ width: "30px", height: "2px", background: "var(--bcp-coral)" }}></span>
              <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", color: "var(--bcp-coral)" }}>Fund partners</span>
            </div>
            <h2 style={{ fontSize: "clamp(38px, 4.2vw, 52px)", fontWeight: 600, letterSpacing: "-0.8px", lineHeight: 1.08, color: "var(--bcp-navy)", margin: 0 }}>
              Focusing on<br />best in class
            </h2>
          </div>
          <div style={rise(0.12)}>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--bcp-gray-600)", margin: "0 0 16px 0" }}>
              We collaborate with a select group of exceptional fund managers, offering well-defined, disciplined and
              proven investment strategies.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--bcp-gray-600)", margin: 0 }}>
              Through these partnerships, our goal is to provide fund buyers with the very best investment strategies,
              built by smaller, lesser-known, but highly experienced managers.
            </p>
          </div>
        </div>

        {/* Signpost row — frames the card as the chosen partner */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", margin: "0 0 22px 0", ...rise(0.22) }}>
          <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", color: "var(--bcp-navy)" }}>Our fund partner</span>
          <span style={{ flex: 1, height: "1px", background: "var(--bcp-sand-300)" }}></span>
          <span style={{ fontFamily: "var(--font-serif-accent)", fontSize: "15px", color: "var(--bcp-sand-400)" }}>01 / 01</span>
        </div>

        {/* Fund tearsheet */}
        <div style={{
          borderRadius: "var(--radius-2xl)", overflow: "hidden", boxShadow: lit ? "var(--shadow-card-hover)" : "none",
          background: "var(--bcp-navy)", position: "relative",
          opacity: lit ? 1 : 0, transform: lit ? "none" : "translateY(34px)",
          transition: "opacity 0.8s " + EASE + " 0.28s, transform 0.8s " + EASE + " 0.28s, box-shadow 0.8s " + EASE + " 0.5s",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr" }}>
            <div style={{ padding: "52px 56px 46px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", zIndex: 1 }}>
              <div style={{ ...rise(0.42), fontSize: "13px", fontWeight: 700, letterSpacing: "2.5px", color: "#fff", marginBottom: "10px" }}>River Road Asset Management</div>
              <div style={{ ...rise(0.48), fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.4px", marginBottom: "26px" }}>
                Louisville, Kentucky · US value equity
              </div>
              <h3 style={{ ...rise(0.54), fontFamily: "var(--font-serif-accent)", fontSize: "40px", fontWeight: 400, color: "#fff", margin: "0 0 16px 0", lineHeight: 1.1 }}>
                US Large&nbsp;Cap<br />Value&nbsp;Select
              </h3>
              <p style={{ ...rise(0.6), fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.82)", margin: "0 0 34px 0", maxWidth: "440px" }}>
                A concentrated, highly active US value strategy — now available as a UK OEIC, exclusively through BCP,
                with fee waivers agreed and access on most major platforms.
              </p>
              <div style={{ ...rise(0.68), display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Button arrow href="River Road Fund.html">View the fund</Button>
                <Button variant="outline" href="Fund Information & Document Centre.html">Document centre</Button>
              </div>
            </div>

            <div style={{ position: "relative", minHeight: "470px", overflow: "hidden" }}>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `url('${A}/images/mountain-view.webp')`, backgroundSize: "cover", backgroundPosition: "center",
                clipPath: lit ? "inset(0 0 0 0)" : "inset(0 0 0 100%)",
                transition: "clip-path 1.1s " + EASE + " 0.4s",
              }}></div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, var(--bcp-navy) 0%, rgba(0,0,92,0.35) 22%, rgba(0,0,92,0) 55%)" }}></div>
              <span style={{
                position: "absolute", bottom: "24px", right: "24px", width: "52px", height: "52px",
                borderBottom: "3px solid var(--bcp-coral)", borderRight: "3px solid var(--bcp-coral)",
                opacity: lit ? 1 : 0, transform: lit ? "none" : "translate(-10px,-10px)",
                transition: "opacity 0.6s " + EASE + " 1.1s, transform 0.6s " + EASE + " 1.1s",
              }}></span>
            </div>
          </div>

          {/* Data footer — staggered count-up */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid rgba(255,255,255,0.14)", background: "rgba(0,0,0,0.16)" }}>
            {stats.map((d, i) => (
              <div key={d.k} style={{
                padding: "22px 32px", borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.14)",
                opacity: lit ? 1 : 0, transform: lit ? "none" : "translateY(12px)",
                transition: "opacity 0.5s " + EASE + " " + (0.7 + i * 0.1) + "s, transform 0.5s " + EASE + " " + (0.7 + i * 0.1) + "s",
              }}>
                <div style={{ fontSize: "10.5px", fontWeight: 600, letterSpacing: "1.2px", color: "rgba(255,255,255,0.5)", marginBottom: "8px" }}>{d.k}</div>
                <CountNum value={d.v} run={lit} style={{ display: "block", fontSize: "26px", fontWeight: 600, color: "#fff", letterSpacing: "-0.3px" }} />
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: "12.5px", color: "var(--bcp-sand-400)", margin: "16px 4px 0", lineHeight: 1.6 }}>
          River Road total assets as at the source date; figures for illustration. Capital is at risk. Past performance
          does not predict future returns. For professional investors and advisers only.
        </p>
      </div>
    </section>
  );
}

/* ——— 4 · WHAT WE DO — editorial index with expanding rows ——— */
function RServices() {
  const [open, setOpen] = React.useState(0);
  const toggle = (next) => {
    // flushSync guarantees the expand/collapse commits immediately, even in
    // instrumented preview iframes where the async scheduler can stall.
    ReactDOM.flushSync(() => setOpen(next));
  };
  const clusters = [
    {
      icon: "service-vehicle.svg", title: "Establish", verb: "Before launch",
      copy: "The route to market, built properly: vehicle establishment with trusted partners, validated by pre-launch research with the buyers themselves — so you launch into demand, not hope.",
      items: ["Vehicle establishment", "Pre-launch market research"],
      image: "mountain-view.webp",
    },
    {
      icon: "service-distribution.svg", title: "Distribute", verb: "In market",
      copy: "A fully outsourced distribution team with established intermediary relationships across the UK, Channel Islands, Ireland and Switzerland — with monthly reporting against agreed KPIs.",
      items: ["Distribution solution", "Distribution strategy", "Monthly sales reporting"],
      image: "wave-banner.webp",
    },
    {
      icon: "service-communication.svg", title: "Amplify", verb: "Always on",
      copy: "Keeping your strategy in front of intermediaries: communication channels, roadshows, and marketing & PR with specialist partners who know this audience.",
      items: ["Communication channels", "Roadshow planning", "Marketing & PR"],
      image: "puffin-cliff.webp",
    },
  ];
  return (
    <section id="services" data-screen-label="What we do" style={{ background: "var(--bcp-cream)", padding: "0 5% 110px", position: "relative", overflow: "hidden" }}>
      <img src={`${A}/marks/swirl-coral.svg`} alt="" style={{ position: "absolute", left: "-160px", bottom: "-120px", width: "460px", opacity: 0.08, pointerEvents: "none" }} />
      <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", borderTop: "1px solid var(--bcp-sand-300)", paddingTop: "76px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "30px", flexWrap: "wrap", marginBottom: "26px" }}>
          <div style={{ maxWidth: "560px" }}>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "none", color: "var(--bcp-coral)", marginBottom: "14px" }}>For fund managers</div>
            <h2 style={{ fontSize: "clamp(34px, 3.6vw, 46px)", fontWeight: 600, letterSpacing: "-0.8px", lineHeight: 1.15, color: "var(--bcp-navy)", margin: 0 }}>
              What we do for managers
            </h2>
          </div>
          <p style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--bcp-gray-600)", margin: 0, maxWidth: "360px" }}>
            Eight services across the partnership lifecycle — one outcome: your strategy distributed properly, without
            building an in-house team.
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--bcp-sand-300)" }}>
          {clusters.map((c, i) => {
            const isOpen = open === i;
            return (
              <div key={c.title} style={{ borderBottom: "1px solid var(--bcp-sand-300)" }}>
                <div
                  onClick={() => toggle(isOpen ? null : i)}
                  className="r-svc-row"
                  style={{
                    display: "grid", gridTemplateColumns: "90px 1fr auto auto", alignItems: "center", gap: "28px",
                    padding: isOpen ? "34px 10px 10px" : "30px 10px", cursor: "pointer",
                    transition: "padding 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <span style={{
                    fontSize: "14px", fontWeight: 600, letterSpacing: "2px",
                    color: isOpen ? "var(--bcp-coral)" : "var(--bcp-sand-400)", transition: "color 0.3s ease",
                  }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{
                    fontSize: "clamp(30px, 3.4vw, 46px)", fontWeight: 600, letterSpacing: "-0.5px", margin: 0,
                    color: "var(--bcp-navy)", lineHeight: 1.1,
                    transform: isOpen ? "translateX(6px)" : "none", transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
                  }}>{c.title}</h3>
                  <span style={{
                    fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "none",
                    color: isOpen ? "var(--bcp-coral)" : "var(--bcp-sand-400)", transition: "color 0.3s ease",
                  }}>{c.verb}</span>
                  <span style={{
                    width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
                    border: isOpen ? "1.5px solid var(--bcp-coral)" : "1.5px solid var(--bcp-sand-300)",
                    background: isOpen ? "var(--bcp-coral)" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#fff" : "var(--bcp-navy)"} strokeWidth="2" strokeLinecap="round" style={{
                      width: "18px", height: "18px", transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
                      transform: isOpen ? "rotate(45deg)" : "none",
                    }}>
                      <path d="M12 5v14M5 12h14"></path>
                    </svg>
                  </span>
                </div>

                <div style={{
                  display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.45s cubic-bezier(0.4,0,0.2,1)",
                }}>
                  <div style={{ overflow: "hidden" }}>
                    <div style={{
                      display: "grid", gridTemplateColumns: "90px 1.3fr 1fr", gap: "28px",
                      padding: "8px 10px 40px", alignItems: "start",
                    }}>
                      <div style={{
                        width: "54px", height: "54px", background: "var(--bcp-coral)", borderRadius: "var(--radius-lg)",
                        display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", boxSizing: "border-box",
                      }}>
                        <img src={`${A}/icons/${c.icon}`} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                      </div>
                      <div>
                        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--bcp-gray-600)", margin: "0 0 22px 0", maxWidth: "520px" }}>{c.copy}</p>
                        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
                          {c.items.map((it) => (
                            <span key={it} className="r-chip" style={{
                              fontSize: "13px", fontWeight: 600, color: "var(--bcp-navy)",
                              background: "var(--bcp-cream-button)", padding: "9px 16px", borderRadius: "20px",
                              transition: "all 0.25s ease", cursor: "default",
                            }}>{it}</span>
                          ))}
                        </div>
                        <a href="#" style={{ fontSize: "15px", fontWeight: 600, color: "var(--bcp-coral)", textDecoration: "none" }}>
                          Explore all services →
                        </a>
                      </div>
                      <div style={{
                        height: "200px", borderRadius: "var(--radius-xl)", overflow: "hidden",
                        backgroundImage: `url('${A}/images/${c.image}')`, backgroundSize: "cover", backgroundPosition: "center",
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ——— 5 · WHO WE ARE — slim ——— */
function RTeam() {
  const faces = ["alan-higgins.png", "julia-warrander.png", "kelly-prior.png"];
  return (
    <section data-screen-label="Who we are" style={{ background: "var(--bcp-navy)", padding: "110px 5%" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "56px", alignItems: "center" }}>
        <img src={`${A}/people/rodger-kennedy.png`} alt="Rodger Kennedy" style={{ width: "190px", borderRadius: "var(--radius-md)", display: "block" }} />
        <div>
          <h2 style={{ fontSize: "clamp(32px, 3.2vw, 40px)", fontWeight: 600, letterSpacing: "-0.8px", color: "#fff", margin: "0 0 18px 0", lineHeight: 1.2 }}>
            Built on 23 years of UK wealth distribution
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.85)", margin: "0 0 24px 0", maxWidth: "520px" }}>
            Founder Rodger Kennedy led London wealth distribution at Ninety One. Behind him sits an advisory board of
            CIOs, fund selectors and product specialists who pressure-test every partnership before we commit.
          </p>
          <a href="Meet the Team.html" style={{ fontSize: "15px", fontWeight: 600, color: "var(--bcp-coral)", textDecoration: "none" }}>Meet the team →</a>
        </div>
        <div style={{ display: "grid", gap: "14px" }}>
          {faces.map((f) => (
            <img key={f} src={`${A}/people/${f}`} alt="" style={{ width: "84px", borderRadius: "var(--radius-md)", display: "block" }} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— 6 · LATEST INSIGHTS ——— */
function RInsights() {
  const { SectionHeading, InsightCard, Button } = DS;
  const items = [
    { image: `${A}/images/puffin-shuffle.jpg`, date: "Dec 2025", category: "Market Commentary", title: "The Russell Shuffle: When growth meets value", excerpt: "As 2025 draws to a close, the line between growth and value is moving." },
    { image: `${A}/images/mountain-view.webp`, date: "Oct 2025", category: "Market Commentary", title: "Why now for active US value equities?", excerpt: "Alex Marshall-Tate explores the case for US value equities today." },
    { image: `${A}/images/wave-banner.webp`, date: "Jan 2025", category: "Partnership News", title: "BCP partners with River Road Asset Management", excerpt: "A foundational distribution partnership with a leading US value manager." },
  ];
  return (
    <section id="insights" data-screen-label="Insights" style={{ background: "var(--bcp-cream)", padding: "100px 5%" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px", gap: "30px", flexWrap: "wrap" }}>
          <SectionHeading align="left" title="Latest insights" />
          <Button variant="tertiary" href="Insights Hub.html">View all insights</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
          {items.map((it) => <InsightCard key={it.title} {...it} />)}
        </div>
      </div>
    </section>
  );
}

/* ——— 7 · PUFFIN TEASER ——— */
function RPuffin() {
  return (
    <section data-screen-label="Puffin teaser" style={{ background: "var(--bcp-teal-section)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "300px 1fr auto", alignItems: "center", gap: "44px", padding: "0 5%" }}>
        <img src={`${A}/images/puffin-cliff.webp`} alt="Atlantic Puffin" style={{ width: "100%", display: "block", alignSelf: "stretch", objectFit: "cover", minHeight: "200px" }} />
        <div style={{ padding: "36px 0" }}>
          <h3 style={{ fontSize: "clamp(22px, 2vw, 26px)", fontWeight: 600, letterSpacing: "-0.3px", color: "#fff", margin: "0 0 12px 0", lineHeight: 1.3 }}>
            Proud supporters of the Atlantic Puffin
          </h3>
          <p style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(255,255,255,0.9)", margin: 0, maxWidth: "520px" }}>
            In association with the Scottish Seabird Centre — because distinctive, resilient and loyal is a standard
            worth supporting.
          </p>
        </div>
        <a href="Atlantic Puffin Partnership.html" style={{
          fontSize: "15px", fontWeight: 600, color: "var(--bcp-coral)", background: "var(--bcp-cream-card)",
          padding: "15px 26px", borderRadius: "var(--radius-md)", textDecoration: "none", whiteSpace: "nowrap",
        }}>Our story →</a>
      </div>
    </section>
  );
}

/* ——— 8 · CONTACT — split by intent, functional modals ——— */
function ContactModal({ open, onClose }) {
  const { Button } = DS;
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (!open) return;
    setSent(false);
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;

  const isManager = open === "manager";
  const accent = "var(--bcp-coral)";
  const fields = isManager
    ? [
        { id: "name", label: "Full name", type: "text", req: true },
        { id: "firm", label: "Firm / management company", type: "text", req: true },
        { id: "email", label: "Work email", type: "email", req: true },
        { id: "strategy", label: "Strategy & asset class", type: "text", req: false },
        { id: "aum", label: "Approx. strategy AUM", type: "text", req: false },
        { id: "message", label: "Tell us about your track record", type: "textarea", req: false },
      ]
    : [
        { id: "name", label: "Full name", type: "text", req: true },
        { id: "firm", label: "Firm", type: "text", req: true },
        { id: "email", label: "Work email", type: "email", req: true },
        { id: "interest", label: "Fund / area of interest", type: "text", req: false },
        { id: "message", label: "What would you like to discuss?", type: "textarea", req: false },
      ];
  const meta = isManager
    ? { eyebrow: "For fund managers", title: "Partner with us", blurb: "Tell us about your strategy and we'll be in touch to start the conversation.", submit: "Submit enquiry" }
    : { eyebrow: "For fund buyers", title: "Arrange a meeting", blurb: "Request a meeting, roadshow invitation or fund information.", submit: "Request meeting" };

  const inputStyle = {
    width: "100%", boxSizing: "border-box", fontFamily: "var(--font-brand)", fontSize: "15px",
    padding: "13px 15px", border: "1px solid var(--bcp-sand-300)", borderRadius: "var(--radius-sm)",
    color: "var(--bcp-navy)", background: "#fff", outline: "none",
  };

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "var(--overlay-modal)", zIndex: 10000,
      display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", animation: "rcFade 0.2s ease",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "#fff", borderRadius: "var(--radius-xl)", maxWidth: "600px", width: "100%",
        maxHeight: "90vh", overflow: "hidden", boxShadow: "var(--shadow-modal)", display: "flex", flexDirection: "column",
      }}>
        <div style={{ background: "var(--bcp-navy)", padding: "28px 36px", position: "relative", flexShrink: 0 }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "none", color: accent, marginBottom: "8px" }}>{meta.eyebrow}</div>
          <h3 style={{ fontSize: "26px", fontWeight: 600, color: "#fff", margin: 0, lineHeight: 1.2, paddingRight: "36px" }}>{meta.title}</h3>
          <button onClick={onClose} aria-label="Close" style={{
            position: "absolute", top: "24px", right: "24px", background: "transparent", border: "none",
            color: "#fff", fontSize: "30px", lineHeight: 1, cursor: "pointer", opacity: 0.8, width: "32px", height: "32px",
          }}>×</button>
        </div>

        {sent ? (
          <div style={{ padding: "56px 40px", textAlign: "center" }}>
            <div style={{ width: "66px", height: "66px", borderRadius: "50%", background: "rgba(31,138,91,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1F8A5B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "30px", height: "30px" }}><path d="M20 6 9 17l-5-5"></path></svg>
            </div>
            <h4 style={{ fontSize: "22px", fontWeight: 600, color: "var(--bcp-navy)", margin: "0 0 12px 0" }}>Thank you — we'll be in touch</h4>
            <p style={{ fontSize: "15px", lineHeight: 1.65, color: "var(--bcp-gray-600)", margin: "0 0 28px 0", maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>
              Your enquiry has been received. A member of the BCP team will respond shortly. You can also reach us directly at <a href="mailto:rodger@boutiquecapitalpartners.co.uk" style={{ color: accent }}>rodger@boutiquecapitalpartners.co.uk</a>.
            </p>
            <Button onClick={onClose}>Close</Button>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); ReactDOM.flushSync(() => setSent(true)); }} style={{ padding: "30px 36px 34px", overflowY: "auto" }}>
            <p style={{ fontSize: "15px", lineHeight: 1.6, color: "var(--bcp-gray-600)", margin: "0 0 24px 0" }}>{meta.blurb}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {fields.map((f) => (
                <div key={f.id} style={{ gridColumn: f.type === "textarea" ? "1 / -1" : "auto" }}>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--bcp-navy)", marginBottom: "7px" }}>
                    {f.label}{f.req ? <span style={{ color: accent }}> *</span> : null}
                  </label>
                  {f.type === "textarea" ? (
                    <textarea rows={3} required={f.req} style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) => { e.target.style.borderColor = accent; }} onBlur={(e) => { e.target.style.borderColor = "var(--bcp-sand-300)"; }} />
                  ) : (
                    <input type={f.type} required={f.req} style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = accent; }} onBlur={(e) => { e.target.style.borderColor = "var(--bcp-sand-300)"; }} />
                  )}
                </div>
              ))}
            </div>
            <p style={{ fontSize: "12px", lineHeight: 1.6, color: "var(--bcp-sand-400)", margin: "18px 0 22px 0" }}>
              For professional/institutional investors and advisers only. By submitting, you consent to BCP contacting you about your enquiry.
            </p>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <Button type="submit" arrow>{meta.submit}</Button>
              <button type="button" onClick={onClose} style={{ background: "transparent", border: "none", fontFamily: "var(--font-brand)", fontSize: "14px", fontWeight: 600, color: "var(--bcp-gray-600)", cursor: "pointer" }}>Cancel</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function RContact() {
  const { Button } = DS;
  const [modal, setModal] = React.useState(null);
  const paths = [
    {
      label: "For fund managers",
      title: "Best-in-class fund manager? Let's have a conversation.",
      body: "Tell us about your strategy, track record and ambitions for the UK and European markets.",
      cta: <Button arrow onClick={() => ReactDOM.flushSync(() => setModal("manager"))}>Partner with us</Button>,
    },
    {
      label: "For fund buyers",
      title: "Fund information, meetings and roadshow invitations.",
      body: "Direct access to fund documents, manager meetings and our intermediary programme.",
      cta: <Button variant="outline" arrow onClick={() => ReactDOM.flushSync(() => setModal("buyer"))}>Arrange a meeting</Button>,
    },
  ];
  return (
    <section id="contact" data-screen-label="Contact" style={{ background: "var(--bcp-navy)", padding: "100px 5%" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "42px", fontWeight: 600, letterSpacing: "-0.5px", color: "#fff", textAlign: "center", margin: "0 0 14px 0" }}>Get in touch</h2>
        <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.85)", textAlign: "center", margin: "0 0 56px 0" }}>We'd love to hear from you.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "26px" }}>
          {paths.map((p) => (
            <div key={p.label} style={{ border: "2px solid var(--bcp-coral)", borderRadius: "var(--radius-xl)", padding: "40px 42px" }}>
              <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "none", color: "var(--bcp-coral)", marginBottom: "14px" }}>{p.label}</div>
              <h3 style={{ fontSize: "23px", fontWeight: 600, color: "#fff", margin: "0 0 12px 0", lineHeight: 1.35 }}>{p.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(255,255,255,0.85)", margin: "0 0 28px 0" }}>{p.body}</p>
              {p.cta}
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: "15px", color: "rgba(255,255,255,0.85)", margin: "44px 0 0 0" }}>
          +44 (0)20 4619 3222 &nbsp;·&nbsp;{" "}
          <a href="mailto:rodger@boutiquecapitalpartners.co.uk" style={{ color: "var(--bcp-coral)", textDecoration: "none" }}>
            rodger@boutiquecapitalpartners.co.uk
          </a>
        </p>
      </div>
      <ContactModal open={modal} onClose={() => ReactDOM.flushSync(() => setModal(null))} />
    </section>
  );
}

window.RedesignSections = { RHero, RSelectivity, RFundFeature, RServices, RTeam, RInsights, RPuffin, RContact };
