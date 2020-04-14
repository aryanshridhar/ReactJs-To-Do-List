import React, { Component } from 'react';
import Styles from './ListGroup.module.css';
import ModifyButton from './ModifyButton';
import ListItem from './ListItem';

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
                                    <ListItem key={index} value={value} index ={index} deletehandle={this.deletehandle} />
                                )
                            })
                            }
                        </div>  
                    </div>
                </React.Fragment>
            )
        }
    }
