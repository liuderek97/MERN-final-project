import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';

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

                <Grid stackable columns="equal" style={{ maxWidth: "1200px", marginTop: "40px", width: "100%" }}>
                    <Grid.Column>
                        <div id='about-us' style={{ padding: "25px" }}>
                            <Header as='h1'>ABOUT US</Header>
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
                    </Grid.Column>

                    <Grid.Column>
                        <div dangerouslySetInnerHTML={{ __html: '<iframe id="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5652905735847!2d151.34712935113797!3d-33.40850370265316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b72cac1d8f3d2c5%3A0xb9c5c4ea8976dde5!2sSaran%20Thai%20Restaurant!5e0!3m2!1sen!2sau!4v1579492404518!5m2!1sen!2sau" title="Google Map location" frameborder="0" allowfullscreen=""></iframe>' }}></div>
                    </Grid.Column>
                    
                </Grid>


                <Grid stackable columns="equal" style={{ maxWidth: "1200px", width: "100%" }}>
                    <Grid.Column>
                        <div className="homePanel" id="about-1" style={{width: "100%"}}></div>
                    </Grid.Column>

                    <Grid.Column>
                        <div id='countat-us' style={{ padding: "25px", flex: "1" }}>
                                <Header as='h1'>CONTACT US</Header>
                                <p>
                                    <b>Phone -</b> (02) 4324 9999 <br/>
                                    <b>Email -</b> saranthai@hotmail.com <br/>
                                    <b>Location -</b> Shop 14/482 Pacific Hwy., Wyoming Gosford, New South Wales
                                </p>
                        </div>
                    </Grid.Column>
                </Grid>
                

                <Grid stackable columns="equal" style={{ maxWidth: "1200px", width: "100%" }}>
                    <Grid.Column>
                        <div id='opening-hours' style={{ padding: "25px", flex: "1" }}>
                            <Header as='h1'>OPENING HOURS</Header>
                            <p>
                                We are open everday for Lunch between 11:30am and 3:30pm.
                                <br />
                                We are open on Sunday to Thursday between 5pm and 9:30pm for Dinner.
                                <br />
                                On Friday and Saturday we are open from 5pm till 10:30pm.
                            </p>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                        <div className="homePanel" id="about-2" style={{width: "100%"}}></div>
                    </Grid.Column>
                    
                </Grid>

            </Container>
        )
    }  
}