const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Imformation")
  .setColor("#4268f4")
  .setThumbnail(bicon)
  .addField("Bot Name", bot.user.username)
  .addField("Created On", bot.user.createdAt)
  .addField("Made by", "A nonce with a big forhead");

  return message.channel.send(botembed);
}

module.exports.help = {
name: "info"
}
