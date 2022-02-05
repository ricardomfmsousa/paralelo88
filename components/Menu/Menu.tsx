import React from 'react';
import Image from 'react-bootstrap/Image';

import styles from './Menu.module.scss';

export default function Menu({ setMenuOpen }): JSX.Element {
  return (
    <aside className={styles.menu} onClick={() => setMenuOpen(false)}>
      <nav className={styles.nav}>
        <a href="#home">Início</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contactos</a>
      </nav>
      <Image
        src="images/logo.svg"
        className={styles.logo}
        alt="Paralelo 88 Logo"
        fluid
      />
    </aside>
  );
}
