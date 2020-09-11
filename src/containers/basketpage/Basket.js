import React from "react";
import * as css from "./basket-style.module.css";
import { connect } from "react-redux";
import Item from "../../components/basket/Item";

const Basket = ({ basket }) => {
  return basket.length > 0 ? (
    basket.map((item) => (
      <div key={item.id} className={css.product}>
        <Item
          src={item.src}
          title={item.title}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
        ></Item>
      </div>
    ))
  ) : (
    <div className={css.empty}>empty</div>
  );
};

function mapStateToProps(state) {
  return { basket: state.basket };
}
// function mapDispatchToProps(dispatch, actions) {
//   return {
//     actions,
//   };
// }

export default connect(mapStateToProps)(Basket);
