var _excluded = ["href", "src", "alt"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import AnonymousUserMenu from './AnonymousUserMenu';
import AuthenticatedUserDropdown from './AuthenticatedUserDropdown';
import messages from './messages';
var LinkedLogo = function LinkedLogo(_ref) {
  var href = _ref.href,
    src = _ref.src,
    alt = _ref.alt,
    attributes = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, attributes), /*#__PURE__*/React.createElement("img", {
    className: "d-block",
    src: src,
    alt: alt
  }));
};
LinkedLogo.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
var LearningHeader = function LearningHeader(_ref2) {
  var intl = _ref2.intl,
    showUserDropdown = _ref2.showUserDropdown;
  var _useContext = useContext(AppContext),
    authenticatedUser = _useContext.authenticatedUser,
    config = _useContext.config;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    menuOpen = _useState2[0],
    setMenuOpen = _useState2[1]; // State for mobile menu toggle

  var headerLogo = /*#__PURE__*/React.createElement(LinkedLogo, {
    className: "logo",
    href: "".concat(getConfig().LMS_BASE_URL, "/dashboard"),
    src: getConfig().LOGO_URL,
    alt: getConfig().SITE_NAME
  });
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
    type: 'item-with-submenu',
    // Submenu for Courses
    href: "".concat(config.LMS_BASE_URL, "#courses-categories"),
    // Courses page
    content: intl.formatMessage(messages['header.links.courses']),
    submenuItems: [{
      href: "".concat(config.LMS_BASE_URL, "/courses/for_students"),
      content: intl.formatMessage(messages['submenu.courses.for_students'])
    }, {
      href: "".concat(config.LMS_BASE_URL, "/courses/for_employees"),
      content: intl.formatMessage(messages['submenu.courses.for_employees'])
    }]
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "learning-header"
  }, /*#__PURE__*/React.createElement("a", {
    className: "sr-only sr-only-focusable",
    href: "#main-content"
  }, intl.formatMessage(messages.skipNavLink)), /*#__PURE__*/React.createElement("div", {
    className: "container-xl py-2 d-flex align-items-center"
  }, headerLogo, /*#__PURE__*/React.createElement("div", {
    className: "burger-menu-icon d-block d-md-none",
    onClick: function onClick() {
      return setMenuOpen(!menuOpen);
    }
  }, menuOpen ? /*#__PURE__*/React.createElement("span", {
    className: "close-icon"
  }, "X") // Show "X" when the menu is open
  : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "burger-bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "burger-bar"
  }), /*#__PURE__*/React.createElement("span", {
    className: "burger-bar"
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "main-menu ml-3 d-none d-md-block"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "nav"
  }, mainMenu.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      className: "nav-item ".concat(item.type === 'item-with-submenu' ? 'has-submenu' : ''),
      key: item.href || item.content
    }, item.type === 'item' ? /*#__PURE__*/React.createElement("a", {
      className: "nav-link",
      href: item.href
    }, item.content) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
      className: "nav-link",
      href: item.href
    }, item.content), /*#__PURE__*/React.createElement("ul", {
      className: "submenu"
    }, item.submenuItems.map(function (submenuItem) {
      return /*#__PURE__*/React.createElement("li", {
        key: submenuItem.href
      }, /*#__PURE__*/React.createElement("a", {
        className: "submenu-item",
        href: submenuItem.href
      }, submenuItem.content));
    }))));
  }))), /*#__PURE__*/React.createElement("nav", {
    className: "mobile-menu d-md-none ".concat(menuOpen ? 'open' : '')
  }, /*#__PURE__*/React.createElement("ul", {
    className: "nav"
  }, mainMenu.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      className: "nav-item ".concat(item.type === 'item-with-submenu' ? 'has-submenu' : ''),
      key: item.href || item.content
    }, item.type === 'item' ? /*#__PURE__*/React.createElement("a", {
      className: "nav-link",
      href: item.href
    }, item.content) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
      className: "nav-link",
      href: item.href
    }, item.content), /*#__PURE__*/React.createElement("ul", {
      className: "submenu"
    }, item.submenuItems.map(function (submenuItem) {
      return /*#__PURE__*/React.createElement("li", {
        key: submenuItem.href
      }, /*#__PURE__*/React.createElement("a", {
        className: "submenu-item",
        href: submenuItem.href
      }, submenuItem.content));
    }))));
  }))), showUserDropdown && authenticatedUser && /*#__PURE__*/React.createElement(AuthenticatedUserDropdown, {
    username: authenticatedUser.username
  }), showUserDropdown && !authenticatedUser && /*#__PURE__*/React.createElement(AnonymousUserMenu, null)));
};
LearningHeader.propTypes = {
  intl: intlShape.isRequired,
  showUserDropdown: PropTypes.bool
};
LearningHeader.defaultProps = {
  showUserDropdown: true
};
export default injectIntl(LearningHeader);
//# sourceMappingURL=LearningHeader.js.map