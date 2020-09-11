import {
  ADD_TO_BASKET,
  // REMOVE_FROM_BASKET,
  // SUB_QUANTITY,
  // ADD_QUANTITY,
} from "./actions";

export const addToBasket = (id) => {
  return { type: ADD_TO_BASKET, id };
};
// export const removeFromBasket = makeActionCreator(REMOVE_FROM_BASKET, "id");
// export const subQuantity = makeActionCreator(SUB_QUANTITY, "id");
// export const addQuantity = makeActionCreator(ADD_QUANTITY, "id");
