import React from 'react';
import PropTypes from 'prop-types';

const DesktopHeader = ({ mainMenu, logo, logoAltText, logoDestination }) => (
  <header>
    <a href={logoDestination}>
      <img src={logo} alt={logoAltText} />
    </a>
    <nav>
      <ul>
        {mainMenu.map((menuItem, index) => (
          <li key={index} className={menuItem.type === 'dropdown' ? 'dropdown' : ''}>
            <a href={menuItem.href || '#'}>{menuItem.content}</a>
            {menuItem.type === 'dropdown' && (
              <ul className="dropdown-menu">
                {menuItem.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href}>{link.content}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

DesktopHeader.propTypes = {
  mainMenu: PropTypes.array.isRequired,
  logo: PropTypes.string.isRequired,
  logoAltText: PropTypes.string.isRequired,
  logoDestination: PropTypes.string.isRequired,
};

export default DesktopHeader;