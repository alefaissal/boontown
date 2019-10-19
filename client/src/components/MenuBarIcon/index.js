import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Icon from '@material-ui/core/Icon';

const ITEM_HEIGHT = 48;

export default function MenuBarIcon () {
	const [ anchorEl, setAnchorEl ] = React.useState(null);
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
				<MenuItem onClick={handleClose}>
					<Icon>fingerprint</Icon> YOUR PROFILE
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Icon>power_settings_new</Icon> LOGOUT
				</MenuItem>
			</Menu>
		</div>
	);
}
