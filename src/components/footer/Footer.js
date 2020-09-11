import React from "react";
import * as css from "./footer-style.module.css";

const Footer = () => {
  return (
    <div className={css.footer}>
      <p>© 2020 Big Shop!</p>
      <p>Privacy - Terms - Company Details</p>
    </div>
  );
};

export default Footer;
