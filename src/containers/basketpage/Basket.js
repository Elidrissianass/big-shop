import React from "react";
import * as css from "./basket-style.module.css";
// import { connect } from "react-redux";
import Item from "../../components/basket/Item";
import pic from "./ara.jpg";

const Basket = () => {
  const basket = [
    {
      src: pic,
      id: "1",
      title: "shoe 1",
      description: "nasidhaoisd hasd sadasd",
      price: "$ 15",
    },
    {
      src: pic,
      id: "2",
      title: "shoe 2",
      description: "nasidhaoisd hasd sadasd",
      price: "$ 15",
    },
  ];
  return basket.length > 0 ? (
    basket.map((pic) => (
      <div key={pic.id} className={css.product}>
        <Item
          src={pic.src}
          title={pic.title}
          description={pic.description}
          price={pic.price}
        ></Item>
      </div>
    ))
  ) : (
    <div className={css.empty}>empty</div>
  );
};

// function mapStateToProps(state) {
//   return { basket: state.basket };
// }
// function mapDispatchToProps(dispatch, actions) {
//   return {
//     actions,
//   };
// }
export default Basket;
// export default connect(mapStateToProps)(Basket);
