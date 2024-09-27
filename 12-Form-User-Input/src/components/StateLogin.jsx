import { useState } from 'react';

export default function Login() {
	// const [enteredEmail, setEnteredEmail] = useState('');
	// const [enteredPassword, setEnteredPassword] = useState('');
	const [enteredValues, setEnteredValues] = useState({
		email: '',
		password: '',
	});

	const [didEdit, setDidEdit] = useState({
		email: false,
		password: false,
	});

	// 유효성 검사
	const emailIsInvaild = didEdit.email && !enteredValues.email.includes('@');

	function handleSubmit(event) {
		event.preventDefault();
		console.log(enteredValues);

		setEnteredValues({
			email: '',
			password: '',
		});
	}

	function handleInputChange(identifier, value) {
		setEnteredValues((prevValues) => ({
			...prevValues,
			[identifier]: value,
		}));
		setDidEdit((prevEdit) => ({
			...prevEdit,
			[identifier]: false,
		}));
	}

	function handleInputBlur(identifier) {
		setDidEdit((prevEdit) => ({
			...prevEdit,
			[identifier]: true,
		}));
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						onBlur={() => handleInputBlur('email')}
						onChange={(event) => handleInputChange('email', event.target.value)}
						value={enteredValues.email}
					/>
					<div className="control-error">
						{emailIsInvaild && <p>Please enter a valid email address.</p>}
					</div>
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						onChange={(event) =>
							handleInputChange('password', event.target.value)
						}
						value={enteredValues.password}
					/>
				</div>
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
