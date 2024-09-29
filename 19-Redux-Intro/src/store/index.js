import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
	reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

/*
// store는 하나여야 함
// configureStore : 여러 개의 리듀서를 하나의 리듀서로 합침

const counterReducer = (state = initialState, action) => {
	if (action.type === 'INCREMENT') {
		return {
			...state,
			counter: state.counter + 1,
		};
	}

	if (action.type === 'INCREASE') {
		return {
			...state,
			counter: state.counter + action.amount,
		};
	}

	if (action.type === 'DECREMENT') {
		return {
			...state,
			counter: state.counter - 1,
		};
	}

	if (action.type === 'TOGGLE') {
		return {
			...state,
			showCounter: !state.showCounter,
		};
	}

	return state;
};

const store = createStore(counterReducer);
*/
