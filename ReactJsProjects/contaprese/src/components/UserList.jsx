import React from 'react';

function UserList({ users }) {
  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
