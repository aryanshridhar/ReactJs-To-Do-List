import React, { Component } from 'react';
import Styles from './ListGroup.module.css';

export default class ListGroup extends Component {

    state = {
        display : 'none',
        read : true,
        value : this.props.items,
    }

    hoverhandle = (e) =>
    {
        this.setState({display : 'inline'}) 
    }

    hoverouthandle = () =>
    {
        this.setState({display : 'none'})
    }
    
    deletehandle = (e) =>
    {
        delete this.props.items[e.target.getAttribute('pressed')];
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
    }

    donemodify = (e) =>
    {
        e.preventDefault();
        this.state.value[e.target.getAttribute('pressed')] = e.target.value;
        this.setState({value : this.state.value});
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
                                    <div key = {index} className = {'row' + " " + Styles.set} onMouseEnter = {this.hoverhandle} onMouseLeave = {this.hoverouthandle}>
                                        <div className = 'col-10 text-left'>
                                            <input className = {Styles.inputtag} pressed = {index} type = 'text' onChange = {this.handlechange} value = {value}></input>
                                        </div>
                                        <div className = 'col-2 text-right'>
                                            <button onClick = {this.donemodify}>Modify</button>
                                            <button pressed = {index} style = {this.state} onClick = {this.deletehandle} className = {Styles.but}>Delete</button>
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
