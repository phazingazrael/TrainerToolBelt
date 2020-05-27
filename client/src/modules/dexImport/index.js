import React from "react";
import { Card } from "semantic-ui-react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokedex: [],
      style:{
        height:''
      }
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
      this.calcHeight();
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

  calcHeight =() =>{
    let winHeight = window.innerHeight;
    let modalHeight = document.getElementById("newTeamModal").clientHeight;
    let differentiate = (winHeight - modalHeight)/2;
    let headHeight = document.getElementById("newTeamModalHeader").clientHeight;
    let newHeight = (((winHeight - modalHeight) + differentiate)/2)-10  +"px";
    let contHeight = (newHeight+headHeight) + "px";
    this.setState(prevState => {
      let style = Object.assign({}, prevState.style);   // creating copy of state variable style
      style.height = newHeight; 
      console.log(style.height)                        // update the name property, assign a new value                 
      return { style };                                 // return new object style object
    });
    console.log(contHeight);
  }

    render() {
      
      const DexList = this.state.pokedex.map(function(item){
        return (
          <Card key={item.national_id} className="dexItem">
            <LazyLoadImage
              width="50px"
              alt={item.names.en}
              effect="blur"
              src={"./img/miniDex/"+item.national_id+"-fs8.png"} // use normal <img> attributes as props
              />
              <p>
                {item.names.en}
              </p>
          </Card>
        ) ;
      });    
  
      return (
          <Card.Group itemsPerRow={6} className="dexList" style={this.state.style}>
            {DexList}
          </Card.Group> 
      );
  }
}

export default Pokedex;
