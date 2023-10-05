import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/casual.css";

export default function Masculino() {
  return (
    <div className="card_container">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../src/assets/cat-img-3.jpg" />
      <Card.Body>
        <Card.Title>Relógio Rolex </Card.Title>
        <Card.Text>
          R$1200,00 à vista 
        </Card.Text>
        <Button variant="primary" to="">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../src/assets/product-detail-3.jpg" />
      <Card.Body>
        <Card.Title>Relógio Rolex</Card.Title>
        <Card.Text>
         R$1600,00 à vista 
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../src/assets/sapato-casual01img-1.jpg" />
      <Card.Body>
        <Card.Title>Sapato casual</Card.Title>
        <Card.Text>
          R$1350,00 à vista
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
  )
}
