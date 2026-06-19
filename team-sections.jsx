// Meet the Team — dedicated page built from the original site's "Who we are"
// section. COPY LOCK: every bio, name and the board intro are reproduced
// VERBATIM from site_src/index.html. Short role tags under each name are
// factual descriptors drawn from each person's own bio wording.
// Exposes window.TeamSections.

const A = "assets";
const DS = window.BoutiqueCapitalPartnersDesignSystem_7ef874;

const FOUNDER = {
  name: "Rodger Kennedy",
  role: "Founder & Managing Partner",
  img: "rodger-kennedy.png",
  lede: "Boutique Capital Partners was founded by Rodger Kennedy. Rodger is driven, commercial, innovative and personable.",
  bio: [
    "Rodger is the Founder and Managing Partner of Boutique Capital Partners. His primary focus is partnership oversight and the promotion and distribution of partner's investment strategies to UK, Channel Island, Swiss and Irish intermediaries.",
    "Rodger brings extensive and long-established connections across these jurisdictions, having previously been a Director and equity partner with Ninety One (formerly Investec Asset Management), where he enjoyed a 23-year career, most recently as the Head of London Wealth Distribution Team and co-lead of UK Wholesale Distribution.",
    "Rodger brings with him decades of distribution experience, having led the build out of the UK Wholesale channel, from its initiation to £15bn AUM. He has run multiple, highly successful fund campaigns for fixed income, equity, multi asset and alternatives solutions.",
  ],
};

const BOARD = [
  {
    id: "alan", name: "Alan Higgins", tag: "MD, Coutts", img: "alan-higgins.png",
    bio: [
      "Alan has over 30 years of experience in portfolio management.",
      "MD at Coutts, Alan has held a variety of roles with the bank, including Head of Investment Strategy, Chief Investment Officer and Head of Multi Asset Investing. Prior to this he worked for Morgan Stanley Wealth Management specialising in asset allocation, fixed income and alternative investments. Other experience included senior roles in institutional fixed income portfolio management and with a multi-strategy hedge fund.",
      "Alan has advised several charities on manager selection and underlying investments and is an external adviser to multi-family office Eighteen48 Partners and a NED for Signet Global Wealth. He was also previously a non-executive director of Nestlé's UK and Swiss pension fund management companies.",
      "Alan has a Bachelor of Science degree in Mathematics from Bristol University and is a CFA Charterholder.",
    ],
  },
  {
    id: "alex", name: "Alex Marshall-Tate", tag: "ex-Citi Global Wealth", img: "alex-marshall.png",
    bio: [
      "Alex has over 20 years of global wealth and investment management experience, spanning fund research & selection, portfolio management, product & investment platform development and sales & marketing, across a diverse spectrum of asset classes. He has worked within Citi Global Wealth, and prior to this at Morgan Stanley Wealth Management, and holds a deep understanding of global fund distribution dynamics and strategies.",
      "He holds a Bachelor of Science degree in Business Management and Masters degree in Corporate Risk Management from the University of Southampton and is CISI Level 6 qualified.",
    ],
  },
  {
    id: "esther", name: "Esther Gilbert", tag: "Founder, Boudica", img: "esther-glibert.png",
    bio: [
      "Esther is the founder of Boudica, an advisory business which helps asset managers cater to their client need and remain relevant in an evolving and competitive marketplace.",
      "She is an experienced investor with over 20 years in-house at leading asset and wealth managers, with technical expertise in fixed income and alternatives asset classes.",
      "Esther is a proponent of collaboration within the industry, which helps promote best practice and improved client outcomes.",
      "Esther has a First Class (Hons) degree in Mathematics with Finance, from the University of Liverpool. She is a CFA Charterholder and as well as the CFA Certificate in ESG Investing.",
    ],
  },
  {
    id: "julia", name: "Julia Warrander", tag: "ex-Affinity Private Wealth", img: "julia-warrander.png",
    bio: [
      "With a global career spanning investment banking – at Citibank, Deutsche and Goldman – to co-founding an award-wining, offshore wealth management business, Julia brings over three decades of experience in financial services. Most recently, Group Director for Affinity Private Wealth, Julia was accountable for strategy, investment management, HR and marketing. She chaired the IC and had responsibility for fund selection and multi-asset allocation.",
      "Julia regularly featured in Citywire Wealth Manager's Top 100 UK Fund Selectors and strongly believes qualitative inputs into fund analysis are as equally valuable as quants, when it comes to identifying managers who can deliver consistent, long-term alpha. Recognised as a champion of ED&I and sustainability, Julia has a reputation for asking challenging, 'left field' questions and advocating for positive change, especially with respect to women occupying senior investment roles.",
      "Julia is an Oxford grad (1990), Chartered FCSI and recently completed Oxford AI Programme, SAID Business School (2023).",
    ],
  },
  {
    id: "kelly", name: "Kelly Prior", tag: "Investment Manager", img: "kelly-prior.png",
    bio: [
      "Kelly is an Investment Manager with over 30 years' experience in fund selection and portfolio construction.",
      "Kelly was part of the pioneering multi manager team that launched the Credit Suisse MM Constellation Fund, a vehicle investing solely in boutique funds. Subsequently she joined Thames River Capital, before spending 14 years with Colombia Threadneedle, as a Senior Investment manager for the CT MM Lifestyle and Navigator Funds, building asset from zero to £3.2bn.",
      "Since 2001, Kelly has been investing with active managers, who are often 'off the beaten track', across global equities, fixed income and alternative investments.",
      "Kelly is comfortable challenging conventional wisdom and taking a contrarian, long-term view, working collaboratively to construct portfolios tailored to any variance of return and risk objective.",
    ],
  },
  {
    id: "aryan", name: "Aryan Dave", tag: "Bayes Business School", img: "aryan-dave.png",
    bio: [
      "Aryan is currently a final year student at Bayes Business School, (formerly Cass) where he is pursuing a Bachelors degree in Investment and Financial Risk Management.",
      "He is currently studying fixed income portfolio management, Fintech in Banking, Asset-Liability management and Energy & Commodities. He employs this knowledge as well as technical expertise to assist with development of new systems within the business.",
    ],
  },
];

