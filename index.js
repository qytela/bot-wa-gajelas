const venom = require("venom-bot");

const INDOSEC_ID = "6289502797112-1624865381@g.us";

venom
  .create({
    session: "WAFansa",
    multidevice: true,
  })
  .then((client) => start(client));

const start = (client) => {
  client.onMessage(async (message) => {
    const groupId = message.chat.id;
    const isMsgGroup = message.isGroupMsg;
    console.log(groupId, isMsgGroup);
    const msgBody = message.body && message.body.toLowerCase();
    if (isMsgGroup && groupId === INDOSEC_ID) {
      if (questions(msgBody)) {
        return await client.reply(
          message.from,
          "Gaktau bro lu wibu soalnya",
          message.id
        );
      } else if (called(msgBody)) {
        return await client.reply(
          message.from,
          "Ngapa ngab, kalau ada yg mau di tanyain tanya aja",
          message.id
        );
      } else if (names(msgBody)) {
        return await client.reply(
          message.from,
          "Kesel gw juga sama dia, pukulin aja",
          message.id
        );
      } else if (thanks(msgBody)) {
        return await client.reply(message.from, "Sama sama", message.id);
      } else if (badwords(msgBody)) {
        return await client.reply(
          message.from,
          "Kok kamu kasar bang",
          message.id
        );
      } else if (satirs(msgBody)) {
        return await client.reply(message.from, "Konsol ps?", message.id);
      } else if (reject(msgBody)) {
        return await client.reply(
          message.from,
          "Orang pelit patatnya lebar",
          message.id
        );
      }
      if (not(msgBody)) {
        return await client.reply(
          message.from,
          "Ga ada yg manggil ente bro",
          message.id
        );
      }
    }
  });
};

const questions = (msgBody) => {
  if (/kenapa|ask|nanya|tolong|knp|knpa|kok/.test(msgBody)) return true;
  return false;
};

const called = (msgBody) => {
  if (/bang|bg|woi|om|gan/.test(msgBody)) return true;
  return false;
};

const names = (msgBody) => {
  if (/stipen|api|binsar/.test(msgBody)) return true;
  return false;
};

const thanks = (msgBody) => {
  if (/makasih|terimakasih|terima kasih/.test(msgBody)) return true;
  return false;
};

const badwords = (msgBody) => {
  if (/pler|peler|kontol|kntl|kntol|setres|stres/.test(msgBody)) return true;
  return false;
};

const satirs = (msgBody) => {
  if (/konsol/.test(msgBody)) return true;
  return false;
};

const reject = (msgBody) => {
  if (/gk|gak|gx|gax/.test(msgBody)) return true;
  return false;
};

const not = (msgBody) => {
  if (/apa|ap|pa|opo/.test(msgBody)) return true;
  return false;
};
