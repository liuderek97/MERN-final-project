import React,{Component} from 'react';
import { 
    Container,
    Menu,
    Header,
    Divider,
    Grid,
    Table,
} from 'semantic-ui-react';
import  {store} from '../Store'
import AdminDashboard from '../components/AdminDashboard'



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
        .catch(err => {
        	console.log(err)
        })

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
        const {categories, products} = this.state
        let {user} = store.getState()
        console.log(user)
        console.log(store.getState())
        console.log(this.isEmpty(user))
    
        
        let adminButton = () => {
            if(!this.isEmpty(user)){
                return(
                   <AdminDashboard/>
                )
            }
        }


        return (
            <Container style={{ width:'100%' }}>
                {adminButton()}
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
                                    products.map((product,index) => {
                                        if(product.flavour){
                                            return(
                                                <div style={{marginBottom:'30px'}}>   
                                                <div style={{marginBottom:'30px'}}>
                                                    <span style={{display:'flex', width:'100%'}}>
                                                        <h1 style={{marginRight:'68%', marginLeft:'5%'}}>{product.name_en}</h1>
                                                        {product.flavour.map((flavour) =>
                                                                <h1 style={{marginTop:'0px'}}>${flavour.price}</h1>,
                                                        )}
                                                    </span>
                                                    <p style={{textAlign:'initial', marginLeft:'5%'}}>{product.description}</p>
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