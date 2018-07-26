const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
.setDescription("Help Menu")
.setColor("#4298f4")
.addField("Member Commands", "help, server, info and report commands")
.addField("More commands", "clear, pay and coins and say");

try{
await message.author.send(helpembed);
} catch(e){
  message.reply("You're DM's are locked. I cannot send you the commands")
};


if(message.member.hasPermission("MANAGE_MESSAGES")) {
  let modembed = new Discord.RichEmbed()
    .setDescription("Mod Help Menu")
    .setColor("#8300ff")
    .addField("Mod commands", "addrole, removerole, kick and ban");

    try{
      await message.author.send(modembed);
    } catch(e){
      message.reply("You're DM's are locked. I cannot send you the mod commands")
    };
}

let musicembed = new Discord.RichEmbed()
.setDescription("Music Bot Help")
.setColor("#01038e")
.addField("Commands", "play, skip");

try{
  await message.author.send(musicembed);
} catch(e){
  message.reply("You're DM's are locked. I cannot send you the mod commands")
};

}

module.exports.help = {
name: "help"
}
