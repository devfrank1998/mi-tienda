import React from "react";

const products = [
  {
    name: "iPhone 13 Pro Max",
    price: "$540",
    desc: "Estado impecable, batería premium, listo para entrega inmediata.",
    img: "https://images.unsplash.com/photo-1603898037225-1c6fd1b9a3c8?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Samsung S23 Ultra",
    price: "$620",
    desc: "Rendimiento brutal, cámara profesional y diseño elegante.",
    img: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Xiaomi 13T Pro",
    price: "$430",
    desc: "Potencia, velocidad y excelente relación calidad-precio.",
    img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80"
  }
];

export default function App() {
  const buyNow = (product) => {
    const phone = "593000000000";
    const msg = `Hola, quiero información sobre el ${product}`;
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
      <section
        style={{
          padding: "50px 18px",
          textAlign: "center",
          background: "linear-gradient(135deg, #101010, #1c1c1c)"
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.8rem, 6vw, 4.2rem)",
            marginBottom: "14px",
            fontWeight: "900",
            lineHeight: "1.15"
          }}
        >
          Celulares Premium con Garantía
        
        </h1>

        <p
          style={{
            fontSize: "clamp(0.95rem, 3vw, 1.35rem)",
            color: "#cfcfcf",
            maxWidth: "780px",
            margin: "0 auto",
            lineHeight: "1.6"
          }}
        >
          Equipos revisados, seleccionados y listos para entrega inmediata.
        </p>
      </section>

      <section
        style={{
          padding: "40px 16px",
          maxWidth: "1350px",
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
                boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
                display: "flex",
                flexDirection: "column"
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
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(1.2rem, 4vw, 1.7rem)",
                    marginBottom: "8px",
                    lineHeight: "1.25"
                  }}
                >
                  {p.name}
                </h2>

                <h3
                  style={{
                    color: "#ff7b00",
                    fontSize: "clamp(1.4rem, 4vw, 1.9rem)",
                    marginBottom: "12px"
                  }}
                >
                  {p.price}
                </h3>

                <p
                  style={{
                    color: "#d6d6d6",
                    lineHeight: "1.6",
                    fontSize: "0.96rem",
                    marginBottom: "18px",
                    flexGrow: 1
                  }}
                >
                  {p.desc}
                </p>

                <button
                  onClick={() => buyNow(p.name)}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "14px",
                    border: "none",
                    fontWeight: "700",
                    fontSize: "1rem",
                    cursor: "pointer",
                    background: "linear-gradient(135deg, #25D366, #1ebe5d)",
                    color: "white"
                  }}
                >
                  Comprar por WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}