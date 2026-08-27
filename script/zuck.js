module.exports = {
  config: {
    name: "zuck",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "zuck command",
    usage: "/zuck",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /zuck command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
