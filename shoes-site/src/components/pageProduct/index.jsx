import { useState } from "react";
import { useParams } from "react-router";
import products from "../../Data/dummydata";
import "./pageProduct.css";
import { Col, Row, Container, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/Slice/cart-slice";

function PageProduct() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(""); // State to store selected size
  const dispatch = useDispatch();
  const { prodId } = useParams();

  const handleAddToCart = (product) => {
    // Ensure a size is selected before adding to cart
    if (selectedSize) {
      dispatch(addToCart({ ...product, quantity, size: selectedSize }));
    } else {
      alert("Please select a size before adding to cart");
    }
  };

  const handleQty = () => {
    if (quantity === 1) {
      return null;
    } else {
      setQuantity((prevState) => prevState - 1);
    }
  };

  return (
    <div className="proPageBox">
      <h1>Product Page</h1>
      {products.map((product) => {
        if (product.id === +prodId) {
          return (
            <Container key={product.id}>
              <Row>
                <Col lg="6" md="6">
                  <div className="page-img">
                    <img src={product.img} alt={product.name} />
                  </div>
                </Col>
                <Col lg="6" md="6">
                  <div className="page-content">
                    <h3>{product.name}</h3>
                    <h5>{product.price}$</h5>
                    <select
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                    >
                      <option value="">Select Size</option>
                      {product.size.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                    <div className="button">
                      <Button onClick={handleQty}>-</Button>
                      {quantity}
                      <Button
                        onClick={() =>
                          setQuantity((prevState) => prevState + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                    <Link to={`/cart`}>
                      <div
                        onClick={() => {
                          handleAddToCart(product);
                        }}
                      >
                        <h3 className="addButton">ADD</h3>
                      </div>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          );
        }
      })}
    </div>
  );
}

export default PageProduct;
