import React from 'react';
import UserList from '../UserList'

import Api from '../../api/api';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      months: [
        { id: "1", name: "January" },
        { id: "2", name: "February" },
        { id: "3", name: "March" },
        { id: "4", name: "April" },
        { id: "5", name: "May" },
        { id: "6", name: "June" },
        { id: "7", name: "July" },
        { id: "8", name: "August" },
        { id: "9", name: "September" },
        { id: "10", name: "October" },
        { id: "11", name: "November" },
        { id: "12", name: "December" }
      ],
      err: {}
    };
  }

  componentDidMount() {
    Api.get()
      .then((data) => {
        this.setState({users: data});
        console.log(this.state.users);
      })
      .catch((err) => {
        this.setState({err: err})
      })
  }

  render() {
    return (
      <UserList users={this.state.users} />
    );
  }
}
