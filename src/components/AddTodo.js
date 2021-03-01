import { Button, Card, CardContent, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
	const [textValue, setTextValue] = useState('');
	const [behavior, setBehavior] = useState('add');

	const toggle = () => {
		behavior === 'add' ? setBehavior('search') : setBehavior('add');
	};

	const handleChange = (event) => {
		setTextValue(event.target.value);
	};

	return (
		<div>
			<Card elevation={4} style={{ width: 600 }}>
				<CardContent>
					<Grid container spacing={2}>
						<Grid item xs={8}>
							<TextField
								fullWidth
								placeholder='Todo name...'
								value={textValue}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={2}>
							<Button
								color='primary'
								variant='contained'
								onClick={() => addTodo(textValue)}>
								{behavior}
							</Button>
						</Grid>
						<Grid item xs={2}>
							<Button color='secondary' variant='contained' onClick={toggle}>
								Toggle
							</Button>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
};

export default AddTodo;
