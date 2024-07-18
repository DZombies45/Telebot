const botTelegram = require("node-telegram-bot-api");
require("dotenv").config();
const TOKEN = process.env.TELE_TOKEN;

const bot = new botTelegram(TOKEN, { polling: true });

bot.on("message", msg => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, "Received your message");
});
