module.exports = {
    config: {
        name: "salut",
        version: "1.0",
        author: "ཋྀɞHaïtanįɞ く命ཋྀ༅ ✨",
        countDown: 5,
        role: 0,
        shortDescription: "sarcasm",
        longDescription: "sarcasm",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "salut") return message.reply("Salut humain ☺️ moi c'est 🥹Iron🩷 quelque chose me dit que t'as un soucis n'hésite pas à me parler même si c'est pour baisé ta satisfaction est ma priorité 🥵❤️‍🔥🧸");
}
};
