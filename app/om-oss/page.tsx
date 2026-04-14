import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Om oss – Historien bakom VIBE*BITE",
  description:
    "VIBE*BITE föddes 2025 ur en enkel övertygelse: bra mat ska kännas lika bra som den smakar. Lär känna oss, vår filosofi och teamet bakom vibrationen.",
  alternates: { canonical: "/om-oss" },
}

const team = [
  { name: "Bella", role: "Grundare & VD", line: "Drömmer i burgare, andas i 70-tal.", emoji: "👨‍🍳", bg: "var(--primary)" },
  { name: "Lucas", role: "Grundare & Kökschef", line: "Smaken är hans signatur, varje gång.", emoji: "👩‍🍳", bg: "var(--secondary)" },
  { name: "Jane", role: "Barchef", line: "Blandar cocktails som konst.", emoji: "🍸", bg: "var(--accent)" },
  { name: "Laquisha", role: "Musikansvarig", line: "Om spellistan är fel är allt fel.", emoji: "🎵", bg: "var(--dark)" },
]

const stats = [
  { number: "2", label: "Restauranger" },
  { number: "40+", label: "Rätter på menyn" },
  { number: "1000+", label: "Nöjda gäster/vecka" },
  { number: "0", label: "Kompromisser" },
]

const pillars = [
  {
    num: "01",
    title: "RÅVAROR FÖRST",
    body: "Vi köper lokalt och säsongsbaserat. Inget fryst, inget halvfabrikat. Bara råvaror vi faktiskt skulle servera till oss själva.",
  },
  {
    num: "02",
    title: "VIBES INGET SNACK",
    body: "Atmosfären är inte en eftertanke — den är halva rätten. Från spellistan till belysningen, varje detalj är avsiktlig.",
  },
  {
    num: "03",
    title: "ÖPPET FÖR ALLA",
    body: "Oavsett om du är här för en snabb lunch eller en lång kväll, du är välkommen. Drop-in alltid tillåtet i huvudsalen.",
  },
]

