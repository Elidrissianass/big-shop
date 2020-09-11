import React from "react";
import * as css from "./home-style.module.css";
import Product from "../../components/product/Product";
import Banner from "../../components/banner/Banner";
import Popular from "../../components/popular/Popular";
import { connect } from "react-redux";

const Home = ({ products }) => {
  return (
    <div className={css.home}>
      <Banner />
      <Popular />
      <div className={css.container}>
        {products.map((items) => (
          <Product
            key={items.id}
            id={items.id}
            src={items.src}
            title={items.title}
            description={items.description}
            price={items.price}
          />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps)(Home);
// export default Home;
