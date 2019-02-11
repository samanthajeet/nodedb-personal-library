import React, {Component} from 'react';
import './Fonts.css';
import '../components/Login.css'



class Header extends Component {
    state = { 

     }
    render() { 
        return (
        <div className="login-area">
            <div >
                {this.props.isHidden ? (
                    <p></p>
                ) : (
                    <input className="login-input" onChange={ (e) => this.props.handleName(e.target.value) }/>
                ) }  
            </div>
            <div>
                {this.props.isHidden ? (
                    <button className="login-button" onClick={ () => this.props.loginFn()}>LOG OUT</button>
                ) : (
                    <button className="login-button" onClick={ () => this.props.loginFn()}>LOGIN</button>
                ) }
            </div>

        </div>

         );
    }
}
 
export default Header;