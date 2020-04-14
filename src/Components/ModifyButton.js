import React from 'react';
import Styles from './ListGroup.module.css';

const ModifyButton = ({ donemodify, style }) => (
    <button 
    style = {style} 
    onClick={donemodify} 
    className = {'btn btn-info mr-2'+ " " + Styles.but + " " + Styles.but1}
    >Modify
    </button>
)


export default ModifyButton;