import React from 'react';
import {Menu} from 'semantic-ui-react';
import history from '../history'

export default function Header() 
{
    return (
        <Menu secondary>
            <Menu.Item
                name='Home'
                onClick={() => history.push({pathname:'/home'})}
            />
            <Menu.Item
                name='Menu'
                onClick={() => history.push({pathname:'/menu'})}
            />
            <Menu.Item
                name='Admin'
                onClick={() => history.push({pathname: '/admin'})}
            />
        </Menu>
    );
}
