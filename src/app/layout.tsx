import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindHR | استشارات الموارد البشرية والتدريب المؤسسي - مصر",
  description:
    "MindHR - شركة متخصصة في استشارات الموارد البشرية وقانون العمل والتدريب المؤسسي في مصر. نساعد الشركات في تحقيق الامتثال القانوني وتحسين الأداء والنمو المستدام. احجز استشارتك المجانية الآن.",
  keywords: [
    "استشارات موارد بشرية",
    "قانون العمل المصري",
    "تدريب مؤسسي",
    "حوكمة الشركات",
    "MindHR",
    "HR consulting Egypt",
    "labor law compliance",
    "corporate training",
    "Cairo",
    "Egypt",
  ],
  authors: [{ name: "MindHR" }],
  icons: {
    icon: "/mindhrlogo.png",
  },
  openGraph: {
    title: "MindHR | Brains Behind Better HR",
    description:
      "Transform your management systems with confidence. Specialized HR consulting and corporate training in Egypt since 2015.",
    siteName: "MindHR",
    type: "website",
    locale: "ar_EG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
