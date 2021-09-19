const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "stop",
  description: "stop a Song!",

  run: async(client, message, args) => {
    const vc = message.member.voice.channel

    if(!message.member.voice.channel) return message.reply("Please join a voice channel first!")

    //if(!message.guild.me.permissions.has("CONNECT")) return message.reply("No permission to connect to that voice channel" )

   
    const query = args.join(" ")
    
    let guildQueue = client.player.getQueue(message.guild.id);
    guildQueue.stop();

    let queue = client.player.createQueue(message.guild.id);
                                          
                                          
                                          
message.channel.send(`Stoping`)
   

  }
} 
