import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import StoreMenu from './StoreMenu';
import Admin from './Admin';
import Login from './Login';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        Login.test === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
    )} />
)


export default function App() 
{
    return (
        <Router>
            <div className='App'>
                <Header />
                <Switch>
                    <Route path='/home' component={ Home } />
                    <Route path='/menu' component={ StoreMenu } />
                    <Route path='/login' component={ Login } />
                    <PrivateRoute path='/admin' component={ Admin } />
                    <Redirect from='*' to='/home' />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}


