import React, { Component } from 'react';

import { Button, Container } from 'semantic-ui-react';
import Modal from './ProductModal'

export default class StoreMenu extends Component
{
    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }
    render() {
        return (
            <Container style={{ width: '100%' }}>

                { this.state.isShowing 
                    ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
            
                <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                        Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                </Modal>
            </Container>
        )
    }
}