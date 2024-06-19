import React from "react";
import { IconSvg } from "./icons-svg";

class Icon extends React.Component {
  render() {
    const { icon } = this.props;

    return <> {IconSvg[icon] ? IconSvg[icon] : ""}</>;
  }
}

export default Icon;
