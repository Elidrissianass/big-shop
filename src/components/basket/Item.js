import React, { useState } from "react";
import * as css from "./item-style.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import Button from "@material-ui/core/Button";

const Item = ({ src, title, description, price, quantity }) => {
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
          <ArrowDropUpIcon />
          <input type="text" disabled value={quantity}></input>
          <ArrowDropDownIcon />
        </div>
        <h3>{price}</h3>
        <Button>Remove from basket</Button>
      </div>
    </div>
  );
};

export default Item;
