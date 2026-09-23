const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from the main branch!");

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
