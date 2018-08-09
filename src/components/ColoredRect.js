import React from 'react';
import { Rect, Group, Text, Label } from 'react-konva';
import Konva from 'konva';


export default class ColoredRect extends React.Component {
  state = {
    color: Konva.Util.getRandomColor()
  };


  render() {
    return (
      <Rect
        x={this.props.xCoord}
        y={this.props.yCoord}
        text={this.props.text}
        width={this.props.scale}
        height={this.props.scale}
        fill={this.state.color}
        stroke='black'

        // shadowBlur={5}
        // onClick={this.handleClick}
      />
    );
  }
}