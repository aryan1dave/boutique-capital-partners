import React from "react";
import { TeamCard } from "../../components/cards/TeamCard.jsx";

const A = "../../assets";

const TEAM = [
  {
    id: "rodger",
    name: "Rodger Kennedy",
    img: "rodger-kennedy.png",
    bio: [
      "Rodger is the Founder and Managing Partner of Boutique Capital Partners. His primary focus is partnership oversight and the promotion and distribution of partner's investment strategies to UK, Channel Island, Swiss and Irish intermediaries.",
      "Rodger brings extensive and long-established connections across these jurisdictions, having previously been a Director and equity partner with Ninety One (formerly Investec Asset Management), where he enjoyed a 23-year career, most recently as the Head of London Wealth Distribution Team and co-lead of UK Wholesale Distribution.",
    ],
  },
  {
    id: "alan",
    name: "Alan Higgins",
    img: "alan-higgins.png",
    bio: [
      "Alan has over 30 years of experience in portfolio management.",
      "MD at Coutts, Alan has held a variety of roles with the bank, including Head of Investment Strategy, Chief Investment Officer and Head of Multi Asset Investing.",
    ],
  },
  {
    id: "alex",
    name: "Alex Marshall-Tate",
    img: "alex-marshall.png",
    bio: [
      "Alex has over 20 years of global wealth and investment management experience, spanning fund research & selection, portfolio management, product & investment platform development and sales & marketing.",
    ],
  },
  {
    id: "esther",
    name: "Esther Gilbert",
    img: "esther-glibert.png",
    bio: [
      "Esther is the founder of Boudica, an advisory business which helps asset managers cater to their client need and remain relevant in an evolving and competitive marketplace.",
    ],
  },
  {
    id: "julia",
    name: "Julia Warrander",
    img: "julia-warrander.png",
    bio: ["Julia brings decades of investment and advisory experience to the BCP Advisory Board."],
  },
  {
    id: "kelly",
    name: "Kelly Prior",
    img: "kelly-prior.png",
    bio: ["Kelly brings extensive multi-manager and fund research experience to the BCP Advisory Board."],
  },
  {
    id: "aryan",
    name: "Aryan Dave",
    img: "aryan-dave.png",
    bio: ["Aryan supports BCP's distribution and research activities."],
  },
];

function Modal({ person, onClose }) {
  if (!person) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--overlay-modal)",
        zIndex: 10000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          borderRadius: "var(--radius-xl)",
          maxWidth: "700px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "var(--shadow-modal)",
        }}
      >
        <div style={{ background: "var(--bcp-navy)", padding: "28px 35px", borderRadius: "16px 16px 0 0", position: "relative" }}>
          <h3 style={{ fontSize: "26px", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.3, paddingRight: "40px" }}>
            {person.name}
          </h3>
          <button
            onClick={onClose}
            style={{
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
              height: "40px",
            }}
          >
            ×
          </button>
        </div>
        <div style={{ padding: "35px" }}>
          {person.bio.map((p, i) => (
            <p key={i} style={{ fontSize: "16px", lineHeight: 1.8, color: "#333", margin: i === person.bio.length - 1 ? 0 : "0 0 18px 0" }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Navy "Who we are" section: founder spotlight, advisory board grid, marketing partners, bio modals. */
export function HomeTeam() {
  const [open, setOpen] = React.useState(null);
  const founder = TEAM[0];
  const board = TEAM.slice(1);

  return (
    <section id="team" style={{ background: "var(--bcp-navy)", padding: "80px 5%", fontFamily: "var(--font-brand)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "38px", fontWeight: 700, color: "#fff", textAlign: "center", margin: "0 0 50px 0", letterSpacing: "-0.5px" }}>
          Who we are
        </h2>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px", marginBottom: "60px" }}>
          <TeamCard image={`${A}/people/${founder.img}`} name={founder.name} size="lg" linkLabel="About" onClick={() => setOpen(founder)} />
          <div style={{ maxWidth: "300px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#fff", margin: "0 0 15px 0", lineHeight: 1.4 }}>
              Boutique Capital Partners was founded by Rodger Kennedy.
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 1.6, color: "rgba(255,255,255,0.85)", margin: 0 }}>
              Rodger is driven, commercial, innovative and personable.
            </p>
          </div>
        </div>

        <div style={{ border: "2px solid #de5c5c", borderRadius: "var(--radius-xl)", padding: "40px", marginBottom: "50px" }}>
          <h3 style={{ fontSize: "26px", fontWeight: 700, color: "#fff", margin: "0 0 15px 0" }}>Our Team</h3>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.9)", margin: "0 0 35px 0", maxWidth: "850px" }}>
            The BCP Advisory Board's impressive experience and diverse skillsets align with BCP's mission to provide the
            best actively managed investment opportunities to fund buyers.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "25px" }}>
            {board.map((p) => (
              <TeamCard key={p.id} image={`${A}/people/${p.img}`} name={p.name} linkLabel="About" onClick={() => setOpen(p)} />
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: "26px", fontWeight: 700, color: "#fff", margin: "0 0 12px 0" }}>Marketing Partners</h3>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(255,255,255,0.9)", margin: "0 0 30px 0" }}>
            We work with highly skilled marketing &amp; PR professionals with decades of industry experience.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "25px" }}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "18px",
                  background: "#c0c0c0",
                  padding: "15px",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                }}
              >
                <img src={`${A}/logos/cornerstone-logo.png`} alt="Cornerstone Communicate" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#fff", margin: "0 0 6px 0" }}>Cornerstone Communicate</h4>
            </div>
          </div>
        </div>
      </div>
      <Modal person={open} onClose={() => setOpen(null)} />
    </section>
  );
}
