import React from 'react';
import { memo } from 'react';

import resets from '.././_resets.module.css';
import classes from './Header-flexbar-info.module.css';
import { Line2Icon } from './Line2Icon';


const HeaderFlexbarInfo = memo(function HeaderFlexbarInfo(props = {}) {
    return (
        <div className={`${resets.storybrainResets} ${classes.block}`}>
            <div className={classes.line2}>
                <Line2Icon className={classes.icon} />
            </div>
            <div className={classes._999999}>999.999₽</div>
            <div className={classes.balance}>Balance:</div>
            <div className={classes.income}>Income:</div>
            <div className={classes.outcome}>Outcome:</div>
            <div className={classes._100}>1.000₽</div>
            <div className={classes._2555}>2.555₽</div>
        </div>
    )
})

export default HeaderFlexbarInfo;