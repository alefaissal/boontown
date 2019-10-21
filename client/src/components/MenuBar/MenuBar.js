import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import boomtown from '../../images/boomtown.svg';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import MenuBarIcon from '../MenuBarIcon';
import { NavLink } from 'react-router-dom';

const MenuBar = ({ classes }) => {
	return (
		<AppBar className={classes.navMenuContainer} position="static">
			<Toolbar className={classes.toolbarMain}>
				<NavLink to="/items">
					<IconButton edge="start" color="inherit" aria-label="menu">
						<img className={classes.iconImage} src={boomtown} alt="icon" />
					</IconButton>
				</NavLink>
				<NavLink to="/share">
					<div className={classes.navButtonAndMenu}>
						<Fab variant="extended" aria-label="delete" className={(classes.fab, classes.shareButton)}>
							<Icon className={classes.iconPlusShare}>add_circle</Icon>
							SHARE SOMETHING
						</Fab>
						<MenuBarIcon />
					</div>
				</NavLink>
			</Toolbar>
		</AppBar>
	);
};

export default withStyles(styles)(MenuBar);
