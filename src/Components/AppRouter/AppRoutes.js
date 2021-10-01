import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from '../CartWidget/Cart'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Nav from '../NavBar/Nav'


export const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/"  component={ItemListContainer}/>
                    <Route exact path="/categoria/:id" component={ItemListContainer}/>
                    <Route exact path="/item/:id" component={ItemDetailContainer} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
            </Router>
        </div>
    )
}
