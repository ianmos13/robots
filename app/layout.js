import "./globals.scss";
import StoreProvider from "@/app/StoreProvider";
import AppTransition from "@/components/UI/AppTransition/AppTransition";
import Script from "next/script";

export const metadata = {
  title: "Промышленные Роботы CRP",
  description: "Промышленные Роботы CRP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning={true}>
        <StoreProvider>
          {/* Yandex.Metrika */}
          <Script
            id="yandex-metrika"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) { return; }
                  }
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                  k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(62154340, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true,
                  ecommerce:"dataLayer"
                });
              `,
            }}
          />
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/62154340"
                style={{ position: "absolute", left: "-9999px" }}
                alt=""
              />
            </div>
          </noscript>

          {/* Google Tag (gtag.js) */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-SD7P2XV399"
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-SD7P2XV399');
              `,
            }}
          />

          <AppTransition>{children}</AppTransition>
        </StoreProvider>
      </body>
    </html>
  );
}
