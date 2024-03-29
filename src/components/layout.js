import React from 'react';

import Navbar from './navbar';

function Layout(props) {
	const children = props.children;
	return(
		<React.Fragment>
			<Navbar />
			{ children }
		</React.Fragment>
	);
}

export default Layout;