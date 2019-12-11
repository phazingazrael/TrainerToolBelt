import React from "react";
import { Card } from "semantic-ui-react";

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
        
        //sorting?
        //console.log(res);
        //var data = res; // assign your data here
        //var arr = [];
        //for(let key in data){
        //  data[key]["national_id"] = key;
        //  arr.push(data[key]);
        //}
        //this.setState({pokedex:arr})
        //sorting? end?
        this.setState({ pokedex: JSON.parse(res)});
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
      console.log("dex " + JSON.stringify(this.state.pokedex));
      
      const DexList = this.state.pokedex.map(function(item){
        
        //if (item.national_id > 0 && item.national_id < 10) {
        //  item.national_id = "00"+ item.national_id;
        //}else if (item.national_id > 10 && item.national_id < 100){
        //  item.national_id = "0"+ item.national_id;
        //}
        return (
          
          <Card key={item.national_id} id={item.national_id+"-"+item.names.en} image={"./img/miniDex/"+item.national_id+".png"}/>
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
