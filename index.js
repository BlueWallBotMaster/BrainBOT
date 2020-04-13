const Discord = require('discord.js');

const client = new Discord.Client();

//Connection
client.on("ready", () => {
  console.log("Prêt à vous servir !");
});

client.login("Njk2MzIyNzUyNjkyNDg2MTU0.XonDSQ.1ryA0s2vtbhV-c0xBetvqlpp11c");
