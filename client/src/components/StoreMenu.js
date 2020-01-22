import React, { Component } from 'react';
import Product from './StoreProduct';
import { 
    Container,
    Menu,
    Header,
    Divider,
    Grid
} from 'semantic-ui-react';

export default class Home extends Component
{
    constructor(props){
        super(props);
        this.state={
            categories:[],
			products:[],
			isShowing: false,
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

 
    render(){
        const { categories, products } = this.state
        console.log(products)
        return (
            <Container style={{ width:'100%' }}>
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
                    <Grid.Column>
                        <Header as='h2' style={{marginTop:'20px'}}>Menu</Header>
                        <Divider />
                        {
                            products.map(product =>
                            {
                                return ([
                                    <Product
                                        key={product._id}
                                        code={product.code}
                                        name={product.name_en}
                                        price={product.price}
                                        category={product.category[0].name}
                                        description={product.description}
                                    />
                                ])
                            })
                        }

                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}