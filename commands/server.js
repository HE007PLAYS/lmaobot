const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Information")
  .setColor("#4268f4")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created on", message.guild.createdAt)
  .addField("Total Members", message.guild.memberCount)
  .addField("Made by", "A nonce with a big forhead");

    return message.channel.send(serverembed);
}

module.exports.help = {
name: "server"
}
