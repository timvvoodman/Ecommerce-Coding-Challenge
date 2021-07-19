export const initialState = {
  products: [],
  productsCopy: [],
  priceSortToggle: false,
  priceFilter: '',
  categoryFiter: '',
  cart: [],
}

//Function to compute cart total for Basket Total
export const getCartTotal = (cart) => {
  let total = cart?.reduce((amount, item) => item.price + amount, 0)
  return total
}

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
    //filter the products in global state by price range from customer dropdown (PriceFilter)
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
    //filter the products in global state by category from customer dropdown (PriceFilter)
    case 'CATEGORY_FILTER':
      return {
        ...state,
        productsCopy: state.productsCopy.filter((product) => {
          return product.category === state.categoryFilter
        }),
      }
    case 'RESET_PROUCTS':
      return {
        ...state,
        productsCopy: state.products,
      }
    //add selected product to cart, preserves current item in cart
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.data],
      }

    //find the index of the cart item clicked and remove from basket state
    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      )
      let newCart = [...state.cart]
      if (index >= 0) {
        newCart.splice(index, 1)
      } else {
        console.warn(`Cannot remove cart Item (id:${action.id}).
        Does not exist in cart.`)
      }
      return {
        ...state,
        cart: newCart,
      }

    default:
      return state
  }
}

export default reducer
