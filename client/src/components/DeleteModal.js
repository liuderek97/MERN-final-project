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
    Divider,
    
} from 'semantic-ui-react'
import { promised } from 'q';

export default class AdminDashboard extends Component {
	constructor(props){
    super(props);
    this.state = {
      id:props.id,
      name: props.name,
      open: false
    }
    }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
      }
    
    close = () => this.setState({ open: false })

    deleteItem = () => {
        console.log('hi')
            fetch(`/menu/products/id/${this.state.id}`,{
                method:'DELETE',
            })
    }
    
	
  
    render(){
        const {id, name} = this.state
        const { open, closeOnEscape, closeOnDimmerClick } = this.state
        console.log(name)
        return(
            <div>
            <Button onClick={this.closeConfigShow(true, true)}>
                Delete Dish
            </Button>

  
          <Modal
            style={{textAlign:'center'}}
            open={open}
            closeOnEscape={closeOnEscape}
            closeOnDimmerClick={closeOnDimmerClick}
            onClose={this.close}
          >
            <Modal.Header>
                <Header>Do you want to delete: {name}</Header>
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to delete the dish</p>
            </Modal.Content>
            <Modal.Actions>
                <Grid centered>
                    <Button
                        style={{marginTop:'20px', marginBottom:'20px'}}
                        onClick={this.deleteItem()}
                        negative
                        content='Delete dish'
                    />
                    <Button 
                        style={{marginTop:'20px', marginBottom:'20px'}}
                        onClick={this.close} positive
                    >
                        Cancel
                    </Button>
                </Grid>            
            </Modal.Actions>
          </Modal>
          </div>
                      
        )
    }

}
