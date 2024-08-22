const _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

const _extends2 = _interopRequireDefault(
  require("@babel/runtime/helpers/extends")
);

const _classCallCheck2 = _interopRequireDefault(
  require("@babel/runtime/helpers/classCallCheck")
);

const _createClass2 = _interopRequireDefault(
  require("@babel/runtime/helpers/createClass")
);

const _assertThisInitialized2 = _interopRequireDefault(
  require("@babel/runtime/helpers/assertThisInitialized")
);

const _inherits2 = _interopRequireDefault(
  require("@babel/runtime/helpers/inherits")
);

const _possibleConstructorReturn2 = _interopRequireDefault(
  require("@babel/runtime/helpers/possibleConstructorReturn")
);

const _getPrototypeOf2 = _interopRequireDefault(
  require("@babel/runtime/helpers/getPrototypeOf")
);

const _defineProperty2 = _interopRequireDefault(
  require("@babel/runtime/helpers/defineProperty")
);

const _react = _interopRequireDefault(require("react"));

const _reactDom = _interopRequireDefault(require("react-dom"));

const _fbemitter = require("fbemitter");

const _reactIntl = require("react-intl");

const _formValidator = _interopRequireDefault(require("./form-validator"));

const _formElements = _interopRequireDefault(require("./form-elements"));

const _multiColumn = require("./multi-column");

const _customElement = _interopRequireDefault(
  require("./form-elements/custom-element")
);

const _registry = _interopRequireDefault(require("./stores/registry"));

function _createSuper(Derived) {
  const hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    const Super = (0, _getPrototypeOf2.default)(Derived);
    let result;
    if (hasNativeReflectConstruct) {
      const NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {}));
    return true;
  } catch (e) {
    return false;
  }
}

const { Image } = _formElements.default;
const { Checkboxes } = _formElements.default;
const { Signature } = _formElements.default;
const { Download } = _formElements.default;
const { Camera } = _formElements.default;
const { FileUpload } = _formElements.default;

