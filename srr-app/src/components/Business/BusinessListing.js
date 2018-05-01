import React, { Component } from 'react';
import BusinessIMG from './BusinessImage';
import BusinessInfo from './BusinessInfo';
import { Grid, Col, Row } from 'react-bootstrap';

class BusinessListing extends Component {
  render() {
    return (
      <Grid>
        <Row className="srr-business-listing-wrapper">
          <Col xs={12} md={2}>
            <BusinessIMG />
          </Col>
          <Col xs={12} md={8}>
            <BusinessInfo />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default BusinessListing;
