module.exports = {
  config: {
    name: "iss",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "iss command",
    usage: "/iss",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /iss command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
