import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

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