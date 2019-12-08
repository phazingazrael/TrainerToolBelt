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
        this.setState({ pokedex: JSON.parse(res) });
      })
      .catch(err => console.log(err));
  }

  getDex = async () => {
    const response = await fetch("/api/pokedex");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return( <div>{JSON.stringify(this.state.pokedex)}</div>);
  }
}

export default Pokedex;
