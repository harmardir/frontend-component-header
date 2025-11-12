import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';

import AnonymousUserMenu from './AnonymousUserMenu';
import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import messages from './messages';

import youtubeIcon from './youtube-white.png';
import facebookIcon from './facebook-white.png';
import instagramIcon from './instagram-white.png';
import linkedinIcon from './linkedin-white.png';
import xIcon from './x-white.png';

const LinkedLogo = ({
  href,
  src,
  alt,
  ...attributes
}) => (
  <a href={href} {...attributes}>
    <img className="d-block" src={src} alt={alt} />
  </a>
);

LinkedLogo.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const LearningHeader = ({
  intl, showUserDropdown,
}) => {
  const { authenticatedUser, config } = useContext(AppContext);
  
  const [menuOpen, setMenuOpen] = useState(false);  // State for mobile menu toggle

  const headerLogo = (
    <LinkedLogo
      className="logo"
      href={`${getConfig().LMS_BASE_URL}/dashboard`}
      src={getConfig().LOGO_URL}
      alt={getConfig().SITE_NAME}
    />
  );

  const mainMenu = [
    {
      type: 'item',
      href: `${config.LMS_BASE_URL}`, // Homepage
      content: intl.formatMessage(messages['header.links.home']),
    },
    {
      type: 'item',
      href: 'https://savolaworld.com/Makeen.php', // External About page
      content: intl.formatMessage(messages['header.links.about']),
    },
    {
      type: 'item', 
      href: `${config.LMS_BASE_URL}/courses`, // Courses page
      content: intl.formatMessage(messages['header.links.courses']),
    },
    {
      type: 'item', 
      href: `${config.LMS_BASE_URL}/contact`, // Contact page
      content: intl.formatMessage(messages['header.links.contact']),
    },

    // Only include Dashboard link if authenticatedUser exists (user is logged in)
    ...(authenticatedUser ? [
      {
        type: 'item', 
        href: `${config.LMS_BASE_URL}/dashboard`, // Dashboard page
        content: intl.formatMessage(messages['header.links.dashboard']),
        className: 'dashboard-link',
      },
    ] : []),
  ];

  return (
    <header className="learning-header">
      <a className="sr-only sr-only-focusable" href="#main-content">{intl.formatMessage(messages.skipNavLink)}</a>

      {/* --- Grey Top Bar with Social Icons --- */}
      <div className="top-bar d-flex justify-content-center justify-content-md-end align-items-center px-3">
        <ul className="social-icons list-unstyled d-flex mb-0">
          <li><a href="https://www.youtube.com/channel/UCVAsDJMQH3hEaIjw1MOj49w" target="_blank" rel="noopener noreferrer"><img src={youtubeIcon} alt="YouTube" /></a></li>
          <li><a href="https://www.facebook.com/share/19a69yGvsH/" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} alt="Facebook" /></a></li>
          <li><a href="https://www.instagram.com/savolaworld/#" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a></li>
          <li><a href="https://www.linkedin.com/company/savolaworld/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a></li>
          <li><a href="https://x.com/savolaworld?lang=en" target="_blank" rel="noopener noreferrer"><img src={xIcon} alt="X" /></a></li>
        </ul>
      </div>
      {/* --- End Top Bar --- */}


      <div className="container-xl py-2 d-flex align-items-center">
        {headerLogo}

        {/* Burger menu for mobile */}
        <div className="burger-menu-icon d-block d-md-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <span className="close-icon">X</span> // Show "X" when the menu is open
          ) : (
            <>
              <span className="burger-bar"></span>
              <span className="burger-bar"></span>
              <span className="burger-bar"></span>
            </>
          )}
        </div>

        <nav className="main-menu ml-3 d-none d-md-block">
          <ul className="nav">
            {mainMenu.map((item) => (
              <li className="nav-item" key={item.href || item.content}>
                <a className={`nav-link ${item.className || ''}`} href={item.href}>
                  {item.content}
                </a>
            </li>
          ))}
          </ul>
        </nav>  

        {/* Mobile menu */}
        <nav className={`mobile-menu d-md-none ${menuOpen ? 'open' : ''}`}>
          <ul className="nav">
            {mainMenu.map((item) => (
              <li className="nav-item" key={item.href || item.content}>
                <a className="nav-link" href={item.href}>
                  {item.content}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {showUserDropdown && authenticatedUser && (
          <AuthenticatedUserDropdown
            username={authenticatedUser.username}
          />
        )}
        {showUserDropdown && !authenticatedUser && (
          <AnonymousUserMenu />
        )}
      </div>
    </header>
  );
};

LearningHeader.propTypes = {
  intl: intlShape.isRequired,
  showUserDropdown: PropTypes.bool,
};

LearningHeader.defaultProps = {
  showUserDropdown: true,
};

export default injectIntl(LearningHeader);