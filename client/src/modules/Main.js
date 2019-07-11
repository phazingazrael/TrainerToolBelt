import React, { Component } from "react";
import "../App.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Segment } from "semantic-ui-react";
import Nav from "./nav";


class Main extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <Segment className="topBar">Header</Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column className="navLeft" width={4}>
              <Segment>
                <Nav />
              </Segment>
            </Grid.Column>
            <Grid.Column className="contentMain " width={12}>
              <Segment>content</Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Main;
