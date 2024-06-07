import Head from "next/head";

import "@/styles/globals.css";
import "primereact/resources/themes/md-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import "../node_modules/primeflex/primeflex.css";

import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import "material-icons/iconfont/material-icons.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Journey Bean's Coffee</title>
        <meta charstet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Discover and Create the Perfect Coffee"
        />

        <meta
          property="og:url"
          content="https://njit-wis.github.io/group-project-is601-851-teamb/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Journey Bean's Coffee" />
        <meta
          property="og:description"
          content="Discover and Create the Perfect Coffee"
        />
        <meta
          property="og:image"
          content="https://njit-wis.github.io/group-project-is601-851-teamb/_next/static/media/hero-cup.44ff502f.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="njit-wis.github.io" />
        <meta
          property="twitter:url"
          content="https://njit-wis.github.io/group-project-is601-851-teamb/"
        />
        <meta name="twitter:title" content="Journey Bean's Coffee" />
        <meta
          name="twitter:description"
          content="Discover and Create the Perfect Coffee"
        />
        <meta
          name="twitter:image"
          content="https://njit-wis.github.io/group-project-is601-851-teamb/_next/static/media/hero-cup.44ff502f.jpg"
        />

        <meta
          name="keywords"
          content="Coffee, Late, Capucion, Cold Brew, Delicious, creative, best coffee, Coffee Sales"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          // eslint-disable-next-line max-len
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Montserrat:wght@300&family=Pacifico&display=swap"
          rel="stylesheet"
        ></link>

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-NQMN95N4');
						`,
          }}
        />
        {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_DB_GA}`} /> */}
        {/* Google tag (gtag.js) */}
        {/* <script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${process.env.NEXT_PUBLIC_DB_GA}',{ 'anonymize_ip': true });

						`
					}}
				/> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
