const Schema = require('../../models/welcomeChannel');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'set-channel',
  /**
  * @param {}lient
 client
  * @param {Message} message
  * @param {String[]} args
  */
  run: async(client, message, args) => {
       if(!message.member.permissions.has('ADMINISTRATOR')) return;

    const channel = message.mentions.channels.first();
    if(!channel) return message.reply('Please Select A Channel');

    Schema.findOne({Guild: message.guild.id}, async(err, data) => {
      if(data) {
        data.Channel = channel.id;
        data.save;
      } else {
        new Schema({
          Guild: message.guild.id,
          Channel: channel.id,
        }).save();
        
      }
      message.reply(`set ${channel} to Welcome Channel`)
    });
  },
};