import React from 'react';
import { injectIntl } from '@edx/frontend-platform/i18n';
var HorizontalNav = function HorizontalNav(_ref) {
  var intl = _ref.intl;
  return /*#__PURE__*/React.createElement("nav", {
    className: "horizontal-nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://undp-lms.kashida-learning.co/"
  }, intl.formatMessage({
    id: 'header.links.home',
    defaultMessage: 'Home'
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://undp-lms.kashida-learning.co/about"
  }, intl.formatMessage({
    id: 'header.links.about',
    defaultMessage: 'About Us'
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://undp-lms.kashida-learning.co/courses"
  }, intl.formatMessage({
    id: 'header.links.courses',
    defaultMessage: 'Courses'
  })));
};
export default injectIntl(HorizontalNav);
//# sourceMappingURL=HorizontalNav.js.map