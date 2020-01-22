import React from "react";
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'
import { Grid, Divider } from 'semantic-ui-react';

export default function Product(props)
{
    return (
        <div className="storeProduct" style={{ padding: "5px 15px" }} >
            <div className="category">{ props.category.name }</div>
            <div style={{ display: 'flex', width: '100%' }}>
                <span className="code" style={{minWidth: '50px'}}>{ props.code }</span>
                <span className="name" style={{minWidth: '100px'}}>{ props.name }</span>
                <span className="price" style={{minWidth: '40px'}}>{ props.price }</span>
            </div>
            <p style={{ textAlign: 'initial', marginLeft: '5%' }}>{props.description}</p>

            {
                props.editable &&
                
                <Grid style={{ marginTop: '30px', marginBottom: '30px' }} centered >
                    <DeleteModal
                        id={props.id}
                        name={props.name}
                    />
                    <EditModal
                        id={props.id}
                        name_en={props.name}
                        name_th={props.name}
                        code={props.code}
                        price={props.price}
                        description={props.description}
                        category={props.category}
                    />
                </Grid>
            }

            <Divider/>
        </div>
    )
}