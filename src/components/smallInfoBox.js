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
    <div className="col-sm-6">
    <div className="smallInfoBox" >
          <div onClick={this.onItemClick} className="smallInfoBoxTitle">
            <h2>{this.props.Title}</h2>
          </div>
          <div className="smallInfoBoxText">
            <p>{this.props.Text}</p>
          </div>
          <div>
            <div className="seperator" style={{height: "100%"}}/>
            <div className="plus">
              <img onClick={this.onItemClick} src={Plus} style={{height: "80%", width: "80%"}}/>
            </div>
          </div>
    </div>
    </div>
    )
  }
}
