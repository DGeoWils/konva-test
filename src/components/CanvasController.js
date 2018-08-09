import React from 'react';
import { Stage, Layer} from 'react-konva';
import ColoredRect from './ColoredRect';


export default class CanvasController extends React.Component {
  static defaultProps = {
    testVolume: 4000,
    initialScale: 20,
    maxScale: 45,
    minScale: 10
  };

  constructor(props) {
    super(props);
    this.state = {
      scale: this.props.initialScale
    };
  }

  _handleZoom = (arg) => {
    let newZoom = this.state.scale;
    if(typeof arg === 'string') {
      if(arg === 'in' && newZoom < this.props.maxScale) {
        newZoom++;
      }

      if(arg === 'out' && newZoom > this.props.minScale) {
        newZoom--;
      }
    }

    if(typeof arg === 'number') {
      if(arg < this.props.minScale) {
        newZoom = this.props.minScale;
      }
      else if(arg > this.props.maxScale) {
        newZoom = this.props.maxScale;
      }
      else {
        newZoom = arg;
      }
    }

    this.setState({
        scale: newZoom
    });
  };

  _handleWheelZoom = (e) => {
    if(e.evt.deltaY > 0) {
      this._handleZoom('in');
    }
    else if(e.evt.deltaY < 0) {
      this._handleZoom('out');
    }
  };

  render() {
    let rects = [];
    for(let i = 0; i < this.props.testVolume; i++) {
      let xCoord = i % 75 * (this.state.scale);
      let yCoord = Math.floor(i / 100) * (this.state.scale);

      rects.push(
        <ColoredRect
          key={i}
          xCoord={xCoord}
          yCoord={yCoord}
          scale={this.state.scale}
          text={i + ""}
        />
      );
    }



    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        draggable
        onWheel={this._handleWheelZoom}

      >
        <Layer
          scale={this.state.scale}>
          {rects}
        </Layer>
      </Stage>
    );
  }
}