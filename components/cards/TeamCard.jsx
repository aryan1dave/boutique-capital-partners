import React from "react";

/**
 * Team member card on navy: rounded photo, white name, coral bio link.
 */
export function TeamCard({ image, name, linkLabel = "View bio", onClick, size = "md", style }) {
  const [hover, setHover] = React.useState(false);
  const widths = { md: "130px", lg: "180px" };
  return (
    <div
      style={{ textAlign: "center", fontFamily: "var(--font-brand)", ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={image}
        alt={typeof name === "string" ? name : ""}
        style={{
          width: "100%",
          maxWidth: widths[size] || widths.md,
          height: "auto",
          borderRadius: "var(--radius-md)",
          marginBottom: "12px",
          transition: "transform var(--duration-base) var(--ease-simple), box-shadow var(--duration-base) var(--ease-simple)",
          transform: hover ? "translateY(var(--lift-card))" : "none",
          boxShadow: hover ? "0 8px 25px rgba(0, 0, 0, 0.3)" : "none",
        }}
      />
      <h4
        style={{
          fontSize: size === "lg" ? "18px" : "15px",
          fontWeight: "var(--weight-semibold)",
          color: "var(--bcp-white)",
          margin: "0 0 6px 0",
          lineHeight: 1.3,
        }}
      >
        {name}
      </h4>
      {linkLabel ? (
        <a
          onClick={onClick}
          style={{
            fontSize: "var(--text-ui)",
            fontWeight: "var(--weight-medium)",
            color: hover ? "var(--link-on-dark-hover)" : "var(--link-on-dark)",
            textDecoration: hover ? "underline" : "none",
            cursor: "pointer",
            transition: "color var(--duration-base) var(--ease-simple)",
          }}
        >
          {linkLabel}
        </a>
      ) : null}
    </div>
  );
}
