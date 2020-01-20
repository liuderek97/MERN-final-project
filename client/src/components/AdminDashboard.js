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
                <Modal 
                dimmer={'inverted'}
                centered={false}
                trigger={<Button primary onClick={() => {this.openModalHandler('inverted')}}>Add Dish</Button>}>
                <Modal.Content>
                    <ProductForm/>
                </Modal.Content>
                </Modal>
                <Modal 
                dimmer={'inverted'}
                centered={false}
                trigger={<Button primary onClick={() => {this.openModalHandler()}}>Create Category</Button>}>
                    <Modal.Content>
                        <CategoryForm/>
                    </Modal.Content>
                </Modal>
            </Segment>
        )
    }

}