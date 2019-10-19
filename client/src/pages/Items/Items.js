import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemsContainer from './ItemsContainer';
import ItemsGrid from '../../components/ItemsGrid/index';

const Items = ({ classes, items }) => {
	return (
		<div className={classes.itemsPageBody}>
			<p>
				<ItemsGrid items={items} />
			</p>
		</div>
	);
};

export default withStyles(styles)(Items);
