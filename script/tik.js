module.exports = {
  config: {
    name: "tik",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "tik command",
    usage: "/tik",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /tik command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
