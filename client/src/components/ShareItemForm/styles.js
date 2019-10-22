const styles = theme => ({
	shareFormContainer : {
		width : '30vw'
	},
	formContainer      : {
		display  : 'flex',
		flexWrap : 'wrap',
		width    : '100%'
	},
	formTitle          : {
		fontSize : '4.5em',
		width    : '100%'
	},
	textField          : {
		marginLeft  : theme.spacing(0),
		marginRight : theme.spacing(0),
		width       : '100%'
	},

	dense              : {
		marginTop : 19
	},
	menu               : {
		width : 200
	},
	button             : {
		margin    : theme.spacing(0),
		marginTop : theme.spacing(4)
	},
	input              : {
		display : 'none'
	},
	tagsList           : {
		fontSize     : '1.2em',
		paddingRight : 20,
		marginBottom : 30
	},
	tagTitle           : {
		paddingLeft  : 5,
		marginBottom : 20
	}
});

export default styles;
