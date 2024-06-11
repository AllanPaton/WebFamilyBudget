import React, { useState } from 'react';
import classes from  "./RedactModal.css"

const RedactModalO = ({ isOpen, onClose, operation, onSave }) => {
	const [editedData, setEditedData] = useState(operation || { sum: 0, type: '' });
	// Убрал id: -1, чтобы не перезаписывать id из operation

	const handleChange = (e) => {
		setEditedData({
			...editedData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSave = () => {
		// Проверяем, что operation существует, чтобы избежать ошибки
		if (operation) {
			onSave({ ...editedData, id: operation.id });
			console.log("Данные для сохранения:", { ...editedData, id: operation.id });
		} else {
			console.error("Ошибка: operation не определен");
		}
	};

	if (!isOpen) {
		return null;
	}

	return (
		<div className="redact-modal-overlay">
			<div className="redact-modal">
				<div className="redact-modal-body">
					<span>Sum:</span>
					<input
						type="text"
						name="sum"
						value={editedData.sum}
						onChange={handleChange}
					/>

					<span> Type:</span>
					<input
						type="text"
						name="type"
						value={editedData.type}
						onChange={handleChange}
					/>

					<button onClick={handleSave}>Save Changes</button>
					<button onClick={onClose}>Close</button>
				</div>
			</div>
		</div>
	);
};


export default RedactModalO;