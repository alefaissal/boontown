import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
// import ItemsContainer from './ItemsContainer';
import ItemsGrid from '../../components/ItemsGrid';

const Items = ({ classes, items }) => {
	return (
		<div className={classes.itemsPageBody}>
			<div>
				<ItemsGrid items={items} />
			</div>
		</div>
	);
};

export default withStyles(styles)(Items);
