"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = require("react-dnd-html5-backend");

var _ItemTypes = _interopRequireDefault(require("../ItemTypes"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var style = {
  // display: 'inline-block',
  // border: '1px dashed gray',
  // padding: '0.5rem 1rem',
  // backgroundColor: 'white',
  cursor: "move"
};
var dragHandleSource = {
  beginDrag: function beginDrag(props) {
    var data = props.data,
        index = props.index,
        onDestroy = props.onDestroy,
        setAsChild = props.setAsChild,
        getDataById = props.getDataById;
    return {
      itemType: _ItemTypes["default"].BOX,
      index: data.parentId ? -1 : index,
      parentIndex: data.parentIndex,
      id: data.id,
      col: data.col,
      onDestroy: onDestroy,
      setAsChild: setAsChild,
      getDataById: getDataById,
      data: data
    };
  }
};

var DragHandle = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(DragHandle, _PureComponent);

  var _super = _createSuper(DragHandle);

  function DragHandle() {
    (0, _classCallCheck2["default"])(this, DragHandle);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(DragHandle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var connectDragPreview = this.props.connectDragPreview;

      if (connectDragPreview) {
        // Use empty image as a drag preview so browsers don't draw it
        // and we can draw whatever we want on the custom drag layer instead.
        connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
          // IE fallback: specify that we'd rather screenshot the node
          // when it already knows it's being dragged so we can hide it with CSS.
          captureDraggingState: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var connectDragSource = this.props.connectDragSource;
      return connectDragSource( /*#__PURE__*/_react["default"].createElement("div", {
        className: "btn is-isolated dragSvg",
        style: style
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M7.60234 6.4C8.26506 6.4 8.80234 5.86274 8.80234 5.2C8.80234 4.53726 8.26506 4 7.60234 4C6.9396 4 6.40234 4.53726 6.40234 5.2C6.40234 5.86274 6.9396 6.4 7.60234 6.4ZM7.60234 11.2C8.26506 11.2 8.80234 10.6627 8.80234 10C8.80234 9.33728 8.26506 8.8 7.60234 8.8C6.9396 8.8 6.40234 9.33728 6.40234 10C6.40234 10.6627 6.9396 11.2 7.60234 11.2ZM8.80234 14.8C8.80234 15.4627 8.26506 16 7.60234 16C6.9396 16 6.40234 15.4627 6.40234 14.8C6.40234 14.1373 6.9396 13.6 7.60234 13.6C8.26506 13.6 8.80234 14.1373 8.80234 14.8ZM12.4023 6.4C13.0651 6.4 13.6023 5.86274 13.6023 5.2C13.6023 4.53726 13.0651 4 12.4023 4C11.7396 4 11.2023 4.53726 11.2023 5.2C11.2023 5.86274 11.7396 6.4 12.4023 6.4ZM13.6023 10C13.6023 10.6627 13.0651 11.2 12.4023 11.2C11.7396 11.2 11.2023 10.6627 11.2023 10C11.2023 9.33728 11.7396 8.8 12.4023 8.8C13.0651 8.8 13.6023 9.33728 13.6023 10ZM12.4023 16C13.0651 16 13.6023 15.4627 13.6023 14.8C13.6023 14.1373 13.0651 13.6 12.4023 13.6C11.7396 13.6 11.2023 14.1373 11.2023 14.8C11.2023 15.4627 11.7396 16 12.4023 16Z",
        fill: "#8FA0A7"
      }))));
    }
  }]);
  return DragHandle;
}(_react.PureComponent);

var _default = (0, _reactDnd.DragSource)(_ItemTypes["default"].BOX, dragHandleSource, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
})(DragHandle);

exports["default"] = _default;