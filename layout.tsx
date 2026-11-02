import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MediBook | إدارة زيارات المندوبين الطبيين",
  description: "منصة تنظيم وحجز مواعيد المندوبين الطبيين مع العيادات.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
