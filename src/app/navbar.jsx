import React, { useState } from 'react';

import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ onChange }) => {

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <div className="navbar">
        <i className="fas fa-bars fa-2x" onClick={() => toggleMobileMenu()}></i>
        <img className="side-logo-mobile" src="images/losangeles_mountains_2.png"/>
        {mobileMenu && (
          <div className={`mobile-menu ${mobileMenu ? 'active' : ''}`}>
            <div className='mobile-menu-top'>              
              <ul>
                <li>
                  <a className='nav-words-mobile' onClick={() => onChange(1)}>01. HISTORY</a>
                  </li>
                <li>
                  <a className='nav-words-mobile' onClick={() => onChange(2)}>02. TEAM</a>
                </li>
              </ul>
            </div>
            <div className='mobile-menu-bottom'>
              <img className="logo-mobile" src="images/logo_colored.png" onClick={() => onChange(0)}/>
            </div>
            <i className="fas fa-xmark fa-2x" onClick={() => toggleMobileMenu()} style={{ marginTop: '35px', marginRight: '8px' }}></i>
          </div>
        )}
        <div className="logo-container">
          <img className="logo" src="images/logo_colored.png" onClick={() => onChange(0)}/>
          <img className="side-logo" src="images/losangeles_mountains_2.png"/>
        </div>
        <ul className="nav-menu">
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
