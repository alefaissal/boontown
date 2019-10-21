import styles from './styles';
import React from 'react';
// import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const ItemCard = ({ classes, item }) => {
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia className={classes.media} image={item.imageurl} title="Item image" />
				<CardContent className={classes.cardContent}>
					<Typography className={classes.itemowner} variant="body2" color="textSecondary" component="p">
						<NavLink className={classes.itemownerDetails}>
							<div className={classes.itemownerAvatar}>
								<CardMedia
									className={classes.itemownerAvatarImg}
									image="https://icon-library.net/images/atari-icon/atari-icon-2.jpg"
									title="Avatar image"
								/>
							</div>

							<div className={classes.iteownerFullName}>
								{item.itemowner.fullname}
								<div className={classes.datePosted}>XX days ago</div>
							</div>
						</NavLink>
					</Typography>
					<div className={classes.itemsDetails}>
						<Typography gutterBottom variant="h5" component="h2">
							{item.title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{item.tags.map((tag, key) => (key !== item.tags.length - 1 ? tag.title + ', ' : tag.title))}
						</Typography>

						<Typography className={classes.itemDescription} variant="body2" color="textSecondary" component="p">
							{item.description}
						</Typography>
					</div>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button variant="outlined" className={classes.button}>
					BORROW
				</Button>
			</CardActions>
		</Card>
	);
};

ItemCard.defaultProps = {
	item : {
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
	}
};

export default withStyles(styles)(ItemCard);
