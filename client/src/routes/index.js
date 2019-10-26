import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import MenuBar from '../components/MenuBar';
import Home from '../pages/Home';
import Items from '../pages/Items';
import Share from '../pages/Share';
import Profile from '../pages/Profile';
import { ViewerContext } from '../context/ViewerProvider';
import PrivateRoute from '../components/PrivateRoute';

export default () => {
	return (
		<ViewerContext.Consumer>
			{({ viewer }) => {
				if (!viewer) {
					return (
						<Switch>
							<Route exact path="/welcome" component={Home} />
							<Redirect from="*" to="/welcome" />
						</Switch>
					);
				}
				return (
					<Fragment>
						<MenuBar />
						<Switch>
							<PrivateRoute exact path="/items" component={Items} />
							<PrivateRoute exact path="/share" component={Share} />
							<PrivateRoute exact path="/profile" component={Profile} />
							<PrivateRoute exact path="/profile/:userid" component={Profile} />

							<Redirect from="*" to="/items" />
						</Switch>
					</Fragment>
				);
			}}
		</ViewerContext.Consumer>
	);
};
