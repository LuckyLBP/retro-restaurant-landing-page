import type { Metadata } from "next"
import BookingWidget from "./BookingWidget"

export const metadata: Metadata = {
  title: "Boka bord – Reservera din plats",
  description:
    "Boka bord på VIBE*BITE i Stockholm. Välj plats, datum och antal gäster. Direkt bekräftelse via e-post.",
  alternates: { canonical: "/boka" },
}


export default function Boka() {
  return (
    <>
      <div className="grain-overlay" />

      {/* ── HEADER ── */}
      <header className="header">
        <div className="logo">VIBE*BITE</div>
        <nav>
          <a href="/meny">Meny</a>
          <a href="#">Vibe Check</a>
          <a href="#">Evenemang</a>
          <a href="/platser">Platser</a>
        </nav>
        <a
          href="/boka"
          className="btn-cta"
          style={{
            boxShadow: "2px 2px 0 var(--dark)",
            transform: "translate(2px, 2px)",
            background: "var(--primary)",
            color: "white",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Boka ett bord
        </a>
      </header>

      <main>

        {/* ── HERO ── */}
        <section
          style={{
            background: "var(--accent)",
            color: "var(--dark)",
            minHeight: "200px",
            display: "flex",
            alignItems: "center",
            padding: "40px clamp(20px, 5vw, 60px)",
            borderBottom: "var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* dot grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              pointerEvents: "none",
            }}
          />
          <div style={{ zIndex: 1 }}>
            <h1
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(56px, 10vw, 100px)",
                lineHeight: 0.88,
                textTransform: "uppercase",
                letterSpacing: "-2px",
              }}
            >
              BOKA BORD
            </h1>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(18px, 3vw, 28px)",
                color: "var(--dark)",
                opacity: 0.65,
                marginTop: "12px",
              }}
            >
              reservera din plats
            </p>
          </div>
        </section>

        {/* ── FORM SECTION ── */}
        <section className="section-padding" style={{ background: "var(--bg)" }}>
          <BookingWidget />
        </section>

        {/* ── DROP-IN STRIP ── */}
        <section
          style={{
            background: "var(--dark)",
            color: "white",
            borderTop: "var(--border)",
            padding: "clamp(40px, 6vw, 70px) clamp(20px, 5vw, 60px)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(20px, 3vw, 32px)",
              textTransform: "uppercase",
              letterSpacing: "-0.5px",
              marginBottom: "12px",
            }}
          >
            Ingen reservation behövs
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "clamp(16px, 2vw, 22px)",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "28px",
            }}
          >
            Huvudsalen har alltid drop-in platser. Ta bara med energin.
          </p>
          <a
            href="/meny"
            className="btn-cta"
            style={{ background: "white", color: "var(--dark)", textDecoration: "none", display: "inline-block" }}
          >
            Se menyn →
          </a>
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
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Om oss</a></li>
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
