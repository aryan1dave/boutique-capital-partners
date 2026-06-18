import React from "react";
import { Button } from "../../components/core/Button.jsx";
import { CalloutBox } from "../../components/core/CalloutBox.jsx";
import { SectionHeading } from "../../components/core/SectionHeading.jsx";

const A = "../../assets";

/** Homepage hero: full-bleed wave photo, navy mixed-emphasis title, floating insight callout. */
export function HomeHero() {
  const [hov, setHov] = React.useState(false);
  return (
    <section
      style={{
        position: "relative",
        minHeight: "82vh",
        display: "flex",
        alignItems: "center",
        backgroundImage: `url('${A}/images/wave-banner.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "var(--font-brand)",
        padding: "0 5% 0 3%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ maxWidth: "650px" }}>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 58px)",
              lineHeight: 1.15,
              color: "var(--bcp-navy)",
              margin: "0 0 24px 0",
              fontWeight: 400,
            }}
          >
            <em style={{ fontWeight: 400 }}>Outsourced</em> distribution
            <br />
            for <strong style={{ fontWeight: 700, fontStyle: "normal" }}>outstanding</strong>
            <br />
            investment strategies
          </h1>
          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.6, color: "var(--bcp-navy)", margin: 0 }}>
            We provide distribution for high-quality, differentiated investment strategies seeking access to the UK,
            Irish and Swiss intermediary markets.
          </p>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "60px", right: "5%" }}>
        <a href="#insights" style={{ textDecoration: "none", display: "block" }}>
          <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
              background: "var(--bcp-cream-card)",
              borderRadius: "var(--radius-md)",
              width: "320px",
              boxShadow: hov ? "var(--shadow-float-hover)" : "var(--shadow-float)",
              overflow: "hidden",
              transform: hov ? "translateY(-4px)" : "none",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div style={{ height: "5px", background: "linear-gradient(90deg, #de5c5c 0%, #e88a8a 100%)" }}></div>
            <div style={{ padding: "24px 28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", color: "#de5c5c" }}>
                  Viewpoint
                </span>
                <span style={{ width: "1px", height: "12px", background: "var(--bcp-sand-300)" }}></span>
                <span style={{ fontSize: "11px", fontWeight: 500, color: "var(--bcp-sand-400)", letterSpacing: "0.5px" }}>Q4 2025</span>
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--bcp-navy)", lineHeight: 1.4, margin: "0 0 18px 0" }}>
                The Russell Shuffle: When growth meets value
              </h3>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: hov ? "var(--bcp-white)" : "var(--bcp-navy)",
                  padding: "10px 18px",
                  background: hov ? "var(--bcp-navy)" : "var(--bcp-cream-button)",
                  borderRadius: "var(--radius-sm)",
                  transition: "all 0.3s ease",
                }}
              >
                Read article
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px" }}>
                  <path d="M5 12H19M19 12L12 5M19 12L12 19"></path>
                </svg>
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

/** Cream intro: statement heading, coral lead, prose + coral callout, swirl watermark. */
export function HomeIntro() {
  return (
    <section id="intro" style={{ background: "var(--bcp-cream)", fontFamily: "var(--font-brand)", overflow: "hidden" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "100px 30px 80px" }}>
        <SectionHeading
          title="We partner with and raise capital for the next wave of successful boutique fund managers"
          style={{ maxWidth: "980px", margin: "0 auto 70px" }}
        />
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "50px", alignItems: "flex-start" }}>
          <div style={{ maxWidth: "800px", position: "relative", zIndex: 2 }}>
            <h3 style={{ fontSize: "30px", fontWeight: 500, color: "var(--bcp-coral)", margin: "0 0 30px 0" }}>
              Focusing on best in class
            </h3>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--bcp-gray-600)", margin: "0 0 18px 0" }}>
              We collaborate with a select group of exceptional fund managers, offering well-defined, disciplined and
              proven investment strategies.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--bcp-gray-600)", margin: "0 0 18px 0" }}>
              Through these partnerships, our goal is to provide fund buyers with the very best investment strategies,
              built by smaller, lesser-known, but highly experienced managers.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--bcp-gray-600)", margin: "0 0 12px 0" }}>
              Focused and more agile than larger peers, these firms concentrate on fewer and often single strategies,
              with proven track records for delivering differentiated and sought-after returns.
            </p>
            <CalloutBox style={{ marginTop: "30px" }}>
              Our role is to showcase fund managers' impressive alpha-delivering skills to our established network of UK
              and European intermediaries; offering a fully outsourced, distribution solution for the long term.
            </CalloutBox>
            <div style={{ marginTop: "36px" }}>
              <Button arrow href="#contact">Partner with us</Button>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <img
              src={`${A}/marks/swirl-teal.svg`}
              alt=""
              style={{ width: "140%", maxWidth: "none", opacity: 0.15, display: "block", marginTop: "-30px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
