import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "OrangeIntelligence",
  description: "Real Time Competitor Insights",
  icons: {
    icon: "/OrangeLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
{/* Google Tag Manager script in <head> */}
<Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K36D982C');
          `}
        </Script>
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-22QCNHXG24"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-22QCNHXG24');
          `}
        </Script>
        <Script
  id="clarity-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qzv0l9e3g5");`,
  }}
/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-K36D982C"
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  ></iframe>
</noscript>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
