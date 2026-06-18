import React from "react";

/**
 * BCP button. Variants map to the four button treatments on
 * boutiquecapitalpartners.co.uk.
 */
export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const sizes = {
    sm: { padding: "10px 18px", fontSize: "13px" },
    md: { padding: "14px 28px", fontSize: "14px" },
    lg: { padding: "16px 36px", fontSize: "16px" },
  };

  const variants = {
    primary: {
      base: {
        background: "var(--interactive-primary)",
        color: "var(--bcp-white)",
        border: "none",
        borderRadius: "var(--radius-lg)",
      },
      hover: {
        background: "var(--interactive-primary-hover)",
        transform: "translateY(var(--lift-button))",
        boxShadow: "var(--shadow-coral-hover)",
      },
    },
    outline: {
      base: {
        background: "transparent",
        color: "var(--bcp-white)",
        border: "1.5px solid var(--border-accent)",
        borderRadius: "var(--radius-sm)",
      },
      hover: {
        background: "var(--interactive-primary)",
        transform: "translateY(-1px)",
      },
    },
    cream: {
      base: {
        background: "var(--surface-card-cream)",
        color: "var(--bcp-coral)",
        border: "none",
        borderRadius: "var(--radius-md)",
      },
      hover: {
        background: "var(--bcp-white)",
        transform: "translateY(var(--lift-button))",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
      },
    },
    tertiary: {
      base: {
        background: "var(--bcp-cream-button)",
        color: "var(--bcp-navy)",
        border: "none",
        borderRadius: "var(--radius-sm)",
      },
      hover: {
        background: "var(--bcp-navy)",
        color: "var(--bcp-white)",
      },
    },
    text: {
      base: {
        background: "transparent",
        color: "var(--text-accent)",
        border: "none",
        borderRadius: "0",
        padding: "0",
      },
      hover: {},
    },
  };

  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;

  const styleOut = {
    display: "inline-flex",
    alignItems: "center",
    gap: hover ? "12px" : "8px",
    fontFamily: "var(--font-brand)",
    fontWeight: variant === "text" ? "var(--weight-semibold)" : 600,
    letterSpacing: "var(--tracking-button)",
    textDecoration: "none",
    cursor: "pointer",
    lineHeight: 1.4,
    transition: "all var(--duration-fast) var(--ease-simple), gap var(--duration-base) var(--ease-brand)",
    ...s,
    ...(variant === "text" ? { padding: 0, fontSize: "15px" } : {}),
    ...v.base,
    ...(hover ? v.hover : {}),
    ...style,
  };

  const arrowEl = arrow ? (
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
        transition: "transform var(--duration-fast) var(--ease-simple)",
        transform: hover ? "translateX(3px)" : "none",
        flexShrink: 0,
      }}
    >
      <path d="M5 12h14M12 5l7 7-7 7"></path>
    </svg>
  ) : null;

  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      style={styleOut}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
      {arrowEl}
    </Comp>
  );
}
