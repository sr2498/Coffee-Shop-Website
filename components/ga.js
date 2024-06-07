"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "../lib/gtagHelper";

export default function GoogleAnalytics({ gaid }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();

    pageview(url);
  }, [pathname, searchParams, gaid]);

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaid}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaid}',{ 'anonymize_ip': true });
                    

                    gtag('consent', 'default', {
                        'analytics_storage': 'denied',
						'ad_storage': 'denied',
						'personalization_storage': 'denied',
						'functionality_storage': 'denied',
						'security_storage': 'denied',
                    });
                    
                    gtag('config', '${gaid}', {
                        page_path: window.location.pathname,'anonymize_ip': true});
                    `,
        }}
      />
    </>
  );
}
