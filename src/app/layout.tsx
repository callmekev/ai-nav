import "./globals.css";

export const metadata = {
  title: "AI 工具导航",
  description: "全网优质AI工具集合",
};

// 👇 这行加了any类型，彻底封杀报错
export default function RootLayout({ children }: any) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}