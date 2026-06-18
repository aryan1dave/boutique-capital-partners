import React from "react";

/**
 * Category pill (insight cards) or uppercase eyebrow label.
 */
export function Tag({ variant = "pill", color = "navy", children, style }) {
  if (variant === "eyebrow") {
    return (
      <div
        style={{
          fontFamily: "var(--font-brand)",
          fontSize: "var(--text-eyebrow)",
          fontWeight: "var(--weight-semibold)",
          textTransform: "uppercase",
          letterSpacing: "var(--tracking-eyebrow-wide)",
          color:
            color === "coral"
              ? "var(--text-accent)"
              : color === "muted"
              ? "var(--text-on-dark-tertiary)"
              : "rgba(0, 0, 92, 0.5)",
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
  return (
    <span
      style={{
        display: "inline-block",
        fontFamily: "var(--font-brand)",
        fontSize: "var(--text-micro)",
        fontWeight: "var(--weight-bold)",
        letterSpacing: "0.3px",
        padding: "5px 12px",
        borderRadius: "var(--radius-pill)",
        background: color === "coral" ? "var(--bcp-coral)" : "var(--bcp-cream)",
        color: color === "coral" ? "var(--bcp-white)" : "var(--bcp-navy)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
