// Fund Information & Document Centre — CG River Road US Large Cap Value Select.
// FAITHFUL recreation of the live page (uploads .../index.html, updated June 2026):
// share-class comparison table, fund literature & resources, viewpoint cards,
// endorsement disclaimer. COPY LOCK: all data, document names, period labels,
// footnotes and the endorsement text are reproduced VERBATIM, and every PDF /
// external link points to its real URL. A professional-investor attestation gate
// (remembered) precedes the documents, per the agreed UX plan.
// Exposes window.DocCentreSections.

const A = "assets";
const DS = window.BoutiqueCapitalPartnersDesignSystem_7ef874;
const ATTEST_KEY = "bcp_pro_attested";

const DISCLOSURE_PDF = "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2025/12/River-Road-Boutique-Capital-Partners-Endorsement-Disclosure.pdf";

const SHARE_CLASSES = [
  { meta: "GBP Acc", letter: "F" },
  { meta: "GBP Acc", letter: "W" },
  { meta: "GBP Acc", letter: "I" },
];
const TABLE_ROWS = [
  { label: "ISIN", cells: ["GB00BMVFJZ53", "GB00BMVFK070", "GB00BMVFK187"] },
  { label: "SEDOL", cells: ["BMVFJZ5", "BMVFK07", "BMVFK18"] },
  { label: "AMC", cells: ["0.29", "0.39", "0.49"] },
  { label: "OCF", cells: ["0.39", "0.49", "0.59"] },
  { label: "Min. investment¹", cells: ["£250m", "£50m", "£1,000"] },
];

