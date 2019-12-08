import React from "react";
import ReactDOM from "react-dom";


const uuidv4 = require("uuid/v4");

var team = [];
var teams = [];
var teamList = [];

const TeamList = teamList;
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {};
    //this.teamList = [];
  }

  getTeams = async () => {
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/teams/`, {
      method: 'GET'});
    const body = await response.text();

  if (response.status !== 200) throw Error(body.message);
      console.log("getTeams " + body);
    return body;
    };
 
  putTeams = async () => {
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/teams/`, {
      method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
      ,
      body: JSON.stringify(teamList)
    });
    const body = await response.json();

    return body;
  };

  componentDidMount() {
    this.props.team.id = uuidv4();
    this.getTeams()
      .then(res => {
        teams = JSON.parse(res);
        console.log(JSON.stringify(teams));
        //teamList = teams.map();
        teamList.push(teams);
        teamList.push(team);
        console.log(JSON.stringify(teamList));
        //console.log("receiving teams");
        //console.log("this.props.team: " + JSON.stringify(this.props.team));
        //console.log("teamDB: " + res);
        //this.teamList = res;
        //console.log("post this.teamlist=res: " + this.teamList);
        //this.teamList.push(this.props.team);
        console.log(JSON.stringify(TeamList));
      })
      .catch(err => console.log(err));
      
  }

  
    
  render() {
    this.componentDidMount();
    team = this.props.team;
    teams = this.props.teams;
    //console.log(JSON.stringify(this.props.team));
    //this.props.team.id = uuidv4();
    //this.props.team.Team[0].nick = "pushDaTeam";

    //this.teamList.push({team});

    console.log("TEAM " + JSON.stringify(this.teamList));
    
    return (
      <div>
        <p>{team.id}</p>
        <div className="teamList">
          <div className="teamItem">test</div>
        </div>
        Thing to go here is nav side link with all teams
        <br />
        <button
          onClick={() => this.putTeams().then(this.getTeams())} 
          type="button"
        >
          save team?
        </button>
      </div>
    );
  }
}

export default Nav;
