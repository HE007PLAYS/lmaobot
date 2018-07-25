const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  // removerole @HE007PLAYS moderator
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("They're to radical me dood! :)");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("That user is on the run from the ... moderator..");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role pls");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("What role? Can't find it!");

  if(!rMember.roles.has(gRole.id)) return message.reply("That human has no role.");
  await(rMember.removeRole(gRole.id));

  try{
  await rMember.send(`RIP <@${rMember.id}>. U have lost a role, the role is ${gRole.name} Well done! :)`)
  } catch(e){
  message.channel.send(`RIP <@${rMember.id}>. U have lost a role, the role is ${gRole.name}. Your DM's were locked. So I was unable to DM you. `)
  };
}

module.exports.help = {
name: "removerole"
}
