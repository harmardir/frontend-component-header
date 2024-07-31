import React, { useContext, useState } from 'react';  // Added useState here
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';

import AnonymousUserMenu from './AnonymousUserMenu';
import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import messages from './messages';

import BurgerMenu from './BurgerMenu'; // Import the BurgerMenu component

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
  courseOrg, courseNumber, courseTitle, intl, showUserDropdown,
}) => {
  const { authenticatedUser } = useContext(AppContext);
  const [isNavVisible, setIsNavVisible] = useState(false); // State to manage nav visibility

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const headerLogo = (
    <LinkedLogo
      className="logo"
      href={`${getConfig().LMS_BASE_URL}/dashboard`}
      src={getConfig().LOGO_URL}
      alt={getConfig().SITE_NAME}
    />
  );

  return (
    <header className="learning-header">
      <a className="sr-only sr-only-focusable" href="#main-content">{intl.formatMessage(messages.skipNavLink)}</a>
      <div className="container-xl py-2 d-flex align-items-center">
        {headerLogo}
        <div className="flex-grow-1 course-title-lockup" style={{ lineHeight: 1 }}>
          <span className="d-block small m-0">{courseOrg} {courseNumber}</span>
          <span className="d-block m-0 font-weight-bold course-title">{courseTitle}</span>
        </div>
        <BurgerMenu onClick={toggleNav} />
        <nav className={`ml-auto custom-nav ${isNavVisible ? 'show' : ''}`}>
        <a className="nav-link" href="https://undp-lms.kashida-learning.co/" onClick={toggleNav}>
    {intl.formatMessage({ id: 'header.links.home', defaultMessage: 'Home' })}
  </a>
  <a className="nav-link" href="https://undp-lms.kashida-learning.co/about" onClick={toggleNav}>
    {intl.formatMessage({ id: 'header.links.about', defaultMessage: 'About Us' })}
  </a>
  <a className="nav-link" href="https://undp-lms.kashida-learning.co/courses" onClick={toggleNav}>
    {intl.formatMessage({ id: 'header.links.courses', defaultMessage: 'Courses' })}
  </a>
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
  courseOrg: PropTypes.string,
  courseNumber: PropTypes.string,
  courseTitle: PropTypes.string,
  intl: intlShape.isRequired,
  showUserDropdown: PropTypes.bool,
};

LearningHeader.defaultProps = {
  courseOrg: null,
  courseNumber: null,
  courseTitle: null,
  showUserDropdown: true,
};

export default injectIntl(LearningHeader);
