/* @ds-bundle: {"format":3,"namespace":"BoutiqueCapitalPartnersDesignSystem_7ef874","components":[{"name":"ContactCard","sourcePath":"components/cards/ContactCard.jsx"},{"name":"InsightCard","sourcePath":"components/cards/InsightCard.jsx"},{"name":"TeamCard","sourcePath":"components/cards/TeamCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"CalloutBox","sourcePath":"components/core/CalloutBox.jsx"},{"name":"FeatureList","sourcePath":"components/core/FeatureList.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"HomeHero","sourcePath":"ui_kits/website/HomeHero.jsx"},{"name":"HomeIntro","sourcePath":"ui_kits/website/HomeHero.jsx"},{"name":"HomeInsights","sourcePath":"ui_kits/website/HomeInsights.jsx"},{"name":"HomeContact","sourcePath":"ui_kits/website/HomeInsights.jsx"},{"name":"HomePartnership","sourcePath":"ui_kits/website/HomePartnership.jsx"},{"name":"HomeValues","sourcePath":"ui_kits/website/HomePartnership.jsx"},{"name":"HomePuffin","sourcePath":"ui_kits/website/HomePartnership.jsx"},{"name":"HomeServices","sourcePath":"ui_kits/website/HomeServices.jsx"},{"name":"HomeTeam","sourcePath":"ui_kits/website/HomeTeam.jsx"}],"sourceHashes":{"components/cards/ContactCard.jsx":"213ca5a0e169","components/cards/InsightCard.jsx":"d1477cdd147f","components/cards/TeamCard.jsx":"68d966e1c6c0","components/core/Button.jsx":"115997038316","components/core/CalloutBox.jsx":"a5535401789e","components/core/FeatureList.jsx":"d693c08f208f","components/core/SectionHeading.jsx":"04df3cf4c755","components/core/Tag.jsx":"5eec19fcb7ed","components/navigation/Footer.jsx":"0d51d6bc693c","components/navigation/NavBar.jsx":"203d239d142a","documentcentre-sections.jsx":"ae8263ddd17c","insights-sections.jsx":"996e584febb7","puffin-sections.jsx":"d9ff5a635fba","redesign-sections.jsx":"1eb1ed8b7af7","riverroad-sections.jsx":"e846a64fde37","site-polish.js":"a15886767136","team-sections.jsx":"c10a8b12912a","ui_kits/website/HomeHero.jsx":"bb1706dc2ad8","ui_kits/website/HomeInsights.jsx":"2ade4fda8459","ui_kits/website/HomePartnership.jsx":"9de8889ee62e","ui_kits/website/HomeServices.jsx":"dfbf74d76f57","ui_kits/website/HomeTeam.jsx":"d52fd2c57961"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BoutiqueCapitalPartnersDesignSystem_7ef874 = window.BoutiqueCapitalPartnersDesignSystem_7ef874 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ContactCard.jsx
try { (() => {
/**
 * Cream contact card on navy: coral icon square + uppercase label + value.
 */
function ContactCard({
  icon = "phone",
  label,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const icons = {
    phone: /*#__PURE__*/React.createElement("path", {
      d: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
    }),
    email: /*#__PURE__*/React.createElement("path", {
      d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
    }),
    location: /*#__PURE__*/React.createElement("path", {
      d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
    })
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "56px",
      height: "56px",
      background: "var(--bcp-coral)",
      borderRadius: "var(--radius-lg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: "26px",
      height: "26px",
      fill: "white"
    }
  }, icons[icon] || icons.phone)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-eyebrow)",
      fontWeight: "var(--weight-semibold)",
      color: "rgba(0, 0, 92, 0.5)",
      margin: "0 0 6px 0",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)"
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "18px",
      fontWeight: "var(--weight-medium)",
      color: "var(--bcp-navy)",
      margin: 0
    }
  }, children)));
}
Object.assign(__ds_scope, { ContactCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ContactCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TeamCard.jsx
try { (() => {
/**
 * Team member card on navy: rounded photo, white name, coral bio link.
 */
function TeamCard({
  image,
  name,
  linkLabel = "View bio",
  onClick,
  size = "md",
  style
}) {
  const [hover, setHover] = React.useState(false);
  const widths = {
    md: "130px",
    lg: "180px"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-brand)",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: typeof name === "string" ? name : "",
    style: {
      width: "100%",
      maxWidth: widths[size] || widths.md,
      height: "auto",
      borderRadius: "var(--radius-md)",
      marginBottom: "12px",
      transition: "transform var(--duration-base) var(--ease-simple), box-shadow var(--duration-base) var(--ease-simple)",
      transform: hover ? "translateY(var(--lift-card))" : "none",
      boxShadow: hover ? "0 8px 25px rgba(0, 0, 0, 0.3)" : "none"
    }
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: size === "lg" ? "18px" : "15px",
      fontWeight: "var(--weight-semibold)",
      color: "var(--bcp-white)",
      margin: "0 0 6px 0",
      lineHeight: 1.3
    }
  }, name), linkLabel ? /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    style: {
      fontSize: "var(--text-ui)",
      fontWeight: "var(--weight-medium)",
      color: hover ? "var(--link-on-dark-hover)" : "var(--link-on-dark)",
      textDecoration: hover ? "underline" : "none",
      cursor: "pointer",
      transition: "color var(--duration-base) var(--ease-simple)"
    }
  }, linkLabel) : null);
}
Object.assign(__ds_scope, { TeamCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TeamCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BCP button. Variants map to the four button treatments on
 * boutiquecapitalpartners.co.uk.
 */
function Button({
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
    sm: {
      padding: "10px 18px",
      fontSize: "13px"
    },
    md: {
      padding: "14px 28px",
      fontSize: "14px"
    },
    lg: {
      padding: "16px 36px",
      fontSize: "16px"
    }
  };
  const variants = {
    primary: {
      base: {
        background: "var(--interactive-primary)",
        color: "var(--bcp-white)",
        border: "none",
        borderRadius: "var(--radius-lg)"
      },
      hover: {
        background: "var(--interactive-primary-hover)",
        transform: "translateY(var(--lift-button))",
        boxShadow: "var(--shadow-coral-hover)"
      }
    },
    outline: {
      base: {
        background: "transparent",
        color: "var(--bcp-white)",
        border: "1.5px solid var(--border-accent)",
        borderRadius: "var(--radius-sm)"
      },
      hover: {
        background: "var(--interactive-primary)",
        transform: "translateY(-1px)"
      }
    },
    cream: {
      base: {
        background: "var(--surface-card-cream)",
        color: "var(--bcp-coral)",
        border: "none",
        borderRadius: "var(--radius-md)"
      },
      hover: {
        background: "var(--bcp-white)",
        transform: "translateY(var(--lift-button))",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)"
      }
    },
    tertiary: {
      base: {
        background: "var(--bcp-cream-button)",
        color: "var(--bcp-navy)",
        border: "none",
        borderRadius: "var(--radius-sm)"
      },
      hover: {
        background: "var(--bcp-navy)",
        color: "var(--bcp-white)"
      }
    },
    text: {
      base: {
        background: "transparent",
        color: "var(--text-accent)",
        border: "none",
        borderRadius: "0",
        padding: "0"
      },
      hover: {}
    }
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
    ...(variant === "text" ? {
      padding: 0,
      fontSize: "15px"
    } : {}),
    ...v.base,
    ...(hover ? v.hover : {}),
    ...style
  };
  const arrowEl = arrow ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: "16px",
      height: "16px",
      transition: "transform var(--duration-fast) var(--ease-simple)",
      transform: hover ? "translateX(3px)" : "none",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  })) : null;
  const Comp = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Comp, _extends({
    href: href,
    style: styleOut,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children, arrowEl);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/CalloutBox.jsx
try { (() => {
/**
 * Solid coral statement box with soft coral glow — the homepage
 * "our role is to showcase…" callout.
 */
function CalloutBox({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundColor: "var(--bcp-coral)",
      color: "var(--bcp-white)",
      padding: "30px 40px",
      borderRadius: "var(--radius-2xl)",
      fontFamily: "var(--font-brand)",
      fontSize: "17px",
      fontWeight: "var(--weight-medium)",
      lineHeight: 1.7,
      boxShadow: "var(--shadow-coral)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { CalloutBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/CalloutBox.jsx", error: String((e && e.message) || e) }); }

// components/core/FeatureList.jsx
try { (() => {
/**
 * Bullet list with 6px coral dot markers, as in the services panel.
 * Designed for dark (navy) panels by default.
 */
function FeatureList({
  items = [],
  title,
  onDark = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      ...style
    }
  }, title ? /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "var(--text-caption)",
      fontWeight: "var(--weight-semibold)",
      color: onDark ? "var(--text-on-dark-tertiary)" : "var(--text-muted)",
      margin: "0 0 20px 0",
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-eyebrow)"
    }
  }, title) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: "var(--text-body-sm)",
      fontWeight: "var(--weight-regular)",
      color: onDark ? "var(--text-on-dark-secondary)" : "var(--text-body)",
      lineHeight: 1.5,
      marginBottom: i === items.length - 1 ? 0 : "14px",
      paddingLeft: "24px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: "8px",
      width: "6px",
      height: "6px",
      background: "var(--bcp-coral)",
      borderRadius: "50%"
    }
  }), item))));
}
Object.assign(__ds_scope, { FeatureList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FeatureList.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * Section heading: centered Montserrat 600 with tight tracking,
 * optional lead paragraph. Navy on light, white on dark.
 */
function SectionHeading({
  title,
  lead,
  onDark = false,
  size = "lg",
  align = "center",
  style
}) {
  const sizes = {
    lg: "var(--text-h2)",
    xl: "var(--text-display)",
    md: "var(--text-h3)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-brand)",
      fontSize: sizes[size] || sizes.lg,
      fontWeight: "var(--weight-semibold)",
      lineHeight: "var(--leading-heading)",
      letterSpacing: "var(--tracking-heading)",
      color: onDark ? "var(--text-on-dark)" : "var(--text-heading)",
      margin: 0
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-brand)",
      fontSize: "18px",
      fontWeight: "var(--weight-medium)",
      lineHeight: "26px",
      color: onDark ? "var(--text-on-dark-secondary)" : "var(--text-heading)",
      maxWidth: "800px",
      margin: align === "center" ? "20px auto 0" : "20px 0 0"
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Category pill (insight cards) or uppercase eyebrow label.
 */
function Tag({
  variant = "pill",
  color = "navy",
  children,
  style
}) {
  if (variant === "eyebrow") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-brand)",
        fontSize: "var(--text-eyebrow)",
        fontWeight: "var(--weight-semibold)",
        textTransform: "uppercase",
        letterSpacing: "var(--tracking-eyebrow-wide)",
        color: color === "coral" ? "var(--text-accent)" : color === "muted" ? "var(--text-on-dark-tertiary)" : "rgba(0, 0, 92, 0.5)",
        ...style
      }
    }, children);
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontFamily: "var(--font-brand)",
      fontSize: "var(--text-micro)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "0.3px",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      background: color === "coral" ? "var(--bcp-coral)" : "var(--bcp-cream)",
      color: color === "coral" ? "var(--bcp-white)" : "var(--bcp-navy)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/cards/InsightCard.jsx
try { (() => {
/**
 * White insight/article card: image, date + category pill, title,
 * excerpt, coral "Read article →" CTA. Lifts -8px on hover.
 */
function InsightCard({
  image,
  date,
  category,
  title,
  excerpt,
  cta = "Read article",
  href = "#",
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "260px",
      background: "#f5f5f5",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s var(--ease-brand)",
      transform: hover ? "scale(1.05)" : "none",
      display: "block"
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 34px 36px 34px",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-eyebrow)",
      fontWeight: "var(--weight-bold)",
      color: "var(--bcp-coral)",
      letterSpacing: "0.5px"
    }
  }, date), category ? /*#__PURE__*/React.createElement(__ds_scope.Tag, null, category) : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-card-title)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--bcp-navy)",
      margin: "0 0 18px 0",
      lineHeight: "var(--leading-card)",
      letterSpacing: "var(--tracking-subhead)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-body)",
      lineHeight: 1.65,
      margin: "0 0 30px 0",
      flexGrow: 1
    }
  }, excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: hover ? "12px" : "8px",
      fontSize: "15px",
      fontWeight: "var(--weight-semibold)",
      color: "var(--bcp-coral)",
      letterSpacing: "0.2px",
      transition: "gap var(--duration-base) var(--ease-brand)"
    }
  }, cta, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: "16px",
      height: "16px",
      transition: "transform var(--duration-base) var(--ease-brand)",
      transform: hover ? "translateX(4px)" : "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  })))));
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InsightCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/**
 * Navy site footer: social icons, link rows, compliance text,
 * cream logo + strapline.
 */
function Footer({
  logoSrc = "assets/logos/bcp-logo-cream.png",
  links = [{
    label: "Disclaimer"
  }, {
    label: "Privacy Policy"
  }, {
    label: "Cookies"
  }, {
    label: "Home"
  }, {
    label: "Contact"
  }],
  style
}) {
  const linkStyle = {
    color: "var(--text-on-dark-secondary)",
    textDecoration: "none",
    fontSize: "var(--text-ui)",
    fontWeight: "var(--weight-regular)"
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-dark)",
      padding: "50px 40px 40px",
      fontFamily: "var(--font-brand)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-elementor)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "14px",
      marginBottom: "28px"
    }
  }, [{
    label: "Instagram",
    d: "M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4Zm0 7.7A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1Zm4.8-7.9a1.07 1.07 0 1 1-1.07-1.07A1.07 1.07 0 0 1 16.8 7.2ZM12 4.7c2.38 0 2.66 0 3.6.05a4.9 4.9 0 0 1 1.66.31 2.95 2.95 0 0 1 1.7 1.7 4.9 4.9 0 0 1 .3 1.65c.05.94.05 1.22.05 3.6s0 2.65-.05 3.59a4.9 4.9 0 0 1-.3 1.65 2.95 2.95 0 0 1-1.7 1.7 4.9 4.9 0 0 1-1.65.3c-.94.05-1.22.06-3.6.06s-2.66 0-3.6-.05a4.9 4.9 0 0 1-1.65-.31 2.95 2.95 0 0 1-1.7-1.7 4.9 4.9 0 0 1-.31-1.65c-.04-.94-.05-1.22-.05-3.6s0-2.65.05-3.59a4.9 4.9 0 0 1 .31-1.65 2.95 2.95 0 0 1 1.7-1.7 4.9 4.9 0 0 1 1.65-.31c.94-.04 1.22-.05 3.6-.05M12 3.1c-2.42 0-2.72 0-3.67.06a6.5 6.5 0 0 0-2.16.41A4.55 4.55 0 0 0 3.57 6.2a6.5 6.5 0 0 0-.41 2.15C3.1 9.3 3.1 9.6 3.1 12s0 2.72.06 3.67a6.5 6.5 0 0 0 .41 2.16 4.55 4.55 0 0 0 2.6 2.6 6.5 6.5 0 0 0 2.15.4c.95.06 1.25.07 3.68.07s2.72 0 3.67-.06a6.5 6.5 0 0 0 2.16-.41 4.55 4.55 0 0 0 2.6-2.6 6.5 6.5 0 0 0 .4-2.16c.06-.94.07-1.24.07-3.67s0-2.72-.06-3.67a6.5 6.5 0 0 0-.41-2.15 4.55 4.55 0 0 0-2.6-2.6 6.5 6.5 0 0 0-2.16-.41C14.72 3.1 14.42 3.1 12 3.1Z"
  }, {
    label: "LinkedIn",
    d: "M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9a.55.55 0 0 0 .55.55h16.9a.55.55 0 0 0 .55-.55V3.55A.55.55 0 0 0 20.45 3ZM8.34 18.34H5.67v-8.6h2.67ZM7 8.61A1.55 1.55 0 1 1 8.56 7.06 1.55 1.55 0 0 1 7 8.61Zm11.34 9.73h-2.66v-4.18c0-1-.02-2.28-1.39-2.28s-1.6 1.08-1.6 2.2v4.26H10V9.74h2.56v1.18h.04a2.8 2.8 0 0 1 2.52-1.39c2.7 0 3.2 1.78 3.2 4.09Z"
  }].map((s, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    "aria-label": s.label,
    style: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      border: "1.5px solid rgba(255,255,255,0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.2s"
    },
    onMouseEnter: e => e.currentTarget.style.transform = "scale(0.92)",
    onMouseLeave: e => e.currentTarget.style.transform = "none"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: "22px",
      height: "22px",
      fill: "rgba(255,255,255,0.9)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: s.d
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px 24px",
      marginBottom: "32px"
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href || "#",
    style: linkStyle
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: "60px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      lineHeight: 1.6,
      color: "var(--text-on-dark-secondary)",
      margin: "0 0 12px 0"
    }
  }, "This website is exclusively for experienced professional/institutional investors and advisers."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      lineHeight: 1.6,
      color: "var(--text-on-dark-secondary)",
      margin: "0 0 16px 0"
    }
  }, "Capital is at risk. Past performance does not predict future returns. The value of investments can fall as well as rise and investors may not get back the original amount invested."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      lineHeight: 1.7,
      color: "var(--text-on-dark-tertiary)",
      margin: 0
    }
  }, "\xA9 Boutique Capital Partners Ltd 2025. Boutique Capital Partners & BCP are the trading names of Boutique Capital Partners Limited, FRN: 1027595. Boutique Capital Partners Limited is an appointed representative of Thornbridge Investment Management LLP (FRN: 713859) which is authorised and regulated by the Financial Conduct Authority (\"FCA\") in the United Kingdom and appears on the FCA register under no. 713859.")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Boutique Capital Partners",
    style: {
      width: "220px",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-on-dark-secondary)",
      margin: "14px 0 0 0",
      lineHeight: 1.5
    }
  }, "Outsourced distribution for outstanding investment strategies")))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/**
 * Sticky white site header: BCP logo left, Montserrat 18px navy menu right.
 * Dropdown items: white bg, #333 text, teal hover.
 */
function NavBar({
  logoSrc = "assets/logos/bcp-logo.webp",
  items = [{
    label: "Fund partners",
    children: [{
      label: "River Road Asset Management"
    }, {
      label: "Fund information and document centre"
    }]
  }, {
    label: "Our services",
    href: "#services"
  }, {
    label: "Who we are",
    href: "#team"
  }, {
    label: "Insights",
    href: "#insights"
  }, {
    label: "Contact",
    href: "#contact"
  }],
  sticky = true,
  style
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? "sticky" : "relative",
      top: 0,
      zIndex: 10,
      background: "var(--bcp-white)",
      padding: "10px 20px",
      transition: "background 0.3s, box-shadow 0.3s",
      fontFamily: "var(--font-brand)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-elementor)",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "block",
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Boutique Capital Partners",
    style: {
      width: "243px",
      height: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      position: "relative"
    },
    onMouseEnter: () => item.children && setOpen(i),
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("a", {
    href: item.href || "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "7px",
      padding: "15px 7px",
      fontSize: "18px",
      fontWeight: "var(--weight-regular)",
      color: "var(--bcp-navy)",
      textDecoration: "none",
      transition: "color 0.2s"
    }
  }, item.label, item.children ? /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: "14px",
      height: "14px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })) : null), item.children && open === i ? /*#__PURE__*/React.createElement("ul", {
    style: {
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
      animation: "bcpDropIn 0.22s cubic-bezier(0.4,0,0.2,1)"
    }
  }, item.children.map((sub, j) => /*#__PURE__*/React.createElement("li", {
    key: j,
    style: {
      borderBottom: j === item.children.length - 1 ? "none" : "1px solid #E8E8E8"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: sub.href || "#",
    style: {
      display: "block",
      padding: "13px 15px",
      fontSize: "18px",
      fontWeight: "var(--weight-regular)",
      color: "#333",
      textDecoration: "none",
      transition: "all 0.2s"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "#247A8E";
      e.currentTarget.style.color = "#fff";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "#333";
    }
  }, sub.label)))) : null))))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// documentcentre-sections.jsx
