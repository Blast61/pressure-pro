import type { Metadata } from "next";
import "./globals.css";
import { AppStoreProvider } from "@/lib/state/app-store";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"),
  title: {
    default: "Tech Conference Explorer",
    template: "%s · Tech Conference Explorer",
  },
  description: "Discover, filter, and register for upcoming tech conferences.",
  openGraph: {
    siteName: "Tech Conference Explorer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppStoreProvider>{children}</AppStoreProvider>
      </body>
    </html>
  );
}
