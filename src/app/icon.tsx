import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1f6f6a",
          borderRadius: 8,
          color: "#f3eadc",
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "-0.08em",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        JŠ
      </div>
    ),
    { ...size },
  );
}
