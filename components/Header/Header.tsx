import classNames from 'classnames';
import { useState } from 'react';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';

import Menu from '../Menu/Menu';
import styles from './Header.module.scss';

export default function Header(): JSX.Element {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <Navbar
      fixed="top"
      expand={false}
      collapseOnSelect
      className={styles.navbar}
    >
      <Container fluid>
        {isMenuOpen && <Menu setMenuOpen={setMenuOpen} />}
        <Navbar.Brand href="#" className={styles.brand}>
          <Image
            src="images/p88.svg"
            className={styles.logo}
            alt="Paralelo 88 Logo"
            fluid
          />
        </Navbar.Brand>
        <button
          type="button"
          className={classNames(styles.menutrigger, 'bi bi-list-nested')}
          onClick={() => setMenuOpen(!isMenuOpen)}
        ></button>
      </Container>
    </Navbar>
  );
}
