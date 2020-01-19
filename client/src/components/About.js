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
                <div className='wrapper'>
                    
                    <div id='about-us'>
                        <h1>About Us</h1>
                    </div>
    
                </div>
            </Container>
        )
    }  
}