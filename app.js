var express = require('express');
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

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

app.listen(5000, function() {
  console.log("listening on port 5000");
});