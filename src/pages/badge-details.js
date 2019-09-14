import React from 'react';
import {Link} from 'react-router-dom';

import confLogo from '../img/platziconf-logo.svg';
import Badge from '../components/badge';
import DeleteBadgeModal from '../components/delete-badge-modal';

const badgeDetails = (props) => (
	<div>
		<div className="BadgeDetails__hero">
			<div className="container">
				<div className="row">
					<div className="col-6">
						<img src={confLogo} alt="logo de la conferencia"/>
					</div>
					<div className="col-6 BadgeDetails__hero-attendant-name">
						<h1>{props.badge.firstName} {props.badge.lastName}</h1>
					</div>
				</div>
			</div>
		</div>
		<div className="container">
			<div className="row">
				<div className="col-6">
					<Badge 
					firstName={props.badge.firstName}
					lastName={props.badge.lastName}
					email={props.badge.email}
					job={props.badge.jobTitle}
					twitter={props.badge.twitter}/>
				</div>
				<div className="col-6">
					<h2>Actions</h2>
					<div><Link className="btn btn-primary mb-4" to={`/badge/${props.badge.id}/edit`}>Edit</Link></div>
					<div>
						<button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
						<DeleteBadgeModal
							isOpen={props.isOpen}
							onClose={props.onCloseModal}
							onDeleteBadge={props.onDeleteBadge}/>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default badgeDetails;