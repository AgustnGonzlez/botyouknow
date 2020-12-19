const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "help",
  alias: ["h"],

execute (client, message, args){

  let prefix = "e!"
    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
    message.author.send('**COMANDOS DE RomeoBot**\n```\n'+
                        '-> '+prefix+'ping                     :: Comprueba la latencia del bot y de tus mensajes.\n'+
                        '-> '+prefix+'setprefix <prefix>       :: Cambia el prefix a alguno que te guste.\n'+
                        '-> '+prefix+'avatar <@usuario>        :: Muestra el avatar tuyo o de un usuario especifico.\n'+
                        '-> '+prefix+'say                      :: Hace que el bot diga un mensaje.\n'+
                        '-> '+prefix+'clear <cantidad>         :: Borrar cierta cantidad de mensajes.\n'+
                        '-> '+prefix+'ban <@usuario>           :: Banear a un usuario del servidor incluye razon.\n'+
                        '-> '+prefix+'kick <@usuario>          :: Patear a un usuario del servidor incluye razon.\n'+
                        '-> '+prefix+'hackban <id del usuario> :: Banear a un usurio de forma que jamas pueda volver.\n'+
                        '-> '+prefix+'say <mensaje>            :: Haces que el bot diga un mensaje que menciones.\n'+
                        '-> '+prefix+'say-c <#canal> <mensaje  :: Igual qur el comando say pero en un canal especifico.\n'+
                        '-> '+prefix+'hola                     :: Retorna un saludo como mensaje.\n```\n\n');
    
 }
 
}