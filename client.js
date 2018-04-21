const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Hop Dayı Çevrimiçiyiz ${client.user.tag}!`);
});
client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('Aleyküm Selam Gardaşım');
  }
});

client.on('message', msg => {
  if (msg.content === 'Nasılsın') {
    msg.reply('İyidir Gardaş Sen ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Hava Durumu') {
    msg.reply('Git Google dan bak Pezevenk');
  }
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pinginizin Değeri => ' + client.ping);
  }
});

client.on('message', message => {
  if (message.content === 'Fotoğrafım') {

    message.reply(message.author.avatarURL);
  }
});



client.login('NDE1NTAzMDg1ODQ3NDQ1NTA0.Dbzn3Q.OrlpJv8VvNY32ZVnzUrK7jJCBP8');
