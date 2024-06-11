import { createStore } from 'redux';

const initialState = {
	userData: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_USER_DATA':
			return { ...state, userData: action.payload };
		default:
			return state;
	}
};

const store = createStore(rootReducer);

export default store;