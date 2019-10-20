import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
// import ShareContainer from './ShareContainer';
import ShareItemForm from '../../components/ShareItemForm';
import ShareItemPreview from '../../components/ShareItemPreview';
// import { Fragment } from 'react';
/* 
  TODO: Create ShareItemFrom and ShareItemPreview in the components dir
  and call them from this file.

  ShareItemForm is the form that our User will use to add a new item 

  When the user is filling ShareItemForm, we will show a preview of 
  this item using the ShareItemPreview. 
  Hint: It should look like any other Item card.

*/

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
