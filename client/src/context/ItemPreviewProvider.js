import React, { createContext, Component } from 'react';

export const ItemPreviewContext = createContext();

class ItemPreviewProvider extends Component {
	constructor (props) {
		super(props);
		this.state = {
			item : {
				title       : 'Item Title',
				description : 'Description goes here',
				date        : new Date(),
				tags        : [],
				imageurl    : 'https://pixelsoftek.in/wp-content/uploads/2018/09/demo-image.jpg',
				itemowner   : {
					email : 'test@test.com'
				}
			}
		};
	}

	updatePreview = item => {
		this.setState({ item: { ...this.state.item, ...item } });
	};

	resetPreview = () => {
		this.setState({
			item : {
				title       : 'Item Title',
				description : 'Description goes here',
				date        : new Date(),
				tags        : [],
				imageurl    : 'https://pixelsoftek.in/wp-content/uploads/2018/09/demo-image.jpg',
				itemowner   : {
					email : 'test@test.com'
				}
			}
		});
	};

	render () {
		return (
			<ItemPreviewContext.Provider
				value={{
					state         : this.state,
					updatePreview : this.updatePreview,
					resetPreview  : this.resetPreview
				}}
			>
				{this.props.children}
			</ItemPreviewContext.Provider>
		);
	}
}

export default ItemPreviewProvider;
