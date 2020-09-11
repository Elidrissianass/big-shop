import React from "react";
import * as css from "./banner-style.module.css";
import Button from "@material-ui/core/Button";
const Banner = () => {
  return (
    <div className={css.banner}>
      <div className={css.inner}>
        <div className={css.left}>
          <h1>
            Buy your pair <br /> today
          </h1>
          <h5>check our unique and stylish collection.</h5>
          <Button>Explore</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
