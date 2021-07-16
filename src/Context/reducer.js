export const initialState = {
  products: [],
  filteredProducts: [],
  cart: [],
}

//Function to compute cart total for Basket Total
// export const getCartTotal = (cart) =>
//   cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.data,
      }

    default:
      return state
  }
}

export default reducer
