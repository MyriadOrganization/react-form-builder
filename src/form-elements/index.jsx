// eslint-disable-next-line max-classes-per-file
import { saveAs } from "file-saver";
import fetch from "isomorphic-fetch";
import React from "react";
import ReactBootstrapSlider from "react-bootstrap-slider";
import Select from "react-select";
import SignaturePad from "react-signature-canvas";
import TextareaAutosize from "react-textarea-autosize";

import ComponentHeader from "./component-header";
import ComponentLabel from "./component-label";
import Icon from "../Icons/Icon";
import DatePicker from "./date-picker";
import myxss from "./myxss";
import StarRating from "./star-rating";
import { getFileHandlers } from "../file-handlers";

const FormElements = {};

class Header extends React.Component {
  render() {
    // const headerClasses = `dynamic-input ${this.props.data.element}-input`;
    let classNames = "static";
    if (this.props.data.bold) {
      classNames += " bold";
    }
    if (this.props.data.italic) {
      classNames += " italic";
    }

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <h3
          className={`${classNames} header`}
          dangerouslySetInnerHTML={{
            __html: myxss.process(this.props.data.content),
          }}
        />
      </div>
    );
  }
}

class Paragraph extends React.Component {
  render() {
    let classNames = "static";
    if (this.props.data.bold) {
      classNames += " bold";
    }
    if (this.props.data.italic) {
      classNames += " italic";
    }

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <p
          className={classNames}
          dangerouslySetInnerHTML={{
            __html: myxss.process(this.props.data.content),
          }}
        />
      </div>
    );
  }
}

class Label extends React.Component {
  render() {
    let classNames = "static";
    if (this.props.data.bold) {
      classNames += " bold";
    }
    if (this.props.data.italic) {
      classNames += " italic";
    }

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <label
          className={classNames}
          dangerouslySetInnerHTML={{
            __html: myxss.process(this.props.data.content),
          }}
        />
      </div>
    );
  }
}

class LineBreak extends React.Component {
  render() {
    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <hr />
      </div>
    );
  }
}

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }

  render() {
    const props = {};
    props.type = "text";
    props.className = "form-control shared-input";
    props.name = this.props.data.field_name;
    if (this.props.mutable) {
      props.defaultValue = this.props.defaultValue;
      props.ref = this.inputField;
      props.onChange = this.props.handleChange;
    }

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    if (this.props.read_only) {
      props.disabled = "disabled";
    }
    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel {...this.props} />
          <input {...props} />
        </div>
      </div>
    );
  }
}

class EmailInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }

  render() {
    const props = {};
    props.type = "text";
    props.className = "form-control shared-input";
    props.name = this.props.data.field_name;
    if (this.props.mutable) {
      props.defaultValue = this.props.defaultValue;
      props.ref = this.inputField;
      props.onChange = this.props.handleChange;
    }

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    if (this.props.read_only) {
      props.disabled = "disabled";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel {...this.props} />
          <input {...props} />
        </div>
      </div>
    );
  }
}

