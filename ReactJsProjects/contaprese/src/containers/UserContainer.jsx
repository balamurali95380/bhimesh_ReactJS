import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';

function UserContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return <UserList users={users} />;
}

export default UserContainer;
