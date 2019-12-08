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
        console.log("pre-Slice data not wanted " +res);
        this.setState({ pokedex: res });
        //Res.pokedex.splice(Res.pokedex.indexOf("kanto_id"));
        //Res.pokedex.splice(Res.pokedex.indexOf("johto_id"));
        //Res.pokedex.splice(Res.pokedex.indexOf("hoenn_id"));
        //Res.pokedex.splice(Res.pokedex.indexOf("sinnoh_id"));
        //Res.pokedex.splice(Res.pokedex.indexOf("unova_id"));
        //Res.pokedex.splice(Res.pokedex.indexOf("kalos_id"));
        //Res.pokedex.splice(Res.pokedex.indexOf("alola_id"));
        //Res.pokedex.splice(Res.pokedex.indexOf('ultra_alola_id'));
        console.log("post-Slice data not wanted " +res);
        
        this.setState({ pokedex: res });
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
    return( <div>
      {console.log("this.state.pokedex")}
    </div>);
  }
}

export default Pokedex;
