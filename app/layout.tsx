import "./globals.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`antialiased bg-gray-600`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
