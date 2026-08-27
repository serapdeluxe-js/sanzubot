module.exports = {
  config: {
    name: "delmsg",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "delmsg command",
    usage: "/delmsg",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /delmsg command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
