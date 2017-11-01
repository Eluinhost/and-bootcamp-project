import React from 'react';
import { shallow } from 'enzyme';
import UserListRow from '.';
import moment from 'moment';

const user =
{
  forename: 'Peter',
  surname: 'Swift',
  nationality: 'British',
  dob: moment().subtract(22, 'year').subtract(4, 'month').subtract(21, 'day'),
};

test('UserListRow renders forename and surname "Peter Swift"', () => {
  const component = shallow(
    <UserListRow user={user} />
  );

  expect(component.find('.user-list-row').text()).toEqual('Peter Swift');
});
