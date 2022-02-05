import classNames from 'classnames';
import Image from 'react-bootstrap/Image';

import styles from './ThreeLogos.module.scss';

export default function ThreeLogos(props): JSX.Element {
  const rotations = [90, 0, 180];
  return (
    <div className={classNames(styles.watermark, styles.logos)} {...props}>
      {rotations.map((r) => (
        <Image
          key={r}
          src="images/logo.svg"
          alt="Paralelo 88 Logo"
          fluid
          style={{ transform: `rotate(${r}deg)`, padding: '25%' }}
        />
      ))}
    </div>
  );
}
