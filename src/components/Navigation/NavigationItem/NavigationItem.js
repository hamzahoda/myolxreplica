import React from 'react';
import classes from './NavigationItem.module.css'

const NavigationItem = props => {
    return (
    <div>
        <li className={classes.NavigationItem}><a className={props.active ? classes.active:null} onClick={props.clicked}>{props.children}</a></li>

    </div>
    )
}

export default NavigationItem