const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class UnMuteCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'unmute',
      aliases: ['unmute-member', 'unmute-rocket'],
      memberName: 'unmute',
      group: 'guild',
      description: 'Unmutes a tagged member',
      guildOnly: true,
      userPermissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'BAN_MEMBERS'],
      clientPermissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'BAN_MEMBERS'],
      args: [
        {
          key: 'userToUnMute',
          prompt:
            'Please mention the user you want to UnMute with @ or provide their ID',
          type: 'string'
        }
      ]
    });
  }

  run(message, { userToUnMute }) {
    const user =
      message.mentions.members.first() ||
      message.guild.members.fetch(userToUnMute);
    let role = message.guild.roles.cache.find(r => r.name === "Muted(PB)");

    user.roles.remove(role);
    console.log("User: " + userToUnMute + " has been unmuted.");
    message.channel.send("Succesfully unmuted user: " + userToUnMute );
    
  }
};
