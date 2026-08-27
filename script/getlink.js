module.exports = {
  config: {
    name: "getlink",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "getlink command",
    usage: "/getlink",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /getlink command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
