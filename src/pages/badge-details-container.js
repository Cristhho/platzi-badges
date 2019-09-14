import React, { Component } from 'react';

import PageLoading from '../components/page-loading';
import PageError from '../components/page-error';
import api from '../api';
import BadgeDetails from './badge-details';

export default class BadgeDetailsContainer extends Component {

	state = {
		loading: true,
		error: null,
		data: undefined,
		modalIsOpen: false
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null});

		try{
			const data = await api.badges.read(this.props.match.params.badgeId);
			this.setState({loading: false, data: data});
		} catch(error) {
			this.setState({loading: false, error: error});
		}
	}

	handleOpenModal = e => {
		this.setState({modalIsOpen: true})
	}

	handleCloseModal = e => {
		this.setState({modalIsOpen: false})
	}

	handleDeleteBadge = async e => {
		this.setState({loading: true, error: null});
		try {
			await api.badges.remove(this.props.match.params.badgeId);
			this.props.history.push('/')
		} catch(error) {
			this.setState({loading: false, error: error});
		}
	}

	render() {
		if(this.state.loading) {
			return <PageLoading />
		}

		if (this.state.error) {
			return <PageError error={this.state.error}/>
		}

		const badge = this.state.data;

		return (
			<BadgeDetails
				badge={badge}
				isOpen={this.state.modalIsOpen}
				onOpenModal={this.handleOpenModal}
				onCloseModal={this.handleCloseModal}
				onDeleteBadge={this.handleDeleteBadge}/>
		);
	}
}
