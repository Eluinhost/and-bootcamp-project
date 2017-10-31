import React, { Component } from 'react';
import './App.css';
import UserList from './components/user-list';
import moment from 'moment';

const user = {
  forename: 'Peter',
  surname: 'Swift',
  nationality: 'British',
  dob: moment().subtract(22, 'year').subtract(4, 'month').subtract(21, 'day'),
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserList users={[user]}/>
      </div>
    );
  }
}

export default App;
