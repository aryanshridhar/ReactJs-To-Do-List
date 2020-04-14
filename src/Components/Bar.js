import React, { Component } from 'react'
import ListGroup from './ListGroup';
import Styles from './Bar.module.css';

class Bar extends Component {

    state = {
        items : [],
        error : ''
    }

    submithandle = (e) =>
    {
        e.preventDefault();
        for(let i=0;i<this.state.items.length;i++)
        {
            if(this.state.items[i].toLowerCase().trim() === e.target[0].value.toLowerCase().trim())
            {
                this.setState({error : 'The item already exists in your list'});
                this.state.error = 'The item already exists in your list';
            }
            else{
                this.setState({error : ''});   
                this.state.error = '';
            }
        }
        if (this.state.error === ''){
            console.log('lolol')
            this.state.items.push(e.target[0].value);
            this.setState({items : this.state.items});
            console.log(this.state.items);
            e.target[0].value = '';
        }
        localStorage.setItem('List',this.state.items);
        console.log(typeof(localStorage.getItem('List')));
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
                        <button type="submit" className="btn btn-success mb-2">Add</button>
                    </form>
                    <p className = {'text-left' + " " + Styles.error}>{this.state.error}</p>
                </div>
                <ListGroup items = {this.state.items}/>
            </React.Fragment>
        )
    }
}

export default Bar;