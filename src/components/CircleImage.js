import React, { Component } from 'react'
import "../css/circleImage.css"

export default class CircleImage extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="CircleImage" style={{
                                    height: this.props.height,
                                    width: this.props.width,
                                    borderRadius: 50+"%",
                                    backgroundImage: `url(${this.props.imageURL})`,
                                    backgroundSize: "cover",
                                    }}>
      </div>
    )
  }
}
