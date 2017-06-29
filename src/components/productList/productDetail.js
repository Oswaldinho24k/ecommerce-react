import React, { Component} from 'react'
import { Row, Col , Card} from 'antd';

class  ProductDetail extends Component {
  render () {
    return(
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row>
          <Col span={12}>
            <Card title="Card title" bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                  <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>
                
              </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProductDetail;
