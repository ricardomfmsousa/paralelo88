import classNames from "classnames";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { SocialIcon } from "react-social-icons";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <Container
      className={classNames(styles.footer, 'text-center my-auto py-auto')}
    >
      <Row id="social-icons">
        <Col>
          <SocialIcon
            url="https://www.instagram.com/paralelo_88"
            target="_blank"
            rel="noopener noreferrer"
            bgColor="black"
          />
        </Col>
      </Row>
    </Container>
  )
}
