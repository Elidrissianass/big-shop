import { ADD_TO_BASKET } from "../actions/actions";
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
      price: "$ 15",
      quantity: 1,
    },
    {
      src: item2,
      id: "2",
      title: "sbardiiila",
      description: "nasidhaoisd hasd sadasd",
      price: "$ 15",
      quantity: 1,
    },
    {
      src: item3,
      id: "3",
      title: "sbardiiila",
      description: "nasidhaoisd hasd sadasd",
      price: "$ 15",
      quantity: 1,
    },
    {
      src: item4,
      id: "4",
      title: "sbardiiila",
      description: "nasidhaoisd hasd sadasd",
      price: "$ 15",
      quantity: 1,
    },
  ],
  basket: [],

  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      let addedItem = state.products.find((item) => item.id === action.id);
      if (addedItem?.id) {
        let existedItem = state.basket.find((item) => item.id === action.id);
        if (existedItem?.id) {
          addedItem.quantity += 1;
          console.log(addedItem);
        } else return { ...state, basket: [...state.basket, addedItem] };
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
