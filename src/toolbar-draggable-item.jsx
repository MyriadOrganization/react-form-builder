/**
 * <ToolbarItem />
 */

import React from "react";
import { DragSource } from "react-dnd";
import ItemTypes from "./ItemTypes";
import ID from "./UUID";
import Icon from "./Icons/Icon";

const cardSource = {
  beginDrag(props) {
    return {
      id: ID.uuid(),
      index: -1,
      data: props.data,
      onCreate: props.onCreate,
    };
  },
};

class ToolbarItem extends React.Component {
  render() {
    const { connectDragSource, data, onClick } = this.props;
    if (!connectDragSource) return null;
    return connectDragSource(
      <li onClick={onClick}>
        <div>
          <Icon icon={`${data.icon}`} />
          {data.name}
        </div>
        <div className="dragHandle_li">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.60234 6.4C8.26506 6.4 8.80234 5.86274 8.80234 5.2C8.80234 4.53726 8.26506 4 7.60234 4C6.9396 4 6.40234 4.53726 6.40234 5.2C6.40234 5.86274 6.9396 6.4 7.60234 6.4ZM7.60234 11.2C8.26506 11.2 8.80234 10.6627 8.80234 10C8.80234 9.33728 8.26506 8.8 7.60234 8.8C6.9396 8.8 6.40234 9.33728 6.40234 10C6.40234 10.6627 6.9396 11.2 7.60234 11.2ZM8.80234 14.8C8.80234 15.4627 8.26506 16 7.60234 16C6.9396 16 6.40234 15.4627 6.40234 14.8C6.40234 14.1373 6.9396 13.6 7.60234 13.6C8.26506 13.6 8.80234 14.1373 8.80234 14.8ZM12.4023 6.4C13.0651 6.4 13.6023 5.86274 13.6023 5.2C13.6023 4.53726 13.0651 4 12.4023 4C11.7396 4 11.2023 4.53726 11.2023 5.2C11.2023 5.86274 11.7396 6.4 12.4023 6.4ZM13.6023 10C13.6023 10.6627 13.0651 11.2 12.4023 11.2C11.7396 11.2 11.2023 10.6627 11.2023 10C11.2023 9.33728 11.7396 8.8 12.4023 8.8C13.0651 8.8 13.6023 9.33728 13.6023 10ZM12.4023 16C13.0651 16 13.6023 15.4627 13.6023 14.8C13.6023 14.1373 13.0651 13.6 12.4023 13.6C11.7396 13.6 11.2023 14.1373 11.2023 14.8C11.2023 15.4627 11.7396 16 12.4023 16Z"
              fill="#8FA0A7"
            />
          </svg>
        </div>
      </li>
    );
  }
}

export default DragSource(ItemTypes.CARD, cardSource, (connect) => ({
  connectDragSource: connect.dragSource(),
}))(ToolbarItem);
