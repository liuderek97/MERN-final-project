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
            <Container style={{ width: '100%', flexDirection: "row" }}>

                
                <div id='about-us' style={{ padding: "25px" }}>
                    <h1>About Us</h1>
                        <p>
                            Saran Thai Restaurant is a 120 seats fine dining Restaurant situated in 
                            Wyoming, in the heart of Central Coast. The restaurant offers an A-La-Carte 
                            and Buffet style menu as well as extensive Banqueting facilities for up to 150 people.
                            <br/>
                            At our restaurant, you can enjoy a comfortable relaxing atmosphere and select 
                            your favorite authentic Thai dish from our exciting and varied menu which has 
                            already established itself as a popular venue for locals and tourists alike. 
                        </p>
                </div>

                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5652905735847!2d151.34712935113797!3d-33.40850370265316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b72cac1d8f3d2c5%3A0xb9c5c4ea8976dde5!2sSaran%20Thai%20Restaurant!5e0!3m2!1sen!2sau!4v1579492404518!5m2!1sen!2sau" width="800" height="600" frameborder="0" style={{ border: "0" }} allowfullscreen=""></iframe>
                </div>

                
            </Container>
        )
    }  
}