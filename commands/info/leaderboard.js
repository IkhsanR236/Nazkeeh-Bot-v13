const { Client, Message, MessageEmbed } = require('discord.js')
const Levels = require("discord-xp");
const Discord = require("discord.js");
module.exports = {
  name: 'leaderboard',
  aliases: ["top"],

  run: async (client, message, args) => {
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.

    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

    const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.

    const lb = leaderboard.map(e => `**${e.position}**. ${e.username}#${e.discriminator}\nㅤ**•**Level: ${e.level} (XP: ${e.xp.toLocaleString()})`); // We map the outputs.

    const Embed1 = new MessageEmbed()
            .setTitle('Leaderboard')
            .setThumbnail('https://images-ext-1.discordapp.net/external/wzRPFgACUurThCvlca_zAlgmkzRf-gL5JV-vyll1giY/https/i.imgur.com/mJ7zu6k.png?width=431&height=431')
            .setDescription(`${lb.join("\n\n")}`)
            .setColor("RANDOM")
            .setFooter(`${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send({embeds: [Embed1]})
  }
}