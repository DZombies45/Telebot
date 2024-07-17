const botTelegram = require("node-telegram-bot-api");
const TOKEN = "7244422495:AAEsWUoZNEa84y5U1j6TTepj_j_QLRv3YH8";

const bot = new botTelegram(TOKEN, { polling: true });

bot.on("message", msg => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, "Received your message");
});
