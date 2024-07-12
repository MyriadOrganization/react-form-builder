"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _componentDragHandle = _interopRequireDefault(require("./component-drag-handle"));

var _Icon = _interopRequireDefault(require("../Icons/Icon"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var HeaderBar = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(HeaderBar, _React$Component);

  var _super = _createSuper(HeaderBar);

  function HeaderBar() {
    (0, _classCallCheck2["default"])(this, HeaderBar);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(HeaderBar, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "toolbar-header"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: ""
      }, this.props.data.text), /*#__PURE__*/_react["default"].createElement("div", {
        className: "toolbar-header-buttons-container"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "toolbar-header-buttons"
      }, this.props.data.element !== "LineBreak" && this.props.data.element !== "CustomElement" && /*#__PURE__*/_react["default"].createElement("div", {
        className: "btn is-isolated",
        onClick: this.props.editModeOn.bind(this.props.parent, this.props.data)
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: "edit-3"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "btn is-isolated",
        onClick: this.props.onDestroy.bind(this, this.props.data)
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        opacity: "0.32",
        d: "M2.66992 3.5415L3.24457 13.3105C3.3615 15.2984 3.41997 16.2923 3.84423 17.0466C4.21771 17.7106 4.78458 18.2451 5.46937 18.5789C6.24727 18.9582 7.24291 18.9582 9.23421 18.9582H10.7646C12.7559 18.9582 13.7516 18.9582 14.5295 18.5789C15.2143 18.2451 15.7812 17.7106 16.1546 17.0466C16.5789 16.2923 16.6374 15.2984 16.7543 13.3105L17.3289 3.5415H2.66992Z",
        fill: "#004F6B"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M8.71707 1.10457C8.74404 1.10461 8.77124 1.10465 8.79867 1.10465H11.2039C11.2314 1.10465 11.2586 1.10461 11.2855 1.10457C11.67 1.104 12.0074 1.10349 12.3081 1.22174C12.571 1.32514 12.8037 1.49289 12.985 1.7096C13.1922 1.95745 13.2984 2.27772 13.4195 2.64262C13.428 2.66822 13.4365 2.69404 13.4452 2.72006L13.7401 3.60465H16.668H18.3346C18.6453 3.60465 18.8971 3.85649 18.8971 4.16715C18.8971 4.47781 18.6453 4.72965 18.3346 4.72965H16.668H13.3476C13.3389 4.72986 13.3302 4.72985 13.3215 4.72965H6.68109C6.67242 4.72985 6.66372 4.72986 6.655 4.72965H3.33464H1.66797C1.35731 4.72965 1.10547 4.47781 1.10547 4.16715C1.10547 3.85649 1.35731 3.60465 1.66797 3.60465H3.33464H6.26254L6.5574 2.72006C6.56608 2.69404 6.57464 2.66822 6.58313 2.64263C6.70416 2.27772 6.81039 1.95745 7.01765 1.7096C7.19888 1.49289 7.43162 1.32514 7.69452 1.22174C7.99519 1.10349 8.33262 1.104 8.71707 1.10457ZM7.4484 3.60465H12.5542L12.3779 3.07582C12.2152 2.5877 12.1738 2.49329 12.122 2.4313C12.0615 2.35906 11.984 2.30315 11.8963 2.26868C11.8211 2.23911 11.7185 2.22965 11.2039 2.22965H8.79867C8.28415 2.22965 8.18148 2.23911 8.10628 2.26868C8.01864 2.30315 7.94106 2.35906 7.88065 2.4313C7.82881 2.49329 7.78738 2.5877 7.62467 3.07582L7.4484 3.60465Z",
        fill: "#004F6B"
      })))), /*#__PURE__*/_react["default"].createElement(_componentDragHandle["default"], {
        data: this.props.data,
        index: this.props.index,
        onDestroy: this.props.onDestroy,
        setAsChild: this.props.setAsChild
      })));
    }
  }]);
  return HeaderBar;
}(_react["default"].Component);

exports["default"] = HeaderBar;