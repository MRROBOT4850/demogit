const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
// <<<<<<< HEAD
//  res.send("Welcome to our Express API!");
// =======
  res.send("Hello from the feature branch!");
//>>>>>>> feature/home


});

app.get("/about", (req, res) => {
  res.send("This is the about page.");
});
app.get("/contact", (req, res) => {
  res.send("Contact us");
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
