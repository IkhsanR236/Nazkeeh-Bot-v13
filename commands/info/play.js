const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
  name: "play",
  description: "Play a song!",
  aliases: ['p'],

  run: async(client, message, args) => {
    const vc = message.member.voice.channel

    if(!message.member.voice.channel) return message.reply("Please join a voice channel first!")

    //if(!message.guild.me.permissions.has("CONNECT")) return message.reply("No permission to connect to that voice channel" )

   
    const query = args.join(" ")
    if(!query) return message.channel.send("Please provide a song to play!")

    let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(' ')).catch(_ => {
            if(!guildQueue)
                queue.stop();
        });
message.channel.send(`Started playing :
**${song}**`)
   

  }
} 
