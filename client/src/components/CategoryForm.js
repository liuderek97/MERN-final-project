import React, { Component } from 'react';
import { Form, Input, Button, Message, Icon} from 'semantic-ui-react'
import history from '../history'

export default class CategoryForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      showError: false,
      showMessage:false,
      message:''
    }
  }

  submitForm = async () => {
    await fetch('/category', {
      method: 'POST',
      cache: 'no-cache',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }) 
    .then(res => {
      let showError, showMessage, message;
      res.json()
      console.log(res)
      if(res.status === 400){
        message = 'The category could not be added please try creating a product again'
        showError =true
      }else if(res.status === 200){
        message = 'Congratulation You have successfully added a new category to the menu. Go to the menu page to checkout your new category or clear the form and add more categories'
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

  render() {
    let {showError, showMessage} = this.state;

    const message = () => {
      if(showError){
        return(
          <Message onDismiss={this.handleDismiss} negative><Icon size='large' name='thumbs down'/>{this.state.message}</Message>
        )
      }else if(showMessage){
        return(
          <Message onDismiss={this.handleDismiss}  positive><Icon size='large' name='thumbs up'/>{this.state.message}</Message>
        )
       
      }
    }

    return(
      <Form>
        {message()}
        <Form.Group>
          <Form.Field
          id='form-input-control-name'
          control={Input}
          label='Category Name'
          placeholder='Category Name'
          onChange={(e, {value}) => {
            let form = this.state;
            form.name = value;
            this.setState({form});
          }}
          />
          </Form.Group>
          <Button
            id='form-button-control-create-category'
            content='Create Category'
            onClick={() => this.submitForm()}
          />
      </Form>
    )
  }
}
