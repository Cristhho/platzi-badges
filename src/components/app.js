import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import BadgeNew from '../pages/badge-new';
import Badges from '../pages/badges';
import BadgeEdit from '../pages/badge-edit';
import Layout from './layout';
import NotFound from '../pages/not-found';

function App() {
	return(
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					<Route exact path="/badges/:badgeId/edit" component={BadgeEdit} /> 
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;