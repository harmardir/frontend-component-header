function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useContext, useState } from 'react'; // Import useState for dropdown handling
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
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    coursesDropdownOpen = _useState2[0],
    setCoursesDropdownOpen = _useState2[1]; // State to handle dropdown visibility

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
    type: 'dropdown',
    // Add dropdown type for Courses
    content: intl.formatMessage(messages['header.links.courses']),
    onClick: function onClick() {
      return setCoursesDropdownOpen(!coursesDropdownOpen);
    },
    // Toggle dropdown visibility
    dropdownItems: [{
      type: 'item',
      href: "".concat(config.LMS_BASE_URL, "/courses/for_students"),
      content: intl.formatMessage({
        id: 'header.links.courses.for_students',
        defaultMessage: 'For Students'
      })
    }, {
      type: 'item',
      href: "".concat(config.LMS_BASE_URL, "/courses/for_employees"),
      content: intl.formatMessage({
        id: 'header.links.courses.for_employees',
        defaultMessage: 'For Employees'
      })
    }]
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
  }, /*#__PURE__*/React.createElement(MobileHeader, _extends({}, props, {
    coursesDropdownOpen: coursesDropdownOpen
  }))), /*#__PURE__*/React.createElement(Responsive, {
    minWidth: 769
  }, /*#__PURE__*/React.createElement(DesktopHeader, _extends({}, props, {
    coursesDropdownOpen: coursesDropdownOpen
  }))));
};
Header.propTypes = {
  intl: intlShape.isRequired
};
export default injectIntl(Header);
//# sourceMappingURL=Header.js.map