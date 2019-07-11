import React from "react";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      pokedex: []
    };
  }

  componentDidMount(pokedex) {
    this.getDex()
      .then(res => {
        console.log("receiving pokedex");
        console.log(res);
        this.setState({ pokedex: res });
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
    return <p>{this.state.pokedex}</p>;
  }
}

export default Index;
