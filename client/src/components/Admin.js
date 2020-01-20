import React, { Component } from 'react';
import { Container,Button } from 'semantic-ui-react';
import { logout } from './utils/Auth';

export default class Admin extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {

        }
    }

    render()
    {
        return (
           <Container style={{ width: '100%' }}>
                <Button onClick={logout}>logout</Button>
                <h1>Products</h1>

                <table>
                    <thead>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </thead>

                    <tbody>
                        <td></td>
                        <td></td>
                    </tbody>

                </table>

            </Container>
        )
    }
}