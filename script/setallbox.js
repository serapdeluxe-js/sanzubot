module.exports = {
  config: {
    name: "setallbox",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setallbox command",
    usage: "/setallbox",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setallbox command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
