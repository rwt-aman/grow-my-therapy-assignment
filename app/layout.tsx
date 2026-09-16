import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy in Santa Monica, CA",
  description:
    "Warm, grounded, evidence-based therapy for thoughtful high-achievers in Santa Monica, California and statewide via telehealth. Specializing in anxiety, panic, trauma (EMDR), and professional burnout.",
  keywords: [
    "Anxiety therapy Santa Monica",
    "Trauma therapist Santa Monica",
    "EMDR therapy Santa Monica",
    "Psychologist Santa Monica CA",
    "High-achiever burnout therapy",
    "Dr. Maya Reynolds PsyD",
    "California telehealth therapy",
    "CBT Santa Monica",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD — Anxiety & Trauma Therapy in Santa Monica, CA",
    description:
      "A warm, collaborative space for adults seeking relief from anxiety, trauma, and burnout. In-person therapy in Santa Monica & telehealth across California.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#8A9A86",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F5F2EB] text-[#2C3E50] antialiased selection:bg-[#D0DDD0] selection:text-[#2C3E50]">
        {children}
      </body>
    </html>
  );
}
