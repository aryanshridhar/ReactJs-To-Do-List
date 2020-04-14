import React, { Component } from 'react'
import Heading from './Heading';
import Bar from './Bar';

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
