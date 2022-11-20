import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
  return (
    <div>
      <h1>Welcome to my Fancy Routing Website!!!</h1>
      <CustomLink to='/'>Home</CustomLink>
      <CustomLink to='/friends'>Friends</CustomLink>
      <CustomLink to='/about'>About</CustomLink>
    </div>
  );
};

export default Header;
