import React, {Component} from 'react';
import { Carousel } from 'antd';

class HomePage extends Component{
  render(){
    return(
      <div>
      <Carousel autoplay>
          <div><img
            style={{width:'100%', height:'80vh'}}
           src="https://images.pexels.com/photos/27892/pexels-photo-27892.jpg?w=940&h=650&auto=compress&cs=tinysrgb"/></div>
          <div><img
            style={{width:'100%', height:'80vh'}}
           src="https://images.pexels.com/photos/121512/pexels-photo-121512.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></div>
        </Carousel>
      </div>
    );
  }
}
export default HomePage;
