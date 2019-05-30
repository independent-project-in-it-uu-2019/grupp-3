import React, { Component } from 'react'

import '../css/footer.css'

export default class Footer extends Component {

  constructor(props) {
      super(props);
      this.state = {
          data: this.props.data, 
      }
  }

  clickLink(link) {
      if (!link) {
          alert("No website sent as prop");
          return;
      }
      window.open(link, "_blank");
  }

  render() { //TODO: Render this dynamically depending on the data passed to the component
    return (
      <div className="row" style={{marginBottom: 20}}>
        <div className="col-sm-4">
            <div className="FooterTitle">Website</div>
            <div className="FooterBody Link" onClick={() =>this.clickLink(this.state.data.website)}>https://www.w3schools.com/css/css_border.asp</div>
        </div>
        <div className="col-sm-4">
            <div className="FooterTitle">References</div>
            <div className="FooterBody">Elon Musk</div>
        </div>
        <div className="col-sm-4">
            <div className="FooterTitle">Related Tools</div>
            <div className="FooterBody Link">Scalable Learning</div>
            <div className="FooterBody Link">Active Presenter</div>
            <div className="FooterBody Link">Screencaster</div>
        </div>
      </div>
    )
  }
}
