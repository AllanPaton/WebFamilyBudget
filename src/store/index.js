import { configureStore } from '@reduxjs/toolkit';
import operationsReducer from './operationSlice';

export const store = configureStore({
	reducer: {
		operations: operationsReducer,
	},
});