import styles from './styles';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import ItemCard from '../ItemCard/ItemCard';

const ShareItemPreview = ({ classes }) => {
	return (
		<div className={classes.previewContainer}>
			<ItemCard />
		</div>
	);
};

export default withStyles(styles)(ShareItemPreview);
