import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Действие для асинхронной загрузки всех операций
export const fetchAllOperations = createAsyncThunk(
	'operations/fetchAllOperations',
	async () => {
		const response = await fetch('http://localhost:8081/api/protected/userdata/all', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		});
		return await response.json();
	}
);

const initialState = {
	operations: [],
	status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
	error: null,
	currentMonth: new Date().getMonth() + 1, // Текущий месяц по умолчанию
};

const operationsSlice = createSlice({
	name: 'operations',
	initialState,
	reducers: {
		addOperation: (state, action) => {
			state.operations.push(action.payload);
		},
		updateOperation: (state, action) => {
			const index = state.operations.findIndex((op) => op.id === action.payload.id);
			if (index !== -1) {
				state.operations[index] = action.payload;
			}
		},
		setCurrentMonth: (state, action) => {
			state.currentMonth = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchAllOperations.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchAllOperations.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.operations = action.payload;
			})
			.addCase(fetchAllOperations.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	}
});

// Экспортируем actions
export const { addOperation, updateOperation, setCurrentMonth } = operationsSlice.actions;
// Экспортируем reducer
export default operationsSlice.reducer;