import React, { Component } from 'react'
import '../css/smallInfoBox.css'

export default class SmallInfoBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="smallInfoBox">
      <div class="card" style={{height: 150, width: 500}}>
        <img src={this.props.EntryBackground} class="card-img" style={{height: 150, width: 500}}/>
        <div class="card-img-overlay">
          <h2>Tool Title</h2>
          <div className="seperator"></div>
          <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer </p>
          <div className="plus">
              <i class="fas fa-camera" style={{color: "black"}}/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
