module.exports = {
  config: {
    name: "trans",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "trans command",
    usage: "/trans",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /trans command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
