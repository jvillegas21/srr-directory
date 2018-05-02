import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import BusinessListingItem from '../components/BusinessListing/BusinessListingItem';
import { Grid, Col, Row } from 'react-bootstrap';
import DirectorySearch from '../components/Directory/DirectorySearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Grid>
            <Row>
              <Col lg={12}>
                <div className="srr-directory-search-container">
                  <DirectorySearch />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <BusinessListingItem />
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
