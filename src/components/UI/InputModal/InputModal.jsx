import React from 'react';

const InputModal = ({setMenuOpen}) => {
	return (
		<div className="fuckslave">
			<div className="WrapBox">
				<div className="WrapElements">
					<div className="input-group">
						<label htmlFor="sum">ENTER THE SUM</label>
						<input type="text" id="sum" value="200 000"/>
					</div>
					<div className="input-group">
						<label htmlFor="category">CATEGORY</label>
						<input type="text" id="category"/>
					</div>
					<div className="input-group">
						<label htmlFor="note">Note:</label>
						<textarea id="note">Type note here!</textarea>
					</div>
					<div className="bottom-section">
						<div className="date-group">
							<div className="date-row">
								<svg className="f7--calendar-black"/>
								<input
									type="date"
									id="startDate"
									value="2025-01-01"
									min="2024-01-01"
									max="2038-01-01"
									name="InputDate"
								/>
							</div>
							<div className="date-row">
								<svg className="fluent--wallet-48-filled-black"/>
								<select id="bankType">
									<option value="A"> Alfa</option>
									<option value="b"> Beta</option>
								</select>
								{/*Пустой элемент для сохранения симметрии*/}
							</div>
						</div>
						<button className="save-button" onClick={() => setMenuOpen(false)}>SAVE</button>
					</div>
				</div>
			</div>
		</div>
	)
		;
};

export default InputModal;