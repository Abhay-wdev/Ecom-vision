import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import FloatingContact from "@/components/FloatingContact.jsx";
import NeonCursor from "@/components/NeonCursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased min-h-screen`}>
        <Header />
        {children}
        <NeonCursor />
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
