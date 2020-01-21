import React, { Component } from 'react';
import { 
  Form, 
  Input, 
  Button,
  Message 
} from 'semantic-ui-react'

export default class CategoryForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      created: false,
      name: '',
      visible: false
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
    .then(res => res.json(),
    this.setState({
      created:true,
      visible: true 
    
    }),
    setTimeout(() => {
      this.setState({ visible: true })
    }, 2000),
    console.log(this.state)
    ) 
  }

  // handleDismiss = () => {
    
  // }

  render() {
    let created = this.state.created;
    let successMessage = () => {
      if(created){
        return(
          <Message
            attached
            // onDismiss={handleDismiss}
            header='Congratulations'
            content='The category has been created'
          />
        )
      }
    }
    
    return(
      <Form>
        <Form.Group>
          {successMessage()}
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
            control={Button}
            content='Create Category'
            onClick={() => this.submitForm()}
          />
      </Form>
    )
  }
}
