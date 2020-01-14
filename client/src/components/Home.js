import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import { Button, Container } from 'semantic-ui-react';
import { tsConstructorType } from '@babel/types';
import history from '../history'
export default class Home extends Component
{
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }

    render(){
        return (
            <Container style={{ width: '100%' }}>
    
                <div id='hero-image'>
    
                    <div id='content'>
                        <h1>Saran Thai Wyoming - Home</h1>
                    </div>
    
                    <Button 
                        primary 
                        size='huge'
                        onClick={() => history.push({pathname:'/menu',
                            state:{
                                from: this.props.location.pathname
                            }
                        })}
                    >
                        View Menu
                    </Button>
    
                </div>
    
                <div id='about-us'>
                    <h1>About Us</h1>
                </div>
    
            </Container>
        )
    }  
}