import React, { Component } from 'react'
import { Form, Input, TextArea, Button, Select, Checkbox } from 'semantic-ui-react'

export default class ProductForm extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
        code: 0,
        name_en: '',
        name_th: '',
        price: 0,
        takeaway: true,
        description: '',
        categories: []
    }
  }

  componentDidMount() {
    fetch('/category/all')
    .then(data => data.json())
    .then((data) => {
      let categories = data
      this.setState({categories:categories})
      console.log(this.state.categories)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return(
    <Form>
      <Form.Group widths='equal'>
        <Form.Field
          id='form-input-control-name'
          control={Input}
          label='Dish Name English'
          placeholder='Dish Name English'
        />
        <Form.Field
          id='form-input-control-thai-name'
          control={Input}
          label='Dish Name Thai'
          placeholder='Dish Name Thai'
        />
        <Form.Field
          control={Select}
          options={"category"}
          label={{ children: 'Category', htmlFor: 'form-select-control-category' }}
          placeholder='Category'
          search
          searchInput={{ id: 'form-select-control-category' }}
        />
      </Form.Group>
      <Form.Field
        id='form-textarea-control-description'
        control={TextArea}
        label='Description'
        placeholder='Description'
      />
      <Form.Field>
        <Checkbox label='Available for takeaway?' />
      </Form.Field>
      <Form.Field
        id='form-button-control-add-dish'
        control={Button}
        content='Add Dish'
      />
    </Form>
    )
  }
}
