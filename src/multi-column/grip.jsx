import React from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../ItemTypes';

const gripSource = {
  beginDrag(props) {
    const {
      data, index, onDestroy, setAsChild, getDataById,
    } = props;
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

const Grip = ({ connectDragSource }) => connectDragSource(
  <div className="btn is-isolated"><i className="is-isolated fas fa-grip-vertical"></i></div>,
);

export default DragSource(
  ItemTypes.BOX,
  gripSource,
  (connect) => ({
    connectDragSource: connect.dragSource(),
  }),
)(Grip);
