/*
    Filename: spambot.js
    Author: Zach "valrym" or @ven#5099 on discord
    Date: ??/??/17
    Purpose: send array of members split via newline to ping individuals
*/

const Discord = require("discord.js");
const bot = new Discord.Client({ fetch_all_members: true });
const fs = require("fs")
var tokens = require("./accounts.json");
var i = fs.readFileSync('currentaccount.txt', 'utf8');

function newtoken() {
   for (; i < tokens.length;) {
      var newtokens = tokens[i]
      return newtokens
   }
}

function userchange() {
    var asd = parseInt(i); + 1
    fs.writeFile('currentaccount.txt', asd + 1, (err) => { });
}

bot.on('message', msg => {
        try {
             msg.channel.send(msg.channel.guild.members.array(), { split: 1 });
        }
        catch (error) {
            console.log(error);
        }
});

bot.on('ready', () => {
    console.log("loaded");
});

bot.on('guildBanAdd', (g, u) => {
    if (u != bot.user) { return };
    console.log("banned, turn on a vpn and run again program again.")
})

bot.login(newtoken()).then(function () {
    userchange();
});
