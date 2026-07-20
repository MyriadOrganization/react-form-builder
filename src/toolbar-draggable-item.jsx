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
          <Icon icon="drag-dots" />
        </div>
      </li>
    );
  }
}

export default DragSource(ItemTypes.CARD, cardSource, (connect) => ({
  connectDragSource: connect.dragSource(),
}))(ToolbarItem);
