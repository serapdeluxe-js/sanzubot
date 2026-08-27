module.exports = {
  config: {
    name: "fixspam",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "fixspam command",
    usage: "/fixspam",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /fixspam command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
