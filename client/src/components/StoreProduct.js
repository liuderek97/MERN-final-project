import React from "react";
import { Divider } from 'semantic-ui-react';

export default function Product(props)
{
    return (
        <div className="storeProduct" style={{ marginBottom: '15px', padding: "15px" }} >
            <div className="category">{ props.category }</div>
            <div style={{ display: 'flex', width: '100%' }}>
                <span className="code" style={{minWidth: '40px'}}>{ props.code }</span>
                <span className="name" style={{minWidth: '100px'}}>{ props.name }</span>
                <span className="price" style={{minWidth: '40px'}}>{ props.price }</span>
            </div>
            <p style={{ textAlign: 'initial', marginLeft: '5%' }}>{ props.description }</p>
            <Divider/>
        </div>
    )
}

