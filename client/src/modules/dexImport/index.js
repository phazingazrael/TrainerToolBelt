import React from "react";
import { Card } from "semantic-ui-react";

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
        var PokeDex = JSON.parse(res);
        console.log("pre-stripping data "+JSON.stringify(PokeDex));
        PokeDex.map(function( dexItem ){
          delete dexItem.abilities;
          delete dexItem.gender_ratios;
          delete dexItem.catch_rate;
          delete dexItem.egg_groups;
          delete dexItem.hatch_time;
          delete dexItem.height_us;
          delete dexItem.height_eu;
          delete dexItem.weight_us;
          delete dexItem.weight_eu;
          delete dexItem.base_exp_yield;
          delete dexItem.leveling_rate;
          delete dexItem.ev_yield;
          delete dexItem.color;
          delete dexItem.base_friendship;
          delete dexItem.base_stats;
          delete dexItem.evolutions;
          delete dexItem.categories;
          delete dexItem.kanto_id;
          delete dexItem.johto_id;
          delete dexItem.hoenn_id;
          delete dexItem.sinnoh_id;
          delete dexItem.unova_id;
          delete dexItem.kalos_id;
          delete dexItem.alola_id;
          delete dexItem.mega_evolutions;
          delete dexItem.evolution_from;
          delete dexItem.variations;
          delete dexItem.pokedex_entries;
          delete dexItem.pokeathlon_stats;
          delete dexItem.ultra_alola_id;
          delete dexItem.move_learnsets;
          //console.log(dexItem);
          return dexItem;
        })
        console.log(PokeDex);
        //sorting?
        PokeDex.sort((a, b) => a.national_id - b.national_id);
        const putDex = async () => {
          const location = window.location.hostname;
          const response = await fetch(
          `http://${location}:5000/api/pokedex/`, {
            method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              }
            ,
            body: JSON.stringify(PokeDex)
          });
          const body = await response.text();
          return body;
        };
        //sorting? end?
        this.setState({ pokedex: PokeDex});
        putDex();
      })
      .catch(err => console.log(err));
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
      
      const DexList = this.state.pokedex.map(function(item){
        
        //if (item.national_id > 0 && item.national_id < 10) {
        //  item.national_id = "00"+ item.national_id;
        //}else if (item.national_id > 10 && item.national_id < 100){
        //  item.national_id = "0"+ item.national_id;
        //}
        return (
          
          //<Card key={item.national_id} id={item.national_id+"-"+item.names.en} image={"./img/miniDex/"+item.national_id+".png"}/>
          <div key={item.national_id}>
            {item.national_id}
          </div>
        ) ;
      });    
  
      return (
          <Card.Group itemsPerRow={6}>
            {DexList}
          </Card.Group> 
      );
  }
}

export default Pokedex;
