import React, { Component } from 'react';
import './App.css';
import UserList from './components/user-list';
import moment from 'moment';
import AsyncLoader from "./components/async-loader";
import {fetchUsers} from "./api";

const users = [
  {
    forename: 'Peter',
    surname: 'Swift',
    nationality: 'British',
    dob: moment().subtract(22, 'year').subtract(4, 'month').subtract(21, 'day'),
  },
  {
    forename: 'Phil',
    surname: 'Potts',
    nationality: 'British',
    dob: moment().subtract(32, 'year'),
  },
];

const f = () =>
  fetchUsers()
    .then((res) => new Promise((resolve, reject) => {
      window.setTimeout(() => resolve(res), 3000);
    }));

class App extends Component {
  render() {
    return (
      <div className="App">
        <AsyncLoader load={f} render={data => <UserList users={data}/>}/>
      </div>
    );
  }
}

export default App;
