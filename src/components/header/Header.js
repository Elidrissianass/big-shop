import React from "react";
import * as css from "./header-style.module.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { connect } from "react-redux";

const Header = ({ basket }) => {
  let length = 0;
  basket.map((item) => (length += item.quantity));

  return (
    <nav className={css.header}>
      <Link to="/" className={css.logo}>
        BigShop.
      </Link>
      <div className={css.info}>
        <Link to="/login" className={css.link}>
          <div className={css.login}>
            <span>LOG IN</span>
            <AccountCircleIcon style={{ marginLeft: "6px" }} />
          </div>
        </Link>

        <Link to="/basket" className={css.link}>
          <div className={css.basket}>
            <ShoppingBasketIcon style={{ marginRight: "6px" }} />
            <span>{length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { basket: state.basket };
};

export default connect(mapStateToProps)(Header);
