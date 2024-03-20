import React, { useState } from 'react';

const Navbar = ({ onChange }) => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo-container">
          <img className="logo" src="images/vector_smart_object_2.png" onClick={() => onChange(0)}/>
          <img className="side-logo" src="images/losangeles_mountains_2.png"/>
        </div>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {mobileMenu ? 'Close' : 'Menu'}
        </button>
        <ul className={`nav-menu ${mobileMenu ? 'mobile-menu' : ''}`}>
          <li>
            <a className='nav-words' onClick={() => onChange(1)}>01. HISTORY</a>
          </li>
          <li>
            <a className='nav-words' onClick={() => onChange(2)}>02. TEAM</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
