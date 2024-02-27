import React, { useEffect } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { Outlet } from "react-router";
import { setCartList } from "../../redux/Slice/cart-slice";

function Layoutrouter() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layoutrouter;
