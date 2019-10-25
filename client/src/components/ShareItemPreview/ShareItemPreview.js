import styles from './styles';
import React from 'react';
import { withStyles } from '@material-ui/core';
import ItemCard from '../ItemCard/ItemCard';
import { ItemPreviewContext } from '../../context/ItemPreviewProvider';

const ShareItemPreview = ({ classes }) => {
	return (
		<ItemPreviewContext.Consumer>
			{({ state }) => {
				console.log(state.item);
				return (
					<div className={classes.previewContainer}>
						<ItemCard item={state.item} />
					</div>
				);
			}}
		</ItemPreviewContext.Consumer>
	);
};

export default withStyles(styles)(ShareItemPreview);
