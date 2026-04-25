import React from "react";

const products = [
  {
    name: "iPhone 13 Pro Max",
    price: "$540",
    desc: "Estado impecable, batería premium y listo para entrega inmediata.",
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Samsung S23 Ultra",
    price: "$620",
    desc: "Cámara profesional, potencia extrema y diseño elegante.",
    img: "https://images.unsplash.com/photo-1678911820864-e5c6bcb4ce8d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Xiaomi 13T Pro",
    price: "$430",
    desc: "Rendimiento brutal y excelente relación calidad-precio.",
    img: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=1200&q=80"
  }
];

const benefits = [
  "Garantía en todos los equipos",
  "Entrega rápida y segura",
  "Equipos revisados profesionalmente",
  "Pago confiable y atención personalizada"
];

export default function App() {
  const buyNow = (product) => {
    const phone = "593990666674";
    const msg = `Hola, estoy interesado en el ${product}. ¿Sigue disponible?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
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
            fontSize: "clamp(1.7rem, 4vw, 3rem)",
            fontWeight: "800",
            marginBottom: "14px",
            lineHeight: "1.2"
          }}
        >
          Celulares Premium
        </h1>

        <p
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            color: "#cfcfcf",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.5"
          }}
        >
          Equipos revisados, garantizados y listos para entrega inmediata.
        </p>
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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "22px"
          }}
        >
          {products.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#151515",
                borderRadius: "22px",
                overflow: "hidden",
                boxShadow: "0 8px 28px rgba(0,0,0,0.35)",
                display: "flex",
                flexDirection: "column",
                transform: "translateZ(0)",
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
                <h2
  style={{
    fontSize: "1.25rem",
    margin: 0,
    color: "#ffffff",
    fontWeight: "800",
    lineHeight: "1.3",
    textShadow: "0 1px 3px rgba(0,0,0,0.6)",
    position: "relative",
    zIndex: 2
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
              marginBottom: "25px"
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