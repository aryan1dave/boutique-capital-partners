import React from "react";

/**
 * Cream contact card on navy: coral icon square + uppercase label + value.
 */
export function ContactCard({ icon = "phone", label, children, style }) {
  const [hover, setHover] = React.useState(false);

  const icons = {
    phone: (
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
    ),
    email: (
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
    ),
    location: (
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
    ),
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "32px 40px",
        background: "var(--bcp-cream-soft)",
        borderRadius: "var(--radius-lg)",
        minWidth: "320px",
        transition: "all var(--duration-base) var(--ease-simple)",
        transform: hover ? "translateY(var(--lift-card))" : "none",
        boxShadow: hover ? "0 12px 35px rgba(0, 0, 0, 0.15)" : "none",
        fontFamily: "var(--font-brand)",
        boxSizing: "border-box",
        ...style,
      }}
    >
      <div
        style={{
          width: "56px",
          height: "56px",
          background: "var(--bcp-coral)",
          borderRadius: "var(--radius-lg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg viewBox="0 0 24 24" style={{ width: "26px", height: "26px", fill: "white" }}>
          {icons[icon] || icons.phone}
        </svg>
      </div>
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: "var(--text-eyebrow)",
            fontWeight: "var(--weight-semibold)",
            color: "rgba(0, 0, 92, 0.5)",
            margin: "0 0 6px 0",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-eyebrow)",
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "var(--weight-medium)",
            color: "var(--bcp-navy)",
            margin: 0,
          }}
        >
          {children}
        </p>
      </div>
    </div>
  );
}
