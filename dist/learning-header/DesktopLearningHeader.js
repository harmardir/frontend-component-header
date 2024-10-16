function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import Logo from './Logo'; // Assuming Logo is your custom component for the logo
import LinkedLogo from './LinkedLogo'; // Assuming LinkedLogo is for linked logos
import messages from './messages'; // Localization messages
var DesktopLearningHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(DesktopLearningHeader, _React$Component);
  var _super = _createSuper(DesktopLearningHeader);
  function DesktopLearningHeader() {
    _classCallCheck(this, DesktopLearningHeader);
    return _super.apply(this, arguments);
  }
  _createClass(DesktopLearningHeader, [{
    key: "renderMainMenu",
    value: function renderMainMenu() {
      var mainMenu = this.props.mainMenu;
      if (!Array.isArray(mainMenu)) {
        return mainMenu;
      }
      return mainMenu.map(function (menuItem) {
        var type = menuItem.type,
          href = menuItem.href,
          content = menuItem.content;
        if (type === 'item') {
          return /*#__PURE__*/React.createElement("a", {
            key: "".concat(type, "-").concat(content),
            className: "nav-link",
            href: href,
            style: {
              marginRight: '20px'
            }
          }, content);
        }
        return null;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        intl = _this$props.intl,
        loggedIn = _this$props.loggedIn,
        logo = _this$props.logo,
        logoAltText = _this$props.logoAltText,
        logoDestination = _this$props.logoDestination,
        logoProps = _this$props.logoProps;
      var logoClasses = loggedIn ? 'logged-in' : 'logged-out';
      return /*#__PURE__*/React.createElement("header", {
        className: "site-header-desktop-learning"
      }, /*#__PURE__*/React.createElement("a", {
        className: "nav-skip sr-only sr-only-focusable",
        href: "#main"
      }, intl.formatMessage(messages['header.label.skip.nav'])), /*#__PURE__*/React.createElement("div", {
        className: "container-fluid ".concat(logoClasses)
      }, /*#__PURE__*/React.createElement("div", {
        className: "nav-container position-relative d-flex align-items-center justify-content-start"
      }, logoDestination === null ? /*#__PURE__*/React.createElement(Logo, {
        className: "logo",
        src: logo,
        alt: logoAltText
      }) : /*#__PURE__*/React.createElement(LinkedLogo, _extends({
        className: "logo"
      }, logoProps)), /*#__PURE__*/React.createElement("nav", {
        "aria-label": intl.formatMessage(messages['header.label.main.nav']),
        className: "nav main-nav",
        style: {
          marginLeft: '10px'
        } // Adjust spacing between logo and main menu
      }, this.renderMainMenu()))));
    }
  }]);
  return DesktopLearningHeader;
}(React.Component);
DesktopLearningHeader.propTypes = {
  intl: intlShape.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  mainMenu: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
  })).isRequired,
  logo: PropTypes.string.isRequired,
  logoAltText: PropTypes.string.isRequired,
  logoDestination: PropTypes.string,
  logoProps: PropTypes.object
};
DesktopLearningHeader.defaultProps = {
  logoDestination: null,
  logoProps: {}
};
export default injectIntl(DesktopLearningHeader);
//# sourceMappingURL=DesktopLearningHeader.js.map