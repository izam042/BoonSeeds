import "./globals.css";

export const metadata = {
  title: "Boon Seeds — Premium Raw Materials for Seed Manufacturing",
  description:
    "Boon Seeds supplies high-purity foundation seeds and raw materials to seed manufacturers across India. Maize, paddy, wheat, and millet seed stock with certified quality and nationwide dispatch.",
  keywords:
    "seed manufacturing, raw materials, foundation seeds, maize seeds, paddy seeds, wheat seeds, millet seeds, Boon Seeds, agriculture India",
  openGraph: {
    title: "Boon Seeds — Premium Raw Materials for Seed Manufacturing",
    description:
      "High-purity foundation seeds and raw materials trusted by leading seed companies across India.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/BoonSeedslogo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
