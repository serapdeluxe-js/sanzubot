module.exports = {
  config: {
    name: "pair",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "pair command",
    usage: "/pair",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /pair command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