class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }

  render() {
    const props = {};
    props.type = "number";
    props.className = "form-control shared-input";
    props.name = this.props.data.field_name;

    if (this.props.mutable) {
      props.defaultValue = this.props.defaultValue;
      props.ref = this.inputField;
      props.onChange = this.props.handleChange;
    }

    if (this.props.read_only) {
      props.disabled = "disabled";
    }

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel {...this.props} />
          <input {...props} />
        </div>
      </div>
    );
  }
}

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }

  render() {
    const props = {};
    props.className = "form-control shared-input";
    props.name = this.props.data.field_name;

    if (this.props.read_only) {
      props.disabled = "disabled";
    }

    if (this.props.mutable) {
      props.defaultValue = this.props.defaultValue;
      props.inputRef = this.inputField;
      props.onChange = this.props.handleChange;
    }

    if (!this.props.read_only) {
      props.maxRows = 20;
    }

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel {...this.props} />
          <TextareaAutosize {...props} />
        </div>
      </div>
    );
  }
}

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }

  render() {
    const props = {};
    props.className = "form-control shared-input dropdown";
    props.name = this.props.data.field_name;

    if (this.props.mutable) {
      props.defaultValue = this.props.defaultValue;
      props.ref = this.inputField;
      props.onChange = this.props.handleChange;
    }

    if (this.props.read_only) {
      props.disabled = "disabled";
    }

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel {...this.props} />
          <select {...props}>
            <option value="">Select…</option>
            {/* Skip blank options: older forms added their own as a placeholder. */}
            {this.props.data.options
              .filter((option) => option.value !== "" || option.text)
              .map((option) => {
                const this_key = `preview_${option.key}`;
                return (
                  <option value={option.value} key={this_key}>
                    {option.text}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    );
  }
}

class Signature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultValue: props.defaultValue,
    };
    this.inputField = React.createRef();
    this.canvas = React.createRef();
  }

  clear = () => {
    if (this.state.defaultValue) {
      this.setState({ defaultValue: "" });
    } else if (this.canvas.current) {
      this.canvas.current.clear();
    }
  };

  render() {
    const { defaultValue } = this.state;
    let canClear = !!defaultValue;
    const props = {};
    props.type = "hidden";
    props.name = this.props.data.field_name;

    if (this.props.mutable) {
      props.defaultValue = defaultValue;
      props.ref = this.inputField;
      props.onChange = this.props.handleChange;
    }
    const pad_props = { clearOnResize: false };
    // umd requires canvasProps={{ width: 400, height: 150 }}
    if (this.props.mutable) {
      pad_props.defaultValue = defaultValue;
      pad_props.ref = this.canvas;
      canClear = !this.props.read_only;
      props.onChange = this.props.handleChange;
    }

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    let sourceDataURL;
    if (defaultValue && defaultValue.length > 0) {
      sourceDataURL = `data:image/png;base64,${defaultValue}`;
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel {...this.props} />
          {this.props.read_only === true || !!sourceDataURL ? (
            <img src={sourceDataURL} />
          ) : (
            <SignaturePad {...pad_props} />
          )}
          {canClear && (
            <span
              className="clear-signature"
              onClick={this.clear}
              title="Clear Signature"
            >
              <Icon icon="close" />
            </span>
          )}
          <input {...props} />
        </div>
      </div>
    );
  }
}

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
    const { defaultValue, data } = props;
    this.state = { value: this.getDefaultValue(defaultValue, data.options) };
  }

  getDefaultValue(defaultValue, options) {
    if (defaultValue) {
      if (typeof defaultValue === "string") {
        const vals = defaultValue.split(",").map((x) => x.trim());
        return options.filter((x) => vals.indexOf(x.value) > -1);
      }
      return options.filter((x) => defaultValue.indexOf(x.value) > -1);
    }
    return [];
  }

  // state = { value: this.props.defaultValue !== undefined ? this.props.defaultValue.split(',') : [] };

  handleChange = (e) => {
    this.setState({ value: e || [] });
  };

  render() {
    const options = this.props.data.options.map((option) => {
      option.label = option.text;
      return option;
    });
    const props = {};
    props.isMulti = true;
    props.classNamePrefix = "rfb-select";
    props.name = this.props.data.field_name;
    props.onChange = this.handleChange;

    props.options = options;
    if (!this.props.mutable) {
      props.value = options[0].text;
    } // to show a sample of what tags looks like
    if (this.props.mutable) {
      props.isDisabled = this.props.read_only;
      props.value = this.state.value;
      props.ref = this.inputField;
      props.onChange = this.props.handleChange;
    }

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel {...this.props} />
          <Select {...props} />
        </div>
      </div>
    );
  }
}

class Checkboxes extends React.Component {
  constructor(props) {
    super(props);
    this.options = {};
  }

