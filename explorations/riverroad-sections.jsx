// River Road fund page — FAITHFUL recreation of the live dedicated page
// (boutiquecapitalpartners.co.uk/river-road-asset-management/), polished into
// the design system. COPY LOCK: every River Road sentence, stat, footnote and
// disclosure below is reproduced VERBATIM from the signed-off source. Layout is
// polished; words are not changed. Exposes window.RiverRoadSections.

const A = "../assets";
const DS = window.BoutiqueCapitalPartnersDesignSystem_7ef874;

/* Reusable 16:9 YouTube embed, optional coral corner brackets */
function Video({ id, title, radius = "10px", brackets = false }) {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: radius, overflow: "hidden", boxShadow: "0 14px 44px rgba(0,0,5,0.35)" }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title || "YouTube video player"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
        ></iframe>
      </div>
      {brackets ? (
        <React.Fragment>
          <span style={{ position: "absolute", top: "-10px", left: "-10px", width: "34px", height: "34px", borderTop: "3px solid var(--bcp-coral)", borderLeft: "3px solid var(--bcp-coral)" }}></span>
          <span style={{ position: "absolute", bottom: "-10px", right: "-10px", width: "34px", height: "34px", borderBottom: "3px solid var(--bcp-coral)", borderRight: "3px solid var(--bcp-coral)" }}></span>
        </React.Fragment>
      ) : null}
    </div>
  );
}

/* Decorative swirl watermark */
function Swirl({ tone = "teal", style }) {
  return <img src={`${A}/marks/swirl-${tone}.svg`} alt="" aria-hidden="true" style={{ position: "absolute", pointerEvents: "none", ...style }} />;
}

