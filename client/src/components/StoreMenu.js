import React, { Component } from 'react';
import Product from './StoreProduct';
import Category from './StoreCategory';

import { 
    Container,
    Menu,
    Header,
    Divider,
    Grid
} from 'semantic-ui-react';

export default class StoreMenu extends Component
{
    constructor(props){
        super(props);
        this.state={
            categories:[],
            products: [],
            filterProducts: [],
            isShowing: false,
            selectedCategory: 'all'
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
            this.setState({ products: products })
            this.setState({ filterProducts: products })
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

    filterProducts = id =>
    {
        const { products } = this.state;

        let filterProducts = products;

        if (id)
        {
            filterProducts = products.filter(product => product.category._id === id);
            this.setState({selectedCategory: id})
        } else
        {
            this.setState({selectedCategory: 'all'})
        }

        this.setState({ filterProducts })
        this.setState({ active: id })
    }
 
    render(){
        const { categories, filterProducts, selectedCategory } = this.state
        return (
            <Container style={{ width:'100%' }}>
                <Grid stackable columns="equal">

                    <Grid.Column width={3} style={{ minWidth: "250px" }}>

                        <Header as='h2' style={{marginTop:'22px'}}>Categories</Header>
                        <Divider />
                        <Category
                            name="All"
                            callback={() => this.filterProducts()}
                            active={selectedCategory === 'all'}
                        />
                        {categories.map(category => ( 
                            <Category
                                key={category._id}
                                name={category.name}
                                callback={() => this.filterProducts(category._id)}
                                active={selectedCategory === category._id}
                            />
                        ))}
                    </Grid.Column>

                    <Grid.Column>
                        <Header as='h2' style={{marginTop:'22px'}}>Menu</Header>
                        <Divider />
                        {
                            filterProducts.map(product => (
                                <Product
                                    key={product._id}
                                    code={product.code}
                                    name={product.name_en}
                                    price={product.price}
                                    category={product.category && product.category.name}
                                    description={product.description}
                                />
                            ))
                        }
                    </Grid.Column>
                    
                </Grid>
            </Container>
        )
    }
}