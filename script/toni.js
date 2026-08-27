module.exports = {
  config: {
    name: "toni",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "toni command",
    usage: "/toni",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /toni command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
