module.exports = {
  config: {
    name: "setjoin",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "setjoin command",
    usage: "/setjoin",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /setjoin command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
