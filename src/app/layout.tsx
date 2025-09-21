import type { Metadata } from "next";
import "./globals.css";
import { AppStoreProvider } from "@/lib/state/app-store";

export const metadata: Metadata = {
  title: "Tech Conference Explorer",
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
