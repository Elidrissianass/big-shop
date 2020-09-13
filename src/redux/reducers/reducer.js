import {
  ADD_TO_BASKET,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_FROM_BASKET,
} from "../actions/actions";

import item from "../../assets/images/item.jpg";
import item2 from "../../assets/images/item2.jpg";
import item3 from "../../assets/images/item3.jpg";
import item4 from "../../assets/images/item4.jpg";

const initialState = {
  products: [
    {
      src: item,
      id: "1",
      title: "sbardiiila",
      description: "nasidhaoisd hasd sadasd",
      price: 15.99,
      quantity: 1,
    },
    {
      src: item2,
      id: "2",
      title: "sbardiiila",
      description: "nasidhaoisd hasd sadasd",
      price: 28.99,
      quantity: 1,
    },
    {
      src: item3,
      id: "3",
      title: "sbardiiila",
      description: "nasidhaoisd hasd sadasd",
      price: 78,
      quantity: 1,
    },
    {
      src: item4,
      id: "4",
      title: "sbardiiila",
      description: "nasidhaoisd hasd sadasd",
      price: 42,
      quantity: 1,
    },
  ],
  basket: [],

  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* adds an item to the basket */
    case ADD_TO_BASKET:
      let addedItem = state.products.find((item) => item.id === action.id);
      if (addedItem?.id) {
        let existedItem = state.basket.find((item) => item.id === action.id);
        if (existedItem?.id) {
          addedItem.quantity += 1;
          return { ...state, basket: [...state.basket] };
        } else return { ...state, basket: [...state.basket, addedItem] };
      }
      return state;
    /* ***** */

    /* removes an item from the basket */
    case REMOVE_FROM_BASKET:
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === action.id);
      if (index >= 0) newBasket.splice(index, 1);
      return { ...state, basket: newBasket };
    /* ***** */

    /* add the quantity of an item in the basket */
    case ADD_QUANTITY:
      let addQuantity = state.products.find((item) => item.id === action.id);
      addQuantity.quantity += 1;
      return { ...state, basket: [...state.basket] };
    /* ***** */

    /* sub the quantity of an item in the basket */
    case SUB_QUANTITY:
      let subQuantity = state.products.find((item) => item.id === action.id);
      subQuantity.quantity -= 1;
      if (subQuantity.quantity === 0) {
        let newQuantityBasket = [...state.basket];
        const index = state.basket.findIndex((item) => item.id === action.id);
        if (index >= 0) newQuantityBasket.splice(index, 1);
        return { ...state, basket: newQuantityBasket };
      }
      return { ...state, basket: [...state.basket] };
    /* ***** */
    default:
      return state;
  }
};

export default reducer;
