import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false 
    }
    render () {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})}>
                     How it works?</button>

                {this.state.isOpen && (<div className='modal'>
                    <div className='modal-body'>
                        <h1>How it works?</h1>
                        <p>Write the task you want to do to add it in your "To do list"</p>
                <button onClick={() => this.setState({isOpen: false})}>
                        Ok</button>
                    </div>
                </div>
                )}
            </React.Fragment>
        )
    }
}