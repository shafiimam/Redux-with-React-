import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  }
}

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product
  }
}

export const increaseQuantity = () => {
  return {
    type: INCREASE_QUANTITY
  }
}

export const decreaseQuantity = () => {
  return {
    type: DECREASE_QUANTITY
  }
}