import React, { Component } from 'react';
import UserList from '../components/UserList'
import logo from '../assets/logo.svg';
import '../assets/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {id: 1, nombre: "miguel", email: "miguelghz@miguelghz.io"},
        {id: 2, nombre: "test", email: "test@test.es"}
      ]
    };
  }

  handleOnAddUser (event) {
    event.preventDefault();
    let user = {
      name: event.target.name.value,
      email: event.target.email.value
    };
    this.setState({
      users: this.state.users.concat([user])
    });
  }

  render() {
    console.log(this.state.users);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvenido a React</h2>
        </div>
        <div>
          <p className="App-intro">
            Lista de usuarios
          </p>
          <UserList users={this.state.users} onAddUser={this.handleOnAddUser.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;