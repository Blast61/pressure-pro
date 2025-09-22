import { ImageResponse } from "next/og";
import { db } from "@/lib/server/db";
import { formatDateRange } from "@/lib/utils/date";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Minimal OG image. No fonts import; system fonts are fine for the assessment.
export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const conf = db.get(id);

  const title = conf?.name ?? "Conference";
  const subtitle = conf
    ? `${formatDateRange(conf.date, conf.endDate)} · ${conf.location}`
    : "Details unavailable";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background:
            "linear-gradient(135deg, rgb(5,5,5) 0%, rgb(22,22,22) 50%, rgb(40,40,40) 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
        <div style={{ marginTop: 16, fontSize: 28, opacity: 0.9 }}>{subtitle}</div>
        <div style={{ marginTop: 40, fontSize: 20, opacity: 0.8 }}>
          Tech Conference Explorer
        </div>
      </div>
    ),
    { ...size }
  );
}
