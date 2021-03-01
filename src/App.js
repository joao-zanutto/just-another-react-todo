import { Typography, Container } from '@material-ui/core';
import { useState } from 'react';
import ToolBar from './components/ToolBar';
import TodoList from './components/TodoList';

function App() {
	const [todoList, setTodoList] = useState([]);
	const [idCount, setIdCount] = useState(0);
	const [filterTerm, setFilterTerm] = useState('');

	const incrementId = () => {
		setIdCount(idCount + 1);
	};

	const addTodo = (textValue) => {
		const newTodoList = [...todoList, { id: idCount, name: textValue }];
		incrementId();
		setTodoList(newTodoList);
	};

	const deleteTodo = (id) => {
		const newTodoList = todoList.filter((todo) => todo.id !== id);
		setTodoList(newTodoList);
	};

	return (
		<div className='App'>
			<Container align='center'>
				<Typography variant='h3'> Todo List </Typography>
				<ToolBar addTodo={addTodo} setFilter={setFilterTerm} />
				<TodoList
					todoList={todoList}
					deleteTodo={deleteTodo}
					filterTerm={filterTerm}
				/>
			</Container>
		</div>
	);
}

export default App;
