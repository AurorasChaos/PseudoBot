const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = class MotivationCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'quote',
      aliases: ['quoteit, quotethat'],
      group: 'other',
      memberName: 'quote',
      description: 'Quote another user',
      args:[
          {
              key: "number",
              prompt: ("Number of messages to quote."),
              type: "integer",
          }
      ]
    });
  }
  run(message) {

  }
};
