import React, { useContext } from 'react';
import Responsive from 'react-responsive';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import {
  APP_CONFIG_INITIALIZED,
  ensureConfig,
  mergeConfig,
  getConfig,
  subscribe,
} from '@edx/frontend-platform';

import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

import messages from './Header.messages';

import youtubeIcon from './learning-header/youtube-white.png';
import facebookIcon from './learning-header/facebook-white.png';
import instagramIcon from './learning-header/instagram-white.png';
import linkedinIcon from './learning-header/linkedin-white.png';
import xIcon from './learning-header/x-white.png';

ensureConfig([
  'LMS_BASE_URL',
  'LOGOUT_URL',
  'LOGIN_URL',
  'SITE_NAME',
  'LOGO_URL',
  'ORDER_HISTORY_URL',
], 'Header component');

subscribe(APP_CONFIG_INITIALIZED, () => {
  mergeConfig({
    AUTHN_MINIMAL_HEADER: !!process.env.AUTHN_MINIMAL_HEADER,
  }, 'Header additional config');
});

const Header = ({ intl }) => {
  const { authenticatedUser, config } = useContext(AppContext);

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

    {
      type: 'item',
      href: `${config.LMS_BASE_URL}/dashboard`, // Dashboard page
      content: intl.formatMessage(messages['header.links.dashboard']),
      className: 'dashboard-link',
    },

    
  ];

  const orderHistoryItem = {
    type: 'item',
    href: config.ORDER_HISTORY_URL,
    content: intl.formatMessage(messages['header.user.menu.order.history']),
  };

  const userMenu = authenticatedUser === null ? [] : [
    {
      type: 'item',
      href: `${config.LMS_BASE_URL}/dashboard`,
      content: intl.formatMessage(messages['header.user.menu.dashboard']),
    },
    {
      type: 'item',
      href: `${config.ACCOUNT_PROFILE_URL}/u/${authenticatedUser.username}`,
      content: intl.formatMessage(messages['header.user.menu.profile']),
    },
    {
      type: 'item',
      href: config.ACCOUNT_SETTINGS_URL,
      content: intl.formatMessage(messages['header.user.menu.account.settings']),
    },
    {
      type: 'item',
      href: config.LOGOUT_URL,
      content: intl.formatMessage(messages['header.user.menu.logout']),
    },
  ];

  // Users should only see Order History if have a ORDER_HISTORY_URL define in the environment.
  if (config.ORDER_HISTORY_URL) {
    userMenu.splice(-1, 0, orderHistoryItem);
  }

  const loggedOutItems = [
    {
      type: 'item',
      href: config.LOGIN_URL,
      content: intl.formatMessage(messages['header.user.menu.login']),
    },
    {
      type: 'item',
      href: `${config.LMS_BASE_URL}/register`,
      content: intl.formatMessage(messages['header.user.menu.register']),
    },
  ];

  const props = {
    logo: config.LOGO_URL,
    logoAltText: config.SITE_NAME,
    logoDestination: `${config.LMS_BASE_URL}/dashboard`,
    loggedIn: authenticatedUser !== null,
    username: authenticatedUser !== null ? authenticatedUser.username : null,
    avatar: authenticatedUser !== null ? authenticatedUser.avatar : null,
    mainMenu: getConfig().AUTHN_MINIMAL_HEADER ? [] : mainMenu,
    userMenu: getConfig().AUTHN_MINIMAL_HEADER ? [] : userMenu,
    loggedOutItems: getConfig().AUTHN_MINIMAL_HEADER ? [] : loggedOutItems,
  };

  return (
    <>
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
      <Responsive maxWidth={768}>
        <MobileHeader {...props} />
      </Responsive>
      <Responsive minWidth={769}>
        <DesktopHeader {...props} />
      </Responsive>
    </>
  );
};

Header.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Header);
