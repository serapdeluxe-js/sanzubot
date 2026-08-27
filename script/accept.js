module.exports = {
  config: {
    name: "accept",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "accept command",
    usage: "/accept",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /accept command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
