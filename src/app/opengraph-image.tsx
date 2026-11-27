import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Paper Airplane Lab – folding guides and designs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "64px",
          background:
            "linear-gradient(135deg, #e8f4fc 0%, #f6f1e8 50%, #dceefb 100%)",
          color: "#1a2b3c",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <svg
          width="360"
          height="200"
          viewBox="0 0 360 200"
          style={{ position: "absolute", top: 72, right: 80 }}
        >
          <path
            d="M12 112 L320 40 L150 112 L260 168 L12 112 Z"
            fill="#ffffff"
            stroke="#c9bfb0"
            strokeWidth="4"
          />
          <path
            d="M150 112 L260 168 L242 120 L150 112 Z"
            fill="#f3efe7"
            stroke="#c9bfb0"
            strokeWidth="3"
          />
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            Paper Airplane Lab
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "#3d4f5f",
              maxWidth: "820px",
            }}
          >
            Step-by-step folding guides for distance, gliders, stunts, and kids
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}