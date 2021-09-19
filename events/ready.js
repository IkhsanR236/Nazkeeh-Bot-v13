const client = require("../index");
const path = require("path")
const {getCommands} = require('../utils')
client.on("ready", () => {
  console.log(`${client.user.tag} is up and ready to go!`)

  const clientdetails = {
    guilds: client.guilds.cache.size,
    users: client.users.cache.size,
    channels: client.channels.cache.size
  }
  //express

  const express = require("express")

  const app = express();

  const port = 3000 || 3001;
  //app.get("view engine", "ejs");

  app.set("view engine", "ejs");
  app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "pages", "landingPage.html"));
  })

  app.get("/commands", (req, res) => {
const commands = getCommands();
res.status(200).render('commands', { commands })
  })

  app.get("/info", (req, res) => {
    res.status(200).send(clientdetails)
  })

app.listen(port)
});