/* ——— Breadcrumb (wayfinding) ——— */
function RRBreadcrumb() {
  const crumbs = ["Fund partners", "River Road Asset Management"];
  return (
    <div style={{ background: "var(--bcp-cream)", borderBottom: "1px solid var(--bcp-sand-300)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "16px 5%", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", fontFamily: "var(--font-brand)" }}>
        {crumbs.map((c, i) => (
          <React.Fragment key={c}>
            {i > 0 ? <span style={{ color: "var(--bcp-sand-300)", fontSize: "13px" }}>/</span> : null}
            <span style={{ fontSize: "13px", fontWeight: i === crumbs.length - 1 ? 600 : 500, color: i === crumbs.length - 1 ? "var(--bcp-navy)" : "var(--bcp-gray-600)" }}>{c}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ——— 1 · HERO — cream: intro, logo, navy stat cards, info cards, endorsement ——— */
function RRHero() {
  const stats = [
    { n: "$11.8bn", label: "Total Firm Assets¹", desc: "Primarily institutional" },
    { n: "2005", label: "Founded", desc: "Proven track record" },
    { n: "22 yrs", label: "Avg PM Experience²", desc: "Seasoned professionals" },
    { n: "46", label: "Associates", desc: "17 investment pros" },
  ];
  const StatCard = ({ s }) => {
    const [h, setH] = React.useState(false);
    return (
      <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
        position: "relative", padding: "30px 26px", borderRadius: "18px", overflow: "hidden", background: "var(--bcp-navy)",
        boxShadow: h ? "0 20px 46px rgba(0,0,92,0.26)" : "0 3px 12px rgba(0,0,92,0.12)",
        transform: h ? "translateY(-6px)" : "none", transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div data-countup={s.n} style={{ fontSize: "clamp(38px, 3.4vw, 48px)", fontWeight: 600, color: "#FFB98A", marginBottom: "8px", lineHeight: 1, letterSpacing: "-1px" }}>{s.n}</div>
        <div style={{ fontSize: "15px", fontWeight: 600, color: "#fff", marginBottom: "5px", letterSpacing: "0.2px" }}>{s.label}</div>
        <div style={{ fontSize: "12.5px", fontWeight: 500, color: "rgba(255,255,255,0.62)", lineHeight: 1.45 }}>{s.desc}</div>
      </div>
    );
  };
  const Pill = ({ children }) => (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13.5px", fontWeight: 500,
      color: "var(--bcp-navy)", padding: "8px 16px", borderRadius: "100px", border: "1px solid rgba(0,0,92,0.22)",
    }}>
      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--bcp-coral)" }}></span>
      {children}
    </span>
  );
  const InfoCard = ({ dot, label, children }) => (
    <div style={{ background: "var(--bcp-navy)", padding: "26px 30px", borderRadius: "18px", boxShadow: "0 3px 12px rgba(0,0,92,0.12)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: dot }}></span>
        <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1px", textTransform: "none", color: dot }}>{label}</span>
      </div>
      <p style={{ fontSize: "16px", fontWeight: 500, color: "rgba(255,255,255,0.9)", lineHeight: 1.6, margin: 0 }}>{children}</p>
    </div>
  );
  return (
    <React.Fragment>
      <section data-screen-label="Fund hero" style={{ position: "relative", background: "var(--bcp-cream)", padding: "76px 5% 70px", fontFamily: "var(--font-brand)", overflow: "hidden" }}>
        {/* Photographic accent: mountain photo fading in from the right */}
        <img src={`${A}/images/mountain-view.webp`} alt="" aria-hidden="true" style={{
          position: "absolute", right: 0, top: 0, width: "54%", height: "100%", objectFit: "cover", opacity: 0.16,
          maskImage: "linear-gradient(90deg, transparent 0%, #000 75%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 75%)",
        }} />
        <Swirl tone="teal" style={{ width: "520px", right: "-120px", top: "-110px", opacity: 0.12 }} />
        <div style={{ position: "absolute", left: "-160px", bottom: "-120px", width: "640px", height: "360px", background: "radial-gradient(ellipse, rgba(222,93,93,0.12), transparent 70%)", pointerEvents: "none" }}></div>

        <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto" }}>
          {/* Top row: eyebrow + logo chip */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "30px", marginBottom: "30px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "none", color: "var(--bcp-coral)", paddingTop: "8px" }}>
              <span style={{ width: "34px", height: "2px", background: "var(--bcp-coral)" }}></span>
              Introducing
            </div>
            <div style={{ background: "#fff", borderRadius: "var(--radius-lg)", padding: "20px 26px", boxShadow: "0 10px 30px rgba(0,0,92,0.08)", border: "1px solid var(--border-card)" }}>
              <img src={`${A}/logos/river-road-logo.png`} alt="River Road Asset Management" style={{ width: "100%", maxWidth: "210px", height: "auto", display: "block" }} />
            </div>
          </div>

          <h1 style={{ fontSize: "clamp(38px, 5.4vw, 64px)", fontWeight: 600, lineHeight: 1.04, color: "var(--bcp-navy)", margin: "0 0 22px 0", letterSpacing: "-1px", maxWidth: "780px" }}>
            River Road <span style={{ color: "var(--bcp-coral)" }}>Asset Management</span>
          </h1>
          <p style={{ fontSize: "clamp(17px, 1.6vw, 20px)", fontWeight: 500, lineHeight: 1.65, color: "var(--bcp-gray-700)", margin: "0 0 26px 0", maxWidth: "620px" }}>
            US equity investment boutique delivering disciplined value investing through their distinctive Absolute
            Value® philosophy since 2005.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "52px" }}>
            <Pill>Louisville, Kentucky</Pill>
            <Pill>AMG Affiliate</Pill>
          </div>

          {/* Stat band */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginBottom: "20px" }}>
            {stats.map((s) => <StatCard key={s.label} s={s} />)}
          </div>
          <p style={{ fontSize: "12.5px", color: "var(--bcp-sand-400)", fontStyle: "italic", margin: "0 0 40px 4px" }}>As of 31st December 2025</p>

          {/* Info cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            <InfoCard dot="var(--bcp-coral)" label="Ownership & Culture">
              Significant employee ownership³ with 15 shareholders, fostering low turnover and a collaborative environment
            </InfoCard>
            <InfoCard dot="#5BBFD6" label="Investment Focus">
              Founded in 2005, specializing in disciplined value investing for institutional clients worldwide
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Quiet fine-print strip — cream, continuous with the hero */}
      <section data-screen-label="Fund disclaimer" style={{ background: "var(--bcp-cream)", padding: "0 5% 36px", fontFamily: "var(--font-brand)" }}>
        <div style={{ maxWidth: "1240px", margin: "0 auto", borderTop: "1px solid var(--bcp-sand-300)", paddingTop: "26px" }}>
          <p style={{ fontSize: "12px", color: "#7a756c", fontWeight: 400, lineHeight: 1.65, margin: 0 }}>
            For professional investor use only. Boutique Capital Partners Limited (FRN 1027595) ("BCP") is an appointed
            representative of Thornbridge Investment Management LLP (FRN 713859), which is authorised and regulated by
            the Financial Conduct Authority. BCP is appointed by River Road Asset Management, LLC ("River Road") to
            solicit clients or investors to be a client of River Road. BCP is not a current client or investor of River
            Road. River Road will pay (or procure to be paid) cash compensation to BCP for the solicitation services BCP
            provides. BCP, due to such compensation, has an incentive to recommend River Road and its strategies,
            resulting in a material conflict of interest. For more important disclosures, please click here:{" "}
            <a href="#" style={{ color: "var(--bcp-coral)", textDecoration: "underline" }}>River Road Boutique Capital Partners Endorsement Disclosure.pdf</a>
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ——— 2 · STRATEGY + ASSET TV — navy ——— */
function RRStrategy() {
  const { Button } = DS;
  return (
    <section data-screen-label="Strategy" style={{ position: "relative", background: "var(--bcp-navy)", padding: "90px 5%", fontFamily: "var(--font-brand)", overflow: "hidden" }}>
      <Swirl tone="coral" style={{ width: "460px", left: "-150px", bottom: "-130px", opacity: 0.12 }} />
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto" }}>
        <div className="rr-reveal" style={{ textAlign: "center", marginBottom: "44px" }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 600, lineHeight: 1.1, color: "var(--bcp-coral)", margin: "0 0 16px 0" }}>
            US Large Cap Value Select
          </h2>
          <span style={{ display: "inline-block", width: "60px", height: "3px", borderRadius: "3px", background: "var(--bcp-coral)" }}></span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "center", marginBottom: "70px" }}>
          <div className="rr-reveal">
            <p style={{ fontSize: "20px", fontWeight: 600, lineHeight: 1.5, color: "#fff", margin: "0 0 22px 0" }}>
              US Large Cap Value Select is a concentrated portfolio consisting of 20 to 30 holdings⁴. Its disciplined
              process and highly active trading approach has consistently delivered attractive performance since 2014⁵.
            </p>
            <p style={{ fontSize: "17px", fontWeight: 500, lineHeight: 1.65, color: "rgba(255,255,255,0.85)", margin: "0 0 32px 0" }}>
              The team utilizes a balanced approach to diversification and follows a structured sell discipline, avoiding
              averaging down on losing positions once a target holding is established.
            </p>
            <Button arrow href="Fund Information & Document Centre.html">Fund information and document centre</Button>
          </div>
          <div className="rr-reveal"><Video id="DCkmQ-53iEo" title="Asset TV — River Road US Large Cap Value Select" brackets /></div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.14)", paddingTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "17px", fontWeight: 500, lineHeight: 1.6, color: "#fff", margin: "0 0 16px 0" }}>
              Asset TV’s guest host, Kelly Prior, is joined by Daniel Johnson, CFA, CPA, Portfolio Manager of the River
              Road US Large Cap Value Select strategy.
            </p>
            <p style={{ fontSize: "17px", fontWeight: 500, lineHeight: 1.6, color: "rgba(255,255,255,0.85)", margin: 0 }}>
              Daniel introduces the strategy, outlines River Road’s Absolute Value® philosophy and offers insights into
              their investment approach on this 10-year-old strategy.
            </p>
          </div>
          <p style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", margin: 0 }}>
            <strong style={{ color: "rgba(255,255,255,0.8)" }}>Disclosure</strong>: River Road does not guarantee the
            future performance of its investment approach or processes or any specific level of performance, the success
            of any investment decision or strategy that River Road uses or may use, or the success of River Road’s
            overall management of any portfolio. The outcome of River Road’s investment approach, processes, and
            investment decisions are subject to various market, currency, economic, political, and business risks. River
            Road’s investment approach, processes, and investment decisions will not always be profitable. Additionally,
            River Road’s investment approach and style has and can be out of favor. For example, value stocks may
            underperform growth stocks and stocks in other broad style categories (and the stock market as a whole)
            during given periods.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ——— 3 · PHILOSOPHY — cream framed centerpiece ——— */
function RRPhilosophy() {
  return (
    <section data-screen-label="Philosophy" style={{ position: "relative", background: "var(--bcp-teal-section)", padding: "110px 5%", fontFamily: "var(--font-brand)", textAlign: "center", overflow: "hidden" }}>
      <Swirl tone="teal" style={{ width: "640px", left: "50%", top: "50%", transform: "translate(-50%,-50%)", opacity: 0.12 }} />
      <div className="rr-reveal" style={{ position: "relative", maxWidth: "1040px", margin: "0 auto", padding: "60px 56px" }}>
        <span style={{ position: "absolute", top: 0, left: 0, width: "56px", height: "56px", borderTop: "3px solid var(--bcp-coral)", borderLeft: "3px solid var(--bcp-coral)" }}></span>
        <span style={{ position: "absolute", bottom: 0, right: 0, width: "56px", height: "56px", borderBottom: "3px solid var(--bcp-coral)", borderRight: "3px solid var(--bcp-coral)" }}></span>
        <div style={{ fontFamily: "var(--font-serif-accent)", fontSize: "72px", lineHeight: 0.6, color: "var(--bcp-coral)", marginBottom: "22px" }}>“</div>
        <h2 style={{ fontSize: "clamp(28px, 3.4vw, 42px)", fontWeight: 700, lineHeight: 1.2, color: "#fff", margin: "0 0 18px 0" }}>
          River Road's <span style={{ color: "var(--bcp-coral)" }}>Absolute Value®</span> investment philosophy
        </h2>
        <p style={{ fontSize: "clamp(20px, 2.4vw, 28px)", fontWeight: 400, lineHeight: 1.45, color: "rgba(255,255,255,0.9)", margin: 0 }}>
          occupies a unique position between deep value and relative value approaches, aiming to deliver attractive and
          sustainable returns with an emphasis on downside risk.
        </p>
      </div>
    </section>
  );
}

/* ——— 4 · IN CONVERSATION — navy, two videos ——— */
function RRConversation() {
  return (
    <section data-screen-label="In conversation" style={{ position: "relative", background: "var(--bcp-navy)", padding: "90px 5%", fontFamily: "var(--font-brand)", overflow: "hidden" }}>
      <Swirl tone="coral" style={{ width: "440px", right: "-140px", top: "60px", opacity: 0.1 }} />
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 600, lineHeight: 1.1, color: "var(--bcp-coral)", margin: "0 0 4px 0" }}>In conversation</h2>
        <h2 style={{ fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 500, lineHeight: 1.3, color: "#fff", margin: "0 0 26px 0" }}>with River Road</h2>
        <p style={{ fontSize: "17px", fontWeight: 500, lineHeight: 1.6, color: "rgba(255,255,255,0.85)", margin: "0 0 12px 0", maxWidth: "760px" }}>
          During River Road’s visit to the UK in November 2024, two of their team members sat down with Richard Philbin,
          CIO (Investment Solutions) at Hawksmoor Investment Management.
        </p>
        <p style={{ fontSize: "17px", fontWeight: 700, lineHeight: 1.6, color: "#fff", margin: "0 0 14px 0", maxWidth: "760px" }}>
          River Road CEO, Andrew Beck, and Co-Portfolio Manager of the Large Cap Value Select Fund, Daniel Johnson,
          provide candid insights into both firm and fund.
        </p>
        <h3 style={{ fontSize: "clamp(20px, 2.4vw, 30px)", fontWeight: 500, color: "var(--bcp-coral)", margin: "0 0 40px 0" }}>Watch the videos to find our more</h3>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          <div className="rr-reveal">
            <p style={{ margin: "0 0 14px 0", lineHeight: 1.4 }}>
              <span style={{ fontSize: "18px", fontWeight: 700, color: "var(--bcp-coral)" }}>About River Road</span><br />
              <span style={{ fontSize: "17px", fontWeight: 700, color: "#fff" }}>Andrew Beck, CEO</span>
            </p>
            <Video id="yRYQRZpuQqM" title="About River Road — Andrew Beck, CEO" brackets />
          </div>
          <div className="rr-reveal" style={{ animationDelay: "100ms" }}>
            <p style={{ margin: "0 0 14px 0", lineHeight: 1.4 }}>
              <span style={{ fontSize: "18px", fontWeight: 700, color: "var(--bcp-coral)" }}>About Large Cap Value Select</span><br />
              <span style={{ fontSize: "17px", fontWeight: 700, color: "#fff" }}>Daniel Johnson, Portfolio Manager</span>
            </p>
            <Video id="0NUouts_0c0" title="About Large Cap Value Select — Daniel Johnson" brackets />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— 5 · WEALTHWISE INSIGHTS — cream, interactive playlist ——— */
const WW_VIDEOS = [
  { id: "yj9W9EaWC9Y", title: "Introducing River Road", speaker: "Daniel Johnson, Portfolio Manager", description: "Daniel introduces River Road, sharing the firm's heritage, investment philosophy, and what makes their approach to value investing distinctive." },
  { id: "semIWKk2DXM", title: "What Differentiates River Road From Its Peers", speaker: "Daniel Johnson, Portfolio Manager", description: "Exploring the unique aspects of River Road's investment approach and what sets them apart from other value managers." },
  { id: "8NQ38nblpEY", title: "Exploring Current Themes Fitting The Portfolio", speaker: "Daniel Johnson, Portfolio Manager", description: "Current themes and opportunities Daniel finds most interesting in the market today and how they fit the portfolio strategy." },
  { id: "gqpilH9dRNs", title: "Where Does LCVS Fit In Client Portfolios?", speaker: "Daniel Johnson, Portfolio Manager", description: "How River Road's Large Cap Value Select strategy fits into client portfolios and applications for different types of investors." },
];

function RRWealthWise() {
  const [current, setCurrent] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(false);
  const active = WW_VIDEOS[current];
  return (
    <section data-screen-label="WealthWise" style={{ background: "var(--bcp-cream)", padding: "90px 5%", fontFamily: "var(--font-brand)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 600, lineHeight: 1.1, color: "var(--bcp-coral)", margin: "0 0 14px 0", textAlign: "center" }}>WealthWise Insights</h2>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "14px" }}>
          <span style={{ width: "60px", height: "3px", borderRadius: "3px", background: "var(--bcp-coral)" }}></span>
        </div>
        <p style={{ fontSize: "17px", fontWeight: 500, lineHeight: 1.6, color: "#000", margin: "0 auto 44px", maxWidth: "760px", textAlign: "center" }}>
          River Road’s leadership share their perspectives on value investing, market dynamics, and the principles
          driving their Absolute Value® philosophy.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "40px", alignItems: "start" }}>
          <div>
            <div style={{ marginBottom: "24px" }}>
              <Video key={active.id + autoplay} id={autoplay ? active.id + "?autoplay=1" : active.id} radius="8px" title={active.title} />
            </div>
            <h3 style={{ fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 500, color: "var(--bcp-coral)", margin: "0 0 10px 0", lineHeight: 1.3 }}>{active.title}</h3>
            <p style={{ fontSize: "17px", fontWeight: 500, color: "var(--bcp-navy)", margin: "0 0 14px 0" }}>{active.speaker}</p>
            <p style={{ fontSize: "17px", fontWeight: 500, color: "#4a5a6a", lineHeight: 1.6, margin: 0 }}>{active.description}</p>
          </div>

          <div>
            <div style={{ borderBottom: "2px solid var(--bcp-coral)", paddingBottom: "12px", marginBottom: "20px" }}>
              <h4 style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "1.5px", color: "var(--bcp-navy)", margin: 0 }}>MORE IN THIS SERIES</h4>
            </div>
            <div style={{ display: "grid", gap: "16px" }}>
              {WW_VIDEOS.map((v, i) => i === current ? null : (
                <div key={v.id} className="ww-thumb" onClick={() => { setCurrent(i); setAutoplay(true); }} style={{
                  display: "flex", gap: "16px", padding: "14px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.5)", cursor: "pointer", transition: "all 0.2s ease",
                }}>
                  <div style={{ position: "relative", width: "140px", minWidth: "140px", height: "79px", borderRadius: "6px", overflow: "hidden", background: "linear-gradient(145deg,#3a4a6a,#1e2a4a)" }}>
                    <img src={`https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`} alt={v.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "38px", height: "27px", background: "#cc0000", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 0, height: 0, borderTop: "6px solid transparent", borderBottom: "6px solid transparent", borderLeft: "10px solid #fff", marginLeft: "2px" }}></div>
                    </div>
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h4 style={{ fontSize: "15px", fontWeight: 500, color: "var(--bcp-coral)", margin: "0 0 6px 0", lineHeight: 1.3 }}>{v.title}</h4>
                    <p style={{ fontSize: "12px", fontWeight: 500, color: "var(--bcp-navy)", margin: 0 }}>{v.speaker}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— 6 · DISCLOSURES & FOOTNOTES — cream ——— */
function RRDisclosures() {
  const notes = [
    "¹As of 2025 December 31. Total assets include assets under management as defined by GIPS® ($9.9bn) and advisory-only assets ($2.0bn).",
    "²Excludes associate portfolio managers.",
    "³River Road executives and senior professionals hold 21% of the firm’s equity.",
    "⁴Investment guidelines (such as number of holdings) are working policies and, as such, may vary depending on market conditions and other factors and are subject to change without notification.",
    "⁵Strategy inception date: 1 November 2014. River Road’s investment approach, processes, and investment decisions will not always be profitable. River Road’s investment approach and style have and can be out of favor.",
  ];
  return (
    <section data-screen-label="Disclosures" style={{ background: "var(--bcp-cream)", padding: "60px 5% 80px", fontFamily: "var(--font-brand)", borderTop: "1px solid var(--bcp-sand-300)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <p style={{ fontSize: "14px", fontWeight: 700, color: "var(--bcp-navy)", margin: "0 0 20px 0" }}>
          Past performance is no guarantee of future results. There is a risk that invested capital may be lost.
        </p>
        <div style={{ display: "grid", gap: "8px" }}>
          {notes.map((n, i) => (
            <p key={i} style={{ fontSize: "12px", lineHeight: 1.55, color: "var(--bcp-gray-600)", margin: 0 }}>{n}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

window.RiverRoadSections = { RRBreadcrumb, RRHero, RRStrategy, RRPhilosophy, RRConversation, RRWealthWise, RRDisclosures };
