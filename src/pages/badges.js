import React from 'react';

import BadgesList from '../components/badges-list';
import PageLoading from '../components/page-loading';
import PageError from '../components/page-error';
import {Link} from 'react-router-dom';

import logo from '../img/badge-header.svg';
import './styles/badges.css';

import api from '../api';

class Badges extends React.Component {

	state = {
		loading: true,
		error: null,
		data: undefined
	}

	constructor(props) {
		super(props);
		console.log("Constructor");
		// this.state = {
		// 	data: []
		// };
	}

	render() {
		if(this.state.loading === true && !this.state.data) {
			return <PageLoading />;
		}

		if(this.state.error) {
			return <PageError error={this.state.error} />;
		}

		return(
			<React.Fragment>

				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img
                className="Badges_conf-logo"
                src={logo}
                alt="Conf Logo"
              />
						</div>
					</div>
				</div>

				<div className="Badges__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
					</div>
					<BadgesList badges={this.state.data}/>
					{this.state.loading && 'Loading'}
				</div>
			</React.Fragment>
		)
	}

	componentDidMount() {
		this.fetchData();

		this.intervalId = setInterval(this.fetchData, 5000)
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null});
		try{
			const data = await api.badges.list();
			this.setState({loading: false, data: data});
		} catch(error) {
			this.setState({loading: false, error: error});
		}
	}

	componentDidUpdate(prevProps,prevState) {
		console.log("Did update");
		console.log({
			prevProps,
			prevState
		});
		console.log({
			props: this.props,
			state: this.state
		});
	}

	componentWillUnmount() {
		console.log("Will unmount");

		clearInterval(this.intervalId);
		
	}
}

export default Badges;