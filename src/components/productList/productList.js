import React, {Component} from 'react';
import { Row, Col , Card} from 'antd';
import ProductCard from './productCard';
import {Link} from 'react-router-dom';

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
  render(){
    return(
    <div>
      <Row>
      {productos.map(prod=>{
        return(
          <Col span={6} key={prod.id}>
            <Link to={'/catalogo/'+prod.nombre}>
              <ProductCard
                name={prod.nombre}
                link={prod.link}/>
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
