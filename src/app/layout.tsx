import type { Metadata } from "next"; // 引入内置类型
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 工具导航",
  description: "全网优质AI工具集合",
};

// 如果不想用 any，推荐使用 React.ReactNode，这是最标准的操作
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
