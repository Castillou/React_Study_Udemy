import { useState } from 'react';

const BasicForm = () => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const enteredEmailIsValid =
		enteredEmail.includes('@') && enteredEmail.trim() !== '';
	const emailInputIsvalid = !enteredEmailIsValid && enteredEmailTouched;

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const emailInputBlurHandler = () => {
		setEnteredEmailTouched(true);
	};

	const nameInputBlurHandler = () => {
		setEnteredNameTouched(true);
	};

	const formSumbissionHandler = (event) => {
		event.preventDefault();

		setEnteredNameTouched(true);

		if (!enteredNameIsValid && !enteredEmailIsValid) {
			return;
		}

		console.log(`Name: ${enteredName}, Email: ${enteredEmail}`);

		setEnteredName('');
		setEnteredNameTouched(false);

		setEnteredEmail('');
		setEnteredEmailTouched(false);
	};

	return (
		<form onSubmit={formSumbissionHandler}>
			<div className="control-row">
				<div className="control">
					<label htmlFor="name">Your Name</label>
					<input
						id="name"
						type="text"
						onChange={nameInputChangeHandler}
						onBlur={nameInputBlurHandler}
						value={enteredName}
					/>
					<div className="control-error">
						{nameInputIsInvalid && <p>Name must not be empty.</p>}
					</div>
				</div>
				<div className="control">
					<label htmlFor="email">Your E-mail</label>
					<input
						id="email"
						type="email"
						onChange={emailInputChangeHandler}
						onBlur={emailInputBlurHandler}
						value={enteredEmail}
					/>
					<div className="control-error">
						{emailInputIsvalid && <p>Please enter a valid email.</p>}
					</div>
				</div>
			</div>

			<p className="form-action">
				<button className="button" disabled={!formIsValid}>
					Submit
				</button>
			</p>
		</form>
	);
};

export default BasicForm;
