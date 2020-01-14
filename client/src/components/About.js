import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

export default class About extends Component
{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return (
            <Container style={{ width: '100%' }}>
    
                <div id='hero-image'>
    
                    <div id='content'>
                        <h1>Saran Thai Wyoming - About</h1>
                    </div>
    
                </div>
    
                <div id='about-us'>
                    <h1>About Us</h1>
                </div>
    
            </Container>
        )
    }  
}