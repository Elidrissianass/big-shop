import React from "react";
import * as css from "./basket-style.module.css";
import { connect } from "react-redux";
import Item from "../../components/basket/Item";
import empty from "../../assets/images/empty.png";

const Basket = ({ basket }) => {
  let total = 0;
  basket.map((item) => (total += item.price * item.quantity));

  return (
    <div className={css.basket}>
      {basket.length > 0 ? (
        basket.map((item) => (
          <div key={item.id} className={css.product}>
            <Item
              id={item.id}
              src={item.src}
              title={item.title}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
            ></Item>
          </div>
        ))
      ) : (
        <div className={css.empty}>
          <h2>Basket is empty!</h2>
          <img src={empty} alt="" />
        </div>
      )}
      <div className={css.total}>
        <span>$</span>
        <input type="text" value={total.toFixed(2)} disabled />
      </div>
    </div>
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
