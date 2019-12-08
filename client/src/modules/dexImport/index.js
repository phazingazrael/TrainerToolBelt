import React from "react";

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokedex: []
    };
  }

  componentDidMount() {
    this.getDex()
      .then(res => {
        console.log("receiving pokedex");
        console.log(res);
        this.setState({ pokedex: res});
      })
      .catch(err => console.log(err));
  }

  getDex = async () => {
    const location = window.location.hostname;
    const response = await fetch(
    `http://${location}:5000/api/pokedex/`, {
      method: 'GET'});
    const body = await response.text();

    if (response.status !== 200) throw Error(body.message);
      //console.log("getTeams " + body);
    return body;
    };

  render() {
    return( <div>{this.state.pokedex}</div>);
  }
}

export default Pokedex;
