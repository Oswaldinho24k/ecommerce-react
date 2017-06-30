import React, {Component} from 'react';
import { Card, Avatar , Button} from 'antd';
import firebase from '../../firebase';
import {Link} from 'react-router-dom';


class Checkout extends Component{
  state={
    cartProducts:[],
    total:''
  }

  componentWillMount(){


    firebase.auth().onAuthStateChanged((user) =>{

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
        this.getTotal()
      });

    });


  }

  getTotal=()=>{
    let products = this.state.cartProducts
    let total = 0
    for(let p in products){
      let precio = parseInt(products[p].producto.price)
      total = total + precio
    }
    this.setState({total})
    console.log(this.state.total)

  }

  render(){
    return(
      <div>

          <h1>Checkout</h1>
          {this.state.cartProducts.map(prod=>{
            return(
              <Card>
                <Avatar shape="square" size="large" src={prod.producto.img} />{prod.cantidad}|{prod.producto.nombre}|{prod.producto.price}
              </Card>

            )
          })}
        <p>Total: {this.state.total}</p>
        <Link to="/pagar">
          <Button>Pagar</Button>
        </Link>

      </div>
    );
  }
}
export default Checkout;
