import React, {Component} from 'react';
import '../components/Login.css'


class Header extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <button className="login-button" onClick={ () => this.props.loginFn()}>Login</button>
        </div>

         );
    }
}
 
export default Header;