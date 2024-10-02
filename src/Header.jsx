import React, { useContext, useState } from 'react'; // Import useState for dropdown handling
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
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false); // State to handle dropdown visibility

  const mainMenu = [
    {
      type: 'item',
      href: `${config.LMS_BASE_URL}`, // Homepage
      content: intl.formatMessage(messages['header.links.home']),
    },
    {
      type: 'item',
      href: `${config.LMS_BASE_URL}/about`, // About page
      content: intl.formatMessage(messages['header.links.about']),
    },
    {
      type: 'dropdown', // Add dropdown type for Courses
      content: intl.formatMessage(messages['header.links.courses']),
      onClick: () => setCoursesDropdownOpen(!coursesDropdownOpen), // Toggle dropdown visibility
      dropdownItems: [
        {
          type: 'item',
          href: `${config.LMS_BASE_URL}/courses/for_students`,
          content: intl.formatMessage({ id: 'header.links.courses.for_students', defaultMessage: 'For Students' }),
        },
        {
          type: 'item',
          href: `${config.LMS_BASE_URL}/courses/for_employees`,
          content: intl.formatMessage({ id: 'header.links.courses.for_employees', defaultMessage: 'For Employees' }),
        },
      ],
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
      <Responsive maxWidth={768}>
        <MobileHeader {...props} coursesDropdownOpen={coursesDropdownOpen} />
      </Responsive>
      <Responsive minWidth={769}>
        <DesktopHeader {...props} coursesDropdownOpen={coursesDropdownOpen} />
      </Responsive>
    </>
  );
};

Header.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Header);