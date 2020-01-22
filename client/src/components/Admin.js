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
import { store } from '../Store'
import Product from './StoreProduct';


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
            
        return (
           <Container style={{ width: '100%' }}>
                <Button
                    onClick={logout}
                    style={{marginTop:'50px'}}
                >
                    logout
                 </Button>
                <AdminDashboard/>
                <Grid stackable columns="equal">
                    <Grid.Column width={3} style={{minWidth: "250px"}}>
                        <Menu 
                            vertical 
                            text
                            style={{marginLeft:'30px', marginTop:'15px',marginRight:'350px', marginBottom:'50px'}}
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
                    <Grid.Column style={{ marginLeft: '10px' }} width={12}>
                        <Header as='h2' style={{marginTop:'20px'}}>Menu</Header>
                        <Divider />
                            {
                                products.map((product) => (
                                    <Product
                                        key={product._id}
                                        id={product._id}
                                        code={product.code}
                                        name={product.name_en}
                                        price={product.price}
                                        category={product.category[0].name}
                                        description={product.description}
                                        editable
                                    />
                                ))
                            }

                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}