import React, { Component } from 'react';
import 
{
    Container,
    Segment,
    Form,
    Button,
    Grid,
    Header,
    Divider,
    Icon
} from 'semantic-ui-react';

export default class Login extends Component 
{
    constructor(props)
    {
        super(props)
        
        this.state = {
            isAuthenticated: true,
            email:'',
            password:'',
            form: {
                email: "",
                password: ""
              },
            showPassword: false,
            isLoading: false,
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
        const {showPassword, form, error} = this.state;
        console.log(form)
        const toggleShowPassword = () => {
        this.setState({
            showPassword: !showPassword
        })
        };
        const eyeToggle = <Icon link name={showPassword ? 'eye' : 'eye slash'} onClick={toggleShowPassword}/>;
      
        return (
            <Container>
                <Grid centered>
                    <Segment 
                        style={{width:'300px', height:'400px', marginTop:'20px', borderRadius:'20px 20px'}}
                    >
                        
                        <Header 
                            as='h1' 
                            style={{color:'#40c5cd',marginTop:'20px', marginBottom:'25rpx'}}
                        >
                            Saran Thai
                        </Header>
                        <Divider/>
                        <p>Please enter admin sign in details</p>
                        
                        <Form>
                            <Form.Input
                                autoFocus
                                type="Email"
                                name="email"
                                label="Email"
                                placeholder=""
                                onChange={(e, {value}) => {
                                    let form = this.state.form;
                                    form.email = value;
                                    this.setState({form});
                                }}
                                    />
                            <Form.Input
                                autoFocus
                                fluid
                                name="password"
                                placeholder="Password"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                icon={eyeToggle}
                                onChange={(e, {value}) => {
                                    let form = this.state.form;
                                    form.password = value;
                                    this.setState({form});
                                }}
                                />
                            <Button 
                                type='submit'
                                style={{backgroundColor:'#40c5cd', color:'#ffffff', marginTop:'20px', marginBottom:'20px'}}                            
                            >
                                Sign in
                            </Button>
                        </Form>
                    </Segment>
                </Grid>
            </Container>
        )
    }
}