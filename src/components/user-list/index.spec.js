import React from 'react';
import { shallow } from 'enzyme';
import UserList from '.';
import moment from 'moment';
import UserDetails from '../user-details';
import { NonIdealState } from '@blueprintjs/core';

test('UserList renders single item', () => {
  const users = [
    {
      forename: 'Peter',
      surname: 'Swift',
      nationality: 'British',
      dob: moment().subtract(22, 'year').subtract(4, 'month').subtract(21, 'day'),
    },
  ];

  const component = shallow(
    <UserList users={users}/>
  );

  expect(component.find(UserDetails).length).toEqual(1);
});

test('UserList renders no items', () => {

  const component = shallow(
    <UserList users={[]}/>
  );

  expect(component.find(NonIdealState).length).toEqual(1);
  expect(component.find(UserDetails).length).toEqual(0);
});
