export const initialState = {
  products: [],
  productsCopy: [],
  priceSortToggle: false,
  priceFilter: '',
  categoryFiter: '',
  cart: [],
}

//Function to compute cart total for Basket Total
// export const getCartTotal = (cart) =>
//   cart?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.data,
        productsCopy: action.data,
      }
    // flip toggle to true/false if true sort products by price low-to-high if false high-to-low
    case 'TOGGLE_PRICE_SORT':
      return {
        ...state,
        priceSortToggle: !state.priceSortToggle,
        productsCopy: state.productsCopy.sort((a, b) => {
          if (state.priceSortToggle === true) {
            return parseFloat(b.price) - parseFloat(a.price)
          } else {
            return parseFloat(a.price) - parseFloat(b.price)
          }
        }),
      }
    case 'SET_PRICE_FILTER':
      return {
        ...state,
        priceFilter: action.data,
      }
    case 'PRICE_FILTER':
      return {
        ...state,
        productsCopy: state.productsCopy.filter((product) => {
          return product.price >= state.priceFilter
        }),
      }
    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        categoryFilter: action.data,
      }
    case 'CATEGORY_FILTER':
      return {
        ...state,
        productsCopy: state.productsCopy.filter((product) => {
          return product.category === state.categoryFilter
        }),
      }

    default:
      return state
  }
}

export default reducer
