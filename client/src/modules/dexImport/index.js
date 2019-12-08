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
        //console.log("receiving pokedex");
        //console.log(res);
        this.setState({ pokedex: JSON.parse(res)});
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
      console.log("dex " + JSON.stringify(this.state.pokedex));
      this.state.pokedex.sort(function (a, b) {
        return (a.national_id > b.national_id) ? 1 : ((b.national_id > a.national_id) ? -1 : 0);
      });
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
