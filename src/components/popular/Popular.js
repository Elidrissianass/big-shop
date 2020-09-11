import React from "react";
import * as css from "./popular-style.module.css";
import item1 from "./images/1.jpg";
import item2 from "./images/2.jpg";
import item3 from "./images/3.jpg";
import item4 from "./images/4.jpg";

const Popular = () => {
  return (
    <div className={css.Popular}>
      <h2>Our Popular Products</h2>
      <div className={css.carousel}>
        {/* -- 1 --*/}
        <div className={css.container}>
          <img src={item1} alt="" />
          <div className={css.text}>
            <p>Sneakers</p>
          </div>
        </div>
        {/* -- 2 --*/}
        <div className={css.container}>
          <img src={item2} alt="" />
          <div className={css.text}>
            <p>Chukka</p>
          </div>
        </div>
        {/* -- 3 --*/}
        <div className={css.container}>
          <img src={item3} alt="" />
          <div className={css.text}>
            <p>Boots</p>
          </div>
        </div>
        {/* -- 4 --*/}
        <div className={css.container}>
          <img src={item4} alt="" />
          <div className={css.text}>
            <p>Loafers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
