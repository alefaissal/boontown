import React from 'react';
import styles from './styles';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import boomtown from '../../images/boomtown.svg';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import MenuBarIcon from '../MenuBarIcon';

const MenuBar = ({ classes }) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" color="inherit" aria-label="menu">
					<img src={boomtown} />
				</IconButton>
				<Fab variant="extended" aria-label="delete" className={classes.fab}>
					<Icon>add_circle</Icon>
					SHARE SOMETHING
				</Fab>
				<MenuBarIcon />
			</Toolbar>
		</AppBar>
	);
};

export default withStyles(styles)(MenuBar);
