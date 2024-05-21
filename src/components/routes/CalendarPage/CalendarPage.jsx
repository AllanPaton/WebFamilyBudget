import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './CalendarPage.css';

const CalendarPage = () => {
	const navigate = useNavigate();

	const navigateBack = () => {
		navigate('/app');
	};

	//array of days
	const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	//(replace with actual data)
	const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

	// DEL(replace with actual data)
	const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
	const daySum = generateNumber(1,26)

	return (
		<>
			<header>
				<div className="calendarMonth">
					<h1 className="centerforcenter">Month</h1>
				</div>
				<div className="calendarBack" onClick={navigateBack}>
					<h1 className="centerforcenter">Go back</h1>
					<div className="fa--arrow-right" />
				</div>
			</header>
			<div className="calendarWrap">
				<div className="calendarHeader">
					{daysOfWeek.map((day) => (
						<h1 key={day} className="calendarHeader-day">
							{day}
						</h1>
					))}
				</div>
				<div className="calendarContent">
					{daysInMonth.map((day, index) => (
						<div
							key={day}
							className={`calendarDay ${index % 7 === 6 ? 'sunday' : ''}`}
						>  {/*Paint to red all sundays*/}
							<div className="calendarDay-holder">
								<span className="calendarDay-date">{day}</span>
								<span className="calendarDay-sum">{daySum}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default CalendarPage;

    

