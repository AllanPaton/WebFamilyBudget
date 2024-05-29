import React from 'react';
import {memo} from "react";


import resets from '../../_resets.module.css';
import classes from './TypeInfo.module.css';

const TypeInfo = memo(function TypeInfo({ type, sum, note }) {
    return (
        <div className={`${resets.storybrainResets} ${classes.block}`}>
            <div className={classes.type}>Type: </div>
            <div className={classes.loan}>{type}</div>
            <div className={classes.unnamed}>{sum}₽</div>
            <div className={classes.unnamed2}>{note}</div>
        </div>
    );
})


export default TypeInfo;