import React from 'react';
import {Link} from 'react-router-dom';
import Gravatar from './gravatar';

import './styles/badges-list.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.PureComponent {

  state = {
    query: ''
  }

  handleFilterChange = (event) => {
    this.setState({query: event.target.value})
  }

	render() {
    const filteredBadges = this.props.badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(this.state.query.toLowerCase());
    });
    if(filteredBadges === 0) {
      return(
        <div>
          <h3>No se encontro ningún bagde</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
		return(
			<div className="BadgesList">
        <div className="form-group">
          <label>Filter badges</label>
          <input
            type="text"
            className="form-control"
            value={this.state.query}
            onChange={(e) => this.handleFilterChange(e)}/>
        </div>
        <ul className="list-unstyled">
          {filteredBadges.map(badge => {
            return (
              <li key={badge.id}>
                <Link
                className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
		)
	}
}

export default BadgesList;