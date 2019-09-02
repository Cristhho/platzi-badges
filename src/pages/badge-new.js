import React from 'react';

import Badge from '../components/badge';
import BadgeForm from '../components/badge-form';
import logo from '../img/platziconf-logo.svg';
import api from '../api';
import PageLoading from '../components/page-loading';

class BadgeNew extends React.Component {

	state = {
		loading: false,
		error: null,
		form: {
			firstName: '',
			lastName: '',
			email: '',
			jobTitle: '',
			twitter: ''
		}
	};

	handleChange = e => {
		// const nextForm = this.state.form;
		// nextForm[e.target.name]: e.target.value;
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value
			}
		});
	};

	handleSubmit = async e => {
		e.preventDefault();
		this.setState({loading: true});
		try{
			await api.badges.create(this.state.form);
			this.setState({loading: false});
			this.props.history.push('/');
		} catch(error) {
			this.setState({
				loading: false,
				error: error
			});
		}
	}

	render() {
		if(this.state.loading) {
			return(
				<PageLoading />
			);
		}
		return(
			<React.Fragment>
				<section className="BadgeNew__hero">
					<img className="BadgeNew__hero-image img-fluid" src={logo} alt="logo" />
				</section>
				<section className="container">
					<div className="row">
						<div className="col-6">
							<Badge
								firstName={this.state.form.firstName || 'First Name'}
								lastName={this.state.form.lastName || 'Last Name'}
								avatarUrl="https://www.gravatar.com/avatar?d=identicon"
								job={this.state.form.jobTitle || 'Job'}
								email={this.state.form.email || 'email@domain.com'}
								twitter={this.state.form.twitter || 'twitter'}/>
						</div>
						<div className="col-6">
						<h1>New Attendant</h1>
							<BadgeForm
								onChange={this.handleChange}
								onSubmit={this.handleSubmit}
								formValues={this.state.form}
								error={this.state.error} />
						</div>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default BadgeNew;