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
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../Store';
import {Provider} from 'react-redux'


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        store.getState().user.hasOwnProperty('_id')
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
    )} />
)

export default function App() 
{
    return (
        <Provider store={store}>
            <PersistGate
                persistor={persistor}>
                <Router history={history}>
                    <div className='App'>
                        <Header />
                        <Switch>
                            <Route path='/home' component={ Home } />
                            <Route path='/menu' component={ StoreMenu } />
                            <Route path='/about' component={ About } />
                            <Route path='/login' component={ Login } />
                            <Route path='/admin-dashboard' component={AdminDashboard} />
                            <PrivateRoute path='/admin' component={ Admin } />
                            <Redirect from='*' to='/home' />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </PersistGate>
        </Provider>
    );
}


