import * as React from 'react';
import YearsFromNow from '../years-from-now';
import UserDetailsPropTypes from '../../prop-types/UserDetailsPropTypes';

export default class UserDetails extends React.PureComponent {
  static propTypes = {
    user: UserDetailsPropTypes.isRequired,
  };

  render() {
    return (
      <div className="pt-card">
        <h1 className="user-full-name">{this.props.user.forename} {this.props.user.surname}</h1>
        <div className="user-nationality">{this.props.user.nationality}</div>
        <div className="user-age"><YearsFromNow time={this.props.user.dob}/> years old</div>
      </div>
    )
  }
}
