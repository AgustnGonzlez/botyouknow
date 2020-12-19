const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "kick",
  alias: ["expulsar"],

execute (client, message, args){

 var perms = message.member.hasPermission("KICK_MEMBERS")

 if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("No puedo hacer eso")

 if(!perms) return message.channel.send("Sali de aca vo")
 
 const user = message.mentions.members.first()
 if(!user) return message.channel.send("A quien queres expulsar")

 if(!user === message.author) return message.channel.send("Y despues como volves?")

 var razon = args.slice(1).join(' ')
 if(!razon){
   razon = 'No especificado'
 }

 message.guild.member(user).kick(razon);

 message.channel.send(`El usuario **${user}** fue expulsado por **${razon}**\nModerador: **${message.author}**`)
  
 }
 
}
