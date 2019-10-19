import styles from './styles';
import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

export default function ItemCard ({ item }) {
	return (
		<Container maxWidth="xs">
			<Card>
				<div className="item-image">{item.imageurl}</div>
				<div>
					<div>Creator avatar</div>
					<div>
						<div>Created by</div>
						<div>when was created</div>
					</div>
				</div>
				<div>
					<h2>{item.title}</h2>
                    <div>
                        
						{
                            // TODO make it loop through and check if is the last item to not return ','
						(item.tags).map(tag=> (
						    // (key !== ((item.tags).length))-1 ? tag.title + ', ' :
						    tag.title +', '
						)
						)
						}
					</div>
					<div>{item.description}</div>
				</div>
				<div>
					<button>BORROW</button>
				</div>
			</Card>
		</Container>
	);
}
