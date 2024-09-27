import { useState } from 'react';

export default function Signup() {
	const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();

		const fd = new FormData(event.target);
		// Checkbox 값 가져오기
		const acquisitionChannel = fd.getAll('acquisition');
		const data = Object.fromEntries(fd.entries());
		data.acquisition = acquisitionChannel;

		if (data.password !== data['confirm-password']) {
			setPasswordsAreNotEqual(true);
			return;
		}

		console.log(data);
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Welcome on board!</h2>
			<p>We just need a little bit of data from you to get you started 🚀</p>

			<div className="control">
				<label htmlFor="email">Email</label>
				<input id="email" type="email" name="email" required />
			</div>

			<div className="control-row">
				<div className="control">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						required
						minLength={6}
					/>
				</div>

				<div className="control">
					<label htmlFor="confirm-password">Confirm Password</label>
					<input
						id="confirm-password"
						type="password"
						name="confirm-password"
						required
					/>
					<div className="control-error">
						{passwordsAreNotEqual && <p>Password must match.</p>}
					</div>
				</div>
			</div>

			<hr />

			<div className="control-row">
				<div className="control">
					<label htmlFor="first-name">First Name</label>
					<input type="text" id="first-name" name="first-name" required />
				</div>

				<div className="control">
					<label htmlFor="last-name">Last Name</label>
					<input type="text" id="last-name" name="last-name" required />
				</div>
			</div>

			<div className="control">
				<label htmlFor="phone">What best describes your role?</label>
				<select id="role" name="role" required>
					<option value="student">Student</option>
					<option value="teacher">Teacher</option>
					<option value="employee">Employee</option>
					<option value="founder">Founder</option>
					<option value="other">Other</option>
				</select>
			</div>

			<fieldset>
				<legend>How did you find us?</legend>
				<div className="control">
					<input
						type="checkbox"
						id="google"
						name="acquisition"
						value="google"
					/>
					<label htmlFor="google">Google</label>
				</div>

				<div className="control">
					<input
						type="checkbox"
						id="friend"
						name="acquisition"
						value="friend"
					/>
					<label htmlFor="friend">Referred by friend</label>
				</div>

				<div className="control">
					<input type="checkbox" id="other" name="acquisition" value="other" />
					<label htmlFor="other">Other</label>
				</div>
			</fieldset>

			<div className="control">
				<label htmlFor="terms-and-conditions">
					<input
						type="checkbox"
						id="terms-and-conditions"
						name="terms"
						required
					/>
					I agree to the terms and conditions
				</label>
			</div>

			<p className="form-actions">
				<button type="reset" className="button button-flat">
					Reset
				</button>
				<button type="submit" className="button">
					Sign up
				</button>
			</p>
		</form>
	);
}

/*

  1. new FormData() : 양식에 입력된 각기 다른 값들을 쉽게 얻을 수 있도록 도와주는 객체 
  - 브라우저 내장 함수
  - 제대로 작동하기 위해서는 값을 추출하려는 모든 input에 name="이름" attribute가 있어야함
  - 체크박스처럼 다양한 값이 있는 입력창은 배열로 받아와야하기 때문에 Entry나 fromEntries를 사용할 때에는 빠져있음

  [사용법]
  반환한 객체.get('이름')


  2. button type 종류
  - 'button', 'reset', 'submit'
    1) button: 단지 버튼으로만 기능
    2) reset: 리셋 버튼 기능
    3) submit: 제출용 버튼 기능

  3. event.target.reset()
  - button의 type="reset" 하는 것과 동일 => 하지만 ref 값을 초기화 하는 것 보다는 안정적
*/
