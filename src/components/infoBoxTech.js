import React, { Component } from 'react'
import CircleImage from './CircleImage'
import '../css/infoBoxTech.css'

export default class SmallInfoTech extends Component {
  constructor(props) {
    super(props);
  }

  onItemClick(){
    alert("Not implemented yet!");
  }

  render() {
    return (
      <div className="col-sm-6">
        <div className="SmallInfoTech">
          <div class="row">
            <div class="col-sm-4">
              <CircleImage height="80%" width="90%" imageURL={this.props.imageURL}/>
            </div>
            <div class="col-sm-8">
              <div onClick={this.onItemClick} className="SmallInfoTechTitle">
                <h2>{this.props.Title}</h2>
              </div>
              <div className="SmallInfoTechText">
                <p>{this.props.Text}</p>
              </div>
              <button onClick={this.onItemClick} type="button btn-xs" className="ReadMoreButton">
                  Read More &#9654;
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="seperator"/>
        </div>
      </div>
    )
  }
}
