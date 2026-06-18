import React from "react";
import { Button } from "../../components/core/Button.jsx";
import { FeatureList } from "../../components/core/FeatureList.jsx";
import { SectionHeading } from "../../components/core/SectionHeading.jsx";

const A = "../../assets";

const SERVICES = [
  {
    key: "distribution",
    icon: "service-distribution.svg",
    menuLabel: "Distribution Solution",
    title: "Distribution Solution",
    subtitle: "Fully outsourced distribution focused on the UK, Channel Islands, Ireland and Switzerland",
    description:
      "Our comprehensive distribution solution provides fund managers with complete access to the UK and European intermediary markets without the need for internal resources.",
    features: [
      "Dedicated distribution team with established relationships",
      "Complete market coverage across UK, Channel Islands, Ireland and Switzerland",
      "Ongoing relationship management with intermediaries",
      "Quarterly business reviews and strategy sessions",
      "Full compliance and regulatory support",
    ],
  },
  {
    key: "strategy",
    icon: "service-strategy.svg",
    menuLabel: "Distribution Strategy",
    title: "Distribution Strategy",
    subtitle: "Detailed, documented distribution strategy tailored to your fund",
    description:
      "We develop comprehensive distribution strategies that align with your fund's unique characteristics and target market, ensuring optimal positioning and market penetration.",
    features: [
      "In-depth analysis of fund characteristics and competitive positioning",
      "Target market identification and segmentation",
      "Channel strategy and prioritization",
      "Quarterly strategy reviews and optimization",
      "Performance tracking against defined KPIs",
    ],
  },
  {
    key: "establishment",
    icon: "service-vehicle.svg",
    menuLabel: "Vehicle Establishment",
    title: "Vehicle Establishment Assistance",
    subtitle: "Support with establishing new OEICs and UCITS in collaboration with our partners",
    description:
      "Navigate the complex process of establishing regulated investment vehicles with our expert guidance and established partner network.",
    features: [
      "OEIC and UCITS structuring advice",
      "Regulatory requirements guidance",
      "Introduction to leading fund administrators and depositaries",
      "Cost optimization and timeline management",
      "Ongoing support through authorization process",
    ],
  },
  {
    key: "research",
    icon: "service-research.svg",
    menuLabel: "Market Research",
    title: "Pre-Launch Market Research",
    subtitle: "Comprehensive market research and pre-marketing to validate demand",
    description:
      "Understand market appetite and refine your proposition before launch with our thorough market research and pre-marketing services.",
    features: [
      "Intermediary sentiment analysis",
      "Competitive landscape assessment",
      "Product positioning recommendations",
      "Demand validation through targeted pre-marketing",
      "Launch timeline optimization",
    ],
  },
  {
    key: "communication",
    icon: "service-communication.svg",
    menuLabel: "Communication Channels",
    title: "Enhanced Communication Channels",
    subtitle: "Multi-channel communication including social media, webinars, recordings, and dedicated website presence",
    description:
      "Amplify your message through our comprehensive communication infrastructure, reaching intermediaries through their preferred channels.",
    features: [
      "Dedicated fund page on BCP website",
      "Regular webinar and virtual event hosting",
      "Social media presence and content distribution",
      "Video content creation and distribution",
      "Quarterly commentary and thought leadership pieces",
    ],
  },
  {
    key: "roadshow",
    icon: "service-roadshow.svg",
    menuLabel: "Roadshow Planning",
    title: "Roadshow Planning & Execution",
    subtitle: "Organization of group lunches, one-on-ones and roadshow events",
    description:
      "Maximize face-to-face engagement with our professionally organized roadshow programs and events across the UK and Europe.",
    features: [
      "Strategic roadshow planning and scheduling",
      "Group lunch events with key intermediaries",
      "One-on-one meeting coordination",
      "Venue selection and logistics management",
      "Post-event follow-up and feedback gathering",
    ],
  },
  {
    key: "marketing",
    icon: "service-marketing.svg",
    menuLabel: "Marketing & PR",
    title: "Marketing & PR Services",
    subtitle: "Professional marketing and PR in partnership with Loop Consultants and Cornerstone Communicate",
    description:
      "Enhance your brand visibility and credibility through our partnerships with leading financial services marketing and PR specialists.",
    features: [
      "PR strategy and media relations",
      "Thought leadership positioning",
      "Content creation and distribution",
      "Trade publication features and commentary",
      "Awards and industry recognition support",
    ],
  },
  {
    key: "reporting",
    icon: "service-reporting.svg",
    menuLabel: "Sales Reporting",
    title: "Monthly Sales Reporting",
    subtitle: "Comprehensive monthly reports tracking progress vs. established KPIs",
    description:
      "Stay informed with detailed monthly reporting that provides full visibility into distribution activities and results.",
    features: [
      "Activity summary and pipeline updates",
      "Sales and AUM tracking",
      "Performance vs. KPI dashboard",
      "Intermediary engagement metrics",
      "Strategic recommendations and next steps",
    ],
  },
];

