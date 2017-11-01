import React from 'react';
import { shallow } from 'enzyme';
import UserListRow from '.';
import moment from 'moment';
import { Dialog } from '@blueprintjs/core';

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

  expect(component.find('.user-list-row--name').text()).toEqual('Peter Swift');
});

test('UserListRow dialog closed on default', () => {
  const component = shallow(
    <UserListRow user={user} />
  );

  expect(component.state().isOpen).toEqual(false);
  expect(component.find(Dialog).length).toEqual(1);
  expect(component.find(Dialog).props().isOpen).toEqual(false);
});

test('UserListRow dialog opens on click', () => {
  const component = shallow(
    <UserListRow user={user} />
  );

  component.simulate('click');

  expect(component.state().isOpen).toEqual(true);
  expect(component.find(Dialog).length).toEqual(1);
  expect(component.find(Dialog).props().isOpen).toEqual(true);
});

test('UserListRow dialog closes on close', () => {
  const component = shallow(
    <UserListRow user={user} />
  );

  component.instance().onDialogClose();

  expect(component.state().isOpen).toEqual(false);
  expect(component.find(Dialog).length).toEqual(1);
  expect(component.find(Dialog).props().isOpen).toEqual(false);
  expect(component.find(Dialog).props().onClose).toEqual(component.instance().onDialogClose);
});
