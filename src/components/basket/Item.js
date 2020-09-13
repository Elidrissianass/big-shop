import React from "react";
import * as css from "./item-style.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {
  addQuantity,
  subQuantity,
  removeFromBasket,
} from "../../redux/actions/actionCreators";

const Item = ({
  id,
  src,
  title,
  description,
  price,
  quantity,
  addQuantity,
  subQuantity,
  removeFromBasket,
}) => {
  /* Quantity state */

  return (
    <div className={css.item}>
      <div className={css.img}>
        <img src={src} alt="" />
      </div>
      <div className={css.info}>
        <h2>{title}</h2>
        <h4>{description}</h4>
        <div className={css.quantity}>
          <ArrowDropUpIcon onClick={addQuantity} />
          <input type="text" disabled value={quantity}></input>
          <ArrowDropDownIcon onClick={subQuantity} />
        </div>
        <h3>$ {price}</h3>
        <Button onClick={removeFromBasket}>Remove from basket</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { basket: state.basket };
};
const mapDispatchToProps = (dispatch, myProps) => {
  return {
    addQuantity: () => dispatch(addQuantity(myProps.id)),
    subQuantity: () => dispatch(subQuantity(myProps.id)),
    removeFromBasket: () => dispatch(removeFromBasket(myProps.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
