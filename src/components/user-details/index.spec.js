import React from 'react';
import UserDetails from '.';
import { shallow, mount } from 'enzyme';
import moment from 'moment';

const user = {
  forename: 'Peter',
  surname: 'Swift',
  nationality: 'British',
  dob: moment().subtract(22, 'year').subtract(4, 'month').subtract(21, 'day'),
};

test('UserDetails renders full name', () => {
  const component = shallow(
    <UserDetails user={user} />
  );

  expect(component.find('.user-full-name').text()).toEqual('Peter Swift');
});

test('UserDetails renders nationality', () => {
  const component = shallow(
    <UserDetails user={user} />
  );

  expect(component.find('.user-nationality').text()).toEqual(`Nationality: ${user.nationality}`);
});

test('UserDetails renders age', () => {
  const component = mount(
    <UserDetails user={user} />
  );

  expect(component.find('.user-age').text()).toEqual(`Age: 22 years old`);
});
