import moment from 'moment';
import PropTypes from 'prop-types';

const UserDetailsPropTypes = PropTypes.shape({
  forename: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  dob: PropTypes.instanceOf(moment).isRequired,
});

export default UserDetailsPropTypes;
