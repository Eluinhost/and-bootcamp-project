import * as React from 'react';
import PropTypes from 'prop-types';

export default class UserDetails extends React.PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      forename: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div>
        <h1 className="user-full-name">{this.props.user.forename} {this.props.user.surname}</h1>
      </div>
    )
  }
}
