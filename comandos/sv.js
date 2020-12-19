const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "server",
  alias: ["sv"],

execute (client, message, args){
 
 var server = message.guild;
  
  const embed = new Discord.MessageEmbed()
  .setThumbnail(server.iconURL)
  .setAuthor(server.name, server.iconURL)
  .addField('ID', server.id, true)
  .addField('Region', server.region, true)
  .addField('Creado el', server.joinedAt.toDateString(), true)
  .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
  .addField('Miembros', server.memberCount, true)
  .addField('Roles', server.roles.size, true)
  .setColor(0x66b3ff)
    
 message.channel.send({ embed });
  
 }
 
}