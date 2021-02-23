import { Box, Card, IconButton, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const styles = {
	Card: {
		height: 60,
		padding: 10,
		width: 500,
		display: 'flex',
		alignItems: 'center',
		margin: 20,
	},
};

const Todo = ({ id, children, del }) => {
	return (
		<Card elevation={4} style={styles.Card}>
			<Box align='left' width='90%'>
				<Typography>
					#{id} - {children}
				</Typography>
			</Box>
			<Box align='right'>
				<IconButton onClick={() => del(id)} color='secondary'>
					<Delete />
				</IconButton>
			</Box>
		</Card>
	);
};

export default Todo;