try { (() => {
// Fund Information & Document Centre — CG River Road US Large Cap Value Select.
// FAITHFUL recreation of the live page (uploads .../index.html, updated June 2026):
// share-class comparison table, fund literature & resources, viewpoint cards,
// endorsement disclaimer. COPY LOCK: all data, document names, period labels,
// footnotes and the endorsement text are reproduced VERBATIM, and every PDF /
// external link points to its real URL. A professional-investor attestation gate
// (remembered) precedes the documents, per the agreed UX plan.
// Exposes window.DocCentreSections.

const A = "assets";
const DS = window.BoutiqueCapitalPartnersDesignSystem_7ef874;
const ATTEST_KEY = "bcp_pro_attested";
const DISCLOSURE_PDF = "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2025/12/River-Road-Boutique-Capital-Partners-Endorsement-Disclosure.pdf";
const SHARE_CLASSES = [{
  meta: "GBP Acc",
  letter: "F"
}, {
  meta: "GBP Acc",
  letter: "W"
}, {
  meta: "GBP Acc",
  letter: "I"
}];
const TABLE_ROWS = [{
  label: "ISIN",
  cells: ["GB00BMVFJZ53", "GB00BMVFK070", "GB00BMVFK187"]
}, {
  label: "SEDOL",
  cells: ["BMVFJZ5", "BMVFK07", "BMVFK18"]
}, {
  label: "AMC",
  cells: ["0.29", "0.39", "0.49"]
}, {
  label: "OCF",
  cells: ["0.39", "0.49", "0.59"]
}, {
  label: "Min. investment¹",
  cells: ["£250m", "£50m", "£1,000"]
}];
const LIT_PERIODIC = [{
  name: "Strategy Factsheet",
  periods: [{
    label: "Q4 2025",
    href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2026/01/reportbcp2025-12-31RiverRoadLargeCapValueSelectFactsheet.pdf"
  }, {
    label: "Q1 2026",
    href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2026/06/reportbcp-2026-03-31-River-Road-Large-Cap-Value-Select-Factsheet.pdf"
  }]
}, {
  name: "Strategy Commentary",
  periods: [{
    label: "Q1 2025",
    href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2025/11/River_Road_Large_Cap_Value_Select_Commentary_vBCP.pdf"
  }, {
    label: "Q2 2025",
    href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2025/11/Q2_Commentary_River_Road_Large_Cap_Value_Select.pdf"
  }, {
    label: "Q3 2025",
    href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2025/11/River_Road_Large_Cap_Value_Select_Commentary.pdf"
  }, {
    label: "Q4 2025",
    href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2026/01/reportbcp-2025-12-31-River-Road-Large-Cap-Value-Select-Commentary.pdf"
  }, {
    label: "Q1 2026",
    href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2026/06/reportbcp-2026-03-31-River-Road-Large-Cap-Value-Select-Commentary.pdf"
  }]
}, {
  name: "Strategy Summary",
  periods: [{
    label: "Q3 2025",
    href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2025/11/River_Road_Large_Cap_Value_Select_Strategy_Summary.pdf"
  }, {
    label: "Q1 2026",
    href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2026/06/reportbcp-2026-03-31-River-Road-Large-Cap-Value-Select-Strategy-Summary.pdf"
  }]
}];
const LIT_KEY = [{
  name: "Platform availability",
  icon: "screen",
  href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2026/01/BCP_RRAM_USLCVSF-Platform-availability-5jan26_F-share-class-waiver.pdf",
  action: "View",
  external: true
}, {
  name: "KIID document & Prospectus",
  icon: "doc",
  href: "https://riverroad.fundsdata.carnegroup.com",
  action: "View",
  external: true
}];
const VIEWPOINTS = [{
  title: "Why now for US value equities?",
  quarter: "Q2 2025",
  href: "https://boutiquecapitalpartners.co.uk/insights/why-now-for-active-us-value-equities"
}, {
  title: "The Russell Shuffle: When growth meets value",
  quarter: "Q4 2025",
  href: "https://boutiquecapitalpartners.co.uk/insights/the-russell-shuffle-when-growth-meets-value"
}];

/* icons */
const Ico = {
  doc: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 3v4a1 1 0 0 0 1 1h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "13",
    x2: "15",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "17",
    x2: "13",
    y2: "17"
  })),
  screen: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 21h8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18v3"
  })),
  plainDoc: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 3v4a1 1 0 0 0 1 1h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"
  }))
};
const DownIcon = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    width: "14px",
    height: "14px",
    opacity: 0.55
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 3v12"
}), /*#__PURE__*/React.createElement("path", {
  d: "m7 10 5 5 5-5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 21h14"
}));
const ExtIcon = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    width: "14px",
    height: "14px",
    opacity: 0.55
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 7h10v10"
}));

/* ——— 1 · HERO ——— */
function DocHero() {
  const crumbs = ["Fund partners", "River Road Asset Management", "Key fund information & document centre"];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Doc hero",
    style: {
      position: "relative",
      background: "var(--bcp-navy)",
      padding: "0 0 64px",
      fontFamily: "var(--font-brand)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/marks/swirl-teal.svg`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-150px",
      top: "-110px",
      width: "460px",
      opacity: 0.1,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "1px solid rgba(255,255,255,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "16px 5%",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexWrap: "wrap"
    }
  }, crumbs.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: c
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.3)",
      fontSize: "13px"
    }
  }, "/") : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: i === crumbs.length - 1 ? 600 : 500,
      color: i === crumbs.length - 1 ? "#fff" : "rgba(255,255,255,0.6)"
    }
  }, c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "66px 5% 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "none",
      color: "var(--bcp-coral)",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "34px",
      height: "2px",
      background: "var(--bcp-coral)"
    }
  }), "Document centre"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(32px, 4.2vw, 50px)",
      fontWeight: 600,
      letterSpacing: "-0.6px",
      lineHeight: 1.1,
      color: "#fff",
      margin: "0 0 18px 0"
    }
  }, "Key fund information and document centre"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(20px, 2.2vw, 26px)",
      fontWeight: 600,
      color: "var(--bcp-coral)",
      margin: 0
    }
  }, "CG River US Large Cap Value Select")));
}

/* ——— 2 · DOCUMENT CENTRE w/ attestation gate ——— */
function DocCentre() {
  const [attested, setAttested] = React.useState(false);
  React.useEffect(() => {
    try {
      if (localStorage.getItem(ATTEST_KEY) === "1") setAttested(true);
    } catch (e) {}
  }, []);
  const confirm = () => {
    try {
      localStorage.setItem(ATTEST_KEY, "1");
    } catch (e) {}
    ReactDOM.flushSync(() => setAttested(true));
  };
  const Pill = ({
    label,
    href,
    accent,
    icon
  }) => {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      target: "_blank",
      rel: "noreferrer",
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "9px 16px",
        borderRadius: "999px",
        border: `1px solid ${h ? accent ? "var(--bcp-coral)" : "var(--bcp-navy)" : "#d9cfb6"}`,
        background: h ? accent ? "var(--bcp-coral)" : "var(--bcp-navy)" : "#fff",
        color: h ? "#fff" : "var(--bcp-navy)",
        fontSize: "13px",
        fontWeight: 600,
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition: "all 0.25s ease",
        transform: h ? "translateY(-1px)" : "none",
        boxShadow: h ? "0 4px 12px rgba(0,0,92,0.18)" : "none"
      }
    }, label, icon === "ext" ? /*#__PURE__*/React.createElement(ExtIcon, null) : /*#__PURE__*/React.createElement(DownIcon, null));
  };
  const LitRow = ({
    icon,
    name,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px",
      padding: "20px 0",
      borderBottom: "1px solid #ECE3CF",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      fontSize: "16px",
      fontWeight: 600,
      color: "var(--bcp-navy)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "40px",
      height: "40px",
      flexShrink: 0,
      borderRadius: "10px",
      background: "#fff",
      border: "1px solid #EFE6D2",
      color: "var(--bcp-navy)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "20px",
      height: "20px",
      display: "block"
    }
  }, icon)), name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
      justifyContent: "flex-end"
    }
  }, children));
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Document centre",
    style: {
      background: "#0F367A",
      padding: "60px 5%",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1100px",
      margin: "0 auto"
    }
  }, !attested ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "680px",
      margin: "0 auto",
      background: "#FAF6EB",
      border: "1px solid #EFE6D2",
      borderRadius: "12px",
      boxShadow: "0 6px 24px rgba(0,0,92,0.10)",
      padding: "44px 46px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "58px",
      height: "58px",
      borderRadius: "50%",
      background: "rgba(222,93,93,0.12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 24px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--bcp-coral)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: "26px",
      height: "26px"
    }
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "26px",
      fontWeight: 600,
      color: "var(--bcp-navy)",
      margin: "0 0 14px 0",
      letterSpacing: "-0.3px"
    }
  }, "Professional investors & advisers"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15.5px",
      lineHeight: 1.7,
      color: "#6a7385",
      margin: "0 0 28px 0"
    }
  }, "The documents in this section are intended exclusively for experienced professional and institutional investors and advisers. Please confirm your status to continue. Capital is at risk."), /*#__PURE__*/React.createElement("button", {
    onClick: confirm,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      background: "var(--bcp-coral)",
      color: "#fff",
      border: "none",
      fontFamily: "var(--font-brand)",
      fontSize: "15px",
      fontWeight: 600,
      padding: "16px 32px",
      borderRadius: "12px",
      cursor: "pointer",
      boxShadow: "var(--shadow-coral)",
      transition: "all 0.25s ease"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--bcp-coral-hover-dark)";
      e.currentTarget.style.transform = "translateY(-2px)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "var(--bcp-coral)";
      e.currentTarget.style.transform = "none";
    }
  }, "I confirm I am a professional investor / adviser", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: "16px",
      height: "16px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  })))) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FAF6EB",
      border: "1px solid #EFE6D2",
      borderRadius: "12px",
      boxShadow: "0 6px 24px rgba(0,0,92,0.10)",
      padding: "44px 48px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "2.5px",
      textTransform: "none",
      color: "var(--bcp-coral)"
    }
  }, "Share class comparison"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "24px",
      fontWeight: 700,
      color: "var(--bcp-navy)",
      margin: "10px 0 6px",
      lineHeight: 1.25
    }
  }, "CG River Road US Large Cap Value Select"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#6a7385",
      margin: "0 0 28px"
    }
  }, "GBP Accumulation share classes"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      border: "1px solid #C9B78B",
      minWidth: "460px"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      border: "1px solid #C9B78B",
      padding: "14px 20px 16px",
      textAlign: "left",
      width: "220px",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1.5px",
      textTransform: "none",
      color: "#9aa1b0"
    }
  }, "Share class"), SHARE_CLASSES.map(sc => /*#__PURE__*/React.createElement("th", {
    key: sc.letter,
    style: {
      border: "1px solid #C9B78B",
      padding: "14px 20px 16px",
      textAlign: "center",
      verticalAlign: "bottom"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "10px",
      fontWeight: 600,
      letterSpacing: "1.5px",
      textTransform: "none",
      color: "#9aa1b0"
    }
  }, sc.meta), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: "22px",
      fontWeight: 700,
      color: "var(--bcp-coral)",
      lineHeight: 1.15,
      marginTop: "3px"
    }
  }, sc.letter))))), /*#__PURE__*/React.createElement("tbody", null, TABLE_ROWS.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.label,
    className: "doc-trow"
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      border: "1px solid #C9B78B",
      padding: "18px 20px",
      textAlign: "left",
      fontSize: "15px",
      fontWeight: 600,
      color: "var(--bcp-navy)"
    },
    dangerouslySetInnerHTML: {
      __html: r.label.replace("¹", "<sup>1</sup>")
    }
  }), r.cells.map((c, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    style: {
      border: "1px solid #C9B78B",
      padding: "18px 20px",
      textAlign: "center",
      fontSize: "15px",
      fontWeight: 500,
      color: "#333"
    }
  }, c))))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12px",
      fontStyle: "italic",
      color: "#9aa1b0",
      margin: "18px 0 0"
    }
  }, /*#__PURE__*/React.createElement("sup", null, "1"), " Waived by agreement.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#FAF6EB",
      border: "1px solid #EFE6D2",
      borderRadius: "12px",
      boxShadow: "0 6px 24px rgba(0,0,92,0.10)",
      padding: "44px 48px",
      marginTop: "28px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "2.5px",
      textTransform: "none",
      color: "var(--bcp-coral)"
    }
  }, "Fund documents"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "24px",
      fontWeight: 700,
      color: "var(--bcp-navy)",
      margin: "10px 0 6px",
      lineHeight: 1.25
    }
  }, "Literature & resources"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#6a7385",
      margin: "0 0 8px"
    }
  }, "The documents below apply to the fund as a whole \u2014 identical across the F, W and I share classes."), LIT_PERIODIC.map(row => /*#__PURE__*/React.createElement(LitRow, {
    key: row.name,
    icon: Ico.doc,
    name: row.name
  }, row.periods.map(p => /*#__PURE__*/React.createElement(Pill, {
    key: p.label,
    label: p.label,
    href: p.href,
    icon: "down"
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1.5px",
      textTransform: "none",
      color: "#9aa1b0",
      margin: "28px 0 4px"
    }
  }, "Key documents & access"), LIT_KEY.map(row => /*#__PURE__*/React.createElement(LitRow, {
    key: row.name,
    icon: row.icon === "screen" ? Ico.screen : Ico.plainDoc,
    name: row.name
  }, /*#__PURE__*/React.createElement(Pill, {
    label: row.action,
    href: row.href,
    accent: true,
    icon: "ext"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "wrap",
      marginTop: "32px",
      paddingTop: "26px",
      borderTop: "1px solid #ECE3CF"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "15px",
      fontWeight: 600,
      color: "var(--bcp-navy)"
    }
  }, "Discuss a minimum investment waiver"), /*#__PURE__*/React.createElement(Pill, {
    label: "Email us",
    href: "mailto:rodger@boutiquecapitalpartners.co.uk",
    accent: true,
    icon: "ext"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "40px",
      display: "flex",
      justifyContent: "flex-end",
      gap: "24px",
      flexWrap: "wrap"
    }
  }, VIEWPOINTS.map(v => /*#__PURE__*/React.createElement("div", {
    key: v.title,
    style: {
      background: "#FAF6EB",
      border: "1px solid #EFE6D2",
      borderRadius: "16px",
      padding: "32px 36px",
      boxShadow: "0 6px 24px rgba(0,0,92,0.10)",
      width: "380px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "22px",
      fontWeight: 600,
      color: "var(--bcp-navy)",
      margin: 0,
      lineHeight: 1.3,
      flex: 1
    }
  }, v.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "16px",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      fontWeight: 700,
      color: "var(--bcp-coral)",
      letterSpacing: "1.5px",
      textTransform: "none",
      display: "block",
      marginBottom: "4px"
    }
  }, "Viewpoint"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      fontWeight: 600,
      color: "var(--bcp-coral)"
    }
  }, v.quarter))), /*#__PURE__*/React.createElement("a", {
    href: v.href,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "inline-block",
      color: "var(--bcp-coral)",
      textDecoration: "underline",
      fontWeight: 600,
      fontSize: "16px"
    }
  }, "Read it here")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "50px",
      paddingTop: "30px",
      borderTop: "1px solid rgba(255,255,255,0.2)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.9)",
      fontWeight: 400,
      lineHeight: 1.5,
      margin: 0,
      textAlign: "center",
      maxWidth: "900px",
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, "For professional investor use only. Boutique Capital Partners Limited (FRN 1027595) (\"BCP\") is an appointed representative of Thornbridge Investment Management LLP (FRN 713859), which is authorised and regulated by the Financial Conduct Authority. BCP is appointed by River Road Asset Management, LLC (\"River Road\") to solicit clients or investors to be a client of River Road. BCP is not a current client or investor of River Road. River Road will pay (or procure to be paid) cash compensation to BCP for the solicitation services BCP provides. BCP, due to such compensation, has an incentive to recommend River Road and its strategies, resulting in a material conflict of interest. For more important disclosures, please click here:", " ", /*#__PURE__*/React.createElement("a", {
    href: DISCLOSURE_PDF,
    target: "_blank",
    rel: "noreferrer",
    style: {
      color: "#FFB98A",
      textDecoration: "underline"
    }
  }, "River Road Boutique Capital Partners Endorsement Disclosure.pdf"))))));
}
window.DocCentreSections = {
  DocHero,
  DocCentre
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "documentcentre-sections.jsx", error: String((e && e.message) || e) }); }

// insights-sections.jsx
try { (() => {
// Insights hub — built from the live insights archive (uploads .../index.html).
// COPY LOCK: article titles, dates, excerpts, categories and the page title/
// subtitle are reproduced VERBATIM. Links point to the real article URLs / PDF.
// The archive is a plain table; this elevates it with working category filters
// and a featured lead article, per the agreed UX plan. Exposes window.InsightsSections.

const A = "assets";
const DS = window.BoutiqueCapitalPartnersDesignSystem_7ef874;
const ARTICLES = [{
  id: "russell-shuffle",
  date: "December 2025",
  sort: 202512,
  category: "Market Commentary",
  title: "The Russell Shuffle: When growth meets value",
  excerpt: "Large-cap investing shaped by the Magnificent Seven sees a notable shift as Alphabet, Amazon, and Meta now appear in the Russell 1000 Value Index.",
  href: "https://boutiquecapitalpartners.co.uk/insights/the-russell-shuffle-when-growth-meets-value",
  cta: "Read",
  image: `${A}/images/puffin-shuffle.jpg`
}, {
  id: "why-now",
  date: "August 2024",
  sort: 202408,
  category: "Market Commentary",
  title: "Why now for active US value equities?",
  excerpt: "BCP Advisory Board member Alex Marshall-Tate explores the compelling case for US value equities in today's market environment.",
  href: "https://boutiquecapitalpartners.co.uk/insights/why-now-for-active-us-value-equities",
  cta: "Read",
  image: `${A}/images/mountain-view.webp`
}, {
  id: "river-road-partnership",
  date: "October 2024",
  sort: 202410,
  category: "Partnership News",
  title: "BCP partners with River Road Asset Management",
  excerpt: "Foundational distribution partnership with leading US value equity manager, bringing their US Large Cap Value Select strategy to UK and European intermediaries.",
  href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2024/10/BCP-Partners-with-River-Road-Press-Release-221024.pdf",
  cta: "View PDF",
  image: `${A}/images/wave-banner.webp`,
  pdf: true
}];
const CATEGORIES = ["All", "Market Commentary", "Partnership News"];
const Arrow = ({
  pdf
}) => pdf ? /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    width: "16px",
    height: "16px"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 17 17 7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M7 7h10v10"
})) : /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    width: "16px",
    height: "16px"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M12 5l7 7-7 7"
}));

/* ——— 1 · HERO ——— */
function InsightsHero() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Insights hero",
    style: {
      position: "relative",
      background: "var(--bcp-cream)",
      padding: "80px 5% 0",
      fontFamily: "var(--font-brand)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/marks/swirl-teal.svg`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-150px",
      top: "-120px",
      width: "500px",
      opacity: 0.1,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "1240px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "38px",
      fontSize: "14px",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      color: "#666",
      textDecoration: "none"
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#999"
    }
  }, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--bcp-navy)"
    }
  }, "Insights")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(38px, 5vw, 52px)",
      fontWeight: 600,
      color: "var(--bcp-navy)",
      margin: "0 0 20px 0",
      lineHeight: 1.15,
      letterSpacing: "-0.5px"
    }
  }, "All insights"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "19px",
      fontWeight: 500,
      color: "#555",
      margin: 0,
      lineHeight: 1.6,
      maxWidth: "800px"
    }
  }, "Complete collection of market insights, fund updates, and investment commentary from Boutique Capital Partners")));
}

/* ——— 2 · HUB — filters, featured lead, list ——— */
function InsightsHub() {
  const [cat, setCat] = React.useState("All");
  const filtered = ARTICLES.filter(a => cat === "All" || a.category === cat).sort((a, b) => b.sort - a.sort);
  const featured = filtered[0];
  const rest = filtered.slice(1);
  const [fh, setFh] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Insights hub",
    style: {
      background: "var(--bcp-cream)",
      padding: "50px 5% 100px",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1240px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      marginBottom: "44px",
      borderBottom: "1px solid var(--bcp-sand-300)",
      paddingBottom: "28px"
    }
  }, CATEGORIES.map(c => {
    const on = c === cat;
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => ReactDOM.flushSync(() => setCat(c)),
      style: {
        fontFamily: "var(--font-brand)",
        fontSize: "14px",
        fontWeight: 600,
        letterSpacing: "0.2px",
        padding: "10px 22px",
        borderRadius: "999px",
        cursor: "pointer",
        transition: "all 0.25s ease",
        border: `1px solid ${on ? "var(--bcp-navy)" : "var(--bcp-sand-300)"}`,
        background: on ? "var(--bcp-navy)" : "transparent",
        color: on ? "#fff" : "var(--bcp-gray-600)"
      }
    }, c);
  })), featured ? /*#__PURE__*/React.createElement("a", {
    key: featured.id,
    href: featured.href,
    target: featured.pdf ? "_blank" : undefined,
    rel: "noreferrer",
    onMouseEnter: () => setFh(true),
    onMouseLeave: () => setFh(false),
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr 1fr",
      gap: "0",
      marginBottom: "30px",
      background: "#fff",
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      textDecoration: "none",
      border: fh ? "1px solid rgba(222,93,93,0.25)" : "1px solid var(--border-card)",
      boxShadow: fh ? "var(--shadow-card-hover)" : "var(--shadow-card)",
      transform: fh ? "translateY(-4px)" : "none",
      transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: "340px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: featured.image,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: fh ? "scale(1.05)" : "none",
      transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "22px",
      left: "22px",
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1px",
      textTransform: "none",
      color: "#fff",
      background: "rgba(0,0,92,0.6)",
      backdropFilter: "blur(3px)",
      padding: "7px 15px",
      borderRadius: "999px"
    }
  }, "Featured")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "44px 48px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      fontWeight: 600,
      color: "var(--bcp-coral)",
      letterSpacing: "0.3px"
    }
  }, featured.date), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1px",
      height: "13px",
      background: "var(--bcp-sand-300)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 700,
      color: "var(--bcp-navy)",
      background: "var(--bcp-cream)",
      padding: "6px 14px",
      borderRadius: "999px",
      letterSpacing: "0.3px"
    }
  }, featured.category)), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(26px, 2.8vw, 34px)",
      fontWeight: 600,
      color: "var(--bcp-navy)",
      margin: "0 0 18px 0",
      lineHeight: 1.25,
      letterSpacing: "-0.3px"
    }
  }, featured.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      fontWeight: 500,
      color: "var(--bcp-gray-600)",
      lineHeight: 1.65,
      margin: "0 0 30px 0"
    }
  }, featured.excerpt), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: fh ? "12px" : "8px",
      fontSize: "16px",
      fontWeight: 600,
      color: "var(--bcp-coral)",
      transition: "gap 0.3s ease"
    }
  }, featured.cta, " ", /*#__PURE__*/React.createElement(Arrow, {
    pdf: featured.pdf
  })))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "16px"
    }
  }, rest.map(a => /*#__PURE__*/React.createElement(InsightRow, {
    key: a.id,
    a: a
  }))), filtered.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      color: "var(--bcp-sand-400)",
      fontSize: "16px",
      padding: "60px 0"
    }
  }, "No insights in this category yet.") : null));
}
function InsightRow({
  a
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: a.href,
    target: a.pdf ? "_blank" : undefined,
    rel: "noreferrer",
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "grid",
      gridTemplateColumns: "160px 1fr 180px 120px",
      gap: "24px",
      alignItems: "center",
      padding: "28px 36px",
      background: "#fff",
      borderRadius: "var(--radius-lg)",
      textDecoration: "none",
      border: h ? "1px solid rgba(222,93,93,0.25)" : "1px solid var(--border-card)",
      boxShadow: h ? "var(--shadow-card)" : "none",
      transform: h ? "translateX(4px)" : "none",
      transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      fontWeight: 600,
      color: "var(--bcp-coral)",
      letterSpacing: "0.3px"
    }
  }, a.date), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "20px",
      fontWeight: 600,
      color: "var(--bcp-navy)",
      margin: "0 0 8px 0",
      lineHeight: 1.3,
      letterSpacing: "-0.2px"
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      fontWeight: 500,
      color: "var(--bcp-gray-600)",
      margin: 0,
      lineHeight: 1.5
    }
  }, a.excerpt)), /*#__PURE__*/React.createElement("span", {
    style: {
      justifySelf: "start",
      fontSize: "12px",
      fontWeight: 700,
      color: "var(--bcp-navy)",
      background: "var(--bcp-cream)",
      padding: "6px 14px",
      borderRadius: "999px",
      letterSpacing: "0.3px"
    }
  }, a.category), /*#__PURE__*/React.createElement("span", {
    style: {
      justifySelf: "end",
      display: "inline-flex",
      alignItems: "center",
      gap: h ? "11px" : "7px",
      fontSize: "15px",
      fontWeight: 600,
      color: "var(--bcp-coral)",
      whiteSpace: "nowrap",
      transition: "gap 0.3s ease"
    }
  }, a.cta, " ", /*#__PURE__*/React.createElement(Arrow, {
    pdf: a.pdf
  })));
}
window.InsightsSections = {
  InsightsHero,
  InsightsHub
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "insights-sections.jsx", error: String((e && e.message) || e) }); }

