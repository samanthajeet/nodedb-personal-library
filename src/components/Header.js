import React, {Component} from 'react';
import Login from './Login'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <Login loginFn={this.props.loginFn}/>

         );
    }
}
 
export default Header;