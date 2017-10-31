import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class YearsFromNow extends React.PureComponent {
  static propTypes = {
    time: PropTypes.instanceOf(moment).isRequired,
  };

  render() {
    const years = moment().diff(this.props.time, 'years');

    return (
      <span>{years}</span>
    )
  }
}
