import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mohammadreza Golkar | AI Research Engineer",
  description:
    "Mohammadreza Golkar is an AI Research Engineer focused on Machine Learning, LLMs, AI Agents, Computer Vision, Explainable AI, and RAG.",
  keywords: [
    "Mohammadreza Golkar",
    "AI Research Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "LLM",
    "AI Agents",
    "RAG",
    "Computer Vision",
    "Explainable AI",
    "PhD",
  ],
  authors: [
    {
      name: "Mohammadreza Golkar",
    },
  ],
  creator: "Mohammadreza Golkar",
  openGraph: {
    title: "Mohammadreza Golkar | AI Research Engineer",
    description:
      "AI Research Engineer working on Machine Learning, LLMs, AI Agents, Computer Vision, and Explainable AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}