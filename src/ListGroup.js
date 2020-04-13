import React, { Component } from 'react';
import Styles from './ListGroup.module.css';

export default class ListGroup extends Component {

    state = {
        display : 'none',
        read : true
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

    modifyhandle = () =>
    {

    }


    render(props) {
            return (
                <React.Fragment>
                    <div className = 'row'>
                        <div className = 'col-12 text-left'>
                            <h5 className = 'mt-3 text-white'>Your List :-</h5>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className = 'col-12 text-left mt-4'>
                            {
                            this.props.items.map((value , index) => {
                                return(
                                    <form onSubmit = {this.handlesubmit}>
                                        <div key = {index} className = 'row' onMouseEnter = {this.hoverhandle} onMouseLeave = {this.hoverouthandle}>
                                            <div className = 'col-6 text-left'>
                                                <input type = 'text' readOnly value = {value}></input>
                                            </div>
                                            <div className = 'col-6 text-right'>
                                                <button pressed = {index} style = {this.state} onClick = {this.deletehandle} className = {Styles.but}>Delete</button>
                                                <button pressed = {index} style = {this.state} onClick = {this.modifyhandle} className = {Styles.but}>Modify</button>
                                            </div>
                                        </div>
                                    </form>
                                )
                            })
                            }
                        </div>  
                    </div>
                </React.Fragment>
            )
        }
    }
