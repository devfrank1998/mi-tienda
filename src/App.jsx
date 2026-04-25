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
          padding: "70px 20px 50px",
          textAlign: "center",
          background: "linear-gradient(135deg, #111, #1c1c1c)"
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            fontWeight: "900",
            marginBottom: "18px",
            lineHeight: "1.1"
          }}
        >
          Celulares Premium con Garantía
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "#d0d0d0",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}
        >
          Equipos seleccionados, revisados y listos para entrega inmediata.
        </p>
      </section>

      {/* PRODUCTOS */}
      <section
        style={{
          padding: "40px 20px 70px",
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px"
          }}
        >
          {products.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#151515",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 10px 35px rgba(0,0,0,0.45)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover"
                }}
              />

              <div
                style={{
                  padding: "22px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  flexGrow: 1
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(1.4rem, 4vw, 2rem)",
                    margin: 0
                  }}
                >
                  {p.name}
                </h2>

                <h3
                  style={{
                    color: "#ff7b00",
                    fontSize: "2rem",
                    margin: 0
                  }}
                >
                  {p.price}
                </h3>

                <p
                  style={{
                    color: "#d6d6d6",
                    lineHeight: "1.7",
                    margin: 0
                  }}
                >
                  {p.desc}
                </p>

                <button
                  onClick={() => buyNow(p.name)}
                  style={{
                    marginTop: "auto",
                    width: "100%",
                    padding: "16px",
                    borderRadius: "14px",
                    border: "none",
                    fontWeight: "800",
                    fontSize: "1rem",
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

      {/* CONFIANZA */}
      <section
        style={{
          padding: "50px 20px 80px",
          background: "#121212"
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              marginBottom: "20px"
            }}
          >
            ¿Por qué elegirnos?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
              marginTop: "30px"
            }}
          >
            {benefits.map((b, i) => (
              <div
                key={i}
                style={{
                  background: "#1b1b1b",
                  padding: "22px",
                  borderRadius: "18px",
                  fontWeight: "700",
                  color: "#f1f1f1"
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