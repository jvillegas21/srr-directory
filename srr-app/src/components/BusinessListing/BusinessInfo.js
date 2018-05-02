import React, {Component} from 'react';

class BusinessInfo extends Component {
  render() {
    return(
      <div className="srr-business-info-wrapper">
        <h2>Business Name</h2>
        <ul>
          <li>Contact Name: John Doe</li>
          <li>Phone: (123)456-7890</li>
          <li>Email: <a href="#">info@biz.com</a></li>
          <li>Website: <a href="#">http://www.website.com</a></li>
        </ul>
      </div>
    );
  }
}

export default BusinessInfo;
