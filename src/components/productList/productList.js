import React, {Component} from 'react';
import { Row, Col } from 'antd';
import ProductCard from './productCard';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';


const productos = [
  {id:1,
  nombre:'cerveza1',
  link:'https://images.pexels.com/photos/94317/pexels-photo-94317.jpeg?h=350&auto=compress&cs=tinysrgb'},
  {id:2,
  nombre:'cerveza2',
  link:'https://images.pexels.com/photos/94317/pexels-photo-94317.jpeg?h=350&auto=compress&cs=tinysrgb'},
  {id:3,
  nombre:'cerveza3',
  link:'https://images.pexels.com/photos/8755/food-cold-wood-hand.jpg?h=350&auto=compress&cs=tinysrgb'},
  {id:4,
  nombre:'cerveza4',
  link:'https://images.pexels.com/photos/8755/food-cold-wood-hand.jpg?h=350&auto=compress&cs=tinysrgb'},
  {id:5,
  nombre:'cerveza5',
  link:'https://images.pexels.com/photos/8755/food-cold-wood-hand.jpg?h=350&auto=compress&cs=tinysrgb'},
  {id:6,
  nombre:'chela',
  link:'https://images.pexels.com/photos/8755/food-cold-wood-hand.jpg?h=350&auto=compress&cs=tinysrgb'},

]



class ProductList extends Component{

  state = {
    productos: []
  }

  componentWillMount(){

    firebase.database().ref('productos')
    .once('value', (res)=>{
      let obj = res.val();
      let array = [];
      for(let key in obj){
        let no = obj[key];
        no['id'] = key;
       array.push(no);
      }
      this.setState({productos:array});
    });
  }


  render(){
    return(
    <div>
      <Row>
      {this.state.productos.map(prod=>{
        return(
          <Col span={6} key={prod.id}>
            <Link to={'/catalogo/'+prod.id}>
              <ProductCard
                name={prod.nombre}
                link={prod.img}/>
            </Link>
          </Col>
        );
      })}

     </Row>

    </div>
    );
  }
}
export default ProductList;
