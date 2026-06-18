import React from "react";

/**
 * Section heading: centered Montserrat 600 with tight tracking,
 * optional lead paragraph. Navy on light, white on dark.
 */
export function SectionHeading({ title, lead, onDark = false, size = "lg", align = "center", style }) {
  const sizes = { lg: "var(--text-h2)", xl: "var(--text-display)", md: "var(--text-h3)" };
  return (
    <div style={{ textAlign: align, ...style }}>
      <h2
        style={{
          fontFamily: "var(--font-brand)",
          fontSize: sizes[size] || sizes.lg,
          fontWeight: "var(--weight-semibold)",
          lineHeight: "var(--leading-heading)",
          letterSpacing: "var(--tracking-heading)",
          color: onDark ? "var(--text-on-dark)" : "var(--text-heading)",
          margin: 0,
        }}
      >
        {title}
      </h2>
      {lead ? (
        <p
          style={{
            fontFamily: "var(--font-brand)",
            fontSize: "18px",
            fontWeight: "var(--weight-medium)",
            lineHeight: "26px",
            color: onDark ? "var(--text-on-dark-secondary)" : "var(--text-heading)",
            maxWidth: "800px",
            margin: align === "center" ? "20px auto 0" : "20px 0 0",
          }}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
