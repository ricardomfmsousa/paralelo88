import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <div className="container">
      <Head>
        <title>Paralelo 88</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />{' '}
      </Head>

      <main>
        <Header title="Paralelo 88" />
        <p className="description">Brevemente...</p>
      </main>

      <Footer />
    </div>
  )
}
