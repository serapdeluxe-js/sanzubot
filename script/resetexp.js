module.exports = {
  config: {
    name: "resetexp",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "resetexp command",
    usage: "/resetexp",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /resetexp command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
