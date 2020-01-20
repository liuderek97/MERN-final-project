import React, { Component } from 'react'
import history from '../history'
import { Form, Input, TextArea, Button, Select, Checkbox, SearchCategory } from 'semantic-ui-react'
import { pathToFileURL } from 'url'
import {Redirect} from 'react-router-dom'

export default class ProductForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        code: 0,
        name_en: '',
        name_th: '',
        price: 0,
        description: '',
        category: '',
        takeaway: false,
      },
      created: false,
      categories: [],
    }
  }

  componentDidMount(){
    fetch('/category/all')
    .then((data) => data.json())
    .then((data) => {
      let categories = data.data
      this.setState({categories:categories})
    })
  }

  submitForm = async () => {
    await fetch('/menu/products', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.form)
    })
    .then(res => res.json(),
      this.setState({created:true})
    )
  }

  render() {

    let {categories, created} = this.state;
    console.log(categories)
    console.log(this.state.form)
    let values = []
    categories.map((category, index) => {
      values[index] = {id: category._id, name: category.name}
    })
 
    let categoryValues = []

    values.map((value,index) => {
      let obj ={}
      obj['key'] = value.id
      obj['value'] = value.id
      obj['text'] = value.name
      categoryValues.push(obj)
    })

    if(created){
      history.push({pathname:'/menu'})
    } 

    return(

    <Form>
      <Form.Group widths='equal'>
        <Form.Field
          id='form-input-control-name'
          control={Input}
          label='Dish Name English'
          placeholder='Dish Name English'
          onChange={(e, {value}) => {
            let form = this.state.form;
            form.name_en = value;
            this.setState({form});
        }}
        />
        <Form.Field
          id='form-input-control-thai-name'
          control={Input}
          label='Dish Name Thai'
          placeholder='Dish Name Thai'
          onChange={(e, {value}) => {
            let form = this.state.form;
            form.name_th = value;
            this.setState({form});
        }}
        />
          <Form.Field
          id='form-input-control-price'
          control={Input}
          label='Price'
          placeholder='Price'
          onChange={(e, {value}) => {
            let form = this.state.form;
            form.price = value;
            this.setState({form});
        }}
        />
        <Form.Field
          id='form-input-control-code'
          control={Input}
          label='Menu Number'
          placeholder='Code'
          onChange={(e, {value}) => {
            let form = this.state.form;
            form.code = value;
            this.setState({form});
        }}
        />
              </Form.Group>
      <Form.Field 
        placeholder='Category'
        label='Select a category' 
        control={Select}
        options={categoryValues}
        onChange={(e,{value}) => {
          let form = this.state.form;
          form.category = value;
          this.setState({form});
      }} 
      />
      <Form.Field
        id='form-textarea-control-description'
        control={TextArea}
        label='Description'
        placeholder='Description'
        onChange={(e,{value}) => {
          let form = this.state.form;
          form.description = value;
          this.setState({form});
      }} 
      />
      <Form.Field>
        <Checkbox 
        label='Available for takeaway?'
        onClick={() => {
          let form = this.state.form
          form.takeaway = !form.takeaway
          this.setState({form})
        }}
         />
      </Form.Field>
      <Form.Field
        id='form-button-control-add-dish'
        control={Button}
        content='Add Dish'
        onClick={() => this.submitForm()}
      />
    </Form>
    )
  }
}
