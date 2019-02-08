import React, { Component } from 'react';
import Library from './components/Library'
import Login from './components/Login'
import Greeting from './components/Greeting'




class App extends Component {
  constructor(){
    super();

    this.state = {
      authenticated: false,
      user: 'Sam'
    }

    this.login = this.login.bind(this)

  }


  login(){
    this.setState({
      authenticated: true
    })
  }

  render() {
    return (
      <div >
        <Greeting name={this.state.user} />
        <Login loginFn={this.login}/>
        {this.state.authenticated && <Library />}
      </div>
    );
  }
}

export default App;
 