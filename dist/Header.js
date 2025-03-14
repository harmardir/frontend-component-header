import React, { useContext } from 'react';
import Responsive from 'react-responsive';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { APP_CONFIG_INITIALIZED, ensureConfig, mergeConfig, getConfig, subscribe } from '@edx/frontend-platform';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import messages from './Header.messages';
ensureConfig(['LMS_BASE_URL', 'LOGOUT_URL', 'LOGIN_URL', 'SITE_NAME', 'LOGO_URL', 'ORDER_HISTORY_URL'], 'Header component');
subscribe(APP_CONFIG_INITIALIZED, function () {
  mergeConfig({
    AUTHN_MINIMAL_HEADER: !!process.env.AUTHN_MINIMAL_HEADER
  }, 'Header additional config');
});
var Header = function Header(_ref) {
  var intl = _ref.intl;
  var _useContext = useContext(AppContext),
    authenticatedUser = _useContext.authenticatedUser,
    config = _useContext.config;
  var mainMenu = [{
    type: 'item',
    href: "".concat(config.LMS_BASE_URL),
    // Homepage
    content: intl.formatMessage(messages['header.links.home'])
  }, {
    type: 'item',
    href: "".concat(config.LMS_BASE_URL, "/about"),
    // About page
    content: intl.formatMessage(messages['header.links.about'])
  }, {
    type: 'item',
    href: "".concat(config.LMS_BASE_URL, "/#"),
    // Partners page
    content: intl.formatMessage(messages['header.links.partners'])
  }, {
    type: 'item',
    href: "".concat(config.LMS_BASE_URL, "/courses/for_students"),
    // Public Courses page
    content: intl.formatMessage(messages['header.links.publicCourses']),
    className: 'highlight-background'
  }, {
    type: 'custom',
    // Custom dropdown item
    content: /*#__PURE__*/React.createElement("div", {
      className: "professional-courses-dropdown ".concat(isDropdownOpen ? 'open' : '')
    }, /*#__PURE__*/React.createElement("a", {
      href: "".concat(config.LMS_BASE_URL, "/courses/for_employees"),
      className: "menu-link"
    }, intl.formatMessage(messages['header.links.professionalCourses'])), /*#__PURE__*/React.createElement("span", {
      className: "custom-chevron-down",
      onClick: toggleDropdown
    }), isDropdownOpen && /*#__PURE__*/React.createElement("ul", {
      className: "custom-professional-menu"
    }, /*#__PURE__*/React.createElement("li", {
      className: "custom-professional-item"
    }, /*#__PURE__*/React.createElement("a", {
      href: "".concat(config.LMS_BASE_URL, "/courses/course-v1:ACINET+ACINET_A+T2_2024/about")
    }, "\u0631\u0635\u062F \u0648\u062A\u0642\u064A\u064A\u0645 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0627\u062A ", /*#__PURE__*/React.createElement("br", null), " \u0627\u0644\u0648\u0637\u0646\u064A\u0629 \u0644\u0645\u0643\u0627\u0641\u062D\u0629 \u0627\u0644\u0641\u0633\u0627\u062F")), /*#__PURE__*/React.createElement("li", {
      className: "custom-professional-item"
    }, /*#__PURE__*/React.createElement("a", {
      href: "".concat(config.LMS_BASE_URL, "/courses/course-v1:ACINET+ACINET_C+T2_2024/about")
    }, "\u0625\u062F\u0627\u0631\u0629 \u0645\u062E\u0627\u0637\u0631 \u0627\u0644\u0641\u0633\u0627\u062F \u0627\u0644\u0642\u0637\u0627\u0639\u064A")))),
    className: 'highlight-background has-dropdown'
  }];
  var orderHistoryItem = {
    type: 'item',
    href: config.ORDER_HISTORY_URL,
    content: intl.formatMessage(messages['header.user.menu.order.history'])
  };
  var userMenu = authenticatedUser === null ? [] : [{
    type: 'item',
    href: "".concat(config.LMS_BASE_URL, "/dashboard"),
    content: intl.formatMessage(messages['header.user.menu.dashboard'])
  }, {
    type: 'item',
    href: "".concat(config.ACCOUNT_PROFILE_URL, "/u/").concat(authenticatedUser.username),
    content: intl.formatMessage(messages['header.user.menu.profile'])
  }, {
    type: 'item',
    href: config.ACCOUNT_SETTINGS_URL,
    content: intl.formatMessage(messages['header.user.menu.account.settings'])
  }, {
    type: 'item',
    href: config.LOGOUT_URL,
    content: intl.formatMessage(messages['header.user.menu.logout'])
  }];

  // Users should only see Order History if have a ORDER_HISTORY_URL define in the environment.
  if (config.ORDER_HISTORY_URL) {
    userMenu.splice(-1, 0, orderHistoryItem);
  }
  var loggedOutItems = [{
    type: 'item',
    href: config.LOGIN_URL,
    content: intl.formatMessage(messages['header.user.menu.login'])
  }, {
    type: 'item',
    href: "".concat(config.LMS_BASE_URL, "/register"),
    content: intl.formatMessage(messages['header.user.menu.register'])
  }];
  var props = {
    logo: config.LOGO_URL,
    logoAltText: config.SITE_NAME,
    logoDestination: "".concat(config.LMS_BASE_URL, "/dashboard"),
    loggedIn: authenticatedUser !== null,
    username: authenticatedUser !== null ? authenticatedUser.username : null,
    avatar: authenticatedUser !== null ? authenticatedUser.avatar : null,
    mainMenu: getConfig().AUTHN_MINIMAL_HEADER ? [] : mainMenu,
    userMenu: getConfig().AUTHN_MINIMAL_HEADER ? [] : userMenu,
    loggedOutItems: getConfig().AUTHN_MINIMAL_HEADER ? [] : loggedOutItems
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Responsive, {
    maxWidth: 768
  }, /*#__PURE__*/React.createElement(MobileHeader, props)), /*#__PURE__*/React.createElement(Responsive, {
    minWidth: 769
  }, /*#__PURE__*/React.createElement(DesktopHeader, props)));
};
Header.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(Header);
//# sourceMappingURL=Header.js.map