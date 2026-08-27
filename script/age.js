module.exports = {
  config: {
    name: "age",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "age command",
    usage: "/age",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /age command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
