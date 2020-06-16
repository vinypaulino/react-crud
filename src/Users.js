import React, { Component } from "react";
import * as firebase from "firebase";
import { Table } from "react-bootstrap";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref("/")
      .on("value", (snapshot) => {
        let returnArr = [];
        snapshot.forEach((data) => {
          var user = data.val();
          user["key"] = data.key;
          returnArr.push(user);
        });
        this.setState({
          users: returnArr,
        });
      });
  }

  render() {
    const listUsers = this.state.users.map((user) => (
      <tr key={user.key}>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>Edit</td>
        <td>Remove</td>
      </tr>
    ));

    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delet</th>
          </tr>
        </thead>
        <tbody>{listUsers}</tbody>
      </Table>
    );
  }
}
export default User;
