import "./globals.css";

export const metadata = {
  title: "AI 工具导航",
  description: "收集全网优质AI工具",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}