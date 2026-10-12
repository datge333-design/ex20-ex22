import React from "react";
import { Link } from "react-router-dom";
import { users } from "../data/users";

function UserList() {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            ID: <Link to={`/users/${index}`}>{index}</Link> - {user.firstName}{" "}
            {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;