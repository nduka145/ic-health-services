import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wheelsynctech.com"),
  title: {
    default: "Wheelsync Technology",
    template: "%s | Wheelsync Technology",
  },
  description:
    "Wheelsync Technology delivers secure cloud, DevOps, and digital health IT solutions. We help organizations innovate faster with confidence.",
  keywords: [
    "cloud computing",
    "DevOps",
    "health IT",
    "automation",
    "cybersecurity",
    "AWS",
    "digital transformation",
    "Wheelsync Technology",
  ],
  applicationName: "Wheelsync Technology",
  openGraph: {
    title: "Wheelsync Technology — Cloud, DevOps & Health IT Experts",
    description:
      "Secure, automate, and innovate with Wheelsync Technology. Cloud & DevOps consulting for regulated industries.",
    url: "https://www.wheelsynctech.com",
    siteName: "Wheelsync Technology",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Wheelsync Technology" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wheelsync Technology",
    description:
      "Secure cloud, DevOps automation, and digital health solutions that deliver outcomes.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.wheelsynctech.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Organization schema (edit social links if you have them) */}
        <script
          type="application/ld+json"
          // @ts-ignore - allowed for JSON-LD
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Wheelsync Technology, LLC",
              url: "https://www.wheelsynctech.com",
              logo: "https://www.wheelsynctech.com/logo-blue.svg",
              sameAs: [
                "https://www.linkedin.com/company/wheelsync"
                // add other profiles if you have them
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
