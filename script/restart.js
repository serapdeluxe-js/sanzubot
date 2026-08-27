module.exports = {
  config: {
    name: "restart",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "restart command",
    usage: "/restart",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /restart command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
