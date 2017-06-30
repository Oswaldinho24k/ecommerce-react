import React, {Component} from 'react';
import { Card, Avatar , Button, Input, message} from 'antd';
import firebase from '../../firebase';
import {Link} from 'react-router-dom';


class Payment extends Component{

  onPay=()=>{
    message.success('Tu pago ha sido exitoso, disfruta tus chelas')
  }


  render(){
    return(
      <div>
      <Card
				style={{margin:'100px auto', width:'400px'}}
				>
        <h1>Payment</h1>
          <form onSubmit={this.guardar}>
  					<Input
  					name="Nombre del tarjethabiente"
  					placeholder="Oswaldinho"
  					type="text"
  					onChange={this.onChange}
  					 />
  					 <Input
  					name="No de tarjeta"
  					placeholder="424242424242424242"
  					type="text"
  					onChange={this.onChange}
  					 />
  					 <Input
  					name="Fecha de expiracion"
  					placeholder="00/00"
  					type="number"
  					onChange={this.onChange}
  					 />
             <Input
            name="Codigo de Seguridad"
            placeholder="999"
            type="number"
            onChange={this.onChange}
             />

  				    <Button
  				    	type="primary"
  				    	onClick={this.onPay}
  				    >Pagar</Button>
  					</form>
      </Card>




      </div>
    );
  }
}
export default Payment;