const PARTNERS = [
  {
    id: "loop", name: "Loop Consultants", tag: "Marketing", logo: null,
    bio: [
      "Loop is an end-to-end marketing consultancy with over 20 years of experience specialising in distribution-focused fund marketing to advisor and institutional across the asset classes. Loop have been employees of and trusted marketing partners for many leading asset management firms.",
      "Loop's strengths lie in all aspects of fund marketing including fund messaging and narrative development, presentation build and design, digital marketing (website, social, email, video) and content creation.",
    ],
  },
  {
    id: "cornerstone", name: "Cornerstone Communicate", tag: "PR & Communications", logo: "cornerstone-logo.png",
    bio: [
      "Cornerstone is a specialist PR and communications consultancy focused wholly on servicing boutiques and growing companies in the asset and wealth management industry. Established in 2015, their highly experienced team members have run corporate communications for global and boutique firms, managed press relations spanning multiple channels across Europe and have significantly enhanced client awareness within their target audience.",
      "Their unique strength lies in helping firms build their entire communications process, from idea generation and building press relationships through to delivering exceptional top-tier coverage.",
    ],
  },
];

/* ——— Bio modal ——— */
function BioModal({ person, onClose }) {
  React.useEffect(() => {
    if (!person) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [person, onClose]);
  if (!person) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, background: "var(--overlay-modal)", zIndex: 10000,
      display: "flex", justifyContent: "center", alignItems: "center", padding: "24px",
      animation: "tmFade 0.2s ease",
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "#fff", borderRadius: "var(--radius-xl)", maxWidth: "680px", width: "100%",
        maxHeight: "88vh", overflow: "hidden", boxShadow: "var(--shadow-modal)", display: "flex", flexDirection: "column",
      }}>
        <div style={{ background: "var(--bcp-navy)", padding: "30px 36px", position: "relative", display: "flex", alignItems: "center", gap: "22px", flexShrink: 0 }}>
          {person.img ? (
            <img src={`${A}/people/${person.img}`} alt={person.name} style={{ width: "76px", height: "76px", borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: "2px solid var(--bcp-coral)", flexShrink: 0 }} />
          ) : null}
          <div style={{ paddingRight: "28px" }}>
            {person.tag ? <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "none", color: "var(--bcp-coral)", marginBottom: "7px" }}>{person.tag}</div> : null}
            <h3 style={{ fontSize: "25px", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.15 }}>{person.name}</h3>
          </div>
          <button onClick={onClose} aria-label="Close" style={{
            position: "absolute", top: "20px", right: "22px", background: "transparent", border: "none",
            color: "#fff", fontSize: "28px", lineHeight: 1, cursor: "pointer", opacity: 0.75, width: "30px", height: "30px",
          }}>×</button>
        </div>
        <div style={{ padding: "32px 36px", overflowY: "auto" }}>
          {person.bio.map((p, i) => (
            <p key={i} style={{ fontSize: "15.5px", lineHeight: 1.75, color: "var(--bcp-gray-700)", margin: i === person.bio.length - 1 ? 0 : "0 0 16px 0" }}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ——— 1 · HERO ——— */
function TeamHero() {
  return (
    <section data-screen-label="Team hero" style={{ position: "relative", background: "var(--bcp-cream)", padding: "84px 5% 70px", fontFamily: "var(--font-brand)", overflow: "hidden" }}>
      <img src={`${A}/marks/swirl-teal.svg`} alt="" aria-hidden="true" style={{ position: "absolute", right: "-150px", top: "-120px", width: "520px", opacity: 0.1, pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "none", color: "var(--bcp-coral)", marginBottom: "20px" }}>
          <span style={{ width: "34px", height: "2px", background: "var(--bcp-coral)" }}></span>
          The team
        </div>
        <h1 style={{ fontSize: "clamp(40px, 5.4vw, 66px)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-1px", color: "var(--bcp-navy)", margin: "0 0 26px 0", maxWidth: "900px" }}>
          Who we are
        </h1>
        <p style={{ fontSize: "clamp(17px, 1.7vw, 21px)", fontWeight: 500, lineHeight: 1.6, color: "var(--bcp-gray-700)", margin: 0, maxWidth: "820px" }}>
          The BCP Advisory Board's impressive experience and diverse skillsets align with BCP's mission to provide the
          best actively managed investment opportunities to fund buyers.
        </p>
      </div>
    </section>
  );
}

/* ——— 2 · FOUNDER SPOTLIGHT ——— */
function FounderSpotlight() {
  const [open, setOpen] = React.useState(false);
  return (
    <section data-screen-label="Founder" style={{ background: "var(--bcp-navy)", padding: "90px 5%", fontFamily: "var(--font-brand)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "auto 1fr", gap: "56px", alignItems: "center" }}>
        <div style={{ position: "relative", width: "230px", height: "230px" }}>
          <img src={`${A}/people/${FOUNDER.img}`} alt={FOUNDER.name} style={{ width: "230px", height: "230px", borderRadius: "50%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
        </div>
        <div>
          <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1.8px", textTransform: "none", color: "var(--bcp-coral)", marginBottom: "14px" }}>{FOUNDER.role}</div>
          <h2 style={{ fontSize: "clamp(34px, 4vw, 46px)", fontWeight: 600, letterSpacing: "-0.5px", color: "#fff", margin: "0 0 22px 0", lineHeight: 1.1 }}>{FOUNDER.name}</h2>
          <p style={{ fontSize: "20px", fontWeight: 500, lineHeight: 1.5, color: "#fff", margin: "0 0 22px 0", maxWidth: "640px" }}>{FOUNDER.lede}</p>
          <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7, color: "rgba(255,255,255,0.82)", margin: "0 0 30px 0", maxWidth: "640px" }}>{FOUNDER.bio[0]}</p>
          <button onClick={() => ReactDOM.flushSync(() => setOpen(true))} style={{
            display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent",
            border: "1.5px solid var(--bcp-coral)", color: "#fff", fontFamily: "var(--font-brand)", fontSize: "14px",
            fontWeight: 600, letterSpacing: "0.3px", padding: "14px 28px", borderRadius: "var(--radius-sm)", cursor: "pointer",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bcp-coral)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
            Read Rodger's full story
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px" }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
      <BioModal person={open ? FOUNDER : null} onClose={() => ReactDOM.flushSync(() => setOpen(false))} />
    </section>
  );
}

/* ——— 3 · ADVISORY BOARD — silky horizontal scroller ——— */
function AdvisoryBoard() {
  const [active, setActive] = React.useState(null);
  const trackRef = React.useRef(null);
  const drag = React.useRef({ down: false, startX: 0, startScroll: 0, moved: 0 });
  const [edges, setEdges] = React.useState({ atStart: true, atEnd: false });
  const [progress, setProgress] = React.useState(0);

  const updateEdges = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({ atStart: el.scrollLeft <= 2, atEnd: el.scrollLeft >= max - 2 });
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  React.useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => { el.removeEventListener("scroll", updateEdges); window.removeEventListener("resize", updateEdges); };
  }, [updateEdges]);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const start = el.scrollLeft;
    const target = Math.max(0, Math.min(max, start + dir * Math.round(el.clientWidth * 0.8)));
    const dist = target - start;
    if (!dist) return;
    el.style.scrollBehavior = "auto";
    const dur = 500, t0 = performance.now();
    const ease = (p) => 1 - Math.pow(1 - p, 3);
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      el.scrollLeft = start + dist * ease(p);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const onPointerDown = (e) => {
    const el = trackRef.current;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: 0 };
    el.style.scrollBehavior = "auto";
    el.style.cursor = "grabbing";
  };
  const onPointerMove = (e) => {
    if (!drag.current.down) return;
    const el = trackRef.current;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
    if (trackRef.current) { trackRef.current.style.cursor = "grab"; trackRef.current.style.scrollBehavior = "smooth"; }
  };

  const Arrow = ({ dir, disabled }) => (
    <button className="team-arrow" onClick={() => scrollByCards(dir)} disabled={disabled} aria-label={dir < 0 ? "Previous" : "Next"} style={{
      width: "48px", height: "48px", borderRadius: "50%", border: "1.5px solid var(--bcp-navy)", background: "transparent",
      color: "var(--bcp-navy)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
      transition: "all 0.25s ease", flexShrink: 0,
    }}
    onMouseEnter={(e) => { if (!disabled) { e.currentTarget.style.background = "var(--bcp-navy)"; e.currentTarget.style.color = "#fff"; } }}
    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--bcp-navy)"; }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px", transform: dir < 0 ? "scaleX(-1)" : "none" }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
    </button>
  );

  const Card = ({ p, i }) => {
    const [h, setH] = React.useState(false);
    return (
      <div onClick={() => { if (drag.current.moved < 6) ReactDOM.flushSync(() => setActive(p)); }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
        position: "relative", flex: "0 0 360px", scrollSnapAlign: "start", boxSizing: "border-box", overflow: "hidden",
        background: "#fff", border: "1px solid var(--border-card)", borderRadius: "var(--radius-xl)",
        cursor: "pointer", padding: "36px 34px", fontFamily: "var(--font-brand)",
        boxShadow: h ? "var(--shadow-card-hover)" : "var(--shadow-card)",
        transform: h ? "translateY(-6px)" : "none", transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", flexDirection: "column",
      }}>
        <img src={`${A}/marks/swirl-teal.svg`} alt="" aria-hidden="true" style={{ position: "absolute", top: "-22px", right: "-22px", width: "120px", opacity: h ? 0.16 : 0.08, transition: "opacity 0.3s ease", pointerEvents: "none" }} />
        <div style={{ position: "relative", width: "104px", height: "104px", marginBottom: "22px" }}>
          <span style={{ position: "absolute", inset: "-6px", borderRadius: "50%", border: "2px solid var(--bcp-coral)", opacity: h ? 1 : 0, transform: h ? "scale(1)" : "scale(0.85)", transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)" }}></span>
          <img src={`${A}/people/${p.img}`} alt={p.name} draggable="false" style={{
            width: "104px", height: "104px", borderRadius: "50%", objectFit: "cover", objectPosition: "center top", display: "block",
            border: "2px solid var(--bcp-sand-300)", userSelect: "none",
          }} />
        </div>
        <h3 style={{ fontSize: "22px", fontWeight: 600, color: "var(--bcp-navy)", margin: "0 0 5px 0", letterSpacing: "-0.2px" }}>{p.name}</h3>
        <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "none", color: "var(--bcp-coral)", marginBottom: "16px" }}>{p.tag}</div>
        <p style={{
          fontSize: "14px", lineHeight: 1.6, color: "var(--bcp-gray-600)", margin: "0 0 20px 0", flexGrow: 1,
          display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>{p.bio[0]}</p>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "14px", fontWeight: 600, color: "var(--bcp-coral)" }}>
          Read full bio
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "15px", height: "15px", transform: h ? "translateX(3px)" : "none", transition: "transform 0.25s ease" }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </span>
      </div>
    );
  };

  return (
    <section id="board" data-screen-label="Advisory board" style={{ background: "var(--bcp-cream)", padding: "90px 0 90px 5%", fontFamily: "var(--font-brand)", overflow: "hidden" }}>
      <div style={{ maxWidth: "calc(1240px + ((100vw - 1240px) / 2))" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "30px", marginBottom: "44px", paddingRight: "5%" }}>
          <div>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "none", color: "var(--bcp-coral)", marginBottom: "14px" }}>Advisory Board</div>
            <h2 style={{ fontSize: "clamp(30px, 3.6vw, 42px)", fontWeight: 600, letterSpacing: "-0.5px", color: "var(--bcp-navy)", margin: 0 }}>Our team</h2>
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <Arrow dir={-1} disabled={edges.atStart} />
            <Arrow dir={1} disabled={edges.atEnd} />
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div
            ref={trackRef}
            className="team-track"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            style={{
              display: "flex", gap: "24px", overflowX: "auto", scrollSnapType: "x proximity",
              paddingBottom: "8px", paddingRight: "5%", cursor: "grab", scrollBehavior: "smooth",
            }}
          >
            {BOARD.map((p, i) => <Card key={p.id} p={p} i={i} />)}
          </div>
          {/* edge fades signal more content */}
          <div style={{ position: "absolute", top: 0, right: 0, width: "9%", height: "100%", background: "linear-gradient(90deg, transparent, var(--bcp-cream))", pointerEvents: "none", opacity: edges.atEnd ? 0 : 1, transition: "opacity 0.3s ease" }}></div>
          <div style={{ position: "absolute", top: 0, left: 0, width: "6%", height: "100%", background: "linear-gradient(270deg, transparent, var(--bcp-cream))", pointerEvents: "none", opacity: edges.atStart ? 0 : 1, transition: "opacity 0.3s ease" }}></div>
        </div>
        {/* live scroll progress */}
        <div style={{ marginTop: "34px", marginRight: "5%", display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ flex: 1, height: "3px", background: "var(--bcp-sand-300)", borderRadius: "3px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: 0, top: 0, height: "100%", width: `${18 + progress * 82}%`, background: "var(--bcp-coral)", borderRadius: "3px", transition: drag.current.down ? "none" : "width 0.15s linear" }}></div>
          </div>
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "1px", color: "var(--bcp-sand-400)", whiteSpace: "nowrap" }}>
            <span style={{ color: "var(--bcp-navy)" }}>{String(Math.min(BOARD.length, Math.round(progress * (BOARD.length - 1)) + 1)).padStart(2, "0")}</span> / {String(BOARD.length).padStart(2, "0")}
          </span>
        </div>
      </div>
      <BioModal person={active} onClose={() => ReactDOM.flushSync(() => setActive(null))} />
    </section>
  );
}

