import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Welcome extends Component {
    state = {  }
    handleClick=(e)=>{
        return <Redirect to="/SignIn" />
    }
    render() { 
        return ( 
            <div className="container">
                <h1>Welcome</h1>
                <button onclick={this.handleClick}>SignOut</button>
            </div>
    );
    }
}
 
export default Welcome;
