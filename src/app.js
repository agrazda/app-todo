import React from "react";

import ToDo from "./components/todo/todo.js";
import People from "./components/people/People";
import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';
import LoginContext from './components/auth/context.js';

export default class App extends React.Component {
  render() {
    return (
      <>
        <ToDo />
        <People />
        <LoginContext>
          <Login />

          <Auth>
            <div>Any valid user can see this</div>
          </Auth>

          <Auth capability="create">
            <div>Users with create access can see this</div>
          </Auth>

          <Auth capability="update">
            <div>Users with update access can see this</div>
          </Auth>

          <Auth capability="delete">
            <div>Users with delete access can see this</div>
          </Auth>
        </LoginContext>
      </>
    );
  }
}

module.export = App