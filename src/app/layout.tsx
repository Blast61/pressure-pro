import type { Metadata } from "next";
import "./globals.css";
import { AppStoreProvider } from "@/lib/state/app-store";
import ThemeWatcher from "@/components/common/ThemeWatcher";

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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-white text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-neutral-100">
        <AppStoreProvider>
        <ThemeWatcher />
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
          {children}
        </div>
        </AppStoreProvider>
      </body>
    </html>
  );
}
