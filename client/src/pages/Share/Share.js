import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
// import ShareContainer from './ShareContainer';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';

const Share = ({ classes, tags }) => {
	return (
		<div className={classes.shareContainer}>
			<div className={classes.previewContainer}>
				<ShareItemPreview />
			</div>

			<div className={classes.formContainer}>
				<ShareItemForm tags={tags} />
			</div>
		</div>
	);
};

export default withStyles(styles)(Share);
