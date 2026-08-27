module.exports = {
  config: {
    name: "listbox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "Command: listbox",
    usage: "+listbox",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const text = args && args.length ? args.join(" ") : "";
    const reply = text
      ? `✅ +listbox received: ${text}`
      : `✅ +listbox is available.`;
    return api.sendMessage(reply, event.threadID, event.messageID);
  }
};