  render() {
    const self = this;
    let classNames = "custom-control custom-checkbox";

    if (this.props.data.inline) {
      classNames += " option-inline";
    }

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel className="form-label" {...this.props} />
          {this.props.data.options.map((option) => {
            const instancePrefix = this.props.instanceId
              ? `${this.props.instanceId.replace(/:/g, "")}_`
              : "";
            const this_key = `${instancePrefix}preview_${option.key}`;
            const props = {};
            props.name = `option_${option.key}`;

            props.type = "checkbox";
            props.value = option.value;
            if (self.props.mutable) {
              props.defaultChecked =
                self.props.defaultValue !== undefined &&
                self.props.defaultValue.indexOf(option.key) > -1;
              props.onChange = self.props.handleChange;
            }
            if (this.props.read_only) {
              props.disabled = "disabled";
            }
            return (
              <div className={classNames} key={this_key}>
                <input
                  id={`fid_${this_key}`}
                  className="custom-control-input"
                  ref={(c) => {
                    if (c && self.props.mutable) {
                      self.options[`child_ref_${option.key}`] = c;
                    }
                  }}
                  {...props}
                />
                <label
                  className="custom-control-label"
                  htmlFor={`fid_${this_key}`}
                >
                  {option.text}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

class RadioButtons extends React.Component {
  constructor(props) {
    super(props);
    this.options = {};
  }

  render() {
    const self = this;
    let classNames = "custom-control custom-radio ";
    if (this.props.data.inline) {
      classNames += " option-inline";
    }

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel className="form-label" {...this.props} />
          {this.props.data.options.map((option) => {
            const instancePrefix = self.props.instanceId
              ? `${self.props.instanceId.replace(/:/g, "")}_`
              : "";
            const this_key = `${instancePrefix}preview_${option.key}`;
            const props = {};
            props.name = `${instancePrefix}${self.props.data.field_name}`;

            props.type = "radio";
            props.value = option.value;
            if (self.props.mutable) {
              props.defaultChecked =
                self.props.defaultValue !== undefined &&
                (self.props.defaultValue.indexOf(option.key) > -1 ||
                  self.props.defaultValue.indexOf(option.value) > -1);
              props.onChange = self.props.handleChange;
            }
            if (this.props.read_only) {
              props.disabled = "disabled";
            }

            return (
              <div className={classNames} key={this_key}>
                <input
                  id={`fid_${this_key}`}
                  className="custom-control-input "
                  ref={(c) => {
                    if (c && self.props.mutable) {
                      self.options[`child_ref_${option.key}`] = c;
                    }
                  }}
                  {...props}
                />
                <label
                  className="custom-control-label"
                  htmlFor={`fid_${this_key}`}
                >
                  {option.text}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

class Image extends React.Component {
  render() {
    const style = this.props.data.center ? { textAlign: "center" } : null;

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style, style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        {this.props.data.src && (
          <img
            src={this.props.data.src}
            width={this.props.data.width}
            height={this.props.data.height}
          />
        )}
        {!this.props.data.src && <div className="no-image">No Image</div>}
      </div>
    );
  }
}

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
  }

  render() {
    const props = {};
    props.name = this.props.data.field_name;
    props.ratingAmount = 5;

    if (this.props.mutable) {
      props.rating =
        this.props.defaultValue !== undefined
          ? parseFloat(this.props.defaultValue, 10)
          : 0;
      props.editing = true;
      props.disabled = this.props.read_only;
      props.ref = this.inputField;
      props.onChange = this.props.handleChange;
    }

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel {...this.props} />
          <StarRating {...props} />
        </div>
      </div>
    );
  }
}

class HyperLink extends React.Component {
  render() {
    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group hyperlink">
          <a target="_blank" href={this.props.data.href}>
            {this.props.data.content}
          </a>
        </div>
      </div>
    );
  }
}

class Download extends React.Component {
  render() {
    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <a
            href={`${this.props.download_path}?id=${this.props.data.file_path}`}
          >
            {this.props.data.content}
          </a>
        </div>
      </div>
    );
  }
}

// Saved Camera answers are PNG base64 with the data-URL prefix stripped (see
// _getItemValue in form.jsx); other image types keep their full data URL.
const toImageSrc = (value) => {
  if (typeof value !== "string" || value.length === 0) return null;
  return /^(data:|https?:)/i.test(value)
    ? value
    : `data:image/png;base64,${value}`;
};

class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: toImageSrc(props.defaultValue) };
  }

  displayImage = (e) => {
    const self = this;
    const { target } = e;
    let file;
    let reader;

    if (target.files && target.files.length) {
      file = target.files[0];
      // eslint-disable-next-line no-undef
      reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        self.setState(
          {
            img: reader.result,
          },
          self.notifyChange
        );
      };
    }
  };

  clearImage = () => {
    this.setState(
      {
        img: null,
      },
      this.notifyChange
    );
  };

  // The photo lives in state, not in an input, so the form's onChange never sees it unless we
  // report it once the FileReader result (or the clear) has landed.
  notifyChange = () => {
    if (!this.props.handleChange) return;
    this.props.handleChange({
      target: { name: this.props.data.field_name, value: this.state.img || "" },
    });
  };

  render() {
    const imageStyle = {
      objectFit: "scale-down",
      objectPosition: this.props.data.center ? "center" : "left",
    };
    let baseClasses = "SortableItem rfb-item";
    const name = this.props.data.field_name;
    const fileInputStyle = this.state.img ? { display: "none" } : null;
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }
    const sourceDataURL = toImageSrc(this.props.defaultValue);

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel {...this.props} />
          {this.props.read_only === true &&
          this.props.defaultValue &&
          this.props.defaultValue.length > 0 ? (
            <div>
              <img
                style={imageStyle}
                src={sourceDataURL}
                width={
                  this.props.data.width < window.innerWidth
                    ? this.props.data.width
                    : 0.9 * window.innerWidth
                }
                height={this.props.data.height || "auto"}
              />
            </div>
          ) : (
            <div className="image-upload-container">
              <div style={fileInputStyle}>
                <input
                  name={name}
                  type="file"
                  accept="image/*"
                  capture="camera"
                  className="image-upload"
                  onChange={this.displayImage}
                />
                <div className="image-upload-control">
                  <div className="btn btn-default">
                    <Icon icon="camera" /> Upload Photo
                  </div>
                  <p>Select an image from your computer or device.</p>
                </div>
              </div>

              {this.state.img && (
                <div>
                  <img
                    src={this.state.img}
                    height="100"
                    className="image-upload-preview"
                  />
                  <br />
                  <div
                    className="btn btn-image-clear"
                    onClick={this.clearImage}
                  >
                    <Icon icon="close" /> Clear Photo
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const isStoredFile = (value) =>
  !!value && typeof value === "object" && typeof value.handle === "string";

const fileSizeLabel = (size) =>
  size > 1024 * 1024
    ? `${Math.ceil(size / (1024 * 1024))} mb`
    : `${Math.ceil(size / 1024)} kb`;

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUpload: isStoredFile(props.defaultValue) ? props.defaultValue : null,
      uploading: false,
      error: null,
    };
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  notifyChange = () => {
    if (this.props.handleChange) {
      this.props.handleChange({ target: { name: this.props.data.field_name } });
    }
  };

  displayFileUpload = async (e) => {
    const { target } = e;
    const file = target.files && target.files[0];
    target.value = "";
    if (!file) return;

    const { upload } = getFileHandlers();
    if (!upload) {
      this.setState({ fileUpload: file, error: null });
      return;
    }

    this.setState({ fileUpload: null, uploading: true, error: null });
    try {
      const stored = await upload(file);
      if (!stored || !stored.handle) throw new Error("No handle");
      if (this.unmounted) return;
      this.setState(
        {
          uploading: false,
          fileUpload: {
            handle: stored.handle,
            name: stored.filename || file.name,
            mimetype: stored.mimetype || file.type,
            size: stored.size || file.size,
          },
        },
        this.notifyChange,
      );
    } catch (error) {
      if (this.unmounted) return;
      this.setState({
        uploading: false,
        error: "Couldn't upload the file. Please try again.",
      });
    }
  };

  clearFileUpload = () => {
    this.setState({ fileUpload: null, error: null }, this.notifyChange);
  };

  saveFile = async (e) => {
    e.preventDefault();
    const sourceUrl = this.props.defaultValue;
    const response = await fetch(sourceUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      responseType: "blob",
    });
    const dispositionHeader = response.headers.get("Content-Disposition");
    const resBlob = await response.blob();
    // eslint-disable-next-line no-undef
    const blob = new Blob([resBlob], {
      type: this.props.data.fileType || response.headers.get("Content-Type"),
    });
    if (dispositionHeader && dispositionHeader.indexOf(";filename=") > -1) {
      const fileName = dispositionHeader.split(";filename=")[1];
      saveAs(blob, fileName);
    } else {
      const fileName = sourceUrl.substring(sourceUrl.lastIndexOf("/") + 1);
      saveAs(response.url, fileName);
    }
  };

  renderFileLink(file) {
    const { fileUrl } = getFileHandlers();
    const href = isStoredFile(file) && fileUrl ? fileUrl(file) : null;
    if (!href) return null;
    return (
      <a
        className="btn btn-default"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="download" /> Open file
      </a>
    );
  }

  render() {
    let baseClasses = "SortableItem rfb-item";
    const name = this.props.data.field_name;
    const { fileUpload, uploading, error } = this.state;
    const hideInput = fileUpload || uploading;
    const fileInputStyle = hideInput ? { display: "none" } : null;
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }
    const isLegacyUrl =
      typeof this.props.defaultValue === "string" &&
      this.props.defaultValue.length > 0;

    let body;
    if (this.props.read_only === true && isLegacyUrl) {
      body = (
        <div>
          <button className="btn btn-default" onClick={this.saveFile}>
            <Icon icon="download" /> Download File
          </button>
        </div>
      );
    } else if (this.props.read_only === true) {
      body = isStoredFile(fileUpload) ? (
        <div className="file-upload-preview">
          <div style={{ marginBottom: "5px" }}>{`Name: ${fileUpload.name}`}</div>
          {this.renderFileLink(fileUpload)}
        </div>
      ) : (
        <p>No file uploaded.</p>
      );
    } else {
      body = (
        <div className="image-upload-container">
          <div style={fileInputStyle}>
            <input
              name={name}
              type="file"
              accept={this.props.data.fileType || "*"}
              className="image-upload"
              onChange={this.displayFileUpload}
            />
            <div className="image-upload-control">
              <div className="btn btn-default">
                <Icon icon="file-attach" /> Upload File
              </div>
              <p>Select a file from your computer or device.</p>
            </div>
          </div>

          {uploading && <p className="file-upload-status">Uploading...</p>}
          {error && <p className="file-upload-error">{error}</p>}

          {fileUpload && (
            <div>
              <div className="file-upload-preview">
                <div style={{ display: "inline-block", marginRight: "5px" }}>
                  {`Name: ${fileUpload.name}`}
                </div>
                {fileUpload.size > 0 && (
                  <div style={{ display: "inline-block", marginLeft: "5px" }}>
                    {`Size:  ${fileSizeLabel(fileUpload.size)}`}
                  </div>
                )}
              </div>
              <br />
              {this.renderFileLink(fileUpload)}
              <div
                className="btn btn-file-upload-clear"
                onClick={this.clearFileUpload}
              >
                <Icon icon="close" /> Clear File
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel {...this.props} />
          {body}
        </div>
      </div>
    );
  }
}

class Range extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();
    this.state = {
      value:
        props.defaultValue !== undefined
          ? parseInt(props.defaultValue, 10)
          : parseInt(props.data.default_value, 10),
    };
  }

  changeValue = (e) => {
    const { target } = e;
    this.setState({
      value: target.value,
    });
  };

  render() {
    const props = {};
    const name = this.props.data.field_name;

    props.type = "range";
    props.list = `tickmarks_${name}`;
    props.min = this.props.data.min_value;
    props.max = this.props.data.max_value;
    props.step = this.props.data.step;

    props.value = this.state.value;
    props.change = this.changeValue;

    if (this.props.mutable) {
      props.ref = this.inputField;
      props.onChange = this.props.handleChange;
    }

    const datalist = [];
    for (
      let i = parseInt(props.min_value, 10);
      i <= parseInt(props.max_value, 10);
      i += parseInt(props.step, 10)
    ) {
      datalist.push(i);
    }

    const oneBig = 100 / (datalist.length - 1);

    const _datalist = datalist.map((d, idx) => (
      <option key={`${props.list}_${idx}`}>{d}</option>
    ));

    const visible_marks = datalist.map((d, idx) => {
      const option_props = {};
      let w = oneBig;
      if (idx === 0 || idx === datalist.length - 1) {
        w = oneBig / 2;
      }
      option_props.key = `${props.list}_label_${idx}`;
      option_props.style = { width: `${w}%` };
      if (idx === datalist.length - 1) {
        option_props.style = { width: `${w}%`, textAlign: "right" };
      }
      return <label {...option_props}>{d}</label>;
    });

    let baseClasses = "SortableItem rfb-item";
    if (this.props.data.pageBreakBefore) {
      baseClasses += " alwaysbreak";
    }

    return (
      <div style={{ ...this.props.style }} className={baseClasses}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel {...this.props} />
          <div className="range">
            <div className="clearfix">
              <span className="float-left">{this.props.data.min_label}</span>
              <span className="float-right">{this.props.data.max_label}</span>
            </div>
            <ReactBootstrapSlider {...props} />
          </div>
          <div className="visible_marks">{visible_marks}</div>
          <input name={name} value={this.state.value} type="hidden" />
          <datalist id={props.list}>{_datalist}</datalist>
        </div>
      </div>
    );
  }
}

FormElements.Header = Header;
FormElements.Paragraph = Paragraph;
FormElements.Label = Label;
FormElements.LineBreak = LineBreak;
FormElements.TextInput = TextInput;
FormElements.EmailInput = EmailInput;
FormElements.NumberInput = NumberInput;
FormElements.TextArea = TextArea;
FormElements.Dropdown = Dropdown;
FormElements.Signature = Signature;
FormElements.Checkboxes = Checkboxes;
FormElements.DatePicker = DatePicker;
FormElements.RadioButtons = RadioButtons;
FormElements.Image = Image;
FormElements.Rating = Rating;
FormElements.Tags = Tags;
FormElements.HyperLink = HyperLink;
FormElements.Download = Download;
FormElements.Camera = Camera;
FormElements.FileUpload = FileUpload;
FormElements.Range = Range;

export default FormElements;
