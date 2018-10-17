import React, { Component } from 'react';

class AdminLogin extends Component {
  render() {
    return (
      <form action="/admin/login" method="post">
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Log In" />
        </div>
      </form>
    );
  }
}

export default AdminLogin;
