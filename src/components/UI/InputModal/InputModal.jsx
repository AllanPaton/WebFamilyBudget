import React from 'react';
import {useState} from 'react';
import {useDispatch} from "react-redux";
import { addOperation } from '../../../store/operationSlice'

const InputModal = ({setMenuOpen}) => {
	const [sum, setSum] = useState('');
	const [category, setCategory] = useState('');
	const [note, setNote] = useState('');
	const [date, setDate] = useState('');

	const dispatch = useDispatch();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await fetch('http://localhost:8081/api/protected/userdata/add', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`
				},
				body: JSON.stringify({
					sum: parseFloat(sum),
					type: category,
					note: note,
					date: date
				}),
			});
			if (response.ok) {
				// Успешная транзакция
				const newOperation = await response.json();
				dispatch(addOperation(newOperation));
				setSum('');
				setCategory('');
				setNote('');
				setDate('');
				setMenuOpen(false);
			} else {
				// Обработка ошибок
				const errorData = await response.json();
				console.error('Error creating transaction:', errorData);
			}
		} catch (error) {
			console.error('Error creating transaction:', error);
		}
	};

	return (
		<div className="fuckslave">
			<div className="WrapBox">
				<div className="WrapElements">
					<form onSubmit={handleSubmit}>
						<div className="input-group">
							<label htmlFor="sum" className="mrgn-top-brrrrrrrrrrrrrr">ENTER THE SUM</label>
							<input
								type="number"
								id="sum"
								placeholder="200 000"
								value={sum}
								onChange={e => setSum(e.target.value)}
							/>
						</div>
						<div className="input-group">
							<label htmlFor="category">CATEGORY</label>
							<input
								type="text"
								id="category"
								value={category}
								onChange={e => setCategory(e.target.value)}
							/>
						</div>
						<div className="input-group">
							<label htmlFor="note">Note:</label>
							<textarea
								id="note"
								placeholder="Type note here!"
								value={note}
								onChange={e => setNote(e.target.value)}
							/>
						</div>
						<div className="bottom-section">
							<div className="date-group">
								<div className="date-row">
									<svg className="f7--calendar-black"/>
									<input
										type="date"
										id="startDate"
										value={date}
										min="2024-01-01"
										max="2038-01-01"
										name="InputDate"
										onChange={e => setDate(e.target.value)}
									/>
								</div>
							</div>
							<button className="save-button" type="submit" onClick={handleSubmit}>SAVE</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
		;
};

export default InputModal;