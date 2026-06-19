// Atlantic Puffin partnership page — BCP × Scottish Seabird Centre.
// COPY LOCK: the title, all six trait texts, the quote and its attribution, and
// the press-release button label are reproduced VERBATIM from site_src/index.html.
// Eyebrow/section labels are navigational only. Exposes window.PuffinSections.

const A = "assets";
const DS = window.BoutiqueCapitalPartnersDesignSystem_7ef874;

const TRAITS = [
  { name: "Distinctiveness", text: "Much like the vibrant orange beak, BCP stands out from industry peers by showcasing only truly differentiated investment strategies." },
  { name: "Adaptability", text: "Key to survival in the challenging environments Puffins inhabit is the ability to adapt. Likewise, our services are designed to be future-focused, flexible and responsive to the evolving demands of investors, leveraging the latest technology and driving innovation." },
  { name: "Resilience", text: "Puffins are known for their ability to withstand harsh conditions and dive deep into the ocean for food, embodying resilience and determination. Likewise, we have built BCP to be robust and enduring, cemented in a strong sense of purpose." },
  { name: "Approachability", text: "Their diminutive size makes Puffins unintimidating. They are viewed as expressive, curious and cheerful – characteristics that could describe Rodger and the broader BCP team." },
  { name: "Teamwork", text: "Puffins are highly social creatures nesting in large colonies, reflecting the importance of community, cooperation, and teamwork. Similarly, BCP believes in developing supportive and collaborative partnerships, with shared values, incentives and goals." },
  { name: "Commitment", text: "The loyalty seen in puffins is reflected in our focus on long-term fund manager partnerships and commitment to investor relationships founded on openness and trust." },
];

/* ——— 1 · HERO — full-bleed cliff scene ——— */
function PuffinHero() {
  return (
    <section data-screen-label="Puffin hero" style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "flex-end", overflow: "hidden", fontFamily: "var(--font-brand)" }}>
      <img data-parallax="1" src={`${A}/images/puffin-shuffle.jpg`} alt="Atlantic Puffins on a Scottish sea cliff" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 38%" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,92,0.32) 0%, rgba(0,0,92,0) 30%, rgba(0,0,92,0.18) 55%, rgba(0,0,92,0.82) 100%)" }}></div>
      {/* flying puffin cutout */}
      <img src={`${A}/images/puffin-cliff.webp`} alt="" aria-hidden="true" className="puffin-float" style={{ position: "absolute", top: "16%", right: "8%", width: "min(30vw, 360px)", filter: "drop-shadow(0 18px 30px rgba(0,0,40,0.35))", pointerEvents: "none" }} />

      <div style={{ position: "relative", width: "100%", maxWidth: "1240px", margin: "0 auto", padding: "0 5% 88px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "none", color: "#fff", marginBottom: "26px", background: "rgba(37,123,153,0.55)", backdropFilter: "blur(3px)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "var(--radius-pill)", padding: "9px 20px" }}>
          <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--bcp-coral)" }}></span>
          Corporate Responsibility
        </div>
        <h1 style={{ fontSize: "clamp(34px, 4.6vw, 60px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.8px", color: "#fff", margin: "0 0 30px 0", maxWidth: "1000px", textShadow: "0 2px 30px rgba(0,0,40,0.4)" }}>
          BCP is proud to support the Atlantic Puffin, in association with the{" "}
          <a href="https://seabird.org/wildlife/puffin" target="_blank" rel="noreferrer" style={{ color: "#fff", textDecorationColor: "var(--bcp-coral)", textUnderlineOffset: "5px", textDecorationThickness: "2px" }}>Scottish Seabird Centre</a>
        </h1>
        <a href="https://seabird.org" target="_blank" rel="noreferrer" style={{ display: "inline-block" }}>
          <img src={`${A}/logos/scottish-seabird-centre-white.png`} alt="Scottish Seabird Centre" style={{ height: "74px", width: "auto" }} />
        </a>
      </div>
    </section>
  );
}

