import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
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
    
                <div id='hero-image'></div>
    
                <div className='wrapper'>

                    <h1>Saran Thai</h1>
                    <Button primary size='huge'
                        onClick={() => history.push({pathname:'/menu',
                            state:{ from: this.props.location.pathname }
                        })}>Menu
                    </Button> 

                    <Button primary size='huge'
                        onClick={() => history.push({pathname:'/about',
                            state:{ from: this.props.location.pathname }
                        })}>About
                    </Button> 
                    
                </div>
            </Container>
        )
    }  
}