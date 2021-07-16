import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import API from './utils/axios'

//Component Imports//
import Header from './components/Header/Header'
import Home from './components/Home/Home.js'
import { useStateValue } from './Context/AppState'

function App() {
  //Bring in Reducer from context
  const [{ products }, dispatch] = useStateValue()

  //on component mount call loadProduct Funtion
  useEffect(() => {
    const loadProducts = async () => {
      let response = await API.getAllProducts()
      dispatch({ type: 'FETCH_PRODUCTS', data: response.data })
    }

    loadProducts()
  }, [])

  // Async API call to get product data
  // async function loadProducts() {
  //   try {
  //     const response = await API.getAllProducts()
  //     await dispatch({ type: 'FETCH-PRODUCTS', item: response.data })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
