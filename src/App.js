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
      user: '',
      greetings: ['Aloha', 'Hello', 'Bonjour', 'Hola', 'Cio', 'Guten tag','Shalom','Konnichiwa'],
      randomGreeting: ''
      
    }

    this.login = this.login.bind(this);
    this.handleName = this.handleName.bind(this)
    this.randomGreeting = this.randomGreeting.bind(this)

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

  randomGreeting(){
    let randomGreeting = this.state.greetings[Math.floor(Math.random()*this.state.greetings.length)];
    this.setState({
        randomGreeting: randomGreeting
    })
}

  render() {
    return (
      <div className="landing-login">

        <Login loginFn={this.login} isHidden={this.state.isHidden} handleName={this.handleName} randomGreeting={this.randomGreeting}/>
        {this.state.authenticated &&  this.state.isHidden && <Library user={this.state.user} randomGreeting={this.state.randomGreeting} /> }
      </div>
    );
  }
}

export default App;
 