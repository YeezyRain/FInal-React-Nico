import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Navbar from '../components/Navbar/Navbar'
import Cart from '../components/Cart/Cart'
import Contacto from '../pages/Contacto'
import Nosotros from '../pages/Nosotros'
import Checkout from '../pages/Checkout'

const RouterApp = () => {
    return (
        <Router>
            <Navbar />
                <Route path="/nosotros">
                    <Nosotros />
                </Route>
                <Route path="/contacto">
                    <Contacto />
                </Route>
                <Route exact path="/">
                    <ItemListContainer />
                </Route>
                <Route path="/item/:id">
                    <ItemDetailContainer />
                </Route>
                <Route path="/category/:categoryName">
                    <ItemListContainer />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <Route path="*">
                    <h1>404</h1>
                </Route>
        </Router>
    )
}
export default RouterApp
