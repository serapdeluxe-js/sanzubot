module.exports = {
  config: {
    name: "say",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "say command",
    usage: "/say",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /say command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
