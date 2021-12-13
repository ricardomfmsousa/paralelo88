import classNames from "classnames";
import { SocialIcon } from "react-social-icons";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={classNames(styles.footer, 'container')}>
      <div id="social-icons" className="row">
        <div className="col-md-4 order-md-1 py-3 py-md-5">
          <h3>Localização</h3>
          <div>Rua Arronches Junqueiro, Nº 88 2900-248 Setúbal</div>
        </div>
        <div className="col-md-4 order-md-3 py-3 py-md-5">
          <h3>Contactos</h3>
          <div>paralelo.oitentaeoito@gmail.com 968 830 915 963 264 895</div>
        </div>
        <div className="col-md-4 order-md-2 py-3 py-md-5 text-center">
          <SocialIcon
            url="https://www.instagram.com/paralelo_88"
            target="_blank"
            rel="noopener noreferrer"
            bgColor="black"
          />
        </div>
      </div>
    </div>
  )
}
