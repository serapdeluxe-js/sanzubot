module.exports = {
  config: {
    name: "gagcalc",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: gagcalc",
    usage: "+gagcalc",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +gagcalc received: ${text}`
      : `✅ +gagcalc is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
