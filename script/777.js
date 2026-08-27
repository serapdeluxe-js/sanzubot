module.exports = {
  config: {
    name: "777",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "777 command",
    usage: "/777",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /777 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
