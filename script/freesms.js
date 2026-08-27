module.exports = {
  config: {
    name: "freesms",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: freesms",
    usage: "+freesms",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +freesms received: ${text}`
      : `✅ +freesms is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
