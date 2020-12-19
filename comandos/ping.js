const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ping",
  alias: ["pi"],

execute (client, message, args){

 const embed = new Discord.MessageEmbed()
  .setTitle("Ping")
  .addField('🏓La latencia es de ', `${Date.now() - message.createdTimestamp}ms`)
  .addField(':satellite_orbital:API Latencia es de ', `${Math.round(client.ws.ping)}ms`)
    
 message.channel.send({ embed });
  
 }
 
}