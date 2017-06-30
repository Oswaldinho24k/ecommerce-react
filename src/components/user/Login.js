import React, {Component} from 'react';
import {Card, Button, message} from 'antd';
import firebase from '../../firebase';



class Login extends Component{
  componentWillMount(){

  }



logIn=()=>{
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
      firebase.database().ref('users').push({
        name:result.user.displayName,
        email:result.user.email,
        photoUrl:result.user.photoURL
      })
      message.success('Bienvenido '+result.user.displayName)
      
  })
}

  render(){
    return(
      <div>
          <Card
            style={{margin:'10% auto', width:'50%'}}
            title="Inicia Sesión para comprar chelas ;)"
          >
            <Button type="primary"
              onClick={this.logIn}>Inicia con Google bro</Button>

          </Card>
      </div>
    );
  }
}
export default Login;
