import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Head from "next/head";
import Image from "react-bootstrap/Image";

import ThreeLogos from "../components/ThreeLogos/ThreeLogos";

export default function Home(): JSX.Element {
  return (
    <>
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
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <header id="home" className="container-fluid, p-0">
        <Header />
      </header>

      <main className="container">
        <section className="row gx-5 gy-3">
          <div className="col-md-6">
            <Image
              src="images/plant_on_chair.jpg"
              alt="Paralelo 88 Logo"
              fluid
            />
          </div>
          <div className="col-md-6">
            <p>
              Mais do que uma loja, um conceito. Um espaço que reúne o orgânico
              e o design. Um projecto de proximidade com o mundo natural e
              autêntico, aliado às premissas de um estilo de vida mais
              sustentável e minimalista. Um espaço que promove simbioses
              harmoniosas para mostrar projectos que se distinguem nas áreas do
              design, sustentabilidade e outros tantos que sejam possíveis.{' '}
            </p>
          </div>
        </section>
        <section id="services" className="row gx-5 gy-3">
          <div className="col-md-6">
            <Image
              src="images/abstract_install.jpg"
              alt="Paralelo 88 Logo"
              fluid
            />
          </div>
          <div className="col-md-6">
            <p>
              Plantas, muitas plantas; cerâmicas de autor; cosméticos naturais e
              orgânicos e acessórios para um estilo de vida Desperdício Zero e
              sem plástico. Para lá do Showroom, a Paralelo 88 promete uma
              dinâmica vivida de mostras de outros criadores e de workshops nas
              mais variadas áreas.
            </p>
          </div>
        </section>
      </main>

      <footer id="contact" className="container-fluid">
        <Footer />
      </footer>

      <ThreeLogos />
    </>
  )
}
