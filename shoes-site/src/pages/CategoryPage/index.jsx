import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import products from "../../Data/dummydata";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from "react-bootstrap";
import "./categPage.css";

function CategoryPage() {
  const [productList, setProductList] = useState([]);
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedColor = searchParams.get("color");
  const selectedPriceRange = searchParams.get("priceRange");
  const selectedGender = searchParams.get("gender");

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      categoryName ? product.category === categoryName : trueca
    );

    let filteredList = filteredProducts;

    if (selectedColor) {
      filteredList = filteredList.filter((product) =>
        product.color.includes(selectedColor)
      );
    }
    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split("-");
      filteredList = filteredList.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }
    if (selectedGender) {
      filteredList = filteredList.filter((product) =>
        product.gender.includes(selectedGender)
      );
    }

    setProductList(filteredList);
  }, [categoryName, selectedColor, selectedPriceRange, selectedGender]);

  const handleColorFilter = (color) => {
    setSearchParams({ color });
    navigate(`/category/${categoryName}?color=${color}`);
  };

  const handlePriceRangeFilter = (priceRange) => {
    setSearchParams({ priceRange });
    navigate(`/category/${categoryName}?priceRange=${priceRange}`);
  };

  const handleGenderFilter = (gender) => {
    setSearchParams({ gender });
    navigate(`/category/${categoryName}?gender=${gender}`);
  };

  return (
    <Container>
      <Row>
        <Col className="filterButtons" lg="3">
          <div className="color-filters">
            <p onClick={() => handleColorFilter("blue")}>Blue</p>
            <p onClick={() => handleColorFilter("white")}>white</p>
            <p onClick={() => handleColorFilter("black")}>Black</p>
          </div>
          <div className="price-range-filters">
            <p onClick={() => handlePriceRangeFilter("0-100")}>$0 - $100</p>
            <p onClick={() => handlePriceRangeFilter("100-200")}>
              $100 - $200
            </p>
            <p onClick={() => handlePriceRangeFilter("200-400")}>
              $200 - $400
            </p>
          </div>
          <div className="gender-filters">
            <p onClick={() => handleGenderFilter("men")}>Men</p>
            <p onClick={() => handleGenderFilter("women")}>woMen</p>
          </div>
        </Col>
        <Col lg="9" className="pro-box">
          <div className="product-list">
            {productList.map((product, index) => (
              <div className="content" key={index}>
                <img src={product.img} />
                <img className="star-img" src={product.star} />
                <h2>{product.name}</h2>
                <h5>{product.price}$</h5>
                <div className="read-content">
                  <Link to={`/singleProductPage/${product.id}`}>
                    <div className="addBtn">Read More</div>
                  </Link>
                </div>
                <div className="options">
                  <div className="option-content">
                    <span>
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faRepeat} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryPage;
