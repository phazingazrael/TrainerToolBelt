import React, { Component } from "react";
import "../App.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Segment } from "semantic-ui-react";
import Nav from "./nav";

//const uuidv4 = require("uuid/v4");

const team = {
  nick: "",
  id: "",
  teamName: "",
  gen: "",
  dead: [],
  boxed: [],
  Team: [
    {
      id: "",
      name: "",
      dexID: "",
      nick: "",
      img: "",
      type: "",
      route: "",
      isDead: false
    },
    {
      id: "",
      name: "",
      dexID: "",
      nick: "",
      img: "",
      type: "",
      route: "",
      isDead: false
    },
    {
      id: "",
      name: "",
      dexID: "",
      nick: "",
      img: "",
      type: "",
      route: "",
      isDead: false
    },
    {
      id: "",
      name: "",
      dexID: "",
      nick: "",
      img: "",
      type: "",
      route: "",
      isDead: false
    },
    {
      id: "",
      name: "",
      dexID: "",
      nick: "",
      img: "",
      type: "",
      route: "",
      isDead: false
    },
    {
      id: "",
      name: "",
      dexID: "",
      nick: "",
      img: "",
      type: "",
      route: "",
      isDead: false
    }
  ]
};
//const teams=[];
const defaultTeam = {
  nick: "",
  id: "",
  teamName: "",
  gen: "",
  dead: [],
  boxed: [],
  Team: [
    {
      id: "",
      name: "",
      dexID: "",
      nick: "",
      img: "",
      type: "",
      route: "",
      isDead: false
    },
    {
      id: "",
      name: "",
      dexID: "",
      nick: "",
      img: "",
      type: "",
      route: "",
      isDead: false
    },
    {
      id: "",
      name: "",
      dexID: "",
      nick: "",
      img: "",
      type: "",
      route: "",
      isDead: false
    },
    {
      id: "",
      name: "",
      dexID: "",
      nick: "",
      img: "",
      type: "",
      route: "",
      isDead: false
    },
    {
      id: "",
      name: "",
      dexID: "",
      nick: "",
      img: "",
      type: "",
      route: "",
      isDead: false
    },
    {
      id: "",
      name: "",
      dexID: "",
      nick: "",
      img: "",
      type: "",
      route: "",
      isDead: false
    }
  ]
};
console.log('defaults'+JSON.stringify(defaultTeam));

class Main extends Component {
  constructor() {
    super();
    this.state = {};
    this.teamList = [];
  }

  getTeams = async () => {
    const response = await fetch("/api/teams");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log("getTeams " + console.log(JSON.stringify(body)));
    this.teamList = body;
    console.log("main.js this.teamList= database get" + this.teamList);
    return body;
  };

  componentDidMount() {

  }

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
                <Nav team={team} teams={this.teamList} />
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
