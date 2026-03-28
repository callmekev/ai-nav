import './globals.css';

export const metadata = {
  title: 'AI工具导航',
  description: '现代化AI工具导航页',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}