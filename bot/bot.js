const { Telegraf } = require('telegraf');

const bot = new Telegraf('');

bot.start((ctx) => {
  const telegramId = ctx.from.id;
  const username = ctx.from.username || 'anonymous';
  const firstName = ctx.from.first_name || '';
  const lastName = ctx.from.last_name || '';
  const telegramName = `${firstName} ${lastName}`.trim();
  const webAppUrl = ``;

  console.log(`telegram_id: ${telegramId}, username: ${username}, telegram_name: ${telegramName}`);

  ctx.reply('', {
    reply_markup: {
      inline_keyboard: [
        [{ text: '', web_app: { url: webAppUrl } }]
      ]
    }
  });
});

bot.launch();
