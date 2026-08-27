module.exports = {
  config: {
    name: "shunteach",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "shunteach command",
    usage: "/shunteach",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /shunteach command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
