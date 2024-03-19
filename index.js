const Discord = require('discord.js-selfbot-v13');
const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('YaY Your Bot Status Changed✨');
});
app.listen(port, () => {
  console.log(`🔗 Listening to RTX: http://localhost:${port}`);
  console.log(`🔗 Powered By RTX`);
});


const statusMessages = ["Listening DDN SERVER DATA"];


let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    🐇 Logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

/**
 ██████╗░████████╗██╗░░██╗           
 ██╔══██╗╚══██╔══╝╚██╗██╔╝          
 ██████╔╝░░░██║░░░░╚███╔╝░          
 ██╔══██╗░░░██║░░░░██╔██╗░          
 ██║░░██║░░░██║░░░██╔╝╚██╗          
 ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          
GIT : https://github.com/RTX-GAMINGG/Bot-ghost-status-remover-by-RTX
  DISCORD SERVER : https://discord.gg/FUEHs7RCqz
  YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
 * **********************************************
 *   Code by RTX GAMING
 * **********************************************
 */


function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}],
    status: 'dnd',
  });

  
  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✨HAPPY NEW YEAR MY DEAR FAMILY`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️WELCOME TO 2024`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 10000);
});

const client = new Discord.Client({
    readyStatus: true,
    checkUpdate: true
});
const express = require('express')
const app = express();
const port = 8000

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'))
app.listen(port, () =>
    console.log(`Your app is listening at http://localhost:${port}`)
);

// กำหนดข้อความในเม็ดม่วง

//---------------------------------

const text1 = "Sleep In Moon Light";

const text2 = "Moon Light?";

const text3 = "Moon";

//---------------------------------


const texts = [".", "..", "..."];

const ing1 = "https://img.wattpad.com//68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f43613036625763704f4a663548773d3d2d3732393935373530372e313539643665613164366331306166323134333630393032343532352e676966?s=fit&amp;w=720&amp;h=720";
const ing2 = "https://cdn.discordapp.com/attachments/1155965892853760030/1155966065277411328/1102270930023088280.gif?ex=65494e4a&is=6536d94a&hm=879e80228cc195b2cb6b391952e3ecd3c87b9bd32827d7aaa0e9310b70c9fe4b&";

const nameButtonone = "" || "Listen to music";
const linkButtonone = "" || "https://www.twitch.tv/chilledcat_music";
const name2Buttonone = "" || "My Profile";
const link2Buttonone = "" || "https://www.youtube.com/watch?v=xMHJGd3wwZk";

const stateTexts = [
    `﹝ ${text1} ﹞`,
    `﹝ ${text2} ﹞`,
    `﹝ ${text3} ﹞`
];

app.get('/', (req, res) => {
    res.send('กำลังทำงาน');
});


client.on('ready', async () => {
  console.log(`🟣: ${client.user.username}`);

  let currentStateIndex = 0;

  const temperature = getTemperature();
  const user = new Discord.RichPresence()
    .setApplicationId('1121867777867788309')
    .setType('STREAMING')
    .setURL('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiF-_yvlOyEAxVWxDgGHY1BAfUQtwJ6BAgOEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzBukbgTN0cE&usg=AOvVaw1Li8EGbpBnEVYrOyYg7ym_&opi=89978449')
    .setName('MOON LIGHT')
    .setStartTimestamp(Date.now())
    .setAssetsLargeText(`🌡️ ${temperature.toFixed(1)} °C | 🍃 ${Math.round(client.ws.ping)} m/s`)
    .setAssetsLargeImage(ing1)
    .setAssetsSmallImage(ing2)
    .addButton(nameButtonone, linkButtonone)
   .addButton(name2Buttonone, link2Buttonone)

  client.user.setActivity(user);

  setInterval(() => {
    const nextState = stateTexts[currentStateIndex];
    currentStateIndex = (currentStateIndex + 1) % stateTexts.length;
    //user.setDetails(`〈${getCurrentTime()}〉 ⭒ 〈${client.user.username}〉`);
    user.setDetails(`〈${client.user.username}〉 ⭒ 〈${getCurrentTime()}〉`);
    user.setState(nextState);
    client.user.setActivity(user);
  }, 5000);
});

function getCurrentTime() {
  const a = new Date(Date());
  const c = { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", hour12: true };
  return a.toLocaleTimeString("en-US", c);
}

async function sendTextLoop() {
  while (true) {
    for (const text of texts) {
      await client.settings.setCustomStatus({
        text: text,
        expires: null,
      });
      await sleep(2500);
    }
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

sendTextLoop();

function getTemperature() {
  // 25
  const center = 25;
  const variance = 5;
  const temperature = center + (Math.random() * variance * 2 - variance);
  return temperature;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffleArray(stateTexts);

client.login(TOKENS);

login();
