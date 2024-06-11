import React from 'react';
import {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import classes from './CalendarPage.css';
import RedactModal from "../../UI/RedactModal/RedactModal";
import moment from "moment";

const CalendarPage = () => {
	const navigate = useNavigate();

	const navigateBack = () => {
		navigate('/app');
	};

	const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const [allData, setAllData] = useState([]);

	useEffect(() => {
		const fetchAllData = async () => {
			try {
				const today = new Date();
				const currentMonth = today.getMonth() + 1; // Получите текущий месяц
				const response = await fetch(`http://localhost:8081/api/protected/userdata/all?month=${currentMonth}`, { // Добавьте параметр month в URL
					headers: {
						Authorization: `Bearer ${localStorage.getItem('token')}`
					},
				});

				if (response.ok) {
					const data = await response.json();
					const dataWithNumberSums = data.map(item => ({
						...item,
						sum: Number(item.sum)
					}));
					setAllData(dataWithNumberSums);
				} else {
					console.error('Error fetching data:', response.status);
				}
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchAllData();
	}, []);

	const getDaysInMonth = (year, month) => {
		return new Date(year, month, 0).getDate();
	};

	const today = new Date();
	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth() + 1;
	const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);
	const daysInMonth = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);

	// Calculate the day of the week for the first day of the month
	const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1).getDay();
	const startIndex = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust for Sunday starting at index 0

	// Filter data for the current month
	const currentMonthData = allData.filter(item => {
		const date = new Date(item.date);
		return date.getFullYear() === currentYear && date.getMonth() + 1 === currentMonth;
	});

	// Create an object to store sum for each day
	const dailySums = {};
	currentMonthData.forEach(item => {
		const day = new Date(item.date).getDate();
		if (!dailySums[day]) {
			dailySums[day] = 0;
		}
		dailySums[day] += item.sum;
	});

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [dataBeingEdited, setDataBeingEdited] = useState(null);

	// Function to open the modal
	const openModal = (data) => {
		setDataBeingEdited(data);
		setIsModalOpen(true);
	};

	// Function to close the modal
	const closeModal = () => {
		setIsModalOpen(false);
	};

	// Function to handle saving edited data
	const handleSaveData = async (updatedData) => {
		try {
			const formattedDate = moment(updatedData.date).format('YYYY-MM-DD');
			const safeNote = updatedData.note || '';
			const response = await fetch(
				`http://localhost:8081/api/protected/userdata/update/${updatedData.id}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${localStorage.getItem('token')}`,
					},
					body: JSON.stringify({
						...updatedData,
						date: formattedDate, // Send the formatted date string
						note: safeNote
					}),
				}
			);

			if (response.ok) {
				console.log('Transaction updated successfully!');
				closeModal();
			} else {
				const errorData = await response.json();
				console.error('Error updating transaction:', errorData);
				// Handle errors (e.g., display an error message to the user)
			}
		} catch (error) {
			console.error('Error updating transaction:', error);
			// Handle network or other unexpected errors
		}
	};

	return (
		<>
			<header>
				<div className="calendarMonth">
					<h1 className="centerforcenter">
						{today.toLocaleString('default', { month: 'long' })} {currentYear}
					</h1>
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
					{[...Array(startIndex).keys()].map((i) => (
						<div key={`empty-${i}`} className="calendarDay empty" />
					))}
					{daysInMonth.map((day) => {
						const dataForDay = currentMonthData.find(
							(item) => new Date(item.date).getDate() === day
						) || {
							day: day,
							sum: 0,
							id: -1,
							type: '',
							date: new Date(currentYear, currentMonth - 1, day),
						};

						return (
							<div
								key={day}
								className={`calendarDay ${new Date(currentYear, currentMonth - 1, day).getDay() === 0 ? 'sunday' : ''}`}
								onClick={() => openModal(dataForDay)} // Pass dataForDay to the modal
							>
								<div className="calendarDay-holder">
									<span className="calendarDay-date">{day}</span>
									<span
										className={`calendarDay-sum ${dailySums[day] && Number(dailySums[day]) < 0 ? 'negative-sum' : ''}`}>
                    {dailySums[day] ? Number(dailySums[day]) : 0}
                  </span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			{/* RedactModal */}
			<RedactModal
				isOpen={isModalOpen}
				onClose={closeModal}
				dataToEdit={dataBeingEdited}
				onSave={handleSaveData}
			/>
		</>
	);
};

export default CalendarPage;



