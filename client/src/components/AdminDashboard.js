import React, { Component } from 'react';
// import {Redirect} from "react-router-dom";
import {
    // Card,
    // Menu,
    Segment,
    Header,
    Modal,
    Button,
    Grid,
    Divider
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
            <Segment style={{marginTop:'30px'}}>
                <Grid columns={2} stackable textAlign='center'>
                <Divider vertical>Or</Divider>
                    <Grid.Row>
                        <Grid.Column>
                            <Modal 
                            dimmer={'inverted'}
                            centered={false}
                            trigger={<Button primary styling={{marginTop:'10px'}} onClick={() => {this.openModalHandler('inverted')}}>Add Dish</Button>}>
                            <Modal.Content>
                                <ProductForm/>
                            </Modal.Content>
                            </Modal>
                        </Grid.Column>
                        <Grid.Column>
                            <Modal 
                            dimmer={'inverted'}
                            centered={false}
                            trigger={<Button primary onClick={() => {this.openModalHandler()}}>Create Category</Button>}>
                                <Modal.Content>
                                    <CategoryForm/>
                                </Modal.Content>
                            </Modal>
                        </Grid.Column>
                    </Grid.Row>
                    </Grid>
            </Segment>
        )
    }

}