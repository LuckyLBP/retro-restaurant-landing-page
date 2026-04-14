import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Meny – Burgare, Pizza & Drinkar",
  description:
    "Se hela menyn på VIBE*BITE – smashburgare från 149 kr, neapolitansk pizza, craft cocktails och veganska alternativ. Öppet till 02:00 på helger.",
  alternates: {
    canonical: "/meny",
  },
}

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "VIBE*BITE Meny",
  url: "/meny",
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Burgare",
      hasMenuItem: [
        { "@type": "MenuItem", name: "The OG Burgaren", description: "Trippelsmashad wagyu, hemlig vibe-sås, pickles på brioche.", offers: { "@type": "Offer", price: "149", priceCurrency: "SEK" } },
        { "@type": "MenuItem", name: "Smash & Grab", description: "Dubbel smash, karamelliserad lök, gruyère, dijonnaise.", offers: { "@type": "Offer", price: "159", priceCurrency: "SEK" } },
        { "@type": "MenuItem", name: "Svamp Vibes", description: "Portobello, tryffelost, ruccola, aioli.", offers: { "@type": "Offer", price: "139", priceCurrency: "SEK" } },
        { "@type": "MenuItem", name: "The Late Night Special", description: "Bacon x3, cheddar x2, jalapeños, chipotle.", offers: { "@type": "Offer", price: "169", priceCurrency: "SEK" } },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Pizza",
      hasMenuItem: [
        { "@type": "MenuItem", name: "Elektrisk Pepperoni", description: "Dubbel pepperoni, varm honungsdropp, jäst deg.", offers: { "@type": "Offer", price: "189", priceCurrency: "SEK" } },
        { "@type": "MenuItem", name: "Fungi Disco", description: "Blandsvamp, tryffelolja, fontina, timjan.", offers: { "@type": "Offer", price: "179", priceCurrency: "SEK" } },
        { "@type": "MenuItem", name: "Vit Vibe", description: "Vitlökskräm, mozzarella, spenat, citron.", offers: { "@type": "Offer", price: "169", priceCurrency: "SEK" } },
        { "@type": "MenuItem", name: "The Vibe*Bite Special", description: "Tomatsås, chorizo, padron, ägg, ruccola.", offers: { "@type": "Offer", price: "195", priceCurrency: "SEK" } },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Drinkar",
      hasMenuItem: [
        { "@type": "MenuItem", name: "Disco Sour", description: "Gin, blå ärtstjärna, fläderblomma och ätbart guldglitter.", offers: { "@type": "Offer", price: "125", priceCurrency: "SEK" } },
        { "@type": "MenuItem", name: "Neon Mule", description: "Vodka, ingefärsbeer, lime, myntasirap.", offers: { "@type": "Offer", price: "115", priceCurrency: "SEK" } },
        { "@type": "MenuItem", name: "Retro Spritz", description: "Aperol, prosecco, blodapelsin.", offers: { "@type": "Offer", price: "119", priceCurrency: "SEK" } },
        { "@type": "MenuItem", name: "Alkoholfri Vibe", description: "Passionsfrukt, ingefära, koriander, sodavatten.", offers: { "@type": "Offer", price: "89", priceCurrency: "SEK" } },
      ],
    },
    {
      "@type": "MenuSection",
      name: "Smått & Gott",
      hasMenuItem: [
        { "@type": "MenuItem", name: "Vibe Frites", description: "Tryffelparmesan, örter, aioli.", offers: { "@type": "Offer", price: "69", priceCurrency: "SEK" } },
        { "@type": "MenuItem", name: "Loaded Tots", description: "Potatisnuggets, bacon, cheddar, jalapeño.", offers: { "@type": "Offer", price: "89", priceCurrency: "SEK" } },
        { "@type": "MenuItem", name: "Dip Trio", description: "Hummus, vitlöksaioli, chipotle.", offers: { "@type": "Offer", price: "59", priceCurrency: "SEK" } },
      ],
    },
  ],
}

