import React, { Component } from 'react';
import Items from './Items';
// import FullScreenLoader from '../../components/FullScreenLoader';
import { Query } from 'react-apollo';
import { ALL_ITEMS_QUERY } from '../../apollo/queries';
import Loading from '../../components/Loading';

class ItemsContainer extends Component {
	render () {
		return (
			<Query query={ALL_ITEMS_QUERY} variables={{ filter: 2 }}>
				{({ loading, error, data }) => {
					if (loading) return <Loading />;
					if (error) return `Error: ${error}`;
					if (data) {
						return <Items items={data.items} />;
					}
				}}
			</Query>
		);
	}
}

export default ItemsContainer;
