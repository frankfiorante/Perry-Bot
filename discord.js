import dotenv from 'dotenv'
import pkg from 'shelljs';
import { Client } from 'discord.js';

dotenv.config()

const { exec } = pkg;
const client = new Client();

client.login(`${process.env.botToken}`);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const BOT_COMMANDS = [`<@${process.env.botUserID}> 🦜`, `<@!${process.env.botUserID}> 🦜`];
client.on('message', msg => {
  if (BOT_COMMANDS.includes(msg.content)) {
    msg.reply('Grabbing a current picture...');
    exec('./run-manual-snapshot.sh');
  }
});