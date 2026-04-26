import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const benefits = [
  "Garantía en todos los equipos",
  "Entrega rápida y segura",
  "Equipos revisados profesionalmente",
  "Pago confiable y atención personalizada"
];

export default function App() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

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
            lineHeight: "1.2"
          }}
        >
          Encuentra productos únicos al mejor precio
        </h1>

        <p
          style={{
            fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.5",
            color: "#d8d8d8"
          }}
        >
          Entrega inmediata
        </p>
      </section>

      {/* BENEFICIOS RÁPIDOS */}
      <section
        style={{
          padding: "12px 10px",
          background: "#101010"
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "8px"
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
                padding: "8px",
                borderRadius: "16px",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "0.72rem"
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
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(0,0,0,0.45)",
                display: "flex",
                flexDirection: "column",
                maxWidth: "390px",
                margin: "0 auto",
                border: "1px solid rgba(255,255,255,0.05)"
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "280px",
                  background: "#0d0d0d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden"
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>

              <div
                style={{
                  padding: "18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                    flexWrap: "wrap"
                  }}
                >
                  <span
                    style={{
                      background: "rgba(255,179,71,0.15)",
                      color: "#ffb347",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      fontWeight: "700"
                    }}
                  >
                    {p.tag}
                  </span>

                  <span
                    style={{
                      background:
                        p.status === "Disponible"
                          ? "#123d1f"
                          : p.status === "Reservado"
                          ? "#4a3b12"
                          : "#4a1212",
                      color:
                        p.status === "Disponible"
                          ? "#7dff9b"
                          : p.status === "Reservado"
                          ? "#ffd86b"
                          : "#ff7d7d",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      fontWeight: "700"
                    }}
                  >
                    {p.status}
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: "1.5rem",
                    margin: 0,
                    color: "#fff",
                    fontWeight: "800",
                    lineHeight: "1.2"
                  }}
                >
                  {p.name}
                </h2>

                <h3
                  style={{
                    color: "#ff8a00",
                    fontSize: "1.75rem",
                    margin: 0,
                    fontWeight: "900"
                  }}
                >
                  ${p.price}
                </h3>

                <p
                  style={{
                    color: "#bfbfbf",
                    lineHeight: "1.5",
                    margin: 0,
                    fontSize: "0.92rem",
                    minHeight: "55px"
                  }}
                >
                  {p.description}
                </p>

                <button
                  onClick={() => buyNow(p.name)}
                  style={{
                    marginTop: "8px",
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
                  Comprar ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
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
          Publicamos tu celular, laptop o tablet y te ayudamos a encontrar compradores reales.
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