import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { hero, siteConfig } from "@/data/portfolio";

export const alt = `${siteConfig.name} — AI/ML Researcher · IEEE APPEEC 2026 Co-Author`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Share card for LinkedIn / WhatsApp / X: photo, name, title, roles and top wins.
 * Rendered once at build time, so it updates whenever `hero` changes.
 */
export default async function OgImage() {
  const photo = await readFile(path.join(process.cwd(), "public", siteConfig.profileImage));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const host = new URL(siteConfig.siteUrl).host;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: "0 80px",
          background: "linear-gradient(135deg, #0d9488 0%, #0f172a 55%, #1e293b 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
        <img
          src={photoSrc}
          width={260}
          height={260}
          alt=""
          style={{
            borderRadius: 9999,
            border: "8px solid #2dd4bf",
            objectFit: "cover",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 24,
              color: "#6ee7b7",
              fontWeight: 600,
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 9999, background: "#10b981" }} />
            {hero.availability}
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, marginTop: 14, lineHeight: 1.05 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 30, marginTop: 14, color: "#cbd5e1", fontWeight: 500, whiteSpace: "nowrap" }}>
            AI/ML Researcher · IEEE APPEEC 2026 Co-Author
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 36 }}>
            {hero.badges.map((b) => (
              <div
                key={b.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  alignSelf: "flex-start",
                  padding: "10px 22px",
                  borderRadius: 9999,
                  border: "2px solid rgba(252, 211, 77, 0.55)",
                  background: "rgba(252, 211, 77, 0.12)",
                  fontSize: 26,
                }}
              >
                <span style={{ color: "#fcd34d", fontWeight: 700 }}>{b.place}</span>
                <span>{b.title}</span>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 24, marginTop: 36, color: "#94a3b8" }}>{host}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
