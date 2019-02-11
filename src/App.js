import React, { Component } from 'react';
import Library from './components/Library'
import Login from './components/Login'
import './App.css'



class App extends Component {
  constructor(){
    super();

    this.state = {
      authenticated: false,
      isHidden: false,
      user: ''
    }

    this.login = this.login.bind(this);
    this.handleName = this.handleName.bind(this)

  }


  login(){
    this.setState({
      authenticated: true,
      isHidden: !this.state.isHidden
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

        <Login loginFn={this.login} isHidden={this.state.isHidden} handleName={this.handleName}/>
        {this.state.authenticated &&  this.state.isHidden && <Library user={this.state.user} /> }
      </div>
    );
  }
}

export default App;
 