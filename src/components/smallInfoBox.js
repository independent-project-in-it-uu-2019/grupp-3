import React, { Component } from 'react'
import '../css/smallInfoBox.css'
import Plus from '../svg/plus.svg'

export default class SmallInfoBox extends Component {
  constructor(props) {
    super(props);
  }
  onItemClick(){
    alert("Not implemented yet!");
  }

  render() {
    return (
    <div className="smallInfoBox" style={{height: 150, width: 500}}>
          <div className="title">
            <a onClick={this.onItemClick}>
              <h2>{this.props.Title}</h2>
            </a>
          </div>
          <div className="seperator" style={{height: 150}}/>
          <p>{this.props.Text}</p>
          <div className="plus">
            <a onClick={this.onItemClick}>
              <span>
                <img src={Plus} style={{height: 70, width: 70}}/>
              </span>
            </a>
          </div>
    </div>
    )
  }

}
