var _defineMessages;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { defineMessages } from '@edx/frontend-platform/i18n';
var messages = defineMessages((_defineMessages = {
  'header.links.home': {
    id: 'header.links.home',
    defaultMessage: 'Home',
    description: 'Label for the Home link in the header'
  },
  'header.links.about': {
    id: 'header.links.about',
    defaultMessage: 'About',
    description: 'Label for the About link in the header'
  },
  'header.links.courses': {
    id: 'header.links.courses',
    defaultMessage: 'Courses',
    description: 'Link to the learner course dashboard'
  }
}, _defineProperty(_defineMessages, "header.links.courses", {
  id: 'header.links.courses',
  defaultMessage: 'Courses',
  description: 'Link to the learner course dashboard'
}), _defineProperty(_defineMessages, 'header.links.programs', {
  id: 'header.links.programs',
  defaultMessage: 'Programs',
  description: 'Link to the learner program dashboard'
}), _defineProperty(_defineMessages, 'header.links.content.search', {
  id: 'header.links.content.search',
  defaultMessage: 'Discover New',
  description: 'Link to the content search page'
}), _defineProperty(_defineMessages, 'header.links.schools', {
  id: 'header.links.schools',
  defaultMessage: 'Schools & Partners',
  description: 'Link to the schools and partners landing page'
}), _defineProperty(_defineMessages, 'header.user.menu.dashboard', {
  id: 'header.user.menu.dashboard',
  defaultMessage: 'Dashboard',
  description: 'Link to the user dashboard'
}), _defineProperty(_defineMessages, 'header.user.menu.profile', {
  id: 'header.user.menu.profile',
  defaultMessage: 'Profile',
  description: 'Link to the user profile'
}), _defineProperty(_defineMessages, 'header.user.menu.account.settings', {
  id: 'header.user.menu.account.settings',
  defaultMessage: 'Account',
  description: 'Link to account settings'
}), _defineProperty(_defineMessages, 'header.user.menu.order.history', {
  id: 'header.user.menu.order.history',
  defaultMessage: 'Order History',
  description: 'Link to order history'
}), _defineProperty(_defineMessages, 'header.user.menu.logout', {
  id: 'header.user.menu.logout',
  defaultMessage: 'Logout',
  description: 'Logout link'
}), _defineProperty(_defineMessages, 'header.user.menu.login', {
  id: 'header.user.menu.login',
  defaultMessage: 'Login',
  description: 'Login link'
}), _defineProperty(_defineMessages, 'header.user.menu.register', {
  id: 'header.user.menu.register',
  defaultMessage: 'Sign Up',
  description: 'Link to registration'
}), _defineProperty(_defineMessages, 'header.user.menu.studio.home', {
  id: 'header.user.menu.studio.home',
  defaultMessage: 'Studio Home',
  description: 'Link to the Studio Home'
}), _defineProperty(_defineMessages, 'header.user.menu.studio.maintenance', {
  id: 'header.user.menu.studio.maintenance',
  defaultMessage: 'Maintenance',
  description: 'Link to the Studio Maintenance'
}), _defineProperty(_defineMessages, 'header.label.account.nav', {
  id: 'header.label.account.nav',
  defaultMessage: 'Account',
  description: 'The aria label for the account menu nav'
}), _defineProperty(_defineMessages, 'header.label.account.menu', {
  id: 'header.label.account.menu',
  defaultMessage: 'Account Menu',
  description: 'The aria label for the account menu trigger'
}), _defineProperty(_defineMessages, 'header.label.account.menu.for', {
  id: 'header.label.account.menu.for',
  defaultMessage: 'Account menu for {username}',
  description: 'The aria label for the account menu trigger when the username is displayed in it'
}), _defineProperty(_defineMessages, 'header.label.main.nav', {
  id: 'header.label.main.nav',
  defaultMessage: 'Main',
  description: 'The aria label for the main menu nav'
}), _defineProperty(_defineMessages, 'header.label.main.menu', {
  id: 'header.label.main.menu',
  defaultMessage: 'Main Menu',
  description: 'The aria label for the main menu trigger'
}), _defineProperty(_defineMessages, 'header.label.main.header', {
  id: 'header.label.main.header',
  defaultMessage: 'Main',
  description: 'The aria label for the main header'
}), _defineProperty(_defineMessages, 'header.label.secondary.nav', {
  id: 'header.label.secondary.nav',
  defaultMessage: 'Secondary',
  description: 'The aria label for the seconary nav'
}), _defineProperty(_defineMessages, 'header.label.skip.nav', {
  id: 'header.label.skip.nav',
  defaultMessage: 'Skip to main content',
  description: 'A link used by screen readers to allow users to skip to the main content of the page.'
}), _defineProperty(_defineMessages, 'header.label.app.nav', {
  id: 'header.label.app.nav',
  defaultMessage: 'App',
  description: 'The aria label for the app Nav'
}), _defineMessages));
export default messages;
//# sourceMappingURL=Header.messages.js.map