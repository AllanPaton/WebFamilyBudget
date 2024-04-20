import React from 'react';

import resets from "../_resets.module.css"
import classes from './OperationDate.module.css';

const OperationDate = () => {
    return (
        <div className={`${resets.storybrainResets} ${classes.block}`}>
            <div className={classes._12002}>.01.2002</div>
            <div className={classes._10}>10</div>
            <div className={classes.monday}>Monday</div>
        </div>
    );
};

export default OperationDate;
