module.exports = {
  config: {
    name: "taixiu",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "taixiu command",
    usage: "/taixiu",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /taixiu command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
