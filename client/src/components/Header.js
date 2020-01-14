import React, { Component } from 'react';
import {Menu} from 'semantic-ui-react';
import history from '../history'

const menuItems = [
    'home',
    'menu',
    'about',
    'admin'
 ];
 
export default class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            active: 'home'
        }
    }
    
    handleClick(menuItem) 
    { 
        this.setState({ active: menuItem });
        history.push({ pathname: menuItem });
    }

    render() 
    { 
        const activeStyle = { borderBottom: 'solid 3px #5E27A7' };

        return (
            <Menu secondary>
                <img src="./assets/images/Saran_Thai_Logo.svg" alt="logo"/>
                {menuItems.map(menuItem => 
                    <Menu.Item
                        name={menuItem}
                        key={menuItem}
                        style={this.state.active === menuItem ? activeStyle : {}} 
                        onClick={this.handleClick.bind(this, menuItem)}
                    />
                )}
            </Menu>
        );    
    }
}