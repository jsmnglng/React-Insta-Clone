import React from 'react';

const Authenticate = (App, Login) => (
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        username: '',
        password: '',
        loggedIn: false
      };
    }

    usernameHandler = event => {
      this.setState({ username: event.target.value });
    };

    passwordHandler = event => {
      this.setState({ password: event.target.value });
    };

    loginSubmit = event => {
      event.preventDefault();

      const loginCredentials = { username: 'jajawockee', password: 'admin' };
      const tryUsername = this.state.username;
      const tryPassword = this.state.password;

      if (loginCredentials.username === tryUsername) {
        if (loginCredentials.password === tryPassword) {
          localStorage.setItem('username', tryUsername);
          window.location.reload();
        }
      } else {
        return alert('incorrect username or password');
      }
    }

    componentDidMount() {
      if (localStorage.getItem('username')) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }

    render() {
      return this.state.loggedIn ? <App /> :
        <Login
          username={this.state.username}
          usernameHandler={this.usernameHandler}

          password={this.state.password}
          passwordHandler={this.passwordHandler}

          loginSubmit={this.loginSubmit}
        />;
    }
  }
);

export default Authenticate;
