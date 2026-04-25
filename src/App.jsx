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

export default function App() {
  const buyNow = (product) => {
    const phone = "593000000000";
    const msg = `Hola, quiero comprar el ${product}`;
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
            color: "white",
            lineHeight: "1.1"
          }}
        >
          Celulares Premium con Garantía
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
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
                  objectFit: "cover",
                  display: "block"
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
                    margin: 0,
                    color: "white"
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
                    fontSize: "1rem",
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
                    padding: "15px",
                    borderRadius: "14px",
                    border: "none",
                    fontWeight: "800",
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