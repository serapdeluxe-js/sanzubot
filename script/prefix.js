module.exports = {
  config: {
    name: "prefix",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "prefix command",
    usage: "/prefix",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /prefix command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
