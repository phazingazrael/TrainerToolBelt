import React from "react";

//const team = this.props.team;

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {};
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

  getTeams = async () => {
    const response = await fetch("/api/teams");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    //console.log("getTeams " + console.log(JSON.stringify(body)));
    return body;
  };

  async componentDidMount() {
    this.getTeams()
      .then(res => {
        console.log("receiving teams");
        console.log(res);
        //this.setState({ teams: res });
    
      })
      .catch(err => console.log(err));
    //this.putTeams();
    //this.forceUpdate();
  }

  render() {
    var team = this.props.team;
    console.log("TEAM " + JSON.stringify(team.Team[0]));

    return (
      <div>
        <p>{team.id}</p>
        {console.log("team?" + JSON.stringify(this.props))}
        <div className="teamList">
          <div className="teamItem">test</div>
        </div>
        Thing to go here is nav side link with all teams
        <br/>
        <button onClick={() => this.putTeams().then(this.getTeams())} type="button">
          save team?
        </button>
      </div>
    );
  }
}

export default Nav;
