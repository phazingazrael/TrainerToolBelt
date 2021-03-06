import React from "react";
import { Card, Button } from "semantic-ui-react";
//import { LazyLoadImage } from "react-lazy-load-image-component";
import DEX from "./pokedex.ts";

//var DEXed = JSON.stringify(DEX);
let dexArr = [];

class Pokedex extends React.Component {
  constructor() {
    super(Starter);
    this.state = {
      pokedex: [],
      starter: {},
      style: {
        height: "",
      }
    };
    var Starter = this.state.starter;
  }

  putTeams = async () => {
    const location = window.location.hostname;
    const response = await fetch(`http://${location}:5000/api/teams`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DEX),
    });
    const body = await response.json();

    this.componentDidMount();
    return body;
  };

  /*putDex = async () => {
    const location = window.location.hostname;
    const response = await fetch(`http://${location}:5000/api/pokedex`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: DEX,
    });
    const body = await response.json();
    console.log("Saved "+DEX);
    //this.componentDidMount();
    return body;
  };*/

  componentDidMount() {
    //console.log("theDex " +DEXed);
    this.getDex()
      .then((res) => {
        dexArr.push(DEX);
        //console.log(dexArr);
        //console.log('test '+res);
        var PokeDex = DEX;
        //console.log("res=pokedex "+PokeDex);
        //sorting start
        //PokeDex.sort((a, b) => a.num - b.num);
        //sorting end
        //alert(JSON.parse(res));
        this.setState({ pokedex: PokeDex });
      })
      .catch((err) => console.log(err));
    this.calcHeight();
  }

  getDex = async () => {
    const location = window.location.hostname;
    const response = await fetch(`http://${location}:5000/api/pokedex`, {
      method: "GET",
    });
    const body = await response.text();

    if (response.status !== 200) throw Error(body.message);
    //console.log("getDex " + body);
    return body;
  };

  calcHeight = () => {
    let winHeight = window.innerHeight;
    let modalHeight = document.getElementById("newTeamModal").clientHeight;
    let differentiate = (winHeight - modalHeight) / 2;
    let headHeight = document.getElementById("newTeamModalHeader").clientHeight;
    let newHeight = (winHeight - modalHeight + differentiate) / 2 - 10 + "px";
    let contHeight = newHeight + headHeight + "px";
    this.setState((prevState) => {
      let style = Object.assign({}, prevState.style); // creating copy of state variable style
      style.height = newHeight;
      console.log(style.height); // update the name property, assign a new value
      return { style }; // return new object style object
    });
    console.log(contHeight);
  };

  render(Starter) {
    const DexList = this.state.pokedex.map(function (item) {
      return (
        <Card
          onClick={
            () => {
              //console.log(this.props.team);
              console.log("Current active starter is "+ Starter);
              console.log("You clicked on "+item.name);
              console.log("Which is part of this ITEM: "+ JSON.stringify(item));
              console.log("And in full is "+item);
              Starter = item;
              console.log("newStarter: "+Starter);
              //this.setState({ starter: Starter });
              //console.log("selected: "+this.state.starter);
            }
          }
          key={item.name}
          className="dexItem"
          meta={item.type_1}
          description={item.name}
        >
          <img
            width="50px"
            alt={item.name}
            effect="blur"
            src={"./img/miniDex/" + item.num + ".png"} // use normal <img> attributes as props
          />
          <br />
        </Card>
      );
    });
    console.log(JSON.stringify(this.props.team));
    return (
      <div>
      <Button
          onClick={() => this.putDex()} 
          type="button"
        >Save Dex?</Button>
      <Card.Group itemsPerRow={6} className="dexList" style={this.state.style}>
        {DexList}
      </Card.Group>
      </div>
    );
  }
}

export default Pokedex;
