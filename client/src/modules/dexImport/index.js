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
        console.log(res);
        //var PokeDex = JSON.parse(res);
        //console.log(PokeDex);
        //sorting start
        //PokeDex.sort((a, b) => a.national_id - b.national_id);
        //sorting end
        this.setState({ pokedex: JSON.parse(res)});
      })
      .catch(err => console.log(err));
  }


  getDex = async () => {
    const location = window.location.hostname;
    const response = await fetch(`http://${location}:5000/api/pokedex`, {
      method: "GET"
    });
    const body = await response.text();

    if (response.status !== 200) throw Error(body.message);
    console.log("getDex " +body);
    return body;
  };

    render() {
      
      const DexList = this.state.pokedex.map(function(item){
        return (
          <Card key={item.national_id}>
            <LazyLoadImage
              alt={item.name.en}
              effect="opacity"
              src={"./img/miniDex/"+item.national_id+".png"} // use normal <img> attributes as props
              />
          </Card>
        ) ;
      });    
  
      return (
          <Card.Group itemsPerRow={6} className="dexList">
            {DexList}
          </Card.Group> 
      );
  }
}

export default Pokedex;
