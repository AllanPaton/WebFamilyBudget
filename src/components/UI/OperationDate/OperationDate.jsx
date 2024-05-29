import React from 'react';

import resets from "../_resets.module.css"
import classes from './OperationDate.module.css';

const OperationDate = ({date}) => {
    const formattedDate = new Date(date);
    const day = formattedDate.getDate();
    const month = formattedDate.toLocaleString('default', { month: 'long' }); // Полное название месяца
    const year = formattedDate.getFullYear();
    const weekday = formattedDate.toLocaleDateString('default', { weekday: 'long' }); // Полное название дня недели

    return (
        <div className={`${resets.storybrainResets} ${classes.block}`}>
            <div className={classes._12002}>{`${month} ${year}`}</div> {/* Месяц и год */}
            <div className={classes._10}>{day}</div> {/* День */}
            <div className={classes.monday}>{weekday}</div> {/* День недели */}
        </div>
    );
};


export default OperationDate;
