import React from 'react';
import TimeFromNow from '.';
import { shallow } from 'enzyme';
import moment from 'moment';

test('YearsFromNow renders with exact years', () => {
  const component = shallow(
    <TimeFromNow time={moment().subtract(18, 'years')}/>
  );

  expect(component.text()).toEqual('18');
});

test('YearsFromNow renders with rounded down years', () => {
  const component = shallow(
    <TimeFromNow time={moment().subtract(18, 'years').subtract(7, 'months')}/>
  );

  expect(component.text()).toEqual('18');
});
