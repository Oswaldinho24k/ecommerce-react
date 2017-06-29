import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './home/homePage';
import ProductList from './productList/productList';
import ProductDetail from './productList/productDetail';


class Routes extends Component{
  render(){
    return(
      <Switch>

        <Route exact path="/" component={HomePage}/>
          <Route path="/catalogo/:productId" component={ProductDetail}/>
          <Route path="/catalogo" component={ProductList}/>

        <Route component={HomePage}/>
      </Switch>
    );
  }
}

export default Routes;
