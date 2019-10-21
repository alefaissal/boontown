const styles = theme => ({
	marginTop          : {
		height : '10vh'
	},
	useBox             : {
		maxWidth      : '90vw',
		marginLeft    : '5vw',
		background    : 'white',
		paddingTop    : '2.5vh',
		paddingLeft   : '3vw',
		paddingBottom : '2.5vh'
	},
	itemsBox           : {
		maxWidth   : '90vw',
		marginLeft : '5vw',
		marginTop  : '10vh',
		background : 'white'
	},
	itemsStatus        : {
		display  : 'flex',
		fontSize : '1.5em'
	},
	userImage          : {
		height       : 60,
		width        : 60,
		borderRadius : 50
	},
	userNameContainer  : {
		fontSize   : '3em',
		color      : 'grey',
		display    : 'flex',
		alignItems : 'center',
		height     : '2em'
	},
	userFullname       : {
		marginLeft : 20
	},
	itemsBorrowed      : {
		paddingLeft : 30,
		margin      : 0
	},
	itemsShared        : {
		margin : 0
	},
	userBio            : {
		fontSize : '1em',
		height   : '7em',
		width    : '30vw'
	},
	sharedContainer    : {
		background : 'black'
	},
	sharedItemsTitle   : {
		fontSize   : '3em',
		color      : '#F9A825',
		background : 'black'
	},
	itemsGridContainer : {
		marginLeft : '-3.5vw',
		background : 'black'
	},
	profileContainer   : {
		background : 'black'
		// marginTop  : '-10vh'
	}
});

export default styles;
