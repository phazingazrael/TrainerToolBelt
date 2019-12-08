import React from "react";
import "./nav.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Card } from "semantic-ui-react";


const uuidv4 = require("uuid/v4");


//const TeamList = teamList;
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      teamList: [],
      teams: [],
      team:{}
    };
  }

  getTeams = async () => {
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/teams/`, {
      method: 'GET'});
    const body = await response.text();

  if (response.status !== 200) throw Error(body.message);
      //console.log("getTeams " + body);
    return body;
    };
 
  putTeams = async () => {
    console.log("teamList "+JSON.stringify(this.state.teamList));
    console.log("sendTeams = "+JSON.stringify(this.state.teams));
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/teams/`, {
      method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
      ,
      body: JSON.stringify(this.state.teams)
    });
    const body = await response.json();

    this.componentDidMount();
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
        this.setState({teams: JSON.parse(res)});
        console.log("before mergeing to send "+this.state.teams);
        this.setState(prevState => ({
          teams: [...prevState.teams, this.state.team]
        }));
        console.log("after mergeing to send "+this.state.teams);
        console.log("this.state.team: "+JSON.stringify(this.state.team));
      })
      .catch(err => console.log(err));      
      let winHeight = window.innerHeight;
      let headHeight = document.getElementById("header").clientHeight;
      //console.log(headHeight);
      let contentHeight = document.getElementById("content").clientHeight;
      let navHeight = document.getElementById("nav").clientHeight;
      let differenciate = (contentHeight - navHeight)/2;
      //console.log("height difference between #content and @nav is "+differenciate+"px");
      let newHeight = ((winHeight - headHeight) + differenciate) - 30 +"px";
      console.log(newHeight);
      let nav = document.getElementById("nav");
      nav.style("height", newHeight);
  }

  
    
  render() {
    console.log("TEAM " + JSON.stringify(this.state.teamList));
    const TeamList = this.state.teamList.map(function(item){
      return (
        <Grid.Row className="teamIcon" id={item.id} name={item.id} key={item.id}>
          <Grid.Row>
            <p>Testing Team</p>
          </Grid.Row>
          <Grid.Row>
          <Card.Group itemsPerRow={6}>
          <Card image={"./img/miniDex/"+Math.floor(Math.random() * 803)+".png"} />
          <Card image={"./img/miniDex/"+Math.floor(Math.random() * 803)+".png"} />
          <Card image={"./img/miniDex/"+Math.floor(Math.random() * 803)+".png"} />
          <Card image={"./img/miniDex/"+Math.floor(Math.random() * 803)+".png"} />
          <Card image={"./img/miniDex/"+Math.floor(Math.random() * 803)+".png"} />
          <Card image={"./img/miniDex/"+Math.floor(Math.random() * 803)+".png"} />
          </Card.Group>
          </Grid.Row>
        </Grid.Row>
      ) ;      //<li name={item.id} key={item.id}> {item.id} </li>;
    });    
    return (
      <div>
        <div className="teamActive">
          <p>{this.state.team.id}</p>
        </div>
        <div className="teamList">
            
                {TeamList}
            
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
