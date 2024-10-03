import React from 'react';
import PropTypes from 'prop-types';
var DesktopHeader = function DesktopHeader(_ref) {
  var mainMenu = _ref.mainMenu,
    logo = _ref.logo,
    logoAltText = _ref.logoAltText,
    logoDestination = _ref.logoDestination;
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("a", {
    href: logoDestination
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: logoAltText
  })), /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, mainMenu.map(function (menuItem, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index,
      className: menuItem.type === 'dropdown' ? 'dropdown' : ''
    }, /*#__PURE__*/React.createElement("a", {
      href: menuItem.href || '#'
    }, menuItem.content), menuItem.type === 'dropdown' && /*#__PURE__*/React.createElement("ul", {
      className: "dropdown-menu"
    }, menuItem.links.map(function (link, idx) {
      return /*#__PURE__*/React.createElement("li", {
        key: idx
      }, /*#__PURE__*/React.createElement("a", {
        href: link.href
      }, link.content));
    })));
  }))));
};
DesktopHeader.propTypes = {
  mainMenu: PropTypes.array.isRequired,
  logo: PropTypes.string.isRequired,
  logoAltText: PropTypes.string.isRequired,
  logoDestination: PropTypes.string.isRequired
};
export default DesktopHeader;
//# sourceMappingURL=DesktopHeader.js.map