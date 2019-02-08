import React, { Component } from 'react';

class Login extends Component {
    render() { 
        return ( 
            <button onClick={ () => this.props.loginFn()}>Login</button>
         );
    }
}
 
export default Login;