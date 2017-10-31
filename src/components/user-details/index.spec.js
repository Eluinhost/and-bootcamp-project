import React from 'react';
import UserDetails from '.';
import { shallow } from 'enzyme';

const user = {
  forename: 'Peter',
  surname: 'Swift',
  nationality: 'British',
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

  expect(component.find('.user-nationality').text()).toEqual(user.nationality);
});

