import { Button, Card, CardContent, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import LoopIcon from '@material-ui/icons/Loop';

const ToolBar = ({ addTodo, setFilter }) => {
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
			<Card elevation={4} style={{ width: 800 }}>
				<CardContent>
					<Grid container spacing={1}>
						<Grid item xs={10}>
							<TextField
								fullWidth
								placeholder={behavior === 'add' ? 'Add todo' : 'Filter todos'}
								value={textValue}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={1}>
							{behavior === 'add' ? (
								<Button
									color='primary'
									variant='contained'
									onClick={() => addTodo(textValue)}>
									<AddIcon color='inherit' />
								</Button>
							) : (
								<Button
									color='secondary'
									variant='contained'
									onClick={() => setFilter(textValue)}>
									<SearchIcon />
								</Button>
							)}
						</Grid>
						<Grid item xs={1}>
							<Button variant='contained' onClick={toggle}>
								<LoopIcon />
							</Button>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
};

export default ToolBar;
