# A Discord Music Bot written in JavaScript, the discord.js library and discord.js-commando framework

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

### Installing the dependencies

`npm i`

### Commands

- Music

| Command       | Description                                                                                                               | Usage                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| !play         | Play any song or playlist from youtube, you can do it by searching for a song by name or song url or playlist url         | !play darude sandstorm |
| !pause        | Pause the current playing song                                                                                            | !pause                 |
| !resume       | Resume the current paused song                                                                                            | !resume                |
| !leave        | Leaves voice channel if in one                                                                                            | !leave                 |
| !remove       | Remove a specific song from queue by its number in queue                                                                  | !remove 4              |
| !queue        | Display the song queue                                                                                                    | !queue                 |
| !shuffle      | Shuffle the song queue                                                                                                    | !shuffle               |
| !skip         | Skip the current playing song                                                                                             | !skip                  |
| !skipall      | Skip all songs in queue                                                                                                   | !skipall               |
| !skipto       | Skip to a specific song in the queue, provide the song number as an argument                                              | !skipto 5              |
| !volume       | Adjust song volume                                                                                                        | !volume 80             |
| !music-trivia | Engage in a music trivia with your friends. You can add more songs to the trivia pool in resources/music/musictrivia.json | !music-trivia          |
| !loop         | Loop the currently playing song                                                                                           | !loop 5                 |
| !lyrics       | Get lyrics of any song or the lyrics of the currently playing song                                                        | !lyrics song-name      |
| !now-playing       | Display the current playing song with a playback bar                                                        | !now-playing       |

- Misc

| Command      | Description                                                                                                                                                         | Usage                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| !cat         | Get a cute cat picture                                                                                                                                              | !cat                  |
| !fortune     | Get a fortune cookie tip                                                                                                                                            | !fortune              |
| !insult      | Generate an evil insult                                                                                                                                             | !insult               |
| !chucknorris | Get a satirical fact about Chuck Norris                                                                                                                             | !chucknorris          |
| !motivation  | Get a random motivational quote                                                                                                                                     | !motivation           |
| !global-news | Latest headlines from reuters, you can change the news source to whatever news source you want, just change the source in line 13 in global-news.js or ynet-news.js | !global-news          |
| !random      | Generate a random number between two provided numbers                                                                                                               | !random 0 100         |
| !reddit      | Replies with 5 top non nsfw subreddit posts                                                                                                                         | !reddit askreddit     |
| !say         | Make the bot say anything                                                                                                                                           | !say Lorem Ipsum      |
| !translate   | Translate to any language using yandex translation service(only supported lanugages)                                                                          | !translate ありがとう |
| !whomademe   | Info about me and the repo                                                                                                                                          | !whomademe            |
| !uptime      | Replies with the bot's total uptime                                                                                                                                 | !uptime               |

- Gifs

| Command   | Description                         | Usage                   |
| --------- | ----------------------------------- | ----------------------- |
| !animegif | Get an anime related gif by a query | !animegif one punch man |
| !gif      | Get any gif by a query              | !gif labrador           |
| !gintama  | Replies with a random gintama gif   | !gintama                |
| !jojo     | Replies with a random jojo gif       | !jojo                   |

- Guild

| Command               | Description                     | Usage                                 |
| --------------------- | ------------------------------- | ------------------------------------- |
| !ban                  | Bans a tagged member            | !ban @johndoe                         |
| !kick                 | Kicks a tagged member           | !kick @johndoe                        |
| !prune                | Delete up to 99 recent messages | !prune 50                             |