// puffin-sections.jsx
try { (() => {
// Atlantic Puffin partnership page — BCP × Scottish Seabird Centre.
// COPY LOCK: the title, all six trait texts, the quote and its attribution, and
// the press-release button label are reproduced VERBATIM from site_src/index.html.
// Eyebrow/section labels are navigational only. Exposes window.PuffinSections.

const A = "assets";
const DS = window.BoutiqueCapitalPartnersDesignSystem_7ef874;
const TRAITS = [{
  name: "Distinctiveness",
  text: "Much like the vibrant orange beak, BCP stands out from industry peers by showcasing only truly differentiated investment strategies."
}, {
  name: "Adaptability",
  text: "Key to survival in the challenging environments Puffins inhabit is the ability to adapt. Likewise, our services are designed to be future-focused, flexible and responsive to the evolving demands of investors, leveraging the latest technology and driving innovation."
}, {
  name: "Resilience",
  text: "Puffins are known for their ability to withstand harsh conditions and dive deep into the ocean for food, embodying resilience and determination. Likewise, we have built BCP to be robust and enduring, cemented in a strong sense of purpose."
}, {
  name: "Approachability",
  text: "Their diminutive size makes Puffins unintimidating. They are viewed as expressive, curious and cheerful – characteristics that could describe Rodger and the broader BCP team."
}, {
  name: "Teamwork",
  text: "Puffins are highly social creatures nesting in large colonies, reflecting the importance of community, cooperation, and teamwork. Similarly, BCP believes in developing supportive and collaborative partnerships, with shared values, incentives and goals."
}, {
  name: "Commitment",
  text: "The loyalty seen in puffins is reflected in our focus on long-term fund manager partnerships and commitment to investor relationships founded on openness and trust."
}];

/* ——— 1 · HERO — full-bleed cliff scene ——— */
function PuffinHero() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Puffin hero",
    style: {
      position: "relative",
      minHeight: "92vh",
      display: "flex",
      alignItems: "flex-end",
      overflow: "hidden",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    "data-parallax": "1",
    src: `${A}/images/puffin-shuffle.jpg`,
    alt: "Atlantic Puffins on a Scottish sea cliff",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 38%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,92,0.32) 0%, rgba(0,0,92,0) 30%, rgba(0,0,92,0.18) 55%, rgba(0,0,92,0.82) 100%)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${A}/images/puffin-cliff.webp`,
    alt: "",
    "aria-hidden": "true",
    className: "puffin-float",
    style: {
      position: "absolute",
      top: "16%",
      right: "8%",
      width: "min(30vw, 360px)",
      filter: "drop-shadow(0 18px 30px rgba(0,0,40,0.35))",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: "1240px",
      margin: "0 auto",
      padding: "0 5% 88px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "none",
      color: "#fff",
      marginBottom: "26px",
      background: "rgba(37,123,153,0.55)",
      backdropFilter: "blur(3px)",
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: "var(--radius-pill)",
      padding: "9px 20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "7px",
      height: "7px",
      borderRadius: "50%",
      background: "var(--bcp-coral)"
    }
  }), "Corporate Responsibility"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(34px, 4.6vw, 60px)",
      fontWeight: 600,
      lineHeight: 1.1,
      letterSpacing: "-0.8px",
      color: "#fff",
      margin: "0 0 30px 0",
      maxWidth: "1000px",
      textShadow: "0 2px 30px rgba(0,0,40,0.4)"
    }
  }, "BCP is proud to support the Atlantic Puffin, in association with the", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://seabird.org/wildlife/puffin",
    target: "_blank",
    rel: "noreferrer",
    style: {
      color: "#fff",
      textDecorationColor: "var(--bcp-coral)",
      textUnderlineOffset: "5px",
      textDecorationThickness: "2px"
    }
  }, "Scottish Seabird Centre")), /*#__PURE__*/React.createElement("a", {
    href: "https://seabird.org",
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/logos/scottish-seabird-centre-white.png`,
    alt: "Scottish Seabird Centre",
    style: {
      height: "74px",
      width: "auto"
    }
  }))));
}

/* ——— 2 · KINSHIP — interactive trait explorer ——— */
function PuffinKinship() {
  const [active, setActive] = React.useState(0);
  const t = TRAITS[active];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Shared traits",
    style: {
      position: "relative",
      background: "var(--bcp-cream)",
      padding: "100px 5%",
      fontFamily: "var(--font-brand)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/marks/swirl-teal.svg`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-160px",
      bottom: "-120px",
      width: "480px",
      opacity: 0.08,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "1240px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "760px",
      marginBottom: "56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "none",
      color: "var(--bcp-coral)",
      marginBottom: "18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "34px",
      height: "2px",
      background: "var(--bcp-coral)"
    }
  }), "Shared traits"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(30px, 3.8vw, 46px)",
      fontWeight: 600,
      letterSpacing: "-0.5px",
      lineHeight: 1.12,
      color: "var(--bcp-navy)",
      margin: 0
    }
  }, "Six traits we share with the puffin")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.82fr 1fr",
      gap: "56px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-card-hover)",
      aspectRatio: "0.78"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/images/puffin-portrait.png`,
    alt: "Atlantic Puffin portrait",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 30%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,40,0) 45%, rgba(0,0,40,0.75) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "30px",
      right: "30px",
      bottom: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "1.5px",
      color: "rgba(255,255,255,0.7)",
      marginBottom: "6px"
    }
  }, String(active + 1).padStart(2, "0"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "/ 06")), /*#__PURE__*/React.createElement("div", {
    key: active,
    className: "puffin-traitword",
    style: {
      fontSize: "clamp(28px, 3.2vw, 40px)",
      fontWeight: 700,
      letterSpacing: "-0.5px",
      color: "#fff",
      lineHeight: 1.05
    }
  }, t.name)))), /*#__PURE__*/React.createElement("div", null, TRAITS.map((tr, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("div", {
      key: tr.name,
      onClick: () => ReactDOM.flushSync(() => setActive(i)),
      style: {
        borderTop: i === 0 ? "1px solid var(--bcp-sand-300)" : "none",
        borderBottom: "1px solid var(--bcp-sand-300)",
        cursor: "pointer",
        padding: on ? "26px 0 30px" : "24px 0",
        transition: "padding 0.3s ease"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "20px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-serif-accent)",
        fontSize: "26px",
        fontWeight: 400,
        color: on ? "var(--bcp-coral)" : "var(--bcp-sand-400)",
        transition: "color 0.3s ease",
        minWidth: "34px"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
      style: {
        flex: 1,
        fontSize: "clamp(20px, 2.2vw, 27px)",
        fontWeight: 600,
        letterSpacing: "-0.3px",
        color: on ? "var(--bcp-navy)" : "var(--bcp-gray-600)",
        margin: 0,
        transition: "color 0.3s ease"
      }
    }, tr.name), /*#__PURE__*/React.createElement("span", {
      style: {
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        border: `1.5px solid ${on ? "var(--bcp-coral)" : "var(--bcp-sand-300)"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        background: on ? "var(--bcp-coral)" : "transparent",
        transition: "all 0.3s ease"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: on ? "#fff" : "var(--bcp-sand-400)",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        width: "14px",
        height: "14px",
        transform: on ? "rotate(45deg)" : "none",
        transition: "transform 0.3s ease"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: on ? "1fr" : "0fr",
        transition: "grid-template-rows 0.4s cubic-bezier(0.4,0,0.2,1)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "16px 0 0 54px",
        fontSize: "16.5px",
        lineHeight: 1.7,
        color: "var(--bcp-gray-700)",
        maxWidth: "560px"
      }
    }, tr.text))));
  })))));
}

/* ——— 3 · QUOTE — conservation centrepiece ——— */
function PuffinQuote() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Conservation quote",
    style: {
      position: "relative",
      background: "var(--bcp-teal-section)",
      padding: "104px 5%",
      fontFamily: "var(--font-brand)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/marks/swirl-teal.svg`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-180px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "620px",
      opacity: 0.12,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "1040px",
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif-accent)",
      fontSize: "90px",
      lineHeight: 0.5,
      color: "rgba(255,255,255,0.55)",
      marginBottom: "30px"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "clamp(22px, 2.7vw, 32px)",
      fontWeight: 500,
      lineHeight: 1.5,
      color: "#fff",
      margin: "0 0 36px 0"
    }
  }, "We are delighted to partner with BCP to support our vital work in marine conservation and education. Scotland's seabird populations, including the much-loved puffin, face urgent threats from biodiversity loss and climate change. On Isle of May in East Scotland, puffin numbers dropped from 10,000 pairs to under 2,000..."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "44px",
      height: "3px",
      background: "var(--bcp-coral)",
      margin: "0 auto 22px",
      borderRadius: "3px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      fontWeight: 600,
      color: "#fff",
      margin: 0
    }
  }, "Florence Gygax, Partnership Development Manager, Scottish Seabird Centre")));
}

/* ——— 4 · CTA — press release band ——— */
function PuffinCta() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Press release CTA",
    style: {
      position: "relative",
      background: "var(--bcp-navy)",
      padding: "90px 5%",
      fontFamily: "var(--font-brand)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/images/puffin-cliff.webp`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-40px",
      bottom: "-30px",
      width: "min(34vw, 380px)",
      opacity: 0.9,
      transform: "scaleX(-1)",
      filter: "drop-shadow(0 14px 26px rgba(0,0,0,0.4))",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "1240px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "50px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://seabird.org",
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "inline-block",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/logos/scottish-seabird-centre-white.png`,
    alt: "Scottish Seabird Centre",
    style: {
      height: "92px",
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://boutiquecapitalpartners.co.uk/wp-content/uploads/2024/12/BCP-Press-Release_SCC-Partnership-FINAL-121224.pdf",
    target: "_blank",
    rel: "noreferrer",
    className: "puffin-cta-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "16px",
      background: "var(--bcp-coral)",
      color: "#fff",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: 1.4,
      textDecoration: "none",
      padding: "22px 34px",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-coral)",
      transition: "all 0.25s ease",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", null, "Read the press release to find out", /*#__PURE__*/React.createElement("br", null), "more about our partnership"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: "20px",
      height: "20px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  })))));
}
window.PuffinSections = {
  PuffinHero,
  PuffinKinship,
  PuffinQuote,
  PuffinCta
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "puffin-sections.jsx", error: String((e && e.message) || e) }); }

// redesign-sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// BCP Homepage Redesign — section components (selectivity-led blueprint, option C)
// Loaded via Babel; exposes window.RedesignSections

const A = "assets";
const DS = window.BoutiqueCapitalPartnersDesignSystem_7ef874;

/* ——— 1 · HERO — one door, quiet buyer path ——— */
function RHero() {
  const {
    Button
  } = DS;
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    "data-parallax-bg": "1",
    style: {
      position: "relative",
      minHeight: "86vh",
      display: "flex",
      alignItems: "center",
      backgroundImage: `url('${A}/images/wave-banner.webp')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "0 5%",
      boxSizing: "border-box",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(100deg, rgba(247,239,217,0.92) 0%, rgba(247,239,217,0.72) 32%, rgba(247,239,217,0.30) 52%, rgba(247,239,217,0) 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      maxWidth: "1240px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "660px"
    },
    className: "hero-anim"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(40px, 5vw, 62px)",
      lineHeight: 1.12,
      letterSpacing: "-1px",
      color: "var(--bcp-navy)",
      margin: "0 0 28px 0",
      fontWeight: 400
    }
  }, /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 400
    }
  }, "Outsourced"), " distribution for", " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700,
      fontStyle: "normal"
    }
  }, "outstanding"), " investment strategies"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "clamp(17px, 1.5vw, 20px)",
      lineHeight: 1.65,
      color: "var(--bcp-navy)",
      margin: "0 0 40px 0",
      maxWidth: "500px"
    }
  }, "We provide distribution for high-quality, differentiated investment strategies seeking access to the UK, Irish and Swiss intermediary markets."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "26px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    arrow: true,
    href: "#contact"
  }, "Partner with us"), /*#__PURE__*/React.createElement("a", {
    href: "#fund",
    style: {
      fontSize: "15px",
      fontWeight: 600,
      color: "var(--bcp-navy)",
      textDecoration: "none",
      borderBottom: "2px solid var(--bcp-coral)",
      paddingBottom: "3px"
    }
  }, "Access our fund partners \u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-anim hero-anim-2",
    style: {
      position: "absolute",
      bottom: "48px",
      right: "5%"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "insights.html",
    style: {
      textDecoration: "none",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      borderRadius: "var(--radius-lg)",
      width: "330px",
      border: "1px solid rgba(255,255,255,0.6)",
      boxShadow: hov ? "var(--shadow-float-hover)" : "var(--shadow-float)",
      overflow: "hidden",
      transform: hov ? "translateY(-4px)" : "none",
      transition: "transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "96px",
      flexShrink: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/images/puffin-shuffle.jpg`,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: hov ? "scale(1.08)" : "none",
      transition: "transform 0.6s cubic-bezier(.22,1,.36,1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "9px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10.5px",
      fontWeight: 700,
      letterSpacing: "1.2px",
      color: "var(--bcp-coral)"
    }
  }, "Viewpoint"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1px",
      height: "11px",
      background: "var(--bcp-sand-300)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "10.5px",
      fontWeight: 500,
      color: "var(--bcp-sand-400)",
      letterSpacing: "0.5px"
    }
  }, "Q4 2025")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "15px",
      fontWeight: 600,
      color: "var(--bcp-navy)",
      lineHeight: 1.35,
      margin: "0 0 12px 0",
      letterSpacing: "-0.2px"
    }
  }, "The Russell Shuffle: When growth meets value"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: hov ? "9px" : "6px",
      fontSize: "12.5px",
      fontWeight: 600,
      color: "var(--bcp-coral)",
      transition: "gap 0.3s ease"
    }
  }, "Read", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: "13px",
      height: "13px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  })))))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-anim hero-anim-3",
    style: {
      position: "absolute",
      bottom: "30px",
      left: "5%",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      fontWeight: 600,
      letterSpacing: "2px",
      color: "var(--bcp-navy)",
      opacity: 0.6
    }
  }, "Scroll"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: "1px",
      height: "40px",
      background: "rgba(0,0,92,0.2)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-scroll-dot",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: "1px",
      height: "14px",
      background: "var(--bcp-coral)"
    }
  }))));
}

/* ——— 2 · SELECTIVITY STRIP — floating panel with a choreographed sweep ——— */
function CountNum({
  value,
  run,
  style
}) {
  var initial = String(value);
  const [disp, setDisp] = React.useState(initial);
  React.useEffect(() => {
    if (!run) return;
    var reduce = false;
    try {
      reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {}
    var m = String(value).match(/^([^\d]*)([\d.,]+)(.*)$/);
    if (!m || reduce) {
      setDisp(value);
      return;
    }
    var prefix = m[1],
      numStr = m[2].replace(/,/g, ""),
      suffix = m[3];
    var tgt = parseFloat(numStr),
      dec = (numStr.split(".")[1] || "").length;
    var raf,
      t0 = null,
      dur = 1200;
    var ease = function (p) {
      return 1 - Math.pow(1 - p, 3);
    };
    var step = function (now) {
      if (!t0) t0 = now;
      var p = Math.min(1, (now - t0) / dur);
      var v = tgt * ease(p);
      setDisp(prefix + (dec ? v.toFixed(dec) : Math.round(v)) + suffix);
      if (p < 1) raf = requestAnimationFrame(step);else setDisp(value);
    };
    setDisp(prefix + "0" + suffix);
    raf = requestAnimationFrame(step);
    var failsafe = setTimeout(function () {
      setDisp(value);
    }, 1500);
    return function () {
      if (raf) cancelAnimationFrame(raf);
      clearTimeout(failsafe);
    };
  }, [run, value]);
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, disp);
}
function RSelectivity() {
  const stats = [{
    big: "100+",
    small: "strategies reviewed each year"
  }, {
    big: "1",
    small: "partnership signed to date — by design",
    accent: true
  }, {
    big: "4",
    small: "jurisdictions: UK, CI, Ireland, Switzerland"
  }, {
    big: "23",
    small: "years building UK distribution"
  }];
  var reduce = false;
  try {
    reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {}
  const [lit, setLit] = React.useState(reduce);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (lit) return;
    var el = ref.current;
    var done = false;
    var light = function () {
      if (!done) {
        done = true;
        setLit(true);
      }
    };
    var io = null;
    if (el && "IntersectionObserver" in window) {
      io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            light();
            io.disconnect();
          }
        });
      }, {
        threshold: 0.35
      });
      io.observe(el);
    } else {
      light();
    }
    var t = setTimeout(light, 1600);
    return function () {
      clearTimeout(t);
      if (io) io.disconnect();
    };
  }, [lit]);
  const EASE = "cubic-bezier(0.4,0,0.2,1)";
  const Corner = ({
    pos
  }) => {
    const base = {
      position: "absolute",
      width: "40px",
      height: "40px",
      borderColor: "var(--bcp-coral)",
      transition: "opacity 0.7s " + EASE + ", transform 0.7s " + EASE,
      opacity: lit ? 1 : 0
    };
    const map = {
      tl: {
        top: "-1px",
        left: "-1px",
        borderTop: "3px solid",
        borderLeft: "3px solid",
        transform: lit ? "none" : "translate(8px,8px)"
      },
      br: {
        bottom: "-1px",
        right: "-1px",
        borderBottom: "3px solid",
        borderRight: "3px solid",
        transform: lit ? "none" : "translate(-8px,-8px)"
      }
    };
    return /*#__PURE__*/React.createElement("span", {
      style: {
        ...base,
        ...map[pos]
      }
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Selectivity strip",
    "data-sp-skip": "1",
    style: {
      background: "var(--bcp-cream)",
      padding: "64px 5%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      maxWidth: "1140px",
      margin: "0 auto",
      padding: "44px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement(Corner, {
    pos: "tl"
  }), /*#__PURE__*/React.createElement(Corner, {
    pos: "br"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)"
    }
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.small,
    style: {
      position: "relative",
      padding: "4px 34px"
    }
  }, i > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: "10%",
      height: "80%",
      width: "1px",
      background: "var(--bcp-sand-300)",
      transformOrigin: "top",
      transform: lit ? "scaleY(1)" : "scaleY(0)",
      transition: "transform 0.5s " + EASE,
      transitionDelay: 0.2 + i * 0.14 + "s"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: lit ? "none" : "translateY(10px)",
      opacity: lit ? 1 : 0,
      transition: "opacity 0.6s " + EASE + ", transform 0.6s " + EASE,
      transitionDelay: 0.15 + i * 0.14 + "s"
    }
  }, /*#__PURE__*/React.createElement(CountNum, {
    value: s.big,
    run: lit,
    style: {
      display: "block",
      fontSize: "clamp(34px, 3vw, 42px)",
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-1px",
      color: s.accent ? "var(--bcp-coral)" : "var(--bcp-navy)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: "2px",
      borderRadius: "2px",
      background: "var(--bcp-coral)",
      width: lit ? "28px" : "0px",
      margin: "16px 0 13px",
      transition: "width 0.6s " + EASE,
      transitionDelay: 0.3 + i * 0.14 + "s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      fontWeight: 500,
      lineHeight: 1.55,
      color: "var(--bcp-gray-600)",
      maxWidth: "185px"
    }
  }, s.small)))))));
}

/* ——— 3 · FEATURE — proof of selectivity ——— */
function RFundFeature() {
  const {
    Button
  } = DS;
  var reduce = false;
  try {
    reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {}
  const [lit, setLit] = React.useState(reduce);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (lit) return;
    var el = ref.current,
      done = false;
    var light = function () {
      if (!done) {
        done = true;
        setLit(true);
      }
    };
    var io = null;
    if (el && "IntersectionObserver" in window) {
      io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            light();
            io.disconnect();
          }
        });
      }, {
        threshold: 0.2
      });
      io.observe(el);
    } else {
      light();
    }
    var t = setTimeout(light, 1800);
    return function () {
      clearTimeout(t);
      if (io) io.disconnect();
    };
  }, [lit]);
  const EASE = "cubic-bezier(0.4,0,0.2,1)";
  const rise = d => ({
    opacity: lit ? 1 : 0,
    transform: lit ? "none" : "translateY(24px)",
    transition: "opacity 0.7s " + EASE + ", transform 0.7s " + EASE,
    transitionDelay: d + "s"
  });
  const stats = [{
    k: "Founded",
    v: "2005"
  }, {
    k: "Total assets",
    v: "$11.8bn"
  }, {
    k: "Strategy launched",
    v: "2014"
  }, {
    k: "Wrapper",
    v: "UK OEIC"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "fund",
    "data-screen-label": "Fund feature",
    "data-sp-skip": "1",
    style: {
      background: "var(--bcp-cream)",
      padding: "104px 5% 100px",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/marks/swirl-teal.svg`,
    alt: "",
    style: {
      position: "absolute",
      right: "-140px",
      top: "-80px",
      width: "520px",
      opacity: 0.1,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      maxWidth: "1240px",
      margin: "0 auto",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px",
      alignItems: "end",
      marginBottom: "26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: rise(0)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "13px",
      marginBottom: "18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "30px",
      height: "2px",
      background: "var(--bcp-coral)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "1.5px",
      color: "var(--bcp-coral)"
    }
  }, "Fund partners")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(38px, 4.2vw, 52px)",
      fontWeight: 600,
      letterSpacing: "-0.8px",
      lineHeight: 1.08,
      color: "var(--bcp-navy)",
      margin: 0
    }
  }, "Focusing on", /*#__PURE__*/React.createElement("br", null), "best in class")), /*#__PURE__*/React.createElement("div", {
    style: rise(0.12)
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      lineHeight: 1.7,
      color: "var(--bcp-gray-600)",
      margin: "0 0 16px 0"
    }
  }, "We collaborate with a select group of exceptional fund managers, offering well-defined, disciplined and proven investment strategies."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      lineHeight: 1.7,
      color: "var(--bcp-gray-600)",
      margin: 0
    }
  }, "Through these partnerships, our goal is to provide fund buyers with the very best investment strategies, built by smaller, lesser-known, but highly experienced managers."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      margin: "0 0 22px 0",
      ...rise(0.22)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "1.5px",
      color: "var(--bcp-navy)"
    }
  }, "Our fund partner"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: "1px",
      background: "var(--bcp-sand-300)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif-accent)",
      fontSize: "15px",
      color: "var(--bcp-sand-400)"
    }
  }, "01 / 01")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-2xl)",
      overflow: "hidden",
      boxShadow: lit ? "var(--shadow-card-hover)" : "none",
      background: "var(--bcp-navy)",
      position: "relative",
      opacity: lit ? 1 : 0,
      transform: lit ? "none" : "translateY(34px)",
      transition: "opacity 0.8s " + EASE + " 0.28s, transform 0.8s " + EASE + " 0.28s, box-shadow 0.8s " + EASE + " 0.5s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "52px 56px 46px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...rise(0.42),
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "2.5px",
      color: "#fff",
      marginBottom: "10px"
    }
  }, "River Road Asset Management"), /*#__PURE__*/React.createElement("div", {
    style: {
      ...rise(0.48),
      fontSize: "12px",
      color: "rgba(255,255,255,0.5)",
      letterSpacing: "0.4px",
      marginBottom: "26px"
    }
  }, "Louisville, Kentucky \xB7 US value equity"), /*#__PURE__*/React.createElement("h3", {
    style: {
      ...rise(0.54),
      fontFamily: "var(--font-serif-accent)",
      fontSize: "40px",
      fontWeight: 400,
      color: "#fff",
      margin: "0 0 16px 0",
      lineHeight: 1.1
    }
  }, "US Large\xA0Cap", /*#__PURE__*/React.createElement("br", null), "Value\xA0Select"), /*#__PURE__*/React.createElement("p", {
    style: {
      ...rise(0.6),
      fontSize: "16px",
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.82)",
      margin: "0 0 34px 0",
      maxWidth: "440px"
    }
  }, "A concentrated, highly active US value strategy \u2014 now available as a UK OEIC, exclusively through BCP, with fee waivers agreed and access on most major platforms."), /*#__PURE__*/React.createElement("div", {
    style: {
      ...rise(0.68),
      display: "flex",
      gap: "16px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    href: "river-road.html"
  }, "View the fund"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: "fund-documents.html"
  }, "Document centre"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: "470px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `url('${A}/images/mountain-view.webp')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      clipPath: lit ? "inset(0 0 0 0)" : "inset(0 0 0 100%)",
      transition: "clip-path 1.1s " + EASE + " 0.4s"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, var(--bcp-navy) 0%, rgba(0,0,92,0.35) 22%, rgba(0,0,92,0) 55%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "24px",
      right: "24px",
      width: "52px",
      height: "52px",
      borderBottom: "3px solid var(--bcp-coral)",
      borderRight: "3px solid var(--bcp-coral)",
      opacity: lit ? 1 : 0,
      transform: lit ? "none" : "translate(-10px,-10px)",
      transition: "opacity 0.6s " + EASE + " 1.1s, transform 0.6s " + EASE + " 1.1s"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      borderTop: "1px solid rgba(255,255,255,0.14)",
      background: "rgba(0,0,0,0.16)"
    }
  }, stats.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d.k,
    style: {
      padding: "22px 32px",
      borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.14)",
      opacity: lit ? 1 : 0,
      transform: lit ? "none" : "translateY(12px)",
      transition: "opacity 0.5s " + EASE + " " + (0.7 + i * 0.1) + "s, transform 0.5s " + EASE + " " + (0.7 + i * 0.1) + "s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "10.5px",
      fontWeight: 600,
      letterSpacing: "1.2px",
      color: "rgba(255,255,255,0.5)",
      marginBottom: "8px"
    }
  }, d.k), /*#__PURE__*/React.createElement(CountNum, {
    value: d.v,
    run: lit,
    style: {
      display: "block",
      fontSize: "26px",
      fontWeight: 600,
      color: "#fff",
      letterSpacing: "-0.3px"
    }
  }))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12.5px",
      color: "var(--bcp-sand-400)",
      margin: "16px 4px 0",
      lineHeight: 1.6
    }
  }, "River Road total assets as at the source date; figures for illustration. Capital is at risk. Past performance does not predict future returns. For professional investors and advisers only.")));
}

