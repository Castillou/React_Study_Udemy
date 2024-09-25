import { useState, useRef, useCallback } from 'react';

import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const data = [
	{
		id: 1,
		text: '리액트의 기초 알아보기',
		checked: true,
	},
	{
		id: 2,
		text: '컴포넌트 스타일링 해보기',
		checked: false,
	},
	{
		id: 3,
		text: '일정 관리 앱 만들어 보기',
		checked: false,
	},
];

// function createBulkTodos() {
// 	const array = [];
// 	for (let i = 1; i <= 2500; i++) {
// 		array.push({
// 			id: i,
// 			text: `할일 ${i}`,
// 			checked: false,
// 		});
// 	}
// 	return array;
// }

function App() {
	const [todos, setTodos] = useState(data);

	const nextId = useRef(4);

	const handleInsert = useCallback(
		function (text) {
			const newTodo = {
				id: nextId.current,
				text,
				checked: false,
			};
			setTodos([...todos, newTodo]);
			nextId.current += 1;
		},
		[todos]
	);

	const handleRemove = useCallback(
		function (id) {
			setTodos(todos.filter((todo) => todo.id !== id));
		},
		[todos]
	);

	const handleToggle = useCallback(
		function (id) {
			setTodos(
				todos.map((todo) =>
					todo.id === id ? { ...todo, checked: !todo.checked } : todo
				)
			);
		},
		[todos]
	);

	return (
		<TodoTemplate>
			<TodoInsert onInsert={handleInsert} />
			<TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
		</TodoTemplate>
	);
}

export default App;
