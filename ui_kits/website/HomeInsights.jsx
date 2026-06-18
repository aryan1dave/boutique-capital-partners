import React from "react";
import { Button } from "../../components/core/Button.jsx";
import { InsightCard } from "../../components/cards/InsightCard.jsx";
import { ContactCard } from "../../components/cards/ContactCard.jsx";

const A = "../../assets";

const INSIGHTS = [
  {
    image: `${A}/images/puffin-shuffle.jpg`,
    date: "Dec 2025",
    category: "Market Commentary",
    title: "The Russell Shuffle: When growth meets value",
    excerpt:
      "Large-cap investing has been shaped by the Magnificent Seven in recent years. As 2025 draws to a close, the line between growth and value is moving.",
  },
  {
    image: `${A}/images/mountain-view.webp`,
    date: "Oct 2025",
    category: "Market Commentary",
    title: "Why now for active US value equities?",
    excerpt:
      "BCP Advisory Board member Alex Marshall-Tate explores the compelling case for US value equities in today's market environment.",
  },
  {
    image: `${A}/images/wave-banner.webp`,
    date: "Jan 2025",
    category: "Partnership News",
    title: "BCP Partners with River Road Asset Management",
    excerpt:
      "We are delighted to announce a foundational distribution partnership with leading US value equity manager River Road Asset Management.",
  },
];

/** Cream insights hub: header, 3-card grid, white view-all CTA panel. */
export function HomeInsights() {
  return (
    <section id="insights" style={{ background: "var(--bcp-cream)", fontFamily: "var(--font-brand)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "100px 60px" }}>
        <div style={{ marginBottom: "80px" }}>
          <h1 style={{ fontSize: "56px", fontWeight: 600, color: "var(--bcp-navy)", margin: "0 0 24px 0", lineHeight: 1.15, letterSpacing: "-0.5px" }}>
            Insights &amp; Market Commentary
          </h1>
          <p style={{ fontSize: "20px", fontWeight: 500, color: "var(--bcp-gray-600)", margin: 0, lineHeight: 1.6, maxWidth: "800px" }}>
            Expert perspectives on markets, investment strategies, and boutique fund management.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
          {INSIGHTS.map((item) => (
            <InsightCard key={item.title} {...item} />
          ))}
        </div>

        <div
          style={{
            textAlign: "center",
            margin: "80px 0 0 0",
            padding: "70px 40px",
            background: "#fff",
            borderRadius: "var(--radius-2xl)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h2 style={{ fontSize: "32px", fontWeight: 600, color: "var(--bcp-navy)", margin: "0 0 16px 0", letterSpacing: "-0.3px" }}>
            Explore our full archive
          </h2>
          <p style={{ fontSize: "18px", fontWeight: 500, color: "var(--bcp-gray-600)", margin: "0 0 32px 0", lineHeight: 1.6 }}>
            Access our complete collection of market insights, fund updates, and investment commentary
          </p>
          <Button size="lg" href="#">View All Insights</Button>
        </div>
      </div>
    </section>
  );
}

/** Navy contact section: title + phone/email cards. */
export function HomeContact() {
  return (
    <section id="contact" style={{ background: "var(--bcp-navy)", fontFamily: "var(--font-brand)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2 style={{ fontSize: "42px", fontWeight: 600, color: "#fff", margin: "0 0 16px 0", lineHeight: 1.2, letterSpacing: "-0.5px" }}>
            Get In Touch
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.6 }}>We'd love to hear from you.</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
          <ContactCard icon="phone" label="Phone">
            <a href="tel:+442046193222" style={{ color: "var(--bcp-navy)", textDecoration: "none" }}>
              +44 (0)20 4619 3222
            </a>
          </ContactCard>
          <ContactCard icon="email" label="Email">
            <a href="mailto:rodger@boutiquecapitalpartners.co.uk" style={{ color: "var(--bcp-navy)", textDecoration: "none" }}>
              rodger@boutiquecapitalpartners.co.uk
            </a>
          </ContactCard>
        </div>
      </div>
    </section>
  );
}