/* ——— 4 · WHAT WE DO — editorial index with expanding rows ——— */
function RServices() {
  const [open, setOpen] = React.useState(0);
  const toggle = next => {
    // flushSync guarantees the expand/collapse commits immediately, even in
    // instrumented preview iframes where the async scheduler can stall.
    ReactDOM.flushSync(() => setOpen(next));
  };
  const clusters = [{
    icon: "service-vehicle.svg",
    title: "Establish",
    verb: "Before launch",
    copy: "The route to market, built properly: vehicle establishment with trusted partners, validated by pre-launch research with the buyers themselves — so you launch into demand, not hope.",
    items: ["Vehicle establishment", "Pre-launch market research"],
    image: "mountain-view.webp"
  }, {
    icon: "service-distribution.svg",
    title: "Distribute",
    verb: "In market",
    copy: "A fully outsourced distribution team with established intermediary relationships across the UK, Channel Islands, Ireland and Switzerland — with monthly reporting against agreed KPIs.",
    items: ["Distribution solution", "Distribution strategy", "Monthly sales reporting"],
    image: "wave-banner.webp"
  }, {
    icon: "service-communication.svg",
    title: "Amplify",
    verb: "Always on",
    copy: "Keeping your strategy in front of intermediaries: communication channels, roadshows, and marketing & PR with specialist partners who know this audience.",
    items: ["Communication channels", "Roadshow planning", "Marketing & PR"],
    image: "puffin-cliff.webp"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    "data-screen-label": "What we do",
    style: {
      background: "var(--bcp-cream)",
      padding: "0 5% 110px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/marks/swirl-coral.svg`,
    alt: "",
    style: {
      position: "absolute",
      left: "-160px",
      bottom: "-120px",
      width: "460px",
      opacity: 0.08,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1240px",
      margin: "0 auto",
      position: "relative",
      borderTop: "1px solid var(--bcp-sand-300)",
      paddingTop: "76px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "30px",
      flexWrap: "wrap",
      marginBottom: "26px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "560px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "1.5px",
      textTransform: "none",
      color: "var(--bcp-coral)",
      marginBottom: "14px"
    }
  }, "For fund managers"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(34px, 3.6vw, 46px)",
      fontWeight: 600,
      letterSpacing: "-0.8px",
      lineHeight: 1.15,
      color: "var(--bcp-navy)",
      margin: 0
    }
  }, "What we do for managers")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--bcp-gray-600)",
      margin: 0,
      maxWidth: "360px"
    }
  }, "Eight services across the partnership lifecycle \u2014 one outcome: your strategy distributed properly, without building an in-house team.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--bcp-sand-300)"
    }
  }, clusters.map((c, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: c.title,
      style: {
        borderBottom: "1px solid var(--bcp-sand-300)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => toggle(isOpen ? null : i),
      className: "r-svc-row",
      style: {
        display: "grid",
        gridTemplateColumns: "90px 1fr auto auto",
        alignItems: "center",
        gap: "28px",
        padding: isOpen ? "34px 10px 10px" : "30px 10px",
        cursor: "pointer",
        transition: "padding 0.35s cubic-bezier(0.4,0,0.2,1)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "14px",
        fontWeight: 600,
        letterSpacing: "2px",
        color: isOpen ? "var(--bcp-coral)" : "var(--bcp-sand-400)",
        transition: "color 0.3s ease"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: "clamp(30px, 3.4vw, 46px)",
        fontWeight: 600,
        letterSpacing: "-0.5px",
        margin: 0,
        color: "var(--bcp-navy)",
        lineHeight: 1.1,
        transform: isOpen ? "translateX(6px)" : "none",
        transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)"
      }
    }, c.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "1.5px",
        textTransform: "none",
        color: isOpen ? "var(--bcp-coral)" : "var(--bcp-sand-400)",
        transition: "color 0.3s ease"
      }
    }, c.verb), /*#__PURE__*/React.createElement("span", {
      style: {
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        flexShrink: 0,
        border: isOpen ? "1.5px solid var(--bcp-coral)" : "1.5px solid var(--bcp-sand-300)",
        background: isOpen ? "var(--bcp-coral)" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease"
      }
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: isOpen ? "#fff" : "var(--bcp-navy)",
      strokeWidth: "2",
      strokeLinecap: "round",
      style: {
        width: "18px",
        height: "18px",
        transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        transform: isOpen ? "rotate(45deg)" : "none"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows 0.45s cubic-bezier(0.4,0,0.2,1)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "90px 1.3fr 1fr",
        gap: "28px",
        padding: "8px 10px 40px",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "54px",
        height: "54px",
        background: "var(--bcp-coral)",
        borderRadius: "var(--radius-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `${A}/icons/${c.icon}`,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        filter: "brightness(0) invert(1)"
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "16px",
        lineHeight: 1.7,
        color: "var(--bcp-gray-600)",
        margin: "0 0 22px 0",
        maxWidth: "520px"
      }
    }, c.copy), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "24px"
      }
    }, c.items.map(it => /*#__PURE__*/React.createElement("span", {
      key: it,
      className: "r-chip",
      style: {
        fontSize: "13px",
        fontWeight: 600,
        color: "var(--bcp-navy)",
        background: "var(--bcp-cream-button)",
        padding: "9px 16px",
        borderRadius: "20px",
        transition: "all 0.25s ease",
        cursor: "default"
      }
    }, it))), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: "15px",
        fontWeight: 600,
        color: "var(--bcp-coral)",
        textDecoration: "none"
      }
    }, "Explore all services \u2192")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: "200px",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        backgroundImage: `url('${A}/images/${c.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }
    })))));
  }))));
}

/* ——— 5 · WHO WE ARE — slim ——— */
function RTeam() {
  const faces = ["alan-higgins.png", "julia-warrander.png", "kelly-prior.png"];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Who we are",
    style: {
      background: "var(--bcp-navy)",
      padding: "110px 5%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/people/rodger-kennedy.png`,
    alt: "Rodger Kennedy",
    style: {
      width: "190px",
      borderRadius: "var(--radius-md)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(32px, 3.2vw, 40px)",
      fontWeight: 600,
      letterSpacing: "-0.8px",
      color: "#fff",
      margin: "0 0 18px 0",
      lineHeight: 1.2
    }
  }, "Built on 23 years of UK wealth distribution"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.85)",
      margin: "0 0 24px 0",
      maxWidth: "520px"
    }
  }, "Founder Rodger Kennedy led London wealth distribution at Ninety One. Behind him sits an advisory board of CIOs, fund selectors and product specialists who pressure-test every partnership before we commit."), /*#__PURE__*/React.createElement("a", {
    href: "meet-the-team.html",
    style: {
      fontSize: "15px",
      fontWeight: 600,
      color: "var(--bcp-coral)",
      textDecoration: "none"
    }
  }, "Meet the team \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "14px"
    }
  }, faces.map(f => /*#__PURE__*/React.createElement("img", {
    key: f,
    src: `${A}/people/${f}`,
    alt: "",
    style: {
      width: "84px",
      borderRadius: "var(--radius-md)",
      display: "block"
    }
  })))));
}

/* ——— 6 · LATEST INSIGHTS ——— */
function RInsights() {
  const {
    SectionHeading,
    InsightCard,
    Button
  } = DS;
  const items = [{
    image: `${A}/images/puffin-shuffle.jpg`,
    date: "Dec 2025",
    category: "Market Commentary",
    title: "The Russell Shuffle: When growth meets value",
    excerpt: "As 2025 draws to a close, the line between growth and value is moving."
  }, {
    image: `${A}/images/mountain-view.webp`,
    date: "Oct 2025",
    category: "Market Commentary",
    title: "Why now for active US value equities?",
    excerpt: "Alex Marshall-Tate explores the case for US value equities today."
  }, {
    image: `${A}/images/wave-banner.webp`,
    date: "Jan 2025",
    category: "Partnership News",
    title: "BCP partners with River Road Asset Management",
    excerpt: "A foundational distribution partnership with a leading US value manager."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "insights",
    "data-screen-label": "Insights",
    style: {
      background: "var(--bcp-cream)",
      padding: "100px 5%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1240px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "48px",
      gap: "30px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    title: "Latest insights"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    href: "insights.html"
  }, "View all insights")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "32px"
    }
  }, items.map(it => /*#__PURE__*/React.createElement(InsightCard, _extends({
    key: it.title
  }, it))))));
}

/* ——— 7 · PUFFIN TEASER ——— */
function RPuffin() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Puffin teaser",
    style: {
      background: "var(--bcp-teal-section)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1240px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "300px 1fr auto",
      alignItems: "center",
      gap: "44px",
      padding: "0 5%"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/images/puffin-cliff.webp`,
    alt: "Atlantic Puffin",
    style: {
      width: "100%",
      display: "block",
      alignSelf: "stretch",
      objectFit: "cover",
      minHeight: "200px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "36px 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "clamp(22px, 2vw, 26px)",
      fontWeight: 600,
      letterSpacing: "-0.3px",
      color: "#fff",
      margin: "0 0 12px 0",
      lineHeight: 1.3
    }
  }, "Proud supporters of the Atlantic Puffin"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.65,
      color: "rgba(255,255,255,0.9)",
      margin: 0,
      maxWidth: "520px"
    }
  }, "In association with the Scottish Seabird Centre \u2014 because distinctive, resilient and loyal is a standard worth supporting.")), /*#__PURE__*/React.createElement("a", {
    href: "puffin.html",
    style: {
      fontSize: "15px",
      fontWeight: 600,
      color: "var(--bcp-coral)",
      background: "var(--bcp-cream-card)",
      padding: "15px 26px",
      borderRadius: "var(--radius-md)",
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, "Our story \u2192")));
}

/* ——— 8 · CONTACT — split by intent, functional modals ——— */
function ContactModal({
  open,
  onClose
}) {
  const {
    Button
  } = DS;
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (!open) return;
    setSent(false);
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  const isManager = open === "manager";
  const accent = "var(--bcp-coral)";
  const fields = isManager ? [{
    id: "name",
    label: "Full name",
    type: "text",
    req: true
  }, {
    id: "firm",
    label: "Firm / management company",
    type: "text",
    req: true
  }, {
    id: "email",
    label: "Work email",
    type: "email",
    req: true
  }, {
    id: "strategy",
    label: "Strategy & asset class",
    type: "text",
    req: false
  }, {
    id: "aum",
    label: "Approx. strategy AUM",
    type: "text",
    req: false
  }, {
    id: "message",
    label: "Tell us about your track record",
    type: "textarea",
    req: false
  }] : [{
    id: "name",
    label: "Full name",
    type: "text",
    req: true
  }, {
    id: "firm",
    label: "Firm",
    type: "text",
    req: true
  }, {
    id: "email",
    label: "Work email",
    type: "email",
    req: true
  }, {
    id: "interest",
    label: "Fund / area of interest",
    type: "text",
    req: false
  }, {
    id: "message",
    label: "What would you like to discuss?",
    type: "textarea",
    req: false
  }];
  const meta = isManager ? {
    eyebrow: "For fund managers",
    title: "Partner with us",
    blurb: "Tell us about your strategy and we'll be in touch to start the conversation.",
    submit: "Submit enquiry"
  } : {
    eyebrow: "For fund buyers",
    title: "Arrange a meeting",
    blurb: "Request a meeting, roadshow invitation or fund information.",
    submit: "Request meeting"
  };
  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-brand)",
    fontSize: "15px",
    padding: "13px 15px",
    border: "1px solid var(--bcp-sand-300)",
    borderRadius: "var(--radius-sm)",
    color: "var(--bcp-navy)",
    background: "#fff",
    outline: "none"
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--overlay-modal)",
      zIndex: 10000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      animation: "rcFade 0.2s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "#fff",
      borderRadius: "var(--radius-xl)",
      maxWidth: "600px",
      width: "100%",
      maxHeight: "90vh",
      overflow: "hidden",
      boxShadow: "var(--shadow-modal)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bcp-navy)",
      padding: "28px 36px",
      position: "relative",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1.5px",
      textTransform: "none",
      color: accent,
      marginBottom: "8px"
    }
  }, meta.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "26px",
      fontWeight: 600,
      color: "#fff",
      margin: 0,
      lineHeight: 1.2,
      paddingRight: "36px"
    }
  }, meta.title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: "absolute",
      top: "24px",
      right: "24px",
      background: "transparent",
      border: "none",
      color: "#fff",
      fontSize: "30px",
      lineHeight: 1,
      cursor: "pointer",
      opacity: 0.8,
      width: "32px",
      height: "32px"
    }
  }, "\xD7")), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "56px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "66px",
      height: "66px",
      borderRadius: "50%",
      background: "rgba(31,138,91,0.12)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 22px"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#1F8A5B",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: "30px",
      height: "30px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "22px",
      fontWeight: 600,
      color: "var(--bcp-navy)",
      margin: "0 0 12px 0"
    }
  }, "Thank you \u2014 we'll be in touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.65,
      color: "var(--bcp-gray-600)",
      margin: "0 0 28px 0",
      maxWidth: "400px",
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, "Your enquiry has been received. A member of the BCP team will respond shortly. You can also reach us directly at ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:rodger@boutiquecapitalpartners.co.uk",
    style: {
      color: accent
    }
  }, "rodger@boutiquecapitalpartners.co.uk"), "."), /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, "Close")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      ReactDOM.flushSync(() => setSent(true));
    },
    style: {
      padding: "30px 36px 34px",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.6,
      color: "var(--bcp-gray-600)",
      margin: "0 0 24px 0"
    }
  }, meta.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px"
    }
  }, fields.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.id,
    style: {
      gridColumn: f.type === "textarea" ? "1 / -1" : "auto"
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--bcp-navy)",
      marginBottom: "7px"
    }
  }, f.label, f.req ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent
    }
  }, " *") : null), f.type === "textarea" ? /*#__PURE__*/React.createElement("textarea", {
    rows: 3,
    required: f.req,
    style: {
      ...inputStyle,
      resize: "vertical"
    },
    onFocus: e => {
      e.target.style.borderColor = accent;
    },
    onBlur: e => {
      e.target.style.borderColor = "var(--bcp-sand-300)";
    }
  }) : /*#__PURE__*/React.createElement("input", {
    type: f.type,
    required: f.req,
    style: inputStyle,
    onFocus: e => {
      e.target.style.borderColor = accent;
    },
    onBlur: e => {
      e.target.style.borderColor = "var(--bcp-sand-300)";
    }
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12px",
      lineHeight: 1.6,
      color: "var(--bcp-sand-400)",
      margin: "18px 0 22px 0"
    }
  }, "For professional/institutional investors and advisers only. By submitting, you consent to BCP contacting you about your enquiry."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "14px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    arrow: true
  }, meta.submit), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    style: {
      background: "transparent",
      border: "none",
      fontFamily: "var(--font-brand)",
      fontSize: "14px",
      fontWeight: 600,
      color: "var(--bcp-gray-600)",
      cursor: "pointer"
    }
  }, "Cancel")))));
}
function RContact() {
  const {
    Button
  } = DS;
  const [modal, setModal] = React.useState(null);
  const paths = [{
    label: "For fund managers",
    title: "Best-in-class fund manager? Let's have a conversation.",
    body: "Tell us about your strategy, track record and ambitions for the UK and European markets.",
    cta: /*#__PURE__*/React.createElement(Button, {
      arrow: true,
      onClick: () => ReactDOM.flushSync(() => setModal("manager"))
    }, "Partner with us")
  }, {
    label: "For fund buyers",
    title: "Fund information, meetings and roadshow invitations.",
    body: "Direct access to fund documents, manager meetings and our intermediary programme.",
    cta: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      arrow: true,
      onClick: () => ReactDOM.flushSync(() => setModal("buyer"))
    }, "Arrange a meeting")
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    "data-screen-label": "Contact",
    style: {
      background: "var(--bcp-navy)",
      padding: "100px 5%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1100px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "42px",
      fontWeight: 600,
      letterSpacing: "-0.5px",
      color: "#fff",
      textAlign: "center",
      margin: "0 0 14px 0"
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      color: "rgba(255,255,255,0.85)",
      textAlign: "center",
      margin: "0 0 56px 0"
    }
  }, "We'd love to hear from you."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "26px"
    }
  }, paths.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.label,
    style: {
      border: "2px solid var(--bcp-coral)",
      borderRadius: "var(--radius-xl)",
      padding: "40px 42px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "1.5px",
      textTransform: "none",
      color: "var(--bcp-coral)",
      marginBottom: "14px"
    }
  }, p.label), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "23px",
      fontWeight: 600,
      color: "#fff",
      margin: "0 0 12px 0",
      lineHeight: 1.35
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.65,
      color: "rgba(255,255,255,0.85)",
      margin: "0 0 28px 0"
    }
  }, p.body), p.cta))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontSize: "15px",
      color: "rgba(255,255,255,0.85)",
      margin: "44px 0 0 0"
    }
  }, "+44 (0)20 4619 3222 \xA0\xB7\xA0", " ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:rodger@boutiquecapitalpartners.co.uk",
    style: {
      color: "var(--bcp-coral)",
      textDecoration: "none"
    }
  }, "rodger@boutiquecapitalpartners.co.uk"))), /*#__PURE__*/React.createElement(ContactModal, {
    open: modal,
    onClose: () => ReactDOM.flushSync(() => setModal(null))
  }));
}
window.RedesignSections = {
  RHero,
  RSelectivity,
  RFundFeature,
  RServices,
  RTeam,
  RInsights,
  RPuffin,
  RContact
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "redesign-sections.jsx", error: String((e && e.message) || e) }); }

// riverroad-sections.jsx
try { (() => {
// River Road fund page — FAITHFUL recreation of the live dedicated page
// (boutiquecapitalpartners.co.uk/river-road-asset-management/), polished into
// the design system. COPY LOCK: every River Road sentence, stat, footnote and
// disclosure below is reproduced VERBATIM from the signed-off source. Layout is
// polished; words are not changed. Exposes window.RiverRoadSections.

const A = "assets";
const DS = window.BoutiqueCapitalPartnersDesignSystem_7ef874;

/* Reusable 16:9 YouTube embed, optional coral corner brackets */
function Video({
  id,
  title,
  radius = "10px",
  brackets = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      paddingBottom: "56.25%",
      height: 0,
      borderRadius: radius,
      overflow: "hidden",
      boxShadow: "0 14px 44px rgba(0,0,5,0.35)"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: `https://www.youtube.com/embed/${id}`,
    title: title || "YouTube video player",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
    allowFullScreen: true,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      border: 0
    }
  })), brackets ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "-10px",
      left: "-10px",
      width: "34px",
      height: "34px",
      borderTop: "3px solid var(--bcp-coral)",
      borderLeft: "3px solid var(--bcp-coral)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "-10px",
      right: "-10px",
      width: "34px",
      height: "34px",
      borderBottom: "3px solid var(--bcp-coral)",
      borderRight: "3px solid var(--bcp-coral)"
    }
  })) : null);
}

