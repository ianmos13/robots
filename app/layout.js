import "./globals.scss";
import StoreProvider from "@/app/StoreProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FloatingIcons from "@/components/UI/FloatingIcons/FloatingIcons";
import CookieModal from '@/components/UI/CookieModal/CookieModal';
export const metadata = {
  title: "Промышленные Роботы CRP",
  description: "Промышленные Роботы CRP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>

      <StoreProvider>
        <body suppressHydrationWarning={true}>
          <Header />
          <FloatingIcons />
            <section className="container">{children}</section>
            <CookieModal />
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
