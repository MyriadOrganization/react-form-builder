import React, { PureComponent } from "react";
import { DragSource } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import ItemTypes from "../ItemTypes";

const style = {
  // display: 'inline-block',
  // border: '1px dashed gray',
  // padding: '0.5rem 1rem',
  // backgroundColor: 'white',
  cursor: "move",
};

const dragHandleSource = {
  beginDrag(props) {
    const { data, index, onDestroy, setAsChild, getDataById } = props;
    return {
      itemType: ItemTypes.BOX,
      index: data.parentId ? -1 : index,
      parentIndex: data.parentIndex,
      id: data.id,
      col: data.col,
      onDestroy,
      setAsChild,
      getDataById,
      data,
    };
  },
};

class DragHandle extends PureComponent {
  componentDidMount() {
    const { connectDragPreview } = this.props;
    if (connectDragPreview) {
      // Use empty image as a drag preview so browsers don't draw it
      // and we can draw whatever we want on the custom drag layer instead.
      connectDragPreview(getEmptyImage(), {
        // IE fallback: specify that we'd rather screenshot the node
        // when it already knows it's being dragged so we can hide it with CSS.
        captureDraggingState: true,
      });
    }
  }

  render() {
    const { connectDragSource } = this.props;
    return connectDragSource(
      <div className="btn is-isolated dragSvg" style={style}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.60234 6.4C8.26506 6.4 8.80234 5.86274 8.80234 5.2C8.80234 4.53726 8.26506 4 7.60234 4C6.9396 4 6.40234 4.53726 6.40234 5.2C6.40234 5.86274 6.9396 6.4 7.60234 6.4ZM7.60234 11.2C8.26506 11.2 8.80234 10.6627 8.80234 10C8.80234 9.33728 8.26506 8.8 7.60234 8.8C6.9396 8.8 6.40234 9.33728 6.40234 10C6.40234 10.6627 6.9396 11.2 7.60234 11.2ZM8.80234 14.8C8.80234 15.4627 8.26506 16 7.60234 16C6.9396 16 6.40234 15.4627 6.40234 14.8C6.40234 14.1373 6.9396 13.6 7.60234 13.6C8.26506 13.6 8.80234 14.1373 8.80234 14.8ZM12.4023 6.4C13.0651 6.4 13.6023 5.86274 13.6023 5.2C13.6023 4.53726 13.0651 4 12.4023 4C11.7396 4 11.2023 4.53726 11.2023 5.2C11.2023 5.86274 11.7396 6.4 12.4023 6.4ZM13.6023 10C13.6023 10.6627 13.0651 11.2 12.4023 11.2C11.7396 11.2 11.2023 10.6627 11.2023 10C11.2023 9.33728 11.7396 8.8 12.4023 8.8C13.0651 8.8 13.6023 9.33728 13.6023 10ZM12.4023 16C13.0651 16 13.6023 15.4627 13.6023 14.8C13.6023 14.1373 13.0651 13.6 12.4023 13.6C11.7396 13.6 11.2023 14.1373 11.2023 14.8C11.2023 15.4627 11.7396 16 12.4023 16Z"
            fill="#8FA0A7"
          />
        </svg>
      </div>
    );
  }
}

export default DragSource(
  ItemTypes.BOX,
  dragHandleSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  })
)(DragHandle);
