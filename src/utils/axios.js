import axios from 'axios'

const BASEURL = 'https://fakestoreapi.com/products'

const API = {
  //Product API//
  //get all products from the fake store api
  getAllProducts: function () {
    return axios.get(BASEURL)
  },
}

export default API
