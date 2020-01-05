import React, { Component } from 'react';

export default class Login extends Component 
{
    constructor(props)
    {
        super(props)
        
        this.state = {
            isAuthenticated: true
        }
    }

    authenticate = (cb) => 
    {
        this.setState({ isAuthenticated: true })
        console.log(this.state.isAuthenticated)
        setTimeout(cb, 100)
    }

    signout = (cb) => 
    {
        this.setState(() => ({ isAuthenticated: false }))
        setTimeout(cb, 100)
    }

    render() 
    {
        return (
            <div>
                <p>You must log in to view the page</p>
                <button onClick={ this.login }>Log in</button>
            </div>
        )
    }
}