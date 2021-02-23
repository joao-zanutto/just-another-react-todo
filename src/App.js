import { Typography, Container } from '@material-ui/core';
import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
	const [todoList, setTodoList] = useState([]);
	const [textValue, setTextValue] = useState('');
	const [idCount, setIdCount] = useState(0);

	const incrementId = () => {
		setIdCount(idCount + 1);
	};

	const addTodo = () => {
		const newTodoList = [...todoList, { id: idCount, name: textValue }];
		incrementId();
		setTodoList(newTodoList);
	};

	const handleChange = (event) => {
		setTextValue(event.target.value);
	};

	const deleteTodo = (id) => {
		const newTodoList = todoList.filter((todo) => todo.id !== id);
		setTodoList(newTodoList);
	};

	return (
		<div className='App'>
			<Container align='center'>
				<Typography variant='h3'> Todo List </Typography>
				<AddTodo
					addTodo={addTodo}
					handleChange={handleChange}
					textValue={textValue}
				/>
				<TodoList todoList={todoList} deleteTodo={deleteTodo} />
			</Container>
		</div>
	);
}

export default App;
