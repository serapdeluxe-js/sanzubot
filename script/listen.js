module.exports = {
  config: {
    name: "listen",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "listen command",
    usage: "/listen",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /listen command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
