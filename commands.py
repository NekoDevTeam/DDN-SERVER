import discord
from discord.ext import commands
const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');

bot = commands.Bot(command_prefix='')

@bot.event
async def on_ready() :
    print("Bot Started!")

@bot.event
async def on_message(message) :
    if message.content.startswith('Hello') :
       await message.channel.send('Hi~~')
bot.run(process.env.TOKEN)
