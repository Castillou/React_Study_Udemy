import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

export default function TodoInsert({ onInsert }) {
	const [value, setValue] = useState('');

	const handleChange = useCallback(function (e) {
		setValue(e.target.value);
	}, []);

	const handleSubmit = useCallback(
		function (e) {
			onInsert(value);
			setValue('');

			e.preventDefault();
		},
		[onInsert, value]
	);

	return (
		<form className="TodoInsert" onSubmit={handleSubmit}>
			<input
				placeholder="할 일을 입력하세요."
				value={value}
				onChange={handleChange}
			/>
			<button type="submit">
				<MdAdd />
			</button>
		</form>
	);
}
