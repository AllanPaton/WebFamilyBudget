import React from 'react';
import classes from "./CalendarPage.css"
import {generatePath, useNavigate} from "react-router-dom";

const CalendarPage = () => {
	const navigate =useNavigate()

	const navigateBack = () => {
			navigate('/app')
	}

	return (
		<>
			<header>
				<div className="calendarMonth">
					<h1 className="centerforcenter">Month</h1>
				</div>
				<div className="calendarBack" onClick={navigateBack}>
					<h1 className="centerforcenter">Go back</h1>
					<div className="fa--arrow-right"/>
				</div>
			</header>
			
		</>
	);
};

export default CalendarPage;