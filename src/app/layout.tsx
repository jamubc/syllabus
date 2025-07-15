import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Canvas MCP Tool - AI Assistant for Canvas LMS",
  description: "The AI assistant that understands your Canvas context, supercharges your productivity, and lives seamlessly within your academic workflow.",
  keywords: ["Canvas LMS", "AI Assistant", "MCP", "Model Context Protocol", "Academic Tools", "Student Success", "Faculty Productivity"],
  openGraph: {
    title: "Canvas MCP Tool - AI Assistant for Canvas LMS",
    description: "Study more, work less. AI-powered productivity for Canvas LMS.",
    url: "https://canvas-mcp-tool.com",
    siteName: "Canvas MCP Tool",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Canvas MCP Tool - AI Assistant for Canvas LMS",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canvas MCP Tool - AI Assistant for Canvas LMS",
    description: "Study more, work less. AI-powered productivity for Canvas LMS.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen bg-background">
        {children}
      </body>
    </html>
  );
}