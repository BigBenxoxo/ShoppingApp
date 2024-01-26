import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductSingle = (props) => {
  const { title, price, description, image, rating } = props;
  const product = props;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card id="lol" style={{ width: "18rem", padding: "1rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Price: ${price}
          <br />
          Rating: {rating.rate}
          <br />
          {description}
        </Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductSingle;
