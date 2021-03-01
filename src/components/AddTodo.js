import { Box, Button, Card, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
	const [textValue, setTextValue] = useState('');

	const handleChange = (event) => {
		setTextValue(event.target.value);
	};

	return (
		<div>
			<Card style={{ width: 500, padding: 20, display: 'flex' }} elevation={4}>
				<Box width='80%'>
					<TextField
						fullWidth='true'
						placeholder='Todo name...'
						value={textValue}
						onChange={handleChange}
					/>
				</Box>
				<Box>
					<Button
						color='primary'
						variant='contained'
						onClick={() => addTodo(textValue)}>
						{' '}
						Add{' '}
					</Button>
				</Box>
			</Card>
		</div>
	);
};

export default AddTodo;
