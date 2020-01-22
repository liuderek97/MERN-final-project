import React, { Component } from 'react'
import history from '../history'
import { Form, Input, TextArea, Select, Checkbox,Grid, Message,Icon } from 'semantic-ui-react'


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
        flavour:[]
      },
      categories: [],
      showError: false,
      showMessage:false,
      message:''
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
    .then(res => {
      let showError, showMessage, message;
      res.json()
      console.log(res)
      if(res.status === 400){
        message = 'The product could not be added please try creating a product again'
        showError =true
      }else if(res.status === 200){
        message = 'Congratulation You have successfully added a dish to the menu. Go to the menu page to checkout your new dishes or clear the form and add more dishes'
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
    

    let {categories, showError, showMessage} = this.state;
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
      <Grid centered>
      <Form.Button
        id='form-button-control-add-dish'
        content='Add Dish'
        onClick={() => this.submitForm()}
      />
      <Form.Button
        id='form-button-control-add-dish'
        content='Go to Menu'
        onClick={() => {
          history.push('/menu')
        }}
        />
        </Grid>
    </Form>
    )
  }
}
