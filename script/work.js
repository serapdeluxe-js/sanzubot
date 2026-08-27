module.exports = {
  config: {
    name: "work",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "work command",
    usage: "/work",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /work command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
