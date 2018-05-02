import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';

class DirectorySearch extends Component {
  render() {
    return(
      <div className="srr-directory-search">
        <Form inline>
          <FormGroup controlId="formInlineName" bsSize="large">
            <ControlLabel>Business Name</ControlLabel>{' '}
            <FormControl type="text" placeholder="Business Name" />
          </FormGroup>{' '}
          <Button type="submit" bsSize="large">Search</Button>
        </Form>
      </div>
    );
  }
}

export default DirectorySearch;
