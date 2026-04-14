import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VIBE*BITE – Retro Burgare & Pizza | Allt är Fresh",
  description:
    "VIBE*BITE serverar smashburgare, neapolitansk pizza och craft cocktails med 70-talsestetik. Lokalt inköpt, skyhögt gott – öppet till 02:00 på helger.",
  alternates: {
    canonical: "/",
  },
}

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "VIBE*BITE",
  description:
    "Retro-estetik restaurang som serverar smashburgare, neapolitansk pizza och craft cocktails med 70-talsinspiration.",
  image: "/vibe*bite_logo.png",
  logo: "/vibe*bite_logo.png",
  url: "/",
  menu: "/meny",
  servesCuisine: ["Burgare", "Pizza", "Cocktails"],
  priceRange: "$$",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "12:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "12:00", closes: "02:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday"], opens: "11:00", closes: "21:00" },
  ],
  sameAs: ["https://www.instagram.com/vibe.bite"],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <div className="grain-overlay" />

      <header className="header">
        <a href="/" className="logo" style={{ textDecoration: "none", color: "inherit" }}>VIBE*BITE</a>
        <nav>
          <a href="/meny">Meny</a>
          <a href="/om-oss">Om oss</a>
          <a href="/platser">Platser</a>
        </nav>
        <a href="/boka" className="btn-cta">Boka ett bord</a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Say less.
              <br />
              <span>SMAKA.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              70-talsestetik med en modern twist. Lokalt inköpt, skyhögt gott, och strikt för dem som vibar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="/boka" className="btn-cta" style={{ background: "var(--primary)", color: "white", textDecoration: "none", display: "inline-block" }}>
                Beställ nu
              </a>
              <a href="/meny" className="btn-cta" style={{ background: "white", textDecoration: "none", display: "inline-block" }}>
                Se menyn
              </a>
            </div>
          </div>
          <div className="hero-img">
            <div className="sticker">
              FÄRSKT AF
              <br />
              VARJE DAG
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ESTETISKT
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              LOWKEY BRAND
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; ★ BURGARE SOM SMAKAR ★ CRAFT COCKTAILS ★ RETRO VIBES ONLY ★ ÖPPET TILL 01:00 ★ BÄST I STAN ★
            BURGARE SOM SMAKAR ★ CRAFT COCKTAILS ★ RETRO VIBES ONLY ★ ÖPPET TILL 01:00 ★ BÄST I STAN
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">KOCKENS FAVORITER</h2>
            <a
              href="/meny"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Se hela menyn →
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Bästsäljare</span>
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="The OG Burgaren"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>The OG Burgaren</h3>
                  <span className="price">149 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Trippelsmashad wagyu, hemlig vibe-sås, pickles på brioche.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Stark
              </span>
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Elektrisk Pepperoni"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Elektrisk Pepperoni</h3>
                  <span className="price">189 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Dubbel pepperoni, varm honungsdropp, jäst deg.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Populär
              </span>
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Disco Sour"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Disco Sour</h3>
                  <span className="price">125 kr</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Gin, blå ärtstjärna, fläderblomma och ätbart guldglitter.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">VIBE-CHECKEN ÄR GODKÄND.</h2>
            <p className="vibe-text">
              Vi gör inte bara mat. Vi skapar ögonblick. Från den kurerade 90-tals hip-hop-spellistan till 70-talets
              diner-stolar är varje hörn designat för ditt nästa dump. Inga reservationer behövs till huvudrummet,
              ta bara med energin.
            </p>
            <a href="/om-oss" className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white", textDecoration: "none", display: "inline-block" }}>
              Vår historia
            </a>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @VIBE.BITE
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Smashburgare serverad på VIBE*BITE"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="VIBE*BITE restaurangmiljö med retro-inredning"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Färska råvaror och desserter på VIBE*BITE"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Craft cocktail från VIBE*BITE baren"
              />
            </div>
          </div>
        </section>
      </main>

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
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Meny
              </a>
            </li>
            <li>
              <a href="/om-oss" style={{ color: "inherit", textDecoration: "none" }}>
                Om oss
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Integritetspolicy
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Villkor
              </a>
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
