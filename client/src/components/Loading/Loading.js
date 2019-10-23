import styles from './styles';
import React from 'react';
import { withStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = ({ classes }) => {
	return (
		<React.Fragment>
			<div className={classes.loadingContainer}>
				<div>
					<CircularProgress className={classes.progress} />
					<div>"For it is giving that we receive."</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default withStyles(styles)(Loading);
