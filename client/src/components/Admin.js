import React, { Component } from 'react';
import { 
    Container,
    Button,
    Grid,
    Table,
    Header,
    Divider,
    Menu
} from 'semantic-ui-react';
import { logout } from './utils/Auth';
import AdminDashboard from '../components/AdminDashboard'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'
import {store} from '../Store'

export default class Admin extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            categories:[],
			products:[],
        }
    }

    componentDidMount() {
        fetch('/category/all')
        .then(data => data.json())
        .then((data) => {
        	let categories = data.data
			this.setState({categories:categories})
        })
        .catch(err => { console.log(err) })

        fetch('/menu/products/all')
        .then(data => data.json())
        .then((data) => {
            let products = data.data
            this.setState({products:products})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render()
    {
        const {categories, products} = this.state
        let {user} = store.getState()
            
        let adminButton = () => {
            if(!this.isEmpty(user)){
                return(
                   <AdminDashboard/>
                )
            }
        }
        return (
           <Container style={{ width: '100%' }}>
                <Button
                    onClick={logout}
                    style={{marginTop:'50px'}}
                >
                    logout
                 </Button>
                <AdminDashboard/>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Menu 
                                vertical 
                                text
                                style={{marginLeft:'30px', marginTop:'15px' ,marginRight:'350px', marginBottom:'50px'}}
                                >
                                <Menu.Item><Header as='h2'>Categories</Header></Menu.Item>
                                <Divider />
                                {categories.map((category, index) =>
                                {
                                    return(
                                        <Menu.Item selectable="true" key={index}>{category.name}</Menu.Item>
                                    )
                                })}
                            </Menu>                        
                        </Grid.Column>
                        <Grid.Column style={{marginLeft:'10px'}} width={12}>
                            <Table basic='very' style={{ marginTop: '32px' }}>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell textAlign='center'>Name</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center'>Category Name</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center'>Price</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                            </Table>
                            <Divider hidden/>
                                {
                                    products.map((product,index) => {
                                        if(product.flavour){
                                            console.log(product)
                                            return(
                                                <div style={{marginBottom:'30px'}} key={product._id}>   
                                                    <div style={{marginBottom:'30px'}}>
                                                        <span style={{display:'flex', width:'100%'}}>
                                                            <h1 style={{marginRight:'68%', marginLeft:'5%'}}>{product.name_en}</h1>
                                                            {product.flavour.map((flavour, index) =>
                                                                    <h1 style={{marginTop:'0px'}} key={index}>${flavour.price}</h1>,
                                                            )}
                                                        </span>
                                                        <p style={{textAlign:'initial', marginLeft:'5%'}}>{product.description}</p>    
                                                        <Grid 
                                                            style={{marginTop:'30px', marginBottom:'30px'}}
                                                            centered
                                                        >
                                                            <DeleteModal 
                                                                id={product._id}
                                                                name={product.name_en}
                                                            />
                                                            <EditModal
                                                                id={product._id}
                                                                name_en={product.name_en}
                                                                name_th={product.name_en}
                                                                code={product.code}
                                                                price={product.price}
                                                                description={product.description}
                                                                category={product.category[0].name}
                                                            />
                                                        </Grid>
                                                    </div>
                                                <Divider/>
                                                </div>
                                            ) }else{
                                                return(    
                                                    <div style={{marginBottom:'30px'}}>   
                                                        <div style={{marginBottom:'30px'}}>
                                                            <span style={{display:'flex', width:'100%'}}>
                                                                <h1 style={{marginRight:'68%', marginLeft:'5%'}}>{product.name_en}</h1>
                                                                <h1 style={{marginTop:'0px'}}>${product.price}</h1>
                                                            </span>
                                                            <p style={{textAlign:'initial', marginLeft:'5%'}}>{product.description}</p>
                                                            <DeleteModal
                                                                id={product._id}
                                                                name={product.name_en}
                                                            />
                                                        </div>
                                                    <Divider/>
                                                    </div>
                                                )       
                                            }
                                    })
                                }

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}