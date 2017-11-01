import * as React from 'react';
import UserDetailsPropTypes from '../../prop-types/UserDetailsPropTypes';
import UserDetails from '../user-details';
import { Dialog } from '@blueprintjs/core';

export default class UserListRow extends React.PureComponent {
  state = {
    isOpen: false,
  };

  static propTypes = {
    user: UserDetailsPropTypes.isRequired,
  };

  onClick = () => this.setState({ isOpen: true });
  onDialogClose = () => this.setState({ isOpen: false });

  render() {
    const fullName = this.props.user.forename + ' ' + this.props.user.surname;

    return (
      <div className="user-list-row" onClick={this.onClick}>
        <span className="user-list-row--name">{fullName}</span>
        <Dialog isOpen={this.state.isOpen} title="User Details" onClose={this.onDialogClose} className="pt-dark">
          <div className="pt-dialog-body">
            <UserDetails user={this.props.user}/>
          </div>
        </Dialog>
      </div>
    )
  }
}
