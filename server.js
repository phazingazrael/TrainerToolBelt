const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const level = require("level");
const levelup = require("levelup");
const sublevel = require("level-sublevel");

var db = sublevel(
  level("./db", {
    db: require("leveldown"),
    valueEncoding: "json"
  })
);

var teamsDb = db.sublevel("teams");
var dexDb = db.sublevel("pokedex");

oakdexPokedex = require("oakdex-pokedex");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB put example
//db.put("animal", {type: 'grizzly', name:'steve'}, function(err) {
//this point animal = bear
//  db.get('animal', function (err, animal){
//    console.log(animal.name)
//  })
//});

var dex = oakdexPokedex.allPokemon();

//dexDb.del("pokedex", function(err) {
//  dexDb.get("pokedex", function(err, pokedex) {
//    console.log(JSON.stringify(pokedex));
//    console.log("pokedex deleted");
//  });
//});

//dexDb.put("pokedex", dex, function(err) {
//  dexDb.get("pokedex", function(err, pokedex) {
//    console.log(JSON.stringify(pokedex));
//    console.log("pokedex posted");
//  });
//});

// API calls
app.get("/api/pokedex", (req, res) => {
  //dexDb.get("pokedex", function(err, pokedex) {
  //console.log(pokedex);
  //});
  //res.send(datadex);
  console.log("sending pokedex");
  res.send(dex);
});

app.get("/api/teams", (req, res) => {
  console.log("sending teams");
  teamsDb.get("teams", function(err,teams){
    res.send(teams)
  })
  
});

app.post("/api/teams", (req, res) => {
  console.log(req.body);
  teamsDb.put("teams", req.body, function(err) {
    teamsDb.get("teams", function(err, teams) {
      console.log(JSON.stringify(teams));
      console.log("team posted");
    });
  });
  res.send(
    `I received your POST request. This is what you sent ${JSON.stringify(req.body)}`
  );
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
