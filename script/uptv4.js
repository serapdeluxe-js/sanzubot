module.exports = {
  config: {
    name: "uptv4",
    aliases: [],
    version: "1.0.0",
    role: 0,
    hasPrefix: true,
    description: "uptv4 command",
    usage: "/uptv4",
    credits: "Sinzu",
    cooldown: 3
  },

  run: async ({ api, event, args }) => {
    const input = args?.length ? ` ${args.join(" ")}` : "";
    return api.sendMessage(
      `✅ /uptv4 command is active.${input}`,
      event.threadID,
      event.messageID
    );
  }
};
