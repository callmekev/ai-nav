import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 工具导航",
  description: "收集全网优质AI工具",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}