/*
import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import classes from './Section4.module.css';

interface Props {
  className?: string;
}
/!* @figmaId 98:13 *!/
export const Section4: FC<Props> = memo(function Section4(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.navGraphButton}>
        <Component1 className={classes.component1} />
        <div className={classes.rectangle4}></div>
        <div className={classes.thisMonth}>This month</div>
        <div className={classes.prevMonth}>Prev month</div>
        <div className={classes.nextMonth}>Next month</div>
      </div>
    </div>
  );
});
*/

import React from 'react';
import { memo } from 'react';

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import classes from './Section4.module.css';

export const Section4 = memo(function Section4(props = {}) {
  return (
      <div className={`${resets.storybrainResets} ${classes.root}`}>
        <div className={classes.navGraphButton}>
          <Component1 className={classes.component1} />
            <div className={classes.rectangle4}>
                <div className={classes.thisMonth}>This month</div>
            </div>
            <div className={classes.prevMonth}>Prev month</div>
          <div className={classes.nextMonth}>Next month</div>
        </div>
      </div>
  );
});

export default Section4;