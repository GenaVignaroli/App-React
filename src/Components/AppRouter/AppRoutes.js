import React from 'react'
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { ProductDetail } from '../ItemDetailContainer/ProductDetail'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Nav from '../NavBar/Nav'


export const AppRoutes = () => {
    return (
        <div>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/ItemListContainer" exact component={ItemListContainer}/>
                    <Route path="/ItemDetailContainer" exact component={ItemDetailContainer}/>
                    <Route path="/Productos/:id" exact component={ProductDetail} />
                </Switch>
            </Router>
        </div>
    )
}
