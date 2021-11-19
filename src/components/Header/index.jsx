import React from 'react';
import './styles.scss';

import logoNetflix from '../../assets/netflix-logo.png';
import userNetflix from '../../assets/user_Netflix.png';

function Header({black}) {
  return (
    <header className={black ? 'header--black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src={logoNetflix} alt="Netflix" />
        </a>
      </div>

      <div className="header--user">
        <a href="/">
          <img src={userNetflix} alt="User Netflix" />
        </a>
      </div>
    </header>
  );
}

export default Header;