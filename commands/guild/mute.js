const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class MuteCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'mute',
      aliases: ['mute-member', 'mute-rocket'],
      memberName: 'mute',
      group: 'guild',
      description: 'Mutes a tagged member',
      guildOnly: true,
      userPermissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'BAN_MEMBERS'],
      clientPermissions: ['MANAGE_MESSAGES', 'KICK_MEMBERS', 'BAN_MEMBERS'],
      args: [
        {
          key: 'userToMute',
          prompt:
            'Please mention the user you want to Mute with @ or provide their ID',
          type: 'string'
        },
        {
          key: 'time',
          prompt: 'For how long to mute this user(minutes)',
          type: 'string'
        }
      ]
    });
  }

  run(message, { userToMute, time }) {
    const user =
      message.mentions.members.first() ||
      message.guild.members.fetch(userToMute);
    let role = message.guild.roles.cache.find(r => r.name === "Muted(PB)");

    user.roles.add(role);
    var timeout = time * 60000;
    console.log("User: " + userToMute + " has been muted for (" + time + ") minutes.");
    message.channel.send("Succesfully muted user: " + userToMute );
    const doSomething = async () => {
      await sleep(timeout)
      user.roles.remove(role).catch(err => console.error(err));
      console.log("User: " + userToMute + " has been unmuted.");
    }  
    
  }
};
