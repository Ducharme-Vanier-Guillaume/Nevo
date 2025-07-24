// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Basic SEO */}
        <meta name="description" content="Nevo Design – Agence Web à Montréal, création de sites modernes et performants." />
        {/* Open Graph */}
        <meta property="og:title" content="Nevo Design – Agence Web à Montréal" />
        <meta property="og:description" content="Création de sites web modernes, performants et adaptés aux PME." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nevodesign.ca" />
        <meta property="og:image" content="https://www.nevodesign.ca/images/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nevo Design – Agence Web à Montréal" />
        <meta name="twitter:description" content="Sites web modernes, rapides et optimisés SEO." />
        <meta name="twitter:image" content="https://www.nevodesign.ca/images/og-image.jpg" />
        {/* Add favicon or other meta tags here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
