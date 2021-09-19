const Discord = require("discord.js");

module.exports = {
  name: 'gun',

  async run(client, message, args) {
    const lolz = message.mentions.users.first() ||message.author;
  
  try {
      const emoji =
        message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1]).url

        let em = new Discord.MessageEmbed()
  .setImage(`https://api.popcat.xyz/gun?image=${emoji}`)
  .setColor("ORANGE")
  message.channel.send(em)
    } catch (e) {
      const av = lolz.displayAvatarURL({ dynamic: false, size: 4096, format: "png" })
      let em = new Discord.MessageEmbed()
  .setImage(`https://api.popcat.xyz/gun?image=${av}`)
  .setColor("ORANGE")
  message.channel.send({ embeds:  [em] })
    }

  }

} 