/* Decorative swirl watermark */
function Swirl({
  tone = "teal",
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: `${A}/marks/swirl-${tone}.svg`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      pointerEvents: "none",
      ...style
    }
  });
}

/* ——— Breadcrumb (wayfinding) ——— */
function RRBreadcrumb() {
  const crumbs = ["Fund partners", "River Road Asset Management"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bcp-cream)",
      borderBottom: "1px solid var(--bcp-sand-300)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1240px",
      margin: "0 auto",
      padding: "16px 5%",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flexWrap: "wrap",
      fontFamily: "var(--font-brand)"
    }
  }, crumbs.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: c
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--bcp-sand-300)",
      fontSize: "13px"
    }
  }, "/") : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: i === crumbs.length - 1 ? 600 : 500,
      color: i === crumbs.length - 1 ? "var(--bcp-navy)" : "var(--bcp-gray-600)"
    }
  }, c)))));
}

/* ——— 1 · HERO — cream: intro, logo, navy stat cards, info cards, endorsement ——— */
function RRHero() {
  const stats = [{
    n: "$11.8bn",
    label: "Total Firm Assets¹",
    desc: "Primarily institutional"
  }, {
    n: "2005",
    label: "Founded",
    desc: "Proven track record"
  }, {
    n: "22 yrs",
    label: "Avg PM Experience²",
    desc: "Seasoned professionals"
  }, {
    n: "46",
    label: "Associates",
    desc: "17 investment pros"
  }];
  const StatCard = ({
    s
  }) => {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        position: "relative",
        padding: "30px 26px",
        borderRadius: "18px",
        overflow: "hidden",
        background: "var(--bcp-navy)",
        boxShadow: h ? "0 20px 46px rgba(0,0,92,0.26)" : "0 3px 12px rgba(0,0,92,0.12)",
        transform: h ? "translateY(-6px)" : "none",
        transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      "data-countup": s.n,
      style: {
        fontSize: "clamp(38px, 3.4vw, 48px)",
        fontWeight: 600,
        color: "#FFB98A",
        marginBottom: "8px",
        lineHeight: 1,
        letterSpacing: "-1px"
      }
    }, s.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "15px",
        fontWeight: 600,
        color: "#fff",
        marginBottom: "5px",
        letterSpacing: "0.2px"
      }
    }, s.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "12.5px",
        fontWeight: 500,
        color: "rgba(255,255,255,0.62)",
        lineHeight: 1.45
      }
    }, s.desc));
  };
  const Pill = ({
    children
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "13.5px",
      fontWeight: 500,
      color: "var(--bcp-navy)",
      padding: "8px 16px",
      borderRadius: "100px",
      border: "1px solid rgba(0,0,92,0.22)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      background: "var(--bcp-coral)"
    }
  }), children);
  const InfoCard = ({
    dot,
    label,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bcp-navy)",
      padding: "26px 30px",
      borderRadius: "18px",
      boxShadow: "0 3px 12px rgba(0,0,92,0.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      background: dot
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "1px",
      textTransform: "none",
      color: dot
    }
  }, label)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      fontWeight: 500,
      color: "rgba(255,255,255,0.9)",
      lineHeight: 1.6,
      margin: 0
    }
  }, children));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Fund hero",
    style: {
      position: "relative",
      background: "var(--bcp-cream)",
      padding: "76px 5% 70px",
      fontFamily: "var(--font-brand)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/images/mountain-view.webp`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      width: "54%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.16,
      maskImage: "linear-gradient(90deg, transparent 0%, #000 75%)",
      WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 75%)"
    }
  }), /*#__PURE__*/React.createElement(Swirl, {
    tone: "teal",
    style: {
      width: "520px",
      right: "-120px",
      top: "-110px",
      opacity: 0.12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "-160px",
      bottom: "-120px",
      width: "640px",
      height: "360px",
      background: "radial-gradient(ellipse, rgba(222,93,93,0.12), transparent 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "1240px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "30px",
      marginBottom: "30px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "none",
      color: "var(--bcp-coral)",
      paddingTop: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "34px",
      height: "2px",
      background: "var(--bcp-coral)"
    }
  }), "Introducing"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--radius-lg)",
      padding: "20px 26px",
      boxShadow: "0 10px 30px rgba(0,0,92,0.08)",
      border: "1px solid var(--border-card)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/logos/river-road-logo.png`,
    alt: "River Road Asset Management",
    style: {
      width: "100%",
      maxWidth: "210px",
      height: "auto",
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(38px, 5.4vw, 64px)",
      fontWeight: 600,
      lineHeight: 1.04,
      color: "var(--bcp-navy)",
      margin: "0 0 22px 0",
      letterSpacing: "-1px",
      maxWidth: "780px"
    }
  }, "River Road ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--bcp-coral)"
    }
  }, "Asset Management")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "clamp(17px, 1.6vw, 20px)",
      fontWeight: 500,
      lineHeight: 1.65,
      color: "var(--bcp-gray-700)",
      margin: "0 0 26px 0",
      maxWidth: "620px"
    }
  }, "US equity investment boutique delivering disciplined value investing through their distinctive Absolute Value\xAE philosophy since 2005."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
      marginBottom: "52px"
    }
  }, /*#__PURE__*/React.createElement(Pill, null, "Louisville, Kentucky"), /*#__PURE__*/React.createElement(Pill, null, "AMG Affiliate")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      marginBottom: "20px"
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(StatCard, {
    key: s.label,
    s: s
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12.5px",
      color: "var(--bcp-sand-400)",
      fontStyle: "italic",
      margin: "0 0 40px 4px"
    }
  }, "As of 31st December 2025"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement(InfoCard, {
    dot: "var(--bcp-coral)",
    label: "Ownership & Culture"
  }, "Significant employee ownership\xB3 with 15 shareholders, fostering low turnover and a collaborative environment"), /*#__PURE__*/React.createElement(InfoCard, {
    dot: "#5BBFD6",
    label: "Investment Focus"
  }, "Founded in 2005, specializing in disciplined value investing for institutional clients worldwide")))), /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Fund disclaimer",
    style: {
      background: "var(--bcp-cream)",
      padding: "0 5% 36px",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1240px",
      margin: "0 auto",
      borderTop: "1px solid var(--bcp-sand-300)",
      paddingTop: "26px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12px",
      color: "#7a756c",
      fontWeight: 400,
      lineHeight: 1.65,
      margin: 0
    }
  }, "For professional investor use only. Boutique Capital Partners Limited (FRN 1027595) (\"BCP\") is an appointed representative of Thornbridge Investment Management LLP (FRN 713859), which is authorised and regulated by the Financial Conduct Authority. BCP is appointed by River Road Asset Management, LLC (\"River Road\") to solicit clients or investors to be a client of River Road. BCP is not a current client or investor of River Road. River Road will pay (or procure to be paid) cash compensation to BCP for the solicitation services BCP provides. BCP, due to such compensation, has an incentive to recommend River Road and its strategies, resulting in a material conflict of interest. For more important disclosures, please click here:", " ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--bcp-coral)",
      textDecoration: "underline"
    }
  }, "River Road Boutique Capital Partners Endorsement Disclosure.pdf")))));
}

/* ——— 2 · STRATEGY + ASSET TV — navy ——— */
function RRStrategy() {
  const {
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Strategy",
    style: {
      position: "relative",
      background: "var(--bcp-navy)",
      padding: "90px 5%",
      fontFamily: "var(--font-brand)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Swirl, {
    tone: "coral",
    style: {
      width: "460px",
      left: "-150px",
      bottom: "-130px",
      opacity: 0.12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "1240px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rr-reveal",
    style: {
      textAlign: "center",
      marginBottom: "44px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(32px, 4vw, 50px)",
      fontWeight: 600,
      lineHeight: 1.1,
      color: "var(--bcp-coral)",
      margin: "0 0 16px 0"
    }
  }, "US Large Cap Value Select"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: "60px",
      height: "3px",
      borderRadius: "3px",
      background: "var(--bcp-coral)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "50px",
      alignItems: "center",
      marginBottom: "70px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rr-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: 1.5,
      color: "#fff",
      margin: "0 0 22px 0"
    }
  }, "US Large Cap Value Select is a concentrated portfolio consisting of 20 to 30 holdings\u2074. Its disciplined process and highly active trading approach has consistently delivered attractive performance since 2014\u2075."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      fontWeight: 500,
      lineHeight: 1.65,
      color: "rgba(255,255,255,0.85)",
      margin: "0 0 32px 0"
    }
  }, "The team utilizes a balanced approach to diversification and follows a structured sell discipline, avoiding averaging down on losing positions once a target holding is established."), /*#__PURE__*/React.createElement(Button, {
    arrow: true,
    href: "fund-documents.html"
  }, "Fund information and document centre")), /*#__PURE__*/React.createElement("div", {
    className: "rr-reveal"
  }, /*#__PURE__*/React.createElement(Video, {
    id: "DCkmQ-53iEo",
    title: "Asset TV \u2014 River Road US Large Cap Value Select",
    brackets: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.14)",
      paddingTop: "40px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "50px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      fontWeight: 500,
      lineHeight: 1.6,
      color: "#fff",
      margin: "0 0 16px 0"
    }
  }, "Asset TV\u2019s guest host, Kelly Prior, is joined by Daniel Johnson, CFA, CPA, Portfolio Manager of the River Road US Large Cap Value Select strategy."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      fontWeight: 500,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.85)",
      margin: 0
    }
  }, "Daniel introduces the strategy, outlines River Road\u2019s Absolute Value\xAE philosophy and offers insights into their investment approach on this 10-year-old strategy.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "13px",
      fontWeight: 500,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.6)",
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "rgba(255,255,255,0.8)"
    }
  }, "Disclosure"), ": River Road does not guarantee the future performance of its investment approach or processes or any specific level of performance, the success of any investment decision or strategy that River Road uses or may use, or the success of River Road\u2019s overall management of any portfolio. The outcome of River Road\u2019s investment approach, processes, and investment decisions are subject to various market, currency, economic, political, and business risks. River Road\u2019s investment approach, processes, and investment decisions will not always be profitable. Additionally, River Road\u2019s investment approach and style has and can be out of favor. For example, value stocks may underperform growth stocks and stocks in other broad style categories (and the stock market as a whole) during given periods."))));
}

/* ——— 3 · PHILOSOPHY — cream framed centerpiece ——— */
function RRPhilosophy() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Philosophy",
    style: {
      position: "relative",
      background: "var(--bcp-teal-section)",
      padding: "110px 5%",
      fontFamily: "var(--font-brand)",
      textAlign: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Swirl, {
    tone: "teal",
    style: {
      width: "640px",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      opacity: 0.12
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "rr-reveal",
    style: {
      position: "relative",
      maxWidth: "1040px",
      margin: "0 auto",
      padding: "60px 56px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "56px",
      height: "56px",
      borderTop: "3px solid var(--bcp-coral)",
      borderLeft: "3px solid var(--bcp-coral)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "56px",
      height: "56px",
      borderBottom: "3px solid var(--bcp-coral)",
      borderRight: "3px solid var(--bcp-coral)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-serif-accent)",
      fontSize: "72px",
      lineHeight: 0.6,
      color: "var(--bcp-coral)",
      marginBottom: "22px"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(28px, 3.4vw, 42px)",
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#fff",
      margin: "0 0 18px 0"
    }
  }, "River Road's ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--bcp-coral)"
    }
  }, "Absolute Value\xAE"), " investment philosophy"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "clamp(20px, 2.4vw, 28px)",
      fontWeight: 400,
      lineHeight: 1.45,
      color: "rgba(255,255,255,0.9)",
      margin: 0
    }
  }, "occupies a unique position between deep value and relative value approaches, aiming to deliver attractive and sustainable returns with an emphasis on downside risk.")));
}

/* ——— 4 · IN CONVERSATION — navy, two videos ——— */
function RRConversation() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "In conversation",
    style: {
      position: "relative",
      background: "var(--bcp-navy)",
      padding: "90px 5%",
      fontFamily: "var(--font-brand)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Swirl, {
    tone: "coral",
    style: {
      width: "440px",
      right: "-140px",
      top: "60px",
      opacity: 0.1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "1240px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(32px, 4vw, 50px)",
      fontWeight: 600,
      lineHeight: 1.1,
      color: "var(--bcp-coral)",
      margin: "0 0 4px 0"
    }
  }, "In conversation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(22px, 2.6vw, 30px)",
      fontWeight: 500,
      lineHeight: 1.3,
      color: "#fff",
      margin: "0 0 26px 0"
    }
  }, "with River Road"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      fontWeight: 500,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.85)",
      margin: "0 0 12px 0",
      maxWidth: "760px"
    }
  }, "During River Road\u2019s visit to the UK in November 2024, two of their team members sat down with Richard Philbin, CIO (Investment Solutions) at Hawksmoor Investment Management."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      fontWeight: 700,
      lineHeight: 1.6,
      color: "#fff",
      margin: "0 0 14px 0",
      maxWidth: "760px"
    }
  }, "River Road CEO, Andrew Beck, and Co-Portfolio Manager of the Large Cap Value Select Fund, Daniel Johnson, provide candid insights into both firm and fund."), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "clamp(20px, 2.4vw, 30px)",
      fontWeight: 500,
      color: "var(--bcp-coral)",
      margin: "0 0 40px 0"
    }
  }, "Watch the videos to find our more"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rr-reveal"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px 0",
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "18px",
      fontWeight: 700,
      color: "var(--bcp-coral)"
    }
  }, "About River Road"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "17px",
      fontWeight: 700,
      color: "#fff"
    }
  }, "Andrew Beck, CEO")), /*#__PURE__*/React.createElement(Video, {
    id: "yRYQRZpuQqM",
    title: "About River Road \u2014 Andrew Beck, CEO",
    brackets: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "rr-reveal",
    style: {
      animationDelay: "100ms"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px 0",
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "18px",
      fontWeight: 700,
      color: "var(--bcp-coral)"
    }
  }, "About Large Cap Value Select"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "17px",
      fontWeight: 700,
      color: "#fff"
    }
  }, "Daniel Johnson, Portfolio Manager")), /*#__PURE__*/React.createElement(Video, {
    id: "0NUouts_0c0",
    title: "About Large Cap Value Select \u2014 Daniel Johnson",
    brackets: true
  })))));
}

/* ——— 5 · WEALTHWISE INSIGHTS — cream, interactive playlist ——— */
const WW_VIDEOS = [{
  id: "yj9W9EaWC9Y",
  title: "Introducing River Road",
  speaker: "Daniel Johnson, Portfolio Manager",
  description: "Daniel introduces River Road, sharing the firm's heritage, investment philosophy, and what makes their approach to value investing distinctive."
}, {
  id: "semIWKk2DXM",
  title: "What Differentiates River Road From Its Peers",
  speaker: "Daniel Johnson, Portfolio Manager",
  description: "Exploring the unique aspects of River Road's investment approach and what sets them apart from other value managers."
}, {
  id: "8NQ38nblpEY",
  title: "Exploring Current Themes Fitting The Portfolio",
  speaker: "Daniel Johnson, Portfolio Manager",
  description: "Current themes and opportunities Daniel finds most interesting in the market today and how they fit the portfolio strategy."
}, {
  id: "gqpilH9dRNs",
  title: "Where Does LCVS Fit In Client Portfolios?",
  speaker: "Daniel Johnson, Portfolio Manager",
  description: "How River Road's Large Cap Value Select strategy fits into client portfolios and applications for different types of investors."
}];
function RRWealthWise() {
  const [current, setCurrent] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(false);
  const active = WW_VIDEOS[current];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "WealthWise",
    style: {
      background: "var(--bcp-cream)",
      padding: "90px 5%",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1240px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(32px, 4vw, 50px)",
      fontWeight: 600,
      lineHeight: 1.1,
      color: "var(--bcp-coral)",
      margin: "0 0 14px 0",
      textAlign: "center"
    }
  }, "WealthWise Insights"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "60px",
      height: "3px",
      borderRadius: "3px",
      background: "var(--bcp-coral)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      fontWeight: 500,
      lineHeight: 1.6,
      color: "#000",
      margin: "0 auto 44px",
      maxWidth: "760px",
      textAlign: "center"
    }
  }, "River Road\u2019s leadership share their perspectives on value investing, market dynamics, and the principles driving their Absolute Value\xAE philosophy."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: "40px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "24px"
    }
  }, /*#__PURE__*/React.createElement(Video, {
    key: active.id + autoplay,
    id: autoplay ? active.id + "?autoplay=1" : active.id,
    radius: "8px",
    title: active.title
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "clamp(22px, 2.4vw, 30px)",
      fontWeight: 500,
      color: "var(--bcp-coral)",
      margin: "0 0 10px 0",
      lineHeight: 1.3
    }
  }, active.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      fontWeight: 500,
      color: "var(--bcp-navy)",
      margin: "0 0 14px 0"
    }
  }, active.speaker), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      fontWeight: 500,
      color: "#4a5a6a",
      lineHeight: 1.6,
      margin: 0
    }
  }, active.description)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: "2px solid var(--bcp-coral)",
      paddingBottom: "12px",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "13px",
      fontWeight: 600,
      letterSpacing: "1.5px",
      color: "var(--bcp-navy)",
      margin: 0
    }
  }, "MORE IN THIS SERIES")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "16px"
    }
  }, WW_VIDEOS.map((v, i) => i === current ? null : /*#__PURE__*/React.createElement("div", {
    key: v.id,
    className: "ww-thumb",
    onClick: () => {
      setCurrent(i);
      setAutoplay(true);
    },
    style: {
      display: "flex",
      gap: "16px",
      padding: "14px",
      borderRadius: "8px",
      background: "rgba(255,255,255,0.5)",
      cursor: "pointer",
      transition: "all 0.2s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "140px",
      minWidth: "140px",
      height: "79px",
      borderRadius: "6px",
      overflow: "hidden",
      background: "linear-gradient(145deg,#3a4a6a,#1e2a4a)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`,
    alt: v.title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "38px",
      height: "27px",
      background: "#cc0000",
      borderRadius: "6px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 0,
      height: 0,
      borderTop: "6px solid transparent",
      borderBottom: "6px solid transparent",
      borderLeft: "10px solid #fff",
      marginLeft: "2px"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "15px",
      fontWeight: 500,
      color: "var(--bcp-coral)",
      margin: "0 0 6px 0",
      lineHeight: 1.3
    }
  }, v.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "12px",
      fontWeight: 500,
      color: "var(--bcp-navy)",
      margin: 0
    }
  }, v.speaker)))))))));
}

/* ——— 6 · DISCLOSURES & FOOTNOTES — cream ——— */
function RRDisclosures() {
  const notes = ["¹As of 2025 December 31. Total assets include assets under management as defined by GIPS® ($9.9bn) and advisory-only assets ($2.0bn).", "²Excludes associate portfolio managers.", "³River Road executives and senior professionals hold 21% of the firm’s equity.", "⁴Investment guidelines (such as number of holdings) are working policies and, as such, may vary depending on market conditions and other factors and are subject to change without notification.", "⁵Strategy inception date: 1 November 2014. River Road’s investment approach, processes, and investment decisions will not always be profitable. River Road’s investment approach and style have and can be out of favor."];
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Disclosures",
    style: {
      background: "var(--bcp-cream)",
      padding: "60px 5% 80px",
      fontFamily: "var(--font-brand)",
      borderTop: "1px solid var(--bcp-sand-300)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1000px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      fontWeight: 700,
      color: "var(--bcp-navy)",
      margin: "0 0 20px 0"
    }
  }, "Past performance is no guarantee of future results. There is a risk that invested capital may be lost."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "8px"
    }
  }, notes.map((n, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: "12px",
      lineHeight: 1.55,
      color: "var(--bcp-gray-600)",
      margin: 0
    }
  }, n)))));
}
window.RiverRoadSections = {
  RRBreadcrumb,
  RRHero,
  RRStrategy,
  RRPhilosophy,
  RRConversation,
  RRWealthWise,
  RRDisclosures
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "riverroad-sections.jsx", error: String((e && e.message) || e) }); }

