import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "./scroll-reveal";

export const metadata: Metadata = {
  title:
    "Spring Hill Outdoor Power Equipment · Authorized Spartan · Toro · Exmark Dealer",
  description:
    "Premium outdoor power equipment, expertly serviced. Authorized Spartan, Toro, and Exmark dealer in Spring Hill, FL. Sales, service, parts, and pickup & delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bone text-graphite font-sans antialiased">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
