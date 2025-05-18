import React from 'react';

const Profile = ({ username }) => {
  return (
    <div>
    <h1>Profile Info</h1>
      User: {username}
    </div>
  );
};

export default Profile;
