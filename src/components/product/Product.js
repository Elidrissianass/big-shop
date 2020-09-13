import React from "react";
import * as css from "./products-style.module.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addToBasket } from "../../redux/actions/actionCreators";

const Product = ({ id, src, title, description, price, pushToBasket }) => {
  return (
    <div className={css.Product}>
      <img src={src} alt="" />
      <div className={css.info}>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>$ {price}</h3>
        <Button onClick={pushToBasket}>Add to Cart</Button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { basket: state.basket };
};

const mapDispatchToProps = (dispatch, myProps) => {
  return {
    pushToBasket: () => {
      dispatch(addToBasket(myProps.id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
