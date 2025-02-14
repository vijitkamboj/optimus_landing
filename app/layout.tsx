import "./globals.css";

import { Chakra_Petch, Onest } from "next/font/google";

import type { Metadata } from "next";

// const bodyFont = Orbitron({
//   variable: "--font-body",
// });

const logoFont = Chakra_Petch({
  weight: ["400", "700", "300", "500", "600"],
  variable: "--font-logo",
});

const bodyFont = Onest({
  weight: ["400", "700", "300", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Optimus Security services",
  description: `Optimus Security services is a top-tier, certified, and authorized security agency that provides the best security services in Delhi NCR. We have a crew of adept security guards, armed & unarmed private bodyguards that deal with and provide the best security services to many corporates, commercial, industrial, and business sectors in Delhi and its various nearby regions. Furthermore, we also specialize in safeguarding various educational institutes and college campuses.

  One of the major duties of the professional crew that we have is that they are always dedicated and focused on their jobs. When they are on duty they always carefully observe everything and are always alert and ready to eliminate any kind of risks or problem-causing element that may pose trouble. Security is a fundamental component of our everyday lives therefore we know how crucial it is to remain safe and keep all our assets, premises, and capital protected from any type of dangers. Hence, we are here to ensure the safety of your assets, premises, capital, and other facilities by offering the best and most safety-centric security services by one of the most reliable Security Companies in Delhi NCR.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${logoFont.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
