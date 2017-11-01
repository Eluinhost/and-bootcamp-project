import moment from 'moment';

export const fetchUsers = () =>
  fetch('/api/users')
    .then(response => response.json())
    .then(json => json.map(user => ({
      ...user,
      dob: moment(user.dob),
    })));

