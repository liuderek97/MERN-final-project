import React, {Component} from 'react';
import 
{
    Button,
    Menu,
    Grid,
    Image,
    Container,
    Header,
    Icon
} from 'semantic-ui-react'

export default class Home extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {

        }
    }

    

    render()
    {
       const navBar = (
           <Container style={{width:'100%'}}>
                <Menu 
                    borderless
                    size='huge'
                    style={{margin:'0px'}}
                >
                    <Menu.Item header style={{fontFamily:'Sinhala Sangam MN', fontWeight:'Bold'}}>Saran Thai</Menu.Item>
                </Menu>

                <div id='hero-image'>
                    <div id='content'>
                        <h1>Saran Thai Wyoming</h1>
                    </div>
                    <Button primary size='huge'>
                        View Menu
                    </Button>
                </div>

                <div id='about-us'>
                    <h1>About Us</h1>
                </div>
            </Container>

        )

        const carousel = (
            <Image></Image>
        )
        return(
            navBar
        )
    }
}