import { useState } from 'react';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';

import Input from './Input';
import useInput from '../hooks/useInput.js';

export default function Login() {
	const {
		value: emailValue,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		hasError: emailHasError,
	} = useInput('', (value) => isEmail(value) && isNotEmpty(value));

	const {
		value: passwordValue,
		handleInputChange: handlePasswordChange,
		handleInputBlur: handlePasswordBlur,
		hasError: passwordHasError,
	} = useInput('', (value) => hasMinLength(value, 6));

	function handleSubmit(event) {
		event.preventDefault();

		if (emailHasError || passwordHasError) {
			return;
		}

		console.log(emailValue, passwordValue);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<Input
					label="Email"
					id="email"
					type="email"
					name="email"
					onBlur={handleEmailBlur}
					onChange={handleEmailChange}
					value={emailValue}
					error={emailHasError && 'Please enter a valid email!'}
				/>

				<Input
					label="Password"
					id="password"
					type="password"
					name="password"
					onBlur={handlePasswordBlur}
					onChange={handlePasswordChange}
					value={passwordValue}
					error={passwordHasError && 'Please enter a valid password!'}
				/>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}

/*
  1. button의 attribute에 type="button" 이라고 설정해주면, 버튼이 Form을 제출하지 않게 됨 (default: type="submit")
  => 페이지 reload가 발생하지 않음

  2. form에 onSumit으로 handleSubmit를 전달하게 되면 이 함수는 form 내부에서 발생하는 모든 이벤트의 내용이 담긴 event 객체를 전달받을 수 있음

	3. onBlur
	- Built-In 브라우저 이벤트
	- 해당 입력이 focus를 잃게 될 때 마다 발현됨
*/
