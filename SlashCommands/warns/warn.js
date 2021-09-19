const warnModel = require('../../models/warnModel');

module.export = {
  name: 'warn',
  description: 'warn a user',
  options: [
    {
      name: 'target',
      description: 'user you want to warn',
      type: 'USER',
      required: true
    },
    {
      name: 'reason',
      description: 'reason for warns',
      type: 'STRING',
      required: true,
    },
  ],
  /**
  *
  * @param {Client} client
  * @param {CommandInteraction} interaction
  */

  run: async (client, interaction) => {
    const user = interaction.options.getUser('target');
    const reason =  interaction.options.getString('reason');

    new warnModel({
      userId: user.id,
      guildId: interaction.guildId,
      moderatorId: interaction.user.id,
      reason,
      timestamp: Date.now(),
    }).save();


    interaction.followUp({ content: `⚠ ${user} has been warned by <@${interaction.userId}> for ${reason}`})
  },
};