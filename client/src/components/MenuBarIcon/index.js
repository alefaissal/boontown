import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Icon from '@material-ui/core/Icon';
import { NavLink } from 'react-router-dom';
import styles from './styles';
import { withStyles } from '@material-ui/core';

const ITEM_HEIGHT = 48;

const MenuBarIcon = ({ classes }) => {
	const [
		anchorEl,
		setAnchorEl
	] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="long-menu"
				anchorEl={anchorEl}
				keepMounted
				open={open}
				onClose={handleClose}
				PaperProps={{
					style : {
						maxHeight : ITEM_HEIGHT * 4.5,
						width     : 200
					}
				}}
			>
				<NavLink to="/profile">
					<MenuItem onClick={handleClose}>
						<Icon className={classes.iconMenuBar}>fingerprint</Icon> YOUR PROFILE
					</MenuItem>
				</NavLink>
				<NavLink to="/welcome">
					<MenuItem onClick={handleClose}>
						<Icon className={classes.iconMenuBar}>power_settings_new</Icon> LOGOUT
					</MenuItem>
				</NavLink>
			</Menu>
		</div>
	);
};

export default withStyles(styles)(MenuBarIcon);
