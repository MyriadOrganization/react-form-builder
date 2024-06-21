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

var _iconsSvg = require("./icons-svg");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Icon = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Icon, _React$Component);

  var _super = _createSuper(Icon);

  function Icon() {
    (0, _classCallCheck2["default"])(this, Icon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Icon, [{
    key: "render",
    value: function render() {
      var icon = this.props.icon;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", _iconsSvg.IconSvg[icon] ? _iconsSvg.IconSvg[icon] : "");
    }
  }]);
  return Icon;
}(_react["default"].Component);

var _default = Icon;
exports["default"] = _default;