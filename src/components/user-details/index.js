import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import YearsFromNow from '../years-from-now';

export default class UserDetails extends React.PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      forename: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      nationality: PropTypes.string.isRequired,
      dob: PropTypes.instanceOf(moment).isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div>
        <h1 className="user-full-name">{this.props.user.forename} {this.props.user.surname}</h1>
        <div className="user-nationality">{this.props.user.nationality}</div>
        <div className="user-age"><YearsFromNow time={this.props.user.dob}/> years old</div>
      </div>
    )
  }
}
