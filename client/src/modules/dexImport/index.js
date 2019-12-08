import React from "react";

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokedex: []
    };
  }

  stripFillerData() {
    /*
      data structure
    names {4}, national_id, types, abilities, gender_ratios, , catch_rate, egg_groups, hatch_time,
    height_us, , height_eu, weight_us, weight_eu, base_exp_yield, leveling_rate, ev_yield, color,
    base_friendship, base_stats, evolutions, categories, kanto_id, johto_id, hoenn_id, sinnoh_id,
    unova_id, kalos_id, alola_id, mega_evolutions, evolution_from, variations, pokedex_entries,
    pokeathlon_stats, ultra_alola_id, move_learnsets
    */
    console.log("pre strip filler data " + this.state.pokedex);
  }

  componentDidMount() {
    this.getDex()
      .then(res => {
        console.log("receiving pokedex " + res);
        let Res=res;
        delete Res.indexOf(3);
        console.log("minus abilities " + Res);
        this.setState({ pokedex: Res });

      })
      .catch(err => console.log(err));
    console.log('start strip data');
    this.stripFillerData();
  }

  getDex = async () => {
    const location = window.location.hostname;
    const response = await fetch(`http://${location}:5000/api/pokedex/`, {
      method: "GET"
    });
    const body = await response.text();

    if (response.status !== 200) throw Error(body.message);
    //console.log("getTeams " + body);
    return body;
  };

  render() {
    return <div>{this.state.pokedex}</div>;
  }
}

export default Pokedex;
