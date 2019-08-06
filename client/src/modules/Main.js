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
console.log(defaultTeam);

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getTeams = async () => {
    const response = await fetch("/api/teams");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log("getTeams " + console.log(JSON.stringify(body)));
    return body;
  };

  componentDidMount() {
    //this.getTeams()
    //  .then(res => {
    //    console.log("receiving teams");
    //    console.log(JSON.stringify(res));
    //    //this.setState({ teams: res });
    //  })
    //  .catch(err => console.log(err));

    //team.id = uuidv4();
    //team.Team[0].nick = "testing";

    //this.putTeams();
    // this.forceUpdate();
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
                <Nav team={team} />
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