/** Interactive services section: navy numbered menu + content panel. */
export function HomeServices() {
  const [active, setActive] = React.useState(0);
  const [hovered, setHovered] = React.useState(null);
  const s = SERVICES[active];

  return (
    <section id="services" style={{ background: "var(--bcp-cream)", fontFamily: "var(--font-brand)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "20px 60px 100px" }}>
        <SectionHeading title="What do we offer?" style={{ marginBottom: "70px" }} />
        <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: "60px", minHeight: "520px" }}>
          <div
            style={{
              background: "var(--bcp-navy)",
              borderRadius: "var(--radius-lg)",
              padding: "24px 0",
              alignSelf: "start",
            }}
          >
            {SERVICES.map((item, i) => {
              const isActive = i === active;
              const isHover = hovered === i;
              return (
                <div
                  key={item.key}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    padding: "16px 28px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    borderLeft: isActive
                      ? "3px solid var(--bcp-coral)"
                      : isHover
                      ? "3px solid rgba(222, 93, 93, 0.5)"
                      : "3px solid transparent",
                    background: isActive ? "rgba(222, 93, 93, 0.15)" : isHover ? "rgba(255,255,255,0.08)" : "transparent",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: isActive ? "var(--bcp-coral)" : "rgba(255,255,255,0.4)",
                      letterSpacing: "0.5px",
                      minWidth: "20px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", opacity: isActive ? 1 : 0.85, flexShrink: 0 }}>
                    <img src={`${A}/icons/${item.icon}`} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: isActive ? 500 : 400,
                      color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.menuLabel}
                  </span>
                </div>
              );
            })}
          </div>

          <div
            key={s.key}
            style={{
              background: "var(--bcp-navy)",
              borderRadius: "var(--radius-lg)",
              padding: "55px 60px",
              minHeight: "520px",
              boxSizing: "border-box",
              animation: "bcpFadeInUp 0.35s ease forwards",
            }}
          >
            <style>{`@keyframes bcpFadeInUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "28px", marginBottom: "35px" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  background: "var(--bcp-coral)",
                  borderRadius: "var(--radius-lg)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px",
                  boxSizing: "border-box",
                  flexShrink: 0,
                }}
              >
                <img src={`${A}/icons/${s.icon}`} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
              </div>
              <div style={{ paddingTop: "4px" }}>
                <div style={{ fontSize: "12px", fontWeight: 500, color: "var(--bcp-coral)", letterSpacing: "1.5px", marginBottom: "8px", textTransform: "uppercase" }}>
                  Service {String(active + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontSize: "32px", fontWeight: 600, color: "#fff", margin: 0, lineHeight: 1.2, letterSpacing: "-0.3px" }}>{s.title}</h3>
              </div>
            </div>
            <p style={{ fontSize: "17px", color: "var(--bcp-cream-card)", margin: "0 0 30px 0", lineHeight: 1.6, maxWidth: "600px" }}>{s.subtitle}</p>
            <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: 1.75, margin: "0 0 35px 0", maxWidth: "620px" }}>{s.description}</p>
            <FeatureList title="Key Features" items={s.features} style={{ marginBottom: "40px" }} />
            <Button variant="outline" arrow href="#contact">Discuss with us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
