import React from 'react';

const User = ({name, profession, avatar}) => {
  return(
    <div>
      <h1>{name}</h1>
      <p>{profession}</p>
      <img src={avatar} alt=""/>
    </div>
  );
}

export default User;
