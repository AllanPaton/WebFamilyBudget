import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import classes from './Section4.module.css';
import { setCurrentMonth } from '../../../store/operationSlice'; // Замените на корректный путь

export const Section4 = memo(function Section4() {
    const dispatch = useDispatch();
    const currentMonth = useSelector(state => state.operations.currentMonth);

    const handlePrevMonth = () => {
        dispatch(setCurrentMonth(currentMonth === 1 ? 12 : currentMonth - 1));
    };

    const handleNextMonth = () => {
        dispatch(setCurrentMonth(currentMonth === 12 ? 1 : currentMonth + 1));
    };

    return (
        <div className={`${resets.storybrainResets} ${classes.root}`}>
            <div className={classes.navGraphButton}>
                <Component1 className={classes.component1} />
                <div className={classes.rectangle4}>
                    <div className={classes.thisMonth}>This month</div>
                </div>
                <button className={classes.prevMonth} onClick={handlePrevMonth}>
                    Prev month
                </button>
                <button className={classes.nextMonth} onClick={handleNextMonth}>
                    Next month
                </button>
            </div>
        </div>
    );
});

export default Section4;