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

client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity(`www.pornhub.com`, {
    type: 'WATCHING',
    url: 'www.pornhub.com'
  });
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
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general'); // change this to the channel name you want to send the greeting to
  if (!channel) return;
  channel.send(`Welcome ${member}!`);
});

client.on('messageReactionAdd', (reaction, user) => {
    console.log('a reaction has been added');
});
 
client.on('messageReactionRemove', (reaction, user) => {
    console.log('a reaction has been removed');
});
const LogChannel = client.channels.cache.get(756491306246864906);

client.on("channelCreate", function(channel){
  console.log(`channelCreate: ${channel}`);
});

client.on("channelDelete", function(channel){
  console.log(`channelDelte: ${channel}`);
 });
 
client.on("channelPinsUpdate", function(channel, time){
  console.log(`channelPinsUpdate: ${channel}:${time}`);
});
  
client.on("channelUpdate", function(oldChannel, newChannel){
  console.log(`channelUpdate -> a channel is updated - e.g. name change, topic change`);
});

client.on("clientUserGuildSettingsUpdate", function(clientUserGuildSettings){
  console.log(`clientUserGuildSettingsUpdate -> client user's settings update`);
});

client.on("clientUserSettingsUpdate", function(clientUserSettings){
  console.log(`clientUserSettingsUpdate -> client user's settings update`);
});

client.on("debug", function(info){
  console.log(`debug -> ${info}`);
});

client.on("emojiCreate", function(emoji){
  console.log(`a custom emoji has been created in the guild`);
});

client.on("emojiDelete", function(emoji){
  console.log(`a custom emoji has been deleted from this guild`);
});

client.on("emojiUpdate", function(oldEmoji, newEmoji){
  console.log(`a custom guild emoji has been updated`);
});

client.on("error", function(error){
  console.log(`client's WebSocket encountered a connection error: ${error}`);
});

client.on("guildBanAdd", function(guild,user){
  console.log(`${user} has been banned from the guild`);
});

client.on("guildBanRemove", function(guild, user){
  console.log(`${user} is unbanned from the guild`);
});

client.on("guildMemberAdd", function(member){
  console.log(`a user joins a guild: ${member.tag}`);
});

client.on("guildMemberAvailable", function(member){
  console.log(`member becomes available in a large guild: ${member.tag}`);
});

client.on("guildMemberRemove", function(member){
  console.log(`a member leaves a guild, or is kicked: ${member.tag}`);
});

client.on("guildMembersChunk", function(members, guild){
  console.log(`a chunk of guild members is received`);
});

client.on("guildMemberSpeaking", function(member, speaking){
  console.log(`a guild member starts/stops speaking: ${member.tag}`);
});

client.on("guildMemberUpdate", function(oldMember, newMember){
  console.log(`a guild member changes - i.e. new role, removed role, nickname.`);
});

client.on("guildUnavailable", function(guild){
  console.error(`a guild becomes unavailable, likely due to a server outage: ${guild}`);
});

client.login(token);

