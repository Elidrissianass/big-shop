import React from "react";
import * as css from "./products-style.module.css";
import Button from "@material-ui/core/Button";

const Product = ({ src, title, description, price }) => {
  return (
    <div className={css.Product}>
      <img src={src} alt="" />
      <div className={css.info}>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};
export default Product;
