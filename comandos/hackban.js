const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "hackban",
  alias: ["banid"],

async execute (client, message, args){

 var perms = message.author.hasPermission("BAN_MEMBERS")
 if(!perms) return message.channel.send("No tenes permiso pa esto")

 if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("jaja no puedo")
 
 const id = args.join(' ')
 if(!id) return message.channel.send("Necesito la id cruck")

 const member = await client.users.fetch(id)
 message.guild.members.ban(member.id)

 message.channel,send(`El bldo de **${member.username}** fue hackbaneado de ruta`)
  
 }
 
}