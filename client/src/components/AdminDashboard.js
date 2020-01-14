import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {
    Card,
    Menu,
    Segment,
    Header
} from 'semantic-ui-react'

export default class AdminDashboard extends Component {
	constructor(props){
		super(props);
    }

    render(){
        return(
            <Segment>
                <Header>HELLO</Header>
            </Segment>
        )
    }

}