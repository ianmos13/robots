'use client'
import AppTransition from '@/components/UI/AppTransition/AppTransition'
import store from '@/redux/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import Script from 'next/script'

export function Providers({ children }) {
	const queryClient = new QueryClient()
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				{/* Yandex.Metrika */}
				<Script
					id='yandex-metrika'
					strategy='afterInteractive'
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
							src='https://mc.yandex.ru/watch/62154340'
							style={{ position: 'absolute', left: '-9999px' }}
							alt=''
						/>
					</div>
				</noscript>

				{/* Google Tag (gtag.js) */}
				<Script
					src='https://www.googletagmanager.com/gtag/js?id=G-SD7P2XV399'
					strategy='afterInteractive'
				/>
				<Script
					id='google-analytics'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-SD7P2XV399');
              `,
					}}
				/> 
				
				 {/* Top.Mail.Ru counter */}
          <Script
            id="topmail-counter"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                var _tmr = window._tmr || (window._tmr = []);
                _tmr.push({id: "3620390", type: "pageView", start: (new Date()).getTime()});
                (function (d, w, id) {
                  if (d.getElementById(id)) return;
                  var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
                  ts.src = "https://top-fwz1.mail.ru/js/code.js";
                  var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
                  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
                })(document, window, "tmr-code");
              `,
            }}
          />
          <noscript>
            <div>
              <img
                src="https://top-fwz1.mail.ru/counter?id=3620390;js=na"
                style={{ position: "absolute", left: "-9999px" }}
                alt="Top.Mail.Ru"
              />
            </div>
          </noscript>
				<AppTransition>{children}</AppTransition>
			</QueryClientProvider>
		</Provider>
	)
}