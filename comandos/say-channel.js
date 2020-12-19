const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "say-channel",
  alias: ["say-c"],

execute (client, message, args){
 
 let canal = message.mentions.channels.first()
 if(!canal) return message.channel.send("A donde lo envio?")

 let texto = args.slice(1).js
 if(!texto) return message.channel.send("Y que digo")
 canal.send(texto)
  
 }
 
}