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
            categories:[]
        }
    }

    componentDidMount() {
        fetch('/category/all')
        .then(data => data.json())
        .then((data) => {
          let categories = data.data
          this.setState({categories:categories})
        //   this.setState({products:})
        })
        .catch(err => {
          console.log(err)
        })
    }
    render(){
        const categories = this.state.categories
        const categoryList = () => {
            
             
            
        }
       
        return (
            <Container style={{ width:'100%' }}>
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
                                
                                    <Menu.Item key={category.id}>{category.name}</Menu.Item>
                                
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
                                <div style={{marginBottom:'30px'}}>   
                                    <div style={{marginBottom:'30px'}}>
                                        <span style={{display:'flex', width:'100%'}}>
                                            <h1 style={{marginRight:'68%', marginLeft:'5%'}}>Curry Puffs</h1>
                                            <h1 style={{marginTop:'0px'}}>$9.90</h1>
                                        </span>
                                        <p style={{textAlign:'initial', marginLeft:'5%'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                    <Divider/>
                                    <div style={{marginBottom:'30px'}}>
                                        <span style={{display:'flex', width:'100%'}}>
                                            <h1 style={{marginRight:'68%', marginLeft:'5%'}}>Curry Puffs</h1>
                                            <h1 style={{marginTop:'0px'}}>$9.90</h1>
                                        </span>
                                        <p style={{textAlign:'initial', marginLeft:'5%'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                    <Divider/>
                                    <div style={{marginBottom:'30px'}}>
                                        <span style={{display:'flex', width:'100%'}}>
                                            <h1 style={{marginRight:'68%', marginLeft:'5%'}}>Curry Puffs</h1>
                                            <h1 style={{marginTop:'0px'}}>$9.90</h1>
                                        </span>
                                        <p style={{textAlign:'initial', marginLeft:'5%'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                                    </div>
                                </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
    
}