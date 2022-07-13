// tutorial: https://medium.com/davao-js/2019-tutorial-creating-your-first-simple-discord-bot-47fc836a170b
// // Run dotenv
require('dotenv').config()
const Discord = require('discord.js')
const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', ()=>{
    console.log(`Logged in as ${client.user.tag}!`);
})

client.login(process.env.DISCORD_TOKEN)

// Code for bot: 

client.on('message', m => {


  });
