import React from "react";
//const uuidv4 = require("uuid/v4");

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.team = {
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
          dead: false
        },
        {
          id: "",
          name: "",
          dexID: "",
          nick: "",
          img: "",
          type: "",
          route: "",
          dead: false
        },
        {
          id: "",
          name: "",
          dexID: "",
          nick: "",
          img: "",
          type: "",
          route: "",
          dead: false
        },
        {
          id: "",
          name: "",
          dexID: "",
          nick: "",
          img: "",
          type: "",
          route: "",
          dead: false
        },
        {
          id: "",
          name: "",
          dexID: "",
          nick: "",
          img: "",
          type: "",
          route: "",
          dead: false
        },
        {
          id: "",
          name: "",
          dexID: "",
          nick: "",
          img: "",
          type: "",
          route: "",
          dead: false
        }
      ]
    };
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
    //const body = await response.text();

    //console.log({ responseToPost: body });
  };

  componentDidMount() {
    //this.team.id = uuidv4();
    //this.team.Team[0].nick = "testing";

    //this.getTeams()
    //  .then(res => {
    //    console.log("receiving teams");
    //    console.log(res);
    //    //this.setState({ teams: res });
    //
    //  })
    //  .catch(err => console.log(err));
    //this.putTeams();
    this.forceUpdate();
  }

  render() {
    console.log("TEAM " + JSON.stringify(this.team.Team[0]));

    return (
      <div>
        <p>{this.props.id}</p>
        {console.log("team?" + JSON.stringify(this.props))}
        <div className="teamList">
          <div className="teamItem">test</div>
        </div>
        Thing to go here is nav side link with all teams
      </div>
    );
  }
}

export default Nav;
