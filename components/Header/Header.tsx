import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import styles from "./Header.module.scss";

export default function Header(): JSX.Element {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar
      fixed="top"
      expand={false}
      collapseOnSelect
      className={styles.navBar}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <Image
            src="images/p88_logo.svg"
            className={styles.logo}
            alt="Paralelo 88 Logo"
            fluid
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          restoreFocus={false}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Paralelo 88
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#home">Início</Nav.Link>
              <Nav.Link href="#services">Serviços</Nav.Link>
              <Nav.Link href="#contact">Contactos</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}
