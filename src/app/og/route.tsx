import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#111111",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>JustJapa</div>
        <div style={{ fontSize: 28, opacity: 0.85, marginTop: 12 }}>
          Make your move smarter
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
