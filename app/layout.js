
import "./globals.css";

export const metadata = {
  title: "JARVIS AI | Personal Assistant",
  description: "Your Personal AI Assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
