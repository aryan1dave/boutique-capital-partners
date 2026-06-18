import React from "react";

/**
 * Bullet list with 6px coral dot markers, as in the services panel.
 * Designed for dark (navy) panels by default.
 */
export function FeatureList({ items = [], title, onDark = true, style }) {
  return (
    <div style={{ fontFamily: "var(--font-brand)", ...style }}>
      {title ? (
        <h4
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--weight-semibold)",
            color: onDark ? "var(--text-on-dark-tertiary)" : "var(--text-muted)",
            margin: "0 0 20px 0",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-eyebrow)",
          }}
        >
          {title}
        </h4>
      ) : null}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              fontSize: "var(--text-body-sm)",
              fontWeight: "var(--weight-regular)",
              color: onDark ? "var(--text-on-dark-secondary)" : "var(--text-body)",
              lineHeight: 1.5,
              marginBottom: i === items.length - 1 ? 0 : "14px",
              paddingLeft: "24px",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: 0,
                top: "8px",
                width: "6px",
                height: "6px",
                background: "var(--bcp-coral)",
                borderRadius: "50%",
              }}
            ></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
