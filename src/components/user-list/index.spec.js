import React from 'react';
import { shallow } from 'enzyme';
import UserList from '.';
import moment from 'moment';
import UserListRow from '../user-list-row';
import { NonIdealState } from '@blueprintjs/core';

const users = [
  {
    forename: 'Peter',
    surname: 'Swift',
    nationality: 'British',
    dob: moment().subtract(22, 'year').subtract(4, 'month').subtract(21, 'day'),
  },
];

const fourUsers = [
  {
    forename: 'Peter',
    surname: 'Swift',
    nationality: 'British',
    dob: moment().subtract(22, 'year').subtract(4, 'month').subtract(21, 'day'),
  },
  {
    forename: 'Phil',
    surname: 'Pots',
    nationality: 'British',
    dob: moment().subtract(34, 'year').subtract(4, 'month').subtract(21, 'day'),
  },
  {
    forename: 'Graham',
    surname: 'HustonWeHaveLiftOff',
    nationality: 'British',
    dob: moment().subtract(44, 'year').subtract(4, 'month').subtract(21, 'day'),
  },
  {
    forename: 'Tom',
    surname: 'Clay',
    nationality: 'British',
    dob: moment().subtract(19, 'year').subtract(4, 'month').subtract(21, 'day'),
  },
];

test('UserList renders single UserListRow', () => {
  const component = shallow(
    <UserList users={users} />
  );

  expect(component.find(UserListRow).length).toEqual(1);
});

test('UserList renders no items', () => {

  const component = shallow(
    <UserList users={[]}/>
  );

  expect(component.find(NonIdealState).length).toEqual(1);
  expect(component.find(UserListRow).length).toEqual(0);
});

test('UserList renders four UserListRows', () => {
  const component = shallow(
    <UserList users={fourUsers} />
  );

  expect(component.find(UserListRow).length).toEqual(4);
});
