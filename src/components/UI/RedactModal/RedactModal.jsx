import React, { useState } from 'react';
import classes from  "./RedactModal.css"

const RedactModal = ({ isOpen, onClose, dataToEdit, onSave }) => {
	const [editedData, setEditedData] = useState(dataToEdit || { id: -1, sum: 0, type: '' });
	const handleChange = (e) => {
		setEditedData({
			...editedData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSave = () => {
		onSave(editedData);
		console.log(editedData)
	};

	if (!isOpen) {
		return null;
	}

	return (
		<div className="redact-modal-overlay">
			<div className="redact-modal">
				<div className="redact-modal-body">
					{/* Input for "sum" */}
					<span>Sum:</span>
					<input
						type="text"
						name="sum"
						value={editedData.sum}
						onChange={handleChange}
					/>

					<span> Type:</span>
					{/* Input for "type" */}
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

export default RedactModal;