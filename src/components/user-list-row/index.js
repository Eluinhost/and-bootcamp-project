import * as React from 'react';
import UserDetailsPropTypes from '../../prop-types/UserDetailsPropTypes';
import PropTypes from 'prop-types'
import UserDetails from '../user-details';
import { NonIdealState } from '@blueprintjs/core';


export default class UserListRow extends React.PureComponent {
  static propTypes = {
    user: UserDetailsPropTypes.isRequired,
  };

  render() {

    const fullName = this.props.user.forename + ' ' + this.props.user.surname;

    return (
      <div className = "user-list-row">
        {fullName}
      </div>
    )
  }
}