// site-polish.js
try { (() => {
/* BCP site polish — shared elevation layer across all pages.
   Plain JS (NOT babel). Include once per page, just before </body>:
     <script src="site-polish.js"></script>
   Everything here is non-destructive and fails safe: if anything errors or
   IntersectionObserver is missing, content stays fully visible. Respects
   prefers-reduced-motion. Re-runs as the React app mounts/streams. */
(function () {
  "use strict";

  var REDUCED = false;
  try {
    REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {}

  /* ---- inject shared CSS ---- */
  var EASE = "cubic-bezier(.22,1,.36,1)";
  var css = ["#sp-progress{position:fixed;top:0;left:0;height:3px;width:0;z-index:9999;", "background:linear-gradient(90deg,#DE5D5D,#E88A8A);transition:width .12s linear;pointer-events:none}", "header{transition:box-shadow .3s ease,padding .3s ease}", "header.sp-scrolled{box-shadow:0 6px 24px rgba(0,0,92,.10)!important}", ".sp-reveal{opacity:0;transform:translateY(18px);filter:blur(3px);", "transition:opacity .8s " + EASE + ",transform .8s " + EASE + ",filter .8s " + EASE + ";will-change:opacity,transform,filter}", ".sp-reveal.sp-in{opacity:1;transform:none;filter:none}", ".sp-c{opacity:0;transform:translateY(16px);", "transition:opacity .66s " + EASE + ",transform .66s " + EASE + ";will-change:opacity,transform}", ".sp-c.sp-c-in{opacity:1;transform:none}", "#sp-fade{position:fixed;inset:0;background:var(--bcp-cream,#F7EFD9);opacity:0;pointer-events:none;z-index:99999;transition:opacity .3s ease}", "#sp-fade.sp-show{opacity:1}", "@keyframes bcpDropIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}", /* ===== Responsive layer — overrides desktop inline styles on small screens ===== */
  "@media (max-width:820px){", "[style*='grid-template-columns']{grid-template-columns:1fr !important;}", "[style*='repeat(4']{grid-template-columns:repeat(2,1fr) !important;}", "[style*='repeat(6']{grid-template-columns:repeat(2,1fr) !important;}", "[style*='width:'][style*='px']{max-width:100% !important;}", "section{padding-top:60px !important;padding-bottom:60px !important;}", "header>div{flex-wrap:wrap !important;gap:10px !important;row-gap:6px !important;}", "header nav ul{flex-wrap:wrap !important;column-gap:14px !important;row-gap:2px !important;justify-content:flex-start !important;}", "header nav a{font-size:15px !important;padding-top:6px !important;padding-bottom:6px !important;}", "header img{max-width:170px !important;height:auto !important;}", /* hero: stack instead of overlapping absolute cards */
  "[data-screen-label='Hero']{flex-direction:column !important;align-items:flex-start !important;justify-content:center !important;min-height:auto !important;padding-top:96px !important;padding-bottom:60px !important;}", "[data-screen-label='Hero'] [style*='bottom: 48px']{position:static !important;margin:34px 0 0 0 !important;left:auto !important;right:auto !important;bottom:auto !important;}", "[data-screen-label='Hero'] [style*='bottom: 48px']>a>div{width:100% !important;max-width:360px !important;}", "[data-screen-label='Hero'] [style*='bottom: 30px']{display:none !important;}", "}", "@media (max-width:600px){", "[style*='repeat(4']{grid-template-columns:1fr 1fr !important;}", "[style*='repeat(6']{grid-template-columns:1fr 1fr !important;}", "[style*='min-width:']{min-width:0 !important;}", "h1{letter-spacing:-0.5px !important;}", "}"].join("");
  var style = document.createElement("style");
  style.id = "sp-style";
  style.textContent = css;
  document.head.appendChild(style);

  /* ---- scroll progress bar + sticky-header shadow ---- */
  var bar = document.createElement("div");
  bar.id = "sp-progress";
  document.body.appendChild(bar);

  /* ---- page-transition overlay (fade out on internal navigation) ---- */
  var fade = document.createElement("div");
  fade.id = "sp-fade";
  document.body.appendChild(fade);
  function isInternal(href, a) {
    if (!href) return false;
    if (a.getAttribute("target") === "_blank") return false;
    if (href[0] === "#") return false;
    if (/^(mailto:|tel:|https?:\/\/|\/\/)/i.test(href)) return false;
    return /\.html(\?|#|$)/i.test(href);
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a") : null;
    if (!a) return;
    var href = a.getAttribute("href");
    if (!isInternal(href, a)) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    if (REDUCED) {
      window.location.href = href;
      return;
    }
    fade.classList.add("sp-show");
    setTimeout(function () {
      window.location.href = href;
    }, 260);
  });
  window.addEventListener("pageshow", function () {
    fade.classList.remove("sp-show");
  });

  /* ---- parallax (fail-open; JS owns the overscan so it can never gap) ---- */
  var plxImgs = [];
  var plxBgs = [];
  function setupParallax() {
    if (REDUCED) return;
    var imgs = document.querySelectorAll("img[data-parallax]:not([data-plx])");
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      img.setAttribute("data-plx", "1");
      var p = img.parentElement;
      if (p) {
        if (getComputedStyle(p).position === "static") p.style.position = "relative";
        p.style.overflow = "hidden";
      }
      img.style.position = "absolute";
      img.style.left = "0";
      img.style.width = "100%";
      img.style.height = "118%";
      img.style.top = "-9%";
      img.style.objectFit = "cover";
      img.style.willChange = "transform";
      plxImgs.push(img);
    }
    var bgs = document.querySelectorAll("[data-parallax-bg]:not([data-plx])");
    for (var j = 0; j < bgs.length; j++) {
      bgs[j].setAttribute("data-plx", "1");
      plxBgs.push(bgs[j]);
    }
  }
  function onParallax() {
    if (REDUCED) return;
    var vh = window.innerHeight;
    for (var i = 0; i < plxImgs.length; i++) {
      var img = plxImgs[i],
        p = img.parentElement;
      if (!p) continue;
      var r = p.getBoundingClientRect();
      if (r.bottom < -40 || r.top > vh + 40) continue;
      var prog = (r.top + r.height / 2 - vh / 2) / vh;
      img.style.transform = "translateY(" + (-prog * 38).toFixed(1) + "px)";
    }
    for (var k = 0; k < plxBgs.length; k++) {
      var el = plxBgs[k];
      var rr = el.getBoundingClientRect();
      if (rr.bottom < -40 || rr.top > vh + 40) continue;
      var pg = (rr.top + rr.height / 2 - vh / 2) / vh;
      el.style.backgroundPosition = "center calc(50% + " + (-pg * 22).toFixed(1) + "px)";
    }
  }
  function onScroll() {
    var st = window.pageYOffset || document.documentElement.scrollTop || 0;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? st / h * 100 : 0) + "%";
    var header = document.querySelector("header");
    if (header) {
      if (st > 24) header.classList.add("sp-scrolled");else header.classList.remove("sp-scrolled");
    }
    onParallax();
  }
  window.addEventListener("scroll", onScroll, {
    passive: true
  });
  window.addEventListener("resize", onScroll, {
    passive: true
  });

  /* ---- count-up for [data-countup] elements ---- */
  function countUp(el) {
    if (el.__spCounted) return;
    el.__spCounted = true;
    var raw = (el.getAttribute("data-countup") || el.textContent || "").trim();
    var m = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (!m) return;
    var prefix = m[1],
      numStr = m[2].replace(/,/g, ""),
      suffix = m[3];
    var target = parseFloat(numStr);
    if (isNaN(target)) return;
    var decimals = (numStr.split(".")[1] || "").length;
    // Don't animate bare 4-digit years (e.g. "2005") — counting up reads oddly.
    if (!prefix && !suffix && decimals === 0 && /^(19|20)\d{2}$/.test(numStr)) return;
    if (REDUCED) {
      el.textContent = prefix + target.toFixed(decimals) + suffix;
      return;
    }
    var dur = 1100,
      t0 = null;
    var ease = function (p) {
      return 1 - Math.pow(1 - p, 3);
    };
    function fmt(v) {
      var s = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-GB");
      return prefix + s + suffix;
    }
    function step(now) {
      if (!t0) t0 = now;
      var p = Math.min(1, (now - t0) / dur);
      el.textContent = fmt(target * ease(p));
      if (p < 1) requestAnimationFrame(step);else el.textContent = prefix + (decimals ? target.toFixed(decimals) : target.toLocaleString("en-GB")) + suffix;
    }
    requestAnimationFrame(step);
  }

  /* ---- reveal-on-scroll w/ child stagger (safe: only below-fold elements hidden) ---- */
  // Find a set of children within a section to cascade in. Prefers an explicit
  // [data-sp-stagger] container, else the densest grid/flex row (cards, list).
  function findStagger(section) {
    var ex = section.querySelector("[data-sp-stagger]");
    if (ex) {
      var k0 = [];
      for (var a = 0; a < ex.children.length; a++) if (ex.children[a].nodeType === 1) k0.push(ex.children[a]);
      if (k0.length >= 2) return k0;
    }
    var all = section.querySelectorAll("div,ul");
    var best = null,
      bestN = 0;
    for (var i = 0; i < all.length; i++) {
      var c = all[i],
        disp;
      try {
        disp = getComputedStyle(c).display;
      } catch (e) {
        continue;
      }
      if (disp === "grid" || disp === "flex") {
        var kids = [];
        for (var k = 0; k < c.children.length; k++) if (c.children[k].nodeType === 1) kids.push(c.children[k]);
        if (kids.length >= 2 && kids.length <= 10 && kids.length > bestN) {
          best = kids;
          bestN = kids.length;
        }
      }
    }
    return best;
  }
  function fireCountups(el) {
    var c = el.querySelectorAll ? el.querySelectorAll("[data-countup]") : [];
    for (var i = 0; i < c.length; i++) countUp(c[i]);
  }
  var io = null;
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var s = e.target;
        s.classList.add("sp-in");
        var kids = s.__spKids;
        if (kids) for (var i = 0; i < kids.length; i++) kids[i].classList.add("sp-c-in");
        fireCountups(s);
        io.unobserve(s);
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -6% 0px"
    });
  }
  function processReveals() {
    if (REDUCED) {
      var cs = document.querySelectorAll("[data-countup]");
      for (var k = 0; k < cs.length; k++) countUp(cs[k]);
      return;
    }
    var secs = document.querySelectorAll("section:not([data-sp]), footer:not([data-sp])");
    for (var i = 0; i < secs.length; i++) {
      var s = secs[i];
      s.setAttribute("data-sp", "1");
      if (s.hasAttribute("data-sp-skip")) continue; // self-choreographed sections opt out
      var rect = s.getBoundingClientRect();
      var inView = rect.top < window.innerHeight * 0.88;
      if (inView) {
        fireCountups(s);
        continue;
      } // never hide first-screen content

      var kids = findStagger(s);
      if (kids && kids.length) {
        // Cascade the children; leave the section itself static (no double motion).
        for (var j = 0; j < kids.length; j++) {
          kids[j].classList.add("sp-c");
          kids[j].style.transitionDelay = Math.min(j * 0.06, 0.42) + "s";
        }
        s.__spKids = kids;
      } else {
        s.classList.add("sp-reveal");
      }
      if (io) io.observe(s);else {
        s.classList.add("sp-in");
        if (s.__spKids) for (var m = 0; m < s.__spKids.length; m++) s.__spKids[m].classList.add("sp-c-in");
      }
    }
  }

  /* ---- run now + as the React app mounts/streams ---- */
  var tries = 0;
  function tick() {
    processReveals();
    setupParallax();
    onScroll();
    if (++tries < 24) setTimeout(tick, 280);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", tick);
  } else {
    tick();
  }

  /* ---- global failsafe: nothing stays hidden ---- */
  setTimeout(function () {
    var hidden = document.querySelectorAll(".sp-reveal:not(.sp-in)");
    for (var i = 0; i < hidden.length; i++) hidden[i].classList.add("sp-in");
    var kids = document.querySelectorAll(".sp-c:not(.sp-c-in)");
    for (var j = 0; j < kids.length; j++) kids[j].classList.add("sp-c-in");
    var cs = document.querySelectorAll("[data-countup]");
    for (var k = 0; k < cs.length; k++) countUp(cs[k]);
  }, 4000);
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site-polish.js", error: String((e && e.message) || e) }); }

// team-sections.jsx
try { (() => {
// Meet the Team — dedicated page built from the original site's "Who we are"
// section. COPY LOCK: every bio, name and the board intro are reproduced
// VERBATIM from site_src/index.html. Short role tags under each name are
// factual descriptors drawn from each person's own bio wording.
// Exposes window.TeamSections.

const A = "assets";
const DS = window.BoutiqueCapitalPartnersDesignSystem_7ef874;
const FOUNDER = {
  name: "Rodger Kennedy",
  role: "Founder & Managing Partner",
  img: "rodger-kennedy.png",
  lede: "Boutique Capital Partners was founded by Rodger Kennedy. Rodger is driven, commercial, innovative and personable.",
  bio: ["Rodger is the Founder and Managing Partner of Boutique Capital Partners. His primary focus is partnership oversight and the promotion and distribution of partner's investment strategies to UK, Channel Island, Swiss and Irish intermediaries.", "Rodger brings extensive and long-established connections across these jurisdictions, having previously been a Director and equity partner with Ninety One (formerly Investec Asset Management), where he enjoyed a 23-year career, most recently as the Head of London Wealth Distribution Team and co-lead of UK Wholesale Distribution.", "Rodger brings with him decades of distribution experience, having led the build out of the UK Wholesale channel, from its initiation to £15bn AUM. He has run multiple, highly successful fund campaigns for fixed income, equity, multi asset and alternatives solutions."]
};
const BOARD = [{
  id: "alan",
  name: "Alan Higgins",
  tag: "MD, Coutts",
  img: "alan-higgins.png",
  bio: ["Alan has over 30 years of experience in portfolio management.", "MD at Coutts, Alan has held a variety of roles with the bank, including Head of Investment Strategy, Chief Investment Officer and Head of Multi Asset Investing. Prior to this he worked for Morgan Stanley Wealth Management specialising in asset allocation, fixed income and alternative investments. Other experience included senior roles in institutional fixed income portfolio management and with a multi-strategy hedge fund.", "Alan has advised several charities on manager selection and underlying investments and is an external adviser to multi-family office Eighteen48 Partners and a NED for Signet Global Wealth. He was also previously a non-executive director of Nestlé's UK and Swiss pension fund management companies.", "Alan has a Bachelor of Science degree in Mathematics from Bristol University and is a CFA Charterholder."]
}, {
  id: "alex",
  name: "Alex Marshall-Tate",
  tag: "ex-Citi Global Wealth",
  img: "alex-marshall.png",
  bio: ["Alex has over 20 years of global wealth and investment management experience, spanning fund research & selection, portfolio management, product & investment platform development and sales & marketing, across a diverse spectrum of asset classes. He has worked within Citi Global Wealth, and prior to this at Morgan Stanley Wealth Management, and holds a deep understanding of global fund distribution dynamics and strategies.", "He holds a Bachelor of Science degree in Business Management and Masters degree in Corporate Risk Management from the University of Southampton and is CISI Level 6 qualified."]
}, {
  id: "esther",
  name: "Esther Gilbert",
  tag: "Founder, Boudica",
  img: "esther-glibert.png",
  bio: ["Esther is the founder of Boudica, an advisory business which helps asset managers cater to their client need and remain relevant in an evolving and competitive marketplace.", "She is an experienced investor with over 20 years in-house at leading asset and wealth managers, with technical expertise in fixed income and alternatives asset classes.", "Esther is a proponent of collaboration within the industry, which helps promote best practice and improved client outcomes.", "Esther has a First Class (Hons) degree in Mathematics with Finance, from the University of Liverpool. She is a CFA Charterholder and as well as the CFA Certificate in ESG Investing."]
}, {
  id: "julia",
  name: "Julia Warrander",
  tag: "ex-Affinity Private Wealth",
  img: "julia-warrander.png",
  bio: ["With a global career spanning investment banking – at Citibank, Deutsche and Goldman – to co-founding an award-wining, offshore wealth management business, Julia brings over three decades of experience in financial services. Most recently, Group Director for Affinity Private Wealth, Julia was accountable for strategy, investment management, HR and marketing. She chaired the IC and had responsibility for fund selection and multi-asset allocation.", "Julia regularly featured in Citywire Wealth Manager's Top 100 UK Fund Selectors and strongly believes qualitative inputs into fund analysis are as equally valuable as quants, when it comes to identifying managers who can deliver consistent, long-term alpha. Recognised as a champion of ED&I and sustainability, Julia has a reputation for asking challenging, 'left field' questions and advocating for positive change, especially with respect to women occupying senior investment roles.", "Julia is an Oxford grad (1990), Chartered FCSI and recently completed Oxford AI Programme, SAID Business School (2023)."]
}, {
  id: "kelly",
  name: "Kelly Prior",
  tag: "Investment Manager",
  img: "kelly-prior.png",
  bio: ["Kelly is an Investment Manager with over 30 years' experience in fund selection and portfolio construction.", "Kelly was part of the pioneering multi manager team that launched the Credit Suisse MM Constellation Fund, a vehicle investing solely in boutique funds. Subsequently she joined Thames River Capital, before spending 14 years with Colombia Threadneedle, as a Senior Investment manager for the CT MM Lifestyle and Navigator Funds, building asset from zero to £3.2bn.", "Since 2001, Kelly has been investing with active managers, who are often 'off the beaten track', across global equities, fixed income and alternative investments.", "Kelly is comfortable challenging conventional wisdom and taking a contrarian, long-term view, working collaboratively to construct portfolios tailored to any variance of return and risk objective."]
}, {
  id: "aryan",
  name: "Aryan Dave",
  tag: "Bayes Business School",
  img: "aryan-dave.png",
  bio: ["Aryan is currently a final year student at Bayes Business School, (formerly Cass) where he is pursuing a Bachelors degree in Investment and Financial Risk Management.", "He is currently studying fixed income portfolio management, Fintech in Banking, Asset-Liability management and Energy & Commodities. He employs this knowledge as well as technical expertise to assist with development of new systems within the business."]
}];
const PARTNERS = [{
  id: "loop",
  name: "Loop Consultants",
  tag: "Marketing",
  logo: null,
  bio: ["Loop is an end-to-end marketing consultancy with over 20 years of experience specialising in distribution-focused fund marketing to advisor and institutional across the asset classes. Loop have been employees of and trusted marketing partners for many leading asset management firms.", "Loop's strengths lie in all aspects of fund marketing including fund messaging and narrative development, presentation build and design, digital marketing (website, social, email, video) and content creation."]
}, {
  id: "cornerstone",
  name: "Cornerstone Communicate",
  tag: "PR & Communications",
  logo: "cornerstone-logo.png",
  bio: ["Cornerstone is a specialist PR and communications consultancy focused wholly on servicing boutiques and growing companies in the asset and wealth management industry. Established in 2015, their highly experienced team members have run corporate communications for global and boutique firms, managed press relations spanning multiple channels across Europe and have significantly enhanced client awareness within their target audience.", "Their unique strength lies in helping firms build their entire communications process, from idea generation and building press relationships through to delivering exceptional top-tier coverage."]
}];

/* ——— Bio modal ——— */
function BioModal({
  person,
  onClose
}) {
  React.useEffect(() => {
    if (!person) return;
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [person, onClose]);
  if (!person) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--overlay-modal)",
      zIndex: 10000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "24px",
      animation: "tmFade 0.2s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "#fff",
      borderRadius: "var(--radius-xl)",
      maxWidth: "680px",
      width: "100%",
      maxHeight: "88vh",
      overflow: "hidden",
      boxShadow: "var(--shadow-modal)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bcp-navy)",
      padding: "30px 36px",
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: "22px",
      flexShrink: 0
    }
  }, person.img ? /*#__PURE__*/React.createElement("img", {
    src: `${A}/people/${person.img}`,
    alt: person.name,
    style: {
      width: "76px",
      height: "76px",
      borderRadius: "50%",
      objectFit: "cover",
      objectPosition: "center top",
      border: "2px solid var(--bcp-coral)",
      flexShrink: 0
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingRight: "28px"
    }
  }, person.tag ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1.5px",
      textTransform: "none",
      color: "var(--bcp-coral)",
      marginBottom: "7px"
    }
  }, person.tag) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "25px",
      fontWeight: 700,
      color: "#fff",
      margin: 0,
      lineHeight: 1.15
    }
  }, person.name)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      position: "absolute",
      top: "20px",
      right: "22px",
      background: "transparent",
      border: "none",
      color: "#fff",
      fontSize: "28px",
      lineHeight: 1,
      cursor: "pointer",
      opacity: 0.75,
      width: "30px",
      height: "30px"
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 36px",
      overflowY: "auto"
    }
  }, person.bio.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: "15.5px",
      lineHeight: 1.75,
      color: "var(--bcp-gray-700)",
      margin: i === person.bio.length - 1 ? 0 : "0 0 16px 0"
    }
  }, p)))));
}

/* ——— 1 · HERO ——— */
function TeamHero() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Team hero",
    style: {
      position: "relative",
      background: "var(--bcp-cream)",
      padding: "84px 5% 70px",
      fontFamily: "var(--font-brand)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/marks/swirl-teal.svg`,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "-150px",
      top: "-120px",
      width: "520px",
      opacity: 0.1,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "1240px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "none",
      color: "var(--bcp-coral)",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "34px",
      height: "2px",
      background: "var(--bcp-coral)"
    }
  }), "The team"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(40px, 5.4vw, 66px)",
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: "-1px",
      color: "var(--bcp-navy)",
      margin: "0 0 26px 0",
      maxWidth: "900px"
    }
  }, "Who we are"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "clamp(17px, 1.7vw, 21px)",
      fontWeight: 500,
      lineHeight: 1.6,
      color: "var(--bcp-gray-700)",
      margin: 0,
      maxWidth: "820px"
    }
  }, "The BCP Advisory Board's impressive experience and diverse skillsets align with BCP's mission to provide the best actively managed investment opportunities to fund buyers.")));
}

