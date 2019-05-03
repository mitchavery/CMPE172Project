import React, { Component } from 'react';

class Staff extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: '', 
    currentUserAddress: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name, 
      currentUserAddress: idToken.idToken.claims.address
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <h1>Welcome {currentUserName}</h1>
        <p>Email: {currentUserEmail}</p>
        <p>You have reached the authorized portal area of the employee database</p>
      </div>
    );
  }
}

export default Staff;