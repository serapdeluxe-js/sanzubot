module.exports = {
  config: {
    name: "listbanv2",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "listbanv2 command",
    usage: "/listbanv2",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /listbanv2 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
