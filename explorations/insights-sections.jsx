// Insights hub — built from the live insights archive (uploads .../index.html).
// COPY LOCK: article titles, dates, excerpts, categories and the page title/
// subtitle are reproduced VERBATIM. Links point to the real article URLs / PDF.
// The archive is a plain table; this elevates it with working category filters
// and a featured lead article, per the agreed UX plan. Exposes window.InsightsSections.

const A = "../assets";
const DS = window.BoutiqueCapitalPartnersDesignSystem_7ef874;

const ARTICLES = [
  {
    id: "russell-shuffle",
    date: "December 2025",
    sort: 202512,
    category: "Market Commentary",
    title: "The Russell Shuffle: When growth meets value",
    excerpt: "Large-cap investing shaped by the Magnificent Seven sees a notable shift as Alphabet, Amazon, and Meta now appear in the Russell 1000 Value Index.",
    href: "https://boutiquecapitalpartners.co.uk/insights/the-russell-shuffle-when-growth-meets-value",
    cta: "Read",
    image: `${A}/images/puffin-shuffle.jpg`,
  },
  {
    id: "why-now",
    date: "August 2024",
    sort: 202408,
    category: "Market Commentary",
    title: "Why now for active US value equities?",
    excerpt: "BCP Advisory Board member Alex Marshall-Tate explores the compelling case for US value equities in today's market environment.",
    href: "https://boutiquecapitalpartners.co.uk/insights/why-now-for-active-us-value-equities",
    cta: "Read",
    image: `${A}/images/mountain-view.webp`,
  },
  {
    id: "river-road-partnership",
    date: "October 2024",
    sort: 202410,
    category: "Partnership News",
    title: "BCP partners with River Road Asset Management",
    excerpt: "Foundational distribution partnership with leading US value equity manager, bringing their US Large Cap Value Select strategy to UK and European intermediaries.",
    href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2024/10/BCP-Partners-with-River-Road-Press-Release-221024.pdf",
    cta: "View PDF",
    image: `${A}/images/wave-banner.webp`,
    pdf: true,
  },
];

const CATEGORIES = ["All", "Market Commentary", "Partnership News"];

const Arrow = ({ pdf }) => (
  pdf ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px" }}><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px" }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
  )
);

/* ——— 1 · HERO ——— */
function InsightsHero() {
  return (
    <section data-screen-label="Insights hero" style={{ position: "relative", background: "var(--bcp-cream)", padding: "80px 5% 0", fontFamily: "var(--font-brand)", overflow: "hidden" }}>
      <img src={`${A}/marks/swirl-teal.svg`} alt="" aria-hidden="true" style={{ position: "absolute", right: "-150px", top: "-120px", width: "500px", opacity: 0.1, pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "38px", fontSize: "14px", fontWeight: 500 }}>
          <a href="Homepage Redesign.html" style={{ color: "#666", textDecoration: "none" }}>Home</a>
          <span style={{ color: "#999" }}>/</span>
          <span style={{ color: "var(--bcp-navy)" }}>Insights</span>
        </div>
        <h1 style={{ fontSize: "clamp(38px, 5vw, 52px)", fontWeight: 600, color: "var(--bcp-navy)", margin: "0 0 20px 0", lineHeight: 1.15, letterSpacing: "-0.5px" }}>
          All insights
        </h1>
        <p style={{ fontSize: "19px", fontWeight: 500, color: "#555", margin: 0, lineHeight: 1.6, maxWidth: "800px" }}>
          Complete collection of market insights, fund updates, and investment commentary from Boutique Capital Partners
        </p>
      </div>
    </section>
  );
}

