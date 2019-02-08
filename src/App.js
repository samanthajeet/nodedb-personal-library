import React, { Component } from 'react';
import Library from './components/Library'
import Header from './components/Header'




class App extends Component {
  constructor(){
    super();

    this.state = {
      authenticated: false
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
        <Header loginFn={this.login}/>
        {this.state.authenticated && <Library />}
      </div>
    );
  }
}

export default App;
 