const ReactForm = /* #__PURE__ */ (function (_React$Component) {
  (0, _inherits2.default)(ReactForm, _React$Component);

  const _super = _createSuper(ReactForm);

  function ReactForm(props) {
    let _this;

    (0, _classCallCheck2.default)(this, ReactForm);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "form",
      void 0
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "inputs",
      {}
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "answerData",
      void 0
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "handleChange",
      (evt) => {
        _this.props.onChange && _this.props.onChange(evt);
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "handleRenderSubmit",
      () => {
        const name = _this.props.action_name || _this.props.actionName;
        const actionName = name || "Submit";
        const _this$props$submitBut = _this.props.submitButton;
        const submitButton =
          _this$props$submitBut === void 0 ? false : _this$props$submitBut;
        return (
          submitButton ||
          /* #__PURE__ */ _react.default.createElement("input", {
            type: "submit",
            className: "btn btn-big",
            value: actionName,
          })
        );
      }
    );
    (0, _defineProperty2.default)(
      (0, _assertThisInitialized2.default)(_this),
      "handleRenderBack",
      () => {
        const name = _this.props.back_name || _this.props.backName;
        const backName = name || "Cancel";
        const _this$props$backButto = _this.props.backButton;
        const backButton =
          _this$props$backButto === void 0 ? false : _this$props$backButto;
        return (
          backButton ||
          /* #__PURE__ */ _react.default.createElement(
            "a",
            {
              href: _this.props.back_action,
              className: "btn btn-default btn-cancel btn-big",
            },
            backName
          )
        );
      }
    );
    _this.answerData = _this._convert(props.answer_data);
    _this.emitter = new _fbemitter.EventEmitter();
    _this.getDataById = _this.getDataById.bind(
      (0, _assertThisInitialized2.default)(_this)
    );
    return _this;
  }

  (0, _createClass2.default)(ReactForm, [
    {
      key: "_convert",
      value: function _convert(answers) {
        if (Array.isArray(answers)) {
          const result = {};
          answers.forEach((x) => {
            if (x.name.indexOf("tags_") > -1) {
              result[x.name] = x.value.map((y) => y.value);
            } else {
              result[x.name] = x.value;
            }
          });
          return result;
        }

        return answers || {};
      },
    },
    {
      key: "_getDefaultValue",
      value: function _getDefaultValue(item) {
        return this.answerData[item.field_name];
      },
    },
    {
      key: "_optionsDefaultValue",
      value: function _optionsDefaultValue(item) {
        const _this2 = this;

        const defaultValue = this._getDefaultValue(item);

        if (defaultValue) {
          return defaultValue;
        }

        const defaultChecked = [];
        item.options.forEach((option) => {
          if (_this2.answerData["option_".concat(option.key)]) {
            defaultChecked.push(option.key);
          }
        });
        return defaultChecked;
      },
    },
    {
      key: "_getItemValue",
      value: function _getItemValue(item, ref) {
        let $item = {
          element: item.element,
          value: "",
        };

        if (item.element === "Rating") {
          $item.value = ref.inputField.current.state.rating;
        } else if (item.element === "Tags") {
          $item.value = ref.inputField.current.state.value;
        } else if (item.element === "DatePicker") {
          $item.value = ref.state.value;
        } else if (item.element === "Camera") {
          $item.value = ref.state.img
            ? ref.state.img.replace("data:image/png;base64,", "")
            : "";
        } else if (item.element === "FileUpload") {
          $item.value = ref.state.fileUpload;
        } else if (ref && ref.inputField && ref.inputField.current) {
          $item = _reactDom.default.findDOMNode(ref.inputField.current);

          if ($item && typeof $item.value === "string") {
            $item.value = $item.value.trim();
          }
        }

        return $item;
      },
    },
    {
      key: "_isIncorrect",
      value: function _isIncorrect(item) {
        let incorrect = false;

        if (item.canHaveAnswer) {
          const ref = this.inputs[item.field_name];

          if (
            item.element === "Checkboxes" ||
            item.element === "RadioButtons"
          ) {
            let _item$options;

            item === null || item === void 0
              ? void 0
              : (_item$options = item.options) === null ||
                _item$options === void 0
              ? void 0
              : _item$options.forEach((option) => {
                  let _ref$options;

                  const $option = _reactDom.default.findDOMNode(
                    ref === null || ref === void 0
                      ? void 0
                      : (_ref$options = ref.options) === null ||
                        _ref$options === void 0
                      ? void 0
                      : _ref$options["child_ref_".concat(option.key)]
                  );

                  if (
                    (option !== null &&
                      option !== void 0 &&
                      option.hasOwnProperty("correct") &&
                      !(
                        $option !== null &&
                        $option !== void 0 &&
                        $option.checked
                      )) ||
                    (!(
                      option !== null &&
                      option !== void 0 &&
                      option.hasOwnProperty("correct")
                    ) &&
                      $option !== null &&
                      $option !== void 0 &&
                      $option.checked)
                  ) {
                    incorrect = true;
                  }
                });
          } else {
            const $item = this._getItemValue(item, ref);

            if (item.element === "Rating") {
              if ($item.value.toString() !== item.correct) {
                incorrect = true;
              }
            } else if (
              $item.value.toLowerCase() !== item.correct.trim().toLowerCase()
            ) {
              incorrect = true;
            }
          }
        }

        return incorrect;
      },
    },
    {
      key: "_isInvalid",
      value: function _isInvalid(item) {
        let invalid = false;

        if (item.required === true) {
          const ref = this.inputs[item.field_name];

          if (
            item.element === "Checkboxes" ||
            item.element === "RadioButtons"
          ) {
            let _item$options2;

            let checked_options = 0;
            item === null || item === void 0
              ? void 0
              : (_item$options2 = item.options) === null ||
                _item$options2 === void 0
              ? void 0
              : _item$options2.forEach((option) => {
                  let _ref$options2;

                  const $option = _reactDom.default.findDOMNode(
                    ref === null || ref === void 0
                      ? void 0
                      : (_ref$options2 = ref.options) === null ||
                        _ref$options2 === void 0
                      ? void 0
                      : _ref$options2["child_ref_".concat(option.key)]
                  );

                  if (
                    $option !== null &&
                    $option !== void 0 &&
                    $option.checked
                  ) {
                    checked_options += 1;
                  }
                });

            if (checked_options < 1) {
              // errors.push(item.label + ' is required!');
              invalid = true;
            }
          } else {
            let _$item$value;

            const $item = this._getItemValue(item, ref);

            if (item.element === "Rating") {
              if ($item.value === 0) {
                invalid = true;
              }
            } else if (
              $item.value === undefined ||
              ((_$item$value = $item.value) === null || _$item$value === void 0
                ? void 0
                : _$item$value.length) < 1
            ) {
              invalid = true;
            }
          }
        }

        return invalid;
      },
    },
    {
      key: "_collect",
      value: function _collect(item) {
        const itemData = {
          name: item.field_name,
          custom_name: item.custom_name || item.field_name,
        };
        if (!itemData.name) return null;
        const ref = this.inputs[item.field_name];

        if (item.element === "Checkboxes" || item.element === "RadioButtons") {
          let _item$options3;

          const checked_options = [];
          item === null || item === void 0
            ? void 0
            : (_item$options3 = item.options) === null ||
              _item$options3 === void 0
            ? void 0
            : _item$options3.forEach((option) => {
                let _ref$options3;

                const $option = _reactDom.default.findDOMNode(
                  ref === null || ref === void 0
                    ? void 0
                    : (_ref$options3 = ref.options) === null ||
                      _ref$options3 === void 0
                    ? void 0
                    : _ref$options3[
                        "child_ref_".concat(
                          option === null || option === void 0
                            ? void 0
                            : option.key
                        )
                      ]
                );

                if ($option !== null && $option !== void 0 && $option.checked) {
                  checked_options.push(
                    option === null || option === void 0 ? void 0 : option.key
                  );
                }
              });
          itemData.value = checked_options;
        } else {
          if (!ref) return null;
          itemData.value = this._getItemValue(item, ref).value;
        }

        return itemData;
      },
    },
    {
      key: "_collectFormData",
      value: function _collectFormData(data) {
        const _this3 = this;

        const formData = [];
        data.forEach((item) => {
          const item_data = _this3._collect(item);

          if (item_data) {
            formData.push(item_data);
          }
        });
        return formData;
      },
    },
    {
      key: "_getSignatureImg",
      value: function _getSignatureImg(item) {
        const ref = this.inputs[item.field_name];
        const $canvas_sig = ref.canvas.current;

        if ($canvas_sig) {
          const base64 = $canvas_sig
            .toDataURL()
            .replace("data:image/png;base64,", "");
          const isEmpty = $canvas_sig.isEmpty();

          const $input_sig = _reactDom.default.findDOMNode(
            ref.inputField.current
          );

          if (isEmpty) {
            $input_sig.value = "";
          } else {
            $input_sig.value = base64;
          }
        }
      },
    },
    {
      key: "handleSubmit",
      value: function handleSubmit(e) {
        e.preventDefault();
        let errors = [];

        if (!this.props.skip_validations) {
          errors = this.validateForm(); // Publish errors, if any.

          this.emitter.emit("formValidation", errors);
        } // Only submit if there are no errors.

        if (errors.length < 1) {
          const { onSubmit } = this.props;

          if (onSubmit) {
            const data = this._collectFormData(this.props.data);

            onSubmit(data);
          } else {
            const $form = _reactDom.default.findDOMNode(this.form);

            $form.submit();
          }
        }
      },
    },
    {
      key: "validateForm",
      value: function validateForm() {
        const _this4 = this;

        const errors = [];
        let data_items = this.props.data;
        const { intl } = this.props;

        if (this.props.display_short) {
          data_items = this.props.data.filter((i) => i.alternateForm === true);
        }

        data_items.forEach((item) => {
          if (item.element === "Signature") {
            _this4._getSignatureImg(item);
          }

          if (_this4._isInvalid(item)) {
            errors.push(
              "".concat(item.label, " ").concat(
                intl.formatMessage({
                  id: "message.is-required",
                }),
                "!"
              )
            );
          }

          if (item.element === "EmailInput") {
            const ref = _this4.inputs[item.field_name];

            const emailValue = _this4._getItemValue(item, ref).value;

            if (emailValue) {
              const validateEmail = function validateEmail(email) {
                return email.match(
                  // eslint-disable-next-line no-useless-escape
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
              };

              const checkEmail = validateEmail(emailValue);

              if (!checkEmail) {
                errors.push(
                  "".concat(item.label, " ").concat(
                    intl.formatMessage({
                      id: "message.invalid-email",
                    })
                  )
                );
              }
            }
          }

          if (
            _this4.props.validateForCorrectness &&
            _this4._isIncorrect(item)
          ) {
            errors.push(
              "".concat(item.label, " ").concat(
                intl.formatMessage({
                  id: "message.was-answered-incorrectly",
                }),
                "!"
              )
            );
          }
        });
        return errors;
      },
    },
    {
      key: "getDataById",
      value: function getDataById(id) {
        const { data } = this.props;
        return data.find((x) => x.id === id);
      },
    },
    {
      key: "getInputElement",
      value: function getInputElement(item) {
        const _this5 = this;

        if (!item) {
          return null;
        }

        if (item !== null && item !== void 0 && item.custom) {
          return this.getCustomElement(item);
        }

        const Input = _formElements.default[item.element];
        return /* #__PURE__ */ _react.default.createElement(Input, {
          handleChange: this.handleChange,
          ref: function ref(c) {
            return (_this5.inputs[item.field_name] = c);
          },
          mutable: true,
          key: "form_".concat(item.id),
          data: item,
          read_only: this.props.read_only,
          defaultValue: this._getDefaultValue(item),
        });
      },
    },
    {
      key: "getContainerElement",
      value: function getContainerElement(item, Element) {
        const _this6 = this;

        const controls = item.childItems.map((x) =>
          x
            ? _this6.getInputElement(_this6.getDataById(x))
            : /* #__PURE__ */ _react.default.createElement("div", null, "\xA0")
        );
        return /* #__PURE__ */ _react.default.createElement(Element, {
          mutable: true,
          key: "form_".concat(item.id),
          data: item,
          controls,
          handleChange: this.handleChange,
        });
      },
    },
    {
      key: "getSimpleElement",
      value: function getSimpleElement(item) {
        const Element = _formElements.default[item.element];
        return /* #__PURE__ */ _react.default.createElement(Element, {
          mutable: true,
          key: "form_".concat(item.id),
          data: item,
          handleChange: this.handleChange,
        });
      },
    },
    {
      key: "getCustomElement",
      value: function getCustomElement(item) {
        const _this7 = this;

        const { intl } = this.props;

        if (!item.component || typeof item.component !== "function") {
          item.component = _registry.default.get(item.key);

          if (!item.component) {
            console.error(
              "".concat(item.element, " ").concat(
                intl.formatMessage({
                  id: "message.was-not-registered",
                })
              )
            );
          }
        }

        const inputProps = item.forwardRef && {
          handleChange: this.handleChange,
          defaultValue: this._getDefaultValue(item),
          ref: function ref(c) {
            return (_this7.inputs[item.field_name] = c);
          },
        };
        return /* #__PURE__ */ _react.default.createElement(
          _customElement.default,
          (0, _extends2.default)(
            {
              mutable: true,
              read_only: this.props.read_only,
              key: "form_".concat(item.id),
              data: item,
              handleChange: this.handleChange,
            },
            inputProps
          )
        );
      },
    },
    {
      key: "render",
      value: function render() {
        const _this8 = this;

        let data_items = this.props.data;

        if (this.props.display_short) {
          data_items = this.props.data.filter((i) => i.alternateForm === true);
        }

        data_items?.forEach((item) => {
          if (
            item &&
            item.readOnly &&
            item.variableKey &&
            _this8.props.variables[item.variableKey]
          ) {
            _this8.answerData[item.field_name] =
              _this8.props.variables[item.variableKey];
          }
        });
        const items = data_items
          .filter((x) => !x.parentId)
          .map((item) => {
            if (!item) return null;

            switch (item.element) {
              case "TextInput":
              case "EmailInput":
              case "NumberInput":
              case "TextArea":
              case "Dropdown":
              case "DatePicker":
              case "RadioButtons":
              case "Rating":
              case "Tags":
              case "Range":
                return _this8.getInputElement(item);

              case "CustomElement":
                return _this8.getCustomElement(item);

              case "FourColumnRow":
                return _this8.getContainerElement(
                  item,
                  _multiColumn.FourColumnRow
                );

              case "ThreeColumnRow":
                return _this8.getContainerElement(
                  item,
                  _multiColumn.ThreeColumnRow
                );

              case "TwoColumnRow":
                return _this8.getContainerElement(
                  item,
                  _multiColumn.TwoColumnRow
                );

              case "Signature":
                return /* #__PURE__ */ _react.default.createElement(Signature, {
                  ref: function ref(c) {
                    return (_this8.inputs[item.field_name] = c);
                  },
                  read_only: _this8.props.read_only || item.readOnly,
                  mutable: true,
                  key: "form_".concat(item.id),
                  data: item,
                  defaultValue: _this8._getDefaultValue(item),
                  handleChange: _this8.handleChange,
                });

              case "Checkboxes":
                return /* #__PURE__ */ _react.default.createElement(
                  Checkboxes,
                  {
                    ref: function ref(c) {
                      return (_this8.inputs[item.field_name] = c);
                    },
                    read_only: _this8.props.read_only,
                    handleChange: _this8.handleChange,
                    mutable: true,
                    key: "form_".concat(item.id),
                    data: item,
                    defaultValue: _this8._optionsDefaultValue(item),
                  }
                );

              case "Image":
                return /* #__PURE__ */ _react.default.createElement(Image, {
                  ref: function ref(c) {
                    return (_this8.inputs[item.field_name] = c);
                  },
                  handleChange: _this8.handleChange,
                  mutable: true,
                  key: "form_".concat(item.id),
                  data: item,
                  defaultValue: _this8._getDefaultValue(item),
                });

              case "Download":
                return /* #__PURE__ */ _react.default.createElement(Download, {
                  download_path: _this8.props.download_path,
                  mutable: true,
                  key: "form_".concat(item.id),
                  data: item,
                });

              case "Camera":
                return /* #__PURE__ */ _react.default.createElement(Camera, {
                  ref: function ref(c) {
                    return (_this8.inputs[item.field_name] = c);
                  },
                  read_only: _this8.props.read_only || item.readOnly,
                  mutable: true,
                  key: "form_".concat(item.id),
                  data: item,
                  defaultValue: _this8._getDefaultValue(item),
                });

              case "FileUpload":
                return /* #__PURE__ */ _react.default.createElement(
                  FileUpload,
                  {
                    ref: function ref(c) {
                      return (_this8.inputs[item.field_name] = c);
                    },
                    read_only: _this8.props.read_only || item.readOnly,
                    mutable: true,
                    key: "form_".concat(item.id),
                    data: item,
                    defaultValue: _this8._getDefaultValue(item),
                  }
                );

              default:
                return _this8.getSimpleElement(item);
            }
          });
        const formTokenStyle = {
          display: "none",
        };
        return /* #__PURE__ */ _react.default.createElement(
          "div",
          null,
          /* #__PURE__ */ _react.default.createElement(_formValidator.default, {
            emitter: this.emitter,
          }),
          /* #__PURE__ */ _react.default.createElement(
            "div",
            {
              className: "react-form-builder-form",
            },
            /* #__PURE__ */ _react.default.createElement(
              "form",
              {
                encType: "multipart/form-data",
                ref: function ref(c) {
                  return (_this8.form = c);
                },
                action: this.props.form_action,
                onSubmit: this.handleSubmit.bind(this),
                method: this.props.form_method,
              },
              this.props.authenticity_token &&
                /* #__PURE__ */ _react.default.createElement(
                  "div",
                  {
                    style: formTokenStyle,
                  },
                  /* #__PURE__ */ _react.default.createElement("input", {
                    name: "utf8",
                    type: "hidden",
                    value: "\u2713",
                  }),
                  /* #__PURE__ */ _react.default.createElement("input", {
                    name: "authenticity_token",
                    type: "hidden",
                    value: this.props.authenticity_token,
                  }),
                  /* #__PURE__ */ _react.default.createElement("input", {
                    name: "task_id",
                    type: "hidden",
                    value: this.props.task_id,
                  })
                ),
              items,
              /* #__PURE__ */ _react.default.createElement(
                "div",
                {
                  className: "btn-toolbar",
                },
                !this.props.hide_actions && this.handleRenderSubmit(),
                !this.props.hide_actions &&
                  this.props.back_action &&
                  this.handleRenderBack()
              )
            )
          )
        );
      },
    },
  ]);
  return ReactForm;
})(_react.default.Component);

const _default = (0, _reactIntl.injectIntl)(ReactForm);

exports.default = _default;
ReactForm.defaultProps = {
  validateForCorrectness: false,
};
