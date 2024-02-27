import React, { useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faUser,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const { cart } = useSelector((state) => state.cartReducer);

  const totalQty = cart?.length
    ? cart.reduce((accumulator, current) => accumulator + current.quantity, 0)
    : 0;

  return (
    <div className="headers">
      <div className="header-top">
        <div className="input-box">
          <input type="search" placeholder="search products..." />
          <span className="input-span">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>
        <div className="logo">
          <img src="https://demos.coderplace.com/woo/WCM01/WCM01004/wp-content/uploads/2022/10/logo.svg" />
          <span className="logo-span">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </div>

        <div className="user-part">
          <span className="h-bar">
            <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
          </span>
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span className="cart">
            <Link to="/cart">
              <i>
                <FontAwesomeIcon icon={faBagShopping} />
              </i>
              <p className="Qty">{totalQty}</p>
            </Link>
          </span>
        </div>
      </div>
      <div className={`navbar ${isOpenMenu ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/media">MEDIA</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
