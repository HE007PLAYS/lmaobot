const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  // addrole @HE007PLAYS moderator
if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("They're to radical me dood! :)");
let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!rMember) return message.reply("That user is on the run from the ... moderator..");
let role = args.join(" ").slice(22);
if(!role) return message.reply("Specify a role pls");
let gRole = message.guild.roles.find(`name`, role);
if(!gRole) return message.reply("What role? Can't find it!");

if(rMember.roles.has(gRole.id)) return message.reply("They have that role. U nonce.");
await(rMember.addRole(gRole.id));

try{
  await rMember.send(`Congrats to <@${rMember.id}>. U have ganied a role, the role is ${gRole.name}`)
} catch(e){
  message.channel.send(`Congrats to <@${rMember.id}>. U have gained a role, the role is ${gRole.name}. Your DM's were locked. So I was unable to DM you. `)
};
}

module.exports.help = {
name: "addrole"
}
