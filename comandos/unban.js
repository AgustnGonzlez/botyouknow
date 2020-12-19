const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "unban",
  alias: ["ub"],

async execute (client, message, args){
 
 var perms = message.member.hasPermission("BAN_MEMBERS")
 if(!perms) return message.channel.send("No tenes poder para esto :wink:")

 let userID = args[0];
 if(!userID) return message.channel.send("Necesito la id!")

 const member = await client.users.fetch(userID)

 message.guild.fetchBans().then(bans => {
   if(bans.size === 0) return message.channel.send("No hay baneados en el servidor!")

   let bUser = bans.find(b => b.user.id == userID)
   if(!bUser) return message.channel.send("Este miembro no esta baneado!")

   message.guild.members.unban(bUser.user)
 })

 message.channel.send(`El pibe ${member.username} fue desbaneado!`)
  
 }
 
}