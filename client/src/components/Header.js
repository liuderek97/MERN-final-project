import React, { Component } from 'react';
import {Menu, Icon} from 'semantic-ui-react';
import history from '../history'
import {store} from '../Store'
import {NavLink} from "react-router-dom";
import _ from 'lodash';
import { connect } from "react-redux"; 

class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            refresh: false
        }
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    makeMenuItems = () => {
        const {user} = store.getState()
        let menuItems = [{text:'Home', to:'/home'}, {text:'Menu', to:'/menu'}, {text:'About', to:'/about'}]

        if(!this.isEmpty(user)){
            menuItems = [...menuItems, { text: 'Admin', to: '/admin' } ];  
        }

        const uniqueMenuItems = _.uniqBy([...menuItems, ...menuItems], item => item.to);

        return uniqueMenuItems.map(({to, icon, text}) => (
            <Menu.Item as={NavLink} to={to} key={to} selected={history.location.pathname === to}>
            {icon && <Icon name={icon}/>}
            {text}
            </Menu.Item>
        ))
    }

    componentDidMount()
    {
        let path = window.location.pathname.split('/')[1]
        this.setState({ activeItem: path })
    }

    render() 
    {
        return (
            <Menu secondary >
                <img src="./assets/images/Saran_Thai_Logo.svg" alt="logo"/>
                {this.makeMenuItems()}
            </Menu>
        );    
    }
}
export default connect(({user}) => ({user}))(Header);
