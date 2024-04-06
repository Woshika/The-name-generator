import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

function bandNameGenerator(req, res, next){
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}
app.use(bandNameGenerator);

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  req.send(`<h1>Your Band Name is : </h1><p>${bandName} ✌️</p>`)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
