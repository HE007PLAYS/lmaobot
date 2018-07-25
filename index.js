//Requring the files
const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let coins = require("./coins.json")
let cooldown = new Set();
let cdseconds = 5;

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0) {
    console.log("Coudn't find commands.");
  }

  jsfile.forEach((f, i) => {
let props = require(`./commands/${f}`);
console.log(`${f} loaded`);
bot.commands.set(props.help.name, props);
  });
});


//Stuff for console and playing game e.g "lmao help"
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
bot.user.setActivity("lmaohelp", {type: "PLAYING"})
});

bot.on("message", async message => {
if(message.author.bot) return;
if(message.channel.type === "dm") return;

if(!coins[message.author.id]){
   coins[message.author.id] = {
     coins: 0
   };
 }

 let coinAmt = Math.floor(Math.random() * 15) + 1;
 let baseAmt = Math.floor(Math.random() * 15) + 1;
 console.log(`${coinAmt} ; ${baseAmt}`);

 if(coinAmt === baseAmt){
   coins[message.author.id] = {
     coins: coins[message.author.id].coins + coinAmt
   };
 fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
   if (err) console.log(err)
 });
 let coinEmbed = new Discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#0000FF")
 .addField("💸", `${coinAmt} coins added!`);

 message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});
 }
let prefix = botconfig.prefix;
 if(!message.content.startsWith(prefix)) return;
 if(cooldown.has(message.author.id)) {
   message.delete();
   return message.reply("You have to wait a long time. 5 Seconds")
 }

 cooldown.add(message.author.id);


let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);

setTimeout(() => {
  cooldown.delete(message.author.id)
}, cdseconds * 1000)



});

bot.login(process.env.token);
