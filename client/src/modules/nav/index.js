import React from "react";
const uuidv4 = require("uuid/v4");

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.teamList = [];
  }

  //getTeams = async () => {
  //  const response = await fetch("/api/teams");
  //  const body = await response.json();

  //if (response.status !== 200) throw Error(body.message);
  //    console.log("getTeams " + response.json());
  //  return body;
  //  };

  putTeams = async () => {
    const response = await fetch("/api/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.props.team)
    });
    const body = await response.text();

    console.log({ responseToPost: body });
  };

  putTeams = async () => {
    this.teamList.push(this.props.team)
    const response = await fetch("/api/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.teamList)
    });
    const body = await response.text();

    console.log({ responseToPost: body });
  };

  getTeams = async () => {
    const response = await fetch("/api/teams");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    //console.log("getTeams " + console.log(JSON.stringify(body)));
    return body;
  };

  componentDidMount() {
    this.getTeams()
      .then(res => {
        console.log("receiving teams");
        console.log("this.props.team: "+JSON.stringify(this.props.team))
        console.log("teamDB: " + JSON.stringify(res));
        this.teamList = res;
        console.log("post this.teamlist=res: " + JSON.stringify(this.teamList));
        //this.teamList.push(this.props.team);
      })
      .catch(err => console.log(err));

    //this.putTeams();
    //this.forceUpdate();
  }

  render() {
    var team = this.props.team;
    this.props.team.id = uuidv4();
    this.props.team.Team[0].nick = "pushDaTeam";

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
