import React, { Component } from 'react';
import { Form, Input, TextArea, Button, Select, Checkbox, SearchCategory } from 'semantic-ui-react'

export default class CategoryForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
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
    this.setState({created:true}),
    console.log(this.state)
    ) 
  }

  render() {
    return(
      <Form>
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
          <Form.Field
            id='form-button-control-create-category'
            control={Button}
            content='Create Category'
            onClick={() => this.submitForm()}
          />
        </Form.Group>
      </Form>
    )
  }
}
