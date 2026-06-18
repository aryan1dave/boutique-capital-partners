import React from "react";
import { Tag } from "../core/Tag.jsx";

/**
 * White insight/article card: image, date + category pill, title,
 * excerpt, coral "Read article →" CTA. Lifts -8px on hover.
 */
export function InsightCard({ image, date, category, title, excerpt, cta = "Read article", href = "#", style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--surface-card)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        boxShadow: hover ? "var(--shadow-card-hover)" : "var(--shadow-card)",
        border: hover ? "1px solid rgba(222, 93, 93, 0.2)" : "1px solid var(--border-card)",
        transform: hover ? "translateY(var(--lift-card-lg))" : "none",
        transition: "all var(--duration-slow) var(--ease-brand)",
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        cursor: "pointer",
        fontFamily: "var(--font-brand)",
        ...style,
      }}
    >
      {image ? (
        <div style={{ width: "100%", height: "260px", background: "#f5f5f5", overflow: "hidden" }}>
          <img
            src={image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s var(--ease-brand)",
              transform: hover ? "scale(1.05)" : "none",
              display: "block",
            }}
          />
        </div>
      ) : null}
      <div style={{ padding: "32px 34px 36px 34px", flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
          <span
            style={{
              fontSize: "var(--text-eyebrow)",
              fontWeight: "var(--weight-bold)",
              color: "var(--bcp-coral)",
              letterSpacing: "0.5px",
            }}
          >
            {date}
          </span>
          {category ? <Tag>{category}</Tag> : null}
        </div>
        <h3
          style={{
            fontSize: "var(--text-card-title)",
            fontWeight: "var(--weight-semibold)",
            color: "var(--bcp-navy)",
            margin: "0 0 18px 0",
            lineHeight: "var(--leading-card)",
            letterSpacing: "var(--tracking-subhead)",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "var(--text-body-sm)",
            fontWeight: "var(--weight-medium)",
            color: "var(--text-body)",
            lineHeight: 1.65,
            margin: "0 0 30px 0",
            flexGrow: 1,
          }}
        >
          {excerpt}
        </p>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: hover ? "12px" : "8px",
            fontSize: "15px",
            fontWeight: "var(--weight-semibold)",
            color: "var(--bcp-coral)",
            letterSpacing: "0.2px",
            transition: "gap var(--duration-base) var(--ease-brand)",
          }}
        >
          {cta}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              width: "16px",
              height: "16px",
              transition: "transform var(--duration-base) var(--ease-brand)",
              transform: hover ? "translateX(4px)" : "none",
            }}
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </span>
      </div>
    </a>
  );
}
