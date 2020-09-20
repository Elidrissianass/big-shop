import {
  ADD_TO_BASKET,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_FROM_BASKET,
  SET_USER,
} from "./actions";

export const addToBasket = (id) => {
  return { type: ADD_TO_BASKET, id };
};
export const removeFromBasket = (id) => {
  return { type: REMOVE_FROM_BASKET, id };
};
export const addQuantity = (id) => {
  return { type: ADD_QUANTITY, id };
};
export const subQuantity = (id) => {
  return { type: SUB_QUANTITY, id };
};
export const setUser = (user) => {
  return { type: SET_USER, user };
};
