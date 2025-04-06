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
        {/* GTM Script in Head */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K36D982C');`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
        
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K36D982C"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

</noscript>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
