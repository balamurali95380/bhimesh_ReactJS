import React from 'react';


const Avatar = ({ imageUrl }) => {
  return (
    <div>
      <img 
        src={imageUrl} 
        alt="User Avatar" 
        width="150" 
        height="150" 
        style={{ borderRadius: '50%' }} 
      />
    </div>
  );
};


Avatar.defaultProps = {
  imageUrl: 'https://via.placeholder.com/150'
};

export default Avatar;
