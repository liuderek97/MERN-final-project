import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {
    Header,
    Modal,
    Button,
    Grid,
    Message,
    Icon
    
} from 'semantic-ui-react'

export default class DeleteModal extends Component {
	constructor(props){
    super(props);
    this.state = {
      id:props.id,
      name: props.name,
      open: false,
      showError: false,
      showMessage:false,
      message:''
    }
    }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
      }
    
    close = () => this.setState({ open: false })

    deleteItem = () => {
      fetch(`menu/products/id/${this.state.id}`,{
          method:'DELETE',
      })
      .then(res => {
        let showError, showMessage, message;
        res.json()
        console.log(res)
        if(res.status === 400){
          message = 'The product could not be deleted please try again'
          showError =true
        }else if(res.status === 200){
          message = 'Congratulation the product has been deleted successfully'
          showMessage = true;
        }
        this.setState({
          showError,
          showMessage,
          message
        })
      })

    }
    
    handleDismiss = () => {
      this.setState({ 
        showMessage: false,
        showError: false
       })
    }
  
    render(){

        const { open, closeOnEscape, closeOnDimmerClick, name, showError, showMessage} = this.state
        
        const message = () => {
          if(showError){
            return(
              <Message onDismiss={this.handleDismiss} negative><Icon size='large' name='thumbs down'/>
                {this.state.message}
              </Message>
            )
          }else if(showMessage){
            return(
              <Message onDismiss={this.handleDismiss}  positive><Icon size='large' name='thumbs up'/>
                {this.state.message}
                <br/>
                <Link to='/menu'>Click here to be redirected to the menu</Link>
              </Message>
            )
           
          }
        }

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
            {message()}
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
                        onClick={() => {this.deleteItem()}}
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