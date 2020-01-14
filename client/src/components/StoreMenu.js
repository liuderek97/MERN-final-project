import React,{Component} from 'react';
import { 
    Button,
    Container,
    Menu,
    Header,
    Divider,
    Segment,
    Grid,
    Table,
    Card
} from 'semantic-ui-react';

export default class Home extends Component
{
    constructor(props){
        super(props);
        this.state={
            categories:[],
            products:[]
        }
    }

    componentDidMount() {
        fetch('/category/all')
        .then(data => data.json())
        .then((data) => {
          let categories = data.data
          this.setState({categories:categories})
        })
        .catch(err => {
          console.log(err)
        })

        fetch('/menu/products')
        .then(data => data.json())

        .then((data) => {
            let products = data.data
            this.setState({products:products})
        })
        .catch((err) => {
            console.log(err)
        })

    }
    render(){
        const {categories, products} = this.state
        console.log(products)
        return (
            <Container style={{ width:'100%' }}>
    
                <div id='hero-image'>
                    <div id='content'>
                        <h1>Saran Thai Wyoming - Menu</h1>
                    </div>
                    <Button primary size='huge'>View Menu</Button>
                </div>
    
                <div id='about-us'>
                    <h1>About Us</h1>
                </div>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column width={3}>
                        <Menu 
                                vertical 
                                text
                                style={{marginLeft:'30px', marginTop:'15px',marginRight:'0px', marginBottom:'50px'}}
                            >
                            <Menu.Item><Header as='h2'>Categories</Header></Menu.Item>
                            <Divider />
                            {categories.map((category) => {
                                return(
                                
                                    <Menu.Item selectable key={category.id}>{category.name}</Menu.Item>
                                
                                )
                            })}
                        </Menu>                        
                        </Grid.Column>
                        <Grid.Column style={{marginLeft:'10px'}} width={12}>
                                <Table basic='very' style={{marginTop:'32px'}}>
                                        <Table.HeaderCell textAlign='center'>Name</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center'>Category Name</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center'>Price</Table.HeaderCell>
                                </Table>
                                <Divider/>
                                {
                                    products.map((product) => {
                                        return(
                                            <div style={{marginBottom:'30px'}}>   
                                                <div style={{marginBottom:'30px'}}>
                                                    <span style={{display:'flex', width:'100%'}}>
                                                        <h1 style={{marginRight:'68%', marginLeft:'5%'}}>{product.name_en}</h1>
                                                        <h1 style={{marginTop:'0px'}}>$9.90</h1>
                                                    </span>
                                                    <p style={{textAlign:'initial', marginLeft:'5%'}}>{product.description}</p>
                                                </div>
                                            <Divider/>
                                            </div>
                                        )
                                    })
                                }
                               
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
    
}