import React from 'react';
import './Fonts.css';
import './Greeting.css'

function Greeting(props) {
    return <div className="greeting"><h1>{props.randomGreeting}</h1><h1 className="name">{props.name}! </h1><h1> Here is your library</h1></div>
}

export default Greeting;