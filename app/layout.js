import "./globals.scss";
import StoreProvider from "@/app/StoreProvider";
import AppTransition from "@/components/UI/AppTransition/AppTransition";

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
          <AppTransition>{children}</AppTransition>
        </body>
      </StoreProvider>
    </html>
  );
}
