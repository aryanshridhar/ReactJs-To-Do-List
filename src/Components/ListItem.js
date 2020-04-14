import React, { Component } from 'react';

import ModifyButton from './ModifyButton';
import Styles from './ListGroup.module.css';

class ListItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
        style: { 
            display : 'none',
            read : true
        },
        value: this.props.value
        }
    }

    handlechange = (e) =>
    {   
        this.setState({style: {...this.state.style, display: 'inline-block'}})
        this.setState({value: e.target.value})
    }

    donemodify = (e) =>
    {
        e.preventDefault();
        this.setState({style: {...this.state.style, display: 'none'}})
    }



    render() {
        const { index } = this.props;
        return (
            <div key = {index} className = {'row' + " " + Styles.set}>
                <div className = 'col-10 text-left'>
                    <input className = {Styles.inputtag} pressed = {index} type = 'text' onChange = {this.handlechange} value = {this.state.value}></input>
                </div>
                <div className = 'col-2 text-right mt-1'>
                    <div className ="btn-group" role="group" aria-label="Basic example">
                        <ModifyButton donemodify={this.donemodify} style={this.state.style}/>
                    <button pressed = {index} onClick = {this.props.deletehandle} className = {'btn btn-danger' + ' ' + Styles.but}>Remove</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default ListItem;