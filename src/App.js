import React, { Component } from 'react';
import Library from './components/Library'
import Login from './components/Login'
import './App.css'



class App extends Component {
  constructor(){
    super();

    this.state = {
      authenticated: false,
      user: ''
    }

    this.login = this.login.bind(this)

  }


  login(){
    this.setState({
      authenticated: true
    })
  }

  handleName(value) {
    this.setState({
      user: value
    })
  }

  render() {
    return (
      <div className="landing-login">
        <input onChange={ (e) => this.handleName(e.target.value) }/>
        <Login loginFn={this.login}/>
        {this.state.authenticated && <Library user={this.state.user} />}
      </div>
    );
  }
}

export default App;
 