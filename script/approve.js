module.exports = {
  config: {
    name: "approve",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "approve command",
    usage: "/approve",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /approve command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
