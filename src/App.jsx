import React, { useState } from "react";
import products from "./products.json";

const benefits = [
  "Garantía en todos los equipos",
  "Entrega rápida y segura",
  "Equipos revisados profesionalmente",
  "Pago confiable y atención personalizada"
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
  "Todos",
  ...new Set(
    products
      .map((p) => p.category)
      .filter((cat) => cat && cat.trim() !== "")
  )
];

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const buyNow = (product) => {
    const phone = "593990666674";
    const msg = `Hola, estoy interesado en el ${product}. ¿Sigue disponible?`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        fontFamily: "Inter, Arial, sans-serif",
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh"
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "45px 18px 35px",
          textAlign: "center",
          background: "linear-gradient(135deg, #111, #1a1a1a)"
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "#1f1f1f",
            padding: "8px 16px",
            borderRadius: "999px",
            fontSize: "0.85rem",
            marginBottom: "16px",
            color: "#ffb347",
            fontWeight: "700"
          }}
        >
          🔥 Ofertas verificadas
        </div>

        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: "800",
            marginBottom: "14px",
            lineHeight: "1.2",
            color: "#ffffff",
            letterSpacing: "-0.5px",
            WebkitTextFillColor: "#ffffff",
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            position: "relative",
            zIndex: 5
          }}
        >
          Celulares Premium
        </h1>

        <p
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.5",
            color: "#ffffff",
            textShadow: "0 2px 6px rgba(0,0,0,0.5)",
            position: "relative",
            zIndex: 2
          }}
        >
          Equipos revisados, garantizados y listos para entrega inmediata.
        </p>
      </section>
<section
  style={{
    padding: "18px 14px",
    background: "#101010"
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "16px"
    }}
  >
    {[
      "✔ Equipos revisados",
      "✔ Garantía de funcionamiento",
      "✔ Entrega rápida",
      "✔ Atención personalizada"
    ].map((item, i) => (
      <div
        key={i}
        style={{
          background: "#181818",
          padding: "18px",
          borderRadius: "16px",
          textAlign: "center",
          fontWeight: "700",
          fontSize: "0.85rem"
        }}
      >
        {item}
      </div>
    ))}
  </div>
</section>
      {/* PRODUCTOS */}
      <section
        style={{
          padding: "30px 18px 60px",
          maxWidth: "1300px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "30px"
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontWeight: "600",
                background:
                  selectedCategory === cat
                    ? "#ffb347"
                    : "rgba(255,255,255,0.1)",
                color: selectedCategory === cat ? "#111" : "#fff"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px"
          }}
        >
          {filteredProducts.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#151515",
                borderRadius: "22px",
                overflow: "hidden",
                boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
                display: "flex",
                flexDirection: "column",
                transform: "translateZ(0)"
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover"
                }}
              />

              <div
                style={{
                  padding: "18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  position: "relative",
                  zIndex: 2
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    background: "#222",
                    color: "#ffb347",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    fontWeight: "700"
                  }}
                >
                  {p.tag}
                </div>

                <h2
                  style={{
                    fontSize: "1.25rem",
                    margin: 0,
                    color: "#ffffff",
                    fontWeight: "800",
                    lineHeight: "1.3",
                    textShadow: "0 1px 3px rgba(0,0,0,0.6)"
                  }}
                >
                  {p.name}
                </h2>

                <h3
                  style={{
                    color: "#ff8a00",
                    fontSize: "1.8rem",
                    margin: 0
                  }}
                >
                  {p.price}
                </h3>

                <p
                  style={{
                    color: "#d6d6d6",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.95rem"
                  }}
                >
                  {p.desc}
                </p>

                <button
                  onClick={() => buyNow(p.name)}
                  style={{
                    marginTop: "12px",
                    width: "100%",
                    padding: "14px",
                    borderRadius: "12px",
                    border: "none",
                    fontWeight: "700",
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    background: "linear-gradient(135deg, #25D366, #1ebe5d)",
                    color: "white"
                  }}
                >
                  Consultar por WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VENDER */}
      <section
        style={{
          padding: "70px 20px",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            marginBottom: "16px"
          }}
        >
          ¿Quieres vender tu equipo?
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 24px",
            opacity: 0.9
          }}
        >
          Publicamos tu celular, laptop o tablet en nuestra plataforma y te ayudamos a encontrar compradores reales.
        </p>

        <a
          href="https://wa.me/593990666674?text=Hola,%20quiero%20publicar%20mi%20producto"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "linear-gradient(135deg, #ffb347, #ffcc33)",
            color: "#111",
            padding: "14px 28px",
            borderRadius: "999px",
            fontWeight: "700",
            textDecoration: "none"
          }}
        >
          Publicar mi producto
        </a>
      </section>

      {/* BENEFICIOS */}
      <section
        style={{
          padding: "45px 18px 65px",
          background: "#121212"
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.4rem, 4vw, 2.4rem)",
              marginBottom: "25px",
              color: "#ffffff",
              textShadow: "0 2px 6px rgba(0,0,0,0.6)"
            }}
          >
            ¿Por qué elegirnos?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px"
            }}
          >
            {benefits.map((b, i) => (
              <div
                key={i}
                style={{
                  background: "#1b1b1b",
                  padding: "18px",
                  borderRadius: "16px",
                  fontWeight: "600",
                  color: "#f1f1f1",
                  fontSize: "0.95rem"
                }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}