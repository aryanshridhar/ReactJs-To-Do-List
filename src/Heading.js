import React, { Component } from 'react'
import Styles from './Heading.module.css';

class Heading extends Component {
    render() {
        return (
            <h1 className = {Styles.heading}>To-Do-List</h1>
        )
    }
}
export default Heading;