import React from 'react';

import resets from '../_resets.module.css'
import classes from "./OperationInfo.module.css";

const OperationInfo = () => {
    return (
        <div className={`${resets.storybrainResets} ${classes.block}`}>
            <div className={classes.rectangle5}></div>
            <div className={classes.rectangle6}></div>
        </div>
    );
};

export default OperationInfo;