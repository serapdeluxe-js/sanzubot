module.exports = {
  config: {
    name: "checkrank",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "checkrank command",
    usage: "/checkrank",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /checkrank command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
