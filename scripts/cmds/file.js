const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["100088416026395", "100092228388224"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage(" 𝑇'𝑎𝑠 𝑝𝑎𝑠 𝑒𝑛𝑐𝑜𝑟𝑒 𝑙'𝑎𝑔𝑒 𝑝𝑜𝑢𝑟 𝑗𝑜𝑢𝑒𝑟 𝑎𝑣𝑒𝑐 𝑐𝑒𝑡𝑡𝑒 𝑐𝑚𝑑 😆' ", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝚕𝚎 𝚏𝚒𝚌𝚑𝚒𝚎𝚛 ?? ಠωಠ.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`💫𝔫𝔬𝔱 𝔣𝔬𝔲𝔫𝔡 [✖]: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
};
