import {
	Card,
	CardContent,
	Grid,
	IconButton,
	Typography,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';

const styles = {
	Card: {
		height: 75,
		margin: 40,
		width: 650,
	},
};

const Todo = ({ id, children, del }) => {
	return (
		<Card elevation={4} style={styles.Card}>
			<CardContent>
				<Grid container>
					<Grid item xs={10} align='left'>
						<Typography>
							#{id} - {children}
						</Typography>
					</Grid>

					<Grid item>
						<IconButton>
							<EditIcon />
						</IconButton>

						<IconButton onClick={() => del(id)} color='secondary'>
							<Delete />
						</IconButton>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Todo;
