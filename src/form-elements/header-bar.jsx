/**
 * <HeaderBar />
 */

import React from "react";
// import Grip from '../multi-column/grip';
import DragHandle from "./component-drag-handle";
import Icon from "../Icons/Icon";

export default class HeaderBar extends React.Component {
  render() {
    return (
      <div className="toolbar-header">
        <span className="">{this.props.data.text}</span>
        <div className="toolbar-header-buttons-container">
          <div className="toolbar-header-buttons">
            {this.props.data.element !== "LineBreak" &&
              (this.props.data.element !== "CustomElement" ||
                this.props.data.hasOwnProperty("label") ||
                this.props.data.hasOwnProperty("rows")) && (
                <div
                  className="btn is-isolated"
                  onClick={this.props.editModeOn.bind(
                    this.props.parent,
                    this.props.data
                  )}
                >
                  <Icon icon="edit-3" />
                </div>
              )}
            <div
              className="btn is-isolated"
              onClick={this.props.onDestroy.bind(this, this.props.data)}
            >
              <Icon icon="trash" />
            </div>
            {/* {!this.props.data.isContainer &&
            <DragHandle data={this.props.data} index={this.props.index} onDestroy={this.props.onDestroy} setAsChild={this.props.setAsChild} />
          } */}
          </div>
          <DragHandle
            data={this.props.data}
            index={this.props.index}
            onDestroy={this.props.onDestroy}
            setAsChild={this.props.setAsChild}
          />
        </div>
      </div>
    );
  }
}
