import React, { Component } from 'react'
import Heading from './Heading';
import Bar from './Bar';
import ListGroup  from './ListGroup';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
            <Heading/>
            <Bar/>
            </React.Fragment>
        )
    }
}
