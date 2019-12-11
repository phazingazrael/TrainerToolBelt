import React from "react";
import "./nav.css";
import "semantic-ui-css/semantic.min.css";
import { Grid, Card } from "semantic-ui-react";
import NewTeam from "./NewTeam";


const uuidv4 = require("uuid/v4");



//const TeamList = teamList;
class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      teamList: [],
      teams: [],
      team:{},
      style: {
        height: "200px"
      },
    };
  }

  getTeams = async () => {
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/teams`, {
      method: 'GET'});
    const body = await response.text();

  if (response.status !== 200) throw Error(body.message);
      //console.log("getTeams " + body);
    return body;
    };
 
  putTeams = async () => {
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/teams`, {
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

  delTeams = async () => {
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/teams`, {
      method: 'delete',
      body: JSON.stringify(this.state.teams)
    });
    const body = await response.json();

    this.componentDidMount();
    return body;
  };

  calcHeight =() =>{
    let winHeight = window.innerHeight;
    let headHeight = document.getElementById("header").clientHeight;
    let contentHeight = document.getElementById("content").clientHeight;
    let navHeight = document.getElementById("nav").clientHeight;
    let differenciate = (contentHeight - navHeight)/2;
    let newHeight = ((winHeight - headHeight) + differenciate) - 60 +"px";
    this.setState(prevState => {
      let style = Object.assign({}, prevState.style);   // creating copy of state variable style
      style.height = newHeight;                         // update the name property, assign a new value                 
      return { style };                                 // return new object style object
    })
    //this.delTeams();
  }

  componentDidMount() {
    this.getTeams()
      .then(res => {
        //this.setState.teams = JSON.parse(res);
        let tempTeam = this.props.team;
        tempTeam.id = uuidv4();
        this.setState({ team:this.props.team});
        this.setState({teamList:JSON.parse(res)});
        this.setState({teams: JSON.parse(res)});
        this.setState(prevState => ({
          teams: [...prevState.teams, this.state.team]
        }));
      })
      .catch(err => console.log(err));      
      this.calcHeight();
  }

  
    
  render() {
    const TeamList = this.state.teamList.map(function(item){
      return (
        <Grid.Row className="teamIcon" id={item.id} name={item.id} key={item.id}>
          <Grid.Row>
            <p>Testing Team<sup>X</sup></p>
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
      ) ;
    });    

    return (
      <div style={this.state.style}>
        <div className="teamActive">
          <p>
            Current Team:
            <br/>
            {this.state.team.id}
          </p>
          <NewTeam/>
        </div>
        <div className="teamList">
            
                {TeamList}
            
          </div>
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
