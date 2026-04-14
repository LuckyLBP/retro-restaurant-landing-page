"use client"

import { useState } from "react"

const BOOKED_TIMES = new Set(["13:00", "14:30", "17:00", "18:30", "19:00", "20:30"])

const TIME_SLOTS = [
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
  "21:00", "21:30", "22:00",
]

const fieldStyle: React.CSSProperties = {
  border: "var(--border)",
  padding: "12px",
  width: "100%",
  fontFamily: "Space Grotesk, sans-serif",
  background: "var(--bg)",
  fontSize: "15px",
  outline: "none",
  borderRadius: 0,
  appearance: "none" as const,
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "Space Grotesk, sans-serif",
  fontWeight: 700,
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  marginBottom: "6px",
  color: "var(--dark)",
}

export default function BookingWidget() {
  const [name, setName] = useState("")
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)

  if (confirmed) {
    return (
      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          background: "var(--accent)",
          border: "var(--border)",
          boxShadow: "var(--shadow)",
          padding: "clamp(32px, 5vw, 56px)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>✓</div>
        <h2
          style={{
            fontFamily: "Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(24px, 4vw, 36px)",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Bokning bekräftad!
        </h2>
        <p style={{ fontSize: "18px", fontWeight: 700, marginBottom: "6px" }}>
          {selectedTime} — {name || "din plats"}
        </p>
        <p style={{ color: "#555", fontSize: "14px", lineHeight: 1.6 }}>
          Du får en bekräftelse inom 24 timmar.<br />
          Avbokning senast 2 timmar innan.
        </p>
        <button
          onClick={() => { setConfirmed(false); setSelectedTime(null); setName("") }}
          className="btn-cta"
          style={{ marginTop: "24px", background: "var(--dark)", color: "white" }}
        >
          Boka igen
        </button>
      </div>
    )
  }

  return (
    <div
      style={{
        maxWidth: "640px",
        margin: "0 auto",
        background: "white",
        border: "var(--border)",
        boxShadow: "var(--shadow)",
        padding: "clamp(24px, 5vw, 48px)",
      }}
    >
      <h2
        style={{
          fontFamily: "Syne, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(22px, 3vw, 30px)",
          textTransform: "uppercase",
          letterSpacing: "-0.5px",
          marginBottom: "32px",
          borderBottom: "var(--border)",
          paddingBottom: "16px",
        }}
      >
        Din reservation
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

        {/* Namn */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <div>
            <label style={labelStyle} htmlFor="fornamn">Förnamn</label>
            <input
              id="fornamn"
              type="text"
              placeholder="Anna"
              style={fieldStyle}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="efternamn">Efternamn</label>
            <input id="efternamn" type="text" placeholder="Lindqvist" style={fieldStyle} />
          </div>
        </div>

        {/* Restaurang */}
        <div>
          <label style={labelStyle} htmlFor="restaurang">Restaurang</label>
          <div style={{ position: "relative" }}>
            <select id="restaurang" style={{ ...fieldStyle, cursor: "pointer" }}>
              <option value="boras">Borås – Allégatan 10</option>
              <option value="goteborg">Göteborg – Avenyn 45</option>
            </select>
            <span style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: "12px", fontWeight: 800 }}>▼</span>
          </div>
        </div>

        {/* Datum */}
        <div>
          <label style={labelStyle} htmlFor="datum">Datum</label>
          <input id="datum" type="date" style={fieldStyle} />
        </div>

        {/* Antal gäster */}
        <div>
          <label style={labelStyle} htmlFor="gaster">Antal gäster</label>
          <div style={{ position: "relative" }}>
            <select id="gaster" style={{ ...fieldStyle, cursor: "pointer" }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? "gäst" : "gäster"}</option>
              ))}
              <option value="10+">10+ gäster (kontakta oss)</option>
            </select>
            <span style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", fontSize: "12px", fontWeight: 800 }}>▼</span>
          </div>
        </div>

        {/* ── TIDSVÄLJARE ── */}
        <div>
          <label style={labelStyle}>Välj tid</label>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "8px",
            }}
          >
            {TIME_SLOTS.map((time) => {
              const isBooked = BOOKED_TIMES.has(time)
              const isSelected = selectedTime === time
              return (
                <button
                  key={time}
                  type="button"
                  disabled={isBooked}
                  onClick={() => setSelectedTime(isSelected ? null : time)}
                  style={{
                    padding: "10px 4px",
                    border: "var(--border)",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "13px",
                    cursor: isBooked ? "not-allowed" : "crosshair",
                    position: "relative",
                    transition: "all 0.15s",
                    background: isBooked
                      ? "#f0f0f0"
                      : isSelected
                      ? "var(--primary)"
                      : "var(--bg)",
                    color: isBooked
                      ? "#bbb"
                      : isSelected
                      ? "white"
                      : "var(--dark)",
                    boxShadow: isSelected ? "3px 3px 0 var(--dark)" : "none",
                    transform: isSelected ? "translate(-1px, -1px)" : "none",
                    textDecoration: isBooked ? "line-through" : "none",
                  }}
                >
                  {time}
                  {isBooked && (
                    <span
                      style={{
                        display: "block",
                        fontSize: "9px",
                        letterSpacing: "0.5px",
                        marginTop: "2px",
                        textTransform: "uppercase",
                        color: "#ccc",
                      }}
                    >
                      BOKAD
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Önskemål */}
        <div>
          <label style={labelStyle} htmlFor="onskemål">Önskemål</label>
          <textarea
            id="onskemål"
            rows={3}
            placeholder="Allergier, högstoler, födelsedag..."
            style={{ ...fieldStyle, resize: "vertical" }}
          />
        </div>

        {/* ── BOOKING CTA (visas när tid är vald) ── */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: selectedTime ? "160px" : "0px",
            transition: "max-height 0.3s ease",
          }}
        >
          <div
            style={{
              background: "var(--accent)",
              border: "var(--border)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <p
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "16px",
                textTransform: "uppercase",
              }}
            >
              {selectedTime} — {name ? `för ${name}` : "din plats"}
            </p>
            <button
              type="button"
              onClick={() => setConfirmed(true)}
              className="btn-cta"
              style={{
                background: "var(--dark)",
                color: "white",
                width: "100%",
                padding: "14px",
                fontSize: "15px",
              }}
            >
              Bekräfta bokning {selectedTime}{name ? ` för ${name}` : ""}
            </button>
          </div>
        </div>

        {!selectedTime && (
          <p style={{ fontSize: "13px", color: "#aaa", textAlign: "center" }}>
            Välj en tid ovan för att gå vidare
          </p>
        )}

      </div>
    </div>
  )
}
