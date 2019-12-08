import React, { Component } from "react";
import "../App.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Segment } from "semantic-ui-react";
import Nav from "./nav.js";

//const uuidv4 = require("uuid/v4");


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
  constructor(props) {
    super();
    this.state = {
      team : {
        nick: "",  id: "",
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
      },
      teamList: []
    };
  }

  putTeams = async () => {
    this.setState({teams: this.state.teamList.push(this.state.team)});
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/teams/`, {
      method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
      ,
      body: JSON.stringify(this.state.team)
    });
    const body = await response.json();

    return body;
  };

  getTeams = async () => {
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/teams/`, {
      method: 'GET'});
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    console.log("getTeams " + console.log(body));
    this.setState({teamList: body});
    console.log("main.js this.teamList= database get data => " + JSON.stringify(this.state.teamList));
    return body;
  };

  componentDidMount() {
    //this.getTeams();   
  }

  render() {
    return (
      <div className="App" id="view">
        <Grid className="containment">
          <Grid.Row id="header">
            <Grid.Column width={16}>
              <Segment className="topBar">Header</Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row id="content">
            <Grid.Column id="nav" className="navLeft" width={4}>
              <Segment>
                <Nav team={this.state.team} teams={this.state.teamList} />
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
