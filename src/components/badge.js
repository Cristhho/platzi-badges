import React from 'react';

import logo from '../img/badge-header.svg';
import './styles/badge.css';
import Gravatar from './gravatar';

class Badge extends React.Component {
	render() {
		return(
			<div className="Badge">
				<div className="Badge__header">
					<img src={logo} alt="Logo de la conferencia"/>
				</div>
				<div className="Badge__section-name">
					<Gravatar className="Badge__avatar" email={this.props.email} alt="avatar"/>
					<h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
				</div>
				<div className="Badge__section-info">
					<h3>{this.props.job}</h3>
					<div>@{this.props.twitter}</div>
				</div>
				<div className="Badge__footer">#platziconf</div>
			</div>
		);
	}
}

export default Badge;