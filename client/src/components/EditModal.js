import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {
    // Card,
    // Menu,
    Segment,
    Header,
    Modal,
    Button,
    Grid,
    Form,
    Message,
    Icon,
    Input,
    Select,
    TextArea,
    Checkbox
    
} from 'semantic-ui-react'
import history from '../history'
import { promised } from 'q';
import ProductForm from './ProductForm';

export default class EditModal extends Component {
	constructor(props){
    super(props);
    this.state = {
      form:{
        id:props.id,
        name_en:props.name_en,
        name_th:props.name_en,
        code:props.code,
        description:props.description,
        price: props.price,
        category: props.category
      },
      open: false,
      showError: false,
      showMessage:false,
      message:'',
      categories: []
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

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
      }
    
    close = () => this.setState({ open: false })

    editItem = () => {
      fetch(`menu/products/id/${this.state.form.id}`,{
          method:'PATCH',
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

        const { open, closeOnEscape, closeOnDimmerClick, id, categories, name, showError, showMessage} = this.state
        
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
        console.log(this.state.form)
        return(
            <div>
            <Button onClick={this.closeConfigShow(true, true)}>
                Edit Dish
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
                <Header>Editing: {name}</Header>
            </Modal.Header>
            <Modal.Content>
            <Form>
                <Form.Group widths='equal'>
                  <Form.Field
                    id='form-input-control-name'
                    control={Input}
                    label='Dish Name English'
                    placeholder='Dish Name English'
                    value={this.state.form.name_en}
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
                    value={this.state.form.name_th}
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
                    value={this.state.form.price}
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
                    value={this.state.form.code}
                    onChange={(e, {value}) => {
                      let form = this.state.form;
                      form.code = value;
                      this.setState({form});
                  }}
                  />
                        </Form.Group>
                <Form.Field 
                  label='Select a category' 
                  control={Select}
                  options={categoryValues}
                  placeholder={this.state.form.category}
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
                  value={this.state.form.description}
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
                <Grid 
                  centered
                  style={{marginTop:'30px', marginBottom:'30px'}}
                >

                  <Form.Button
                    id='form-button-control-add-dish'
                    content='Edit Dish'
                    onClick={() => this.editItem()}
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
            </Modal.Content>
          </Modal>
          </div>
                      
        )
    }

}