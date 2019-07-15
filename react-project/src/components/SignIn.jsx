import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = { 
        username:'',
        password:'',
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        if (this.state.username == '123' && this.state.password == '123'){
            return <Redirect to='/Welcome'/>
        }
    }
    render() { 
        return ( 
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="username" onChange={this.handleChange}/>
                    <input type="text" id="password" onChange={this.handleSubmit}/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
         );
    }
}
 
export default SignIn;