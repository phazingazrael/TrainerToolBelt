import React from "react";


const uuidv4 = require("uuid/v4");


//const TeamList = teamList;
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      teamList: [],
      teams: [],
      team:[]
    };
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
      body: JSON.stringify(this.state.teamList)
    });
    const body = await response.json();

    return body;
  };

  componentDidMount() {
    this.getTeams()
      .then(res => {
        //this.setState.teams = JSON.parse(res);
        let tempTeam = this.props.team;
        tempTeam.id = uuidv4();
        this.setState({ team:this.props.team});
        this.setState({teamList:JSON.parse(res)});
        //this.state.teamList.push(this.teams);
        //this.state.teamList.push(this.team);
        console.log("this.state.team: "+JSON.stringify(this.state.team));
      })
      .catch(err => console.log(err));
      
  }

  
    
  render() {
    console.log("TEAM " + JSON.stringify(this.state.teamList));
    const items = this.state.teamList.map(function(item){
      return <li name={item.id} key={item.id}> {item.id} </li>;
    });    
    return (
      <div>
        <p>{this.state.team.id}</p>
        <div className="teamActive">
          <div className="teamItem">
            test
            <ul>
              {items}
            </ul>
          </div>
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
