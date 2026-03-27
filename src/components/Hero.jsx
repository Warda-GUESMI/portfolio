import { useEffect, useState } from "react";

const roles = [
  "Élève-Ingénieure en Informatique",
  "AI & Machine Learning Enthusiast",
  "Data Science Passionnée",
  "Full-Stack Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(
          () => setDisplayed(role.slice(0, displayed.length + 1)),
          60,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, #00d4ff11 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #7c3aed11 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        {/* ── GRID : texte à gauche, photo à droite ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* ── COLONNE TEXTE ── */}
          <div>
            <div className="fade-up delay-1" style={{ marginBottom: "1rem" }}>
              <span
                style={{
                  fontFamily: "DM Mono, monospace",
                  fontSize: "0.75rem",
                  color: "var(--cyan)",
                  letterSpacing: "0.3em",
                }}
              >
                {"> "} Bienvenue sur mon portfolio
              </span>
            </div>

            <h1
              className="fade-up delay-2"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 8vw, 6rem)",
                lineHeight: 1.05,
                marginBottom: "1.2rem",
              }}
            >
              Warda
              <br />
              <span style={{ color: "var(--cyan)" }}>Guesmi</span>
            </h1>

            <div
              className="fade-up delay-3"
              style={{
                fontFamily: "DM Mono, monospace",
                fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)",
                color: "var(--text-dim)",
                marginBottom: "2rem",
                height: "1.8rem",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span style={{ color: "var(--violet)" }}>{"// "}</span>
              <span>{displayed}</span>
              <span
                style={{ animation: "blink 1s infinite", color: "var(--cyan)" }}
              >
                |
              </span>
            </div>

            <p
              className="fade-up delay-4"
              style={{
                color: "var(--text-dim)",
                maxWidth: "560px",
                lineHeight: 1.8,
                fontSize: "0.9rem",
                marginBottom: "2.5rem",
              }}
            >
              Étudiante en 2ème année de Génie Informatique à ENICarthage,
              passionnée par l'IA, la Data Science et le Machine Learning. Je
              construis des solutions innovantes à la croisée de l'ingénierie et
              de l'intelligence artificielle.
            </p>

            <div
              className="fade-up delay-5"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <a
                href="#projects"
                style={{
                  padding: "0.8rem 2rem",
                  background: " 'var(--sky)',",
                  color: "#ffffff",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  borderRadius: "6px",
                  letterSpacing: "0.05em",
                  animation: "pulse-glow 3s infinite",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                Voir mes projets →
              </a>
              <a
                href="mailto:warda.guesmi@enicar.ucar.tn"
                style={{
                  padding: "0.8rem 2rem",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  borderRadius: "6px",
                  letterSpacing: "0.05em",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "var(--cyan)";
                  e.target.style.color = "var(--cyan)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "var(--border)";
                  e.target.style.color = "var(--text)";
                }}
              >
                Me contacter
              </a>
            </div>

            <div
              className="fade-up delay-5"
              style={{
                marginTop: "3rem",
                display: "flex",
                gap: "1.5rem",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                  letterSpacing: "0.2em",
                }}
              >
                RETROUVEZ-MOI
              </span>
              {[
                { label: "GitHub", href: "https://github.com/warda-GUESMI" },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/in/wardaguesmi",
                },
                { label: "+216 25 438 371", href: "tel:+21625438371" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--text-dim)",
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--cyan)")}
                  onMouseLeave={(e) =>
                    (e.target.style.color = "var(--text-dim)")
                  }
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* ── COLONNE PHOTO ── */}
          <div
            className="fade-up delay-3"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <div
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                border: "3px solid var(--cyan)",
                overflow: "hidden",
                boxShadow: "0 0 30px #00d4ff25",
                background: "var(--bg2)",
                flexShrink: 0,
              }}
            >
              {/* ← Place ton fichier photo.jpg dans public/ */}
              <img
                src="/portfolio/87.jpg"
                alt="Warda Guesmi"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.innerHTML =
                    '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;">👩‍💻</div>';
                }}
              />
            </div>

            {/* Badge localisation */}
            <div
              style={{
                padding: "0.35rem 1rem",
                background: "var(--bg2)",
                border: "1px solid var(--border)",
                borderRadius: "99px",
                fontSize: "0.68rem",
                color: "var(--text-dim)",
              }}
            >
              📍 Soukra, Ariana, Tunisie
            </div>

            {/* Badge école */}
            <div
              style={{
                padding: "0.35rem 1rem",
                background: "var(--cyan-dim)",
                border: "1px solid var(--cyan)",
                borderRadius: "99px",
                fontSize: "0.68rem",
                color: "var(--cyan)",
              }}
            >
              🎓 ENICarthage — 2ème année
            </div>
          </div>
        </div>
      </div>

      {/* Responsive mobile */}
      <style>{`
        @media (max-width: 768px) {
          section > .container > div {
            grid-template-columns: 1fr !important;
          }
          section > .container > div > div:last-child {
            order: -1;
            justify-self: center;
          }
        }
      `}</style>
    </section>
  );
}
