import React, { Component} from 'react'
import { Row, Col , Card} from 'antd';
import firebase from '../../firebase';

class  ProductDetail extends Component {

  state = {
    producto:''
  }

  componentWillMount(){
    // console.log(this.props.match.params);
    firebase.database().ref('productos/' + this.props.match.params.productId)
    .on('value', (snap)=>{
      this.setState({producto:snap.val()})
    });
  }

  render () {
    const {producto} = this.state;
    return(
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row>
          <Col span={12}>
            <Card title={producto.nombre} bordered={false} style={{ width: 300 }}>
              <p>{producto.desc}</p>
              
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src={producto.img} />
                </div>
                <h4>{producto.price}</h4> 
                
              </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductDetail;
