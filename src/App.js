import React, { Component } from 'react';
import './App.css';
import UserList from './components/user-list';
import AsyncLoader from "./components/async-loader";
import {fetchUsers} from "./api";

const f = () =>
  fetchUsers()
    .then((res) => new Promise((resolve, reject) => {
      window.setTimeout(() => resolve(res), 3000);
    }));

class App extends Component {
  render() {
    return (
      <div className="app pt-dark">
        <h1>All Users</h1>
        <div className="app-all-users">
          <AsyncLoader load={f} render={data => <UserList users={data}/>}/>
        </div>
      </div>
    );
  }
}

export default App;
