module.exports = {
  config: {
    name: "japan",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "japan command",
    usage: "/japan",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /japan command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
