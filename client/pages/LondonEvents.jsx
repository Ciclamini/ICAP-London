import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { useState } from "react";

export default function LondonEvents() {
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;
  const [selectedImage, setSelectedImage] = useState(null);

  const sections = [
    {
      title: "ICAP Sixth National Conference and AGM",
      image: `${base}ICAP_AGM.png`,
      imageAlt: "ICAP Sixth National Conference and AGM",
      description:
        "The Italian Canadian Archives Project (ICAP) hosted its Sixth National Conference and Annual General Meeting in London, Ontario, from October 14 to October 15, 2016. The event brought together scholars, community members, and enthusiasts to explore the rich history and contributions of Italian Canadians.",
      linkLabel: "View Flyer →",
      onClick: () => setSelectedImage(`${base}ICAP_AGM.png`),
    },
    {
      title: "An Evening with Writer Nino Ricci",
      image: `${base}Nino-Ricci.jpg`,
      imageAlt: "An Evening with Writer Nino Ricci",
      description:
        "An evening with acclaimed Italian-Canadian author Nino Ricci, discussing his work and the experiences of Italian Canadians.",
      linkLabel: "View Flyer →",
      onClick: () => setSelectedImage(`${base}Nino-Ricci.jpg`),
    },
    {
      title: "Journeys to The New World",
      image: `${base}Journey-to-new-world.jpg`,
      imageAlt: "Journeys to The New World",
      description:
        "A look at the experiences of Italian Canadians as they settled in the New World.",
      linkLabel: "View Flyer →",
      onClick: () => setSelectedImage(`${base}Journey-to-new-world.jpg`),
    },
  ];

  return (
    <PageLayout
      activePage="LondonEvents"
      initialOpen={{ Events: true, ICAPEvents: true }}
    >
      <div className="ornamental-border bg-[#f5f0e8] p-8">
        {/* Breadcrumb */}
        <nav
          className="mb-4 text-sm"
          style={{ fontFamily: "Crimson Text, serif", color: "#5a3d28" }}
        >
          <button
            onClick={() => navigate("/")}
            className="underline hover:opacity-75 transition"
            style={{ color: "#2c6e8a" }}
          >
            Home
          </button>
          <span className="mx-1">›</span>
          <button
            onClick={() => navigate("/events")}
            className="underline hover:opacity-75 transition"
            style={{ color: "#2c6e8a" }}
          >
            Events
          </button>
          <span className="mx-1">›</span>
          <button
            onClick={() => navigate("/events/ICAPEvents")}
            className="underline hover:opacity-75 transition"
            style={{ color: "#2c6e8a" }}
          >
            ICAP Events
          </button>
          <span className="mx-1">›</span>
          <span style={{ color: "#432616" }}>London Events</span>
        </nav>

        <div
          className="h-px mb-6"
          style={{
            background: "linear-gradient(to right, #c4943e, #432616, #c4943e)",
          }}
        />

        <div className="space-y-0">
          {sections.map((s, i) => (
            <div key={s.title}>
              <div className="flex gap-5 items-start py-6">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className="flex-shrink-0 object-cover shadow-md"
                  style={{ width: "90px", height: "90px", borderRadius: "2px" }}
                />
                <div>
                  <h3
                    className="font-bold mb-2"
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.25rem",
                      color: "#432616",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mb-3 leading-relaxed"
                    style={{
                      fontFamily: "Crimson Text, serif",
                      fontSize: "1rem",
                      color: "#432616",
                    }}
                  >
                    {s.description}
                  </p>
                  {s.onClick ? (
                    <button
                      onClick={s.onClick}
                      className="underline transition hover:opacity-75 text-left"
                      style={{
                        fontFamily: "Crimson Text, serif",
                        fontSize: "0.95rem",
                        color: "#432616",
                      }}
                    >
                      {s.linkLabel}
                    </button>
                  ) : (
                    <span
                      style={{
                        fontFamily: "Crimson Text, serif",
                        fontSize: "0.95rem",
                        color: "#432616",
                      }}
                    >
                      {s.linkLabel}
                    </span>
                  )}
                </div>
              </div>
              {i < sections.length - 1 && (
                <div
                  className="h-px"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, #c4943e, transparent)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              padding: "30px",
            }}
          >
            <img
              src={selectedImage}
              alt="Enlarged flyer"
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "100vw",
                maxHeight: "100vh",
                objectFit: "contain",
                position: "relative",
                zIndex: 10000,
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
              }}
            />

            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "15px",
                right: "30px",
                background: "none",
                border: "none",
                color: "white",
                fontSize: "3rem",
                cursor: "pointer",
                zIndex: 10001,
              }}
              aria-label="Close popup"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
