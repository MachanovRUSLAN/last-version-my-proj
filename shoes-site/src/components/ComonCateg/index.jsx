import React, { useState } from "react";
import products from "../../Data/dummydata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRepeat, faEye } from "@fortawesome/free-solid-svg-icons";
import "./CommonCateg.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function CommonCateg() {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  // Calculate the current items to display based on itemOffset
  const currentItems = products.slice(itemOffset, itemOffset + itemsPerPage);

  // Calculate the total number of pages needed for pagination
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Handle page click event
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <div className="common-categ">
      <div className="common-box">
        {currentItems.map((product, index) => (
          <div className="content" key={index}>
            <img src={product.img} alt={product.name} />
            <img className="star-img" src={product.star} />
            <h2>{product.name.slice(0, 9)}</h2>
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
      <div className="paginate22">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default CommonCateg;
