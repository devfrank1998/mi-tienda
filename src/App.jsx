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
    const msg = `Hola, quiero comprar el ${product}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div style={{ fontFamily: "Inter, Arial", background: "#0a0a0a", color: "white", minHeight: "100vh" }}>
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #111, #1f1f1f)"
        }}
      >
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", marginBottom: "15px", fontWeight: "900" }}>
          Celulares Premium con Garantía
        </h1>
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)", color: "#cfcfcf", maxWidth: "800px", margin: "0 auto" }}>
          Equipos seleccionados, revisados y listos para entrega inmediata.
        </p>
      </section>

      <section style={{ padding: "50px 20px", maxWidth: "1400px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "25px"
          }}
        >
          {products.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#151515",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                transition: "transform 0.3s ease"
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                style={{ width: "100%", height: "260px", objectFit: "cover" }}
              />

              <div style={{ padding: "22px" }}>
                <h2 style={{ fontSize: "1.7rem", marginBottom: "8px" }}>{p.name}</h2>
                <h3 style={{ color: "#ff7b00", fontSize: "1.8rem", marginBottom: "12px" }}>{p.price}</h3>
                <p style={{ color: "#d6d6d6", lineHeight: "1.6", marginBottom: "20px" }}>{p.desc}</p>

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
