module.exports = {
  config: {
    name: "antispam",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "antispam command",
    usage: "/antispam",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /antispam command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
