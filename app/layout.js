import "./globals.scss";
import StoreProvider from "@/app/StoreProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FloatingIcons from "@/components/UI/FloatingIcons/FloatingIcons";
export const metadata = {
  title: "Промышленные Роботы CRP",
  description: "Промышленные Роботы CRP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>

      <StoreProvider>
        <body>
          <Header />
          <FloatingIcons />
            <container>{children}</container>
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