const LIT_PERIODIC = [
  {
    name: "Strategy Factsheet",
    periods: [
      { label: "Q4 2025", href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2026/01/reportbcp2025-12-31RiverRoadLargeCapValueSelectFactsheet.pdf" },
      { label: "Q1 2026", href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2026/06/reportbcp-2026-03-31-River-Road-Large-Cap-Value-Select-Factsheet.pdf" },
    ],
  },
  {
    name: "Strategy Commentary",
    periods: [
      { label: "Q1 2025", href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2025/11/River_Road_Large_Cap_Value_Select_Commentary_vBCP.pdf" },
      { label: "Q2 2025", href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2025/11/Q2_Commentary_River_Road_Large_Cap_Value_Select.pdf" },
      { label: "Q3 2025", href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2025/11/River_Road_Large_Cap_Value_Select_Commentary.pdf" },
      { label: "Q4 2025", href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2026/01/reportbcp-2025-12-31-River-Road-Large-Cap-Value-Select-Commentary.pdf" },
      { label: "Q1 2026", href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2026/06/reportbcp-2026-03-31-River-Road-Large-Cap-Value-Select-Commentary.pdf" },
    ],
  },
  {
    name: "Strategy Summary",
    periods: [
      { label: "Q3 2025", href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2025/11/River_Road_Large_Cap_Value_Select_Strategy_Summary.pdf" },
      { label: "Q1 2026", href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2026/06/reportbcp-2026-03-31-River-Road-Large-Cap-Value-Select-Strategy-Summary.pdf" },
    ],
  },
];

const LIT_KEY = [
  { name: "Platform availability", icon: "screen", href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2026/01/BCP_RRAM_USLCVSF-Platform-availability-5jan26_F-share-class-waiver.pdf", action: "View", external: true },
  { name: "KIID document & Prospectus", icon: "doc", href: "https://riverroad.fundsdata.carnegroup.com", action: "View", external: true },
];

const VIEWPOINTS = [
  { title: "Why now for US value equities?", quarter: "Q2 2025", href: "https://boutiquecapitalpartners.co.uk/insights/why-now-for-active-us-value-equities" },
  { title: "The Russell Shuffle: When growth meets value", quarter: "Q4 2025", href: "https://boutiquecapitalpartners.co.uk/insights/the-russell-shuffle-when-growth-meets-value" },
];

/* icons */
const Ico = {
  doc: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"></path><line x1="9" y1="13" x2="15" y2="13"></line><line x1="9" y1="17" x2="13" y2="17"></line></svg>,
  screen: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"></rect><path d="M8 21h8"></path><path d="M12 18v3"></path></svg>,
  plainDoc: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"></path></svg>,
};
const DownIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px", opacity: 0.55 }}><path d="M12 3v12"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg>;
const ExtIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px", opacity: 0.55 }}><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>;

/* ——— 1 · HERO ——— */
function DocHero() {
  const crumbs = ["Fund partners", "River Road Asset Management", "Key fund information & document centre"];
  return (
    <section data-screen-label="Doc hero" style={{ position: "relative", background: "var(--bcp-navy)", padding: "0 0 64px", fontFamily: "var(--font-brand)", overflow: "hidden" }}>
      <img src={`${A}/marks/swirl-teal.svg`} alt="" aria-hidden="true" style={{ position: "absolute", right: "-150px", top: "-110px", width: "460px", opacity: 0.1, pointerEvents: "none" }} />
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "16px 5%", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          {crumbs.map((c, i) => (
            <React.Fragment key={c}>
              {i > 0 ? <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>/</span> : null}
              <span style={{ fontSize: "13px", fontWeight: i === crumbs.length - 1 ? 600 : 500, color: i === crumbs.length - 1 ? "#fff" : "rgba(255,255,255,0.6)" }}>{c}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div style={{ position: "relative", maxWidth: "1180px", margin: "0 auto", padding: "66px 5% 0" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "none", color: "var(--bcp-coral)", marginBottom: "20px" }}>
          <span style={{ width: "34px", height: "2px", background: "var(--bcp-coral)" }}></span>
          Document centre
        </div>
        <h1 style={{ fontSize: "clamp(32px, 4.2vw, 50px)", fontWeight: 600, letterSpacing: "-0.6px", lineHeight: 1.1, color: "#fff", margin: "0 0 18px 0" }}>
          Key fund information and document centre
        </h1>
        <h2 style={{ fontSize: "clamp(20px, 2.2vw, 26px)", fontWeight: 600, color: "var(--bcp-coral)", margin: 0 }}>
          CG River US Large Cap Value Select
        </h2>
      </div>
    </section>
  );
}

/* ——— 2 · DOCUMENT CENTRE w/ attestation gate ——— */
function DocCentre() {
  const [attested, setAttested] = React.useState(false);
  React.useEffect(() => {
    try { if (localStorage.getItem(ATTEST_KEY) === "1") setAttested(true); } catch (e) {}
  }, []);
  const confirm = () => {
    try { localStorage.setItem(ATTEST_KEY, "1"); } catch (e) {}
    ReactDOM.flushSync(() => setAttested(true));
  };

  const Pill = ({ label, href, accent, icon }) => {
    const [h, setH] = React.useState(false);
    return (
      <a href={href} target="_blank" rel="noreferrer" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
        display: "inline-flex", alignItems: "center", gap: "8px", padding: "9px 16px", borderRadius: "999px",
        border: `1px solid ${h ? (accent ? "var(--bcp-coral)" : "var(--bcp-navy)") : "#d9cfb6"}`,
        background: h ? (accent ? "var(--bcp-coral)" : "var(--bcp-navy)") : "#fff",
        color: h ? "#fff" : "var(--bcp-navy)", fontSize: "13px", fontWeight: 600, textDecoration: "none",
        whiteSpace: "nowrap", transition: "all 0.25s ease", transform: h ? "translateY(-1px)" : "none",
        boxShadow: h ? "0 4px 12px rgba(0,0,92,0.18)" : "none",
      }}>
        {label}
        {icon === "ext" ? <ExtIcon /> : <DownIcon />}
      </a>
    );
  };

  const LitRow = ({ icon, name, children }) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", padding: "20px 0", borderBottom: "1px solid #ECE3CF", flexWrap: "wrap" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "16px", fontWeight: 600, color: "var(--bcp-navy)" }}>
        <span style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#fff", border: "1px solid #EFE6D2", color: "var(--bcp-navy)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ width: "20px", height: "20px", display: "block" }}>{icon}</span>
        </span>
        {name}
      </div>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "flex-end" }}>{children}</div>
    </div>
  );

  return (
    <section data-screen-label="Document centre" style={{ background: "#0F367A", padding: "60px 5%", fontFamily: "var(--font-brand)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {!attested ? (
          <div style={{ maxWidth: "680px", margin: "0 auto", background: "#FAF6EB", border: "1px solid #EFE6D2", borderRadius: "12px", boxShadow: "0 6px 24px rgba(0,0,92,0.10)", padding: "44px 46px", textAlign: "center" }}>
            <div style={{ width: "58px", height: "58px", borderRadius: "50%", background: "rgba(222,93,93,0.12)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--bcp-coral)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "26px", height: "26px" }}>
                <rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h2 style={{ fontSize: "26px", fontWeight: 600, color: "var(--bcp-navy)", margin: "0 0 14px 0", letterSpacing: "-0.3px" }}>Professional investors &amp; advisers</h2>
            <p style={{ fontSize: "15.5px", lineHeight: 1.7, color: "#6a7385", margin: "0 0 28px 0" }}>
              The documents in this section are intended exclusively for experienced professional and institutional
              investors and advisers. Please confirm your status to continue. Capital is at risk.
            </p>
            <button onClick={confirm} style={{
              display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--bcp-coral)", color: "#fff",
              border: "none", fontFamily: "var(--font-brand)", fontSize: "15px", fontWeight: 600, padding: "16px 32px",
              borderRadius: "12px", cursor: "pointer", boxShadow: "var(--shadow-coral)", transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--bcp-coral-hover-dark)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--bcp-coral)"; e.currentTarget.style.transform = "none"; }}>
              I confirm I am a professional investor / adviser
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px" }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </button>
          </div>
        ) : (
          <div>
            {/* Share class comparison */}
            <div style={{ background: "#FAF6EB", border: "1px solid #EFE6D2", borderRadius: "12px", boxShadow: "0 6px 24px rgba(0,0,92,0.10)", padding: "44px 48px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "none", color: "var(--bcp-coral)" }}>Share class comparison</span>
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--bcp-navy)", margin: "10px 0 6px", lineHeight: 1.25 }}>CG River Road US Large Cap Value Select</h3>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#6a7385", margin: "0 0 28px" }}>GBP Accumulation share classes</p>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #C9B78B", minWidth: "460px" }}>
                  <thead>
                    <tr>
                      <th style={{ border: "1px solid #C9B78B", padding: "14px 20px 16px", textAlign: "left", width: "220px", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "none", color: "#9aa1b0" }}>Share class</th>
                      {SHARE_CLASSES.map((sc) => (
                        <th key={sc.letter} style={{ border: "1px solid #C9B78B", padding: "14px 20px 16px", textAlign: "center", verticalAlign: "bottom" }}>
                          <span style={{ display: "block", fontSize: "10px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "none", color: "#9aa1b0" }}>{sc.meta}</span>
                          <span style={{ display: "block", fontSize: "22px", fontWeight: 700, color: "var(--bcp-coral)", lineHeight: 1.15, marginTop: "3px" }}>{sc.letter}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map((r) => (
                      <tr key={r.label} className="doc-trow">
                        <td style={{ border: "1px solid #C9B78B", padding: "18px 20px", textAlign: "left", fontSize: "15px", fontWeight: 600, color: "var(--bcp-navy)" }} dangerouslySetInnerHTML={{ __html: r.label.replace("¹", "<sup>1</sup>") }}></td>
                        {r.cells.map((c, i) => (
                          <td key={i} style={{ border: "1px solid #C9B78B", padding: "18px 20px", textAlign: "center", fontSize: "15px", fontWeight: 500, color: "#333" }}>{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: "12px", fontStyle: "italic", color: "#9aa1b0", margin: "18px 0 0" }}><sup>1</sup> Waived by agreement.</p>
            </div>

            {/* Literature & resources */}
            <div style={{ background: "#FAF6EB", border: "1px solid #EFE6D2", borderRadius: "12px", boxShadow: "0 6px 24px rgba(0,0,92,0.10)", padding: "44px 48px", marginTop: "28px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "none", color: "var(--bcp-coral)" }}>Fund documents</span>
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: "var(--bcp-navy)", margin: "10px 0 6px", lineHeight: 1.25 }}>Literature &amp; resources</h3>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#6a7385", margin: "0 0 8px" }}>The documents below apply to the fund as a whole — identical across the F, W and I share classes.</p>

              {LIT_PERIODIC.map((row) => (
                <LitRow key={row.name} icon={Ico.doc} name={row.name}>
                  {row.periods.map((p) => <Pill key={p.label} label={p.label} href={p.href} icon="down" />)}
                </LitRow>
              ))}

              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "none", color: "#9aa1b0", margin: "28px 0 4px" }}>Key documents &amp; access</p>
              {LIT_KEY.map((row) => (
                <LitRow key={row.name} icon={row.icon === "screen" ? Ico.screen : Ico.plainDoc} name={row.name}>
                  <Pill label={row.action} href={row.href} accent icon="ext" />
                </LitRow>
              ))}

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", marginTop: "32px", paddingTop: "26px", borderTop: "1px solid #ECE3CF" }}>
                <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--bcp-navy)" }}>Discuss a minimum investment waiver</span>
                <Pill label="Email us" href="mailto:rodger@boutiquecapitalpartners.co.uk" accent icon="ext" />
              </div>
            </div>

            {/* Viewpoint cards */}
            <div style={{ marginTop: "40px", display: "flex", justifyContent: "flex-end", gap: "24px", flexWrap: "wrap" }}>
              {VIEWPOINTS.map((v) => (
                <div key={v.title} style={{ background: "#FAF6EB", border: "1px solid #EFE6D2", borderRadius: "16px", padding: "32px 36px", boxShadow: "0 6px 24px rgba(0,0,92,0.10)", width: "380px", boxSizing: "border-box" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                    <h3 style={{ fontSize: "22px", fontWeight: 600, color: "var(--bcp-navy)", margin: 0, lineHeight: 1.3, flex: 1 }}>{v.title}</h3>
                    <div style={{ marginLeft: "16px", textAlign: "right" }}>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--bcp-coral)", letterSpacing: "1.5px", textTransform: "none", display: "block", marginBottom: "4px" }}>Viewpoint</span>
                      <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--bcp-coral)" }}>{v.quarter}</span>
                    </div>
                  </div>
                  <a href={v.href} target="_blank" rel="noreferrer" style={{ display: "inline-block", color: "var(--bcp-coral)", textDecoration: "underline", fontWeight: 600, fontSize: "16px" }}>Read it here</a>
                </div>
              ))}
            </div>

            {/* Endorsement */}
            <div style={{ marginTop: "50px", paddingTop: "30px", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)", fontWeight: 400, lineHeight: 1.5, margin: 0, textAlign: "center", maxWidth: "900px", marginLeft: "auto", marginRight: "auto" }}>
                For professional investor use only. Boutique Capital Partners Limited (FRN 1027595) ("BCP") is an appointed
                representative of Thornbridge Investment Management LLP (FRN 713859), which is authorised and regulated by
                the Financial Conduct Authority. BCP is appointed by River Road Asset Management, LLC ("River Road") to
                solicit clients or investors to be a client of River Road. BCP is not a current client or investor of River
                Road. River Road will pay (or procure to be paid) cash compensation to BCP for the solicitation services BCP
                provides. BCP, due to such compensation, has an incentive to recommend River Road and its strategies,
                resulting in a material conflict of interest. For more important disclosures, please click here:{" "}
                <a href={DISCLOSURE_PDF} target="_blank" rel="noreferrer" style={{ color: "#FFB98A", textDecoration: "underline" }}>River Road Boutique Capital Partners Endorsement Disclosure.pdf</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

window.DocCentreSections = { DocHero, DocCentre };
