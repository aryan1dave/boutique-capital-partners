import React from "react";
import { SectionHeading } from "../../components/core/SectionHeading.jsx";

const A = "../../assets";

/** Navy River Road announcement with corner-bracket frame + fund intro. */
export function HomePartnership() {
  return (
    <section style={{ background: "var(--bcp-navy)", padding: "100px 15px", fontFamily: "var(--font-brand)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ position: "relative", width: "70%", minWidth: "640px", padding: "65px 75px", textAlign: "center", boxSizing: "border-box" }}>
          <span style={{ position: "absolute", top: 0, left: 0, width: "56px", height: "56px", borderTop: "3px solid var(--bcp-coral)", borderLeft: "3px solid var(--bcp-coral)" }}></span>
          <span style={{ position: "absolute", bottom: 0, right: 0, width: "56px", height: "56px", borderBottom: "3px solid var(--bcp-coral)", borderRight: "3px solid var(--bcp-coral)" }}></span>
          <p style={{ fontSize: "32px", fontWeight: 400, lineHeight: "52px", color: "#fff", margin: 0 }}>
            BCP is delighted to announce a foundational distribution partnership with leading US value equity manager,
          </p>
          <h2 style={{ fontSize: "40px", fontWeight: 700, lineHeight: "54px", color: "#fff", margin: "30px 0 0 0" }}>
            River Road Asset Management
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "auto auto", gap: "60px", alignItems: "center", marginTop: "70px" }}>
          <div>
            <h2 style={{ fontSize: "30px", fontWeight: 600, lineHeight: "36px", color: "var(--bcp-coral)", margin: "0 0 18px 0" }}>Introducing:</h2>
            <div style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "16px 22px", display: "inline-block" }}>
              <img src={`${A}/logos/river-road-logo.svg`} alt="River Road Asset Management" style={{ width: "200px", display: "block" }} />
            </div>
          </div>
          <div style={{ maxWidth: "460px" }}>
            <h2 style={{ fontFamily: "var(--font-serif-accent)", fontSize: "32px", fontWeight: 400, color: "#fff", margin: "0 0 14px 0" }}>
              US Large Cap Value Select
            </h2>
            <p style={{ fontFamily: "var(--font-serif-accent)", fontSize: "20px", lineHeight: "30px", color: "#fff", margin: 0 }}>
              A disciplined, high-conviction US value equity strategy with a long-term track record.
            </p>
          </div>
        </div>

        <div style={{ textAlign: "center", paddingTop: "50px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 600, lineHeight: "36px", color: "#fff", margin: 0 }}>
            NOW AVAILABLE AS A UK OEIC, EXCLUSIVELY THROUGH
            <br />
            BOUTIQUE CAPITAL PARTNERS
          </h2>
          <h2 style={{ fontSize: "26px", fontWeight: 400, lineHeight: "36px", color: "#fff", margin: "25px 0 0 0" }}>
            ACCESSIBLE THROUGH MOST MAJOR PLATFORMS
            <br />
            FEE WAIVERS AGREED BY BCP
          </h2>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  {
    title: "Commercial",
    body: [
      "We are committed to delivering long-term and sustainable growth, ensuring our partnerships are beneficial for all parties.",
      "We are hardworking, motivated and focused.",
    ],
  },
  {
    title: "Innovative",
    body: [
      "We are focused on creativity, continuous learning and adaptation — viewing change as an opportunity, rather than a threat. We strive to improve.",
      "We embrace the latest ideas, technology and communication channels.",
    ],
  },
  {
    title: "Friendly",
    body: ["We believe in the power of good interpersonal relationships.", "We are collaborative and empathetic. And fun."],
  },
];

/** Cream values intro + mountain-photo strip with three popup values. */
export function HomeValues() {
  const [open, setOpen] = React.useState(null);
  return (
    <div style={{ fontFamily: "var(--font-brand)" }}>
      <section style={{ background: "var(--bcp-cream)", padding: "70px 15px" }}>
        <SectionHeading
          size="xl"
          title="Our values: a framework for success"
          lead="Our vision and values provide a robust framework for an entrepreneurial, high-performance culture. Together they form guiding principles for business decisions, actions, and company behaviours."
        />
      </section>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          minHeight: "500px",
          backgroundImage: `url('${A}/images/mountain-view.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderBottom: "5px solid var(--bcp-cream)",
        }}
      >
        {VALUES.map((v, i) => (
          <div key={v.title} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <a
              onClick={() => setOpen(v)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "13px",
                fontSize: "clamp(28px, 3.4vw, 48px)",
                fontWeight: 600,
                color: "#fff",
                cursor: "pointer",
                textShadow: "0 2px 18px rgba(0,0,0,0.35)",
              }}
            >
              {v.title}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ width: "26px", height: "26px" }}>
                <path d="M12 5v14M5 12h14"></path>
              </svg>
            </a>
          </div>
        ))}
        {open ? (
          <div
            onClick={() => setOpen(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "var(--overlay-modal)",
              zIndex: 10000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{ background: "#fff", borderRadius: "var(--radius-xl)", maxWidth: "560px", width: "100%", boxShadow: "var(--shadow-modal)" }}
            >
              <div style={{ background: "var(--bcp-navy)", padding: "26px 35px", borderRadius: "16px 16px 0 0", position: "relative" }}>
                <h2 style={{ fontSize: "26px", fontWeight: 700, color: "#fff", margin: 0 }}>{open.title}</h2>
                <button
                  onClick={() => setOpen(null)}
                  style={{ position: "absolute", top: "50%", right: "20px", transform: "translateY(-50%)", background: "transparent", border: "none", color: "#fff", fontSize: "30px", cursor: "pointer", opacity: 0.8 }}
                >
                  ×
                </button>
              </div>
              <div style={{ padding: "32px 35px" }}>
                {open.body.map((p, i) => (
                  <p key={i} style={{ fontSize: "16px", lineHeight: 1.8, color: "#333", margin: i === open.body.length - 1 ? 0 : "0 0 16px 0" }}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}

const PUFFIN_FACTS = [
  {
    title: "Distinctiveness",
    body: "Much like the vibrant orange beak, BCP stands out from industry peers by showcasing only truly differentiated investment strategies.",
  },
  {
    title: "Adaptability",
    body: "Key to survival in the challenging environments Puffins inhabit is the ability to adapt. Likewise, our services are designed to be future-focused, flexible and responsive to the evolving demands of investors.",
  },
  {
    title: "Resilience",
    body: "Puffins are known for their ability to withstand harsh conditions and dive deep into the ocean for food. Likewise, we have built BCP to be robust and enduring, cemented in a strong sense of purpose.",
  },
  {
    title: "Teamwork",
    body: "Puffins are highly social creatures nesting in large colonies. Similarly, BCP believes in developing supportive and collaborative partnerships, with shared values, incentives and goals.",
  },
  {
    title: "Commitment",
    body: "The loyalty seen in puffins is reflected in our focus on long-term fund manager partnerships and commitment to investor relationships founded on openness and trust.",
  },
];

/** Teal CSR section: puffin photo, accordion of shared traits, partner quote, cream CTA. */
export function HomePuffin() {
  const [openIdx, setOpenIdx] = React.useState(0);
  return (
    <section style={{ background: "var(--bcp-teal-section)", padding: "80px 5%", fontFamily: "var(--font-brand)" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "70px", alignItems: "start" }}>
        <img
          src={`${A}/images/puffin-portrait.png`}
          alt="Atlantic Puffin"
          style={{ width: "100%", borderRadius: "var(--radius-xl)", display: "block" }}
        />
        <div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "26px", marginBottom: "30px" }}>
            <h2 style={{ fontSize: "26px", fontWeight: 600, lineHeight: 1.4, color: "#fff", margin: 0, flex: 1 }}>
              BCP is proud to support the Atlantic Puffin, in association with the{" "}
              <a href="https://seabird.org/wildlife/puffin" target="_blank" style={{ color: "#fff" }}>
                Scottish Seabird Centre
              </a>
            </h2>
            <img src={`${A}/logos/scottish-seabird-centre-white.png`} alt="Scottish Seabird Centre" style={{ height: "64px" }} />
          </div>

          <div style={{ marginBottom: "35px" }}>
            {PUFFIN_FACTS.map((f, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={f.title} style={{ borderBottom: "1px solid rgba(255,255,255,0.25)" }}>
                  <div
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: isOpen ? "20px 20px" : "20px 6px",
                      cursor: "pointer",
                      transition: "padding 0.3s ease",
                    }}
                  >
                    <h3 style={{ fontSize: "19px", fontWeight: 600, color: "#fff", margin: 0 }}>{f.title}</h3>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ width: "16px", height: "16px", transition: "transform 0.3s ease", transform: isOpen ? "rotate(180deg)" : "none" }}
                    >
                      <path d="M6 9L12 15L18 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                  <div style={{ maxHeight: isOpen ? "250px" : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
                    <div style={{ padding: "0 24px 24px", fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.95)" }}>{f.body}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginBottom: "35px", paddingTop: "10px" }}>
            <p style={{ fontSize: "17px", fontStyle: "italic", lineHeight: 1.7, color: "#fff", margin: "0 0 18px 0" }}>
              "We are delighted to partner with BCP to support our vital work in marine conservation and education.
              Scotland's seabird populations, including the much-loved puffin, face urgent threats from biodiversity
              loss and climate change."
            </p>
            <p style={{ fontSize: "18px", fontWeight: 600, color: "#fff", margin: 0 }}>
              Florence Gygax, Partnership Development Manager, Scottish Seabird Centre
            </p>
          </div>

          <a
            href="#"
            style={{
              display: "inline-block",
              backgroundColor: "var(--bcp-cream-card)",
              color: "#de5c5c",
              fontSize: "15px",
              fontWeight: 600,
              padding: "18px 32px",
              textDecoration: "none",
              borderRadius: "var(--radius-md)",
              transition: "all 0.3s ease",
              textAlign: "center",
              lineHeight: 1.4,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--bcp-cream-card)";
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Read the press release to find out
            <br />
            more about our partnership
          </a>
        </div>
      </div>
    </section>
  );
}
