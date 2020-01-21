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
    
                <div id="home-hero">

                    <div id='hero-image'></div>

                    <h1>Saran Thai</h1>
                    <div>
                        <Button primary size='huge' className="inverted"
                            onClick={() => history.push({pathname:'/menu',
                                state:{ from: this.props.location.pathname }
                            })}>View Menu
                        </Button> 

                    </div>
                        
                </div>
                    
                <div style={{width: "100%", display: "flex", flexWrap: "wrap"}}>
                    <div className="homePanel" id="cafe">
                        Cafe coming soon
                    </div>

                    <div className="homePanel" id="booking">
                        Bookings available <br />
                        Contact us to book now
                        <Button primary size='huge' className="inverted"
                            onClick={() => history.push({pathname:'/about',
                                state:{ from: this.props.location.pathname }
                            })}>Contact Us
                        </Button> 
                    </div>
                </div>


            </Container>
        )
    }  
}