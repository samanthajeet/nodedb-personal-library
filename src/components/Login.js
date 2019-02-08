import React, {Component} from 'react';


class Header extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <button onClick={ () => this.props.loginFn()}>Login</button>
        </div>

         );
    }
}
 
export default Header;