import React, { Component } from 'react';
// import {Redirect} from "react-router-dom";
import {
    // Card,
    // Menu,
    Segment,
    Header,
    Modal,
    Button
} from 'semantic-ui-react'
import ProductForm from './ProductForm'
import CategoryForm from './CategoryForm'

export default class AdminDashboard extends Component {
	constructor(props){
		super(props);
    }
	openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }
    render(){
        return(
            <Segment>
                <Modal trigger={<Button primary onClick={() => {this.openModalHandler()}}>Add Dish</Button>}>
                    <ProductForm/>
                </Modal>
                <Modal trigger={<Button primary onClick={() => {this.openModalHandler()}}>Create Category</Button>}>
                    <CategoryForm/>
                </Modal>
            </Segment>
        )
    }

}