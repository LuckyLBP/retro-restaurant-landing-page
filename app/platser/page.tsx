import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Platser – Hitta oss",
  description:
    "Hitta din närmaste VIBE*BITE. Två lägen – Borås och Göteborg. Öppet till 02:00 på helger.",
  alternates: { canonical: "/platser" },
}

export default function Platser() {
  return (
    <>
      <div className="grain-overlay" />

      {/* ── HEADER ── */}
      <header className="header">
        <a href="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>VIBE*BITE</a>
        <nav>
          <a href="/meny">Meny</a>
          <a href="#">Vibe Check</a>
          <a href="#">Evenemang</a>
          <a href="/platser" style={{ color: "var(--primary)", textDecoration: "underline" }}>Platser</a>
        </nav>
        <button className="btn-cta">Boka ett bord</button>
      </header>

      <main>

        {/* ── HERO ── */}
        <section
          style={{
            background: "var(--dark)",
            color: "white",
            minHeight: "250px",
            display: "flex",
            alignItems: "center",
            padding: "40px clamp(20px, 5vw, 60px)",
            position: "relative",
            borderBottom: "var(--border)",
            overflow: "hidden",
          }}
        >
          {/* diagonal stripe texture */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.02) 40px, rgba(255,255,255,0.02) 41px)",
              pointerEvents: "none",
            }}
          />

          <div style={{ zIndex: 1 }}>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "14px",
              }}
            >
              BORÅS & GÖTEBORG
            </p>
            <h1
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(60px, 10vw, 110px)",
                lineHeight: 0.88,
                textTransform: "uppercase",
                letterSpacing: "-2px",
              }}
            >
              HITTA OSS
            </h1>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(18px, 3vw, 28px)",
                color: "var(--primary)",
                marginTop: "14px",
              }}
            >
              två lägen, en vibe
            </p>
          </div>

          {/* Sticker */}
          <div
            style={{
              position: "absolute",
              right: "clamp(20px, 8vw, 80px)",
              top: "50%",
              transform: "translateY(-50%) rotate(10deg)",
              background: "var(--primary)",
              color: "white",
              width: "clamp(90px, 12vw, 140px)",
              height: "clamp(90px, 12vw, 140px)",
              borderRadius: "50%",
              border: "3px solid white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(12px, 1.8vw, 17px)",
              lineHeight: 1.2,
            }}
          >
            SVERIGE
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className="marquee">
          <div className="marquee-content">
            &nbsp; ★ BORÅS ★ GÖTEBORG ★ HITTA OSS ★ ALLTID VÄLKOMMEN ★
            BORÅS ★ GÖTEBORG ★ HITTA OSS ★ ALLTID VÄLKOMMEN ★
          </div>
        </div>

        {/* ── LOCATION CARDS ── */}
        <section
          className="section-padding"
          style={{ background: "var(--bg)" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
              gap: "clamp(24px, 4vw, 48px)",
            }}
          >
            {/* ── SÖDERMALM ── */}
            <article
              style={{
                background: "white",
                border: "var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              {/* Map placeholder */}
              <div
                style={{
                  background: "#1a1a1a",
                  height: "220px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "var(--border)",
                  gap: "10px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* grid lines */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }} />
                <div style={{ fontSize: "40px", zIndex: 1 }}>📍</div>
                <span style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "14px",
                  letterSpacing: "3px",
                  color: "white",
                  textTransform: "uppercase",
                  zIndex: 1,
                  background: "var(--primary)",
                  padding: "4px 14px",
                  border: "2px solid white",
                }}>
                  BORÅS
                </span>
              </div>

              <div style={{ padding: "28px" }}>
                <h2
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(22px, 3vw, 28px)",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                    borderLeft: "5px solid var(--primary)",
                    paddingLeft: "12px",
                  }}
                >
                  Borås
                </h2>
                <p style={{ color: "#666", fontSize: "15px", marginBottom: "20px", paddingLeft: "17px" }}>
                  Allégatan 10, 503 32 Borås<br />
                  <a href="tel:033123456" style={{ color: "var(--secondary)", fontWeight: 700, textDecoration: "none" }}>
                    033-123 45 67
                  </a>
                </p>

                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "24px", fontSize: "14px" }}>
                  <tbody>
                    {[
                      ["Tis–Tor", "12:00–23:00"],
                      ["Fre–Lör", "12:00–02:00"],
                      ["Sön", "11:00–21:00"],
                      ["Mån", "Stängt"],
                    ].map(([day, hours]) => (
                      <tr key={day} style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "8px 0", fontWeight: 700, color: "var(--dark)" }}>{day}</td>
                        <td style={{ padding: "8px 0", textAlign: "right", color: hours === "Stängt" ? "#aaa" : "#444" }}>{hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <a
                  href="/boka"
                  className="btn-cta"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "var(--primary)",
                    color: "white",
                    textDecoration: "none",
                    padding: "14px",
                  }}
                >
                  Boka bord
                </a>
              </div>
            </article>

            {/* ── ÖSTERMALM ── */}
            <article
              style={{
                background: "white",
                border: "var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              {/* Map placeholder */}
              <div
                style={{
                  background: "#1a1a1a",
                  height: "220px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "var(--border)",
                  gap: "10px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }} />
                <div style={{ fontSize: "40px", zIndex: 1 }}>📍</div>
                <span style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "14px",
                  letterSpacing: "3px",
                  color: "white",
                  textTransform: "uppercase",
                  zIndex: 1,
                  background: "var(--secondary)",
                  padding: "4px 14px",
                  border: "2px solid white",
                }}>
                  GÖTEBORG
                </span>
              </div>

              <div style={{ padding: "28px" }}>
                <h2
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(22px, 3vw, 28px)",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                    borderLeft: "5px solid var(--secondary)",
                    paddingLeft: "12px",
                  }}
                >
                  Göteborg
                </h2>
                <p style={{ color: "#666", fontSize: "15px", marginBottom: "20px", paddingLeft: "17px" }}>
                  Avenyn 45, 411 34 Göteborg<br />
                  <a href="tel:031987654" style={{ color: "var(--secondary)", fontWeight: 700, textDecoration: "none" }}>
                    031-987 65 43
                  </a>
                </p>

                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "24px", fontSize: "14px" }}>
                  <tbody>
                    {[
                      ["Tis–Tor", "12:00–23:00"],
                      ["Fre–Lör", "12:00–02:00"],
                      ["Sön", "11:00–21:00"],
                      ["Mån", "Stängt"],
                    ].map(([day, hours]) => (
                      <tr key={day} style={{ borderBottom: "1px solid #eee" }}>
                        <td style={{ padding: "8px 0", fontWeight: 700, color: "var(--dark)" }}>{day}</td>
                        <td style={{ padding: "8px 0", textAlign: "right", color: hours === "Stängt" ? "#aaa" : "#444" }}>{hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <a
                  href="/boka"
                  className="btn-cta"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "var(--primary)",
                    color: "white",
                    textDecoration: "none",
                    padding: "14px",
                  }}
                >
                  Boka bord
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* ── TRANSPORT STRIP ── */}
        <section
          style={{
            background: "var(--dark)",
            color: "white",
            borderTop: "var(--border)",
            borderBottom: "var(--border)",
            padding: "clamp(32px, 5vw, 60px) clamp(20px, 5vw, 60px)",
          }}
        >
          <p
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            HIT TAR DU DIG
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "32px",
              textAlign: "center",
            }}
          >
            {[
              { icon: "🚋", label: "Spårvagn", detail: "Göteborg linje\n2, 5 & 6" },
              { icon: "🚌", label: "Buss", detail: "Borås linje\n1, 3 & 7" },
              { icon: "🚲", label: "Cykel", detail: "Ställ vid\nentrén" },
            ].map(({ icon, label, detail }) => (
              <div key={label}>
                <div style={{ fontSize: "36px", marginBottom: "10px" }}>{icon}</div>
                <p
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    marginBottom: "8px",
                    color: "var(--accent)",
                  }}
                >
                  {label}
                </p>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer>
        <div>
          <div className="footer-logo">VIBE*BITE</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Din lokala plats för high-fidelity mat och low-fidelity vibes. Sedan 2025 men känns som 1975.
          </p>
        </div>
        <div className="footer-links">
          <h4>Navigering</h4>
          <ul>
            <li><a href="/meny" style={{ color: "inherit", textDecoration: "none" }}>Meny</a></li>
            <li><a href="/om-oss" style={{ color: "inherit", textDecoration: "none" }}>Om oss</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Integritetspolicy</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Villkor</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Öppettider</h4>
          <ul>
            <li>Tis–Tor: 12:00–23:00</li>
            <li>Fre–Lör: 12:00–02:00</li>
            <li>Sön: 11:00–21:00</li>
            <li>Mån: Stängt (Mental Health Day)</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2025 VIBE*BITE</span>
          <a href="https://github.com/LuckyLBP" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none", fontWeight: 700 }}>DESIGNED BY LuckyLBP</a>
          <span>IG / TW / TK</span>
        </div>
      </footer>
    </>
  )
}
