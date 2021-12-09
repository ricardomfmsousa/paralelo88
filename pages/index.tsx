import Footer from "components/Footer";
import Header from "components/Header";
import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <div className="container">
      <Head>
        <title>Paralelo 88</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Paralelo 88" />
        <p className="description">Brevemente...</p>
      </main>

      <Footer />
    </div>
  )
}
