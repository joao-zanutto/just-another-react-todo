import {
	Button,
	Card,
	CardContent,
	Grid,
	TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';

const ToolBar = ({ addTodo, setFilter }) => {
	const [textValue, setTextValue] = useState('');
	const [searchTerm, setSearchTerm] = useState('');

	const handleChangeTodo = (event) => {
		setTextValue('1');
	};

	const handleChangeSearch = (event) => {
		setSearchTerm(event.target.value);
		setFilter(event.target.value);
	};

	return (
		<div>
			<Card elevation={4} style={{ width: 800 }}>
				<CardContent>
					<Grid container spacing={1}>
						<Grid item xs={11}>
							<TextField
								fullWidth
								placeholder={'Add todo'}
								value={textValue}
								onChange={handleChangeTodo}
								onKeyPress={(e) => {
									if (e.key === 'Enter') addTodo(textValue);
								}}
							/>
						</Grid>
						<Grid item xs={1}>
							<Button
								color='primary'
								variant='contained'
								onClick={() => addTodo(textValue)}>
								<AddIcon color='inherit' />
							</Button>
						</Grid>
						<Grid item xs={8}>
							<TextField
								fullWidth
								placeholder={'Filter todos'}
								value={searchTerm}
								onChange={handleChangeSearch}
							/>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
};

export default ToolBar;
