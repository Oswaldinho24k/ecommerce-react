import React, {Component} from 'react';
import firebase from '../../firebase';
import {Row, Col, Button} from 'antd';
import {Link} from 'react-router-dom';

class Cart extends Component {
  state={
    cartProducts:[]
  }

  componentWillMount(){
    let user = firebase.auth().currentUser
    firebase.database().ref('cart/'+user.uid)
    .on('value', (res)=>{
      let obj = res.val();
      let array = [];
      for(let key in obj){
        let no = obj[key];
        no['id'] = key;
       array.push(no);
      }
      this.setState({cartProducts:array});
      console.log(this.state.cartProducts)
    });

  }


  render(){
    return(
      <div>
        <Row>
          {this.state.cartProducts.map(prod=>{
            return(
              <Col span={24} key={prod.id}>

                <p>{prod.cantidad}=>{prod.producto.nombre}</p>
              </Col>
            );
          })}
        </Row>
        <Link to="/checkout">
          <Button>Checkout</Button>
        </Link>
      </div>
    );
  }
}
export default Cart;
