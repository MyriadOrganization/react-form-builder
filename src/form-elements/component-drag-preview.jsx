import React, { useState, useEffect } from "react";

const styles = {
  display: "inline-block",
  transform: "rotate(-2deg)",
  WebkitTransform: "rotate(-2deg)",
};

const Box = ({ title }) => {
  return <div className="rfb-drag-preview">{title}</div>;
};

export const BoxDragPreview = ({ item }) => {
  const [tickTock, setTickTock] = useState(false);

  const text = item.data.content
    ? item.data.content
    : item.data.label
    ? item.data.label
    : item.data.text;
  const isLongText = text.length > 20;
  const previewText = isLongText ? `${text.slice(0, 20)}...` : text;

  // useEffect(function subscribeToIntervalTick() {
  //     const interval = setInterval(() => {
  //         setTickTock(!tickTock);
  //     }, 500);
  //     return () => clearInterval(interval);
  // }, [tickTock]);

  return (
    <div style={styles} role="BoxPreview">
      <Box title={previewText} color={tickTock} />
    </div>
  );
};
