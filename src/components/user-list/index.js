import * as React from 'react';
import UserDetailsPropTypes from '../../prop-types/UserDetailsPropTypes';
import PropTypes from 'prop-types'
import UserListRow from '../user-list-row';
import { NonIdealState } from '@blueprintjs/core';

export default class UserList extends React.PureComponent {
  static propTypes = {
    users: PropTypes.arrayOf(UserDetailsPropTypes.isRequired).isRequired,
  };

  render() {
    if (this.props.users.length === 0) {
      return (
        <NonIdealState visual="geo-search" title="No users found"/>
      )
    }

    const items = this.props.users.map((user, index) => (
      <div className="pt-card" key={index}>
        <UserListRow user={user}/>
      </div>
    ));

    return (
      <div>
        {items}
      </div>
    )
  }
}
