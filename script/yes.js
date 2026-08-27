module.exports = {
  config: {
    name: "yes",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "yes command",
    usage: "/yes",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /yes command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
