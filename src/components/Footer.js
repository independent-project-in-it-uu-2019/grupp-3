/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import '../css/footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.renderRelated = this.renderRelated.bind(this);
  }

  clickLink(link) {
    if (!link) {
      alert('No website sent as prop');
      return;
    }
    window.open(link, '_blank');
  }

  renderRelated() {
    const { type, data } = this.props;
    if (!data.related.length) {
      return;
    }
    return (
      <div className="col-sm-4">
        <div className="FooterTitle">Related {type}s</div>
        {data.related.map(related =>
          <Link to="method"><div className="FooterBody Link">{related.Name}</div></Link>
        )}
      </div>
    );
  }

  render() { // TODO: Render this dynamically depending on the data passed to the component
    return (
      <div className="row" style={{ marginBottom: 20 }}>
        <div className="col-sm-4">
          <div className="FooterTitle">Website</div>
          <div className="FooterBody Link" onClick={() => this.clickLink(this.state.data.website)}>https://www.w3schools.com/css/css_border.asp</div>
        </div>
        <div className="col-sm-4">
          <div className="FooterTitle">References</div>
          <div className="FooterBody">Elon Musk</div>
        </div>
        {this.renderRelated()}
      </div>
    );
  }
}

export default withRouter(Footer);
