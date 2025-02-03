import "./globals.scss";
import StoreProvider from "@/app/StoreProvider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
            <container>{children}</container>
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
