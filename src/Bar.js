import React, { Component } from 'react'
import ListGroup from './ListGroup';
// import Styles from './Bar.module.css'

class Bar extends Component {

    state = {
        items : [],
    }

    submithandle = (e) =>
    {
        e.preventDefault();
        this.state.items.push(e.target[0].value);
        this.setState({items : this.state.items});
        console.log(this.state.items);
        e.target[0].value = '';
    }

    render() {
        const toSpeciy = {
            width : '90%'
        }
        return (
            <React.Fragment>
                <div className = 'mt-5'>
                    <form className="form-inline" onSubmit = {this.submithandle}>
                        <input type="text" required className = "form-control mb-2 mr-sm-2" style = {toSpeciy} placeholder="Add items here"></input>
                        <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    </form>
                </div>
                <ListGroup items = {this.state.items}/>
            </React.Fragment>
        )
    }
}

export default Bar;