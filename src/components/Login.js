import React, {Component} from 'react';
import './Fonts.css';
import '../components/Login.css'



class Header extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <button className="login-button" onClick={ () => this.props.loginFn()}>login</button>
        </div>

         );
    }
}
 
export default Header;