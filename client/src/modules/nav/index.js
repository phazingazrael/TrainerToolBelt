import React from "react";


const uuidv4 = require("uuid/v4");

//var team = [];
//var teams = [];
//var teamList = [];

//const TeamList = teamList;
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.teamList = [];
    //this.team = this.props.team;
    this.teams = [];
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
      body: JSON.stringify(this.teamList)
    });
    const body = await response.json();

    return body;
  };

  componentDidMount() {
    this.getTeams()
      .then(res => {
        this.teams = JSON.parse(res);
        this.team = this.props.team;
        this.team.id = uuidv4();
        //console.log("component did mount, get teams data " + JSON.stringify(teams));
        //this.teamList = teams.map();
        this.teamList.push(this.teams);
        this.teamList.push(this.team);
        console.log(JSON.stringify(this.teamList));
      })
      .catch(err => console.log(err));
      
  }

  
    
  render() {
    //this.componentDidMount();
    //this.team = this.props.team;
    //this.teams = this.props.teams;
    //console.log(JSON.stringify(this.props.team));
    //this.props.team.id = uuidv4();
    //this.props.team.Team[0].nick = "pushDaTeam";

    //this.teamList.push({team});

    console.log("TEAM " + JSON.stringify(this.teamList));
    
    return (
      <div>
        <p>{this.props.team.id}</p>
        <div className="teamActive">
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
