const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const level = require("level");
const sub = require("subleveldown");
const cors = require("cors");

// Database config begins
var db = level("./db2");

//var teamsDb = db.sublevel("teams");
var teamsDb = sub(db, "teams", { valueEncoding: 'json' });

//var dexDb = db.sublevel("dex");
var dexDb = sub(db, "dex" , { valueEncoding: 'json' })
// Database config ends

oakdexPokedex = require("oakdex-pokedex");

const app = express();
const port = process.env.PORT || 5000;

var whitelist = ['http://localhost:5000', 'http://localhost:3000', 'http://45.15.25.239:5000', 'http://45.15.25.239:3000',  '45.15.25.239:5000', '45.15.25.239:3000'];
var corsOptions = {
  origin: ['http://localhost:5000', 'http://localhost:3000', 'http://45.15.25.239:5000', 'http://45.15.25.239:3000',  '45.15.25.239:5000', '45.15.25.239:3000']
  
  //function (origin, callback) {
    //if (whitelist.indexOf(origin) !== -1) {
    //  callback(null, true)
    //} else {
    //  callback(new Error('Not allowed by CORS'))
    //}
  //}
}
app.use(cors(corsOptions));
app.options('/api/teams', cors()) // enable pre-flight request
app.options('/api/pokedex', cors()) // enable pre-flight request



app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({ extended: true }));

var dex = oakdexPokedex.allPokemon();
//var dex = oakdexPokedex.findPokemon(4);

// API calls
app.get("/api/pokedex", (req, res) => {
  sortDexByID = (stringDex)=>{
    return stringDex.sort(function(a,b) {
      return b.national_id.toLowerCase() < a.national_id.toLowerCase();
    });
  };
  res.send(sortDexByID);
//  dexDb.get("dex", function(err, pokedex) {
//   res.send(pokedex);
//    console.log(pokedex);
//  });
  console.log(sortDexByID)
//  console.log("sending pokedex "+dex);
});

app.post("/api/pokedex", (req, res) => {
  console.log("receiving pokedex");
  console.log(req.body);
  dexDb.put("dex", req.body, function(err){});
});

app.get("/api/teams", (req, res) => {
  console.log("sending teams");
  teamsDb.get("teams", function(err,teams){
    res.send(teams);
  });
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

app.delete("/api/teams", (req, res) => {
  console.log(req.body);
  teamsDb.del("teams", function (err) {
    if (err)
      // handle I/O or other error
      console.log(err)
  });
})

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
