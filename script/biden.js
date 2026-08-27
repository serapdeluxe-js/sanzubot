module.exports = {
  config: {
    name: "biden",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "biden command",
    usage: "/biden",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /biden command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
