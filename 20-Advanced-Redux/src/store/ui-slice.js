import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
	name: 'ui',
	initialState: { cartIsVisible: false, notification: null },
	reducers: {
		toggle(state) {
			state.cartIsVisible = !state.cartIsVisible;
		},
		showNotification(state, action) {
			state.notification = {
				status: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		},
	},
});

export const uiActions = uiSlice.actions;
export default uiSlice;

/*
  1. 리덕스 툴킷은 immer 라이브러리를 사용해서 상태를 직접 변경하지 않기 때문에 직접 상태를 변경하는 것 처럼 코드를 짤 수 있음
  => 리덕스 툴킷은 이 코드를 캡처하고 다른 제 3의 라이브러리인 immer를 사용하여 이것이 직접 기존 상태 객체를 조작하는 대신, 새로운 상태 객체를 생성하여 조작하기 때문에 기존 상태를 보존할 수 있음
*/
