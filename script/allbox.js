module.exports = {
  config: {
    name: "allbox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "allbox command",
    usage: "/allbox",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /allbox command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
