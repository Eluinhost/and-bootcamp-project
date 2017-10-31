import React from 'react';
import UserDetails from '.';
import { shallow } from 'enzyme';

test('UserDetails renders without crashing', () => {
  const user = {
    forename: 'Peter',
    surname: 'Swift',
  };

  const component = shallow(
    <UserDetails user={user} />
  );

  expect(component.find('.user-full-name').text()).toEqual('Peter Swift');
});
