/*
import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import classes from './MonthPanel.module.css';

interface Props {
  className?: string;
}
/!* @figmaId 98:13 *!/
export const MonthPanel: FC<Props> = memo(function MonthPanel(props = {}) {
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

import React, {useState} from 'react';
import { memo } from 'react';

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import classes from './Section4.module.css';

export const Section4 = memo(function Section4({ currentMonth, setCurrentMonth }) {
    const [localMonth, setLocalMonth] = useState(currentMonth);

    const handlePrevMonth = () => {
        setLocalMonth(prevMonth => (prevMonth === 1 ? 12 : prevMonth - 1));
        setCurrentMonth(prevMonth => (prevMonth === 1 ? 12 : prevMonth - 1));
    };

    const handleNextMonth = () => {
        setLocalMonth(prevMonth => (prevMonth === 12 ? 1 : prevMonth + 1));
        setCurrentMonth(prevMonth => (prevMonth === 12 ? 1 : prevMonth + 1));
    };

    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.navGraphButton}>
                <Component1 className={classes.component1} />
                <div className={classes.rectangle4}>
                    <div className={classes.thisMonth}>This month</div>
                </div>
                <button className={classes.prevMonth} onClick={handlePrevMonth}>Prev month</button>
                <button className={classes.nextMonth} onClick={handleNextMonth}>Next month</button>
            </div>
        </div>
    );
});

export default Section4;