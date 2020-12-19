const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("mega-dtbs");
require('dotenv').config();

const { Client, Collection, Guild } = require("discord.js");
const keepAlive = require('./server.js')
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'https://host.agustngonzlez.repl.co',
    title: 'Secundario',
    interval: 15 // minutes
});

///////MOBITOR/////////

monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));

//////BOT//////////

const fs = require('fs')

let prefix_db = new db.crearDB("prefixes");

///////HANDLER///////

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command)
}

///////PRESENCIA///////

function presence() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: "a new colan",
      type: "WATCHING"
    }
  })
}
client.on("ready", () => {
  console.log("Presenciandoo on");
  presence();
});

///////COMANDOS///////

client.on('message', async message => {

  let prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
  }else{
    prefix = "e!"
  }

  if (message.content.startsWith("Candela")) {
    message.channel.send("YO NO TE PIDO PACK, a menos que quieras")
  }
  
  if (message.content.startsWith("...")) {
    message.channel.send("que silencio aqui")
  }

  if (message.content.startsWith("Follamos?")) {
    message.channel.send("Ejem, cuando quieras mi amor :heart:")
  }

  if (message.content.startsWith("Hot?")) {
    message.channel.send("Contigo siempre bebe")
  }

  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "candela") {

    message.channel.send(":heart_eyes: Mi amor :heart_eyes:")

  }

  if (command === "te-quiero") {

    message.channel.send("Yo a vos bb:heart:")

  }

  if (command === "menfis") {
    message.channel.send("Amor de mi vida")
  }
  
  if (command === "ig") {
    message.channel.send("de la minita pls :wink:")
  }

  if (command === "hola") {
    message.channel.send("Hola mi amor :heart:")
  }

  /////CAMBIAR PREFIX/////

  if (command === "setprefix") {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No podes cambiar el prefix :wink:")
    if(!args[0]) return message.channel.send("Que prefix queres?")
    prefix_db.agregar(`${message.guild.id}`, args[0])

     const embed = new Discord.MessageEmbed()
     .setTitle("Nuevo prefix!")
     .addField("El prefix fue cambiado a "+args[0])
     .setColor(0x66b3ff)

     message.channel.send({ embed });

  }

  ///

  if(command === 'user'){
    let userm = message.mentions.users.first()
    if(!userm){
      var user = message.author;
      
        const embed = new Discord.MessageEmbed()
        .setThumbnail(user.avatarURL)
        .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
        .addField('ID', user.id, true)
        .addField('Estado', user.presence.status, true)
        .addField('Apodo', message.member.nickname, true)
        .addField('Cuenta Creada', user.createdAt.toDateString(), true)
        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
        .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
        .setColor(0x66b3ff)
        
       message.channel.send({ embed });
    }else{
      const embed = new Discord.MessageEmbed()
      .setThumbnail(userm.avatarURL)
      .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
      .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
      .addField('ID', userm.id, true)
      .addField('Estado', userm.presence.status, true)
      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
      .setColor(0x66b3ff)
      
     message.channel.send({ embed });
    }
    
  }


  ///////HANDLER///////

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if (cmd) {
    cmd.execute(client, message, args)
  }

});



console.log('NO ES MI VIEJA!')

client.login(process.env.TOKEN)