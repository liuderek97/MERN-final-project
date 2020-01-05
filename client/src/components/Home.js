import React from 'react';
import { Button, Container } from 'semantic-ui-react';

export default function Home()
{
    return (
        <Container style={{ width: '100%' }}>

            <div id='hero-image'>

                <div id='content'>
                    <h1>Saran Thai Wyoming - Home</h1>
                </div>

                <Button primary size='huge'>View Menu</Button>

            </div>

            <div id='about-us'>
                <h1>About Us</h1>
            </div>

        </Container>
    )
}