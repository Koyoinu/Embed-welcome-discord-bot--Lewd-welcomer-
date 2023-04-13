const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

const ID = "";
const Mainchan = "";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", (member) => {
    const welcomeEmbed = new Discord.MessageEmbed()
        .setTitle('**Welcome to Lewd Universe!**')
        .setDescription('Please get comfy and feel free to look around after you have done all the required stuff after joining the server!~')
        .setColor('#9900ff')
        .setFooter('Lewd Welcomer V1 | 2023')
        .setTimestamp();
    const channle = member.guild.channels.cache.get(Mainchan);
    channelLink.send(welcomeEmbed);
})

client.login('ID');