import React, { useState } from "react";
import * as css from "./item-style.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Button from "@material-ui/core/Button";

const Item = ({ src, title, description, price }) => {
  const [quantity, setquantity] = useState(0);
  const addQuantity = () => {
    setquantity(quantity + 1);
  };
  const subQuantity = () => {
    setquantity(quantity > 0 ? quantity - 1 : quantity);
  };
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
        <h3>{price}</h3>
        <Button>Remove from basket</Button>
      </div>
    </div>
  );
};

export default Item;
