var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");


var friends = ["Jeremy", "Jake", "Hua"];

app.get("/", function(req, res) {
  res.render("home");
});
 
// embedded javascript
app.get("/fallinlovewith/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("love", {thing: thing});
})
// embedded javascript
app.get("/posts", function(req, res) {
  var thing = req.params.thing;
  var posts = [
    { title: "Post 1", author: "Susy"},
    { title: "Post 2", author: "All the world is fun" },
    { title: "Post 3", author: "If you can't hear, scream" }
  ];
  res.render("posts", {posts: posts});
})

// push new things to this list
app.get("/friends", function(req, res) {
  res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req, res) {
  // bodyParser: express doesn't create a req.body out of the box, we need to explicitly tell it to take the request body and turn it into a JS object to use
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  //res.send("you have reached friends", newFriend);
  res.redirect("/friends");
});

app.listen(5000, function() {
  console.log("listening on port 5000");
});