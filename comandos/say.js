const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "say",
  alias: ["s"],

execute (client, message, args){
 
 let texto = args.join(' ')
 if(!texto) return message.channel.send("Y que queres que diga?")

 message.channel.send(texto)
  
 }
 
}