import React from 'react';
import UserDetails from '.';
import { shallow } from 'enzyme';

test('UserDetails renders without crashing', () => {
    const user = {
        id: '',
        forename: 'Peter',
        surname: '',
        dob: '',
        nationality: '',
    };

    const details = shallow(
        <UserDetails user={user} />
    );
    //
    // expect(details.text()).toEqual('Off');
    //
    // checkbox.find('input').simulate('change');
    //
    // expect(checkbox.text()).toEqual('On');
});