function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React, { useState } from 'react';
import { injectIntl } from '@edx/frontend-platform/i18n'; // For internationalization

var BurgerMenu = function BurgerMenu(_ref) {
  var intl = _ref.intl;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleMenu = function toggleMenu() {
    setIsOpen(!isOpen); // This toggles the state which should also toggle the class
  };

  var handleLinkClick = function handleLinkClick(event) {
    toggleMenu();
    event.preventDefault(); // Prevents default to ensure navigation logic can be controlled
    // Add navigation logic if necessary
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "burger-menu",
    onClick: toggleMenu,
    "aria-expanded": isOpen
  }, "\u2630 "), /*#__PURE__*/React.createElement("nav", {
    className: "dropdown-nav ".concat(isOpen ? 'show' : '')
  }, /*#__PURE__*/React.createElement("a", {
    className: "dropdown-link",
    href: "https://undp-lms.kashida-learning.co/",
    onClick: handleLinkClick
  }, intl.formatMessage({
    id: 'header.links.home',
    defaultMessage: 'Home'
  })), /*#__PURE__*/React.createElement("a", {
    className: "dropdown-link",
    href: "https://undp-lms.kashida-learning.co/about",
    onClick: handleLinkClick
  }, intl.formatMessage({
    id: 'header.links.about',
    defaultMessage: 'About Us'
  })), /*#__PURE__*/React.createElement("a", {
    className: "dropdown-link",
    href: "https://undp-lms.kashida-learning.co/courses",
    onClick: handleLinkClick
  }, intl.formatMessage({
    id: 'header.links.courses',
    defaultMessage: 'Courses'
  }))));
};
export default injectIntl(BurgerMenu);
//# sourceMappingURL=BurgerMenu.js.map