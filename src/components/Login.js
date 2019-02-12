import React, {Component} from 'react';
import './Fonts.css';
import '../components/Login.css'



class Header extends Component {
    state = { 

     }

    onClick(){
        this.props.loginFn();
        this.props.randomGreeting();
    }

    render() { 
        return (
        <div className="login-area">
            <div >
                {this.props.isHidden ? (
                    <p></p>
                ) : (
                    <div className="login-quote">
                    <h2>“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</h2>
                    <h3>- Dr. Seuss -</h3>
                    </div>
                ) }  
            </div>





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
                    <button className="login-button" onClick={ () => this.onClick()}>LOGIN</button>
                ) }
            </div>

        </div>

         );
    }
}
 
export default Header;