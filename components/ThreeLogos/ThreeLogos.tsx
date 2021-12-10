import Image from "react-bootstrap/Image";

export default function ThreeLogos(props): JSX.Element {
  const rotations = [90, 0, 180]
  return (
    <div className="d-flex flex-column" {...props}>
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
  )
}
