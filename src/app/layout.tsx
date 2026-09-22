import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.fullName} — Portfolio`,
  description:
    "Computer Science student at BINUS University specializing in System Intelligence. AI, machine learning and web development projects.",
  metadataBase: new URL(profile.siteUrl),
};

/**
 * Theme and language are applied to <html> before paint via this inline script,
 * so there is no flash of the wrong theme or language on load.
 */
const bootScript = `
(function () {
  try {
    var theme = localStorage.getItem("portfolio-theme");
    if (theme !== "light" && theme !== "dark") theme = "dark";
    document.documentElement.dataset.theme = theme;

    var lang = localStorage.getItem("portfolio-lang");
    if (lang !== "id" && lang !== "en") lang = "id";
    document.documentElement.lang = lang;
  } catch (error) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" data-theme="dark" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-full bg-bg text-fg antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
