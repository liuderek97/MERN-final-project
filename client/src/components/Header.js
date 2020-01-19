import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import history from '../history';

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
            activeItem: 'home'
        }
    }

    componentWillMount()
    {
        let path = window.location.pathname.split('/')[1]
        this.setState({ activeItem: path })
    }

    handleClick = (e, { name }) =>
    {
        this.setState({ activeItem: name })
        history.push({ pathname: name });
    }
    
    render() 
    {
        const { activeItem } = this.state

        return (
            <Menu secondary >
                <img src="./assets/images/Saran_Thai_Logo.svg" alt="logo"/>
                {menuItems.map(menuItem => 
                    <Menu.Item
                        name={menuItem}
                        key={menuItem}
                        active={activeItem === menuItem}
                        onClick={this.handleClick}
                    />
                )}
            </Menu>
        );    
    }
}