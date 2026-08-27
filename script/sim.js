module.exports = {
  config: {
    name: "sim",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "sim command",
    usage: "/sim",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /sim command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
