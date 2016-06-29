'use strict';

//Read environment variables from .env file
require("dotenv").config();

const botkit = require("botkit");

var controller = botkit.slackbot();

controller.spawn({token:process.env.BOT_TOKEN}).startRTM();

controller.hears('ping',['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message,'Pong.');
});