/* ——— 2 · FOUNDER SPOTLIGHT ——— */
function FounderSpotlight() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Founder",
    style: {
      background: "var(--bcp-navy)",
      padding: "90px 5%",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1240px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "56px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "230px",
      height: "230px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/people/${FOUNDER.img}`,
    alt: FOUNDER.name,
    style: {
      width: "230px",
      height: "230px",
      borderRadius: "50%",
      objectFit: "cover",
      objectPosition: "center top",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "1.8px",
      textTransform: "none",
      color: "var(--bcp-coral)",
      marginBottom: "14px"
    }
  }, FOUNDER.role), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(34px, 4vw, 46px)",
      fontWeight: 600,
      letterSpacing: "-0.5px",
      color: "#fff",
      margin: "0 0 22px 0",
      lineHeight: 1.1
    }
  }, FOUNDER.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: 1.5,
      color: "#fff",
      margin: "0 0 22px 0",
      maxWidth: "640px"
    }
  }, FOUNDER.lede), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.82)",
      margin: "0 0 30px 0",
      maxWidth: "640px"
    }
  }, FOUNDER.bio[0]), /*#__PURE__*/React.createElement("button", {
    onClick: () => ReactDOM.flushSync(() => setOpen(true)),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      background: "transparent",
      border: "1.5px solid var(--bcp-coral)",
      color: "#fff",
      fontFamily: "var(--font-brand)",
      fontSize: "14px",
      fontWeight: 600,
      letterSpacing: "0.3px",
      padding: "14px 28px",
      borderRadius: "var(--radius-sm)",
      cursor: "pointer",
      transition: "all 0.25s ease"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--bcp-coral)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "transparent";
    }
  }, "Read Rodger's full story", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: "16px",
      height: "16px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  }))))), /*#__PURE__*/React.createElement(BioModal, {
    person: open ? FOUNDER : null,
    onClose: () => ReactDOM.flushSync(() => setOpen(false))
  }));
}

/* ——— 3 · ADVISORY BOARD — silky horizontal scroller ——— */
function AdvisoryBoard() {
  const [active, setActive] = React.useState(null);
  const trackRef = React.useRef(null);
  const drag = React.useRef({
    down: false,
    startX: 0,
    startScroll: 0,
    moved: 0
  });
  const [edges, setEdges] = React.useState({
    atStart: true,
    atEnd: false
  });
  const [progress, setProgress] = React.useState(0);
  const updateEdges = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setEdges({
      atStart: el.scrollLeft <= 2,
      atEnd: el.scrollLeft >= max - 2
    });
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);
  React.useEffect(() => {
    updateEdges();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, {
      passive: true
    });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);
  const scrollByCards = dir => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const start = el.scrollLeft;
    const target = Math.max(0, Math.min(max, start + dir * Math.round(el.clientWidth * 0.8)));
    const dist = target - start;
    if (!dist) return;
    el.style.scrollBehavior = "auto";
    const dur = 500,
      t0 = performance.now();
    const ease = p => 1 - Math.pow(1 - p, 3);
    const step = now => {
      const p = Math.min(1, (now - t0) / dur);
      el.scrollLeft = start + dist * ease(p);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const onPointerDown = e => {
    const el = trackRef.current;
    drag.current = {
      down: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
      moved: 0
    };
    el.style.scrollBehavior = "auto";
    el.style.cursor = "grabbing";
  };
  const onPointerMove = e => {
    if (!drag.current.down) return;
    const el = trackRef.current;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
      trackRef.current.style.scrollBehavior = "smooth";
    }
  };
  const Arrow = ({
    dir,
    disabled
  }) => /*#__PURE__*/React.createElement("button", {
    className: "team-arrow",
    onClick: () => scrollByCards(dir),
    disabled: disabled,
    "aria-label": dir < 0 ? "Previous" : "Next",
    style: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      border: "1.5px solid var(--bcp-navy)",
      background: "transparent",
      color: "var(--bcp-navy)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.25s ease",
      flexShrink: 0
    },
    onMouseEnter: e => {
      if (!disabled) {
        e.currentTarget.style.background = "var(--bcp-navy)";
        e.currentTarget.style.color = "#fff";
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "var(--bcp-navy)";
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: "20px",
      height: "20px",
      transform: dir < 0 ? "scaleX(-1)" : "none"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  })));
  const Card = ({
    p,
    i
  }) => {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      onClick: () => {
        if (drag.current.moved < 6) ReactDOM.flushSync(() => setActive(p));
      },
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        position: "relative",
        flex: "0 0 360px",
        scrollSnapAlign: "start",
        boxSizing: "border-box",
        overflow: "hidden",
        background: "#fff",
        border: "1px solid var(--border-card)",
        borderRadius: "var(--radius-xl)",
        cursor: "pointer",
        padding: "36px 34px",
        fontFamily: "var(--font-brand)",
        boxShadow: h ? "var(--shadow-card-hover)" : "var(--shadow-card)",
        transform: h ? "translateY(-6px)" : "none",
        transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s cubic-bezier(0.4,0,0.2,1)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `${A}/marks/swirl-teal.svg`,
      alt: "",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        top: "-22px",
        right: "-22px",
        width: "120px",
        opacity: h ? 0.16 : 0.08,
        transition: "opacity 0.3s ease",
        pointerEvents: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: "104px",
        height: "104px",
        marginBottom: "22px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: "-6px",
        borderRadius: "50%",
        border: "2px solid var(--bcp-coral)",
        opacity: h ? 1 : 0,
        transform: h ? "scale(1)" : "scale(0.85)",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)"
      }
    }), /*#__PURE__*/React.createElement("img", {
      src: `${A}/people/${p.img}`,
      alt: p.name,
      draggable: "false",
      style: {
        width: "104px",
        height: "104px",
        borderRadius: "50%",
        objectFit: "cover",
        objectPosition: "center top",
        display: "block",
        border: "2px solid var(--bcp-sand-300)",
        userSelect: "none"
      }
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: "22px",
        fontWeight: 600,
        color: "var(--bcp-navy)",
        margin: "0 0 5px 0",
        letterSpacing: "-0.2px"
      }
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "1px",
        textTransform: "none",
        color: "var(--bcp-coral)",
        marginBottom: "16px"
      }
    }, p.tag), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "14px",
        lineHeight: 1.6,
        color: "var(--bcp-gray-600)",
        margin: "0 0 20px 0",
        flexGrow: 1,
        display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
      }
    }, p.bio[0]), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        fontSize: "14px",
        fontWeight: 600,
        color: "var(--bcp-coral)"
      }
    }, "Read full bio", /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        width: "15px",
        height: "15px",
        transform: h ? "translateX(3px)" : "none",
        transition: "transform 0.25s ease"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14M12 5l7 7-7 7"
    }))));
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "board",
    "data-screen-label": "Advisory board",
    style: {
      background: "var(--bcp-cream)",
      padding: "90px 0 90px 5%",
      fontFamily: "var(--font-brand)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "calc(1240px + ((100vw - 1240px) / 2))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: "30px",
      marginBottom: "44px",
      paddingRight: "5%"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "1.5px",
      textTransform: "none",
      color: "var(--bcp-coral)",
      marginBottom: "14px"
    }
  }, "Advisory Board"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(30px, 3.6vw, 42px)",
      fontWeight: 600,
      letterSpacing: "-0.5px",
      color: "var(--bcp-navy)",
      margin: 0
    }
  }, "Our team")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement(Arrow, {
    dir: -1,
    disabled: edges.atStart
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: 1,
    disabled: edges.atEnd
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    className: "team-track",
    onPointerDown: onPointerDown,
    onPointerMove: onPointerMove,
    onPointerUp: endDrag,
    onPointerLeave: endDrag,
    style: {
      display: "flex",
      gap: "24px",
      overflowX: "auto",
      scrollSnapType: "x proximity",
      paddingBottom: "8px",
      paddingRight: "5%",
      cursor: "grab",
      scrollBehavior: "smooth"
    }
  }, BOARD.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    p: p,
    i: i
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "9%",
      height: "100%",
      background: "linear-gradient(90deg, transparent, var(--bcp-cream))",
      pointerEvents: "none",
      opacity: edges.atEnd ? 0 : 1,
      transition: "opacity 0.3s ease"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "6%",
      height: "100%",
      background: "linear-gradient(270deg, transparent, var(--bcp-cream))",
      pointerEvents: "none",
      opacity: edges.atStart ? 0 : 1,
      transition: "opacity 0.3s ease"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "34px",
      marginRight: "5%",
      display: "flex",
      alignItems: "center",
      gap: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: "3px",
      background: "var(--bcp-sand-300)",
      borderRadius: "3px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      width: `${18 + progress * 82}%`,
      background: "var(--bcp-coral)",
      borderRadius: "3px",
      transition: drag.current.down ? "none" : "width 0.15s linear"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "1px",
      color: "var(--bcp-sand-400)",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--bcp-navy)"
    }
  }, String(Math.min(BOARD.length, Math.round(progress * (BOARD.length - 1)) + 1)).padStart(2, "0")), " / ", String(BOARD.length).padStart(2, "0")))), /*#__PURE__*/React.createElement(BioModal, {
    person: active,
    onClose: () => ReactDOM.flushSync(() => setActive(null))
  }));
}

/* ——— 4 · MARKETING PARTNERS ——— */
function MarketingPartners() {
  const [active, setActive] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Marketing partners",
    style: {
      background: "var(--bcp-navy)",
      padding: "90px 5%",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1240px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "44px",
      maxWidth: "780px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "1.5px",
      textTransform: "none",
      color: "var(--bcp-coral)",
      marginBottom: "14px"
    }
  }, "Marketing Partners"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(30px, 3.6vw, 42px)",
      fontWeight: 600,
      letterSpacing: "-0.5px",
      color: "#fff",
      margin: "0 0 16px 0"
    }
  }, "The specialists behind the brand"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.85)",
      margin: 0
    }
  }, "We work with highly skilled marketing & PR professionals with decades of industry experience.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "26px"
    }
  }, PARTNERS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      border: "2px solid var(--bcp-coral)",
      borderRadius: "var(--radius-xl)",
      padding: "34px 36px",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      marginBottom: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "64px",
      height: "64px",
      borderRadius: "var(--radius-md)",
      background: p.logo ? "#fff" : "rgba(255,255,255,0.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      padding: p.logo ? "8px" : 0,
      boxSizing: "border-box"
    }
  }, p.logo ? /*#__PURE__*/React.createElement("img", {
    src: `${A}/logos/${p.logo}`,
    alt: p.name,
    style: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "24px",
      fontWeight: 700,
      color: "var(--bcp-coral)"
    }
  }, "L")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "21px",
      fontWeight: 600,
      color: "#fff",
      margin: "0 0 3px 0"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      fontWeight: 600,
      color: "rgba(255,255,255,0.5)",
      letterSpacing: "0.5px"
    }
  }, p.tag))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.85)",
      margin: "0 0 22px 0",
      flexGrow: 1
    }
  }, p.bio[0]), /*#__PURE__*/React.createElement("button", {
    onClick: () => ReactDOM.flushSync(() => setActive(p)),
    style: {
      alignSelf: "flex-start",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      background: "transparent",
      border: "none",
      color: "var(--bcp-coral)",
      fontFamily: "var(--font-brand)",
      fontSize: "14px",
      fontWeight: 600,
      cursor: "pointer",
      padding: 0
    }
  }, "Read more", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: "15px",
      height: "15px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5l7 7-7 7"
  }))))))), /*#__PURE__*/React.createElement(BioModal, {
    person: active,
    onClose: () => ReactDOM.flushSync(() => setActive(null))
  }));
}

/* ——— 5 · CTA ——— */
function TeamCta() {
  const {
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Team CTA",
    style: {
      background: "var(--bcp-cream)",
      padding: "90px 5%",
      fontFamily: "var(--font-brand)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "820px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(28px, 3.4vw, 40px)",
      fontWeight: 600,
      letterSpacing: "-0.5px",
      color: "var(--bcp-navy)",
      margin: "0 0 30px 0",
      lineHeight: 1.2
    }
  }, "Best-in-class fund manager? Let's have a conversation."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    arrow: true,
    href: "index.html#contact"
  }, "Partner with us")));
}
window.TeamSections = {
  TeamHero,
  FounderSpotlight,
  AdvisoryBoard,
  MarketingPartners,
  TeamCta
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "team-sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeHero.jsx
try { (() => {
const A = "../../assets";

/** Homepage hero: full-bleed wave photo, navy mixed-emphasis title, floating insight callout. */
function HomeHero() {
  const [hov, setHov] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: "82vh",
      display: "flex",
      alignItems: "center",
      backgroundImage: `url('${A}/images/wave-banner.webp')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: "var(--font-brand)",
      padding: "0 5% 0 3%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "1400px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "650px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(36px, 5vw, 58px)",
      lineHeight: 1.15,
      color: "var(--bcp-navy)",
      margin: "0 0 24px 0",
      fontWeight: 400
    }
  }, /*#__PURE__*/React.createElement("em", {
    style: {
      fontWeight: 400
    }
  }, "Outsourced"), " distribution", /*#__PURE__*/React.createElement("br", null), "for ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 700,
      fontStyle: "normal"
    }
  }, "outstanding"), /*#__PURE__*/React.createElement("br", null), "investment strategies"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "clamp(16px, 2vw, 20px)",
      lineHeight: 1.6,
      color: "var(--bcp-navy)",
      margin: 0
    }
  }, "We provide distribution for high-quality, differentiated investment strategies seeking access to the UK, Irish and Swiss intermediary markets."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "60px",
      right: "5%"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#insights",
    style: {
      textDecoration: "none",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      background: "var(--bcp-cream-card)",
      borderRadius: "var(--radius-md)",
      width: "320px",
      boxShadow: hov ? "var(--shadow-float-hover)" : "var(--shadow-float)",
      overflow: "hidden",
      transform: hov ? "translateY(-4px)" : "none",
      transition: "transform 0.3s ease, box-shadow 0.3s ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "5px",
      background: "linear-gradient(90deg, #de5c5c 0%, #e88a8a 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      fontWeight: 700,
      letterSpacing: "1.2px",
      textTransform: "uppercase",
      color: "#de5c5c"
    }
  }, "Viewpoint"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "1px",
      height: "12px",
      background: "var(--bcp-sand-300)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      fontWeight: 500,
      color: "var(--bcp-sand-400)",
      letterSpacing: "0.5px"
    }
  }, "Q4 2025")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "18px",
      fontWeight: 700,
      color: "var(--bcp-navy)",
      lineHeight: 1.4,
      margin: "0 0 18px 0"
    }
  }, "The Russell Shuffle: When growth meets value"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "13px",
      fontWeight: 600,
      color: hov ? "var(--bcp-white)" : "var(--bcp-navy)",
      padding: "10px 18px",
      background: hov ? "var(--bcp-navy)" : "var(--bcp-cream-button)",
      borderRadius: "var(--radius-sm)",
      transition: "all 0.3s ease"
    }
  }, "Read article", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      width: "14px",
      height: "14px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12H19M19 12L12 5M19 12L12 19"
  }))))))));
}

/** Cream intro: statement heading, coral lead, prose + coral callout, swirl watermark. */
function HomeIntro() {
  return /*#__PURE__*/React.createElement("section", {
    id: "intro",
    style: {
      background: "var(--bcp-cream)",
      fontFamily: "var(--font-brand)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1240px",
      margin: "0 auto",
      padding: "100px 30px 80px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    title: "We partner with and raise capital for the next wave of successful boutique fund managers",
    style: {
      maxWidth: "980px",
      margin: "0 auto 70px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: "50px",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "800px",
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "30px",
      fontWeight: 500,
      color: "var(--bcp-coral)",
      margin: "0 0 30px 0"
    }
  }, "Focusing on best in class"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      lineHeight: 1.7,
      color: "var(--bcp-gray-600)",
      margin: "0 0 18px 0"
    }
  }, "We collaborate with a select group of exceptional fund managers, offering well-defined, disciplined and proven investment strategies."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      lineHeight: 1.7,
      color: "var(--bcp-gray-600)",
      margin: "0 0 18px 0"
    }
  }, "Through these partnerships, our goal is to provide fund buyers with the very best investment strategies, built by smaller, lesser-known, but highly experienced managers."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      lineHeight: 1.7,
      color: "var(--bcp-gray-600)",
      margin: "0 0 12px 0"
    }
  }, "Focused and more agile than larger peers, these firms concentrate on fewer and often single strategies, with proven track records for delivering differentiated and sought-after returns."), /*#__PURE__*/React.createElement(__ds_scope.CalloutBox, {
    style: {
      marginTop: "30px"
    }
  }, "Our role is to showcase fund managers' impressive alpha-delivering skills to our established network of UK and European intermediaries; offering a fully outsourced, distribution solution for the long term."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "36px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    arrow: true,
    href: "#contact"
  }, "Partner with us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/marks/swirl-teal.svg`,
    alt: "",
    style: {
      width: "140%",
      maxWidth: "none",
      opacity: 0.15,
      display: "block",
      marginTop: "-30px"
    }
  })))));
}
Object.assign(__ds_scope, { HomeHero, HomeIntro });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeInsights.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const A = "../../assets";
const INSIGHTS = [{
  image: `${A}/images/puffin-shuffle.jpg`,
  date: "Dec 2025",
  category: "Market Commentary",
  title: "The Russell Shuffle: When growth meets value",
  excerpt: "Large-cap investing has been shaped by the Magnificent Seven in recent years. As 2025 draws to a close, the line between growth and value is moving."
}, {
  image: `${A}/images/mountain-view.webp`,
  date: "Oct 2025",
  category: "Market Commentary",
  title: "Why now for active US value equities?",
  excerpt: "BCP Advisory Board member Alex Marshall-Tate explores the compelling case for US value equities in today's market environment."
}, {
  image: `${A}/images/wave-banner.webp`,
  date: "Jan 2025",
  category: "Partnership News",
  title: "BCP Partners with River Road Asset Management",
  excerpt: "We are delighted to announce a foundational distribution partnership with leading US value equity manager River Road Asset Management."
}];

/** Cream insights hub: header, 3-card grid, white view-all CTA panel. */
function HomeInsights() {
  return /*#__PURE__*/React.createElement("section", {
    id: "insights",
    style: {
      background: "var(--bcp-cream)",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "100px 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "80px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "56px",
      fontWeight: 600,
      color: "var(--bcp-navy)",
      margin: "0 0 24px 0",
      lineHeight: 1.15,
      letterSpacing: "-0.5px"
    }
  }, "Insights & Market Commentary"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px",
      fontWeight: 500,
      color: "var(--bcp-gray-600)",
      margin: 0,
      lineHeight: 1.6,
      maxWidth: "800px"
    }
  }, "Expert perspectives on markets, investment strategies, and boutique fund management.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "40px"
    }
  }, INSIGHTS.map(item => /*#__PURE__*/React.createElement(__ds_scope.InsightCard, _extends({
    key: item.title
  }, item)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      margin: "80px 0 0 0",
      padding: "70px 40px",
      background: "#fff",
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "32px",
      fontWeight: 600,
      color: "var(--bcp-navy)",
      margin: "0 0 16px 0",
      letterSpacing: "-0.3px"
    }
  }, "Explore our full archive"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "18px",
      fontWeight: 500,
      color: "var(--bcp-gray-600)",
      margin: "0 0 32px 0",
      lineHeight: 1.6
    }
  }, "Access our complete collection of market insights, fund updates, and investment commentary"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "lg",
    href: "#"
  }, "View All Insights"))));
}

