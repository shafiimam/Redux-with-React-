import { GET_PRODUCTS } from "./actionTypes";

const initialState = {
  productList: [
    {
      name: 'Google Pixel - Black',
      price: 650,
      id: 1,
      stock: 20
    },
    {
      name: 'Samsung S7',
      price: 400,
      id: 2,
      stock: 3
    },
    {
      name: 'Moto G3',
      price: 400,
      id: 3,
      stock: 10
    }
  ],
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default productReducer