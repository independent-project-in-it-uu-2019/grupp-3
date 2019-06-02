import React, { Component } from 'react'
import '../css/button.css'

export default class Button extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="button" style={{width: this.props.width,
                    height: this.props.height,
                    color: this.props.color,
                    borderRadius: "5px 5px 5px 5px",
                    }}>
            {this.props.text}
      </div>
    )
  }
}
