import React from "react";

/**
 * Navy site footer: social icons, link rows, compliance text,
 * cream logo + strapline.
 */
export function Footer({
  logoSrc = "assets/logos/bcp-logo-cream.png",
  links = [
    { label: "Disclaimer" },
    { label: "Privacy Policy" },
    { label: "Cookies" },
    { label: "Home" },
    { label: "Contact" },
  ],
  style,
}) {
  const linkStyle = {
    color: "var(--text-on-dark-secondary)",
    textDecoration: "none",
    fontSize: "var(--text-ui)",
    fontWeight: "var(--weight-regular)",
  };
  return (
    <footer
      style={{
        background: "var(--surface-dark)",
        padding: "50px 40px 40px",
        fontFamily: "var(--font-brand)",
        ...style,
      }}
    >
      <div style={{ maxWidth: "var(--container-elementor)", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "14px", marginBottom: "28px" }}>
          {[
            { label: "Instagram", d: "M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4Zm0 7.7A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1Zm4.8-7.9a1.07 1.07 0 1 1-1.07-1.07A1.07 1.07 0 0 1 16.8 7.2ZM12 4.7c2.38 0 2.66 0 3.6.05a4.9 4.9 0 0 1 1.66.31 2.95 2.95 0 0 1 1.7 1.7 4.9 4.9 0 0 1 .3 1.65c.05.94.05 1.22.05 3.6s0 2.65-.05 3.59a4.9 4.9 0 0 1-.3 1.65 2.95 2.95 0 0 1-1.7 1.7 4.9 4.9 0 0 1-1.65.3c-.94.05-1.22.06-3.6.06s-2.66 0-3.6-.05a4.9 4.9 0 0 1-1.65-.31 2.95 2.95 0 0 1-1.7-1.7 4.9 4.9 0 0 1-.31-1.65c-.04-.94-.05-1.22-.05-3.6s0-2.65.05-3.59a4.9 4.9 0 0 1 .31-1.65 2.95 2.95 0 0 1 1.7-1.7 4.9 4.9 0 0 1 1.65-.31c.94-.04 1.22-.05 3.6-.05M12 3.1c-2.42 0-2.72 0-3.67.06a6.5 6.5 0 0 0-2.16.41A4.55 4.55 0 0 0 3.57 6.2a6.5 6.5 0 0 0-.41 2.15C3.1 9.3 3.1 9.6 3.1 12s0 2.72.06 3.67a6.5 6.5 0 0 0 .41 2.16 4.55 4.55 0 0 0 2.6 2.6 6.5 6.5 0 0 0 2.15.4c.95.06 1.25.07 3.68.07s2.72 0 3.67-.06a6.5 6.5 0 0 0 2.16-.41 4.55 4.55 0 0 0 2.6-2.6 6.5 6.5 0 0 0 .4-2.16c.06-.94.07-1.24.07-3.67s0-2.72-.06-3.67a6.5 6.5 0 0 0-.41-2.15 4.55 4.55 0 0 0-2.6-2.6 6.5 6.5 0 0 0-2.16-.41C14.72 3.1 14.42 3.1 12 3.1Z" },
            { label: "LinkedIn", d: "M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9a.55.55 0 0 0 .55.55h16.9a.55.55 0 0 0 .55-.55V3.55A.55.55 0 0 0 20.45 3ZM8.34 18.34H5.67v-8.6h2.67ZM7 8.61A1.55 1.55 0 1 1 8.56 7.06 1.55 1.55 0 0 1 7 8.61Zm11.34 9.73h-2.66v-4.18c0-1-.02-2.28-1.39-2.28s-1.6 1.08-1.6 2.2v4.26H10V9.74h2.56v1.18h.04a2.8 2.8 0 0 1 2.52-1.39c2.7 0 3.2 1.78 3.2 4.09Z" },
          ].map((s, i) => (
            <a
              key={i}
              href="#"
              aria-label={s.label}
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(0.92)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <svg viewBox="0 0 24 24" style={{ width: "22px", height: "22px", fill: "rgba(255,255,255,0.9)" }}>
                <path d={s.d}></path>
              </svg>
            </a>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px", marginBottom: "32px" }}>
          {links.map((l, i) => (
            <a key={i} href={l.href || "#"} style={linkStyle}>
              {l.label}
            </a>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "60px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--text-on-dark-secondary)", margin: "0 0 12px 0" }}>
              This website is exclusively for experienced professional/institutional investors and advisers.
            </p>
            <p style={{ fontSize: "13px", lineHeight: 1.6, color: "var(--text-on-dark-secondary)", margin: "0 0 16px 0" }}>
              Capital is at risk. Past performance does not predict future returns. The value of investments can fall
              as well as rise and investors may not get back the original amount invested.
            </p>
            <p style={{ fontSize: "11px", lineHeight: 1.7, color: "var(--text-on-dark-tertiary)", margin: 0 }}>
              © Boutique Capital Partners Ltd 2025. Boutique Capital Partners &amp; BCP are the trading names of
              Boutique Capital Partners Limited, FRN: 1027595. Boutique Capital Partners Limited is an appointed
              representative of Thornbridge Investment Management LLP (FRN: 713859) which is authorised and regulated
              by the Financial Conduct Authority ("FCA") in the United Kingdom and appears on the FCA register under
              no. 713859.
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <img src={logoSrc} alt="Boutique Capital Partners" style={{ width: "220px", height: "auto" }} />
            <p
              style={{
                fontSize: "14px",
                fontWeight: "var(--weight-medium)",
                color: "var(--text-on-dark-secondary)",
                margin: "14px 0 0 0",
                lineHeight: 1.5,
              }}
            >
              Outsourced distribution for outstanding investment strategies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
