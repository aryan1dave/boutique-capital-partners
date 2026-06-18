import React from "react";

/**
 * Solid coral statement box with soft coral glow — the homepage
 * "our role is to showcase…" callout.
 */
export function CalloutBox({ children, style }) {
  return (
    <div
      style={{
        backgroundColor: "var(--bcp-coral)",
        color: "var(--bcp-white)",
        padding: "30px 40px",
        borderRadius: "var(--radius-2xl)",
        fontFamily: "var(--font-brand)",
        fontSize: "17px",
        fontWeight: "var(--weight-medium)",
        lineHeight: 1.7,
        boxShadow: "var(--shadow-coral)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
