import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';

import AnonymousUserMenu from './AnonymousUserMenu';
import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import messages from './messages';

const LinkedLogo = ({ href, src, alt, ...attributes }) => (
  <a href={href} {...attributes}>
    <img className="d-block" src={src} alt={alt} />
  </a>
);

LinkedLogo.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const LearningHeader = ({ intl, showUserDropdown }) => {
  const { authenticatedUser, config } = useContext(AppContext);
  
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown toggle for "للمتخصصين"

  const headerLogo = (
    <LinkedLogo
      className="logo"
      href={`${getConfig().LMS_BASE_URL}/`}
      src={getConfig().LOGO_URL}
      alt={getConfig().SITE_NAME}
    />
  );

  const mainMenu = [
    {
      type: 'item',
      href: `${config.LMS_BASE_URL}`, 
      content: intl.formatMessage(messages['header.links.home']),
    },
    {
      type: 'item',
      href: `${config.LMS_BASE_URL}/about`, 
      content: intl.formatMessage(messages['header.links.about']),
    },
    {
      type: 'item',
      href: `${config.LMS_BASE_URL}/partners`,
      content: intl.formatMessage(messages['header.links.partners']),
    },
    {
      type: 'item',
      href: `${config.LMS_BASE_URL}/courses/for_students`, 
      content: intl.formatMessage(messages['header.links.publicCourses']),
      className: 'highlight-background',
    },
    {
      type: 'dropdown', // Mark it as a dropdown
      content: (
        <>
          <a href={`${config.LMS_BASE_URL}/courses/for_employees`}>
            للمتخصصين
          </a>
          <span
            className="learning-chevron-down"
            onClick={(e) => {
              e.preventDefault(); // Prevents the link from being followed
              setDropdownOpen(!dropdownOpen);
            }}
          ></span>
        </>
      ),
      className: 'highlight-background',
      dropdown: (
        <ul className={`learning-dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
          <li className="learning-dropdown-item">
            <a href={`${config.LMS_BASE_URL}/courses/course-v1:ACINET+ACINET_A+T2_2024/about`}>
              رصد وتقييم الاستراتيجيات <br /> الوطنية لمكافحة الفساد
            </a>
          </li>
          <li className="learning-dropdown-item">
            <a href={`${config.LMS_BASE_URL}/courses/course-v1:ACINET+ACINET_C+T2_2024/about`}>
              إدارة مخاطر الفساد القطاعي
            </a>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <header className="learning-header">
      <a className="sr-only sr-only-focusable" href="#main-content">
        {intl.formatMessage(messages.skipNavLink)}
      </a>
      <div className="container-xl py-2 d-flex align-items-center">
        {headerLogo}

        {/* Burger menu for mobile */}
        <div className="burger-menu-icon d-block d-md-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <span className="close-icon">X</span>
          ) : (
            <>
              <span className="burger-bar"></span>
              <span className="burger-bar"></span>
              <span className="burger-bar"></span>
            </>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="main-menu ml-3 d-none d-md-block">
          <ul className="nav">
            {mainMenu.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  className={`nav-link ${item.className || ''}`}
                  href={item.href || '#'}
                  onClick={item.onClick}
                >
                  {item.content}
                </a>
                {/* Render dropdown if present */}
                {item.dropdown && dropdownOpen && item.dropdown}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`mobile-menu d-md-none ${menuOpen ? 'open' : ''}`}>
          <ul className="nav">
            {mainMenu.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={item.href || '#'} onClick={item.onClick}>
                  {item.content}
                </a>
                {/* Render dropdown if present */}
                {item.dropdown && dropdownOpen && item.dropdown}
              </li>
            ))}
          </ul>
        </nav>

        {showUserDropdown && authenticatedUser && (
          <AuthenticatedUserDropdown username={authenticatedUser.username} />
        )}
        {showUserDropdown && !authenticatedUser && <AnonymousUserMenu />}
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