/* ——— 2 · HUB — filters, featured lead, list ——— */
function InsightsHub() {
  const [cat, setCat] = React.useState("All");
  const filtered = ARTICLES.filter((a) => cat === "All" || a.category === cat).sort((a, b) => b.sort - a.sort);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  const [fh, setFh] = React.useState(false);

  return (
    <section data-screen-label="Insights hub" style={{ background: "var(--bcp-cream)", padding: "50px 5% 100px", fontFamily: "var(--font-brand)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        {/* Filter chips */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "44px", borderBottom: "1px solid var(--bcp-sand-300)", paddingBottom: "28px" }}>
          {CATEGORIES.map((c) => {
            const on = c === cat;
            return (
              <button key={c} onClick={() => ReactDOM.flushSync(() => setCat(c))} style={{
                fontFamily: "var(--font-brand)", fontSize: "14px", fontWeight: 600, letterSpacing: "0.2px",
                padding: "10px 22px", borderRadius: "999px", cursor: "pointer", transition: "all 0.25s ease",
                border: `1px solid ${on ? "var(--bcp-navy)" : "var(--bcp-sand-300)"}`,
                background: on ? "var(--bcp-navy)" : "transparent", color: on ? "#fff" : "var(--bcp-gray-600)",
              }}>
                {c}
              </button>
            );
          })}
        </div>

        {featured ? (
          <a key={featured.id} href={featured.href} target={featured.pdf ? "_blank" : undefined} rel="noreferrer"
            onMouseEnter={() => setFh(true)} onMouseLeave={() => setFh(false)}
            style={{
              display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "0", marginBottom: "30px",
              background: "#fff", borderRadius: "var(--radius-xl)", overflow: "hidden", textDecoration: "none",
              border: fh ? "1px solid rgba(222,93,93,0.25)" : "1px solid var(--border-card)",
              boxShadow: fh ? "var(--shadow-card-hover)" : "var(--shadow-card)",
              transform: fh ? "translateY(-4px)" : "none", transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
            }}>
            <div style={{ position: "relative", minHeight: "340px", overflow: "hidden" }}>
              <img src={featured.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transform: fh ? "scale(1.05)" : "none", transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)" }} />
              <span style={{ position: "absolute", top: "22px", left: "22px", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "none", color: "#fff", background: "rgba(0,0,92,0.6)", backdropFilter: "blur(3px)", padding: "7px 15px", borderRadius: "999px" }}>Featured</span>
            </div>
            <div style={{ padding: "44px 48px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--bcp-coral)", letterSpacing: "0.3px" }}>{featured.date}</span>
                <span style={{ width: "1px", height: "13px", background: "var(--bcp-sand-300)" }}></span>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "var(--bcp-navy)", background: "var(--bcp-cream)", padding: "6px 14px", borderRadius: "999px", letterSpacing: "0.3px" }}>{featured.category}</span>
              </div>
              <h2 style={{ fontSize: "clamp(26px, 2.8vw, 34px)", fontWeight: 600, color: "var(--bcp-navy)", margin: "0 0 18px 0", lineHeight: 1.25, letterSpacing: "-0.3px" }}>{featured.title}</h2>
              <p style={{ fontSize: "17px", fontWeight: 500, color: "var(--bcp-gray-600)", lineHeight: 1.65, margin: "0 0 30px 0" }}>{featured.excerpt}</p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: fh ? "12px" : "8px", fontSize: "16px", fontWeight: 600, color: "var(--bcp-coral)", transition: "gap 0.3s ease" }}>
                {featured.cta} <Arrow pdf={featured.pdf} />
              </span>
            </div>
          </a>
        ) : null}

        {/* Remaining as elevated rows */}
        <div style={{ display: "grid", gap: "16px" }}>
          {rest.map((a) => <InsightRow key={a.id} a={a} />)}
        </div>

        {filtered.length === 0 ? (
          <p style={{ textAlign: "center", color: "var(--bcp-sand-400)", fontSize: "16px", padding: "60px 0" }}>No insights in this category yet.</p>
        ) : null}
      </div>
    </section>
  );
}

function InsightRow({ a }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={a.href} target={a.pdf ? "_blank" : undefined} rel="noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        display: "grid", gridTemplateColumns: "160px 1fr 180px 120px", gap: "24px", alignItems: "center",
        padding: "28px 36px", background: "#fff", borderRadius: "var(--radius-lg)", textDecoration: "none",
        border: h ? "1px solid rgba(222,93,93,0.25)" : "1px solid var(--border-card)",
        boxShadow: h ? "var(--shadow-card)" : "none",
        transform: h ? "translateX(4px)" : "none", transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
      }}>
      <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--bcp-coral)", letterSpacing: "0.3px" }}>{a.date}</span>
      <div>
        <h3 style={{ fontSize: "20px", fontWeight: 600, color: "var(--bcp-navy)", margin: "0 0 8px 0", lineHeight: 1.3, letterSpacing: "-0.2px" }}>{a.title}</h3>
        <p style={{ fontSize: "15px", fontWeight: 500, color: "var(--bcp-gray-600)", margin: 0, lineHeight: 1.5 }}>{a.excerpt}</p>
      </div>
      <span style={{ justifySelf: "start", fontSize: "12px", fontWeight: 700, color: "var(--bcp-navy)", background: "var(--bcp-cream)", padding: "6px 14px", borderRadius: "999px", letterSpacing: "0.3px" }}>{a.category}</span>
      <span style={{ justifySelf: "end", display: "inline-flex", alignItems: "center", gap: h ? "11px" : "7px", fontSize: "15px", fontWeight: 600, color: "var(--bcp-coral)", whiteSpace: "nowrap", transition: "gap 0.3s ease" }}>
        {a.cta} <Arrow pdf={a.pdf} />
      </span>
    </a>
  );
}

window.InsightsSections = { InsightsHero, InsightsHub };
