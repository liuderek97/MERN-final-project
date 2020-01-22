import React, { Component } from 'react';
import history from '../history'
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
import {setToken, storeUserDetails } from './auth/actions';
import {store} from '../Store'

export default class Login extends Component 
{
    constructor(props)
    {
        super(props)
        
        this.state = {
            isAuthenticated: false,
            form: {
                username: "",
                password: ""
            },
            showPassword: false,
            isLoading: false,
        }
    }

    componentDidMount() 
    {
        this.checkUser();
    }

    checkUser = async () =>
    {
        let data = await fetch('auth/user').then(res => res.json())
        if (data.success)
        {
            this.setState({ isAuthenticated: true })
            store.dispatch(setToken(data.user._id));
            store.dispatch(storeUserDetails(data.user));
            history.push('/admin');
            this.forceUpdate()
        }
    }

    logout = async () => 
    {
        await fetch('auth/logout')
            .then(() => { this.setState({ isAuthenticated: false }); this.checkUser(); })
            .catch(err => console.log(err))
            this.forceUpdate()
    }

    login = async () => {
        
        let data = await fetch('auth/login', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.form)
        })
        .then(res => res.json())
        this.setState({ isAuthenticated: data.success })
        this.checkUser();
    }

    render() 
    {   
        const {showPassword} = this.state;
        const toggleShowPassword = () => {
        this.setState({
            showPassword: !showPassword
        })
        };
        const eyeToggle = <Icon link name={showPassword ? 'eye' : 'eye slash'} onClick={toggleShowPassword}/>;
      
        return (
            <Container>
                <div className='wrapper'>
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
                                    type="text"
                                    name="username"
                                    label="Username"
                                    autoComplete="username"
                                    placeholder=""
                                    onChange={(e, {value}) => {
                                        let form = this.state.form;
                                        form.username = value;
                                        this.setState({form});
                                    }}
                                        />
                                <Form.Input
                                    autoFocus
                                    fluid
                                    name="password"
                                    placeholder="Password"
                                    label="Password"
                                    autoComplete="current-password"
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
                                    style={{ backgroundColor: '#40c5cd', color: '#ffffff', marginTop: '20px', marginBottom: '20px' }}
                                    onClick={() => this.login()}
                                >
                                    Sign in
                                </Button>
                            </Form>
                        </Segment>
                    </Grid>
                </div>
            </Container>
        )
    }
}