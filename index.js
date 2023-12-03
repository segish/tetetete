const express = require('express');
const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config();

const bot = new TelegramBot('6852562057: AAGC9OGNHyMUICp9UwoE7GKlGSXRUqAevMg', { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    await bot.sendMessage(chatId,
        `እንኳን ወደ SAFARICOM M-PESA የሽልማት ቦት በደህና መጡ🙏🙏🙏

         አገልግሎታችንን ለመጠም እባክዎ የሚከተሉትን ቻናሎች ጆይን ያድርጉ

        ✅https://t.me/+1YRRxZDZbS1hY2E0✅
        ✅https://t.me/+h0xMvf3jYP5iODZk✅`);
});

const app = express();
const port = 3000; 

app.get('/', (req, res) => {
    res.send('Hello, this is a test route!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