export default function Meny() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <div className="grain-overlay" />

      {/* ── HEADER ── */}
      <header className="header">
        <div className="logo">VIBE*BITE</div>
        <nav>
          <a href="/meny" style={{ color: "var(--primary)", textDecoration: "underline" }}>Meny</a>
          <a href="#">Vibe Check</a>
          <a href="#">Evenemang</a>
          <a href="/platser">Platser</a>
        </nav>
        <a href="/boka" className="btn-cta">Boka ett bord</a>
      </header>

      <main>

        {/* ── HERO BANNER ── */}
        <section
          style={{
            background: "var(--dark)",
            color: "white",
            minHeight: "250px",
            display: "flex",
            alignItems: "center",
            padding: "40px 20px",
            position: "relative",
            borderBottom: "var(--border)",
            overflow: "hidden",
          }}
        >
          {/* Background texture stripes */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.03) 60px, rgba(255,255,255,0.03) 61px)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: "700px", paddingLeft: "clamp(20px, 5vw, 60px)", zIndex: 1 }}>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "16px",
              }}
            >
              VIBE*BITE — 2025
            </p>
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
              MENYN
            </h1>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 700,
                fontSize: "clamp(20px, 3vw, 32px)",
                color: "var(--primary)",
                marginTop: "12px",
              }}
            >
              allt är fresh
            </p>
          </div>

          {/* Sticker */}
          <div
            className="sticker"
            style={{
              background: "var(--accent)",
              color: "var(--dark)",
              position: "absolute",
              right: "clamp(20px, 8vw, 80px)",
              top: "50%",
              transform: "translateY(-50%) rotate(-12deg)",
              width: "clamp(90px, 12vw, 140px)",
              height: "clamp(90px, 12vw, 140px)",
              fontSize: "clamp(11px, 1.5vw, 15px)",
              lineHeight: 1.2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "50%",
              border: "var(--border)",
              fontWeight: 800,
              fontFamily: "Syne, sans-serif",
            }}
          >
            BESTÄLL
            <br />
            NU
          </div>
        </section>

        {/* ── MARQUEE ── */}
        <div className="marquee">
          <div className="marquee-content">
            &nbsp; ★ BURGARE ★ PIZZA ★ DRINKAR ★ SMÅTT &amp; GOTT ★ ALLERGENER PÅ BEGÄRAN ★
            BURGARE ★ PIZZA ★ DRINKAR ★ SMÅTT &amp; GOTT ★ ALLERGENER PÅ BEGÄRAN ★
          </div>
        </div>

        {/* ══════════════════════════════
            BURGARE
        ══════════════════════════════ */}
        <section className="section-padding" style={{ background: "white" }}>
          <div className="section-header">
            <h2
              className="section-title"
              style={{
                borderLeft: "6px solid var(--primary)",
                paddingLeft: "18px",
              }}
            >
              BURGARE
            </h2>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#999",
                fontSize: "clamp(14px, 2vw, 18px)",
              }}
            >
              smash-patties &amp; allt därtill
            </span>
          </div>

          <div className="menu-grid">
            {/* The OG Burgaren */}
            <div className="menu-card">
              <span className="menu-tag">Bästsäljare</span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="The OG Burgaren"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>The OG Burgaren</h3>
                  <span className="price">149 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Trippelsmashad wagyu, hemlig vibe-sås, pickles på brioche.
                </p>
              </div>
            </div>

            {/* Smash & Grab */}
            <div className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Smash & Grab"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Smash &amp; Grab</h3>
                  <span className="price">159 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Dubbel smash, karamelliserad lök, gruyère, dijonnaise.
                </p>
              </div>
            </div>

            {/* Svamp Vibes */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Vegansk</span>
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Svamp Vibes"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Svamp Vibes</h3>
                  <span className="price">139 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Portobello, tryffelost, ruccola, aioli (vegansk).
                </p>
              </div>
            </div>

            {/* The Late Night Special */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Stark</span>
              <img
                src="https://images.unsplash.com/photo-1648221410814-9d45c9ab144b?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="The Late Night Special"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>The Late Night Special</h3>
                  <span className="price">169 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Bacon x3, cheddar x2, jalapeños, chipotle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            PIZZA
        ══════════════════════════════ */}
        <section className="section-padding" style={{ background: "var(--bg)", borderTop: "var(--border)" }}>
          <div className="section-header">
            <h2
              className="section-title"
              style={{
                borderLeft: "6px solid var(--secondary)",
                paddingLeft: "18px",
              }}
            >
              PIZZA
            </h2>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#999",
                fontSize: "clamp(14px, 2vw, 18px)",
              }}
            >
              jäst deg, lång fermentering
            </span>
          </div>

          <div className="menu-grid">
            {/* Elektrisk Pepperoni */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Stark</span>
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Elektrisk Pepperoni"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Elektrisk Pepperoni</h3>
                  <span className="price">189 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Dubbel pepperoni, varm honungsdropp, jäst deg.
                </p>
              </div>
            </div>

            {/* Fungi Disco */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Populär</span>
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Fungi Disco"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Fungi Disco</h3>
                  <span className="price">179 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Blandsvamp, tryffelolja, fontina, timjan.
                </p>
              </div>
            </div>

            {/* Vit Vibe */}
            <div className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Vit Vibe"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Vit Vibe</h3>
                  <span className="price">169 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Vitlökskräm, mozzarella, spenat, citron.
                </p>
              </div>
            </div>

            {/* The Vibe*Bite Special */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--primary)" }}>Kockens val</span>
              <img
                src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="The Vibe*Bite Special"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>The Vibe*Bite Special</h3>
                  <span className="price">195 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Tomatsås, chorizo, padron, ägg, ruccola.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            DRINKAR
        ══════════════════════════════ */}
        <section className="section-padding" style={{ background: "white", borderTop: "var(--border)" }}>
          <div className="section-header">
            <h2
              className="section-title"
              style={{
                borderLeft: "6px solid var(--accent)",
                paddingLeft: "18px",
              }}
            >
              DRINKAR
            </h2>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#999",
                fontSize: "clamp(14px, 2vw, 18px)",
              }}
            >
              craft cocktails &amp; alkoholfritt
            </span>
          </div>

          <div className="menu-grid">
            {/* Disco Sour */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Populär</span>
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Disco Sour"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Disco Sour</h3>
                  <span className="price">125 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Gin, blå ärtstjärna, fläderblomma och ätbart guldglitter.
                </p>
              </div>
            </div>

            {/* Neon Mule */}
            <div className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Neon Mule"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Neon Mule</h3>
                  <span className="price">115 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Vodka, ingefärsbeer, lime, myntasirap.
                </p>
              </div>
            </div>

            {/* Retro Spritz */}
            <div className="menu-card">
              <img
                src="https://images.pexels.com/photos/9119767/pexels-photo-9119767.jpeg"
                alt="Retro Spritz"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Retro Spritz</h3>
                  <span className="price">119 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Aperol, prosecco, blodapelsin.
                </p>
              </div>
            </div>

            {/* Alkoholfri Vibe */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Alkoholfri</span>
              <img
                src="https://images.pexels.com/photos/11009210/pexels-photo-11009210.jpeg"
                alt="Alkoholfri Vibe"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Alkoholfri Vibe</h3>
                  <span className="price">89 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Passionsfrukt, ingefära, koriander, sodavatten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
            SMÅTT & GOTT
        ══════════════════════════════ */}
        <section className="section-padding" style={{ background: "var(--bg)", borderTop: "var(--border)" }}>
          <div className="section-header">
            <h2
              className="section-title"
              style={{
                borderLeft: "6px solid var(--primary)",
                paddingLeft: "18px",
              }}
            >
              SMÅTT &amp; GOTT
            </h2>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#999",
                fontSize: "clamp(14px, 2vw, 18px)",
              }}
            >
              sidor, snacks &amp; dipper
            </span>
          </div>

          <div className="menu-grid">
            {/* Vibe Frites */}
            <div className="menu-card">
              <span className="menu-tag">Bästsäljare</span>
              <img
                src="https://images.pexels.com/photos/20535802/pexels-photo-20535802.jpeg"
                alt="Vibe Frites"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Vibe Frites</h3>
                  <span className="price">69 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Tryffelparmesan, örter, aioli.
                </p>
              </div>
            </div>

            {/* Loaded Tots */}
            <div className="menu-card">
              <img
                src="https://images.pexels.com/photos/14855138/pexels-photo-14855138.jpeg"
                alt="Loaded Tots"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Loaded Tots</h3>
                  <span className="price">89 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Potatisnuggets, bacon, cheddar, jalapeño.
                </p>
              </div>
            </div>

            {/* Dip Trio */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Vegansk</span>
              <img
                src="https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Dip Trio"
              />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Dip Trio</h3>
                  <span className="price">59 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Hummus, vitlöksaioli, chipotle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ALLERGEN NOTE ── */}
        <section
          style={{
            background: "var(--dark)",
            color: "white",
            padding: "40px clamp(20px, 5vw, 60px)",
            borderTop: "var(--border)",
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              flexShrink: 0,
              background: "var(--accent)",
              border: "var(--border)",
              borderColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Syne, sans-serif",
              fontWeight: 800,
              fontSize: "22px",
              color: "var(--dark)",
            }}
          >
            !
          </div>
          <div>
            <p
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(14px, 2vw, 18px)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "6px",
              }}
            >
              Allergener &amp; specialkost
            </p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: "600px" }}>
              Tala med personalen för fullständig ingredienslista. Vi kan anpassa de flesta rätter.
            </p>
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
            <li>
              <a href="/meny" style={{ color: "inherit", textDecoration: "none" }}>Meny</a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Om oss</a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Integritetspolicy</a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Villkor</a>
            </li>
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
