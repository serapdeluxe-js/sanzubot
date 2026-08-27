module.exports = {
  config: {
    name: "penis",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "penis command",
    usage: "/penis",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /penis command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
