import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actionTypes";

const initialState = {
  cartItems: [],
  totalItem: 0,
  totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: state.cartItems.find(item => item.id === action.payload.id) ? state.cartItems.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item) : [...state.cartItems, { ...action.payload, quantity: 1 }],
        totalItem: state?.cartItems?.length,
        totalPrice: state?.cartItems?.reduce((current, next) => {
          return current.price + next.price
        }, { price: 0 })
      }
    }
    default:
      return state
  }
}
export default cartReducer;