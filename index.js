require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
const fs = require('fs');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const websites = fs.readFileSync('WEBSITE.txt', 'utf8').split('\n').filter(Boolean);
const websiteStatus = {};

client.once('ready', () => {
    console.log('Bot is online!');
    checkWebsites();
    setInterval(checkWebsites, 2 * 60 * 1000); // Check every 2 minutes
});

async function checkWebsites() {
    const currentTime = new Date().toLocaleString();
    console.log(`[${currentTime}] Starting website health check...`);

    const channel = client.channels.cache.get(process.env.CHANNEL_ID);
    if (!channel) {
        console.error('Could not find the channel. Please check the CHANNEL_ID in your .env file.');
        return;
    }

    for (const website of websites) {
        try {
            await axios.get(website, { timeout: 30000 });
            if (websiteStatus[website] === 'down') {
                channel.send(`${website} is back up!`);
                console.log(`[${currentTime}] ${website} is back up!`);
            }
            websiteStatus[website] = 'up';
            console.log(`[${currentTime}] ${website} is up.`);
        } catch (error) {
            if (websiteStatus[website] !== 'down') {
                channel.send(`${website} is down!`);
                console.log(`[${currentTime}] ${website} is down!`);
                websiteStatus[website] = 'down';
            }
        }
    }
}

client.login(process.env.DISCORD_TOKEN);
