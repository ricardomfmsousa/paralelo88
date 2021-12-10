import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Head from "next/head";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

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

      <Container as="header" id="home" fluid className="p-0">
        <Header title="Paralelo 88" />
      </Container>

      <Container as="main" fluid>
        <Row
          as="section"
          className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
        >
          <Col
            xs={{ order: 1 }}
            md={{ size: 7, offset: 1 }}
            className="py-5 mb-5 py-md-0 mb-md-0"
          >
            <Image
              src="images/plant_on_chair.jpg"
              width="250"
              alt="Paralelo 88 Logo"
              fluid
            />
          </Col>
        </Row>
        <Row
          as="section"
          id="services"
          className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative"
        >
          <Col
            xs={{ order: 1 }}
            md={{ size: 7, offset: 1 }}
            className="py-5 mb-5 py-md-0 mb-md-0"
          >
            <Image
              src="images/abstract_install.jpg"
              width="250"
              alt="Paralelo 88 Logo"
              fluid
            />
          </Col>
        </Row>
      </Container>

      <Container as="footer" id="contact" fluid>
        <Footer />
      </Container>
    </>
  )
}
