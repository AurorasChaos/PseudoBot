const { CommandoClient } = require('discord.js-commando');
const { Structures } = require('discord.js');
const path = require('path');
const { prefix, token, discord_owner_id } = require('./config.json');

Structures.extend('Guild', function(Guild) {
  class MusicGuild extends Guild {
    constructor(client, data) {
      super(client, data);
      this.musicData = {
        queue: [],
        isPlaying: false,
        nowPlaying: null,
        songDispatcher: null,
        volume: 1
      };
      this.triviaData = {
        isTriviaRunning: false,
        wasTriviaEndCalled: false,
        triviaQueue: [],
        triviaScore: new Map()
      };
    }
  }
  return MusicGuild;
});

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: discord_owner_id // value comes from config.json
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['music', 'Music Command Group'],
    ['gifs', 'Gif Command Group'],
    ['other', 'random types of commands group'],
    ['guild', 'guild related commands'],
    ['games', 'game related commands']
  ])
  .registerDefaultGroups()
  .registerDefaultCommands({
    eval: false,
    prefix: false,
    commandState: false
  })
  .registerCommandsIn(path.join(__dirname, 'commands'));

client.once("ready", function(){
  console.log(`the client becomes ready to start`);
  console.log(`I am ready! Logged in as ${client.user.tag}!`);

  client.user.setActivity(`${prefix}help`);
  global.LogChannel = client.channels.cache.get("756491306246864906");
  LogChannel.send('Bot is up and running. xD')
});


client.on('voiceStateUpdate', async (___, newState) => {
  if (
    newState.member.user.bot &&
    !newState.channelID &&
    newState.guild.musicData.songDispatcher &&
    newState.member.user.id == client.user.id
  ) {
    newState.guild.musicData.queue.length = 0;
    newState.guild.musicData.songDispatcher.end();
  }
});

client.on('guildMemberAdd', member => {
  member.send("Welcome to the TPDC. Enjoy your stay, don't forgot to complete verification and read the rules")
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Welcome ${member}!`);
});

client.on('messageReactionAdd', (reaction, member) => {
    console.log('a reaction has been added');
    console.log(reaction);
    console.log(user);
});

client.on('messageReactionRemove', (reaction, user) => {
    console.log('a reaction has been removed');
});



client.on("debug", function(info){
  console.log(`debug -> ${info}`);
});

client.on("channelCreate", function(channel){
  logChannel.send(`channelCreate: ${channel}`);
});

client.on("channelDelete", function(channel){
  logChannel.send(`channelDelte: ${channel}`);
 });

client.on("channelPinsUpdate", function(channel, time){
  logChannel.send(`channelPinsUpdate: ${channel}:${time}`);
});

client.on("channelUpdate", function(oldChannel, newChannel){
  logChannel.send(`channelUpdate -> a channel is updated - e.g. name change, topic change`);
});

client.on("clientUserGuildSettingsUpdate", function(clientUserGuildSettings){
  logChannel.send(`clientUserGuildSettingsUpdate -> client user's settings update`);
});

client.on("clientUserSettingsUpdate", function(clientUserSettings){
  logChannel.send(`clientUserSettingsUpdate -> client user's settings update`);
});

client.on("emojiCreate", function(emoji){
  LogChannel.send(`a custom emoji has been created in the guild`);
});

client.on("emojiDelete", function(emoji){
  LogChannel.send(`a custom emoji has been deleted from this guild`);
});

client.on("emojiUpdate", function(oldEmoji, newEmoji){
  LogChannel.send(`a custom guild emoji has been updated`);
});

client.on("error", function(error){
  console.log(`client's WebSocket encountered a connection error: ${error}`);
});

client.on("guildBanAdd", function(guild,user){
  LogChannel.send(`${user} has been banned from the guild`);
});

client.on("guildBanRemove", function(guild, user){
  LogChannel.send(`${user} is unbanned from the guild`);
});

client.on("guildMemberAdd", function(member){
  LogChannel.send(`a user joins a guild: ${member.tag}`);
});

client.on("guildMemberAvailable", function(member){
  LogChannel.send(`member becomes available in a large guild: ${member.tag}`);
});

client.on("guildMemberRemove", function(member){
  LogChannel.send(`a member leaves a guild, or is kicked: ${member.tag}`);
});

client.on("guildMembersChunk", function(members, guild){
  LogChannel.send(`a chunk of guild members is received`);
});

client.on("guildMemberSpeaking", function(member, speaking){
  LogChannel.send(`a guild member starts/stops speaking: ${member.tag}`);
});

client.on("guildMemberUpdate", function(oldMember, newMember){
  LogChannel.send(`a guild member changes - i.e. new role, removed role, nickname.`);
});

client.on("guildUnavailable", function(guild){
  LogChannel.send(`a guild becomes unavailable, likely due to a server outage: ${guild}`);
});

client.on("guildUpdate", function(oldGuild, newGuild){
  LogChannel.send(`a guild is updated`);
});

client.on("messageDelete", function(message){
  console.log(`message is deleted -> ${message}`);
});

client.on("messageDeleteBulk", function(messages){
  LogChannel.send(`messages are deleted -> ${messages}`);
});

client.on("messageReactionAdd", function(messageReaction, user){
  LogChannel.send(`a reaction is added to a message`);
});

client.on("messageReactionRemove", function(messageReaction, user){
  LogChannel.send(`a reaction is removed from a message`);
});

client.on("messageReactionRemoveAll", function(message){
  LogChannel.send(`all reactions are removed from a message`);
});

client.on("messageUpdate", function(oldMessage, newMessage){
  LogChannel.send(`a message is updated`);
});
/*
client.on("presenceUpdate", function(oldMember, newMember){
  LogChannel.send(`a guild member's presence changes`);
});
*/
client.on("roleCreate", function(role){
  LogChannel.send(`a role is created`);
});

client.on("roleDelete", function(role){
  LogChannel.send(`a guild role is deleted`);
});

client.on("roleUpdate", function(oldRole, newRole){
  LogChannel.send(`a guild role is updated`);
});

client.on("typingStart", function(channel, user){
  LogChannel.send(`${user.tag} has started typing`);
});

client.on("typingStop", function(channel, user){
  LogChannel.send(`${user.tag} has stopped typing`);
});

client.on("userNoteUpdate", function(user, oldNote, newNote){
  LogChannel.send(`a member's note is updated`);
});

client.on("userUpdate", function(oldUser, newUser){
  LogChannel.send(`user's details (e.g. username) are changed`);
});

client.on("voiceStateUpdate", function(oldMember, newMember){
  LogChannel.send(`a user changes voice state`);
});

client.on("warn", function(info){
  console.log(`warn: ${info}`);
});

client.login(token);
