//the govbot code
//version 0.0.0
const Discord = require('discord.js');
const bot = new Discord.Client();
var faker = require('faker');

for (i = 0; i < 100; i++) {
    console.log(faker.address.country());
}