/* ——— 4 · MARKETING PARTNERS ——— */
function MarketingPartners() {
  const [active, setActive] = React.useState(null);
  return (
    <section data-screen-label="Marketing partners" style={{ background: "var(--bcp-navy)", padding: "90px 5%", fontFamily: "var(--font-brand)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ marginBottom: "44px", maxWidth: "780px" }}>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "none", color: "var(--bcp-coral)", marginBottom: "14px" }}>Marketing Partners</div>
          <h2 style={{ fontSize: "clamp(30px, 3.6vw, 42px)", fontWeight: 600, letterSpacing: "-0.5px", color: "#fff", margin: "0 0 16px 0" }}>The specialists behind the brand</h2>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.85)", margin: 0 }}>
            We work with highly skilled marketing &amp; PR professionals with decades of industry experience.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "26px" }}>
          {PARTNERS.map((p) => (
            <div key={p.id} style={{ border: "2px solid var(--bcp-coral)", borderRadius: "var(--radius-xl)", padding: "34px 36px", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "20px" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "var(--radius-md)", background: p.logo ? "#fff" : "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: p.logo ? "8px" : 0, boxSizing: "border-box" }}>
                  {p.logo ? (
                    <img src={`${A}/logos/${p.logo}`} alt={p.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                  ) : (
                    <span style={{ fontSize: "24px", fontWeight: 700, color: "var(--bcp-coral)" }}>L</span>
                  )}
                </div>
                <div>
                  <h3 style={{ fontSize: "21px", fontWeight: 600, color: "#fff", margin: "0 0 3px 0" }}>{p.name}</h3>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.5px" }}>{p.tag}</div>
                </div>
              </div>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.85)", margin: "0 0 22px 0", flexGrow: 1 }}>{p.bio[0]}</p>
              <button onClick={() => ReactDOM.flushSync(() => setActive(p))} style={{
                alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent",
                border: "none", color: "var(--bcp-coral)", fontFamily: "var(--font-brand)", fontSize: "14px", fontWeight: 600, cursor: "pointer", padding: 0,
              }}>
                Read more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "15px", height: "15px" }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      <BioModal person={active} onClose={() => ReactDOM.flushSync(() => setActive(null))} />
    </section>
  );
}

/* ——— 5 · CTA ——— */
function TeamCta() {
  const { Button } = DS;
  return (
    <section data-screen-label="Team CTA" style={{ background: "var(--bcp-cream)", padding: "90px 5%", fontFamily: "var(--font-brand)", textAlign: "center" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 600, letterSpacing: "-0.5px", color: "var(--bcp-navy)", margin: "0 0 30px 0", lineHeight: 1.2 }}>
          Best-in-class fund manager? Let's have a conversation.
        </h2>
        <Button size="lg" arrow href="index.html#contact">Partner with us</Button>
      </div>
    </section>
  );
}

window.TeamSections = { TeamHero, FounderSpotlight, AdvisoryBoard, MarketingPartners, TeamCta };
