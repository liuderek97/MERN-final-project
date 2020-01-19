import React from 'react';
import { Router, Route, Redirect, Switch } from "react-router-dom";
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import StoreMenu from './StoreMenu';
import Admin from './Admin';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import history from '../history'


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        Login.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
    )} />
)


export default function App() 
{
    return (
        <Router history={history}>
            <div className='App'>
                <Header />
                <Switch>
                    <Route path='/home' component={ Home } />
                    <Route path='/menu' component={ StoreMenu } />
                    <Route path='/about' component={ About } />
                    <Route path='/login' component={ Login } />
                    <Route path='/admin-dashboard' component={AdminDashboard} />
                    <Route path='/admin' component={ Admin } />
                    <Redirect from='*' to='/home' />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}