/** Navy contact section: title + phone/email cards. */
function HomeContact() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: "var(--bcp-navy)",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "100px 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "60px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "42px",
      fontWeight: 600,
      color: "#fff",
      margin: "0 0 16px 0",
      lineHeight: 1.2,
      letterSpacing: "-0.5px"
    }
  }, "Get In Touch"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      color: "rgba(255,255,255,0.85)",
      margin: 0,
      lineHeight: 1.6
    }
  }, "We'd love to hear from you.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ContactCard, {
    icon: "phone",
    label: "Phone"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+442046193222",
    style: {
      color: "var(--bcp-navy)",
      textDecoration: "none"
    }
  }, "+44 (0)20 4619 3222")), /*#__PURE__*/React.createElement(__ds_scope.ContactCard, {
    icon: "email",
    label: "Email"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:rodger@boutiquecapitalpartners.co.uk",
    style: {
      color: "var(--bcp-navy)",
      textDecoration: "none"
    }
  }, "rodger@boutiquecapitalpartners.co.uk")))));
}
Object.assign(__ds_scope, { HomeInsights, HomeContact });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeInsights.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePartnership.jsx
try { (() => {
const A = "../../assets";

/** Navy River Road announcement with corner-bracket frame + fund intro. */
function HomePartnership() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bcp-navy)",
      padding: "100px 15px",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1240px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "70%",
      minWidth: "640px",
      padding: "65px 75px",
      textAlign: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "56px",
      height: "56px",
      borderTop: "3px solid var(--bcp-coral)",
      borderLeft: "3px solid var(--bcp-coral)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "56px",
      height: "56px",
      borderBottom: "3px solid var(--bcp-coral)",
      borderRight: "3px solid var(--bcp-coral)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "32px",
      fontWeight: 400,
      lineHeight: "52px",
      color: "#fff",
      margin: 0
    }
  }, "BCP is delighted to announce a foundational distribution partnership with leading US value equity manager,"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "40px",
      fontWeight: 700,
      lineHeight: "54px",
      color: "#fff",
      margin: "30px 0 0 0"
    }
  }, "River Road Asset Management")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto auto",
      gap: "60px",
      alignItems: "center",
      marginTop: "70px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "30px",
      fontWeight: 600,
      lineHeight: "36px",
      color: "var(--bcp-coral)",
      margin: "0 0 18px 0"
    }
  }, "Introducing:"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--radius-md)",
      padding: "16px 22px",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/logos/river-road-logo.svg`,
    alt: "River Road Asset Management",
    style: {
      width: "200px",
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "460px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-serif-accent)",
      fontSize: "32px",
      fontWeight: 400,
      color: "#fff",
      margin: "0 0 14px 0"
    }
  }, "US Large Cap Value Select"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif-accent)",
      fontSize: "20px",
      lineHeight: "30px",
      color: "#fff",
      margin: 0
    }
  }, "A disciplined, high-conviction US value equity strategy with a long-term track record."))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      paddingTop: "50px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "26px",
      fontWeight: 600,
      lineHeight: "36px",
      color: "#fff",
      margin: 0
    }
  }, "NOW AVAILABLE AS A UK OEIC, EXCLUSIVELY THROUGH", /*#__PURE__*/React.createElement("br", null), "BOUTIQUE CAPITAL PARTNERS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "26px",
      fontWeight: 400,
      lineHeight: "36px",
      color: "#fff",
      margin: "25px 0 0 0"
    }
  }, "ACCESSIBLE THROUGH MOST MAJOR PLATFORMS", /*#__PURE__*/React.createElement("br", null), "FEE WAIVERS AGREED BY BCP"))));
}
const VALUES = [{
  title: "Commercial",
  body: ["We are committed to delivering long-term and sustainable growth, ensuring our partnerships are beneficial for all parties.", "We are hardworking, motivated and focused."]
}, {
  title: "Innovative",
  body: ["We are focused on creativity, continuous learning and adaptation — viewing change as an opportunity, rather than a threat. We strive to improve.", "We embrace the latest ideas, technology and communication channels."]
}, {
  title: "Friendly",
  body: ["We believe in the power of good interpersonal relationships.", "We are collaborative and empathetic. And fun."]
}];

/** Cream values intro + mountain-photo strip with three popup values. */
function HomeValues() {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bcp-cream)",
      padding: "70px 15px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    size: "xl",
    title: "Our values: a framework for success",
    lead: "Our vision and values provide a robust framework for an entrepreneurial, high-performance culture. Together they form guiding principles for business decisions, actions, and company behaviours."
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      minHeight: "500px",
      backgroundImage: `url('${A}/images/mountain-view.webp')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderBottom: "5px solid var(--bcp-cream)"
    }
  }, VALUES.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: v.title,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => setOpen(v),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "13px",
      fontSize: "clamp(28px, 3.4vw, 48px)",
      fontWeight: 600,
      color: "#fff",
      cursor: "pointer",
      textShadow: "0 2px 18px rgba(0,0,0,0.35)"
    }
  }, v.title, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    style: {
      width: "26px",
      height: "26px"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }))))), open ? /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(null),
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--overlay-modal)",
      zIndex: 10000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "#fff",
      borderRadius: "var(--radius-xl)",
      maxWidth: "560px",
      width: "100%",
      boxShadow: "var(--shadow-modal)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bcp-navy)",
      padding: "26px 35px",
      borderRadius: "16px 16px 0 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "26px",
      fontWeight: 700,
      color: "#fff",
      margin: 0
    }
  }, open.title), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(null),
    style: {
      position: "absolute",
      top: "50%",
      right: "20px",
      transform: "translateY(-50%)",
      background: "transparent",
      border: "none",
      color: "#fff",
      fontSize: "30px",
      cursor: "pointer",
      opacity: 0.8
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 35px"
    }
  }, open.body.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#333",
      margin: i === open.body.length - 1 ? 0 : "0 0 16px 0"
    }
  }, p))))) : null));
}
const PUFFIN_FACTS = [{
  title: "Distinctiveness",
  body: "Much like the vibrant orange beak, BCP stands out from industry peers by showcasing only truly differentiated investment strategies."
}, {
  title: "Adaptability",
  body: "Key to survival in the challenging environments Puffins inhabit is the ability to adapt. Likewise, our services are designed to be future-focused, flexible and responsive to the evolving demands of investors."
}, {
  title: "Resilience",
  body: "Puffins are known for their ability to withstand harsh conditions and dive deep into the ocean for food. Likewise, we have built BCP to be robust and enduring, cemented in a strong sense of purpose."
}, {
  title: "Teamwork",
  body: "Puffins are highly social creatures nesting in large colonies. Similarly, BCP believes in developing supportive and collaborative partnerships, with shared values, incentives and goals."
}, {
  title: "Commitment",
  body: "The loyalty seen in puffins is reflected in our focus on long-term fund manager partnerships and commitment to investor relationships founded on openness and trust."
}];

/** Teal CSR section: puffin photo, accordion of shared traits, partner quote, cream CTA. */
function HomePuffin() {
  const [openIdx, setOpenIdx] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bcp-teal-section)",
      padding: "80px 5%",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1300px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1.2fr",
      gap: "70px",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/images/puffin-portrait.png`,
    alt: "Atlantic Puffin",
    style: {
      width: "100%",
      borderRadius: "var(--radius-xl)",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "26px",
      marginBottom: "30px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "26px",
      fontWeight: 600,
      lineHeight: 1.4,
      color: "#fff",
      margin: 0,
      flex: 1
    }
  }, "BCP is proud to support the Atlantic Puffin, in association with the", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://seabird.org/wildlife/puffin",
    target: "_blank",
    style: {
      color: "#fff"
    }
  }, "Scottish Seabird Centre")), /*#__PURE__*/React.createElement("img", {
    src: `${A}/logos/scottish-seabird-centre-white.png`,
    alt: "Scottish Seabird Centre",
    style: {
      height: "64px"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "35px"
    }
  }, PUFFIN_FACTS.map((f, i) => {
    const isOpen = openIdx === i;
    return /*#__PURE__*/React.createElement("div", {
      key: f.title,
      style: {
        borderBottom: "1px solid rgba(255,255,255,0.25)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => setOpenIdx(isOpen ? null : i),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isOpen ? "20px 20px" : "20px 6px",
        cursor: "pointer",
        transition: "padding 0.3s ease"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: "19px",
        fontWeight: 600,
        color: "#fff",
        margin: 0
      }
    }, f.title), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      style: {
        width: "16px",
        height: "16px",
        transition: "transform 0.3s ease",
        transform: isOpen ? "rotate(180deg)" : "none"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 9L12 15L18 9",
      stroke: "#fff",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? "250px" : 0,
        overflow: "hidden",
        transition: "max-height 0.4s ease"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 24px 24px",
        fontSize: "16px",
        lineHeight: 1.7,
        color: "rgba(255,255,255,0.95)"
      }
    }, f.body)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "35px",
      paddingTop: "10px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      fontStyle: "italic",
      lineHeight: 1.7,
      color: "#fff",
      margin: "0 0 18px 0"
    }
  }, "\"We are delighted to partner with BCP to support our vital work in marine conservation and education. Scotland's seabird populations, including the much-loved puffin, face urgent threats from biodiversity loss and climate change.\""), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#fff",
      margin: 0
    }
  }, "Florence Gygax, Partnership Development Manager, Scottish Seabird Centre")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-block",
      backgroundColor: "var(--bcp-cream-card)",
      color: "#de5c5c",
      fontSize: "15px",
      fontWeight: 600,
      padding: "18px 32px",
      textDecoration: "none",
      borderRadius: "var(--radius-md)",
      transition: "all 0.3s ease",
      textAlign: "center",
      lineHeight: 1.4
    },
    onMouseEnter: e => {
      e.currentTarget.style.backgroundColor = "#ffffff";
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.15)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.backgroundColor = "var(--bcp-cream-card)";
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "none";
    }
  }, "Read the press release to find out", /*#__PURE__*/React.createElement("br", null), "more about our partnership"))));
}
Object.assign(__ds_scope, { HomePartnership, HomeValues, HomePuffin });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePartnership.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeServices.jsx
try { (() => {
const A = "../../assets";
const SERVICES = [{
  key: "distribution",
  icon: "service-distribution.svg",
  menuLabel: "Distribution Solution",
  title: "Distribution Solution",
  subtitle: "Fully outsourced distribution focused on the UK, Channel Islands, Ireland and Switzerland",
  description: "Our comprehensive distribution solution provides fund managers with complete access to the UK and European intermediary markets without the need for internal resources.",
  features: ["Dedicated distribution team with established relationships", "Complete market coverage across UK, Channel Islands, Ireland and Switzerland", "Ongoing relationship management with intermediaries", "Quarterly business reviews and strategy sessions", "Full compliance and regulatory support"]
}, {
  key: "strategy",
  icon: "service-strategy.svg",
  menuLabel: "Distribution Strategy",
  title: "Distribution Strategy",
  subtitle: "Detailed, documented distribution strategy tailored to your fund",
  description: "We develop comprehensive distribution strategies that align with your fund's unique characteristics and target market, ensuring optimal positioning and market penetration.",
  features: ["In-depth analysis of fund characteristics and competitive positioning", "Target market identification and segmentation", "Channel strategy and prioritization", "Quarterly strategy reviews and optimization", "Performance tracking against defined KPIs"]
}, {
  key: "establishment",
  icon: "service-vehicle.svg",
  menuLabel: "Vehicle Establishment",
  title: "Vehicle Establishment Assistance",
  subtitle: "Support with establishing new OEICs and UCITS in collaboration with our partners",
  description: "Navigate the complex process of establishing regulated investment vehicles with our expert guidance and established partner network.",
  features: ["OEIC and UCITS structuring advice", "Regulatory requirements guidance", "Introduction to leading fund administrators and depositaries", "Cost optimization and timeline management", "Ongoing support through authorization process"]
}, {
  key: "research",
  icon: "service-research.svg",
  menuLabel: "Market Research",
  title: "Pre-Launch Market Research",
  subtitle: "Comprehensive market research and pre-marketing to validate demand",
  description: "Understand market appetite and refine your proposition before launch with our thorough market research and pre-marketing services.",
  features: ["Intermediary sentiment analysis", "Competitive landscape assessment", "Product positioning recommendations", "Demand validation through targeted pre-marketing", "Launch timeline optimization"]
}, {
  key: "communication",
  icon: "service-communication.svg",
  menuLabel: "Communication Channels",
  title: "Enhanced Communication Channels",
  subtitle: "Multi-channel communication including social media, webinars, recordings, and dedicated website presence",
  description: "Amplify your message through our comprehensive communication infrastructure, reaching intermediaries through their preferred channels.",
  features: ["Dedicated fund page on BCP website", "Regular webinar and virtual event hosting", "Social media presence and content distribution", "Video content creation and distribution", "Quarterly commentary and thought leadership pieces"]
}, {
  key: "roadshow",
  icon: "service-roadshow.svg",
  menuLabel: "Roadshow Planning",
  title: "Roadshow Planning & Execution",
  subtitle: "Organization of group lunches, one-on-ones and roadshow events",
  description: "Maximize face-to-face engagement with our professionally organized roadshow programs and events across the UK and Europe.",
  features: ["Strategic roadshow planning and scheduling", "Group lunch events with key intermediaries", "One-on-one meeting coordination", "Venue selection and logistics management", "Post-event follow-up and feedback gathering"]
}, {
  key: "marketing",
  icon: "service-marketing.svg",
  menuLabel: "Marketing & PR",
  title: "Marketing & PR Services",
  subtitle: "Professional marketing and PR in partnership with Loop Consultants and Cornerstone Communicate",
  description: "Enhance your brand visibility and credibility through our partnerships with leading financial services marketing and PR specialists.",
  features: ["PR strategy and media relations", "Thought leadership positioning", "Content creation and distribution", "Trade publication features and commentary", "Awards and industry recognition support"]
}, {
  key: "reporting",
  icon: "service-reporting.svg",
  menuLabel: "Sales Reporting",
  title: "Monthly Sales Reporting",
  subtitle: "Comprehensive monthly reports tracking progress vs. established KPIs",
  description: "Stay informed with detailed monthly reporting that provides full visibility into distribution activities and results.",
  features: ["Activity summary and pipeline updates", "Sales and AUM tracking", "Performance vs. KPI dashboard", "Intermediary engagement metrics", "Strategic recommendations and next steps"]
}];

/** Interactive services section: navy numbered menu + content panel. */
function HomeServices() {
  const [active, setActive] = React.useState(0);
  const [hovered, setHovered] = React.useState(null);
  const s = SERVICES[active];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: "var(--bcp-cream)",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "20px 60px 100px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    title: "What do we offer?",
    style: {
      marginBottom: "70px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "300px 1fr",
      gap: "60px",
      minHeight: "520px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bcp-navy)",
      borderRadius: "var(--radius-lg)",
      padding: "24px 0",
      alignSelf: "start"
    }
  }, SERVICES.map((item, i) => {
    const isActive = i === active;
    const isHover = hovered === i;
    return /*#__PURE__*/React.createElement("div", {
      key: item.key,
      onClick: () => setActive(i),
      onMouseEnter: () => setHovered(i),
      onMouseLeave: () => setHovered(null),
      style: {
        padding: "16px 28px",
        cursor: "pointer",
        transition: "all 0.25s ease",
        borderLeft: isActive ? "3px solid var(--bcp-coral)" : isHover ? "3px solid rgba(222, 93, 93, 0.5)" : "3px solid transparent",
        background: isActive ? "rgba(222, 93, 93, 0.15)" : isHover ? "rgba(255,255,255,0.08)" : "transparent",
        display: "flex",
        alignItems: "center",
        gap: "16px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "11px",
        fontWeight: 600,
        color: isActive ? "var(--bcp-coral)" : "rgba(255,255,255,0.4)",
        letterSpacing: "0.5px",
        minWidth: "20px"
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: "32px",
        height: "32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: isActive ? 1 : 0.85,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: `${A}/icons/${item.icon}`,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        filter: "brightness(0) invert(1)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "14px",
        fontWeight: isActive ? 500 : 400,
        color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
        lineHeight: 1.4
      }
    }, item.menuLabel));
  })), /*#__PURE__*/React.createElement("div", {
    key: s.key,
    style: {
      background: "var(--bcp-navy)",
      borderRadius: "var(--radius-lg)",
      padding: "55px 60px",
      minHeight: "520px",
      boxSizing: "border-box",
      animation: "bcpFadeInUp 0.35s ease forwards"
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes bcpFadeInUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "28px",
      marginBottom: "35px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "64px",
      height: "64px",
      background: "var(--bcp-coral)",
      borderRadius: "var(--radius-lg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "14px",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/icons/${s.icon}`,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      filter: "brightness(0) invert(1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      fontWeight: 500,
      color: "var(--bcp-coral)",
      letterSpacing: "1.5px",
      marginBottom: "8px",
      textTransform: "uppercase"
    }
  }, "Service ", String(active + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "32px",
      fontWeight: 600,
      color: "#fff",
      margin: 0,
      lineHeight: 1.2,
      letterSpacing: "-0.3px"
    }
  }, s.title))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "17px",
      color: "var(--bcp-cream-card)",
      margin: "0 0 30px 0",
      lineHeight: 1.6,
      maxWidth: "600px"
    }
  }, s.subtitle), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      color: "rgba(255,255,255,0.8)",
      lineHeight: 1.75,
      margin: "0 0 35px 0",
      maxWidth: "620px"
    }
  }, s.description), /*#__PURE__*/React.createElement(__ds_scope.FeatureList, {
    title: "Key Features",
    items: s.features,
    style: {
      marginBottom: "40px"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    arrow: true,
    href: "#contact"
  }, "Discuss with us")))));
}
Object.assign(__ds_scope, { HomeServices });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeServices.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeTeam.jsx
try { (() => {
const A = "../../assets";
const TEAM = [{
  id: "rodger",
  name: "Rodger Kennedy",
  img: "rodger-kennedy.png",
  bio: ["Rodger is the Founder and Managing Partner of Boutique Capital Partners. His primary focus is partnership oversight and the promotion and distribution of partner's investment strategies to UK, Channel Island, Swiss and Irish intermediaries.", "Rodger brings extensive and long-established connections across these jurisdictions, having previously been a Director and equity partner with Ninety One (formerly Investec Asset Management), where he enjoyed a 23-year career, most recently as the Head of London Wealth Distribution Team and co-lead of UK Wholesale Distribution."]
}, {
  id: "alan",
  name: "Alan Higgins",
  img: "alan-higgins.png",
  bio: ["Alan has over 30 years of experience in portfolio management.", "MD at Coutts, Alan has held a variety of roles with the bank, including Head of Investment Strategy, Chief Investment Officer and Head of Multi Asset Investing."]
}, {
  id: "alex",
  name: "Alex Marshall-Tate",
  img: "alex-marshall.png",
  bio: ["Alex has over 20 years of global wealth and investment management experience, spanning fund research & selection, portfolio management, product & investment platform development and sales & marketing."]
}, {
  id: "esther",
  name: "Esther Gilbert",
  img: "esther-glibert.png",
  bio: ["Esther is the founder of Boudica, an advisory business which helps asset managers cater to their client need and remain relevant in an evolving and competitive marketplace."]
}, {
  id: "julia",
  name: "Julia Warrander",
  img: "julia-warrander.png",
  bio: ["Julia brings decades of investment and advisory experience to the BCP Advisory Board."]
}, {
  id: "kelly",
  name: "Kelly Prior",
  img: "kelly-prior.png",
  bio: ["Kelly brings extensive multi-manager and fund research experience to the BCP Advisory Board."]
}, {
  id: "aryan",
  name: "Aryan Dave",
  img: "aryan-dave.png",
  bio: ["Aryan supports BCP's distribution and research activities."]
}];
function Modal({
  person,
  onClose
}) {
  if (!person) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--overlay-modal)",
      zIndex: 10000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "#fff",
      borderRadius: "var(--radius-xl)",
      maxWidth: "700px",
      width: "100%",
      maxHeight: "90vh",
      overflowY: "auto",
      boxShadow: "var(--shadow-modal)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bcp-navy)",
      padding: "28px 35px",
      borderRadius: "16px 16px 0 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "26px",
      fontWeight: 700,
      color: "#fff",
      margin: 0,
      lineHeight: 1.3,
      paddingRight: "40px"
    }
  }, person.name), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: "50%",
      right: "20px",
      transform: "translateY(-50%)",
      background: "transparent",
      border: "none",
      color: "#fff",
      fontSize: "32px",
      cursor: "pointer",
      lineHeight: 1,
      opacity: 0.8,
      width: "40px",
      height: "40px"
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "35px"
    }
  }, person.bio.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontSize: "16px",
      lineHeight: 1.8,
      color: "#333",
      margin: i === person.bio.length - 1 ? 0 : "0 0 18px 0"
    }
  }, p)))));
}

/** Navy "Who we are" section: founder spotlight, advisory board grid, marketing partners, bio modals. */
function HomeTeam() {
  const [open, setOpen] = React.useState(null);
  const founder = TEAM[0];
  const board = TEAM.slice(1);
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    style: {
      background: "var(--bcp-navy)",
      padding: "80px 5%",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "1100px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "38px",
      fontWeight: 700,
      color: "#fff",
      textAlign: "center",
      margin: "0 0 50px 0",
      letterSpacing: "-0.5px"
    }
  }, "Who we are"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "50px",
      marginBottom: "60px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TeamCard, {
    image: `${A}/people/${founder.img}`,
    name: founder.name,
    size: "lg",
    linkLabel: "About",
    onClick: () => setOpen(founder)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "300px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "18px",
      fontWeight: 700,
      color: "#fff",
      margin: "0 0 15px 0",
      lineHeight: 1.4
    }
  }, "Boutique Capital Partners was founded by Rodger Kennedy."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.85)",
      margin: 0
    }
  }, "Rodger is driven, commercial, innovative and personable."))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "2px solid #de5c5c",
      borderRadius: "var(--radius-xl)",
      padding: "40px",
      marginBottom: "50px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "26px",
      fontWeight: 700,
      color: "#fff",
      margin: "0 0 15px 0"
    }
  }, "Our Team"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.9)",
      margin: "0 0 35px 0",
      maxWidth: "850px"
    }
  }, "The BCP Advisory Board's impressive experience and diverse skillsets align with BCP's mission to provide the best actively managed investment opportunities to fund buyers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "25px"
    }
  }, board.map(p => /*#__PURE__*/React.createElement(__ds_scope.TeamCard, {
    key: p.id,
    image: `${A}/people/${p.img}`,
    name: p.name,
    linkLabel: "About",
    onClick: () => setOpen(p)
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "26px",
      fontWeight: 700,
      color: "#fff",
      margin: "0 0 12px 0"
    }
  }, "Marketing Partners"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "16px",
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.9)",
      margin: "0 0 30px 0"
    }
  }, "We work with highly skilled marketing & PR professionals with decades of industry experience."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "25px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "130px",
      height: "130px",
      borderRadius: "18px",
      background: "#c0c0c0",
      padding: "15px",
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 12px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/logos/cornerstone-logo.png`,
    alt: "Cornerstone Communicate",
    style: {
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "15px",
      fontWeight: 600,
      color: "#fff",
      margin: "0 0 6px 0"
    }
  }, "Cornerstone Communicate"))))), /*#__PURE__*/React.createElement(Modal, {
    person: open,
    onClose: () => setOpen(null)
  }));
}
Object.assign(__ds_scope, { HomeTeam });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeTeam.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ContactCard = __ds_scope.ContactCard;

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.TeamCard = __ds_scope.TeamCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CalloutBox = __ds_scope.CalloutBox;

__ds_ns.FeatureList = __ds_scope.FeatureList;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.HomeHero = __ds_scope.HomeHero;

__ds_ns.HomeIntro = __ds_scope.HomeIntro;

__ds_ns.HomeInsights = __ds_scope.HomeInsights;

__ds_ns.HomeContact = __ds_scope.HomeContact;

__ds_ns.HomePartnership = __ds_scope.HomePartnership;

__ds_ns.HomeValues = __ds_scope.HomeValues;

__ds_ns.HomePuffin = __ds_scope.HomePuffin;

__ds_ns.HomeServices = __ds_scope.HomeServices;

__ds_ns.HomeTeam = __ds_scope.HomeTeam;

})();
