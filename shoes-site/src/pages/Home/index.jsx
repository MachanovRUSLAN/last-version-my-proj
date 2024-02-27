import React from "react";

import Slide from "../../components/Slide";
import Collection from "../../components/Collection";
import Collect_2 from "../../components/Collections-2";
import Common from "../../components/Common.offer";
import Subscribe from "../../components/Subscribe";
import BestProduct from "../../components/BestProducts";
import Blog from "../../components/Blog";
import Brend from "../../components/Brens";


function Home() {
  return (
    <>
      <Slide/>
      <Collection />
      <Collect_2 />
      <Common />
      <Subscribe />
      <BestProduct />
      <Blog />
      <Brend />
    </>
  );
}

export default Home;
