import React from "react";

/**
 * Sticky white site header: BCP logo left, Montserrat 18px navy menu right.
 * Dropdown items: white bg, #333 text, teal hover.
 */
export function NavBar({
  logoSrc = "assets/logos/bcp-logo.webp",
  items = [
    { label: "Fund partners", children: [{ label: "River Road Asset Management" }, { label: "Fund information and document centre" }] },
    { label: "Our services", href: "#services" },
    { label: "Who we are", href: "#team" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ],
  sticky = true,
  style,
}) {
  const [open, setOpen] = React.useState(null);

  return (
    <header
      style={{
        position: sticky ? "sticky" : "relative",
        top: 0,
        zIndex: 10,
        background: "var(--bcp-white)",
        padding: "10px 20px",
        transition: "background 0.3s, box-shadow 0.3s",
        fontFamily: "var(--font-brand)",
        ...style,
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-elementor)",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <a href="#" style={{ display: "block", lineHeight: 0 }}>
          <img src={logoSrc} alt="Boutique Capital Partners" style={{ width: "243px", height: "auto", display: "block" }} />
        </a>
        <nav>
          <ul style={{ display: "flex", alignItems: "center", gap: "20px", listStyle: "none", margin: 0, padding: 0 }}>
            {items.map((item, i) => (
              <li
                key={i}
                style={{ position: "relative" }}
                onMouseEnter={() => item.children && setOpen(i)}
                onMouseLeave={() => setOpen(null)}
              >
                <a
                  href={item.href || "#"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "15px 7px",
                    fontSize: "18px",
                    fontWeight: "var(--weight-regular)",
                    color: "var(--bcp-navy)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {item.label}
                  {item.children ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "14px", height: "14px" }}>
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  ) : null}
                </a>
                {item.children && open === i ? (
                  <ul
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      minWidth: "280px",
                      background: "var(--bcp-white)",
                      border: "1px solid #E8E8E8",
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      boxShadow: "var(--shadow-float)",
                      animation: "bcpDropIn 0.22s cubic-bezier(0.4,0,0.2,1)",
                    }}
                  >
                    {item.children.map((sub, j) => (
                      <li key={j} style={{ borderBottom: j === item.children.length - 1 ? "none" : "1px solid #E8E8E8" }}>
                        <a
                          href={sub.href || "#"}
                          style={{
                            display: "block",
                            padding: "13px 15px",
                            fontSize: "18px",
                            fontWeight: "var(--weight-regular)",
                            color: "#333",
                            textDecoration: "none",
                            transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#247A8E";
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "#333";
                          }}
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
