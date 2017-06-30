import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './home/homePage';
import ProductList from './productList/productList';
import ProductDetail from './productList/productDetail';
import ProductsManagerPage from './manager/ProductsManagerPage';
import Login from './user/Login';
import Checkout from './cart/Checkout';
import Payment from './cart/Payment';


class Routes extends Component{
  render(){
    return(
      <Switch>

        <Route exact path="/" component={HomePage}/>
          <Route path="/catalogo/:productId" component={ProductDetail}/>
          <Route path="/catalogo" component={ProductList}/>
          <Route path="/admin" component={ProductsManagerPage} />
          <Route path="/login" component={Login}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/pagar" component={Payment}/>
        <Route component={HomePage}/>
      </Switch>
    );
  }
}

export default Routes;
