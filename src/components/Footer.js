/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter} from 'react-router-dom';	

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

  renderRelated() {
    const { type, data, match } = this.props;
    if (!data.related.length) {
      return;
    }
    return (
      <div className="col-sm-4">
        <div className="FooterTitle">Related {type}s</div>
        {data.related.map((related) => {
          const id = related.Tool_ID ? related.Tool_ID: related.Method_ID;
          return (
          <Link to={"/browse/tool"+`/${id}`} key={id}><div className="FooterBody Link">{related.Name}</div></Link>
          )
        } 
        )}
      </div>
    );
  }

  render() { // TODO: Render this dynamically depending on the data passed to the component
    return (
      <div className="row" style={{ marginBottom: 20 }}>
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
        {this.renderRelated()}
        <Link to={"/tool" + "/" + 1} key={33}>asdasdasd</Link>
      </div>
    )
  }
}
