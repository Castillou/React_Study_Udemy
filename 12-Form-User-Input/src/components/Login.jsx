import { useRef } from 'react';

export default function Login() {
	const email = useRef();
	const password = useRef();

	function handleSubmit(event) {
		event.preventDefault();

		const enteredEmail = email.current.value;
		const enteredPassword = password.current.value;

		console.log(enteredEmail, enteredPassword);

		// email.current.value =''
		// => React가 업데이트 하는 것이 아니라 강제로 DOM을 업데이트 하는 것이기 때문에 [지양하는 것을 권장]
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input id="email" type="email" name="email" ref={email} />
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input id="password" type="password" name="password" ref={password} />
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

	3. 위의 enteredEmail, enteredPassword 안에 담긴 ref 객체의 current 값은, 각자 참조하고 있는 DOM element 이다.
*/
