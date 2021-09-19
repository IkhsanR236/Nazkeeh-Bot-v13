const { Client, Collection } = require("discord.js");
const server = require('./server.js');
const { mongooseConnectionString } = require("../config.json");

const client = new Client({
    intents: 32767,
});
module.exports = client;

const { RepeatMode } = require('discord-music-player');

const { Player } = require("discord-music-player")
const player = new Player(client, {
  leaveOnEmpty: false,
})

client.player = player 

//Discord XP
const Levels = require("discord-xp");
Levels.setURL(process.env.MongoDB)

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(process.env.TOKEN);