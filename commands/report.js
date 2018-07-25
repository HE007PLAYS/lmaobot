const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);

  let incidentsEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#4268f4")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

  let incidentschannel = message.guild.channels.find(`name`, "incidents");
  if(!incidentschannel) return message.channel.send("Couldn't find incidents channel.");

  message.delete().catch(O_o=>{});
  incidentschannel.send(incidentsEmbed);
  return;
}

module.exports.help = {
  name: "report"
}
