import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import MenuBar from '../components/MenuBar';
import Home from '../pages/Home';
import Items from '../pages/Items';
import Share from '../pages/Share';
import Profile from '../pages/Profile';

export default () => {
	return (
		<Fragment>
			<MenuBar />
			<Switch>
				<Route exact path="/welcome" component={Home} />
				<Route path="/items" component={Items} />
				<Route path="/share" component={Share} />
				<Route path="/profile" component={Profile} />
				<Route path="/profile/:userid" component={Profile} />
				<Redirect from="*" to="/items" />
			</Switch>
		</Fragment>
	);
};