/* ——— 2 · KINSHIP — interactive trait explorer ——— */
function PuffinKinship() {
  const [active, setActive] = React.useState(0);
  const t = TRAITS[active];
  return (
    <section data-screen-label="Shared traits" style={{ position: "relative", background: "var(--bcp-cream)", padding: "100px 5%", fontFamily: "var(--font-brand)", overflow: "hidden" }}>
      <img src={`${A}/marks/swirl-teal.svg`} alt="" aria-hidden="true" style={{ position: "absolute", left: "-160px", bottom: "-120px", width: "480px", opacity: 0.08, pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto" }}>
        <div style={{ maxWidth: "760px", marginBottom: "56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "none", color: "var(--bcp-coral)", marginBottom: "18px" }}>
            <span style={{ width: "34px", height: "2px", background: "var(--bcp-coral)" }}></span>
            Shared traits
          </div>
          <h2 style={{ fontSize: "clamp(30px, 3.8vw, 46px)", fontWeight: 600, letterSpacing: "-0.5px", lineHeight: 1.12, color: "var(--bcp-navy)", margin: 0 }}>
            Six traits we share with the puffin
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "0.82fr 1fr", gap: "56px", alignItems: "start" }}>
          {/* sticky portrait with kinetic trait name */}
          <div style={{ position: "sticky", top: "40px" }}>
            <div style={{ position: "relative", borderRadius: "var(--radius-2xl)", overflow: "hidden", boxShadow: "var(--shadow-card-hover)", aspectRatio: "0.78" }}>
              <img src={`${A}/images/puffin-portrait.png`} alt="Atlantic Puffin portrait" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,40,0) 45%, rgba(0,0,40,0.75) 100%)" }}></div>
              <div style={{ position: "absolute", left: "30px", right: "30px", bottom: "28px" }}>
                <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", color: "rgba(255,255,255,0.7)", marginBottom: "6px" }}>
                  {String(active + 1).padStart(2, "0")} <span style={{ opacity: 0.5 }}>/ 06</span>
                </div>
                <div key={active} className="puffin-traitword" style={{ fontSize: "clamp(28px, 3.2vw, 40px)", fontWeight: 700, letterSpacing: "-0.5px", color: "#fff", lineHeight: 1.05 }}>
                  {t.name}
                </div>
              </div>
            </div>
          </div>

          {/* selectable list */}
          <div>
            {TRAITS.map((tr, i) => {
              const on = i === active;
              return (
                <div key={tr.name} onClick={() => ReactDOM.flushSync(() => setActive(i))} style={{
                  borderTop: i === 0 ? "1px solid var(--bcp-sand-300)" : "none",
                  borderBottom: "1px solid var(--bcp-sand-300)", cursor: "pointer",
                  padding: on ? "26px 0 30px" : "24px 0", transition: "padding 0.3s ease",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <span style={{ fontFamily: "var(--font-serif-accent)", fontSize: "26px", fontWeight: 400, color: on ? "var(--bcp-coral)" : "var(--bcp-sand-400)", transition: "color 0.3s ease", minWidth: "34px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 style={{ flex: 1, fontSize: "clamp(20px, 2.2vw, 27px)", fontWeight: 600, letterSpacing: "-0.3px", color: on ? "var(--bcp-navy)" : "var(--bcp-gray-600)", margin: 0, transition: "color 0.3s ease" }}>
                      {tr.name}
                    </h3>
                    <span style={{ width: "30px", height: "30px", borderRadius: "50%", border: `1.5px solid ${on ? "var(--bcp-coral)" : "var(--bcp-sand-300)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: on ? "var(--bcp-coral)" : "transparent", transition: "all 0.3s ease" }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke={on ? "#fff" : "var(--bcp-sand-400)"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px", transform: on ? "rotate(45deg)" : "none", transition: "transform 0.3s ease" }}>
                        <path d="M12 5v14M5 12h14"></path>
                      </svg>
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateRows: on ? "1fr" : "0fr", transition: "grid-template-rows 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
                    <div style={{ overflow: "hidden" }}>
                      <p style={{ margin: "16px 0 0 54px", fontSize: "16.5px", lineHeight: 1.7, color: "var(--bcp-gray-700)", maxWidth: "560px" }}>
                        {tr.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ——— 3 · QUOTE — conservation centrepiece ——— */
function PuffinQuote() {
  return (
    <section data-screen-label="Conservation quote" style={{ position: "relative", background: "var(--bcp-teal-section)", padding: "104px 5%", fontFamily: "var(--font-brand)", overflow: "hidden" }}>
      <img src={`${A}/marks/swirl-teal.svg`} alt="" aria-hidden="true" style={{ position: "absolute", right: "-180px", top: "50%", transform: "translateY(-50%)", width: "620px", opacity: 0.12, pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "1040px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-serif-accent)", fontSize: "90px", lineHeight: 0.5, color: "rgba(255,255,255,0.55)", marginBottom: "30px" }}>“</div>
        <p style={{ fontSize: "clamp(22px, 2.7vw, 32px)", fontWeight: 500, lineHeight: 1.5, color: "#fff", margin: "0 0 36px 0" }}>
          We are delighted to partner with BCP to support our vital work in marine conservation and education. Scotland's
          seabird populations, including the much-loved puffin, face urgent threats from biodiversity loss and climate
          change. On Isle of May in East Scotland, puffin numbers dropped from 10,000 pairs to under 2,000...
        </p>
        <div style={{ width: "44px", height: "3px", background: "var(--bcp-coral)", margin: "0 auto 22px", borderRadius: "3px" }}></div>
        <p style={{ fontSize: "17px", fontWeight: 600, color: "#fff", margin: 0 }}>
          Florence Gygax, Partnership Development Manager, Scottish Seabird Centre
        </p>
      </div>
    </section>
  );
}

/* ——— 4 · CTA — press release band ——— */
function PuffinCta() {
  return (
    <section data-screen-label="Press release CTA" style={{ position: "relative", background: "var(--bcp-navy)", padding: "90px 5%", fontFamily: "var(--font-brand)", overflow: "hidden" }}>
      <img src={`${A}/images/puffin-cliff.webp`} alt="" aria-hidden="true" style={{ position: "absolute", left: "-40px", bottom: "-30px", width: "min(34vw, 380px)", opacity: 0.9, transform: "scaleX(-1)", filter: "drop-shadow(0 14px 26px rgba(0,0,0,0.4))", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "50px", flexWrap: "wrap" }}>
        <a href="https://seabird.org" target="_blank" rel="noreferrer" style={{ display: "inline-block", flexShrink: 0 }}>
          <img src={`${A}/logos/scottish-seabird-centre-white.png`} alt="Scottish Seabird Centre" style={{ height: "92px", width: "auto" }} />
        </a>
        <a href="https://boutiquecapitalpartners.co.uk/wp-content/uploads/2024/12/BCP-Press-Release_SCC-Partnership-FINAL-121224.pdf" target="_blank" rel="noreferrer" className="puffin-cta-btn" style={{
          display: "inline-flex", alignItems: "center", gap: "16px", background: "var(--bcp-coral)", color: "#fff",
          fontSize: "16px", fontWeight: 600, lineHeight: 1.4, textDecoration: "none", padding: "22px 34px",
          borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-coral)", transition: "all 0.25s ease", flexShrink: 0,
        }}>
          <span>Read the press release to find out<br />more about our partnership</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px", flexShrink: 0 }}><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
        </a>
      </div>
    </section>
  );
}

window.PuffinSections = { PuffinHero, PuffinKinship, PuffinQuote, PuffinCta };
