module.exports = {
  config: {
    name: "antiout",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "antiout command",
    usage: "/antiout",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /antiout command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
