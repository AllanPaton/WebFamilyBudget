import React from 'react';
import { memo } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1.module.css';

export const Component1 = memo(function Component1(props = {}) {
    return (
        <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
            <div className={classes.rectangle2}></div>
            <div className={classes.rectangle3}></div>
        </div>
    );
});

export default Component1;
