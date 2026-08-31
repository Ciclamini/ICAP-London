import { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";

const base = import.meta.env.BASE_URL;

const entries = [
  {
    id: "olivia-family",
    label: "The Olivia Family",
    type: "pdf",
    pdf: `${base}oliva_newspaper.pdf`,
    description:
      "A newspaper feature spotlighting the Olivia family and their contributions to the Italian-Canadian community of London, Ontario.",
    metadata: {
      title: "The Olivia Family",
      creator: null,
      type: "Newspaper Article",
      collection: "In the Media",
      citation: null,
    },
  },
  {
    id: "guy-lombardo",
    label: "Guy Lombardo",
    type: "external",
    href: "https://canadianmusichalloffame.ca/inductee/guy-lombardo/",
    description:
      'Guy Lombardo (1902–1977) was born in London, Ontario, to Italian-Canadian parents from Sicily. As leader of the Royal Canadians orchestra, he became one of the most celebrated bandleaders in North American history — renowned for his annual New Year\'s Eve broadcasts and his enduring motto, "the sweetest music this side of heaven." He was inducted into the Canadian Music Hall of Fame in recognition of his extraordinary legacy.',
  },
];

export default function InTheMedia() {
  const [viewing, setViewing] = useState(null);

  // Prevent the main page from scrolling while the PDF popup is open
  useEffect(() => {
    if (viewing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [viewing]);

  return (
    <PageLayout
      activePage="InTheMedia"
      initialOpen={{ Media: true, InTheMedia: true }}
    >
      <div className="ornamental-border bg-[#f5f0e8] p-8">
        {/* Header */}
        <h2
          className="text-2xl font-bold mb-3"
          style={{
            fontFamily: "Playfair Display, serif",
            color: "#432616",
          }}
        >
          In the Media
        </h2>

        <p
          className="mb-6 leading-relaxed"
          style={{
            fontFamily: "Crimson Text, serif",
            fontSize: "1rem",
            color: "#432616",
          }}
        >
          This section brings together newspaper articles, features, and press
          coverage in which members of London's Italian-Canadian community have
          appeared in the broader Canadian media. From profiles of prominent
          families to celebrated figures whose stories reached a national
          audience, these records reflect the lasting impact of
          Italian-Canadians on the cultural and social fabric of Canada.
        </p>

        <div
          className="h-px mb-6"
          style={{
            background:
              "linear-gradient(to right, transparent, #c4943e, transparent)",
          }}
        />

        {/* Entries */}
        <div className="space-y-0">
          {entries.map((entry, i) => (
            <div key={entry.id}>
              <div className="py-5">
                <h3
                  className="font-bold mb-2"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    fontSize: "1.1rem",
                    color: "#432616",
                  }}
                >
                  {entry.label}
                </h3>

                <p
                  className="mb-3 leading-relaxed"
                  style={{
                    fontFamily: "Crimson Text, serif",
                    fontSize: "1rem",
                    color: "#432616",
                  }}
                >
                  {entry.description}
                </p>

                {/* PDF button */}
                {entry.type === "pdf" && (
                  <button
                    onClick={() => setViewing(entry)}
                    className="underline hover:opacity-75 transition text-left"
                    style={{
                      fontFamily: "Crimson Text, serif",
                      fontSize: "0.95rem",
                      color: "#432616",
                    }}
                  >
                    › View newspaper feature
                  </button>
                )}

                {/* External link — unchanged */}
                {entry.type === "external" && (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-75 transition"
                    style={{
                      fontFamily: "Crimson Text, serif",
                      fontSize: "0.95rem",
                      color: "#432616",
                    }}
                  >
                    › View Canadian Music Hall of Fame profile
                  </a>
                )}
              </div>

              {i < entries.length - 1 && (
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

        {/* PDF + METADATA POPUP — only used for PDF entries */}
        {viewing && viewing.type === "pdf" && (
          <div
            className="fixed inset-0 flex items-center justify-center"
            style={{
              background: "rgba(0, 0, 0, 0.85)",
              zIndex: 9999,
              padding: "40px",
            }}
            onClick={() => setViewing(null)}
          >
            {/* Outer scrolling area */}
            <div
              style={{
                width: "96%",
                height: "90vh",
                overflowY: "auto",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setViewing(null)}
                aria-label="Close PDF"
                className="absolute border-none bg-transparent cursor-pointer"
                style={{
                  top: "10px",
                  right: "20px",
                  color: "white",
                  fontSize: "45px",
                  lineHeight: 1,
                  zIndex: 1,
                }}
              >
                ×
              </button>

              {/* PDF */}
              <div
                style={{
                  width: "90%",
                  margin: "0 auto",
                  padding: "25px",
                }}
              >
                <h2
                  className="font-bold mb-4"
                  style={{
                    fontFamily: "Playfair Display, serif",
                    color: "white",
                    fontSize: "1.5rem",
                    paddingRight: "40px",
                  }}
                >
                  {viewing.label}
                </h2>

                <iframe
                  src={viewing.pdf}
                  title={viewing.label}
                  className="w-full shadow-md mb-6"
                  style={{
                    height: "100vh",
                    border: "none",
                    background: "white",
                    borderRadius: "2px",
                  }}
                />
              </div>

              {/* Metadata */}
              {viewing.metadata && (
                <div
                  className="p-4"
                  style={{
                    backgroundColor: "#bbaf9ee0",
                    border: "1px solid #bbaf9e",
                    borderRadius: "2px",
                    width: "85%",
                    margin: "0 auto 30px auto",
                    fontFamily: "Crimson Text, serif",
                    fontSize: "0.95rem",
                    color: "#432616",
                  }}
                >
                  <p
                    className="font-bold mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Dublin Core Metadata
                  </p>

                  <p className="mb-1">
                    <strong>Title:</strong> {viewing.metadata.title}
                  </p>

                  {viewing.metadata.creator && (
                    <p className="mb-1">
                      <strong>Creator:</strong> {viewing.metadata.creator}
                    </p>
                  )}

                  {viewing.metadata.type && (
                    <p className="mb-1">
                      <strong>Type:</strong> {viewing.metadata.type}
                    </p>
                  )}

                  {viewing.metadata.collection && (
                    <p className="mb-1">
                      <strong>Collection:</strong>{" "}
                      {viewing.metadata.collection}
                    </p>
                  )}

                  {viewing.metadata.citation && (
                    <p>
                      <strong>Citation:</strong>{" "}
                      <a
                        href={viewing.metadata.citation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:opacity-75"
                        style={{ color: "#2c6e8a" }}
                      >
                        {viewing.metadata.citation}
                      </a>
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}