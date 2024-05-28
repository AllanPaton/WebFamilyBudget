import React, {useState, useEffect} from 'react';
import { memo } from 'react';

import resets from '.././_resets.module.css';
import classes from './Header-flexbar-info.module.css';
import { Line2Icon } from './Line2Icon';


const HeaderFlexbarInfo = memo(function HeaderFlexbarInfo(props = {}) {
    const { currentMonth } = props;

    const [totalBalance, setTotalBalance] = useState(0)
    const [outcome, setOutcome] = useState(0);
    const [income, setIncome] = useState(0);



    useEffect(() => {
        const fetchData = async () => {
            console.log('Sending request{ month:', currentMonth, '}'); //console.log  для  отладки
            try {
                const response = await fetch(`http://localhost:8081/api/protected/userdata/header?month=${currentMonth}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Error retrieving data');
                }

                const data = await response.json();
                console.log('Getting data:', data); //  Добавили  console.log  для  отладки
                setTotalBalance(data.totalBalance);
                setOutcome(data.outcome);
                setIncome(data.income);

            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [currentMonth]);

    return (
        <div className={`${resets.storybrainResets} ${classes.block}`}>
            <div className={classes.line2}>
                <Line2Icon className={classes.icon} />
            </div>
            <div className={classes.totalBalance}>{totalBalance}₽</div>
            <div className={classes.balance}>Balance:</div>
            <div className={classes.income}>Income:</div>
            <div className={classes.outcome}>Outcome:</div>
            <div className={classes.outcomeNum}>{outcome}₽</div>
            <div className={classes.incomeNum}>{income}₽</div>
        </div>
    )
})

export default HeaderFlexbarInfo;