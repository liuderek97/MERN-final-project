import React from "react";
import DeleteModal from './DeleteModal'
import { Grid, Divider } from 'semantic-ui-react';

export default function Category(props)
{
    return (

        <div className={"storeCategory " + (props.active ? 'active' : '')} onClick={props.callback} id={props.id}>
            <span>{props.name}</span>
            {
                props.editable &&
                
                <Grid style={{ marginTop: '30px', marginBottom: '30px' }} centered >
                    <DeleteModal
                        id={props.id}
                        name={props.name}
                    />
                </Grid>
            }
            <Divider/>
        </div>
    )
}