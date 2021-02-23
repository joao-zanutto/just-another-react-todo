import { Box, Button, Card, TextField } from '@material-ui/core';
import React from 'react';

const AddTodo = ({ textValue, handleChange, addTodo }) => {
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
					<Button color='primary' variant='contained' onClick={addTodo}>
						{' '}
						Add{' '}
					</Button>
				</Box>
			</Card>
		</div>
	);
};

export default AddTodo;
