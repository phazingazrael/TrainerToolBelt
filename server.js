const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const level = require("level");
const sub = require('subleveldown');

// Database config begins
var db = level('./db');

//var teamsDb = db.sublevel("teams");
var teamsDb = sub(db, 'teams');

//var dexDb = db.sublevel("pokedex");
var dexDb = sub(db, 'dex')
// Database config ends

oakdexPokedex = require("oakdex-pokedex");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var dex = oakdexPokedex.allPokemon();

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
    `${JSON.stringify(req.body)}`
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
