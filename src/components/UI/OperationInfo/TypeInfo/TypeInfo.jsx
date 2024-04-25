import React from 'react';
import {memo} from "react";


import resets from '../../_resets.module.css';
import classes from './TypeInfo.module.css';

const TypeInfo  = memo(function TypeInfo(props = {}) {
    return (
        <div className={`${resets.storybrainResets} ${classes.block}`}>
            <div className={classes.type}>Type: </div>
            <div className={classes.loan}>Loan</div>
            <div className={classes.unnamed}>0₽</div>
            <div className={classes.unnamed2}>0₽</div>
        </div>
    )
})


export default TypeInfo;