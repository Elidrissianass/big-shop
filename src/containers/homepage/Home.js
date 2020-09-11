import React from "react";
import * as css from "./home-style.module.css";
import Product from "../../components/product/Product";
import Banner from "../../components/banner/Banner";
import item from "./item.jpg";
import item2 from "./item2.jpg";
import item3 from "./item3.jpg";
import item4 from "./item4.jpg";
import Popular from "../../components/popular/Popular";

const Home = () => {
  return (
    <div className={css.home}>
      <Banner />
      <Popular />
      <div className={css.container}>
        <Product
          src={item}
          title="hey shoe"
          description="thew mefokds nfdsjp oaodjf a afda fsdfadsf dsf"
          price="15$"
        />{" "}
        <Product
          src={item2}
          title="hey shoe"
          description="thew mefokds nfdsjp oaodjf a afda fsdfadsf dsf"
          price="15$"
        />{" "}
        <Product
          src={item3}
          title="hey shoe"
          description="thew mefokds nfdsjp oaodjf a afda fsdfadsf dsf"
          price="15$"
        />
        <Product
          src={item4}
          title="hey shoe"
          description="thew mefokds nfdsjp oaodjf a afda fsdfadsf dsf"
          price="15$"
        />
      </div>
    </div>
  );
};

export default Home;
