/**
 * <Toolbar />
 */

import React from "react";
import { injectIntl } from "react-intl";
import ToolbarItem from "./toolbar-draggable-item";
import ID from "./UUID";
import store from "./stores/store";
import Icon from "./Icons/Icon";

function isDefaultItem(item) {
  const keys = Object.keys(item);
  return keys.filter((x) => x !== "element" && x !== "key").length === 0;
}

function buildItems(items, defaultItems) {
  if (!items) {
    return defaultItems;
  }
  return items.map((x) => {
    let found;
    if (isDefaultItem(x)) {
      found = defaultItems.find(
        (y) => (x.element || x.key) === (y.element || y.key)
      );
    }
    return found || x;
  });
}

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    const { intl } = this.props;
    const items = buildItems(props.items, this._defaultItems(intl));
    this.state = {
      items,
      searchQuery: "",
    };
    this.create = this.create.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount() {
    store.subscribe((state) => this.setState({ store: state }));
  }

  static _defaultItemOptions(element, intl) {
    switch (element) {
      case "Dropdown":
        return [
          {
            value: "place_holder_option_1",
            text: intl.formatMessage({ id: "place-holder-option-1" }),
            key: `dropdown_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_option_2",
            text: intl.formatMessage({ id: "place-holder-option-2" }),
            key: `dropdown_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_option_3",
            text: intl.formatMessage({ id: "place-holder-option-3" }),
            key: `dropdown_option_${ID.uuid()}`,
          },
        ];
      case "Tags":
        return [
          {
            value: "place_holder_tag_1",
            text: intl.formatMessage({ id: "place-holder-tag-1" }),
            key: `tags_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_tag_2",
            text: intl.formatMessage({ id: "place-holder-tag-2" }),
            key: `tags_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_tag_3",
            text: intl.formatMessage({ id: "place-holder-tag-3" }),
            key: `tags_option_${ID.uuid()}`,
          },
        ];
      case "Checkboxes":
        return [
          {
            value: "place_holder_option_1",
            text: intl.formatMessage({ id: "place-holder-option-1" }),
            key: `checkboxes_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_option_2",
            text: intl.formatMessage({ id: "place-holder-option-2" }),
            key: `checkboxes_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_option_3",
            text: intl.formatMessage({ id: "place-holder-option-3" }),
            key: `checkboxes_option_${ID.uuid()}`,
          },
        ];
      case "RadioButtons":
        return [
          {
            value: "place_holder_option_1",
            text: intl.formatMessage({ id: "place-holder-option-1" }),
            key: `radiobuttons_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_option_2",
            text: intl.formatMessage({ id: "place-holder-option-2" }),
            key: `radiobuttons_option_${ID.uuid()}`,
          },
          {
            value: "place_holder_option_3",
            text: intl.formatMessage({ id: "place-holder-option-3" }),
            key: `radiobuttons_option_${ID.uuid()}`,
          },
        ];
      default:
        return [];
    }
  }

  _defaultItems(intl) {
    return [
      {
        key: "Header",
        name: intl.formatMessage({ id: "header-text" }),
        icon: "header-text",
        static: true,
        content: intl.formatMessage({ id: "place-holder-text" }),
      },
      {
        key: "Label",
        name: intl.formatMessage({ id: "label" }),
        static: true,
        icon: "label",
        content: intl.formatMessage({ id: "place-holder-text" }),
      },
      {
        key: "Paragraph",
        name: intl.formatMessage({ id: "paragraph" }),
        static: true,
        icon: "paragraph",
        content: intl.formatMessage({ id: "place-holder-text" }),
      },
      {
        key: "LineBreak",
        name: intl.formatMessage({ id: "line-break" }),
        static: true,
        icon: "line-break",
      },
      {
        key: "Dropdown",
        canHaveAnswer: true,
        name: intl.formatMessage({ id: "dropdown" }),
        icon: "arrow-square-down",
        label: intl.formatMessage({ id: "place-holder-label" }),
        field_name: "dropdown_",
        options: [],
      },
      {
        key: "Tags",
        canHaveAnswer: true,
        name: intl.formatMessage({ id: "tags" }),
        icon: "tag",
        label: intl.formatMessage({ id: "place-holder-label" }),
        field_name: "tags_",
        options: [],
      },
      {
        key: "Checkboxes",
        canHaveAnswer: true,
        name: intl.formatMessage({ id: "checkboxes" }),
        icon: "checkbox",
        label: intl.formatMessage({ id: "place-holder-label" }),
        field_name: "checkboxes_",
        options: [],
      },
      {
        key: "RadioButtons",
        canHaveAnswer: true,
        name: intl.formatMessage({ id: "multiple-choice" }),
        icon: "radio",
        label: intl.formatMessage({ id: "place-holder-label" }),
        field_name: "radiobuttons_",
        options: [],
      },
      {
        key: "TextInput",
        canHaveAnswer: true,
        name: intl.formatMessage({ id: "text-input" }),
        label: intl.formatMessage({ id: "place-holder-label" }),
        icon: "text-input",
        field_name: "text_input_",
      },
      {
        key: "EmailInput",
        canHaveAnswer: true,
        name: intl.formatMessage({ id: "email-input" }),
        label: intl.formatMessage({ id: "place-holder-email" }),
        icon: "email-input",
        field_name: "email_input_",
      },
      {
        key: "NumberInput",
        canHaveAnswer: true,
        name: intl.formatMessage({ id: "number-input" }),
        label: intl.formatMessage({ id: "place-holder-label" }),
        icon: "number-input",
        field_name: "number_input_",
      },
      {
        key: "TextArea",
        canHaveAnswer: true,
        name: intl.formatMessage({ id: "multi-line-input" }),
        label: intl.formatMessage({ id: "place-holder-label" }),
        icon: "multi-line",
        field_name: "text_area_",
      },
      {
        key: "TwoColumnRow",
        canHaveAnswer: false,
        name: intl.formatMessage({ id: "two-columns-row" }),
        label: "",
        icon: "two-columns",
        field_name: "two_col_row_",
      },
      {
        key: "ThreeColumnRow",
        canHaveAnswer: false,
        name: intl.formatMessage({ id: "three-columns-row" }),
        label: "",
        icon: "three-columns",
        field_name: "three_col_row_",
      },
      {
        key: "FourColumnRow",
        canHaveAnswer: false,
        name: intl.formatMessage({ id: "four-columns-row" }),
        label: "",
        icon: "four-columns",
        field_name: "four_col_row_",
      },
      {
        key: "Image",
        name: intl.formatMessage({ id: "image" }),
        label: "",
        icon: "image",
        field_name: "image_",
        src: "",
      },
      {
        key: "Rating",
        canHaveAnswer: true,
        name: intl.formatMessage({ id: "rating" }),
        label: intl.formatMessage({ id: "place-holder-label" }),
        icon: "star",
        field_name: "rating_",
      },
      {
        key: "DatePicker",
        canDefaultToday: true,
        canReadOnly: true,
        dateFormat: "MM/dd/yyyy",
        timeFormat: "hh:mm aa",
        showTimeSelect: false,
        showTimeSelectOnly: false,
        showTimeInput: false,
        name: intl.formatMessage({ id: "date" }),
        icon: "calendar-dates",
        label: intl.formatMessage({ id: "place-holder-label" }),
        field_name: "date_picker_",
      },
      {
        key: "Signature",
        canReadOnly: true,
        name: intl.formatMessage({ id: "signature" }),
        icon: "edit",
        label: intl.formatMessage({ id: "signature" }),
        field_name: "signature_",
      },
      {
        key: "HyperLink",
        name: intl.formatMessage({ id: "website" }),
        icon: "link",
        static: true,
        content: intl.formatMessage({ id: "place-holder-website-link" }),
        href: "http://www.example.com",
      },
      // {
      //   key: "Download",
      //   name: intl.formatMessage({ id: "file-attachment" }),
      //   icon: "file-attach",
      //   static: true,
      //   content: intl.formatMessage({ id: "place-holder-file-name" }),
      //   field_name: "download_",
      //   file_path: "",
      //   _href: "",
      // },
      {
        key: "Range",
        name: intl.formatMessage({ id: "range" }),
        icon: "sliders-horizontal",
        label: intl.formatMessage({ id: "place-holder-label" }),
        field_name: "range_",
        step: 1,
        default_value: 3,
        min_value: 1,
        max_value: 5,
        min_label: intl.formatMessage({ id: "easy" }),
        max_label: intl.formatMessage({ id: "difficult" }),
      },
      {
        key: "Camera",
        name: intl.formatMessage({ id: "camera" }),
        icon: "camera",
        label: intl.formatMessage({ id: "place-holder-label" }),
        field_name: "camera_",
      },
      // {
      //   key: "FileUpload",
      //   name: intl.formatMessage({ id: "file-upload" }),
      //   icon: "file-upload",
      //   label: intl.formatMessage({ id: "place-holder-label" }),
      //   field_name: "file_upload_",
      // },
    ];
  }

  create(item) {
    const { intl } = this.props;

    const elementOptions = {
      id: ID.uuid(),
      element: item.element || item.key,
      text: item.name,
      static: item.static,
      required: false,
      showDescription: item.showDescription,
    };

    if (this.props.showDescription === true && !item.static) {
      elementOptions.showDescription = true;
    }

    if (item.type === "custom") {
      elementOptions.key = item.key;
      elementOptions.custom = true;
      elementOptions.forwardRef = item.forwardRef;
      elementOptions.bare = item.bare;
      elementOptions.props = item.props;
      elementOptions.component = item.component || null;
      elementOptions.custom_options = item.custom_options || [];
    }

    if (item.static) {
      elementOptions.bold = false;
      elementOptions.italic = false;
    }

    if (item.canHaveAnswer) {
      elementOptions.canHaveAnswer = item.canHaveAnswer;
    }

    if (item.canReadOnly) {
      elementOptions.readOnly = false;
    }

    if (item.canDefaultToday) {
      elementOptions.defaultToday = false;
    }

    if (item.content) {
      elementOptions.content = item.content;
    }

    if (item.href) {
      elementOptions.href = item.href;
    }

    elementOptions.canHavePageBreakBefore =
      item.canHavePageBreakBefore !== false;
    elementOptions.canHaveAlternateForm = item.canHaveAlternateForm !== false;
    elementOptions.canHaveDisplayHorizontal =
      item.canHaveDisplayHorizontal !== false;
    if (elementOptions.canHaveDisplayHorizontal) {
      elementOptions.inline = item.inline;
    }
    elementOptions.canHaveOptionCorrect = item.canHaveOptionCorrect !== false;
    elementOptions.canHaveOptionValue = item.canHaveOptionValue !== false;
    elementOptions.canPopulateFromApi = item.canPopulateFromApi !== false;

    if (item.class_name) {
      elementOptions.class_name = item.class_name;
    }

    if (item.key === "Image") {
      elementOptions.src = item.src;
    }

    if (item.key === "DatePicker") {
      elementOptions.dateFormat = item.dateFormat;
      elementOptions.timeFormat = item.timeFormat;
      elementOptions.showTimeSelect = item.showTimeSelect;
      elementOptions.showTimeSelectOnly = item.showTimeSelectOnly;
      elementOptions.showTimeInput = item.showTimeInput;
    }

    if (item.key === "Download") {
      elementOptions._href = item._href;
      elementOptions.file_path = item.file_path;
    }

    if (item.key === "Range") {
      elementOptions.step = item.step;
      elementOptions.default_value = item.default_value;
      elementOptions.min_value = item.min_value;
      elementOptions.max_value = item.max_value;
      elementOptions.min_label = item.min_label;
      elementOptions.max_label = item.max_label;
    }

    if (item.defaultValue) {
      elementOptions.defaultValue = item.defaultValue;
    }

    if (item.field_name) {
      elementOptions.field_name = item.field_name + ID.uuid();
    }

    if (item.label) {
      elementOptions.label = item.label;
    }

    if (item.options) {
      if (item.options.length > 0) {
        elementOptions.options = item.options;
      } else {
        elementOptions.options = Toolbar._defaultItemOptions(
          elementOptions.element,
          intl
        );
      }
    }

    return elementOptions;
  }

  _onClick(item) {
    // ElementActions.createElement(this.create(item));
    store.dispatch("create", this.create(item));
  }

  handleSearchChange(event) {
    this.setState({ searchQuery: event.target.value });
  }

  clearSearch() {
    this.setState({ searchQuery: "" });
  }

  filterItems() {
    const { items, searchQuery } = this.state;
    if (!searchQuery) {
      return items;
    }
    return items.filter(
      (item) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      // eslint-disable-next-line function-paren-newline
    );
  }

  render() {
    const { intl } = this.props;
    const filteredItems = this.filterItems();
    return (
      <div className="col-md-4 react-form-builder-toolbar float-right">
        <div className="toolbar-heading">
          <p className="!text-primary-900">
            {intl.formatMessage({ id: "toolbox" })}
          </p>
          <div className="search_container">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.2474 12.2513L10.1264 10.1303M10.1264 10.1303C11.0764 9.18022 11.6641 7.86772 11.6641 6.41797C11.6641 3.51847 9.31356 1.16797 6.41406 1.16797C3.51457 1.16797 1.16406 3.51847 1.16406 6.41797C1.16406 9.31746 3.51457 11.668 6.41406 11.668C7.86381 11.668 9.17631 11.0803 10.1264 10.1303Z"
                stroke="#8FA0A7"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search component"
              value={this.state.searchQuery}
              onChange={this.handleSearchChange}
            />
            {this.state.searchQuery && (
              <svg
                onClick={this.clearSearch}
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="close-icon"
              >
                <path
                  d="M1 11L11 1M1 1L11 11"
                  stroke="#737373"
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <ul>
          {filteredItems.map((item) => (
            <ToolbarItem
              data={item}
              key={item.key}
              onClick={this._onClick.bind(this, item)}
              onCreate={this.create}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default injectIntl(Toolbar);
