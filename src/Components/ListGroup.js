import React, { Component } from 'react';
import Styles from './ListGroup.module.css';

export default class ListGroup extends Component {

    state = {
        display : 'none',
        read : true,
        value : this.props.items
    }
    hoverouthandle = () =>
    {
        this.setState({display : 'none'})
    }
    
    deletehandle = (e) =>
    {
        this.state.value.splice(e.target.getAttribute('pressed') , 1);
        console.log(this.props.items);
        this.hoverouthandle();

    }

    handlesubmit = (e) =>
    {
        e.preventDefault();
        console.log(e.target);
    }

    handlechange = (e) =>
    {
        this.state.value[e.target.getAttribute('pressed')] = e.target.value;
        this.setState({value : this.state.value});
        this.setState({display : 'inline-block'})
    }

    donemodify = (e) =>
    {
        e.preventDefault();
        this.state.value[e.target.getAttribute('pressed')] = e.target.value;
        this.setState({value : this.state.value});
        this.setState({display : 'none'})
    }

    render(props) {
            return (
                <React.Fragment>
                    <div className = 'row'>
                        <div className = 'col-12 text-left'>
                            <h5 className = 'mt-3 text-black'>Total {this.props.items.length} items -</h5>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className = 'col-12 text-left mt-4'>
                            {
                            this.state.value.map((value , index) => {
                                return(
                                    <div key = {index} className = {'row' + " " + Styles.set}>
                                        <div className = 'col-10 text-left'>
                                            <input className = {Styles.inputtag} pressed = {index} type = 'text' onChange = {this.handlechange} value = {value}></input>
                                        </div>
                                        <div className = 'col-2 text-right mt-1'>
                                            <div className ="btn-group" role="group" aria-label="Basic example">
                                            <button style = {this.state} onClick = {this.donemodify} className = {'btn btn-info mr-2'+ " " + Styles.but + " " + Styles.but1}>Modify</button>
                                            <button pressed = {index} onClick = {this.deletehandle} className = {'btn btn-danger' + ' ' + Styles.but}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>  
                    </div>
                </React.Fragment>
            )
        }
    }
