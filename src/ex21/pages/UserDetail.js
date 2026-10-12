import React from "react";
import { Link, useParams } from "react-router-dom";
import { users } from "../data/users";

function UserDetail() {
  const { id } = useParams();
  const user = users[parseInt(id)];

  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <p>ID: {id}</p>
      <p>Age: {user.age}</p>
      <Link to="/users">&larr; Back to User List</Link>
    </div>
  );
}

export default UserDetail;