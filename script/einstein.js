module.exports = {
  config: {
    name: "einstein",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "einstein command",
    usage: "/einstein",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /einstein command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
