import styles from './styles';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import ItemCard from '../ItemCard/ItemCard';

class ShareItemPreview extends Component {
	constructor (classes) {
		super(classes);
		this.state = {
			imageurl    : 'https://pixelsoftek.in/wp-content/uploads/2018/09/demo-image.jpg',
			itemowner   : {
				fullname : 'Name here'
			},
			date        : 'date here',
			title       : 'Item Title',
			tags        : [
				{ id: 0, title: 'Tags here' },
				{ id: 1, title: 'Tags here' },
				{ id: 2, title: 'Tags here' },
				{ id: 3, title: 'Tags here' }
			],
			description : 'Description goes here'
		};
		this.classes = classes.classes;
	}

	render () {
		return (
			<div className={this.classes.previewContainer}>
				<ItemCard item={this.state} />
			</div>
		);
	}
}

export default withStyles(styles)(ShareItemPreview);