export default function OmOss() {
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
          <a href="/platser">Platser</a>
        </nav>
        <a href="/boka" className="btn-cta">Boka ett bord</a>
      </header>

      <main>

        {/* ── 1. HERO ── */}
        <section
          style={{
            background: "var(--dark)",
            color: "white",
            minHeight: "300px",
            display: "flex",
            alignItems: "center",
            padding: "50px clamp(20px, 5vw, 60px)",
            position: "relative",
            borderBottom: "var(--border)",
            overflow: "hidden",
          }}
        >
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
                fontSize: "11px",
                letterSpacing: "5px",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "16px",
              }}
            >
              BORÅS &amp; GÖTEBORG
            </p>
            <h1
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(56px, 10vw, 110px)",
                lineHeight: 0.88,
                textTransform: "uppercase",
                letterSpacing: "-2px",
              }}
            >
              VÅR<br />HISTORIA
            </h1>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(18px, 3vw, 30px)",
                color: "var(--primary)",
                marginTop: "16px",
              }}
            >
              från en idé till en vibe
            </p>
          </div>

          {/* EST. sticker */}
          <div
            style={{
              position: "absolute",
              right: "clamp(20px, 8vw, 80px)",
              top: "50%",
              transform: "translateY(-50%) rotate(-8deg)",
              background: "var(--accent)",
              color: "var(--dark)",
              width: "clamp(90px, 12vw, 140px)",
              height: "clamp(90px, 12vw, 140px)",
              borderRadius: "50%",
              border: "var(--border)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(11px, 1.6vw, 16px)",
              lineHeight: 1.2,
            }}
          >
            EST.<br />2025
          </div>
        </section>

        {/* ── 2. GRUNDARHISTORIA ── */}
        <section
          style={{
            background: "white",
            borderBottom: "var(--border)",
            padding: "clamp(40px, 6vw, 80px) clamp(20px, 5vw, 60px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "clamp(32px, 5vw, 64px)",
            alignItems: "center",
          }}
        >
          {/* Text left */}
          <div>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "var(--primary)",
                marginBottom: "20px",
              }}
            >
              HISTORIEN
            </p>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "17px",
                lineHeight: 1.75,
                color: "#444",
              }}
            >
              VIBE*BITE startade 2025 i ett litet kök i Borås med en enkel övertygelse — att bra mat ska
              kännas lika bra som den smakar. Grundarna Lucas och Kim tröttnade på att välja mellan god mat
              och god stämning. Varför inte ha båda? Med en kärlek för 70-talets estetik och en hunger efter
              riktiga smaker skapade de ett ställe där varje besök känns som en händelse.
            </p>
          </div>

          {/* Pull-quote right */}
          <div
            style={{
              background: "var(--accent)",
              border: "var(--border)",
              boxShadow: "var(--shadow)",
              padding: "clamp(28px, 4vw, 48px)",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(22px, 3.5vw, 38px)",
                lineHeight: 1.2,
                color: "var(--dark)",
                marginBottom: "20px",
              }}
            >
              "Varför välja mellan god mat och god stämning?"
            </p>
            <p
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "var(--dark)",
                opacity: 0.6,
              }}
            >
              — Lucas &amp; Kim, Grundare
            </p>
          </div>
        </section>

        {/* ── 3. FILOSOFI ── */}
        <section
          className="section-padding"
          style={{ background: "var(--bg)", borderBottom: "var(--border)" }}
        >
          <h2
            className="section-title"
            style={{
              borderLeft: "6px solid var(--primary)",
              paddingLeft: "18px",
              marginBottom: "clamp(32px, 5vw, 56px)",
            }}
          >
            VÅR FILOSOFI
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "clamp(20px, 3vw, 32px)",
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.num}
                style={{
                  background: "white",
                  border: "var(--border)",
                  padding: "28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* background number */}
                <span
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "10px",
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "80px",
                    color: "var(--dark)",
                    opacity: 0.06,
                    lineHeight: 1,
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                >
                  {p.num}
                </span>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "3px",
                    color: "var(--primary)",
                    marginBottom: "10px",
                  }}
                >
                  {p.num}
                </p>
                <h3
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(16px, 2vw, 20px)",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                    color: "var(--dark)",
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "15px", color: "#666", lineHeight: 1.65 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. TEAMET ── */}
        <section
          className="section-padding"
          style={{ background: "white", borderBottom: "var(--border)" }}
        >
          <h2
            className="section-title"
            style={{
              borderLeft: "6px solid var(--secondary)",
              paddingLeft: "18px",
              marginBottom: "clamp(32px, 5vw, 56px)",
            }}
          >
            TEAMET
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
              gap: "clamp(16px, 3vw, 28px)",
            }}
          >
            {team.map((member) => (
              <div key={member.name}>
                {/* avatar block */}
                <div
                  style={{
                    background: member.bg,
                    aspectRatio: "1 / 1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "clamp(40px, 6vw, 64px)",
                    border: "var(--border)",
                    marginBottom: "16px",
                  }}
                >
                  {member.emoji}
                </div>
                <h3
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "18px",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "14px",
                    color: "var(--primary)",
                    marginBottom: "6px",
                  }}
                >
                  {member.role}
                </p>
                <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "13px", color: "#999" }}>
                  {member.line}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. SIFFROR ── */}
        <section
          style={{
            background: "var(--primary)",
            color: "white",
            borderTop: "var(--border)",
            borderBottom: "var(--border)",
            padding: "clamp(40px, 6vw, 70px) clamp(20px, 5vw, 60px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "32px",
              textAlign: "center",
            }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(42px, 7vw, 72px)",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {s.number}
                </p>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    opacity: 0.75,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. CTA ── */}
        <section
          style={{
            background: "var(--dark)",
            color: "white",
            padding: "clamp(60px, 8vw, 100px) clamp(20px, 5vw, 60px)",
            textAlign: "center",
            borderBottom: "var(--border)",
          }}
        >
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px, 7vw, 80px)",
              textTransform: "uppercase",
              lineHeight: 0.9,
              letterSpacing: "-1px",
              marginBottom: "16px",
            }}
          >
            REDO ATT VIBRA?
          </h2>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(18px, 3vw, 28px)",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "40px",
            }}
          >
            bordet väntar
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/boka"
              className="btn-cta"
              style={{ background: "var(--primary)", color: "white", textDecoration: "none" }}
            >
              Boka bord →
            </a>
            <a
              href="/meny"
              className="btn-cta"
              style={{ background: "white", color: "var(--dark)", textDecoration: "none" }}
            >
              Se menyn →
            </a>
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
